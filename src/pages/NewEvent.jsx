import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";

function NewEvent() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [event, setEvent] = useState({
    cause_id: "",
    title: "",
    description: "",
    date: "",
    time: "",
    category: "",
  });

  const [value, setValue] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getLatLongFromAddress(e) {
    try {
      const results = await geocodeByAddress(value.label);
      const tmp = await geocodeByPlaceId(value.value.place_id);
      console.log("tmp", tmp);
      const { lat, lng } = await getLatLng(results[0]);
      return { lat, lng };
    } catch (err) {
      console.log(err);
    }
  }

  async function uploadImage() {
    if (!image) {
      alert("Please select an image");
      return;
    }
    const storageRef = ref(storage, `images/${image.name + v4()}`);

    try {
      const snapshot = await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("File available at", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const API = process.env.REACT_APP_BACKEND_URL;
    // const API = process.env.REACT_APP_LOCAL_BACKEND;
    // const API = "https://happn.onrender.com";
    console.log("API", API);
    try {
      setLoading(true);
      const geo = await getLatLongFromAddress();
      const imageURL = await uploadImage();
      const newEvent = {
        ...event,
        time: event.time + ":00",
        organizer_user_id: currentUser.uid,
        latitude: geo.lat,
        longitude: geo.lng,
        address: value.label,
        img_link: imageURL,
      };

      console.log(newEvent);
      const res = await axios.post(`${API}/events`, newEvent);
      setLoading(false);
      console.log("response from backend after event submit", res);
      navigate("/event/" + res.data.id);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  console.log(value);
  return (
    <>
      {loading && <Loader />}
      <div className="container event-form-container mt-4">
        <form className="row g-3 mb-5" onSubmit={handleSubmit}>
          <h3>Create a New Event</h3>

          <div className="col-md-6">
            <label htmlFor="cause" className="form-label">
              Cause
            </label>
            <select
              name="event-type"
              className="form-select"
              id="cause"
              value={event.cause_id}
              onChange={(e) => setEvent({ ...event, cause_id: e.target.value })}
            >
              <option value="">Select a cause</option>
              <option value="1">Environmental Conservation</option>
              <option value="2">Education</option>
              <option value="3">Animal Rights</option>
              <option value="4">Societal Justice</option>
              <option value="5">Disability Rights</option>
              <option value="6">Veterans Issues</option>
              <option value="7">Mental Health Awareness</option>
            </select>
          </div>

          <div className="col-md-12">
            <label htmlFor="title" className="form-label">
              Title
            </label>

            <input
              type="text"
              className="form-control"
              id="title"
              value={event.title}
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
            />
          </div>
          <div className="row"></div>

          <div className="col-md-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>

            <textarea
              type=""
              className="form-control"
              id="description"
              rows="3"
              value={event.description}
              onChange={(e) =>
                setEvent({ ...event, description: e.target.value })
              }
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="event-type"
              className="form-select"
              id="category"
              value={event.category}
              onChange={(e) => setEvent({ ...event, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="conferences">Conferences</option>
              <option value="festivals">Festivals</option>
              <option value="sports">Sports</option>
              <option value="cultural">Cultural</option>
              <option value="workshop">Workshop</option>
              <option value="charity">Charity</option>
              <option value="community">Community</option>
              <option value="food">Food &amp; Beverage</option>

              {/* <option value="">Select a category</option>
              <option value="environmental-conservation">
                Environmental Conservation
              </option>
              <option value="education">Education</option>
              <option value="animal-rights">Animal Rights</option>
              <option value="societal-justice">Societal Justice</option>
              <option value="disability-rights">Disability Rights</option>
              <option value="veterans-issues">Veterans Issues</option>
              <option value="mental-health-awareness">
                Mental Health Awareness
              </option> */}
            </select>
          </div>
          <div className="row"></div>

          <label>Enter Address</label>
          <GooglePlacesAutocomplete
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            selectProps={{
              placeholder: "Enter the address...",
              value,
              onChange: setValue,
              openMenuOnClick: false,
            }}
          />

          {/* <div className="col-md-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>

            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              value={event.address}
              onChange={(e) => setEvent({ ...event, address: e.target.value })}
            />
          </div>

          <div className=" col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>

            <input
              type="text"
              className="form-control"
              id="city"
              value={event.city}
              onChange={(e) => setEvent({ ...event, city: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="state" className="form-label">
              State
            </label>

            <select
              id="state"
              className="form-select"
              value={event.state}
              onChange={(e) => setEvent({ ...event, state: e.target.value })}
            >
              <option value="">Choose a state</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>

            <input
              type="text"
              className="form-control"
              id="zip"
              value={event.zip}
              onChange={(e) => setEvent({ ...event, zip: e.target.value })}
            />
          </div> */}

          <div className="col-6 col-md-6">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              className="form-control"
              type="date"
              id="date"
              value={event.date}
              onChange={(e) => setEvent({ ...event, date: e.target.value })}
            />
          </div>

          <div className="col-6 col-md-6">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={event.time}
              onChange={(e) => setEvent({ ...event, time: e.target.value })}
            />
          </div>

          <div className=" col-md-6">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              className="form-control"
              type="file"
              id="image"
              // value={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="submit" className="form-label invisible">
              Image
            </label>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewEvent;

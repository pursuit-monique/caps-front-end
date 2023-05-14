import { useState } from "react";
import Navbar2 from "../components/Navbar2";
import Header from "../components/Header";

function NewEvent() {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(event);
  }

  return (
    <>
      <div className="container event-form-container my-4">
        <form className="row g-3" onSubmit={handleSubmit}>
          <h3>Create a New Event</h3>

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
            <select name="event-type" className="form-select">
              <option value="conferences">Conferences</option>
              <option value="festivals">Festivals</option>
              <option value="sports">Sports</option>
              <option value="cultural">Cultural</option>
              <option value="workshop">Workshop</option>
              <option value="charity">Charity</option>
              <option value="community">Community</option>
              <option value="food-beverage">Food &amp; Beverage</option>
            </select>
          </div>
          <div className="row"></div>
          <div className="col-md-6">
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
          </div>

          <div class="col-md-6">
            <label for="image" class="form-label">
              Image
            </label>
            <input class="form-control" type="file" id="image" />
          </div>

          <div className="col-12 col-md-6">
            <label for="submit" class="form-label invisible">
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

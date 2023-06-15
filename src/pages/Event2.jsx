import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
function Event2() {
  const API = process.env.REACT_APP_BACKEND_URL;
  // const API = "https://happn.onrender.com";
  // const API = process.env.REACT_APP_LOCAL_BACKEND;
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState("");
  const [livestreams, setLivestreams] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("backend", API);
  // get event details
  useEffect(() => {
    axios
      .get(`${API}/events/${id}`)
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => console.log(err));

    // get live streams by event id
    axios
      .get(`${API}/live/${id}`)
      .then((res) => {
        console.log(res.data);
        setLivestreams(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, API]);

  async function handleCheckIn() {
    try {
      const res = await axios.get(
        `${API}/events/${event.id}/checkin/${currentUser.uid}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLive() {
    setLoading(true);
    const res = await axios.post(`${API}/live/create-room`, {
      event_id: event.id,
      streamer_user_id: currentUser.uid,
    });
    setLoading(false);

    console.log("response", res);
    const broadcasterCode = await res.data.broadcaster_code;
    // console.log(broadcasterCode);
    navigate(`/live/${broadcasterCode}`);
  }

  function joinLive(viewerCode) {
    navigate("/live/" + viewerCode);
  }

  return (
    <div className="container">
      {loading && <Loader />}
      <div className="row gx-4 gx-lg-5 my-5">
        <div className="col-md-7">
          {/* <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
            alt="..."
          /> */}
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            // src="https://picsum.photos/400/300"
            src={event.img_link}
            alt="event cover"
          />
        </div>
        <div className="col-md-5">
          {/* <h1 className="font-weight-light">Business Name or Tagline</h1>
          <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p>
          <a className="btn btn-primary" href="#!">
            Call to Action!
          </a> */}
          <div className="event-details-container">
            <div className="event-title-wrapper">
              <h3 className="event-title">{event.title}</h3>
            </div>
            <div className="event-creator-container">
              <img
                className="avatar"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="Avatar"
              />
              <p>
                {event.f_name} {event.l_name}
              </p>

              <div className="event-categories">
                <ul>
                  <li>{event.category}</li>
                </ul>
              </div>
            </div>
            <p className="event-description">{event.description}</p>
            <p className="event-date">
              Date: {event.date?.split("T")[0]} {"  "} Time:{" "}
              {event.time?.split(":").slice(0, 2).join(":")}
            </p>

            {/* <p className="event-time">Time: {event.time}</p> */}
            <p>Users Checked In: {event.checked_in_users}</p>
            <div className="live-btn-container">
              <div>
                <div className="live-btn-wrapper">
                  <button
                    className="go-live-btn"
                    title="Go Live"
                    onClick={handleLive}
                  >
                    <i className="bx bx-camera-movie"></i>
                  </button>
                </div>
                <p className="go-live-text">Go Live</p>
              </div>
              <div>
                <div className="checkin-btn-wrapper">
                  <button
                    className="checkin-btn"
                    title="Check In"
                    onClick={handleCheckIn}
                  >
                    <i className="bx bx-check-circle"></i>
                  </button>
                </div>

                <p className="checkin-text">Check In</p>
              </div>
            </div>
          </div>
        </div>
        <h4>Live Streams : {livestreams.length} </h4>

        {livestreams.map((live) => {
          return (
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div class="row g-3">
                <div class="col-4 d-flex align-content-center">
                  <img
                    src="https://picsum.photos/600/400"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">User Name</h5>
                    {/* <p class="card-text">
                      This is a wider card with supporting text
                    </p> */}

                    <p class="card-text">
                      <button
                        class="btn btn-primary"
                        onClick={() => joinLive(live.viewer_code)}
                      >
                        Join Live
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Event2;

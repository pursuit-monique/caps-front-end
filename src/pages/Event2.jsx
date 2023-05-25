import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Event2() {
  const API = process.env.REACT_APP_BACKEND_URL;
  const { id } = useParams();
  const [event, setEvent] = useState("");
  const [organizer, setOrganizer] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/events/${id}`)
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      {/* <Header /> */}
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
            alt="event cover photo"
          />
        </div>
        <div className="col-md-5">
          {/* <h1 className="font-weight-light">Business Name or Tagline</h1> */}
          {/* <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p> */}
          {/* <a className="btn btn-primary" href="#!">
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
              <p>John Doe</p>

              <div className="event-categories">
                <ul>
                  <li>Cultural</li>
                  <li>Gathering</li>
                </ul>
              </div>
            </div>
            <p className="event-description">{event.description}</p>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.time}</p>

            <div className="live-btn-container">
              <div>
                <div className="live-btn-wrapper">
                  <button className="go-live-btn" title="Go Live">
                    <i className="bx bx-camera-movie"></i>
                  </button>
                </div>
                <p className="go-live-text">Go Live</p>
              </div>
              <div>
                <div className="checkin-btn-wrapper">
                  <button className="checkin-btn" title="Check In">
                    <i className="bx bx-check-circle"></i>
                  </button>
                </div>

                <p className="checkin-text">Check In</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event2;

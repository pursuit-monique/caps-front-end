import React from "react";
import Header from "../components/Header";

function Event2() {
  return (
    <div className="container">
      {/* <Header /> */}
      <div class="row gx-4 gx-lg-5 my-5">
        <div class="col-md-7">
          {/* <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
            alt="..."
          /> */}
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="https://picsum.photos/400/300"
            alt=""
          />
        </div>
        <div class="col-md-5">
          {/* <h1 class="font-weight-light">Business Name or Tagline</h1> */}
          {/* <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p> */}
          {/* <a class="btn btn-primary" href="#!">
            Call to Action!
          </a> */}
          <div className="event-details-container">
            <div className="event-title-wrapper">
              <h3 className="event-title">National Pride</h3>
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
            <p className="event-description">
              Labore et consectetur magna officia ad fugiat eiusmod deserunt.
              Tempor ea officia ipsum elit mollit cillum sit aliquip dolore sint
              anim consequat consectetur tempor velit exercitation occaecat
              cupidatat proident.Amet nisi nulla est cupidatat sit reprehenderit
              ad consequat anim dolor non.
            </p>
            <div className="live-btn-container">
              <div>
                <div className="live-btn-wrapper">
                  <button className="go-live-btn" title="Go Live">
                    <i class="bx bx-camera-movie"></i>
                  </button>
                </div>
                <p className="go-live-text">Go Live</p>
              </div>
              <div>
                <div className="checkin-btn-wrapper">
                  <button className="checkin-btn" title="Check In">
                    <i class="bx bx-check-circle"></i>
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

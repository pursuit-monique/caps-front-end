import React from "react";
import Header from "../components/Header";
import "./Event.css";

export default function Event() {
  return (
    <>
      <section className="show-event-container">
        {/* <Header /> */}

        <div className="event-img-wrapper"></div>

        {/* <img
          src="https://picsum.photos/536/354"
          alt=""
          className="event-cover-img"
        /> */}
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
      </section>
    </>
  );
}

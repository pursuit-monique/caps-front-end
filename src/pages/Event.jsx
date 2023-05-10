import React from "react";
import Header from "../components/Header";
import "./Event.css";

export default function Event() {
  return (
    <>
      <section className="show-event-container">
        <Header />

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
          <div className="event-organizer"></div>
          <p className="event-description">
            Labore et consectetur magna officia ad fugiat eiusmod deserunt.
            Tempor ea officia ipsum elit mollit cillum sit aliquip dolore sint
            anim consequat consectetur tempor velit exercitation occaecat
            cupidatat proident.Amet nisi nulla est cupidatat sit reprehenderit
            ad consequat anim dolor non.
          </p>
          <div className="live-btn-container">
            <button className="go-live-btn">
              <i class="bx bx-camera-movie"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

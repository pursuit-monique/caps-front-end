import React from "react";
import { Link } from "react-router-dom";
import location from "../assets/pin.png";
import { logout } from "../firebase/auth";
import "./Header.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5 navbar-wrapper">
          <div>
            <Link className="navbar-brand" to="/index">
              HAPP'N
            </Link>
            <img className="logo" src={location} alt="location pin logo" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {/* <img
            className="avatar navbar-toggler-icon"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Avatar"
          /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/index"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new/event">
                  New Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="d-flex ">
              <img
                className="avatar"
                src="https://img.favpng.com/18/23/24/computer-icons-user-profile-portable-network-graphics-vector-graphics-png-favpng-31THvNXgnrmpMkkCSfpupKPpH.jpg"
                alt="Avatar"
              />
              <button className="btn btn-outline-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

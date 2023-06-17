import React from "react";
import { Link } from "react-router-dom";
import location from "../assets/pin.png";
import "./Header.css";

function Navbar2() {
  return (
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/index">
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
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" href="#!">
                    All Products
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#!">
                    Popular Items
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#!">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                0
              </span>
            </button>
          </form> */}
          {/* <div className="d-flex">
            <img
              className="avatar"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="Avatar"
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;

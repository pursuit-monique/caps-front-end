import React from "react";
import { Link } from "react-router-dom";
import location from "../assets/location2.png";

function Navbar2() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5 navbar-wrapper">
        <div>
          <Link class="navbar-brand" to="/index">
            HAPP'N
          </Link>
          <img className="logo" src={location} alt="location pin logo" />
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <img
            className="avatar navbar-toggler-icon"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Avatar"
          />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 invisible">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="#!">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#!">
                About
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" href="#!">
                    All Products
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="#!">
                    Popular Items
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#!">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form> */}
          <div className="d-flex">
            <img
              className="avatar"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;

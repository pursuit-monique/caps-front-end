import { useState } from "react";
import { useParams } from "react-router-dom";
import uploadImage from "../helpers/helpers";
import "./Userprofile.css";

export default function Userprofile() {
  const [image, setImage] = useState(null);
  const { userID } = useParams();
  console.log(userID);
  async function handleSubmit(e) {
    e.preventDefault();
    const profilePicUrl = await uploadImage(image);
  }
  return (
    <section>
      <div className="main-content pb-3 mb-5 user-profile">
        {/* <!-- Header --> */}
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* <!-- Mask --> */}
          <span className="mask bg-gradient-default opacity-25"></span>
          {/* <!-- Header container --> */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Hello Jesse</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
                {/* <a href="#!" className="btn btn-info">
                  Edit profile
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    {/* <a href="#" className="btn btn-sm btn-info mr-4">
                      Connect
                    </a>
                    <a href="#" className="btn btn-sm btn-default float-right">
                      Message
                    </a> */}
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2"></i>Solution
                      Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2"></i>University of
                      Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      {/* <a href="#!" className="btn btn-sm btn-primary">
                        Settings
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        {/* <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              id="input-username"
                              className="form-control form-control-alternative"
                              placeholder="Username"
                              value="lucky.jesse"
                            />
                          </div>
                        </div> */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder="jesse@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              placeholder="First name"
                              value="Lucky"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              placeholder="Last name"
                              value="Jesse"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* <!-- Description --> */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>About Me</label>
                        <textarea
                          rows="4"
                          className="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                        >
                          {/* A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source. */}
                        </textarea>
                      </div>
                    </div>
                    <h6 className="heading-small text-muted mb-4">
                      Profile Photo
                    </h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Upload profile photo
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        className="btn btn-info col-lg-6 mt-3"
                        type="submit"
                      >
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

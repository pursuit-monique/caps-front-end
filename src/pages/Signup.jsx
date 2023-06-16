import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase/auth";
import cityscape from "../assets/cityscape.jpeg";
import "./Signup.css";
import Loader from "../components/Loader";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const API = process.env.REACT_APP_BACKEND_URL;
    const firebaseUser = await registerWithEmailAndPassword(
      user.name,
      user.email,
      user.password
    );
    console.log(firebaseUser);
    localStorage.setItem("user", JSON.stringify(firebaseUser));
    await axios.post(`${API}/users`, {
      id: firebaseUser.uid,
      email: user.email,
      f_name: user.f_name,
      l_name: user.l_name,
      user_profile_link: "https://i.pravatar.cc/300",
    });
    setLoading(false);
    navigate("/index");
  }

  return (
    <section className="login-container forms">
      {loading && <Loader />}
      <img
        src={cityscape}
        alt="houses"
        className="signup-cover-img displayimg"
      />
      <div className="form signup testing">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="text"
                placeholder="First Name"
                className="input"
                value={user.f_name}
                onChange={(e) => setUser({ ...user, f_name: e.target.value })}
              />
            </div>
            <div className="field input-field">
              <input
                type="text"
                placeholder="Last Name"
                className="input"
                value={user.l_name}
                onChange={(e) => setUser({ ...user, l_name: e.target.value })}
              />
            </div>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            {/* <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <i className="bx bx-hide eye-icon"></i>
            </div> */}
            <div className="field button-field">
              <button type="submit">Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <Link to="/login" className="link login-link">
                Login
              </Link>
            </span>
          </div>
        </div>
        {/* <div className="line"></div>
         <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div> *
         <div className="media-options">
        <a href="#" className="field google">
          <img src="google.png" alt="google logo" />
          <span>Login with Google</span>
        </a>
      </div>  */}
      </div>
    </section>
  );
}

export default Signup;

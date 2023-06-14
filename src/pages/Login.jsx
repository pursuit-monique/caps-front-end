import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle, logInWithEmailAndPassword } from "../firebase/auth";
import cityscape from "../assets/cityscape.jpeg"
import "./Login.css";

export default function SignupLogin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  // const API = process.env.REACT_APP_BACKEND_URL;
  const API = process.env.REACT_APP_LOCAL_BACKEND;

  async function googleLogin() {
    try {
      const firebaseUser = await signInWithGoogle();
      localStorage.setItem("user", JSON.stringify(firebaseUser));
      console.log("firebaseUser in login", firebaseUser);
      await axios.post(`${API}/users`, {
        id: firebaseUser.uid,
        email: firebaseUser.email,
        f_name: firebaseUser.displayName.split(" ")[0],
        l_name: firebaseUser.displayName.split(" ")[1],
        user_profile_link: "",
      });
      navigate("/index");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  async function emailLogin() {
    try {
      const firebaseUser = await logInWithEmailAndPassword(
        user.email,
        user.password
      );
      localStorage.setItem("user", JSON.stringify(firebaseUser));

      navigate("/index");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailLogin();
  }

  return (
    <section className="login-container forms">
      <div className="login-wrapper">
        <img
          src={cityscape}
          alt="houses"
          className="signup-cover-img displayimg"
        />

        <div className="form login testing">
          <div className="form-content">
            <header className="align-left">Welcome</header>
            <h6 className="subtitle">Create an account</h6>
            <form onSubmit={handleSubmit}>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="input emailbg"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password passwordbg"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="form-link">
                {/* <a href="#" className="forgot-pass">
                  Forgot password?
                </a> */}
              </div>
              <div className="field button-field">
                <button className="login-btn" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <Link to="/signup" className="link signup-link">
                  Signup
                </Link>
              </span>
            </div>
          </div>
          <div className="line"></div>
          {/* <div className="media-options"> 
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div> */}

          <div className="media-options">
            <button className="field google" onClick={googleLogin}>
              <img src="google.png" alt="" className="google-img" />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

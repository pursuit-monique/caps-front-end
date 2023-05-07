import "./SignupLogin.css";
import {
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
} from "../firebase/auth";

export default function SignupLogin() {
  async function googleLogin() {
    try {
      await signInWithGoogle();
      //   navigate("/index");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section className="login-container forms">
      <div className="login-wrapper">
        <img
          src="https://images.unsplash.com/photo-1558224752-394621ba6925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1714&q=80"
          alt="houses"
          className="signup-cover-img"
        />
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <a href="#" className="link signup-link">
                  Signup
                </a>
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

        {/* <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
              />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Already have an account?{" "}
              <a href="#" className="link login-link">
                Login
              </a>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src="google.png" alt="google logo" />
            <span>Login with Google</span>
          </a>
        </div>
      </div> */}
      </div>
    </section>
  );
}

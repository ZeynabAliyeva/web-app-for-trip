import signInLeftPhoto from "../../assets/images/signInLeftPhoto.png";
import touristaLogo from "../../assets/icons/touristaLogo.png";
import googleIcon from "../../assets/icons/googleIcon.png";
import appleIcon from "../../assets/icons/appleIcon.png";
import facebookIcon from "../../assets/icons/facebookIcon.png";
import "./index.css";
import { Link } from "react-router-dom";

function SignInFeature() {
  return (
    <div className="signIn-Wrapper">
      <div className="signIn-left">
        <img src={signInLeftPhoto} alt="#" className="signin-left__photo"/>
      </div>
      <div className="signIn-right">
        <img src={touristaLogo} alt="#" className="tourist-logo" />
        <main className="signIn-form_container">
          <h1>Sign in for your exciting journey</h1>
          <form className="signIn-form">
            <label htmlFor="email" className="form-in_label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="someone@example.com"
            />
            <label htmlFor="password" className="form-in_label">
              Password
            </label>
            <input type="password" name="password" />
            <Link to="/forgotPassword" className="forgot-pass_text">
              Forgot password?
            </Link>
            <button type="submit" className="sigIn-btn">
              Sign in
            </button>
          </form>
          <div className="or-socialnext_text">
            <span>or use one of this</span>
          </div>
          <div className="socialMedia">
            <button className="socialMedia-btn">
              <a href="https://www.google.com/">
                <img src={googleIcon} alt="#" />
              </a>
            </button>
            <button className="socialMedia-btn">
              <a href="https://www.apple.com/">
                <img src={appleIcon} alt="#" />
              </a>
            </button>
            <button className="socialMedia-btn">
              <a href="https://www.facebook.com/">
                <img src={facebookIcon} alt="#" />
              </a>
            </button>
          </div>
        </main>
        <span className="dont-account_text">
          Don’t have an account?{" "}
          <Link to="/createAccount">Create one for new adventure!</Link>
        </span>
      </div>
    </div>
  );
}

export default SignInFeature;

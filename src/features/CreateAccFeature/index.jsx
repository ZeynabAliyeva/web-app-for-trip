import forgotPassLeftPhoto from "../../assets/images/signInLeftPhoto.png";
import touristaLogo from "../../assets/icons/touristaLogo.png";
import googleIcon from "../../assets/icons/googleIcon.png";
import appleIcon from "../../assets/icons/appleIcon.png";
import facebookIcon from "../../assets/icons/facebookIcon.png";
import "./style.css";
function CreateAccFeature() {
  return (
    <div className="createAcc-Wrapper">
      <div className="createAcc-left">
        <img src={forgotPassLeftPhoto} alt="#" />
      </div>
      <div className="createAcc-right">
        <img src={touristaLogo} alt="#" className="tourist-logo" />
        <main className="createAcc-form_container">
          <h1>Create an account to start trip planning</h1>
          <form className="createAcc-form">
            <label htmlFor="email" className="form-in_label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="someone@example.com"
            />
            <button type="submit" className="createAcc-btn">
              Start trip planning
            </button>
          </form>
          <div className="or-socialnext_text">
            <span>Sign up with</span>
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
        <span className="createAcc_text">
          By creating an account, you agree to elsewheres <br />{" "}
          <a>Terms of Use </a>
          and <a>Privacy Policy.</a>
        </span>
      </div>
    </div>
  );
}

export default CreateAccFeature;

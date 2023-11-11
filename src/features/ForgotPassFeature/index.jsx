import forgotPassLeftPhoto from "../../assets/images/signInLeftPhoto.png";
import touristaLogo from "../../assets/icons/touristaLogo.png";
import "./style.css"
function ForgotPassFeature() {
  return (
    <div className="forgotPass-Wrapper">
      <div className="fortgotPass-left">
        <img src={forgotPassLeftPhoto} alt="#" />
      </div>
      <div className="forgotPass-right">
        <img src={touristaLogo} alt="#" className="tourist-logo" />
        <main className="forgotPass-form_container">
          <h1>Looking to change your password?</h1>
          <p>
            Enter your email below and well send you instructions on how to
            reset your password.
          </p>
          <form className="forgotPass-form">
            <label htmlFor="email" className="form-in_label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="someone@example.com"
            />
            <button type="submit" className="forgotPass-btn">
              Reset my password
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ForgotPassFeature;

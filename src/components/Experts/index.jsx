import expertLeftPhoto from "../../assets/images/expertLeftPhoto.png";
import expertRightPhoto from "../../assets/images/expertRightPhoto.png";
import topResponsivePhoto from "../../assets/images/topResponsivePhoto.png";
import bottomResponsivePhoto from "../../assets/images/bottomResponsivePhoto.png";
import "./style.css";
function Experts() {
  return (
    <div className="experts-wrapper">
      <h1>Our Local Experts</h1>
      <div className="experts-container">
        <div className="left-box">
          <img src={expertLeftPhoto} alt="#" />
          <p className="message-text__left">
            Why trust Gary in Florida to plan your trip to South Africa?
          </p>
        </div>
        <div className="right-box">
          <img src={expertRightPhoto} alt="#" />
          <p className="message-text__right">
            When Angela in Johannesburg knows best.
          </p>
        </div>
      </div>
      <div className="experts-responsive__container">
        <div className="top-responsive__box">
          <img className="expert-img" src={topResponsivePhoto} alt="#" />
          <p className="message-text__top">
            Why trust Gary in Florida to plan your trip to South Africa?
          </p>
        </div>
        <div className="bottom-responsive__box">
          <img className="expert-img" src={bottomResponsivePhoto} alt="#" />
          <p className="message-text__bottom">
            When Angela in Johannesburg knows best.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experts;

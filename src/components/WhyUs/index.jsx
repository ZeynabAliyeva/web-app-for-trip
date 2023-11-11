import mapIcon from "../../assets/icons/mapIcon.png";
import bagajIcon from "../../assets/icons/bagajIcon.png";
import peopleIcon from "../../assets/icons/peopleIcon.png";
import "./style.css";
function WhyUs() {
  return (
    <div className="whyUs-wrapper">
      <h1>Why us?</h1>
      <div className="whyUs-container">
        <div className="inner-container">
          <div className="icon-box">
            <img src={mapIcon} alt="#" className="map-icon" />
          </div>
          <p>
            More than 149 travel titles <br />
            currently in print
          </p>
        </div>
        <div className="inner-container">
          <div className="icon-box">
            <img src={bagajIcon} alt="#" className="map-icon" />
          </div>
          <p>
            Supporting millions of travellers
            since 1982
          </p>
        </div>
        <div className="inner-container">
          <div className="icon-box">
            <img src={peopleIcon} alt="#" className="map-icon" />
          </div>
          <p>
            Our utstanding customer
            <br />
            satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

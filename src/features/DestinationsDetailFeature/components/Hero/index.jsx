import "./style.css";
import calendar from "../../../../assets/icons/calendarIcon.png";
import climate from "../../../../assets/icons/sun.png";
import timezone from "../../../../assets/icons/globalIcon.png";
import currency from "../../../../assets/icons/dollarIcon.png";
import locallanguage from "../../../../assets/icons/locallanguage.png";
function Hero() {
  return (
    <div className="detail-hero__wrapper">
        <h1>Italy</h1>
        <p className="pr-text">
          Trips you couldnt plan, even if you wanted to.
        </p>
        <button className="detail-create__btn">Create a trip</button>

      <div className="detail-info__container">
        <div className="country-info">
          <div>
            <img src={calendar} alt="#" className="info-icon" />
          </div>
          <div className="info-right__box">
            <span className="country-info__head">BEST TIME TO VISIT</span>
            <p className="first-paragraf info-head__innerText">
              High s/ May-Sept
            </p>
          </div>
        </div>
        <div className="empty-line"></div>
        <div className="country-info">
          <div>
            <img src={climate} alt="#" className="info-icon" />
          </div>
          <div className="info-right__box">
            <span className="country-info__head">CLIMATE</span>
            <p className="first-paragraf info-head__innerText">High 32°C</p>
            <p className="info-head__innerText">Low 0°C</p>
          </div>
        </div>
        <div className="empty-line"></div>

        <div className="country-info">
          <div>
            <img src={timezone} alt="#" className="info-icon" />
          </div>
          <div className="info-right__box">
            <span className="country-info__head">Central European</span>
            <p className="first-paragraf info-head__innerText">Time (UTC +1)</p>
            <p className="info-head__innerText">English</p>
          </div>
        </div>
        <div className="empty-line"></div>
        <div className="country-info">
          <div>
            <img src={currency} alt="#" className="info-icon" />
          </div>
          <div className="info-right__box">
            <span className="country-info__head">CURRENCY</span>
            <p className="first-paragraf info-head__innerText">Euro</p>
            <p className="info-head__innerText">Dollar</p>
          </div>
        </div>
        <div className="empty-line"></div>
        <div className="country-info">
          <div>
            <img src={locallanguage} alt="#" className="info-icon" />
          </div>
          <div className="info-right__box">
            <span className="country-info__head">LOCAL LANGUAGE</span>
            <p className="first-paragraf info-head__innerText">Italian</p>
            <p className="info-head__innerText">English</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

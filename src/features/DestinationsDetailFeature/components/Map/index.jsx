import "./style.css";
import arrowLeft from "../../../../assets/icons/arrow-left.png";
import arrowRight from "../../../../assets/icons/arrow-right.png";
import amalfi from "../../../../assets/images/amalfiDetailPage.png";
function Map() {
  return (
    <div className="map-wrapper">
      <div className="map-tops">
        <p className="map-header__content">Tops things to do</p>
        <div className="btns-container">
          <button className="btn">
            <img src={arrowLeft} alt="#" />
          </button>
          <button className="btn">
            <img src={arrowRight} alt="#" />
          </button>
        </div>
      </div>
      <div className="amalfi-container">
        <img src={amalfi} alt="#" className="amalfi-photo" />
        <p className="amalfi-content">
          Have the drive of your life on the cliff roads of the <br/>Amalfi Coast
        </p>
      </div>
    </div>
  );
}

export default Map;

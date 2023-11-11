import "./style.css";
import arrowIcon from "../../assets/icons/arrowIcon.png";
import { Link } from "react-router-dom";
function LookingDestinations() {
  return (
    <div className="looking-wrapper">
      <p>Looking to go elsewhere?</p>
      <button className="looking-wrapper_btn">
        <Link to="/destinations">
          Our destinations <img src={arrowIcon} alt="#" />
        </Link>
      </button>
    </div>
  );
}

export default LookingDestinations;

import serchIcon from "../../../../assets/icons/searchIcon.png"
import "./style.css"
function Hero() {
  return (
    <div className="hero_wrapper">
      <h1>We create trips you love</h1>
      <p>Trips you couldnt plan, even if you wanted to.</p>
      <div className="hero-search">
        <input type="text" placeholder="Where do you want to go?" />
        <button className="hero-search_btn">
          <img src={serchIcon} />
        </button>
      </div>
    </div>
  );
}

export default Hero;

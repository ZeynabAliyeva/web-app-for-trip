import "./style.css";
import bannerHikingIcon from "../../assets/icons/bannerHikingIcon.png";
function Banner({ data }) {
  return (
    <div className="banner-wrapper">
      <img src={data.img} alt="#" className="banner" />
      <div className="banner-text_container">
        <div className="banner-text">
          <p>{data.text}</p>
          <p>{data.secondText}</p>
          <p>{data.subTitle}</p>
          <p>{data.title}</p>
        </div>
        <div className="trip-crafted_container">
          <img src={bannerHikingIcon} alt="#" className="bannerHikingIcon" />
          <div className="trip-crafted">
            <p>{data.trip}</p>
            <span className="hikerName">
              {data.hikerName ? data.hikerName : <img src={data.stars} />}
            </span>
            <img src={bannerHikingIcon} alt="#" />
            <span className="hikerCountry">{data.hikerCountry}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

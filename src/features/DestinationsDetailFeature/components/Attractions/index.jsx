import vatican from "../../../../assets/images/vaticanMuseums.png";
import colosseum from "../../../../assets/images/colosseum.png";
import stpetersBasilica from "../../../../assets/images/stpetersBasilica.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

function Attractions() {
  const data = [
    {
      img: vatican,
      title: "Vatican museums",
      subtitle:
        "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    },
    {
      img: colosseum,
      title: "Colosseum",
      subtitle:
        "Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…",
    },
    {
      img: stpetersBasilica,
      title: "St Peter’s basilica",
      subtitle:
        "In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica.Built atop a 4th…",
    },
  ];
  return (
    <div className="attractions-wrapper">
      <h1 className="attractions-header">
        Must-see attractions for your itinerary
      </h1>
      <div className="attractions-container">
        {data.map((attraction) => (
          <div className="attraction-container">
            <img src={attraction.img} alt="#" className="attraction-photo" />
            <div className="info-box">
              <p className="attraction-title">{attraction.title}</p>
              <p className="attraction-subTitle">{attraction.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        {data.map((table) => (
          <SwiperSlide key={table.title} className="table-inner_wrapper">
            <div className="img-container">
              <img src={table.img} alt="#" />
            </div>
            <div className="detail-container">
              <p>{table.country} TRIP</p>
              <p>{table.title}</p>
              <div className="daily-amount_container">
                <span>{table.days} days</span>
                <span>
                  From <span className="amount-text">{table.price}</span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Attractions;

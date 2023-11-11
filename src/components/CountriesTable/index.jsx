import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";
function CountriesTable({ title, data }) {
  return (
    <div className="countries-table_wrapper">
      <h1>{title}</h1>
      <div className="tables-container">
        {data.map((table) => (
          <div key={table.title} className="table-inner_wrapper">
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

export default CountriesTable;

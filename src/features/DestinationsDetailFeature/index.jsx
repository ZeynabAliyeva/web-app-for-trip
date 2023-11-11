import bannerPhoto from "../../assets/images/destinationsDetail.png";
import starsIcon from "../../assets/icons/stars.png";
import italyDestinations from "../../assets/images/italyDestinations.png";
import portugalDestinations from "../../assets/images/portugalDestinations.png";
import turkiyeDestinations from "../../assets/images/turkiyeDestinations.png";
import icelandDestinations from "../../assets/images/icelandDestinations.png";
import costaRikaDestinations from "../../assets/images/costaRikaDestinations.png";
import argentinaDestinations from "../../assets/images/argentinaDestinations.png";
import CountriesTable from "../../components/CountriesTable";
import Banner from "../../components/Banner";
import JoinRevolution from "../../components/JoinRevolution";
import LookingDestinations from "../../components/LookingDestinations";
import Hero from "../DestinationsDetailFeature/components/Hero";
import Map from "./components/Map";
import Attractions from "./components/Attractions";
import TripPlan from "./components/TripPlan";
function DestinationsDetailFeature() {
  let banner = {
    img: bannerPhoto,
    text: "We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome.",
    trip: "Trip crafted by",
    stars: starsIcon,
    hikerCountry: "18 June 2024",
  };
  let topDestinationsDetail = [
    {
      img: italyDestinations,
      country: "ITALY",
      title: "International Italy",
      days: "34",
      price: "$199.00",
    },
    {
      img: portugalDestinations,
      country: "PORTUGAL",
      title: "International Portugal",
      days: "54",
      price: "$250.00",
    },
    {
      img: turkiyeDestinations,
      country: "TURKEY",
      title: "International Turkiye",
      days: "19",
      price: "$400.00",
    },
    {
      img: icelandDestinations,
      country: "ICELAND",
      title: "International Iceland",
      days: "105",
      price: "$299.00",
    },
    {
      img: costaRikaDestinations,
      country: "COSTA RICA",
      title: "International Costa Rica",
      days: "23",
      price: "$250.00",
    },
    {
      img: argentinaDestinations,
      country: "ARGENTINA",
      title: "International Argentina",
      days: "87",
      price: "$400.00",
    },
  ];
  return (
    <div>
      <Hero />
      <CountriesTable data={topDestinationsDetail} title={"Available trips"} />
      <Map/>
      <Attractions/>
      <Banner data={banner} />
      <TripPlan/>
      <LookingDestinations />
      <JoinRevolution />
    </div>
  );
}

export default DestinationsDetailFeature;

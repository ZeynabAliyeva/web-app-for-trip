import LookingDestinations from "../../components/LookingDestinations";
import JoinRevolution from "../../components/JoinRevolution";
import Banner from "../../components/Banner";
import Hero from "./component/Hero";
import CountriesTable from "../../components/CountriesTable";
import WhyUs from "../../components/WhyUs";
import Experts from "../../components/Experts";
import spain from "../../assets/images/countryPhoto.png";
import italy from "../../assets/images/italy.png";
import turkey from "../../assets/images/turkey.png";
import brandSpain from "../../assets/images/brandSpain.png";
import brandItaly from "../../assets/images/brandItaly.png";
import brandTurkey from "../../assets/images/brandTurkey.png";
import taiwan from "../../assets/images/taiwan.png";
import thailand from "../../assets/images/thailand.png";
import china from "../../assets/images/china.png";
import bannerHomePage from "../../assets/images/bannerHomePage.png";

function HomeFeature() {
  let trendingNow = [
    {
      img: spain,
      country: "SPAIN",
      title: "Magical Madrid To Marrakech By Train",
      days: "12",
      price: "$1299.00",
    },
    {
      img: italy,
      country: "ITALY",
      title: "Spectacular Sicily",
      days: "5",
      price: "$250.00",
    },
    {
      img: turkey,
      country: "TURKEY",
      title: "International Istanbul",
      days: "7",
      price: "$400.00",
    },
  ];
  let brandNewTrips = [
    {
      img: brandSpain,
      country: "SPAIN",
      title: "Magical Madrid To Marrakech By Train",
      days: "12",
      price: "$1299.00",
    },
    {
      img: brandItaly,
      country: "ITALY",
      title: "Spectacular Sicily",
      days: "5",
      price: "$250.00",
    },
    {
      img: brandTurkey,
      country: "TURKEY",
      title: "International Istanbul",
      days: "7",
      price: "$400.00",
    },
  ];
  let europe = [
    {
      img: brandSpain,
      country: "ICELAND",
      title: "Volcanic Iceland",
      days: "7",
      price: "$2299.00",
    },
    {
      img: brandItaly,
      country: "SCOTLAND",
      title: "The Scottish Highlands",
      days: "7",
      price: "$1687.00",
    },
    {
      img: brandTurkey,
      country: "PORTUGAL",
      title: "Atlantic Azores",
      days: "6",
      price: "$1220.00",
    },
  ];
  let asia = [
    {
      img: china,
      country: "CHINA",
      title: "Icons Of China",
      days: "5",
      price: "$1399.00",
    },
    {
      img: thailand,
      country: "THAILAND",
      title: "Cambodia & Vietnam",
      days: "7",
      price: "$1900.00",
    },
    {
      img: taiwan,
      country: "TAIWAN",
      title: "A Taste Of Taiwan",
      days: "6",
      price: "$1220.00",
    },
  ];
  let banner = {
    img: bannerHomePage,
    text: "“Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food spots. He even met us for a coffee to make sure we had everything we needed.",
    secondText: "Thanks Tiago!”",
    subTitle: "Charlie, rappelling down a 370-foot waterfall",
    title: "The Azores",
    trip: "Trip crafted by",
    hikerName: "Tiago",
    hikerCountry: "Local expert in Portugal",
  };
  return (
    <>
      <Hero />
      <CountriesTable data={trendingNow} title={"Trending Now"} />
      <CountriesTable data={brandNewTrips} title={"Brand new trips"} />
      <WhyUs />
      <Experts />
      <Banner data={banner} />
      <CountriesTable data={europe} title={"Europe"} />
      <CountriesTable data={asia} title={"Asia"} />
      <LookingDestinations />
      <JoinRevolution />
    </>
  );
}

export default HomeFeature;

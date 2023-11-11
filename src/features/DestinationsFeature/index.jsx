import CountriesTable from "../../components/CountriesTable";
import CountriesList from "./components/CountriesList"
import Hero from "./components/Hero";
import italyDestinations from "../../assets/images/italyDestinations.png";
import portugalDestinations from "../../assets/images/portugalDestinations.png";
import turkiyeDestinations from "../../assets/images/turkiyeDestinations.png";
import icelandDestinations from "../../assets/images/icelandDestinations.png";
import costaRikaDestinations from "../../assets/images/costaRikaDestinations.png";
import argentinaDestinations from "../../assets/images/argentinaDestinations.png";
import bannerDestinations from "../../assets/images/bannerDestinations.png";
import Banner from "../../components/Banner";
import JoinRevolution from "../../components/JoinRevolution";
function DestinationsFeature() {
  let topDestinations = [
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
  let banner = {
    img: bannerDestinations,
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
      <CountriesList />
      <CountriesTable data={topDestinations} title={"Top Destinations"} />
      <Banner data={banner} />
      <JoinRevolution/>
    </>
  );
}

export default DestinationsFeature;

import React from "react";
import Hero from "./components/Hero";
import Buttons from "./components/Buttons";
import Articles from "./components/Articles";
import LookingDestinations from "../../components/LookingDestinations";
import JoinRevolution from "../../components/JoinRevolution";

function BlogFeature() {
  return (
    <div>
      <Hero />
      <Buttons />
      <Articles />
      <LookingDestinations />
      <JoinRevolution/>
    </div>
  );
}

export default BlogFeature;

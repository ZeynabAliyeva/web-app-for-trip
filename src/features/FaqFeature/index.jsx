import Accordion from "./components/Accordion";
import Hero from "./components/Hero";
import "./style.css";
function FaqFeature() {
  return (
    <>
      <Hero />
      <div className="accordion-wrapper">
        <Accordion />
      </div>
    </>
  );
}

export default FaqFeature;

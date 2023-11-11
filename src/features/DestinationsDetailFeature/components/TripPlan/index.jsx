import "./style.css";
import todo from "../../../../assets/icons/bestThings.png";
import thingsKnow from "../../../../assets/icons/thingsKnow.png";
import transportation from "../../../../assets/icons/transportation.png";
import visa from "../../../../assets/icons/visa.png";
import money from "../../../../assets/icons/money.png";
import kids from "../../../../assets/icons/kids.png";
function TripPlan() {
  return (
    <div className="trip-plan__wrapper">
      <h1>Expert guidance to help you <br/>plan your trip</h1>
      <div className="plans-container">
        <div className="plan-box">
          <div className="icons-box">
            <img src={todo} alt="#" className="plan-icon" />
          </div>
          <div className="explanation-box">
            <p>Best Things to Do</p>
            <p>
              Italy has so many delights to offer its visitors, it's hard to
              know where to start. Here's our pick of the best experiences Italy
              has to offer you.
            </p>
          </div>
        </div>
        <div className="plan-box">
          <div className="icons-box">
            <img src={thingsKnow} alt="#" className="plan-icon" />
          </div>
          <div className="explanation-box">
            <p>Things to Know</p>
            <p>
              With so many attractions, it's hard to know where to begin with a
              trip to Italy. Here's some local insight into the essential things
              to know before you go.
            </p>
          </div>
        </div>
        <div className="plan-box">
          <div className="icons-box">
            <img src={transportation} alt="#" className="plan-icon" />
          </div>
          <div className="explanation-box">
            <p>Transportation</p>
            <p>
              Your guide to traveling independently across Italy, from the Alps
              to the islands.
            </p>
          </div>
        </div>
        <div className="plan-box">
          <div className="icons-box">
            <img src={visa} alt="#" className="plan-icon" />
          </div>
          <div className="explanation-box">
            <p>Visa Requirements</p>
            <p>
              Italy is one of the most visited countries in Europe and its many
              attractions are hard to resist. Find out if you need a visa before
              you go.
            </p>
          </div>
        </div>
        <div className="plan-box">
          <div className="icons-box">
            <img src={money} alt="#" className="plan-icon" />
          </div>
          <div className="explanation-box">
            <p>Money and Costs</p>
            <p>
              These top budget tips can help you save money while exploring
              Italy.
            </p>
          </div>
        </div>
        <div className="plan-box">
          <div className="icons-box">
            <img src={kids} alt="#" className="plan-icon" />
          </div>
          <div className="explanation-box">
            <p>Traveling with Kids</p>
            <p>
              Experience the best of Italy as a family with this guide to the
              top things to do there with kids.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripPlan;

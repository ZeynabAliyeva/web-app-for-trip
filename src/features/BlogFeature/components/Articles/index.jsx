import "./style.css";
import food from "../../../../assets/images/food.png";
import seeDo from "../../../../assets/images/seeDo.png";
import inspiration from "../../../../assets/images/inspiration.png";
import travelTips from "../../../../assets/images/travelTips.png";
import drink from "../../../../assets/images/drink.png";
function Articles() {
  return (
    <div className="articles-wrapper">
      <div className="articles-top__container">
        <div className="article-item">
          <img src={food} alt="#" />
          <div className="article-info__container">
            <p className="article-title">Food & Drink</p>
            <p className="article-sub__title">
              Founded by Pope Julius II in the early 16th century and enlarged
              by successive pontiffs, the Vatican Museums boast one of the
              world's greatest art…
            </p>
          </div>
        </div>
        <div className="article-item">
          <img src={seeDo} alt="#" />
          <div className="article-info__container">
            <p className="article-title">See & Do</p>
            <p className="article-sub__title">
              Everyone wants to see the Colosseum, and it doesn’t disappoint,
              especially if accompanied by tales of armored gladiators and
              hungry lions. More...
            </p>
          </div>
        </div>
      </div>
      <div className="articles-bottom__container">
        <div className="article-item">
          <img src={inspiration} alt="#" />
          <div className="article-info__bottom">
            <p className="article-title">Inspiration</p>
            <p className="article-sub__title">
              Founded by Pope Julius II in the early 16th century and enlarged
              by successive pontiffs, the Vatican Museums boast one of the
              world's greatest art…
            </p>
          </div>
        </div>
        <div className="article-item">
          <img src={travelTips} alt="#" />
          <div className="article-info__bottom">
            <p className="article-title">Travel Tips</p>
            <p className="article-sub__title">
              Everyone wants to see the Colosseum, and it doesn’t disappoint,
              especially if accompanied by tales of armored gladiators and
              hungry lions. More...
            </p>
          </div>
        </div>
        <div className="article-item ">
          <img src={drink} alt="#" />
          <div className="article-info__bottom">
            <p className="article-title">Food & Drink</p>
            <p className="article-sub__title">
              In the city of outstanding churches, none can hold a candle to St
              Peter's, Italy’s largest, richest and most spectacular basilica.
              Built atop a 4th…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;

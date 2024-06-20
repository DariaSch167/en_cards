import React from "react";
import Card from "./card.jsx";
import CardTitle from "./cardTitle.jsx";
import MotionButton from "./motionButton.jsx";
import "../../styles/wordsTrainingStyles/wordsTraining.css";
import prevArrow from "../../images/card_prev-arrow.svg";
import nextArrow from "../../images/card_next-arrow.svg";

function WordsTraining(props) {
  return (
    <React.Fragment>
      <div className="training">
        <div className="card__wrapper">
          <MotionButton id="card-prev" img={prevArrow} motion="prev" />
          <Card
            word="basket"
            transcription="[ˈbɑːskɪt]"
            translate="корзина"
            theme="предмет"
          />
          <MotionButton id="card-next" img={nextArrow} motion="next" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default WordsTraining;

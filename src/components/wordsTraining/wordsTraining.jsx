import React from "react";
import Card from "./card.jsx";
import MotionButton from "./motionButton.jsx";
import prevArrow from "../../images/card_prev-arrow.svg";
import nextArrow from "../../images/card_next-arrow.svg";

function WordsTraining(props) {
  return (
    <React.Fragment>
      <div className="training__wrapper">
        <MotionButton id="card-prev" img={prevArrow} motion="prev" />
        <Card
          word="basket"
          transcription="[ˈbɑːskɪt]"
          translate="корзина"
          theme="Предмет"
        />
        <MotionButton id="card-next" img={nextArrow} motion="next" />
      </div>
    </React.Fragment>
  );
}
export default WordsTraining;

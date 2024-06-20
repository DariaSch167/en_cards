import React from "react";
import "../../styles/wordsTrainingStyles/card.css";

function Card(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h2 className="card__word-theme">Тема: {props.theme}</h2>
        <p className="card__word">{props.word}</p>
        <p className="card__word-transcription">{props.transcription}</p>
        <button id="card-translate">Показать перевод</button>
        <p className="card__word-translate hidden">{props.translate}</p>
      </div>
    </React.Fragment>
  );
}
export default Card;

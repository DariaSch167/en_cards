import React from "react";

function Card(props) {
  return (
    <React.Fragment>
      <h2 className="training__theme">{props.theme}</h2>
      <div className="card__wrapper">
        <p className="card__word">{props.word}</p>
        <p className="card__word-transcription">{props.transcription}</p>
        <button id="card-translate">Перевод</button>
        <p className="card__word-translate hidden">{props.translate}</p>
      </div>
    </React.Fragment>
  );
}
export default Card;

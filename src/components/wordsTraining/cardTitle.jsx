import "../../styles/wordsTrainingStyles/card.css";

function CardTitle(props) {
  return <h2 className="card__word-theme">Тема: {props.theme}</h2>;
}

export default CardTitle;

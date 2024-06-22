import React from "react";
import TableRowRead from "./tableRowReadMode.jsx";
import TableRowEdit from "./tableRowEditMode.jsx";
import "../../styles/wordsListStyles/wordsList.css";
import wordsJSON from "../../data/words.json";

function WordsList(props) {
  let tableMode;

  if (props.mode === "read-mode") {
    tableMode = wordsJSON.map((item, index) => {
      return (
        <TableRowRead
          key={index}
          num={index + 1}
          word={item.english}
          transcription={item.transcription}
          translate={item.russian}
          theme={item.tags}
        />
      );
    });
  } else {
    tableMode = wordsJSON.map((item, index) => {
      return (
        <TableRowEdit
          key={index}
          num={index + 1}
          word={item.english}
          transcription={item.transcription}
          translate={item.russian}
          theme={item.tags}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <div className="list">
        <h2 className="list__title">Список слов</h2>
        <div className={props.mode}>{tableMode}</div>
      </div>
    </React.Fragment>
  );
}
export default WordsList;

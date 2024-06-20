import React from "react";
import TableRowRead from "./tableRowReadMode.jsx";
import TableRowEdit from "./tableRowEditMode.jsx";
import "../../styles/wordsListStyles/wordsList.css";

function WordsList(props) {
  let tableMode;
  if (props.mode === "read-mode") {
    tableMode = (
      <TableRowRead
        num="1"
        word="cat"
        transcription="[cat]"
        translate="кошка"
        theme="животные"
      />
    );
  } else {
    tableMode = (
      <TableRowEdit
        num="1"
        word="cat"
        transcription="[cat]"
        translate="кошка"
        theme="животные"
      />
    );
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

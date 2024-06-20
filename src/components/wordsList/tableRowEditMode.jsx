import React from "react";
import ManageButton from "./tableManageButton.jsx";
import btnUndo from "../../images/table_btn-undo.svg";
import btnSave from "../../images/table_btn-save.svg";

function TableRowEdit(props) {
  return (
    <React.Fragment>
      <div className="table-row">
        <p className="table-row__word-num">{props.num}</p>
        <input
          className="table-row__word__edit"
          type="text"
          value={props.word}
        />
        <input
          className="table-row__word-transcription__edit"
          type="text"
          value={props.transcription}
        />
        <input
          className="table-row__word-translate__edit"
          type="text"
          value={props.translate}
        />
        <input
          className="table-row__word-theme__edit"
          type="text"
          value={props.theme}
        />
        <div className="table-row__manage-btn">
          <ManageButton id="table_btn-undo" img={btnUndo} use="undo" />
          <ManageButton id="table_btn-save" img={btnSave} use="save" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TableRowEdit;

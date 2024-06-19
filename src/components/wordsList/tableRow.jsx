import React from "react";
import ManageButton from "./tableManageButton.jsx";
import btnEdit from "../../images/table_btn-edit.svg";
import btnDel from "../../images/table_btn-delete.svg";
import btnUndo from "../../images/table_btn-undo.svg";
import btnSave from "../../images/table_btn-save.svg";

function TableRow(props) {
  return (
    <React.Fragment>
      <div className="table-row__wrapper">
        <p className="table-row__word-num">{props.num}</p>
        <p className="table-row__word">{props.word}</p>
        <p className="table-row__word-transcription">{props.transcription}</p>
        <p className="table-row__word-translate">{props.translate}</p>
        <p className="table-row__word-theme">{props.theme}</p>
        <div className="table-row__edit-del">
          <ManageButton id="table_btn-edit" img={btnEdit} use="edit" />
          <ManageButton id="table_btn-del" img={btnDel} use="delete" />
        </div>
        <div className="table-row__undo-save">
          <ManageButton id="table_btn-undo" img={btnUndo} use="undo" />
          <ManageButton id="table_btn-save" img={btnSave} use="save" />
        </div>
      </div>
    </React.Fragment>
  );
}
export default TableRow;

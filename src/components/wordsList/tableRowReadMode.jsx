import React from "react";
import ManageButton from "./tableManageButton.jsx";
import btnEdit from "../../images/table_btn-edit.svg";
import btnDel from "../../images/table_btn-delete.svg";

function TableRowRead(props) {
  return (
    <React.Fragment>
      <div className="table-row">
        <p className="table-row__word-num">{props.num}</p>
        <p className="table-row__word">{props.word}</p>
        <p className="table-row__word-transcription">{props.transcription}</p>
        <p className="table-row__word-translate">{props.translate}</p>
        <p className="table-row__word-theme">{props.theme}</p>
        <div className="table-row__manage-btn">
          <ManageButton id="table_btn-edit" img={btnEdit} use="edit" />
          <ManageButton id="table_btn-del" img={btnDel} use="delete" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TableRowRead;

import "../../styles/wordsListStyles/tableManageButton.css";

function ManageButton(props) {
  return (
    <button className="table__manage-btn" id={props.id}>
      <img src={props.img} alt={props.use} />
    </button>
  );
}
export default ManageButton;

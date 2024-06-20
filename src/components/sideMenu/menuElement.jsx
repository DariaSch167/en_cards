import "../../styles/sideMenuStyles/menuElement.css";

function MenuElement(props) {
  return (
    <div className="side-menu__element">
      <img src={props.img} alt={props.name} />
    </div>
  );
}
export default MenuElement;

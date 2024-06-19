function MotionButton(props) {
  return (
    <button id={props.id}>
      <img src={props.img} alt={props.motion} />
    </button>
  );
}
export default MotionButton;

function MotionButton(props) {
  return (
    <button className="card__motion-btn" id={props.id}>
      <img src={props.img} alt={props.motion} />
    </button>
  );
}
export default MotionButton;

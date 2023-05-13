export default function Numbers(props: any) {
  return (
    <div className="time">
      <div className="upper"></div>
      <div className="number">
        {props.number < 10 ? "0" + props.number : props.number}
      </div>
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="line"></div>
      <div className="lower"></div>
    </div>
  );
}

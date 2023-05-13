import { memo } from "react";

function Numbers(props: any) {
  console.log("render");
  return (
    <div className="time">
      <div className={`upper ${props.class}`}></div>
      <div className={`number ${props.class} ${props.blink}`}>
        {props.number < 10 ? "0" + props.number : props.number}
      </div>

      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="line"></div>
      <div className={`lower ${props.class}`}></div>
    </div>
  );
}
export default memo(Numbers, (prevProps, nextProps) => {
  if (prevProps.number === nextProps.number) return true;
  else return false;
});

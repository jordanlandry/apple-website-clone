import "./icons.css";
import { IconProps } from "../data/interfaces";

export default function PlayButton({
  size,
  color,
  className,
  marginLeft,
  margin,
  marginBottom,
  marginTop,
  marginRight,
}: IconProps) {
  const totalSize = size || 24;

  return (
    <span
      className={`play-button ${className ? className : ""}`}
      style={{
        width: totalSize + "px",
        height: totalSize + "px",
        marginLeft: marginLeft + "px",
        margin: margin + "px",
        marginBottom: marginBottom + "px",
        marginTop: marginTop + "px",
        marginRight: marginRight + "px",
      }}
    >
      <span className="play-button-triangle" />
    </span>
  );
}

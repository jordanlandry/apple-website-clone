import { MovingPictureProps } from "../../../data/interfaces";

export default function MovingPicture({
  scrollProgress,
  startX,
  startY,
  endX,
  endY,
  text,
  imgAlt,
  image,
  offset,
}: MovingPictureProps) {
  const x = startX + scrollProgress * (endX - startX);
  const y = startY + scrollProgress * (endY - startY);

  // Start changing the opacity when the picture is 75% of the way to its destination
  const opacityThreshold = 0.75;
  const opacity = scrollProgress > opacityThreshold ? (scrollProgress - opacityThreshold) / (1 - opacityThreshold) : 0;

  return (
    <>
      <div>
        <img
          // className="moving-picture"
          src={image}
          alt={imgAlt}
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            transform: `translate(${x}px, ${y}px)`,
          }}
        />
      </div>
      <p
        style={{
          position: "relative",
          top: "0px",
          left: "0px",
          transform: `translate(${x}px, ${y}px)`,
          opacity: opacity,
          marginTop: "15px",
          fontSize: "17px",
          color: "#86868b",
          fontWeight: "bold",
        }}
      >
        {text}
      </p>
    </>
  );
}

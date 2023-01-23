import { useRef } from "react";
import { movingPicturesData } from "../../../data/iphone14ProPage";
import clamp from "../../../helpers/clamp";
import MovingPicture from "../components/MovingPicture";

export default function PictureTabSection() {
  const pictureTabRef = useRef(null);

  // @ts-ignore
  const pictureTabY = pictureTabRef.current?.getBoundingClientRect().y;

  const startAnimationAt = 0.8 * window.innerHeight;
  const endAnimationAt = 0 * window.innerHeight;

  // Normalize the animation progress between 0 and 1
  const animationProgress = clamp((pictureTabY - startAnimationAt) / (endAnimationAt - startAnimationAt), 0, 1);

  // After the anim is done, the picture will keep moving down slightly
  const offset = (window.innerHeight - pictureTabY) * 0.05;

  const movingPictureElements = movingPicturesData.map((picture) => {
    return (
      <MovingPicture
        key={picture.id}
        id={picture.id}
        scrollProgress={animationProgress}
        text={picture.text}
        imgAlt={picture.imgAlt}
        image={picture.image}
        startX={picture.startX}
        startY={picture.startY}
        endX={picture.endX}
        endY={picture.endY}
        offset={offset}
      />
    );
  });

  return (
    <div ref={pictureTabRef} style={{ width: "750px", transform: "translateX(-50px)" }}>
      {movingPictureElements}
    </div>
  );
}

import { useRef } from "react";
import clamp from "../../../helpers/clamp";
import useScroll from "../../../hooks/useScroll";

export default function BigAndBiggerSection() {
  const scrollY = useScroll();

  const textAnimation = {
    start: {
      scale: 1,
      translateX: 0,
      translateY: 0,
    },
    halfway: {
      scale: 1.2,
      translateX: 0,
      translateY: -window.innerHeight * 0.1,
    },
    end: {
      scale: 0,
      translateX: 0,
      translateY: 0,
    },
  };

  const wrapperElementRef = useRef<HTMLDivElement>(null);

  // Percent of scroll progress to start animation and end animation
  const startTextAnimAt = 0.9;
  const endTextAnimAt = 0;
  const textPositionY = wrapperElementRef?.current?.getBoundingClientRect().y;
  const textPercent = textPositionY
    ? clamp(
        (textPositionY - window.innerHeight * startTextAnimAt) /
          (window.innerHeight * endTextAnimAt - window.innerHeight * startTextAnimAt),
        0,
        1
      )
    : 0;

  // Get current properties
  const getTextAnimationProperties = () => {
    let scale = 0;
    let translateX = 0;
    let translateY = 0;
    if (textPercent < 0.5) {
      // Get percent between 0 and 0.5
      const percent = textPercent / 0.5;
      scale = textAnimation.start.scale + (textAnimation.halfway.scale - textAnimation.start.scale) * percent;
      translateX =
        textAnimation.start.translateX + (textAnimation.halfway.translateX - textAnimation.start.translateX) * percent;

      translateY =
        textAnimation.start.translateY + (textAnimation.halfway.translateY - textAnimation.start.translateY) * percent;
    }

    if (textPercent >= 0.5) {
      // Get percent between 0.5 and 1
      const percent = (textPercent - 0.5) / 0.5;
      scale = textAnimation.halfway.scale + (textAnimation.end.scale - textAnimation.halfway.scale) * percent;

      translateX =
        textAnimation.start.translateX + (textAnimation.end.translateX - textAnimation.halfway.translateX) * percent;

      translateY =
        textAnimation.start.translateY + (textAnimation.end.translateY - textAnimation.halfway.translateY) * percent;
    }

    return { scale, translateX, translateY };
  };

  const baseStyle = {
    rotateY: 40,
    translateX: 150,
    translateY: 100,
  };

  const textStyle = getTextAnimationProperties();
  textStyle.translateX += baseStyle.translateX;
  textStyle.translateY += baseStyle.translateY;

  const { scale, translateX, translateY } = getTextAnimationProperties();

  return (
    <div ref={wrapperElementRef} className="iphone-14--big-bigger">
      <div className="big-bigger--text-wrapper">
        <p
          style={{
            transform: `rotateY(-${baseStyle.rotateY}deg)
            translate(${textStyle.translateX}px, ${textStyle.translateY}px) 
            scale(${scale})`,
          }}
        >
          Big
        </p>
        <p
          style={{
            transform: `rotateY(${baseStyle.rotateY}deg)
            translate(${textStyle.translateX}px, ${textStyle.translateY}px) 
            scale(${scale})`,
          }}
        >
          and bigger.
        </p>
      </div>

      <div className="big-bigger--img-wrapper">
        <img src="https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14__esmpw7gjv46e_large.jpg" />
        <img src="https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14_plus__fra3gmuj0aum_large.jpg" />
      </div>

      <div className="hidden">
        <p>iPhone 14</p>
        <br />
        <p>6.1"</p>
      </div>
      <div className="hidden">
        <p>iPhone 14 Plus</p>
        <br />
        <p>6.7"</p>
      </div>
    </div>
  );
}

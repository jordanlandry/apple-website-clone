import { useRef, useState } from "react";
import useImageWidth from "../hooks/useImageWidth";
import useInterval from "../hooks/useInterval";
import useScroll from "../hooks/useScroll";
import "./phonePage.css";

export default function PhonePage() {
  const sizes = ["small", "medium", "large"];

  const iphoneAnimVideoBase =
    "https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/";

  const FORMAT = ".mp4";
  const [size] = useImageWidth()!;
  const scrollY = useScroll();

  const videoSrc = iphoneAnimVideoBase + sizes[size] + FORMAT;

  const currentVideoTimeRef = useRef(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  currentVideoTimeRef.current = currentVideoTime;

  const [w, setW] = useState(50);
  const oToDynamicIsland = (
    <div
      onClick={() => setW(175)}
      style={{
        width: `${w}px`,
        height: "50px",
        borderRadius: "50px",
        border: "5px solid white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transition: "all 0.5s",
        margin: "auto",
        display: "flex",
      }}
    ></div>
  );

  const [colorHasBeenClicked, setColorHasBeenClicked] = useState(false);
  const introTextVisible = scrollY > 500 && scrollY < 2500;
  const introTextScrollPercent = (scrollY - 500) / 2000;

  const iphoneColors = ["purple", "gold", "silver", "black"];
  const [colorIdx, setColorIdx] = useState(0);
  const iphoneColor = iphoneColors[colorIdx];

  const changeIphoneCol = (color: string) => {
    const idx = iphoneColors.findIndex((c) => c === color);
    setColorIdx(idx);

    // Clear the interval
    clearInterval(colorChangeInterval);
    setColorHasBeenClicked(true);
  };

  // Change color over time, unless a color has been selected
  const colorChangeInterval = useInterval(() => {
    // setColorIdx((prev) => (prev + 1) % iphoneColors.length);
    setColorIdx((prev) => {
      if (colorHasBeenClicked) return prev;
      return prev + 1 >= iphoneColors.length ? 0 : prev + 1;
    });
  }, 3000);

  return (
    <div className="iphone-14-page">
      <video
        id="iphone-14-intro-video"
        autoPlay
        muted
        src={videoSrc}
        onTimeUpdate={() => setCurrentVideoTime((prev) => prev + 1)}
      />
      {/* <div className="intro-text-background"></div> */}
      <div
        className={`intro-text ${introTextVisible ? "" : "hidden"}`}
        style={{ backgroundPositionY: `${introTextScrollPercent * 80}%` }}
      >
        A Magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative
        48MP camera for mine-blowing detail. All powered by the ultimate smartphone chip.
      </div>

      <div className="iphone-14-color-container" style={{}}>
        <img
          className={`iphone-fade-${iphoneColor === "purple" ? "in" : "out"}`}
          src="https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_deep_purple__du23dbfjl1km_large.jpg"
        />
        <img
          className={`iphone-fade-${iphoneColor === "gold" ? "in" : "out"}`}
          src="https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_gold__e2kfk9zl5eie_large.jpg"
        />
        <img
          className={`iphone-fade-${iphoneColor === "silver" ? "in" : "out"}`}
          src="https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_silver__eph35go3eiy6_large.jpg"
        />
        <img
          className={`iphone-fade-${iphoneColor === "black" ? "in" : "out"}`}
          src="https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_space_black__ev5ncqabz7ma_large.jpg"
        />

        <ul>
          <li
            className={`pointer iphone-color-item ${iphoneColor === "purple" ? "active" : ""}`}
            onClick={() => changeIphoneCol("purple")}
          >
            Deep Purple
          </li>
          <li
            className={`pointer iphone-color-item ${iphoneColor === "gold" ? "active" : ""}`}
            onClick={() => changeIphoneCol("gold")}
          >
            Gold
          </li>
          <li
            className={`pointer iphone-color-item ${iphoneColor === "silver" ? "active" : ""}`}
            onClick={() => changeIphoneCol("silver")}
          >
            Silver
          </li>
          <li
            className={`pointer iphone-color-item ${iphoneColor === "black" ? "active" : ""}`}
            onClick={() => changeIphoneCol("black")}
          >
            Space Black
          </li>
        </ul>
      </div>
    </div>
  );
}

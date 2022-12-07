import { useEffect, useRef, useState } from "react";
import clamp from "../helpers/clamp";
import useImageWidth from "../hooks/useImageWidth";
import useInterval from "../hooks/useInterval";
import useInView from "../hooks/useInView";
import useScroll from "../hooks/useScroll";
import "./phonePage.css";

export default function PhonePage() {
  document.title = "iPhone 14 Pro and iPhone 14 Pro Max";

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

  const [w, setW] = useState(70);
  const [colorHasBeenClicked, setColorHasBeenClicked] = useState(false);
  // const oToDynamicIsland = (

  // );

  const showIntroTextAt = 1000;
  const hideIntroTextAt = 2500;
  const introTextVisible = scrollY > showIntroTextAt && scrollY < hideIntroTextAt;
  const introTextScrollPercent = (scrollY - showIntroTextAt) / (hideIntroTextAt - showIntroTextAt);

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
    setColorIdx((prev) => {
      if (colorHasBeenClicked) return prev;
      return prev + 1 >= iphoneColors.length ? 0 : prev + 1;
    });
  }, 3000);

  const dynamicIslandTextRef = useRef(null);
  const dynamicIslandTextInView = useInView(dynamicIslandTextRef);
  // const [dynamicIslandTextSize, setDynamicIslandTextSize] = useState(120);

  const dynamicIslandProperties = {
    minTextSize: 120,
    maxTextSize: 200,
    minY: 500, // Lower is higher because it's the distance from the top of the page
    maxY: 200,

    minYSize: 70,
    maxYSize: 125,

    minXSize: 70,
    maxXSize: 250,

    minBorderPx: 10,
    maxBorderPx: 20,
  };

  // @ts-ignore
  const dynamicIslandY = dynamicIslandTextRef.current?.getBoundingClientRect().y;
  const dynamicIslandPercent =
    (dynamicIslandY - dynamicIslandProperties.minY) / (dynamicIslandProperties.maxY - dynamicIslandProperties.minY);

  const dynamicIslandTextSize = clamp(
    dynamicIslandProperties.minTextSize + dynamicIslandPercent * 100,
    dynamicIslandProperties.minTextSize,
    dynamicIslandProperties.maxTextSize
  );

  const dynamicIslandHeight = clamp(
    dynamicIslandProperties.minYSize + dynamicIslandPercent * 100,
    dynamicIslandProperties.minYSize,
    dynamicIslandProperties.maxYSize
  );

  const dynamicIslandWidth = clamp(
    dynamicIslandProperties.minXSize + dynamicIslandPercent * 100,
    dynamicIslandProperties.minXSize,
    dynamicIslandProperties.maxXSize
  );

  const dynamicIslandBorderPx = clamp(
    dynamicIslandProperties.minBorderPx + dynamicIslandPercent * 100,
    dynamicIslandProperties.minBorderPx,
    dynamicIslandProperties.maxBorderPx
  );

  console.log(dynamicIslandWidth);

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
      <div className="iphone-14-color-container__text">
        <p>Designed for durability.</p>
        <p>
          With Ceramic Shield, tougher than any smartphone glass. Water resistance.1 Surgical-grade stainless steel.
          6.1″ and 6.7″ display sizes.2 All in four Pro colors.
        </p>
      </div>
      {/* The Apple website doesn't use the O as a letter which can be an accessibility issue
          so I am using an O as an invisible character  

          ~~~ still a very minor accessibility issue with it, so I may use a photo that says iPhone instead
          and use invisible text to say iPhone, so that it is still accessible to screen readers          
          */}
      <span style={{ marginTop: "500px", fontSize: `${dynamicIslandTextSize}px` }} ref={dynamicIslandTextRef}>
        <span>
          Meet the
          <br />
        </span>
        <span>
          new face
          <br />
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "1px" }}>
          of iPh<span className="invisible">o</span>
          <span
            style={{
              width: `${dynamicIslandWidth}px`,
              height: `${dynamicIslandHeight}px`,
              borderRadius: "70px",
              border: `${dynamicIslandBorderPx}px solid white`,
              display: "inline-block",
              marginTop: "20px",
            }}
          ></span>
          ne.
        </span>
      </span>
    </div>
  );
}

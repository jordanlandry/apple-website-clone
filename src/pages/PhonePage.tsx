import { useRef, useState } from "react";
import BionicChipSection from "../components/iphone-14-pro-page/sections/BionicChipSection";
import DynamicIslandSection from "../components/iphone-14-pro-page/sections/DynamicIslandSection";
import DynamicIslandSectionTest from "../components/iphone-14-pro-page/sections/DynamicIslandSectionTest";
import PictureTabSection from "../components/iphone-14-pro-page/sections/PictureTabSection";
import useImageWidth from "../hooks/useImageWidth";
import useInterval from "../hooks/useInterval";
import useScroll from "../hooks/useScroll";
import "./phonePage.css";

export default function PhonePage() {
  document.title = "iPhone 14 Pro and iPhone 14 Pro Max";
  document.getElementById("body")!.style.backgroundColor = "#000";

  const sizes = ["small", "medium", "large"];

  const [size] = useImageWidth()!;
  const scrollY = useScroll();

  const currentVideoTimeRef = useRef(0);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  currentVideoTimeRef.current = currentVideoTime;

  const [colorHasBeenClicked, setColorHasBeenClicked] = useState(false);

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
  }, 2000);

  return (
    <div className="iphone-14-page">
      <video
        id="iphone-14-intro-video"
        autoPlay
        muted
        src={`https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/${sizes[size]}.mp4`}
        onTimeUpdate={() => setCurrentVideoTime((prev) => prev + 1)}
      />

      <div
        className={`intro-text ${introTextVisible ? "" : "hidden"}`}
        style={{ backgroundPositionY: `${introTextScrollPercent * 100}%` }}
      >
        A Magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative
        48MP camera for mine-blowing detail. All powered by the ultimate smartphone chip.
      </div>

      <div className="iphone-14-color-container" style={{}}>
        <img
          className={`iphone-fade-${iphoneColor === "purple" ? "in" : "out"}`}
          src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_deep_purple__du23dbfjl1km_${sizes[size]}.jpg`}
        />
        <img
          className={`iphone-fade-${iphoneColor === "gold" ? "in" : "out"}`}
          src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_gold__e2kfk9zl5eie_${sizes[size]}.jpg`}
        />
        <img
          className={`iphone-fade-${iphoneColor === "silver" ? "in" : "out"}`}
          src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_silver__eph35go3eiy6_${sizes[size]}.jpg`}
        />
        <img
          className={`iphone-fade-${iphoneColor === "black" ? "in" : "out"}`}
          src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/colors/gallery_space_black__ev5ncqabz7ma_${sizes[size]}.jpg`}
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
      <DynamicIslandSection imageSize={sizes[size]} />

      {/* <DynamicIslandSectionTest imageSize={sizes[size]} /> */}
      <PictureTabSection />
      <BionicChipSection />
    </div>
  );
}

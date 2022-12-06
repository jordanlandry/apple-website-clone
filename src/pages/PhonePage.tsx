import { useRef, useState } from "react";
import useImageWidth from "../hooks/useImageWidth";
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

  const introTextVisible = scrollY > 500 && scrollY < 2500;
  const introTextScrollPercent = (scrollY - 500) / 2000;

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
    </div>
  );
}

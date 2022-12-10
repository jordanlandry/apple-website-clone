import { useEffect, useRef } from "react";
import clamp from "../../../helpers/clamp";

type Props = {
  imageSize: string;
};
export default function DynamicIslandSection({ imageSize }: Props) {
  const dynamicIslandTextRef = useRef(null);

  const dynamicIslandProperties = {
    minTextSize: 95,
    maxTextSize: 200,
    minY: window.innerHeight * 0.6, // Lower is higher because it's the distance from the top of the page
    maxY: window.innerHeight * 0.45,

    minYSize: 50,
    maxYSize: 105,

    minXSize: 50,
    maxXSize: 300,

    minBorderPx: 8,
    maxBorderPx: 17,
    initialYOffset: -10,
  };

  // Sizing Variables
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

  const dynamicIslandYOffset =
    dynamicIslandProperties.initialYOffset -
    clamp(dynamicIslandProperties.initialYOffset * dynamicIslandPercent, dynamicIslandProperties.initialYOffset, 0);

  const showDynamicIslandVideo = dynamicIslandWidth === dynamicIslandProperties.maxXSize;
  const dynamicIslandVideoRef = useRef<null | HTMLVideoElement>(null);

  // Replay the video at the beginning everytime it is shown
  useEffect(() => {
    if (dynamicIslandVideoRef.current) {
      dynamicIslandVideoRef.current.currentTime = 0;
      dynamicIslandVideoRef.current.play();
    }
  }, [showDynamicIslandVideo]);

  // @ts-ignore
  if (showDynamicIslandVideo.current) {
    if (showDynamicIslandVideo) dynamicIslandVideoRef.current!.play();
    else dynamicIslandVideoRef.current!.pause();
  }

  return (
    <>
      {/* The Apple website doesn't use the O as a letter which can be an accessibility issue
          so I am using an O as an invisible character  

          ~~~ still a very minor accessibility issue with it, so I may use a photo that says iPhone instead
          and use invisible text to say iPhone, so that it is still accessible to screen readers          
          */}
      <span
        className={showDynamicIslandVideo ? "dynamic-island-max-size" : ""}
        style={{
          marginTop: "500px",
          fontSize: `${dynamicIslandTextSize}px`,
          marginRight: "270px",
          whiteSpace: "nowrap",
          transform: "translateY(-6px)",
          fontWeight: 600,
        }}
        ref={dynamicIslandTextRef}
      >
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
              borderRadius: "60px",
              border: `${dynamicIslandBorderPx}px solid white`,
              display: "inline-block",
              marginTop: "35px",
              transform: `translateY(${dynamicIslandYOffset}px)`,
            }}
          ></span>
          ne.
        </span>
      </span>
      <div
        className={`${showDynamicIslandVideo ? "dynamic-island-video" : "invisible"}`}
        style={{ margin: "0 auto", display: "block", transform: "translateY(-594px)" }}
      >
        <p
          style={{
            fontSize: "32px",
            color: "#cecece",
            width: "546px",
            margin: "0 auto 124px",
          }}
        >
          Introducing Dynamic Island, a truly Apple innovation that’s hardware and software and something in between. It
          bubbles up music, sports scores, FaceTime, and so much more — all without taking you away from what you’re
          doing.
        </p>
        <img
          src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/dynamic-island/dynamic_hw__wx47n1mguoi6_${imageSize}.png`}
          style={{
            margin: "auto",
            display: "block",
            zIndex: 2,
            position: "relative",
          }}
        />
        <div
          style={{
            display: "block",
            margin: "auto",
            position: "relative",
            boxShadow: "0 0 50px 75px rgba(0, 0, 0, 1) ",
            width: "100%",
            height: "100%",
            zIndex: 3,
          }}
        ></div>
        <video
          ref={dynamicIslandVideoRef}
          style={{
            borderRadius: "30px 30px 0 0 ",
            transform: "translateY(-833px)",
            zIndex: 1,
            display: "block",
            margin: "auto",
          }}
          src={`https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/dynamic-island/${imageSize}.mp4`}
          autoPlay={false}
        ></video>
      </div>
    </>
  );
}

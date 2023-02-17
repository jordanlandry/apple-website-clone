import React, { useEffect, useRef } from "react";
import clamp from "../../../helpers/clamp";

type Props = { imageSize: string };

export default function DynamicIslandSectionTest({ imageSize }: Props) {
  const textElementRef = useRef<HTMLElement>(null);

  const beginAnimationAt = 0.65; // 0.8 means the element is 80% from the top of the screen
  const endAnimationAt = 0.1; // 0.1 means the element is 10% from the top of the screen

  const textElementY = textElementRef.current?.getBoundingClientRect().y!;
  const percentScroll =
    imageSize !== "small"
      ? clamp(1 - (textElementY / window.innerHeight - endAnimationAt) / (beginAnimationAt - endAnimationAt), 0, 1)
      : 1; // If the image size is small, then we don't want to animate the text because the animation will only be used for bigger screens

  const initialWidth = 47;
  const endWidth = 130;
  const initialScale = 1;
  const endScale = 2.4;

  const width = initialWidth + percentScroll * (endWidth - initialWidth);
  const scale = initialScale + percentScroll * (endScale - initialScale);

  // If the image size is small, then we don't want to animate the text because the animation will only be used for bigger screens
  const videoRef = useRef<HTMLVideoElement>(null);

  // Replay the video everytime it is scrolled into view
  useEffect(() => {
    if (videoRef.current && percentScroll >= 1) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [percentScroll]);

  const wrapperTransform =
    imageSize === "small"
      ? "translate(-56%, 10%) scale(0.6)"
      : imageSize === "medium"
      ? `translate(calc(-50% - 121px), 380px) scale(${scale * 0.78})`
      : `translate(calc(-50% - 155px), 338px) scale(${scale})`;

  return (
    <div>
      <span
        className={percentScroll >= 1 && imageSize !== "small" ? "dynamic-island-max-size" : ""}
        ref={textElementRef}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%",
          transform: wrapperTransform,
          marginTop: "500px",
        }}
      >
        <span
          style={{
            fontSize: "89px",
            fontWeight: "500",
            color: "#cecece",
            margin: "auto",
            whiteSpace: "nowrap",
          }}
        >
          Meet the
          <br />
          new face
          <br />
          of iPh
          <span
            style={{
              width: `${width}px`,
              zIndex: 500,
              height: "50px",
              borderRadius: "25px",
              border: "8px solid #cecece",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          ></span>
          ne
        </span>
      </span>
      <div className={percentScroll >= 1 ? "dynamic-island-video" : "invisible"}>
        <p
          style={{
            fontSize: `${imageSize === "small" ? 21 : 32}px`,
            width: `${imageSize === "small" ? 324 : 546}px`,
            margin: "0 auto 124px",
          }}
        >
          Introducing Dynamic Island, a truly Apple innovation that’s hardware and software and something in between. It
          bubbles up music, sports scores, FaceTime, and so much more — all without taking you away from what you’re
          doing.
        </p>
        {imageSize !== "small" ? (
          <div
            style={{
              display: "block",
              margin: "0 auto 500px auto",
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 3,
            }}
          >
            <video
              ref={videoRef}
              style={{
                borderRadius: "30px 30px 0 0",
                margin: "0 auto",
                display: "block",
                zIndex: 2,
              }}
              src={`https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/dynamic-island/${imageSize}.mp4`}
            ></video>
            {imageSize !== "small" ? (
              <img
                src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/dynamic-island/dynamic_hw__wx47n1mguoi6_${imageSize}.png`}
                style={{
                  margin: "auto",
                  display: "block",
                  zIndex: 2,
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -100%)",
                }}
              />
            ) : null}
          </div>
        ) : (
          <img
            style={{
              margin: "0 auto",
              display: "block",
            }}
            src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/dynamic-island/dynamic__fuiint4o9jma_small.jpg`}
          />
        )}
      </div>
    </div>
  );
}

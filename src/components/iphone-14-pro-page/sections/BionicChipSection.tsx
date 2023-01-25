import { useRef } from "react";
import clamp from "../../../helpers/clamp";
import useImageWidth from "../../../hooks/useImageWidth";
import useWidth from "../../../hooks/useWidth";

export default function BionicChipSection() {
  const bionicChipSectionRef = useRef(null);

  // @ts-ignore
  const positionY = bionicChipSectionRef.current?.getBoundingClientRect().y;
  const startPercent = 0.9; // 80% of the screen height from the top to start the animation
  const endPercent = 0.2; // 20% of the screen height from the top to end the animation

  const [size] = useImageWidth()!;
  const width = useWidth();

  const percent = clamp(
    (positionY - window.innerHeight * startPercent) /
      (window.innerHeight * endPercent - window.innerHeight * startPercent),
    0,
    1
  );

  const maxTransform = 600;
  const useSlide = width > 1;
  const scale = size === 0 ? 0.4 : size === 1 ? 0.6 : 0.8;

  return (
    <>
      {useSlide ? (
        <div
          ref={bionicChipSectionRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90vw",
            color: "#cecece",
            transform: `scale(${scale})`,
          }}
        >
          <div>
            <p style={{ fontSize: "96px", marginBottom: "50px" }}>The Mastermind behind it all.</p>
            <p style={{ fontSize: "32px" }}>
              Say hello to A16 Bionic,
              <br /> The ultimate smartphone chip.
            </p>
          </div>
          <div>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                zIndex: 5,
                transform: `translateX(calc(${
                  percent * maxTransform * 3
                }px - 66%)) translateY(-100px) scale(3) rotate(${percent * 45}deg)`,
                filter: " blur(50px)",
              }}
            >
              <path
                fill="#000"
                d="M34.7,-55.1C46.3,-53.4,58,-46.8,68.6,-36.8C79.1,-26.8,88.5,-13.4,85.6,-1.7C82.7,10.1,67.6,20.2,56.5,29.2C45.4,38.1,38.2,46,29.5,45.1C20.7,44.2,10.4,34.6,0,34.5C-10.3,34.5,-20.6,44.1,-27.1,43.6C-33.5,43.2,-36,32.7,-34.2,23.8C-32.4,14.8,-26.3,7.4,-25.1,0.7C-23.8,-6,-27.4,-11.9,-28.3,-19.2C-29.1,-26.5,-27.2,-35.2,-22,-40.6C-16.9,-46,-8.4,-48.3,1.6,-51C11.5,-53.7,23.1,-56.8,34.7,-55.1Z"
                transform="translate(100 100)"
              />
            </svg>

            <img
              src="https://www.apple.com/v/iphone-14-pro/c/images/overview/chip/a16_endframe__gc8le7k1gxiu_large.jpg"
              style={{
                transform: `translateX(calc(${percent * maxTransform}px - 66%))`,
              }}
            />
          </div>
        </div>
      ) : (
        <div
          ref={bionicChipSectionRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90vw",
            color: "#cecece",
          }}
        >
          <div>
            <p style={{ fontSize: "96px", marginBottom: "50px" }}>The Mastermind behind it all.</p>
            <p style={{ fontSize: "32px" }}>
              Say hello to A16 Bionic,
              <br /> The ultimate smartphone chip.
            </p>
          </div>
          <div>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                zIndex: 5,
                filter: " blur(50px)",
              }}
            >
              <path
                fill="#000"
                d="M34.7,-55.1C46.3,-53.4,58,-46.8,68.6,-36.8C79.1,-26.8,88.5,-13.4,85.6,-1.7C82.7,10.1,67.6,20.2,56.5,29.2C45.4,38.1,38.2,46,29.5,45.1C20.7,44.2,10.4,34.6,0,34.5C-10.3,34.5,-20.6,44.1,-27.1,43.6C-33.5,43.2,-36,32.7,-34.2,23.8C-32.4,14.8,-26.3,7.4,-25.1,0.7C-23.8,-6,-27.4,-11.9,-28.3,-19.2C-29.1,-26.5,-27.2,-35.2,-22,-40.6C-16.9,-46,-8.4,-48.3,1.6,-51C11.5,-53.7,23.1,-56.8,34.7,-55.1Z"
                transform="translate(100 100)"
              />
            </svg>

            <img src="https://www.apple.com/v/iphone-14-pro/c/images/overview/chip/a16_endframe__gc8le7k1gxiu_large.jpg" />
          </div>
        </div>
      )}
    </>
  );
}

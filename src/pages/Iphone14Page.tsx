import BigAndBiggerSection from "../components/iphone-14-page/sections/BigAndBiggerSection";
import BigBiggerSection from "../components/iphone-14-page/sections/BigBiggerSection";
import useImageWidth from "../hooks/useImageWidth";
import useScrollPercent from "../hooks/useScrollPercent";
import properties from "../properties";

import "./iphone14page.css";

export default function Iphone14Page() {
  const [size] = useImageWidth()!;
  const imageSize = properties.sizes[size];
  const introHeaderTextOpacity = useScrollPercent(100, 300);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <img
          src={`https://www.apple.com/v/iphone-14/d/images/overview/hero/hero_iphone_14_logo__dsjqlhotvrma_${imageSize}.png`}
          style={{ opacity: Math.max(0, 1 - introHeaderTextOpacity) }}
        />
      </div>

      {/* <BigAndBiggerSection /> */}
      <BigBiggerSection />
    </div>
  );
}

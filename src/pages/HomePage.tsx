import { SetLocationContext } from "../App";
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import frontPageSmallIcons from "../data/frontPage";
import { CardSmallProps } from "../data/interfaces";
import Chevron from "../icons/Chevron";
import PlayButton from "../icons/PlayButton";
import { useContext } from "react";

export default function HomePage() {
  const setLocation = useContext(SetLocationContext);

  // Handle different routes for GH-pages
  document.getElementById("body")!.style.backgroundColor = "#fff";

  const smallCardElements = frontPageSmallIcons.map((card: CardSmallProps, index: number) => (
    <CardSmall
      key={index}
      className={card.className}
      heading={card.heading}
      subheading={card.subheading}
      links={card.links}
      backgroundImages={card.backgroundImages}
      headingColor={card.headingColor}
    />
  ));

  return (
    <div>
      <CardBig
        className="card-big--accessibility"
        backgroundImages={{
          small: "https://www.apple.com/v/home/aw/images/heroes/idd-2022/accessibility_hero__fj943x0xf0a6_small.jpg",
          medium:
            "https://www.apple.com/v/home/aw/images/heroes/idd-2022/accessibility_hero__fj943x0xf0a6_mediumtall.jpg",
          large:
            "https://www.apple.com/v/home/aw/images/heroes/idd-2022/accessibility_hero__fj943x0xf0a6_largetall.jpg",
        }}
      >
        <h2>Accessibility</h2>
        <h3>At Apple we believe it's a human right.</h3>
        <a href="/the-greatest">
          Watch the film
          <PlayButton size={22} />
        </a>
      </CardBig>

      <CardBig
        className="card-big--iphone14 card-big-top-text"
        backgroundImages={{
          small: "https://www.apple.com/v/home/aw/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_small.jpg",
          medium: "https://www.apple.com/v/home/aw/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_mediumtall.jpg",
          large: "https://www.apple.com/v/home/aw/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_largetall.jpg",
        }}
      >
        <div className="card-big--iphone14-content">
          <h2>iPhone 14</h2>
          <h3>Big and bigger.</h3>
          <div>
            <a href="#" onClick={() => setLocation("/iphone-14")}>
              Learn more
              <Chevron />
            </a>
            <a href="/shop/iphone14">
              Buy
              <Chevron />
            </a>
          </div>
        </div>
      </CardBig>

      <div className="card-small-container">{smallCardElements}</div>
    </div>
  );
}

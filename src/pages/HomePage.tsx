import CardBig from "../components/CardBig";

export default function HomePage() {
  return (
    <div>
      <CardBig
        className="card-big--heading-accessibility"
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
      </CardBig>
    </div>
  );
}

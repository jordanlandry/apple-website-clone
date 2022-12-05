import { CardSmallProps } from "../data/interfaces";
import useImageWidth from "../hooks/useImageWidth";
import Chevron from "../icons/Chevron";

export default function CardSmall({
  className,
  before,
  after,
  heading,
  subheading,
  links,
  backgroundImages,
  headingColor,
}: CardSmallProps) {
  const sizes = ["small", "medium", "large"];
  const [imageSize, imageHeight] = useImageWidth()!;
  const image = backgroundImages[sizes[imageSize] as keyof typeof backgroundImages];

  return (
    <div className={`card-small ${className ? className : ""}`}>
      <>
        {before}
        <div className="card-small--content" style={{ height: `${imageHeight}px`, backgroundImage: `url(${image})` }}>
          <h2 className={`text-${headingColor}`}>{heading}</h2>
          <h3 className={`text-${headingColor}`}>{subheading}</h3>
          <div>
            {links!.map((link, index) => (
              <a key={index} href={link.url}>
                {link.title}
                <Chevron />
              </a>
            ))}
          </div>
        </div>
        {after}
      </>
    </div>
  );
}

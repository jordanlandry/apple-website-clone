import { CarouselItemProps } from "../data/interfaces";
import PlayButton from "../icons/PlayButton";

export default function MovieItem({ genre, heading, id, image, link }: CarouselItemProps) {
  return (
    <div className="movie-item">
      {heading}
      {genre}
      {image}
      <a href={link} style={{ display: "flex", alignItems: "center" }}>
        Stream Now <PlayButton />
      </a>
    </div>
  );
}

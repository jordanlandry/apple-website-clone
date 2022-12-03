import React from "react";
import { CardType } from "../data/interfaces";
import useImageWidth from "../hooks/useImageWidth";
import useWidth from "../hooks/useWidth";

export default function CardBig({ heading, subheading, id, backgroundImages }: CardType) {
  const sizes = ["small", "medium", "large"];

  const [imageSize, imageHeight] = useImageWidth()!;
  const image = backgroundImages[sizes[imageSize] as keyof typeof backgroundImages];

  return (
    <div className="card-big">
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <img alt={heading} src={image} style={{ height: `${imageHeight}px` }} className="card-big--bg-img" />
    </div>
  );
}

import React from "react";
import { CardTypeProps } from "../data/interfaces";
import useImageWidth from "../hooks/useImageWidth";
import useWidth from "../hooks/useWidth";

export default function CardBig({ backgroundImages, children, className }: CardTypeProps) {
  const sizes = ["small", "medium", "large"];

  const [imageSize, imageHeight] = useImageWidth()!;
  const image = backgroundImages[sizes[imageSize] as keyof typeof backgroundImages];

  return (
    <div className={`card-big ${className}`} style={{ height: `${imageHeight}px`, backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
}

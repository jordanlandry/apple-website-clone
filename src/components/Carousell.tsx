import { useState } from "react";
import { CarouselProps } from "../data/interfaces";
import MovieItem from "./MovieItem";
import "./carousel.css";
import useWidth from "../hooks/useWidth";

export default function Carousell({ className, items }: CarouselProps) {
  const width = useWidth();
  const [currentIdx, setCurrentIdx] = useState(0);

  const movieItems = items.map((item) => (
    <MovieItem
      key={item.id}
      id={item.id}
      genre={item.genre}
      heading={item.heading}
      image={item.image}
      link={item.link}
    />
  ));

  const nextIdx = currentIdx + 1 >= items.length ? 0 : currentIdx + 1;
  const prevIdx = currentIdx - 1 < 0 ? items.length - 1 : currentIdx - 1;

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1 >= items.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 > 0 ? items.length - 1 : prev - 1));
  };

  const circleElements = items.map((item, idx) => (
    <div
      className={`circle ${idx === currentIdx ? "circle-active" : ""}`}
      key={item.id}
      onClick={() => setCurrentIdx(idx)}
    />
  ));

  return (
    <>
      <div
        className={`carousell ${className ? className : ""}`}
        style={{ display: "flex", justifyContent: "center", width: `${items.length * 100}vw` }}
      >
        {movieItems}
      </div>
      <div className="circle-wrapper">{circleElements}</div>
    </>
  );
}

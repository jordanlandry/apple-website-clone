import React from "react";
import Carousell from "../components/Carousell";

export default function TestPage() {
  return (
    <div>
      <Carousell
        className="test"
        items={[
          { id: 1, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 2, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 3, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 4, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 5, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 6, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 7, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
          { id: 8, image: "test", genre: "Comedy", heading: "Poop", link: "a" },
        ]}
      />
    </div>
  );
}

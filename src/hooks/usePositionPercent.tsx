import { useEffect, useState } from "react";

// Return the position of the element in percent of the distance between start and end
export default function usePositionPercent(element: HTMLElement, start: number, end: number) {
  console.log(element);

  // Get the position of the element
  const [yPosition, setYPosition] = useState(0);

  const startPosition = window.innerHeight * start;
  const endPosition = window.innerHeight * end;
  const progressAsPercent = (yPosition - startPosition) / (endPosition - startPosition);

  // Update the position of the element when the user scrolls
  useEffect(() => {
    const onScroll = () => {
      if (!element) return;
      setYPosition(element.getBoundingClientRect().y);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return element ? progressAsPercent : 0;
}

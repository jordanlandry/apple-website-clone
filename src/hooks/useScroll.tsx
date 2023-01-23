import { useEffect, useState } from "react";

// There are different images for different screen sizes
// This returns the index of the image to use
export default function useScroll() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return scroll;
}

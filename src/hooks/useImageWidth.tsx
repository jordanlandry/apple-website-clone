import useWidth from "./useWidth";

// There are different images for different screen sizes
// This returns the index of the image to use
export default function useImageWidth() {
  const IMAGE_SIZE_THRESHOLDS = [735, 1069, Infinity];
  const IMAGE_HEIGHTS = [548, 694, 736];

  const width = useWidth();

  for (let i = 0; i < IMAGE_SIZE_THRESHOLDS.length; i++) {
    if (width < IMAGE_SIZE_THRESHOLDS[i]) return [i, IMAGE_HEIGHTS[i]];
  }
}

import { IconProps } from "../data/interfaces";

export default function AppleLogo({ size }: IconProps) {
  const sizePx = size ? `${size}px` : "100%";

  return (
    <img
      className="apple-logo"
      style={{
        width: sizePx,
        height: sizePx,
      }}
      alt="Apple Logo"
      src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
    ></img>
  );
}

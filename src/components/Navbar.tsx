import { useState } from "react";
import useWidth from "../hooks/useWidth";
import NavLink from "./NavLink";

export default function Navbar() {
  const MAX_WIDTH = 834; // Max width before the navbar collapses into a hamburger menu
  const width = useWidth();

  const [isSearching, setIsSearching] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleIsSearching = () => setIsSearching((prev) => !prev);
  const toggleCartOpen = () => setCartOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <ul className={width > MAX_WIDTH ? "navbar--wrapper" : "navbar--wrapper-collapsed"}>
        <NavLink link="/">
          <img
            alt="Apple"
            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
          />
        </NavLink>
        <NavLink link="/store">Store</NavLink>
        <NavLink link="/mac">Mac</NavLink>
        <NavLink link="/ipad">iPad</NavLink>
        <NavLink link="/iphone">iPhone</NavLink>
        <NavLink link="/watch">Watch</NavLink>
        <NavLink link="/airpods">AirPods</NavLink>
        <NavLink link="/tv-home">TV & Home</NavLink>
        <NavLink link="/services">Only on Apple</NavLink>
        <NavLink link="/accessories">Accessories</NavLink>
        <NavLink link="/support">Support</NavLink>
        <NavLink action={toggleIsSearching}>
          <img
            // There are two icons in this image, so we need to specify which one to use with the clip box property
            style={{
              clipPath: "inset(0 0 50% 0)",
            }}
            alt="Search"
            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg"
          />
        </NavLink>
        <NavLink action={toggleCartOpen}>
          <img
            alt="Cart"
            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
          />
        </NavLink>
      </ul>
    </nav>
  );
}

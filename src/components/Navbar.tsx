import { useContext, useRef, useState } from "react";
import useWidth from "../hooks/useWidth";
import AppleLogo from "../icons/AppleLogo";
import NavLink from "./NavLink";
import useInterval from "../hooks/useInterval";
import useKeybind from "../hooks/useKeybind";
import XIcon from "../icons/XIcon";
import { SetLocationContext } from "../App";

export default function Navbar() {
  const MAX_WIDTH = 834; // Max width before the navbar collapses into a hamburger menu
  const width = useWidth();

  const setLocation = useContext(SetLocationContext)

  
  const [isSearching, setIsSearching] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleIsSearching = () => setIsSearching((prev) => !prev);
  const toggleCartOpen = () => setCartOpen((prev) => !prev);

  const ulRef = useRef<HTMLUListElement>(null);

  const hideElementWaitTimeMs = 50;
  const searchAnimation = () => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= ulRef.current?.children.length!) return;

      // start from the last index and work backwards
      const idx = ulRef.current?.children.length! - counter - 1;

      ulRef.current?.children[idx].classList.remove("nav--show-animation");
      ulRef.current?.children[idx].classList.add("nav--hide-animation");

      counter++;
    }, hideElementWaitTimeMs);

    setTimeout(() => {
      clearInterval(interval);
      setIsSearching(true);
    }, ulRef.current?.children.length! * (hideElementWaitTimeMs + 15));
  };

  // Reverse the search animation
  const reverseSearchAnimation = () => {
    setIsSearching(false);
    let counter = 0;
    const interval = setInterval(() => {
      if (counter >= ulRef.current?.children.length!) return;

      // I want to show them from left to right so I can use counter as the index
      ulRef.current?.children[counter].classList.remove("nav--hide-animation");
      ulRef.current?.children[counter].classList.add("nav--show-animation");

      counter++;
    }, hideElementWaitTimeMs);

    setTimeout(() => {
      clearInterval(interval);
    }, ulRef.current?.children.length! * (hideElementWaitTimeMs + 15));
  };

  const handleSearch = () => {
    console.log("Searching for", searchQuery);
  };

  useKeybind("Escape", () => {
    reverseSearchAnimation();
  });

  useKeybind("Enter", () => {
    if (isSearching) handleSearch();
  });

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Every 100 milliseconds check if you are searching, then focus it
  const setSearchingFocus = setInterval(() => {
    if (isSearching) searchInputRef.current?.focus();
  }, 100);

  // Remove the search check interval
  if (isSearching) {
    setTimeout(() => {
      clearInterval(setSearchingFocus);
    }, 101);
  }

  return (
    <nav className="navbar">
      <>
        <ul ref={ulRef} className={width > MAX_WIDTH ? "navbar--wrapper" : "navbar--wrapper-collapsed"}>
          <>
            <NavLink link="/">
              <AppleLogo />
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
            <NavLink action={searchAnimation}>
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
          </>
        </ul>
        <div>
          <div className={`navbar--search ${isSearching ? "navbar--search-animation" : "hidden"}`}>
            <button className="unstyled-button" onClick={reverseSearchAnimation}>
              <img
                // There are two icons in this image, so we need to specify which one to use with the clip box property
                style={{
                  clipPath: "inset(0 0 0 0)",
                  transform: "translateY(-20px)",
                  marginRight: "10px",
                }}
                alt="Search"
                src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg"
              />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search apple.com"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={reverseSearchAnimation}
              className="unstyled-button"
              style={{ height: "44px", width: "44px" }}
            >
              <XIcon />
            </button>
            <div
              style={{
                position: "fixed",
                backgroundColor: "white",
                left: "50%",
                transform: "translateX(-50%)",
                height: "150px",
                width: "555px",
                top: "var(--nav-height)",
                padding: "10px",
                borderRadius: "0 0 18px 18px",
              }}
            >
              QUICK LINKS
              <ul>
                <li>
                  <a href="/iphone-14">iPhone 14</a>
                </li>
                <li>
                  <a href="/iphone-14-pro">iPhone 14 Pro</a>
                </li>
              </ul>
            </div>
          </div>
          {isSearching ? (
            <div
              onClick={reverseSearchAnimation}
              style={{
                position: "fixed",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                left: "0",
                top: "0",
                height: "100vh",
                width: "100vw",
                zIndex: 1,
              }}
            ></div>
          ) : null}
        </div>
      </>
    </nav>
  );
}

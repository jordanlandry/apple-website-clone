import { useState } from "react";
import AppleLogo from "../../icons/AppleLogo";
import { NavProps } from "./Navbar";

import NavLink from "../../components/NavLink";
import useKeybind from "../../hooks/useKeybind";

export default function MobileNavbar({}: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useKeybind("Escape", () => setIsOpen(false));

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav--closed">
        <span className={`hamburger-wrapper ${isOpen ? "hamburger-open" : ""}`} onClick={toggleOpen}>
          <div />
          <div />
        </span>
        {isOpen ? (
          <div className="mobile-nav--open">
            <div className="mobile-nav--list">
              <ul onClick={toggleOpen}>
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
              </ul>
            </div>
          </div>
        ) : (
          <>
            <NavLink link="/">
              <AppleLogo size={48} />
            </NavLink>
            <span>Cart</span>
          </>
        )}
      </div>
    </nav>
  );
}

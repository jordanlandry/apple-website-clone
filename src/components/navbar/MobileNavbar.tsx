import { useState } from "react";
import AppleLogo from "../../icons/AppleLogo";
import { NavProps } from "./Navbar";

import NavLink from "../../components/NavLink";
import useKeybind from "../../hooks/useKeybind";

export default function MobileNavbar({}: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useKeybind("Escape", () => setIsOpen(false));

  return (
    <nav className="mobile-nav">
      {isOpen ? (
        <div className="mobile-nav--open">
          <div>
            <span className="hamburger-wrapper" onClick={() => setIsOpen(false)}>
              <div />
              <div />
            </span>
          </div>
          <div className="mobile-nav--list">
            <ul>
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
        <div className="mobile-nav--closed">
          <span className="hamburger-wrapper" onClick={() => setIsOpen(true)}>
            <div />
            <div />
          </span>

          <NavLink link="/">
            <AppleLogo size={48} />
          </NavLink>
          <span>Cart</span>
        </div>
      )}
    </nav>
  );
}

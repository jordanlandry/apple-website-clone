import { useState } from "react";
import useWidth from "../hooks/useWidth";

export default function Navbar() {
  const MAX_WIDTH = 834; // Max width before the navbar collapses into a hamburger menu
  const width = useWidth();

  return (
    <div className="navbar">
      {width >= MAX_WIDTH ? (
        <ul className="navbar--wrapper">
          <li>
            <a href="/">LOGO</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/mac">Mac</a>
          </li>
          <li>
            <a href="ipad">iPad</a>
          </li>
          <li>
            <a href="/iphone">iPhone</a>
          </li>
          <li>
            <a href="/airpods">Airpods</a>
          </li>
          <li>
            <a href="/watch">Watch</a>
          </li>
          <li>
            <a href="/tv-home">TV & Home</a>
          </li>
          <li>
            <a href="/services">Only on Apple</a>
          </li>
          <li>
            <a href="accessories">Accessories</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <span className="navbar--search-bar pointer">SVG</span>
          </li>
          <li>
            <span className="navbar--cart pointer">SVG</span>
          </li>
        </ul>
      ) : (
        <ul className="navbar--collapsed--wrapper">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/mac">Mac</a>
          </li>
          <li>
            <a href="ipad">iPad</a>
          </li>
          <li>
            <a href="/iphone">iPhone</a>
          </li>
          <li>
            <a href="/airpods">Airpods</a>
          </li>
          <li>
            <a href="/watch">Watch</a>
          </li>
          <li>
            <a href="/tv-home">TV & Home</a>
          </li>
          <li>
            <a href="/services">Only on Apple</a>
          </li>
          <li>
            <a href="accessories">Accessories</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
          <li>
            <span className="navbar--search-bar pointer">SVG</span>
          </li>
          <li>
            <span className="navbar--cart pointer">SVG</span>
          </li>
        </ul>
      )}
    </div>
  );
}

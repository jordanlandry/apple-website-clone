import { useState } from "react";
import useWidth from "../../hooks/useWidth";
import MobileNavbar from "./MobileNavbar";
import WindowNavbar from "./WindowNavbar";
import "./navbar.css";

export interface NavProps {
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  width: number;
  MAX_WIDTH: number;
  handleSearch: () => void;
}

export default function Navbar() {
  const MAX_WIDTH = 834; // Max width before the navbar collapses into a hamburger menu
  const width = useWidth();

  const [isSearching, setIsSearching] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleIsSearching = () => setIsSearching((prev) => !prev);
  const toggleCartOpen = () => setCartOpen((prev) => !prev);

  const handleSearch = () => {
    console.log("Searching for", searchQuery);
  };

  return (
    <>
      {width > MAX_WIDTH ? (
        <WindowNavbar
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          width={width}
          MAX_WIDTH={MAX_WIDTH}
          handleSearch={handleSearch}
        />
      ) : (
        <MobileNavbar
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          width={width}
          MAX_WIDTH={MAX_WIDTH}
          handleSearch={handleSearch}
        />
      )}
    </>
  );
}

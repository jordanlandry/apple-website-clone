import React, { useContext } from "react";
import { SetLocationContext } from "../App";
import properties from "../properties";

type Props = { link?: string; children?: React.ReactNode; action?: () => void; className?: string };

export default function NavLink({ link, children, action, className }: Props) {
  const formattedLink = link ? (link.charAt(0) === "/" ? link : `/${link}`) : "";

  const setLocation = useContext(SetLocationContext)
  // For GH-Pages
  const handleClick = () => setLocation(link)

  return (
    <li className={className}>
      {link ? (
        <a href="#" onClick={handleClick}>
          {children}
        </a>
        // <a href={properties.basePath + link}>
        //   {children}
        // </a>
      ) : (
        <button className="btn-blank" onClick={action}>
          {children}
        </button>
      )}
    </li>
  );
}

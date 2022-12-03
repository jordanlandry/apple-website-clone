import React from "react";

type Props = { link?: string; children?: React.ReactNode; action?: () => void; className?: string };

export default function NavLink({ link, children, action, className }: Props) {
  const formattedLink = link ? (link.charAt(0) === "/" ? link : `/${link}`) : "";

  return (
    <li className={className}>
      {link ? (
        <a href={formattedLink} onClick={action}>
          {children}
        </a>
      ) : (
        <button className="btn-blank" onClick={action}>
          {children}
        </button>
      )}
    </li>
  );
}

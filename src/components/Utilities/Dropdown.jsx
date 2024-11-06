import { useState } from "react";

export default function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="nav-dropdown-toggle lowercase">{title}</button>
      {isOpen && <div className="nav-dropdown-menu">{children}</div>}
    </div>
  );
}

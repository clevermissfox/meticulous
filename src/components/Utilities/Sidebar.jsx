import { useState } from "react";

export default function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("International");

  const tabs = [
    "International",
    "Nail Polish",
    "Acrylic Nails",
    "Manicure Supplies",
    "Pedicure Supplies",
    "Files + Buffers",
    "Gel Polish + Supply",
    "Training Classes",
    "Electric File + Bits",
    "Merch + Apparel",
    "Digital Files",
    "Skin Care",
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <ul className="categories-wrapper" role="tablist">
      {tabs.map((tab) => (
        <li key={tab} role="none">
          <button
            role="tab"
            aria-pressed={selectedTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}

// Dont forget <Outlet /> which is helpful for tab components to render each group of content

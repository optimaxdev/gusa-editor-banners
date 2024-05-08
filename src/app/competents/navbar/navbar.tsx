"use client";
// components/Navbar.tsx
import React, { useState } from "react";
import Link from "next/link";
import "./navbar.scss";

const Navbar = () => {
  // const [activeTab, setActiveTab] = useState("");

  // const handleLinkClick = (
  //   path: string,
  //   event: React.MouseEvent<HTMLAnchorElement>
  // ) => {
  //   event.preventDefault();
  //   setActiveTab(path);
  // };

  return (
    <div className="navbar-container">
      <ul className="nav">
        <li>
          <Link href="/hp-editor">HP</Link>
        </li>
        <li>
          <Link href="/ctp-editor">CTP</Link>
        </li>
      </ul>
      <div className="areaIndicator">
        {/* <div
          className="indicator"
          style={{ left: activeTab === "/hp-editor" ? "50%" : "0%" }}
        /> */}
      </div>
    </div>
  );
};

export default Navbar;

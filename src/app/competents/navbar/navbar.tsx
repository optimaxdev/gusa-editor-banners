import React from "react";
import Link from "next/link";
import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <Link href="/hp-editor" className="activeTab">
            HP
          </Link>
        </li>
        <li>
          <Link href="/ctp-editor">CTP</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

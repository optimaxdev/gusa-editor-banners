import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/hp-editor">Hp Editor</Link>
        </li>
        <li>
          <Link href="/ctp-editor">Ctp Editor</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

// components/Layout.tsx

import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layoutp: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      <main style={{ display: "flex" }}>
        <aside style={{ flex: "1", marginRight: "20px" }}>
          {/* Sidebar content (if any) */}
        </aside>
        <section style={{ flex: "2" }}>{children}</section>
        <aside style={{ flex: "1", marginLeft: "20px" }}>
          {/* Right side content (input values) */}
          <h2>Input Values</h2>
          {/* Display input values here */}
        </aside>
      </main>
    </div>
  );
};

export default Layoutp;

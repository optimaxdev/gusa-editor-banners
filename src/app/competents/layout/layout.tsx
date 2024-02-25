// components/Layout.tsx
"use client";
import React from "react";
import Navbar from "../navbar/navbar";
import "./layout.scss";
import Image from "next/image";
interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  formDataCtp: any;
  formDataHp: any;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  formDataCtp,
  formDataHp,
}) => {
  return (
    <div className="allContainer">
      <main className="container">
        <div className="sideBar">
          <header>
            <Navbar />
          </header>
          {children}
        </div>
        <div className="PreviewSide">
          <h2>Preview</h2>
          {/* Display input value based on the current page */}
          {currentPage === "CTP" && (
            <div>
              <p>
                Input value from Input 1 (CTP): {formDataCtp.input1}{" "}
                <Image
                  src={formDataCtp.input1 || "default-image-source"}
                  alt="Image"
                  width={100}
                  height={100}
                />
              </p>
              <p>Input value from Input 2 (CTP): {formDataCtp.input2}</p>
              {/* Display additional input values for CTP as needed */}
            </div>
          )}
          {currentPage === "HP" && (
            <div>
              <p>Input value from Input 1 (HP): {formDataHp.input1}</p>
              <p>Input value from Input 2 (HP): {formDataHp.input2}</p>
              {/* Display additional input values for HP as needed */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;

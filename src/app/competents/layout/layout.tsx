/* eslint-disable react/jsx-no-duplicate-props */
// components/Layout.tsx
"use client";
import React from "react";
import Navbar from "../navbar/navbar";
import "./layout.scss";
import Image from "next/image";
import PreviewBanner from "./PreviewBanner";
import PreviewCode from "./PreviewCode";
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
          {currentPage === "CTP" && (
            <div>
              <p>
                Input value from Input 1 (CTP): {formDataCtp.device}{" "}
                <Image
                  src={formDataCtp.device || "default-image-source"}
                  alt="Image"
                  width={100}
                  height={100}
                />
              </p>
              <p>Input value from Input 2 (CTP): {formDataCtp.input2}</p>
            </div>
          )}
          {currentPage === "HP" && (
            <div>
              <PreviewBanner
                ImageLink={formDataHp.imageLink}
                VideoLink={formDataHp.videoLink}
              />
              <PreviewCode
                ImageLink={formDataHp.imageLink}
                VideoLink={formDataHp.videoLink}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;

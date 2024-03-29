// components/Layout.tsx
"use client";
import React from "react";
import Navbar from "../navbar/navbar";
import "./layout.scss";
import PreviewBanner from "./PreviewBanner";
import PreviewCode from "./PreviewCode";
interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  formDataHp: any;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  formDataHp,
}) => {
  return (
    <div className="allContainer">
      <main className="container">
        <div className="sideBar">
          <header>
            <Navbar />
          </header>
          <div className="scrollBar">{children}</div>
        </div>
        <div className="PreviewSide">
          {currentPage === "CTP" && (
            <div>
              {/* <p>
                Input value from Input 1 (CTP): {formDataCtp.device}{" "}
                <Image
                  src={formDataCtp.device || "default-image-source"}
                  alt="Image"
                  width={100}
                  height={100}
                />
              </p>
              <p>Input value from Input 2 (CTP): {formDataCtp.input2}</p> */}
            </div>
          )}
          {currentPage === "HP" && (
            <div>
              <PreviewBanner
                ImageLink={formDataHp.imageLink}
                VideoLink={formDataHp.videoLink}
                templateD={formDataHp.templateD}
                templateM={formDataHp.templateM}
                formatType={formDataHp.format}
                deviceType={formDataHp.device}
                backgroundColor={formDataHp.backgroundColor}
                themeMode={formDataHp.Theme}
                link={formDataHp.link}
              />
              <PreviewCode
                ImageLink={formDataHp.imageLink}
                VideoLink={formDataHp.videoLink}
                templateD={formDataHp.templateD}
                templateM={formDataHp.templateM}
                formatType={formDataHp.format}
                deviceType={formDataHp.device}
                backgroundColor={formDataHp.backgroundColor}
                themeMode={formDataHp.Theme}
                contentPostion={formDataHp.contentPostion}
                link={formDataHp.link}
                event={formDataHp.event}
                backgroundPostion={formDataHp.backgroundPostion}
                date={formDataHp.date}
                checkactive={formDataHp.checkactive}
                select={formDataHp.select}
                linetext={formDataHp.linetext}
                fontWeightLineOne={formDataHp.fontWeightLineOne}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;

// components/Layout.tsx
"use client";
import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import PreviewBanner from "./PreviewBanner";
import PreviewCode from "./PreviewCode";
import FullScreen from "./fullscreen";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  formDataHp: any; // Replace with appropriate type if available
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  formDataHp,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`allContainer ${isFullScreen ? "activeFullScreen" : ""}`}>
      <main className="container">
        <div className="sideBar">
          <header>
            <Navbar />
          </header>
          <div className="scrollBar">{children}</div>
        </div>
        <div className="scollPreviewside">
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
                {formDataHp.device == "Desktop" ? (
                  <div onClick={handleFullScreenClick}>
                    <FullScreen isActive={isFullScreen} />
                  </div>
                ) : (
                  ""
                )}

                <PreviewBanner
                  ImageLink={formDataHp.imageLink}
                  VideoLink={formDataHp.videoLink}
                  templateD={formDataHp.templateD}
                  templateM={formDataHp.templateM}
                  formatType={formDataHp.format}
                  deviceType={formDataHp.device}
                  backgroundColor={formDataHp.backgroundColor}
                  backgroundPostion={formDataHp.backgroundPostion}
                  themeMode={formDataHp.Theme}
                  contentPostion={formDataHp.contentPostion}
                  link={formDataHp.link}
                  select={formDataHp.select}
                  linetext={formDataHp.linetext}
                  selectTextSize={formDataHp.selectTextSize}
                  fontWeightLineOne={formDataHp.fontWeightLineOne}
                  mBottom={formDataHp.mBottom}
                  textColor={formDataHp.textColor}
                  linetexttwo={formDataHp.linetexttwo}
                  fontWeightLinetwo={formDataHp.fontWeightLinetwo}
                  selectTextSizetwo={formDataHp.selectTextSizetwo}
                  mBottomtwo={formDataHp.mBottomtwo}
                  textColortwo={formDataHp.textColortwo}
                  linetextthree={formDataHp.linetextthree}
                  fontWeightLinethree={formDataHp.fontWeightLinethree}
                  selectTextSizethree={formDataHp.selectTextSizethree}
                  mBottomthree={formDataHp.mBottomthree}
                  textColorthree={formDataHp.textColorthree}
                  selectCta={formDataHp.selectCta}
                  buttonTextOne={formDataHp.buttonTextOne}
                  buttonLinkOne={formDataHp.buttonLinkOne}
                  buttonColorOne={formDataHp.buttonColorOne}
                  buttonTextTwo={formDataHp.buttonTextTwo}
                  buttonLinkTwo={formDataHp.buttonLinkTwo}
                  buttonColorTwo={formDataHp.buttonColorTwo}
                  stripText={formDataHp.stripText}
                  stripLink={formDataHp.stripLink}
                  stripbgColor={formDataHp.stripbgColor}
                  striptxtColor={formDataHp.striptxtColor}
                  stripthemeColor={formDataHp.stripthemeColor}
                  disclaimerleftTxt={formDataHp.disclaimerleftTxt}
                  disclaimerleftTxtFontWeight={
                    formDataHp.disclaimerleftTxtFontWeight
                  }
                  disclaimerleftTxtColor={formDataHp.disclaimerleftTxtColor}
                  disclaimerleftbgColor={formDataHp.disclaimerleftbgColor}
                  disclaimerrightTxt={formDataHp.disclaimerrightTxt}
                  disclaimerrightTxtFontWeight={
                    formDataHp.disclaimerrightTxtFontWeight
                  }
                  disclaimerrightTxtColor={formDataHp.disclaimerrightTxtColor}
                  disclaimerrightbgColor={formDataHp.disclaimerrightbgColor}
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
                  selectTextSize={formDataHp.selectTextSize}
                  mBottom={formDataHp.mBottom}
                  textColor={formDataHp.textColor}
                  linetexttwo={formDataHp.linetexttwo}
                  fontWeightLinetwo={formDataHp.fontWeightLinetwo}
                  selectTextSizetwo={formDataHp.selectTextSizetwo}
                  mBottomtwo={formDataHp.mBottomtwo}
                  textColortwo={formDataHp.textColortwo}
                  linetextthree={formDataHp.linetextthree}
                  fontWeightLinethree={formDataHp.fontWeightLinethree}
                  selectTextSizethree={formDataHp.selectTextSizethree}
                  mBottomthree={formDataHp.mBottomthree}
                  textColorthree={formDataHp.textColorthree}
                  buttonTextOne={formDataHp.buttonTextOne}
                  buttonLinkOne={formDataHp.buttonLinkOne}
                  buttonEventOne={formDataHp.buttonEventOne}
                  buttonColorOne={formDataHp.buttonColorOne}
                  buttonTextTwo={formDataHp.buttonTextTwo}
                  buttonLinkTwo={formDataHp.buttonLinkTwo}
                  buttonEventTwo={formDataHp.buttonEventTwo}
                  buttonColorTwo={formDataHp.buttonColorTwo}
                  selectCta={formDataHp.selectCta}
                  stripText={formDataHp.stripText}
                  stripLink={formDataHp.stripLink}
                  stripbgColor={formDataHp.stripbgColor}
                  striptxtColor={formDataHp.striptxtColor}
                  stripthemeColor={formDataHp.stripthemeColor}
                  disclaimerleftTxt={formDataHp.disclaimerleftTxt}
                  disclaimerleftTxtFontWeight={
                    formDataHp.disclaimerleftTxtFontWeight
                  }
                  disclaimerleftTxtColor={formDataHp.disclaimerleftTxtColor}
                  disclaimerleftbgColor={formDataHp.disclaimerleftbgColor}
                  disclaimerrightTxt={formDataHp.disclaimerrightTxt}
                  disclaimerrightTxtFontWeight={
                    formDataHp.disclaimerrightTxtFontWeight
                  }
                  disclaimerrightTxtColor={formDataHp.disclaimerrightTxtColor}
                  disclaimerrightbgColor={formDataHp.disclaimerrightbgColor}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;

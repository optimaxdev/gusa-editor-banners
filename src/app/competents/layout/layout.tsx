// components/Layout.tsx
"use client";
import React, { useState } from "react";
import PreviewBannerHp from "../editorHp/PreviewBanner";
import PreviewCodeHp from "../editorHp/PreviewCode";
import PreviewCodeCtp from "../editorCtp/PreviewCode";
import PreviewBannerCtp from "../editorCtp/PreviewBanner";
import FullScreen from "./fullscreen";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  formData: any; // Replace with appropriate type if available
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, formData }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    setIsFullScreen(!isFullScreen);
  };
  const [isWide, setIsWide] = useState(true);
  const pathname = usePathname();

  const handleArrowClick = () => {
    setIsWide(!isWide);
  };
  return (
    <div
      className={`allContainer ${isFullScreen ? "activeFullScreen" : ""}  ${
        isWide ? "activeScroll" : ""
      }`}
    >
      <main className="container">
        <div className={`navbar-container ${isWide ? "wide" : ""}`}>
          <div className="arrow" onClick={handleArrowClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                d="M1 19L11 10L1 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul className="nav">
            <li className={pathname === "/hp-editor" ? "activeLink" : ""}>
              <Link href="/hp-editor">HP</Link>
            </li>
            <li className={pathname === "/ctp-editor" ? "activeLink" : ""}>
              <Link href="/ctp-editor">CTP</Link>
            </li>
          </ul>
        </div>
        <div className="sideBar">
          <div className="scrollBar">{children}</div>
        </div>
        <div className="scollPreviewside">
          <div className="PreviewSide">
            {currentPage === "CTP" && (
              <div>
                <PreviewBannerCtp
                  device={formData.device}
                  selectCampaign={formData.selectCampaign}
                  campaign={formData.campaign}
                  campaignTime={formData.campaignTime}
                  ImageLink={formData.imageLink}
                  themeMode={formData.themeMode}
                  backgroundColorStrip={formData.backgroundColorStrip}
                  height={formData.height}
                  trustpilot={formData.trustpilot}
                  displayTitle={formData.displayTitle}
                  headline={formData.headline}
                  textcolorheadline={formData.textcolorheadline}
                  subheadline={formData.subheadline}
                  textcolorsubheadline={formData.textcolorsubheadline}
                  linetext={formData.linetext}
                  selectDsicountType={formData.selectDsicountType}
                  discountValue={formData.discountValue}
                  code={formData.code}
                  mdHeadline={formData.mdHeadline}
                  mdContent={formData.mdContent}
                  generalDisclamier={formData.generalDisclamier}
                  linetexttwo={formData.linetexttwo}
                  codeTwo={formData.codeTwo}
                  selectDsicountTypeTwo={formData.selectDsicountTypeTwo}
                  discountValueTwo={formData.discountValueTwo}
                  mdHeadlineTwo={formData.mdHeadlineTwo}
                  mdContentTwo={formData.mdContentTwo}
                  linetextthree={formData.linetextthree}
                  codeThree={formData.codeThree}
                  selectDsicountTypeThree={formData.selectDsicountTypeThree}
                  discountValueThree={formData.discountValueThree}
                  mdHeadlineThree={formData.mdHeadlineThree}
                  mdContentThree={formData.mdContentThree}
                  select={formData.select}
                  mdsaleName={formData.mdsaleName}
                  txtColorCounter={formData.txtColorCounter}
                  date={formData.date}
                  backgroundColorCounter={formData.backgroundColorCounter}
                  checkactive={formData.checkactive}
                  txtColorCountertwo={formData.txtColorCountertwo}
                  datetwo={formData.datetwo}
                  backgroundColorCountertwo={formData.backgroundColorCountertwo}
                  checkactivetwo={formData.checkactivetwo}
                  txtColorCounterthree={formData.txtColorCounterthree}
                  datethree={formData.datethree}
                  backgroundColorCounterthree={
                    formData.backgroundColorCounterthree
                  }
                  checkactivethree={formData.checkactivethree}
                />
                <PreviewCodeCtp
                  device={formData.device}
                  selectCampaign={formData.selectCampaign}
                  campaign={formData.campaign}
                  campaignTime={formData.campaignTime}
                  ImageLink={formData.imageLink}
                  themeMode={formData.themeMode}
                  backgroundColorStrip={formData.backgroundColorStrip}
                  height={formData.height}
                  trustpilot={formData.trustpilot}
                  displayTitle={formData.displayTitle}
                  headline={formData.headline}
                  textcolorheadline={formData.textcolorheadline}
                  subheadline={formData.subheadline}
                  textcolorsubheadline={formData.textcolorsubheadline}
                  linetext={formData.linetext}
                  selectDsicountType={formData.selectDsicountType}
                  discountValue={formData.discountValue}
                  code={formData.code}
                  mdHeadline={formData.mdHeadline}
                  mdContent={formData.mdContent}
                  generalDisclamier={formData.generalDisclamier}
                  linetexttwo={formData.linetexttwo}
                  codeTwo={formData.codeTwo}
                  selectDsicountTypeTwo={formData.selectDsicountTypeTwo}
                  discountValueTwo={formData.discountValueTwo}
                  mdHeadlineTwo={formData.mdHeadlineTwo}
                  mdContentTwo={formData.mdContentTwo}
                  linetextthree={formData.linetextthree}
                  codeThree={formData.codeThree}
                  selectDsicountTypeThree={formData.selectDsicountTypeThree}
                  discountValueThree={formData.discountValueThree}
                  mdHeadlineThree={formData.mdHeadlineThree}
                  mdContentThree={formData.mdContentThree}
                  select={formData.select}
                  mdsaleName={formData.mdsaleName}
                  txtColorCounter={formData.txtColorCounter}
                  date={formData.date}
                  backgroundColorCounter={formData.backgroundColorCounter}
                  checkactive={formData.checkactive}
                  txtColorCountertwo={formData.txtColorCountertwo}
                  datetwo={formData.datetwo}
                  backgroundColorCountertwo={formData.backgroundColorCountertwo}
                  checkactivetwo={formData.checkactivetwo}
                  txtColorCounterthree={formData.txtColorCounterthree}
                  datethree={formData.datethree}
                  backgroundColorCounterthree={
                    formData.backgroundColorCounterthree
                  }
                  checkactivethree={formData.checkactivethree}
                />
              </div>
            )}
            {currentPage === "HP" && (
              <div>
                {formData.device == "Desktop" ? (
                  <div onClick={handleFullScreenClick}>
                    <FullScreen isActive={isFullScreen} />
                  </div>
                ) : (
                  ""
                )}

                <PreviewBannerHp
                  ImageLink={formData.imageLink}
                  VideoLink={formData.videoLink}
                  templateD={formData.templateD}
                  templateM={formData.templateM}
                  formatType={formData.format}
                  deviceType={formData.device}
                  backgroundColor={formData.backgroundColor}
                  backgroundPostion={formData.backgroundPostion}
                  themeMode={formData.Theme}
                  contentPostion={formData.contentPostion}
                  link={formData.link}
                  select={formData.select}
                  linetext={formData.linetext}
                  selectTextSize={formData.selectTextSize}
                  fontWeightLineOne={formData.fontWeightLineOne}
                  mBottom={formData.mBottom}
                  textColor={formData.textColor}
                  linetexttwo={formData.linetexttwo}
                  fontWeightLinetwo={formData.fontWeightLinetwo}
                  selectTextSizetwo={formData.selectTextSizetwo}
                  mBottomtwo={formData.mBottomtwo}
                  textColortwo={formData.textColortwo}
                  linetextthree={formData.linetextthree}
                  fontWeightLinethree={formData.fontWeightLinethree}
                  selectTextSizethree={formData.selectTextSizethree}
                  mBottomthree={formData.mBottomthree}
                  textColorthree={formData.textColorthree}
                  selectCta={formData.selectCta}
                  buttonTextOne={formData.buttonTextOne}
                  buttonLinkOne={formData.buttonLinkOne}
                  buttonColorOne={formData.buttonColorOne}
                  buttonTextTwo={formData.buttonTextTwo}
                  buttonLinkTwo={formData.buttonLinkTwo}
                  buttonColorTwo={formData.buttonColorTwo}
                  stripText={formData.stripText}
                  stripLink={formData.stripLink}
                  stripbgColor={formData.stripbgColor}
                  striptxtColor={formData.striptxtColor}
                  stripthemeColor={formData.stripthemeColor}
                  disclaimerleftTxt={formData.disclaimerleftTxt}
                  disclaimerleftTxtFontWeight={
                    formData.disclaimerleftTxtFontWeight
                  }
                  disclaimerleftTxtColor={formData.disclaimerleftTxtColor}
                  disclaimerleftbgColor={formData.disclaimerleftbgColor}
                  disclaimerrightTxt={formData.disclaimerrightTxt}
                  disclaimerrightTxtFontWeight={
                    formData.disclaimerrightTxtFontWeight
                  }
                  disclaimerrightTxtColor={formData.disclaimerrightTxtColor}
                  disclaimerrightbgColor={formData.disclaimerrightbgColor}
                />
                <PreviewCodeHp
                  ImageLink={formData.imageLink}
                  VideoLink={formData.videoLink}
                  templateD={formData.templateD}
                  templateM={formData.templateM}
                  formatType={formData.format}
                  deviceType={formData.device}
                  backgroundColor={formData.backgroundColor}
                  themeMode={formData.Theme}
                  contentPostion={formData.contentPostion}
                  link={formData.link}
                  event={formData.event}
                  backgroundPostion={formData.backgroundPostion}
                  date={formData.date}
                  checkactive={formData.checkactive}
                  select={formData.select}
                  linetext={formData.linetext}
                  fontWeightLineOne={formData.fontWeightLineOne}
                  selectTextSize={formData.selectTextSize}
                  mBottom={formData.mBottom}
                  textColor={formData.textColor}
                  linetexttwo={formData.linetexttwo}
                  fontWeightLinetwo={formData.fontWeightLinetwo}
                  selectTextSizetwo={formData.selectTextSizetwo}
                  mBottomtwo={formData.mBottomtwo}
                  textColortwo={formData.textColortwo}
                  linetextthree={formData.linetextthree}
                  fontWeightLinethree={formData.fontWeightLinethree}
                  selectTextSizethree={formData.selectTextSizethree}
                  mBottomthree={formData.mBottomthree}
                  textColorthree={formData.textColorthree}
                  buttonTextOne={formData.buttonTextOne}
                  buttonLinkOne={formData.buttonLinkOne}
                  buttonEventOne={formData.buttonEventOne}
                  buttonColorOne={formData.buttonColorOne}
                  buttonTextTwo={formData.buttonTextTwo}
                  buttonLinkTwo={formData.buttonLinkTwo}
                  buttonEventTwo={formData.buttonEventTwo}
                  buttonColorTwo={formData.buttonColorTwo}
                  selectCta={formData.selectCta}
                  stripText={formData.stripText}
                  stripLink={formData.stripLink}
                  stripbgColor={formData.stripbgColor}
                  striptxtColor={formData.striptxtColor}
                  stripthemeColor={formData.stripthemeColor}
                  disclaimerleftTxt={formData.disclaimerleftTxt}
                  disclaimerleftTxtFontWeight={
                    formData.disclaimerleftTxtFontWeight
                  }
                  disclaimerleftTxtColor={formData.disclaimerleftTxtColor}
                  disclaimerleftbgColor={formData.disclaimerleftbgColor}
                  disclaimerrightTxt={formData.disclaimerrightTxt}
                  disclaimerrightTxtFontWeight={
                    formData.disclaimerrightTxtFontWeight
                  }
                  disclaimerrightTxtColor={formData.disclaimerrightTxtColor}
                  disclaimerrightbgColor={formData.disclaimerrightbgColor}
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

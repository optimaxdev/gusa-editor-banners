// PreviewBanner.tsx
import React from "react";
import Image from "next/image";
interface PreviewBannerProps {
  device: string;
  selectCampaign: string;
  campaign: string;
  campaignTime: string;
  ImageLink: string;
  themeMode: string;
  backgroundColorStrip: string;
  height: string;
  trustpilot: string;
  headline: string;
  textcolorheadline: string;
  subheadline: string;
  textcolorsubheadline: string;
  linetext: string;
  code: string;
  mdHeadline: string;
  mdContent: string;
  generalDisclamier: string;
  linetexttwo: string;
  codeTwo: string;
  mdHeadlineTwo: string;
  mdContentTwo: string;
  linetextthree: string;
  codeThree: string;
  mdHeadlineThree: string;
  mdContentThree: string;
  select: string;
  mdsaleName: string;
  selectDsicountType: string;
  discountValue: string;
  selectDsicountTypeTwo: string;
  discountValueTwo: string;
  selectDsicountTypeThree: string;
  discountValueThree: string;
  txtColorCounter: string;
  date: string;
  backgroundColorCounter: string;
  checkactive: string;
  txtColorCountertwo: string;
  datetwo: string;
  backgroundColorCountertwo: string;
  checkactivetwo: string;
  txtColorCounterthree: string;
  datethree: string;
  backgroundColorCounterthree: string;
  checkactivethree: string;
}

const PreviewBannerCtp: React.FC<PreviewBannerProps> = ({
  device,
  selectCampaign,
  campaign,
  campaignTime,
  ImageLink,
  themeMode = "Light",
  backgroundColorStrip,
  height,
  trustpilot,
  headline,
  textcolorheadline,
  subheadline,
  textcolorsubheadline,
  linetext,
  code,
  mdHeadline,
  mdContent,
  generalDisclamier,
  linetexttwo,
  codeTwo,
  mdHeadlineTwo,
  mdContentTwo,
  linetextthree,
  codeThree,
  mdHeadlineThree,
  mdContentThree,
  select,
  mdsaleName,
  selectDsicountType,
  discountValue,
  selectDsicountTypeTwo,
  discountValueTwo,
  selectDsicountTypeThree,
  discountValueThree,
  txtColorCounter,
  date,
  backgroundColorCounter,
  checkactive,
  txtColorCountertwo,
  datetwo,
  backgroundColorCountertwo,
  checkactivetwo,
  txtColorCounterthree,
  datethree,
  backgroundColorCounterthree,
  checkactivethree,
}) => {
  return (
    <>
      <div
        className={`${device === "Desktop" ? "desktopStyle" : "mobileStyle"}`}
      >
        <div
          className={`strip ${themeMode === "Dark" ? "dark" : "light"}`}
          style={{ backgroundColor: backgroundColorStrip }}
        ></div>
        <Image
          src={
            device === "Desktop"
              ? ImageLink
                ? ImageLink
                : "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/media/wysiwyg/hp24/map-hp-d-new.png"
              : ImageLink
              ? ImageLink
              : "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto:eco/media/wysiwyg/lp23/main-desktopmobile.png"
          }
          alt={"image"}
          width={1024}
          height={100}
          className={`imageCtpbanner ${height == "Small" ? "large" : "Large"}`}
        />
      </div>
    </>
  );
};

export default PreviewBannerCtp;

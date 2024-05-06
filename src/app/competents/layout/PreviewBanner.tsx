// PreviewBanner.tsx
import React from "react";
import Image from "next/image";
interface PreviewBannerProps {
  ImageLink: string;
  VideoLink: string;
  templateD: string;
  templateM: string;
  formatType: string;
  deviceType: string;
  backgroundColor: string;
  themeMode: string;
  link: string;
  contentPostion: string;
  backgroundPostion: string;
  linetext: string;
  selectTextSize: string;
  fontWeightLineOne: string;
  mBottom: string;
  textColor: string;
  linetexttwo: string;
  fontWeightLinetwo: string;
  selectTextSizetwo: string;
  mBottomtwo: string;
  textColortwo: string;
  linetextthree: string;
  fontWeightLinethree: string;
  selectTextSizethree: string;
  mBottomthree: string;
  textColorthree: string;
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
  templateD = "0",
  templateM = "0",
  formatType,
  deviceType,
  backgroundColor,
  themeMode,
  backgroundPostion,
  link,
  contentPostion,
  linetext,
  selectTextSize,
  fontWeightLineOne,
  mBottom,
  textColor,
  linetexttwo,
  fontWeightLinetwo,
  selectTextSizetwo,
  mBottomtwo,
  textColortwo,
  linetextthree,
  fontWeightLinethree,
  selectTextSizethree,
  mBottomthree,
  textColorthree,
}) => {
  return (
    <a
      href={
        (deviceType == "Desktop" && templateD === "0") ||
        (deviceType == "Mobile" && templateM === "0")
          ? link
          : "#"
      }
      style={{
        backgroundColor: backgroundColor === "" ? "#a29f9f" : backgroundColor,
      }}
      className={
        deviceType == "Mobile"
          ? "previewBanner MobileStyle"
          : "previewBanner DesktopStyle"
      }
    >
      {deviceType == "Desktop" ? (
        templateD == "4" ? (
          <div className="flex">
            <div className="halfBanner">ss</div>
            <div className="halfBanner">
              {ImageLink ? (
                <Image
                  src={ImageLink}
                  alt={"image"}
                  width={1024}
                  height={256}
                  className="imagePreviewHalf"
                  style={{ objectPosition: backgroundPostion }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        ) : templateD == "5" ? (
          <div className="flex">
            <div className="halfBanner">
              {ImageLink ? (
                <Image
                  src={ImageLink}
                  alt={"image"}
                  width={1024}
                  height={256}
                  className="imagePreviewHalf"
                  style={{ objectPosition: backgroundPostion }}
                />
              ) : (
                ""
              )}
            </div>
            <div className="halfBanner">
              <div
                className={selectTextSize}
                style={{
                  color: themeMode == "Light" ? "#000" : textColor,
                  marginBottom: mBottom,
                  fontWeight: fontWeightLineOne,
                }}
              >
                {linetext}
              </div>
            </div>
          </div>
        ) : templateD ? (
          <div
            className={`fullImage ${
              themeMode == "Dark" ? "darkTxt" : "lightText"
            }`}
          >
            {ImageLink ? (
              <Image
                src={ImageLink}
                alt={"image"}
                width={1024}
                height={800}
                className="imagePreview"
              />
            ) : (
              ""
            )}
            <div
              className={`contentPostion ${
                templateD == "3"
                  ? "left"
                  : templateD == "2"
                  ? "right"
                  : templateD == "1"
                  ? "center"
                  : "hide"
              } ${
                contentPostion == "right"
                  ? "textright"
                  : contentPostion == "center"
                  ? "textcenter"
                  : ""
              }`}
            >
              <div
                className={selectTextSize ? selectTextSize : "h1"}
                style={{
                  color: textColor,
                  marginBottom: mBottom ? mBottom + "px" : "0",
                  fontWeight: fontWeightLineOne,
                }}
              >
                {linetext}
              </div>
              <div
                className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                style={{
                  color: textColortwo,
                  marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                  fontWeight: fontWeightLinetwo,
                }}
              >
                {linetexttwo}
              </div>
              <div
                className={selectTextSizethree ? selectTextSizethree : "h1"}
                style={{
                  color: textColorthree,
                  marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                  fontWeight: fontWeightLinethree,
                }}
              >
                {linetextthree}
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        <div className="MobileStyle">
          {templateM === "3" ? (
            <>
              <div className="areaImage">
                <Image
                  src={ImageLink}
                  alt={"image"}
                  width={375}
                  height={180}
                  className="imagePreviewHalfMobile"
                  style={{ objectPosition: backgroundPostion }}
                />
              </div>
              <div
                className={`halfTxtMobile ${
                  themeMode == "Dark" ? "darkTxt" : "lightText"
                }`}
              >
                <div
                  className={selectTextSize ? selectTextSize : "h1"}
                  style={{
                    color: textColor,
                    marginBottom: mBottom ? mBottom + "px" : "0",
                    fontWeight: fontWeightLineOne,
                  }}
                >
                  {linetext}
                </div>
                <div
                  className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                  style={{
                    color: textColortwo,
                    marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                    fontWeight: fontWeightLinetwo,
                  }}
                >
                  {linetexttwo}
                </div>
                <div
                  className={selectTextSizethree ? selectTextSizethree : "h1"}
                  style={{
                    color: textColorthree,
                    marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                    fontWeight: fontWeightLinethree,
                  }}
                >
                  {linetextthree}
                </div>
              </div>
            </>
          ) : (
            <Image
              src={ImageLink}
              alt={"image"}
              width={375}
              height={360}
              className=""
              style={{ objectPosition: backgroundPostion }}
            />
          )}
        </div>
      )}

      {VideoLink && (
        <video poster={ImageLink} playsInline autoPlay>
          <source src={VideoLink} type="video/mp4" />
        </video>
      )}
    </a>
  );
};

export default PreviewBanner;

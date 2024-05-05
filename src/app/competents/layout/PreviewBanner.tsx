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
  backgroundPostion: string;
  linetext: string;
  selectTextSize: string;
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
  templateD = "0",
  templateM = "0",
  formatType,
  deviceType,
  backgroundColor = "#000000",
  themeMode,
  backgroundPostion,
  link,
  linetext,
  selectTextSize,
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
        backgroundColor: backgroundColor === "" ? "#000" : backgroundColor,
      }}
      // className="previewBanner"
      className={
        templateD === "4" || templateD === "5"
          ? "previewBanner flex"
          : "previewBanner"
      }
    >
      {templateD == "4" ? (
        <>
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
        </>
      ) : templateD == "5" ? (
        <>
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
            <div className={selectTextSize}>{linetext}</div>
          </div>
        </>
      ) : ImageLink ? (
        <Image
          src={ImageLink}
          alt={"image"}
          width={1024}
          height={500}
          className="imagePreview"
        />
      ) : (
        ""
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

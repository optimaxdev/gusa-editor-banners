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
  link,
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
      className="previewBanner"
    >
      {ImageLink && !VideoLink ? (
        <Image
          src={ImageLink}
          alt={"image"}
          width={1024}
          height={256}
          className="imagePreview"
        />
      ) : (
        <span className="hide"> backgroundColor</span>
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

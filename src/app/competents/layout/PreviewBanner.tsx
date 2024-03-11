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
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
  templateD,
  templateM,
  formatType,
  deviceType,
  backgroundColor,
  themeMode,
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor === "" ? "#000" : backgroundColor,
      }}
      className="previewBanner"
    >
      <Image
        src={
          ImageLink
            ? ImageLink
            : "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/media/wysiwyg/lp23/hp-banner-desktop-newsale.png"
        }
        alt={"image"}
        width={0}
        height={0}
        className="imagePreview"
      />

      {/* <p>{ImageLink}</p> */}
      <p>{VideoLink}</p>
      <p>{templateD}</p>
      <p>{templateM}</p>
    </div>
  );
};

export default PreviewBanner;

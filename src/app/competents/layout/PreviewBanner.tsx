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
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
  templateD,
  templateM,
  formatType,
  deviceType,
  backgroundColor,
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
        width={1024}
        height={200}
        className="imagePreview"
        onError={(e) => console.error("Error loading image:", e)}
      />

      {/* <p>{ImageLink}</p> */}
      <p>{VideoLink}</p>
      <p>{templateD}</p>
      <p>{templateM}</p>
    </div>
  );
};

export default PreviewBanner;

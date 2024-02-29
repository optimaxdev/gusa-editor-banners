// PreviewBanner.tsx
import React from "react";

interface PreviewCode {
  ImageLink: string;
  VideoLink: string;
}

const PreviewCode: React.FC<PreviewCode> = ({ ImageLink, VideoLink }) => {
  return (
    <div>
      <p> {ImageLink}</p>
      <p>{VideoLink}</p>
    </div>
  );
};

export default PreviewCode;

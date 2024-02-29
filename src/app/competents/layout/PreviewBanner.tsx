// PreviewBanner.tsx
import React from "react";

interface PreviewBannerProps {
  ImageLink: string;
  VideoLink: string;
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
}) => {
  return (
    <div>
      <p>{ImageLink}</p>
      <p>{VideoLink}</p>
    </div>
  );
};

export default PreviewBanner;

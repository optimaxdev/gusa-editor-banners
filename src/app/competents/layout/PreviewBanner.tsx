// PreviewBanner.tsx
import React from "react";

interface PreviewBannerProps {
  ImageLink: string;
  VideoLink: string;
  template: string;
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
  template,
}) => {
  return (
    <div>
      <p>{ImageLink}</p>
      <p>{VideoLink}</p>
      <p>{template}</p>
    </div>
  );
};

export default PreviewBanner;

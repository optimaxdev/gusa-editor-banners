// PreviewBanner.tsx
import React from "react";

interface PreviewCode {
  ImageLink: string;
  VideoLink: string;
  template: string;
  formatType: string;
}

const PreviewCode: React.FC<PreviewCode> = ({
  ImageLink,
  VideoLink,
  template,
  formatType,
}) => {
  const actionEvent = "${action}",
    labelEvent = "${label}";
  return (
    <blockquote>
      <pre>
        <code>
          {`    {
        "value": [{
        "image": "${ImageLink}",
        ${
          formatType === "video"
            ? `"video": [{ "source": "${VideoLink}", "type": "video/mp4" }]`
            : ""
        }
          "template": ${template}
        }
      ],
        "analytics": {
        "action": "${actionEvent}",
        "label": "${labelEvent}"
        }
    } 
      `}
          {/* <p> {ImageLink}</p>
      <p>{VideoLink}</p>
      <p>{template}</p> */}
        </code>
      </pre>
    </blockquote>
  );
};

export default PreviewCode;

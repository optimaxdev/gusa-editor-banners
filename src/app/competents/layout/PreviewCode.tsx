import React, { useState } from "react";
import beautify from "js-beautify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PreviewCodeProps {
  ImageLink: string;
  VideoLink: string;
  templateD: string;
  templateM: string;
  formatType: string;
  deviceType: string;
  backgroundColor: string;
  themeMode: string;
  contentPostion: string;
  link: string;
  event: string;
  backgroundPostion: string;
}

const PreviewCode: React.FC<PreviewCodeProps> = ({
  ImageLink,
  VideoLink,
  templateD = "0",
  templateM = "0",
  formatType,
  deviceType = "Desktop",
  backgroundColor,
  themeMode,
  contentPostion,
  link,
  event,
  backgroundPostion,
}) => {
  const beautifyJson = (jsonData: string) => {
    const beautifiedJson = beautify(jsonData, {
      indent_char: " ",
      indent_size: 2,
      preserve_newlines: false,
    });

    return beautifiedJson;
  };

  // Variables for action and label events
  const actionEvent = "${action}";
  const labelEvent = "${label}";
  // Construct the JSON string
  const jsonString = `{
    "value": [
      {
        "image": "${ImageLink}",
        ${
          formatType === "video" && VideoLink
            ? `"video": [{ "source": "${VideoLink}", "type": "video/mp4" }],`
            : ""
        }
        "template": ${
          deviceType == "Mobile"
            ? templateM
              ? templateM
              : 0
            : templateD
            ? templateD
            : 0
        }
        ,
        "backgroundPosition": "${
          backgroundPostion ? backgroundPostion : "left"
        }",
        "backgroundColor":"${backgroundColor ? backgroundColor : "#000000"}",
        "theme":"${themeMode ? themeMode.toLowerCase() : "light"}",
        "contentPosition":"${contentPostion ? contentPostion : "left"}",
         ${
           (deviceType == "Desktop" && templateD === "0") ||
           (deviceType == "Mobile" && templateM === "0")
             ? `"link": "${link ? link : ""}",`
             : ""
         }
         ${
           (deviceType == "Desktop" && templateD == "0") ||
           (deviceType == "Mobile" && templateM === "0")
             ? `"linkAnalytics":"${`Unknown >> slider (control) >> Slide 1 >>${
                 event ? event : ""
               }`}"`
             : ""
         }
      }
      
    ],
    "analytics": {
      "action": "${actionEvent}",
      "label": "${labelEvent}"
    }
  }`;

  // Beautify the JSON string
  const beautifiedJson = beautifyJson(jsonString);
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopyClick = () => {
    const textToCopy = beautifiedJson;
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1000);
  };
  return (
    <div>
      <blockquote>
        <SyntaxHighlighter
          showLineNumbers={true}
          customStyle={{ backgroundColor: "white" }}
          language="json"
          style={solarizedlight}
        >
          {beautifiedJson}
        </SyntaxHighlighter>
        <div className="copyIcon" onClick={handleCopyClick}>
          {copySuccess ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3884 1.05484C17.8114 1.40984 17.8666 2.0406 17.5116 2.46367L7.8698 13.9543C7.5148 14.3774 6.88404 14.4326 6.46097 14.0776L0.715634 9.25669C0.292559 8.90169 0.237376 8.27093 0.592377 7.84786C0.947379 7.42478 1.57813 7.3696 2.00121 7.7246L6.9805 11.9027L15.9795 1.1781C16.3345 0.755023 16.9653 0.699839 17.3884 1.05484Z"
                fill="#1C1B1F"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_210_13260)">
                <path
                  d="M9 18C8.45 18 7.97917 17.8042 7.5875 17.4125C7.19583 17.0208 7 16.55 7 16V4C7 3.45 7.19583 2.97917 7.5875 2.5875C7.97917 2.19583 8.45 2 9 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H9ZM9 16H18V4H9V16ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6H5V20H16V22H5Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          )}
        </div>
      </blockquote>
    </div>
  );
};

export default PreviewCode;

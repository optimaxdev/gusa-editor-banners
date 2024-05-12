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
  date: string;
  checkactive: string;
  select: string;
  selectCta: string;
  linetext: string;
  fontWeightLineOne: string;
  selectTextSize: string;
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
  buttonTextOne: string;
  buttonLinkOne: string;
  buttonEventOne: string;
  buttonColorOne: string;
  buttonTextTwo: string;
  buttonLinkTwo: string;
  buttonEventTwo: string;
  buttonColorTwo: string;
  stripText: string;
  stripLink: string;
  stripbgColor: string;
  striptxtColor: string;
  disclaimerleftTxt: string;
  disclaimerleftTxtFontWeight: string;
  disclaimerleftTxtColor: string;
  disclaimerleftbgColor: string;
  disclaimerrightTxt: string;
  disclaimerrightTxtFontWeight: string;
  disclaimerrightTxtColor: string;
  disclaimerrightbgColor: string;
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
  date,
  checkactive,
  select,
  selectCta,
  linetext,
  fontWeightLineOne,
  selectTextSize,
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
  buttonTextOne,
  buttonLinkOne,
  buttonEventOne,
  buttonColorOne,
  buttonTextTwo,
  buttonLinkTwo,
  buttonEventTwo,
  buttonColorTwo,
  stripText,
  stripLink,
  stripbgColor,
  striptxtColor,
  disclaimerleftTxt,
  disclaimerleftTxtFontWeight,
  disclaimerleftTxtColor,
  disclaimerleftbgColor,
  disclaimerrightTxt,
  disclaimerrightTxtFontWeight,
  disclaimerrightTxtColor,
  disclaimerrightbgColor,
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
  const dateValue = date ? new Date(date) : null;
  const dateFormat = dateValue
    ? dateValue.toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
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
        ${
          checkactive == "true"
            ? ` ${dateFormat ? `,"deadline": "${dateFormat} 2:00:00",` : ","}`
            : ","
        }
       
        "backgroundPosition": "${
          backgroundPostion ? backgroundPostion : "left"
        }",
        "backgroundColor":"${backgroundColor ? backgroundColor : "#000000"}",
        "theme":"${themeMode ? themeMode.toLowerCase() : "light"}",
       ${
         deviceType == "Desktop" && templateD !== "1"
           ? `"contentPosition":"${contentPostion ? contentPostion : "left"}",`
           : ""
       }
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
         ${
           (templateD !== "0" && deviceType == "Desktop") ||
           (templateM !== "0" && deviceType == "Mobile")
             ? `
         "lines": [{
          "text":"${
            linetext
              ? textColor
                ? `<span style='color:${textColor}'>` + linetext + "</span>"
                : linetext
              : ""
          }",
          "weight":"${fontWeightLineOne ? fontWeightLineOne : "normal"}",
          "size": "${selectTextSize ? selectTextSize : "h1"}"
          ${mBottom ? `,"marginBottom":"${mBottom}px"` : ""}
         }
        ${
          select == "2"
            ? `,{
            "text":"${
              linetexttwo
                ? textColortwo
                  ? `<span style='color:${textColortwo}'>` +
                    linetexttwo +
                    "</span>"
                  : linetexttwo
                : ""
            }",
            "weight":"${fontWeightLinetwo ? fontWeightLinetwo : "normal"}",
            "size": "${selectTextSizetwo ? selectTextSizetwo : "h1"}"
            ${mBottomtwo ? `,"marginBottom":"${mBottomtwo}px"` : ""}
           
        }`
            : ""
        }
        ${
          select == "3"
            ? `
            ,{
              "text":"${
                linetexttwo
                  ? textColortwo
                    ? `<span style='color:${textColortwo}'>` +
                      linetexttwo +
                      "</span>"
                    : linetexttwo
                  : ""
              }",
              "weight":"${fontWeightLinetwo ? fontWeightLinetwo : "normal"}",
              "size": "${selectTextSizetwo ? selectTextSizetwo : "h1"}"
              ${mBottomtwo ? `,"marginBottom":"${mBottomtwo}px"` : ""}
             
          }
            
            ,{
            "text":"${
              linetextthree
                ? textColorthree
                  ? `<span style='color:${textColorthree}'>` +
                    linetextthree +
                    "</span>"
                  : linetextthree
                : ""
            }",
            "weight":"${fontWeightLinethree ? fontWeightLinethree : "normal"}",
            "size": "${selectTextSizethree ? selectTextSizethree : "h1"}"
            ${mBottomthree ? `,"marginBottom":"${mBottomthree}px"` : ""}
           
        }`
            : ""
        }
        ],
        ${
          disclaimerleftTxt || disclaimerrightTxt
            ? `
            "disclaimer": [
              ${
                disclaimerleftTxt
                  ? `
              
              {
                "text": "${disclaimerleftTxt}",
                "position": "left",
                "weight": "${
                  disclaimerleftTxtFontWeight
                    ? disclaimerleftTxtFontWeight
                    : "normal"
                }"
                ${
                  disclaimerleftTxtColor
                    ? `,"color":"${disclaimerleftTxtColor.toLowerCase()}"`
                    : ""
                }
                ${
                  disclaimerleftbgColor
                    ? `,"backgroundColor":"${disclaimerleftbgColor.toLowerCase()}"`
                    : ""
                }
            }
              `
                  : ""
              }
${disclaimerleftTxt ? "," : ""}
              ${
                disclaimerrightTxt
                  ? `
              {
                "text": "${disclaimerrightTxt}",
                "position": "right",
                "weight": "${
                  disclaimerrightTxtFontWeight
                    ? disclaimerrightTxtFontWeight
                    : "normal"
                }"
                ${
                  disclaimerrightTxtColor
                    ? `,"color":"${disclaimerrightTxtColor.toLowerCase()}"`
                    : ""
                }
                ${
                  disclaimerrightbgColor
                    ? `,"backgroundColor":"${disclaimerrightbgColor.toLowerCase()}"`
                    : ""
                }
              }
              `
                  : ""
              }
  
          ],
        
        `
            : ""
        }
        "buttons": [
${`{
  "text":"${buttonTextOne}",
  "link":"${buttonLinkOne}",
  "analytics": {
    "action": "HP Banner Click",
    "label": "Unknown >> slider (two buttons gender) >> Slide 1 - ${buttonEventOne} >> ${buttonTextOne}"
}
${
  buttonColorOne
    ? `,"color":"${buttonColorOne.toLocaleLowerCase()}"`
    : `,"color":"light"`
}
  }
  ${
    selectCta == "2"
      ? `,{
    "text":"${buttonTextTwo}",
    "link":"${buttonLinkTwo}",
    "analytics": {
      "action": "HP Banner Click",
      "label": "Unknown >> slider (two buttons gender) >> Slide 1 - ${buttonEventOne} >> ${buttonTextTwo}"
  }
  ${
    buttonColorTwo
      ? `,"color":"${buttonColorTwo.toLocaleLowerCase()}"`
      : `,"color":"light"`
  }
}
  `
      : ""
  }
  
  `}

        ]
        ${
          deviceType == "Desktop" && stripText
            ? `,"bottomStrip": {
          "text": "${stripText}",
          "link": "${stripLink}",
          "analytics": {
            "action": "HP Banner Click",
            "label": "Unknown >> slider (two buttons gender) >> Slide 1 - ${buttonEventTwo} >> ${stripText}"
          }
        }`
            : ""
        }
         `
             : ""
         }
      }

    ],
    ${
      deviceType == "Mobile" && stripText
        ? `"bottomStrip": {
      "text": "${stripText}",
      "link": "${stripLink}",
      "textColor": "${striptxtColor ? striptxtColor : "#000"}",
      "backgroundColor": "${stripbgColor ? stripbgColor : "#fff"}",
      "analytics": {
        "action": "HP Banner Click",
        "label": "Unknown >> slider (two buttons gender) >> Slide 1 - ${buttonEventTwo} >> ${stripText}"
      }
    },`
        : ""
    }
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

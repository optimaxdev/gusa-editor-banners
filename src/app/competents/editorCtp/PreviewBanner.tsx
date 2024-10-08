import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PreviewBannerProps {
  device: string;
  selectCampaign: string;
  campaign: string;
  campaignTime: string;
  ImageLink: string;
  themeMode: string;
  backgroundColorStrip: string;
  height: string;
  trustpilot: string;
  displayTitle: string;
  headline: string;
  textcolorheadline: string;
  subheadline: string;
  textcolorsubheadline: string;
  linetext: string;
  code: string;
  mdHeadline: string;
  mdContent: string;
  generalDisclamier: string;
  linetexttwo: string;
  codeTwo: string;
  mdHeadlineTwo: string;
  mdContentTwo: string;
  linetextthree: string;
  codeThree: string;
  mdHeadlineThree: string;
  mdContentThree: string;
  select: string;
  mdsaleName: string;
  selectDsicountType: string;
  discountValue: string;
  selectDsicountTypeTwo: string;
  discountValueTwo: string;
  selectDsicountTypeThree: string;
  discountValueThree: string;
  txtColorCounter: string;
  date: string;
  backgroundColorCounter: string;
  checkactive: string;
  txtColorCountertwo: string;
  datetwo: string;
  backgroundColorCountertwo: string;
  checkactivetwo: string;
  txtColorCounterthree: string;
  datethree: string;
  backgroundColorCounterthree: string;
  checkactivethree: string;
  offerSelect: string;
  offerSelectTwo: string;
  offerSelectThree: string;
}

const PreviewBannerCtp: React.FC<PreviewBannerProps> = ({
  device,
  selectCampaign,
  campaign,
  campaignTime,
  ImageLink,
  themeMode,
  backgroundColorStrip,
  height = "Large",
  trustpilot,
  displayTitle = "false",
  headline,
  textcolorheadline,
  subheadline,
  textcolorsubheadline,
  linetext,
  code,
  mdHeadline,
  mdContent,
  generalDisclamier,
  linetexttwo,
  codeTwo,
  mdHeadlineTwo,
  mdContentTwo,
  linetextthree,
  codeThree,
  mdHeadlineThree,
  mdContentThree,
  select,
  mdsaleName,
  selectDsicountType,
  discountValue,
  selectDsicountTypeTwo,
  discountValueTwo,
  selectDsicountTypeThree,
  discountValueThree,
  txtColorCounter,
  date,
  backgroundColorCounter,
  checkactive,
  txtColorCountertwo,
  datetwo,
  backgroundColorCountertwo,
  checkactivetwo,
  txtColorCounterthree,
  datethree,
  backgroundColorCounterthree,
  checkactivethree,
  offerSelect,
  offerSelectTwo,
  offerSelectThree,
}) => {
  const [currentStrip, setCurrentStrip] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null); // Track copied strip
  const [countdown, setCountdown] = useState<string>("");
  const [countdownTwo, setCountdownTwo] = useState<string>("");
  const [countdownThree, setCountdownThree] = useState<string>("");
  const strips = [
    {
      linetext: linetext,
      code: code,
      id: 1,
      checkactive: checkactive,
      date: date,
      backgroundCounter: backgroundColorCounter,
      txtcolorCounter: txtColorCounter,
      countdown: countdown,
      offerSelectStrip: offerSelect,
    },
    {
      linetext: linetexttwo,
      code: codeTwo,
      id: 2,
      checkactive: checkactivetwo,
      date: datetwo,
      backgroundCounter: backgroundColorCountertwo,
      txtcolorCounter: txtColorCountertwo,
      countdown: countdownTwo,
      offerSelectStrip: offerSelectTwo,
    },
    {
      linetext: linetextthree,
      code: codeThree,
      id: 3,
      checkactive: checkactivethree,
      date: datethree,
      backgroundCounter: backgroundColorCounterthree,
      txtcolorCounter: txtColorCounterthree,
      countdown: countdownThree,
      offerSelectStrip: offerSelectThree,
    },
  ].filter((strip) => strip.linetext);

  const handleChangeStrip = (next: boolean) => {
    if (!animating) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setCurrentStrip((prev) =>
          next
            ? prev === strips.length - 1
              ? 0
              : prev + 1
            : prev === 0
            ? strips.length - 1
            : prev - 1
        );
      }, 300);
    }
  };

  const handleMoreDetailsClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  const handleCopyCode = (code: string, id: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(id.toString());
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    });
  };
  const getBrightness = (color: string): number => {
    let r = 0,
      g = 0,
      b = 0;

    // Check if the color is in hex format
    if (color[0] === "#") {
      const hex = color.replace("#", "");

      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else if (color.startsWith("rgb")) {
      const rgbValues = color.match(/\d+/g);
      if (rgbValues) {
        r = parseInt(rgbValues[0]);
        g = parseInt(rgbValues[1]);
        b = parseInt(rgbValues[2]);
      }
    }

    // Calculate brightness using the formula
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  // Determine if the text should be light or dark based on brightness
  const brightness = backgroundColorStrip
    ? getBrightness(backgroundColorStrip)
    : 255; // Default brightness for white
  const textColor = brightness > 125 ? "black" : "white";
  const moreDetailsColor = brightness > 125 ? "#4d4d4d" : "white";
  const copySvg = brightness > 125 ? "#4d4d4d" : "white";

  {
    /*Date */
  }

  const updateCountdown = (
    targetDate: string,
    setCountdown: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const target = new Date(`${targetDate} 00:00:00 GMT-0800`).getTime();
    const now = new Date().getTime();
    const distance = target - now;

    if (distance <= 0) {
      setCountdown(""); // Display 0 time or any other message
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (num: number) => num.toString().padStart(2, "0");

    setCountdown(`${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
  };

  useEffect(() => {
    const intervalIds: NodeJS.Timeout[] = [];

    if (date) {
      updateCountdown(date, setCountdown);
      intervalIds.push(
        setInterval(() => updateCountdown(date, setCountdown), 1000)
      );
    }

    if (datetwo) {
      updateCountdown(datetwo, setCountdownTwo);
      intervalIds.push(
        setInterval(() => updateCountdown(datetwo, setCountdownTwo), 1000)
      );
    }

    if (datethree) {
      updateCountdown(datethree, setCountdownThree);
      intervalIds.push(
        setInterval(() => updateCountdown(datethree, setCountdownThree), 1000)
      );
    }

    return () => {
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [date, datetwo, datethree]);
  return (
    <div className={`${device === "Desktop" ? "desktopStyle" : "mobileStyle"}`}>
      <div
        className={`strip ${themeMode === "Dark" ? "dark" : "light"}`}
        style={{
          backgroundColor: backgroundColorStrip ? backgroundColorStrip : "",
          color: backgroundColorStrip ? textColor : "",
        }}
      >
        {device === "Desktop" ? (
          <>
            {select !== "1" && strips.length > 0 ? (
              <div className="areaCarousel">
                <div className="carousel-container">
                  <div
                    className="carousel-strip"
                    style={{
                      transform: `translateX(-${currentStrip * 100}%)`,
                    }}
                  >
                    {strips.map((strip) => (
                      <div
                        key={strip.id}
                        style={{
                          minWidth: "100%",
                        }}
                      >
                        {strip.offerSelectStrip !== "Choose offer" ? (
                          <>
                            <span>
                              <b>
                                {strip.linetext.length <= 30
                                  ? strip.linetext
                                  : ""}
                              </b>
                            </span>
                            <span className="mbetween">
                              Code:<b>{strip.code}</b>
                            </span>
                            {strip.checkactive === "true" && strip.countdown ? (
                              <span
                                className="counterArea"
                                style={{
                                  backgroundColor: strip.backgroundCounter
                                    ? strip.backgroundCounter
                                    : "",
                                  color: strip.txtcolorCounter
                                    ? strip.txtcolorCounter
                                    : "",
                                }}
                              >
                                {strip.countdown}
                              </span>
                            ) : (
                              ""
                            )}
                            <span
                              className="moreDetails"
                              onClick={handleMoreDetailsClick}
                              style={{
                                backgroundColor: backgroundColorStrip
                                  ? backgroundColorStrip
                                  : "",
                                color: backgroundColorStrip
                                  ? moreDetailsColor
                                  : "",
                              }}
                            >
                              More Details
                            </span>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {offerSelectTwo !== "Choose offer" ||
                offerSelectThree !== "Choose offer" ? (
                  <>
                    <div
                      className="carousel-control prev hoverArrow"
                      onClick={() => handleChangeStrip(false)}
                    >
                      {themeMode == "Dark" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M7.5 0.600098L1.5 6.0001L7.5 11.4001"
                            stroke="#DBE1E5"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{
                              stroke: backgroundColorStrip ? copySvg : "",
                            }}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M7.5 0.600098L1.5 6.0001L7.5 11.4001"
                            stroke="#4D4D4D"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{
                              stroke: backgroundColorStrip ? copySvg : "",
                            }}
                          />
                        </svg>
                      )}
                    </div>
                    <div
                      className="carousel-control next hoverArrow"
                      onClick={() => handleChangeStrip(true)}
                    >
                      {themeMode == "Dark" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M1.5 11.3999L7.5 5.9999L1.5 0.599902"
                            stroke="#DBE1E5"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{
                              stroke: backgroundColorStrip ? copySvg : "",
                            }}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M1.5 11.3999L7.5 5.9999L1.5 0.599902"
                            stroke="#4D4D4D"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{
                              stroke: backgroundColorStrip ? copySvg : "",
                            }}
                          />
                        </svg>
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <>
                {linetext ? (
                  <div
                    style={{
                      minWidth: "100%",
                    }}
                  >
                    <span>
                      <b> {linetext.length <= 30 ? linetext : ""}</b>
                    </span>
                    <span className="mbetween">
                      Code:<b>{code}</b>
                    </span>
                    {checkactive === "true" && countdown ? (
                      <span
                        className="counterArea"
                        style={{
                          backgroundColor: backgroundColorCounter
                            ? backgroundColorCounter
                            : "",
                          color: txtColorCounter ? txtColorCounter : "",
                        }}
                      >
                        {countdown}
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      className="moreDetails"
                      onClick={handleMoreDetailsClick}
                      style={{
                        backgroundColor: backgroundColorStrip
                          ? backgroundColorStrip
                          : "",
                        color: backgroundColorStrip ? moreDetailsColor : "",
                      }}
                    >
                      More Details
                    </span>
                  </div>
                ) : null}
              </>
            )}
          </>
        ) : (
          <>
            {select !== "1" && strips.length > 0 ? (
              <div className="areaCarousel">
                <div className="carousel-container">
                  <div
                    className="carousel-strip"
                    style={{
                      transform: `translateX(-${currentStrip * 100}%)`,
                    }}
                  >
                    {strips.map((strip) => (
                      <div
                        key={strip.id}
                        style={{
                          minWidth: "100%",
                        }}
                      >
                        {strip.offerSelectStrip !== "Choose offer" ? (
                          <>
                            <span>
                              <b>
                                {strip.linetext.length <= 30
                                  ? strip.linetext
                                  : ""}
                              </b>
                              {strip.checkactive == "true" &&
                              strip.countdown ? (
                                <span
                                  className="counterArea"
                                  style={{
                                    backgroundColor: strip.backgroundCounter
                                      ? strip.backgroundCounter
                                      : "",
                                    color: txtColorCounter
                                      ? txtColorCounter
                                      : "",
                                  }}
                                >
                                  {strip.countdown}
                                </span>
                              ) : (
                                ""
                              )}
                            </span>
                            <div className="breakLine">
                              <span
                                className="moreDetails"
                                onClick={handleMoreDetailsClick}
                                style={{
                                  backgroundColor: backgroundColorStrip
                                    ? backgroundColorStrip
                                    : "",
                                  color: backgroundColorStrip
                                    ? moreDetailsColor
                                    : "",
                                }}
                              >
                                <u>Details</u>
                              </span>
                              <span className="spread">|</span>
                              <span className="mbetween">
                                <span
                                  className="copyCodeButton"
                                  onClick={() =>
                                    handleCopyCode(strip.code, strip.id)
                                  }
                                >
                                  {copied === strip.id.toString() ? (
                                    <>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="transparent"
                                        strokeWidth="1.5"
                                        viewBox="0 0 13 11"
                                        className="vCopied"
                                        style={{
                                          width: "1em",
                                          height: "1em",
                                          verticalAlign: "middle",
                                        }}
                                      >
                                        <path
                                          style={{
                                            color: backgroundColorStrip
                                              ? copySvg
                                              : "",
                                          }}
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m11.33 1.714-6.428 7.66-3.83-3.214"
                                        ></path>
                                      </svg>
                                      <span
                                        style={{
                                          color: backgroundColorStrip
                                            ? moreDetailsColor
                                            : "",
                                        }}
                                      >
                                        Code copied
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <u
                                        style={{
                                          backgroundColor: backgroundColorStrip
                                            ? backgroundColorStrip
                                            : "",
                                          color: backgroundColorStrip
                                            ? moreDetailsColor
                                            : "",
                                        }}
                                      >
                                        Code:{strip.code}
                                      </u>
                                      <svg
                                        className="copyIconCode"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                      >
                                        <rect
                                          style={{
                                            color: backgroundColorStrip
                                              ? copySvg
                                              : "",
                                          }}
                                          x="4.44531"
                                          y="4.44531"
                                          width="8.51562"
                                          height="8.51562"
                                          rx="0.851562"
                                          stroke="currentColor"
                                          strokeWidth="1.2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          style={{
                                            color: backgroundColorStrip
                                              ? copySvg
                                              : "",
                                          }}
                                          d="M7.85156 1.03906H1.89062C1.42032 1.03906 1.03906 1.42032 1.03906 1.89062V7.85156"
                                          stroke="currentColor"
                                          strokeWidth="1.2"
                                          strokeLinecap="square"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </>
                                  )}
                                </span>
                              </span>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {offerSelectTwo !== "Choose offer" ||
                offerSelectThree !== "Choose offer" ? (
                  <>
                    <div
                      className="carousel-control prev"
                      onClick={() => handleChangeStrip(false)}
                    >
                      {themeMode == "Dark" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M7.5 0.600098L1.5 6.0001L7.5 11.4001"
                            stroke="#DBE1E5"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{
                              stroke: backgroundColorStrip ? copySvg : "",
                            }}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M7.5 0.600098L1.5 6.0001L7.5 11.4001"
                            stroke="#4D4D4D"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div
                      className="carousel-control next"
                      onClick={() => handleChangeStrip(true)}
                    >
                      {themeMode == "Dark" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M1.5 11.3999L7.5 5.9999L1.5 0.599902"
                            stroke="#DBE1E5"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{
                              stroke: backgroundColorStrip ? copySvg : "",
                            }}
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                        >
                          <path
                            d="M1.5 11.3999L7.5 5.9999L1.5 0.599902"
                            stroke="#4D4D4D"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <>
                {linetext ? (
                  <div
                    style={{
                      minWidth: "100%",
                    }}
                  >
                    <span>
                      <b> {linetext.length <= 30 ? linetext : ""}</b>
                      {checkactive == "true" && countdown ? (
                        <span
                          className="counterArea"
                          style={{
                            backgroundColor: backgroundColorCounter
                              ? backgroundColorCounter
                              : "",
                            color: txtColorCounter ? txtColorCounter : "",
                          }}
                        >
                          {countdown}
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                    <div className="breakLine">
                      <span
                        className="moreDetails"
                        onClick={handleMoreDetailsClick}
                        style={{
                          backgroundColor: backgroundColorStrip
                            ? backgroundColorStrip
                            : "",
                          color: backgroundColorStrip ? moreDetailsColor : "",
                        }}
                      >
                        <u>Details</u>
                      </span>
                      <span className="spread">|</span>
                      <span className="mbetween">
                        <span
                          className="copyCodeButton"
                          onClick={() => handleCopyCode(code, 0)}
                        >
                          {copied === "0" ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="transparent"
                                strokeWidth="1.5"
                                viewBox="0 0 13 11"
                                className="vCopied"
                                style={{
                                  width: "1em",
                                  height: "1em",
                                  verticalAlign: "middle",
                                }}
                              >
                                <path
                                  style={{
                                    color: backgroundColorStrip ? copySvg : "",
                                  }}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m11.33 1.714-6.428 7.66-3.83-3.214"
                                ></path>
                              </svg>
                              <span
                                style={{
                                  color: backgroundColorStrip
                                    ? moreDetailsColor
                                    : "",
                                }}
                              >
                                Code copied
                              </span>
                            </>
                          ) : (
                            <>
                              <u
                                style={{
                                  color: backgroundColorStrip
                                    ? moreDetailsColor
                                    : "",
                                }}
                              >
                                Code:{code}
                              </u>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                className="copyIconCode"
                              >
                                <rect
                                  x="4.44531"
                                  y="4.44531"
                                  width="8.51562"
                                  height="8.51562"
                                  rx="0.851562"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  stroke="currentColor"
                                  style={{
                                    color: backgroundColorStrip ? copySvg : "",
                                  }}
                                />
                                <path
                                  d="M7.85156 1.03906H1.89062C1.42032 1.03906 1.03906 1.42032 1.03906 1.89062V7.85156"
                                  strokeWidth="1.2"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                  stroke="currentColor"
                                  style={{
                                    color: backgroundColorStrip ? copySvg : "",
                                  }}
                                />
                              </svg>
                            </>
                          )}
                        </span>
                      </span>
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </>
        )}
      </div>

      {displayTitle == "true" ? (
        ""
      ) : device == "Mobile" ? (
        <div className="titleCtp">Prescription Glasses</div>
      ) : (
        ""
      )}
      <div className="areaImageBanner">
        <Image
          src={
            device === "Desktop"
              ? ImageLink
                ? ImageLink
                : height == "Small"
                ? "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/media/wysiwyg/lp24/small-banner.png"
                : "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto/media/wysiwyg/hp24/map-hp-d-new.png"
              : ImageLink ||
                "https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto:eco/media/wysiwyg/lp23/main-desktopmobile.png"
          }
          alt={"image"}
          width={1024}
          height={100}
          className={`imageCtpbanner ${height === "Small" ? "small" : "large"}`}
        />

        {device == "Desktop" ? (
          <div className="txt">
            <h1 style={{ color: textcolorheadline ? textcolorheadline : "" }}>
              {displayTitle == "true" ? <> Prescription Glasses </> : headline}
            </h1>
            <h2
              style={{
                color: textcolorsubheadline ? textcolorsubheadline : "",
              }}
            >
              {subheadline ? subheadline : ""}
            </h2>
          </div>
        ) : (
          <div className="txt">
            <h1 style={{ color: textcolorheadline ? textcolorheadline : "" }}>
              {displayTitle == "true" ? <> Prescription Glasses </> : headline}
            </h1>
            <h2
              style={{
                color: textcolorsubheadline ? textcolorsubheadline : "",
              }}
            >
              {subheadline ? subheadline : ""}
            </h2>
          </div>
        )}
      </div>
      {/*Turst*/}
      {trustpilot == "true" ? (
        device == "Desktop" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1300"
            height="40"
            viewBox="0 0 1300 40"
            fill="none"
            className="trustpilot"
          >
            <rect width="1300" height="39.9997" fill="#F1F3F4" />
            <path
              d="M218.88 19.1599C219.211 19.1599 219.48 18.8912 219.48 18.5599C219.48 18.2285 219.211 17.9599 218.88 17.9599V19.1599ZM217.38 17.9599C217.048 17.9599 216.78 18.2285 216.78 18.5599C216.78 18.8912 217.048 19.1599 217.38 19.1599V17.9599ZM218.88 14.9999L219.241 14.5212C219.137 14.4425 219.01 14.3999 218.88 14.3999V14.9999ZM223.38 23.9999V24.5999C223.711 24.5999 223.98 24.3313 223.98 23.9999H223.38ZM223.38 18.3999H223.98C223.98 18.2118 223.891 18.0346 223.741 17.9212L223.38 18.3999ZM215.38 23.9999L215.38 24.5999H215.38V23.9999ZM217.476 23.5867L217.054 23.16L217.052 23.1622L217.476 23.5867ZM217.476 26.4135L217.054 26.8404L217.056 26.8426L217.476 26.4135ZM205.38 12.9999V12.3999C205.048 12.3999 204.78 12.6685 204.78 12.9999H205.38ZM215.38 12.9999H215.98C215.98 12.6685 215.711 12.3999 215.38 12.3999V12.9999ZM205.38 23.9999H204.78C204.78 24.3312 205.048 24.5999 205.38 24.5999V23.9999ZM208.475 23.5867L208.054 23.1597L208.051 23.1624L208.475 23.5867ZM208.475 26.4135L208.053 26.8402L208.056 26.8426L208.475 26.4135ZM218.88 17.9599H217.38V19.1599H218.88V17.9599ZM218.88 14.3999H215.38V15.5999H218.88V14.3999ZM223.98 23.9999V18.3999H222.78V23.9999H223.98ZM223.741 17.9212L219.241 14.5212L218.518 15.4786L223.018 18.8786L223.741 17.9212ZM215.38 24.5999H216.88V23.3999H215.38V24.5999ZM220.88 24.5999H223.38V23.3999H220.88V24.5999ZM218.897 22.3999C218.205 22.3999 217.547 22.6721 217.054 23.16L217.897 24.0133C218.168 23.7456 218.523 23.5999 218.897 23.5999V22.3999ZM217.052 23.1622C216.561 23.6522 216.28 24.3006 216.28 24.9999H217.48C217.48 24.6322 217.625 24.2855 217.9 24.0112L217.052 23.1622ZM216.28 24.9999C216.28 25.6961 216.555 26.3472 217.054 26.8404L217.897 25.9866C217.623 25.7155 217.48 25.3706 217.48 24.9999H216.28ZM217.056 26.8426C217.552 27.327 218.203 27.5999 218.897 27.5999V26.3999C218.525 26.3999 218.172 26.2556 217.895 25.9845L217.056 26.8426ZM218.897 27.5999C220.327 27.5999 221.48 26.4283 221.48 24.9999H220.28C220.28 25.776 219.654 26.3999 218.897 26.3999V27.5999ZM221.48 24.9999C221.48 23.5714 220.327 22.3999 218.897 22.3999V23.5999C219.654 23.5999 220.28 24.2237 220.28 24.9999H221.48ZM205.38 13.5999H215.38V12.3999H205.38V13.5999ZM214.78 12.9999V23.9999H215.98V12.9999H214.78ZM205.98 23.9999V12.9999H204.78V23.9999H205.98ZM208.157 23.3999H205.38V24.5999H208.157V23.3999ZM215.38 23.3999L211.38 23.3999L211.38 24.5999L215.38 24.5999L215.38 23.3999ZM209.897 22.3999C209.205 22.3999 208.547 22.6722 208.054 23.1598L208.897 24.0136C209.168 23.7456 209.523 23.5999 209.897 23.5999V22.3999ZM208.051 23.1624C207.561 23.6523 207.28 24.3007 207.28 24.9999H208.48C208.48 24.6322 208.625 24.2853 208.899 24.0109L208.051 23.1624ZM207.28 24.9999C207.28 25.6961 207.555 26.347 208.053 26.8402L208.897 25.9869C208.623 25.7157 208.48 25.3706 208.48 24.9999H207.28ZM208.056 26.8426C208.551 27.3271 209.203 27.5999 209.897 27.5999V26.3999C209.525 26.3999 209.172 26.2555 208.895 25.9845L208.056 26.8426ZM209.897 27.5999C211.327 27.5999 212.48 26.4284 212.48 24.9999H211.28C211.28 25.776 210.654 26.3999 209.897 26.3999V27.5999ZM212.48 24.9999C212.48 23.5713 211.327 22.3999 209.897 22.3999V23.5999C210.654 23.5999 211.28 24.2238 211.28 24.9999H212.48Z"
              fill="#0F0F0F"
            />
            <path
              d="M234.525 24.9999V15.5453H240.194V16.561H235.669V19.7556H239.769V20.7712H235.669V24.9999H234.525ZM241.931 24.9999V17.909H242.983V18.98H243.057C243.186 18.6291 243.42 18.3445 243.759 18.1259C244.097 17.9074 244.479 17.7982 244.904 17.7982C244.984 17.7982 245.084 17.7997 245.204 17.8028C245.324 17.8059 245.414 17.8105 245.476 17.8166V18.9246C245.439 18.9154 245.354 18.9015 245.222 18.883C245.093 18.8615 244.956 18.8507 244.811 18.8507C244.466 18.8507 244.159 18.9231 243.888 19.0677C243.62 19.2093 243.408 19.4062 243.251 19.6586C243.097 19.9079 243.02 20.1926 243.02 20.5127V24.9999H241.931ZM249.525 25.1476C248.841 25.1476 248.252 24.9968 247.757 24.6952C247.264 24.3905 246.884 23.9658 246.616 23.421C246.352 22.8732 246.219 22.2361 246.219 21.5098C246.219 20.7835 246.352 20.1433 246.616 19.5894C246.884 19.0323 247.256 18.5984 247.733 18.2875C248.214 17.9736 248.774 17.8166 249.414 17.8166C249.783 17.8166 250.148 17.8782 250.508 18.0013C250.868 18.1244 251.196 18.3245 251.491 18.6014C251.787 18.8754 252.022 19.2385 252.198 19.6909C252.373 20.1433 252.461 20.7004 252.461 21.3621V21.8237H246.995V20.882H251.353C251.353 20.4819 251.273 20.1249 251.113 19.811C250.956 19.497 250.731 19.2493 250.439 19.0677C250.149 18.8861 249.808 18.7953 249.414 18.7953C248.98 18.7953 248.604 18.9031 248.287 19.1185C247.973 19.3308 247.732 19.6078 247.563 19.9495C247.393 20.2911 247.309 20.6573 247.309 21.0482V21.676C247.309 22.2115 247.401 22.6655 247.586 23.0379C247.773 23.4072 248.033 23.6888 248.366 23.8827C248.698 24.0735 249.085 24.1689 249.525 24.1689C249.811 24.1689 250.069 24.1289 250.3 24.0489C250.534 23.9658 250.736 23.8427 250.905 23.6796C251.074 23.5134 251.205 23.3072 251.297 23.061L252.35 23.3564C252.239 23.7134 252.053 24.0273 251.791 24.2982C251.53 24.5659 251.207 24.7752 250.822 24.926C250.437 25.0737 250.005 25.1476 249.525 25.1476ZM257.091 25.1476C256.408 25.1476 255.818 24.9968 255.323 24.6952C254.83 24.3905 254.45 23.9658 254.183 23.421C253.918 22.8732 253.786 22.2361 253.786 21.5098C253.786 20.7835 253.918 20.1433 254.183 19.5894C254.45 19.0323 254.823 18.5984 255.3 18.2875C255.78 17.9736 256.34 17.8166 256.98 17.8166C257.35 17.8166 257.714 17.8782 258.074 18.0013C258.434 18.1244 258.762 18.3245 259.058 18.6014C259.353 18.8754 259.589 19.2385 259.764 19.6909C259.939 20.1433 260.027 20.7004 260.027 21.3621V21.8237H254.561V20.882H258.919C258.919 20.4819 258.839 20.1249 258.679 19.811C258.522 19.497 258.297 19.2493 258.005 19.0677C257.716 18.8861 257.374 18.7953 256.98 18.7953C256.546 18.7953 256.171 18.9031 255.854 19.1185C255.54 19.3308 255.298 19.6078 255.129 19.9495C254.96 20.2911 254.875 20.6573 254.875 21.0482V21.676C254.875 22.2115 254.967 22.6655 255.152 23.0379C255.34 23.4072 255.6 23.6888 255.932 23.8827C256.265 24.0735 256.651 24.1689 257.091 24.1689C257.377 24.1689 257.636 24.1289 257.867 24.0489C258.1 23.9658 258.302 23.8427 258.471 23.6796C258.641 23.5134 258.771 23.3072 258.864 23.061L259.916 23.3564C259.806 23.7134 259.619 24.0273 259.358 24.2982C259.096 24.5659 258.773 24.7752 258.388 24.926C258.004 25.0737 257.571 25.1476 257.091 25.1476ZM270.363 19.497L269.385 19.774C269.323 19.6109 269.232 19.4524 269.112 19.2985C268.995 19.1416 268.835 19.0123 268.632 18.9107C268.429 18.8092 268.169 18.7584 267.852 18.7584C267.418 18.7584 267.056 18.8584 266.767 19.0585C266.481 19.2554 266.338 19.5063 266.338 19.811C266.338 20.0818 266.436 20.2957 266.633 20.4526C266.83 20.6096 267.138 20.7404 267.557 20.845L268.609 21.1036C269.243 21.2575 269.716 21.4929 270.026 21.8099C270.337 22.1238 270.493 22.5285 270.493 23.024C270.493 23.4303 270.376 23.7934 270.142 24.1135C269.911 24.4336 269.588 24.686 269.172 24.8706C268.757 25.0553 268.274 25.1476 267.723 25.1476C267 25.1476 266.401 24.9906 265.927 24.6767C265.453 24.3628 265.153 23.9042 265.027 23.301L266.061 23.0425C266.159 23.4241 266.346 23.7103 266.619 23.9012C266.896 24.092 267.258 24.1874 267.704 24.1874C268.212 24.1874 268.615 24.0797 268.914 23.8642C269.215 23.6457 269.366 23.3841 269.366 23.0794C269.366 22.8332 269.28 22.627 269.108 22.4608C268.935 22.2915 268.671 22.1654 268.314 22.0823L267.132 21.8053C266.482 21.6514 266.005 21.4129 265.701 21.0897C265.399 20.7635 265.248 20.3557 265.248 19.8664C265.248 19.4663 265.361 19.1123 265.585 18.8046C265.813 18.4968 266.122 18.2552 266.513 18.0798C266.907 17.9044 267.353 17.8166 267.852 17.8166C268.554 17.8166 269.105 17.9705 269.505 18.2783C269.908 18.5861 270.194 18.9923 270.363 19.497ZM273.222 20.7343V24.9999H272.133V15.5453H273.222V19.0169H273.314C273.481 18.6507 273.73 18.3598 274.062 18.1444C274.398 17.9259 274.844 17.8166 275.401 17.8166C275.884 17.8166 276.307 17.9136 276.671 18.1075C277.034 18.2983 277.315 18.5922 277.515 18.9892C277.719 19.3832 277.82 19.8848 277.82 20.4942V24.9999H276.731V20.5681C276.731 20.0048 276.584 19.5694 276.292 19.2616C276.003 18.9508 275.601 18.7953 275.087 18.7953C274.73 18.7953 274.41 18.8707 274.127 19.0215C273.847 19.1723 273.625 19.3924 273.462 19.6817C273.302 19.971 273.222 20.3218 273.222 20.7343ZM279.813 24.9999V17.909H280.903V24.9999H279.813ZM280.367 16.7272C280.155 16.7272 279.972 16.6548 279.818 16.5102C279.667 16.3655 279.592 16.1916 279.592 15.9885C279.592 15.7854 279.667 15.6115 279.818 15.4669C279.972 15.3222 280.155 15.2499 280.367 15.2499C280.58 15.2499 280.761 15.3222 280.912 15.4669C281.066 15.6115 281.143 15.7854 281.143 15.9885C281.143 16.1916 281.066 16.3655 280.912 16.5102C280.761 16.6548 280.58 16.7272 280.367 16.7272ZM282.898 27.659V17.909H283.951V19.0354H284.08C284.16 18.9123 284.271 18.7553 284.412 18.5645C284.557 18.3706 284.763 18.1983 285.031 18.0475C285.302 17.8936 285.668 17.8166 286.13 17.8166C286.727 17.8166 287.253 17.9659 287.709 18.2644C288.164 18.563 288.52 18.9861 288.775 19.534C289.031 20.0818 289.158 20.7281 289.158 21.4729C289.158 22.2238 289.031 22.8748 288.775 23.4257C288.52 23.9735 288.166 24.3982 287.713 24.6998C287.261 24.9983 286.739 25.1476 286.148 25.1476C285.693 25.1476 285.328 25.0722 285.054 24.9214C284.78 24.7675 284.569 24.5936 284.422 24.3997C284.274 24.2028 284.16 24.0397 284.08 23.9104H283.988V27.659H282.898ZM283.969 21.4544C283.969 21.9899 284.048 22.4624 284.205 22.8717C284.362 23.2779 284.591 23.5965 284.893 23.8273C285.194 24.055 285.564 24.1689 286.001 24.1689C286.456 24.1689 286.836 24.0489 287.141 23.8088C287.449 23.5657 287.679 23.2395 287.833 22.8301C287.99 22.4177 288.069 21.9592 288.069 21.4544C288.069 20.9558 287.992 20.5065 287.838 20.1064C287.687 19.7032 287.458 19.3847 287.15 19.1508C286.845 18.9138 286.462 18.7953 286.001 18.7953C285.557 18.7953 285.185 18.9077 284.883 19.1323C284.582 19.3539 284.354 19.6648 284.2 20.0649C284.046 20.4619 283.969 20.9251 283.969 21.4544ZM290.82 27.659V17.909H291.873V19.0354H292.002C292.082 18.9123 292.193 18.7553 292.334 18.5645C292.479 18.3706 292.685 18.1983 292.953 18.0475C293.224 17.8936 293.59 17.8166 294.052 17.8166C294.649 17.8166 295.175 17.9659 295.631 18.2644C296.086 18.563 296.441 18.9861 296.697 19.534C296.952 20.0818 297.08 20.7281 297.08 21.4729C297.08 22.2238 296.952 22.8748 296.697 23.4257C296.441 23.9735 296.088 24.3982 295.635 24.6998C295.183 24.9983 294.661 25.1476 294.07 25.1476C293.615 25.1476 293.25 25.0722 292.976 24.9214C292.702 24.7675 292.491 24.5936 292.344 24.3997C292.196 24.2028 292.082 24.0397 292.002 23.9104H291.91V27.659H290.82ZM291.891 21.4544C291.891 21.9899 291.97 22.4624 292.127 22.8717C292.284 23.2779 292.513 23.5965 292.814 23.8273C293.116 24.055 293.485 24.1689 293.922 24.1689C294.378 24.1689 294.758 24.0489 295.063 23.8088C295.37 23.5657 295.601 23.2395 295.755 22.8301C295.912 22.4177 295.991 21.9592 295.991 21.4544C295.991 20.9558 295.914 20.5065 295.76 20.1064C295.609 19.7032 295.38 19.3847 295.072 19.1508C294.767 18.9138 294.384 18.7953 293.922 18.7953C293.479 18.7953 293.107 18.9077 292.805 19.1323C292.504 19.3539 292.276 19.6648 292.122 20.0649C291.968 20.4619 291.891 20.9251 291.891 21.4544ZM298.742 24.9999V17.909H299.832V24.9999H298.742ZM299.296 16.7272C299.084 16.7272 298.901 16.6548 298.747 16.5102C298.596 16.3655 298.52 16.1916 298.52 15.9885C298.52 15.7854 298.596 15.6115 298.747 15.4669C298.901 15.3222 299.084 15.2499 299.296 15.2499C299.508 15.2499 299.69 15.3222 299.841 15.4669C299.995 15.6115 300.072 15.7854 300.072 15.9885C300.072 16.1916 299.995 16.3655 299.841 16.5102C299.69 16.6548 299.508 16.7272 299.296 16.7272ZM302.916 20.7343V24.9999H301.827V17.909H302.88V19.0169H302.972C303.138 18.6568 303.39 18.3675 303.729 18.149C304.068 17.9274 304.505 17.8166 305.04 17.8166C305.52 17.8166 305.94 17.9151 306.3 18.1121C306.66 18.306 306.941 18.6014 307.141 18.9985C307.341 19.3924 307.441 19.891 307.441 20.4942V24.9999H306.351V20.5681C306.351 20.011 306.206 19.5771 305.917 19.2662C305.628 18.9523 305.231 18.7953 304.726 18.7953C304.378 18.7953 304.068 18.8707 303.794 19.0215C303.523 19.1723 303.309 19.3924 303.152 19.6817C302.995 19.971 302.916 20.3218 302.916 20.7343ZM312.294 27.8067C311.767 27.8067 311.315 27.739 310.936 27.6036C310.558 27.4712 310.242 27.2958 309.99 27.0773C309.741 26.8619 309.542 26.631 309.395 26.3848L310.262 25.7754C310.361 25.9047 310.486 26.0524 310.636 26.2186C310.787 26.3879 310.993 26.5341 311.255 26.6572C311.52 26.7834 311.866 26.8465 312.294 26.8465C312.866 26.8465 313.339 26.708 313.711 26.431C314.083 26.154 314.27 25.72 314.27 25.1291V23.6888H314.177C314.097 23.8181 313.983 23.9781 313.836 24.1689C313.691 24.3566 313.482 24.5244 313.208 24.6721C312.937 24.8168 312.571 24.8891 312.109 24.8891C311.537 24.8891 311.023 24.7537 310.567 24.4828C310.115 24.212 309.756 23.8181 309.491 23.301C309.23 22.784 309.099 22.1561 309.099 21.4175C309.099 20.6912 309.227 20.0587 309.482 19.5201C309.738 18.9785 310.093 18.5599 310.549 18.2644C311.004 17.9659 311.53 17.8166 312.128 17.8166C312.589 17.8166 312.955 17.8936 313.226 18.0475C313.5 18.1983 313.709 18.3706 313.854 18.5645C314.002 18.7553 314.116 18.9123 314.196 19.0354H314.306V17.909H315.359V25.203C315.359 25.8124 315.221 26.3079 314.944 26.6895C314.67 27.0742 314.3 27.3558 313.836 27.5343C313.374 27.7159 312.86 27.8067 312.294 27.8067ZM312.257 23.9104C312.694 23.9104 313.063 23.8104 313.365 23.6103C313.666 23.4103 313.896 23.1225 314.053 22.747C314.21 22.3716 314.288 21.9222 314.288 21.399C314.288 20.8881 314.211 20.4373 314.057 20.0464C313.903 19.6555 313.676 19.3493 313.374 19.1277C313.072 18.9061 312.7 18.7953 312.257 18.7953C311.795 18.7953 311.41 18.9123 311.103 19.1462C310.798 19.3801 310.569 19.694 310.415 20.0879C310.264 20.4819 310.189 20.9189 310.189 21.399C310.189 21.8914 310.266 22.3269 310.419 22.7055C310.576 23.081 310.807 23.3764 311.112 23.5919C311.42 23.8042 311.801 23.9104 312.257 23.9104ZM323.687 25.1291C323.065 25.1291 322.53 25.0153 322.081 24.7875C321.631 24.5598 321.285 24.2474 321.042 23.8504C320.799 23.4534 320.677 22.9994 320.677 22.4885C320.677 22.0946 320.76 21.7453 320.927 21.4406C321.096 21.1328 321.328 20.8481 321.624 20.5865C321.922 20.3218 322.265 20.0572 322.653 19.7925L324.02 18.7769C324.287 18.6014 324.501 18.4137 324.661 18.2137C324.824 18.0136 324.906 17.752 324.906 17.4289C324.906 17.1888 324.8 16.9564 324.587 16.7318C324.378 16.5071 324.103 16.3948 323.761 16.3948C323.521 16.3948 323.309 16.4563 323.124 16.5794C322.942 16.6995 322.799 16.8533 322.695 17.0411C322.593 17.2257 322.542 17.4165 322.542 17.6135C322.542 17.8351 322.602 18.0598 322.722 18.2875C322.845 18.5122 323.001 18.743 323.189 18.98C323.379 19.2139 323.576 19.4539 323.779 19.7002L328.119 24.9999H326.808L323.226 20.6789C322.893 20.2788 322.592 19.9156 322.321 19.5894C322.05 19.2631 321.834 18.9415 321.674 18.6245C321.514 18.3075 321.434 17.9644 321.434 17.595C321.434 17.1703 321.528 16.7979 321.716 16.4779C321.907 16.1547 322.173 15.9039 322.515 15.7254C322.859 15.5438 323.262 15.453 323.724 15.453C324.198 15.453 324.606 15.5453 324.947 15.73C325.289 15.9116 325.552 16.1532 325.737 16.4548C325.922 16.7533 326.014 17.078 326.014 17.4289C326.014 17.8813 325.902 18.2737 325.677 18.6061C325.452 18.9384 325.146 19.2477 324.758 19.534L322.875 20.9374C322.45 21.2513 322.162 21.556 322.011 21.8514C321.861 22.1469 321.785 22.3593 321.785 22.4885C321.785 22.784 321.862 23.0594 322.016 23.3149C322.17 23.5703 322.387 23.7765 322.667 23.9335C322.947 24.0904 323.275 24.1689 323.65 24.1689C324.007 24.1689 324.355 24.0935 324.694 23.9427C325.032 23.7888 325.338 23.5672 325.612 23.2779C325.889 22.9886 326.108 22.6409 326.268 22.2346C326.431 21.8284 326.512 21.3713 326.512 20.8635H327.565C327.565 21.4914 327.493 22.0038 327.348 22.4008C327.203 22.7978 327.04 23.1087 326.859 23.3333C326.677 23.558 326.531 23.7257 326.42 23.8365C326.383 23.8827 326.349 23.9289 326.319 23.975C326.288 24.0212 326.254 24.0673 326.217 24.1135C325.912 24.4551 325.528 24.7106 325.063 24.8798C324.598 25.046 324.14 25.1291 323.687 25.1291ZM332.981 24.9999V17.909H334.034V18.98H334.108C334.237 18.6291 334.471 18.3445 334.809 18.1259C335.148 17.9074 335.53 17.7982 335.954 17.7982C336.034 17.7982 336.134 17.7997 336.254 17.8028C336.374 17.8059 336.465 17.8105 336.527 17.8166V18.9246C336.49 18.9154 336.405 18.9015 336.273 18.883C336.144 18.8615 336.007 18.8507 335.862 18.8507C335.517 18.8507 335.21 18.9231 334.939 19.0677C334.671 19.2093 334.459 19.4062 334.302 19.6586C334.148 19.9079 334.071 20.1926 334.071 20.5127V24.9999H332.981ZM340.575 25.1476C339.892 25.1476 339.303 24.9968 338.807 24.6952C338.315 24.3905 337.935 23.9658 337.667 23.421C337.402 22.8732 337.27 22.2361 337.27 21.5098C337.27 20.7835 337.402 20.1433 337.667 19.5894C337.935 19.0323 338.307 18.5984 338.784 18.2875C339.264 17.9736 339.824 17.8166 340.465 17.8166C340.834 17.8166 341.199 17.8782 341.559 18.0013C341.919 18.1244 342.247 18.3245 342.542 18.6014C342.837 18.8754 343.073 19.2385 343.248 19.6909C343.424 20.1433 343.511 20.7004 343.511 21.3621V21.8237H338.046V20.882H342.404C342.404 20.4819 342.324 20.1249 342.163 19.811C342.007 19.497 341.782 19.2493 341.489 19.0677C341.2 18.8861 340.859 18.7953 340.465 18.7953C340.031 18.7953 339.655 18.9031 339.338 19.1185C339.024 19.3308 338.783 19.6078 338.613 19.9495C338.444 20.2911 338.359 20.6573 338.359 21.0482V21.676C338.359 22.2115 338.452 22.6655 338.636 23.0379C338.824 23.4072 339.084 23.6888 339.417 23.8827C339.749 24.0735 340.135 24.1689 340.575 24.1689C340.862 24.1689 341.12 24.1289 341.351 24.0489C341.585 23.9658 341.786 23.8427 341.956 23.6796C342.125 23.5134 342.256 23.3072 342.348 23.061L343.401 23.3564C343.29 23.7134 343.104 24.0273 342.842 24.2982C342.58 24.5659 342.257 24.7752 341.873 24.926C341.488 25.0737 341.056 25.1476 340.575 25.1476ZM348.253 17.909V18.8323H344.578V17.909H348.253ZM345.649 16.2101H346.738V22.9686C346.738 23.2764 346.783 23.5072 346.872 23.6611C346.965 23.8119 347.082 23.9135 347.223 23.9658C347.368 24.015 347.52 24.0397 347.68 24.0397C347.8 24.0397 347.899 24.0335 347.976 24.0212C348.053 24.0058 348.114 23.9935 348.16 23.9843L348.382 24.9629C348.308 24.9906 348.205 25.0183 348.073 25.046C347.94 25.0768 347.772 25.0922 347.569 25.0922C347.262 25.0922 346.96 25.026 346.665 24.8937C346.372 24.7614 346.129 24.5598 345.935 24.2889C345.744 24.0181 345.649 23.6765 345.649 23.2641V16.2101ZM354.36 22.1007V17.909H355.45V24.9999H354.36V23.7996H354.286C354.12 24.1597 353.862 24.4659 353.511 24.7183C353.16 24.9676 352.717 25.0922 352.181 25.0922C351.738 25.0922 351.344 24.9953 350.999 24.8014C350.655 24.6044 350.384 24.3089 350.187 23.915C349.99 23.518 349.891 23.0179 349.891 22.4147V17.909H350.981V22.3408C350.981 22.8578 351.126 23.2702 351.415 23.578C351.707 23.8858 352.08 24.0397 352.532 24.0397C352.803 24.0397 353.078 23.9704 353.358 23.8319C353.642 23.6934 353.879 23.4811 354.069 23.1948C354.263 22.9086 354.36 22.5439 354.36 22.1007ZM357.445 24.9999V17.909H358.498V18.98H358.572C358.701 18.6291 358.935 18.3445 359.273 18.1259C359.612 17.9074 359.993 17.7982 360.418 17.7982C360.498 17.7982 360.598 17.7997 360.718 17.8028C360.838 17.8059 360.929 17.8105 360.991 17.8166V18.9246C360.954 18.9154 360.869 18.9015 360.737 18.883C360.607 18.8615 360.47 18.8507 360.326 18.8507C359.981 18.8507 359.673 18.9231 359.403 19.0677C359.135 19.2093 358.922 19.4062 358.765 19.6586C358.612 19.9079 358.535 20.1926 358.535 20.5127V24.9999H357.445ZM363.372 20.7343V24.9999H362.282V17.909H363.335V19.0169H363.427C363.593 18.6568 363.846 18.3675 364.184 18.149C364.523 17.9274 364.96 17.8166 365.495 17.8166C365.975 17.8166 366.395 17.9151 366.755 18.1121C367.116 18.306 367.396 18.6014 367.596 18.9985C367.796 19.3924 367.896 19.891 367.896 20.4942V24.9999H366.806V20.5681C366.806 20.011 366.662 19.5771 366.372 19.2662C366.083 18.9523 365.686 18.7953 365.181 18.7953C364.833 18.7953 364.523 18.8707 364.249 19.0215C363.978 19.1723 363.764 19.3924 363.607 19.6817C363.45 19.971 363.372 20.3218 363.372 20.7343ZM374.909 19.497L373.931 19.774C373.869 19.6109 373.778 19.4524 373.658 19.2985C373.541 19.1416 373.381 19.0123 373.178 18.9107C372.975 18.8092 372.715 18.7584 372.398 18.7584C371.964 18.7584 371.602 18.8584 371.313 19.0585C371.027 19.2554 370.884 19.5063 370.884 19.811C370.884 20.0818 370.982 20.2957 371.179 20.4526C371.376 20.6096 371.684 20.7404 372.102 20.845L373.155 21.1036C373.789 21.2575 374.261 21.4929 374.572 21.8099C374.883 22.1238 375.039 22.5285 375.039 23.024C375.039 23.4303 374.922 23.7934 374.688 24.1135C374.457 24.4336 374.134 24.686 373.718 24.8706C373.303 25.0553 372.82 25.1476 372.269 25.1476C371.545 25.1476 370.947 24.9906 370.473 24.6767C369.999 24.3628 369.699 23.9042 369.573 23.301L370.607 23.0425C370.705 23.4241 370.891 23.7103 371.165 23.9012C371.442 24.092 371.804 24.1874 372.25 24.1874C372.758 24.1874 373.161 24.0797 373.46 23.8642C373.761 23.6457 373.912 23.3841 373.912 23.0794C373.912 22.8332 373.826 22.627 373.654 22.4608C373.481 22.2915 373.217 22.1654 372.86 22.0823L371.678 21.8053C371.028 21.6514 370.551 21.4129 370.247 21.0897C369.945 20.7635 369.794 20.3557 369.794 19.8664C369.794 19.4663 369.907 19.1123 370.131 18.8046C370.359 18.4968 370.668 18.2552 371.059 18.0798C371.453 17.9044 371.899 17.8166 372.398 17.8166C373.1 17.8166 373.651 17.9705 374.051 18.2783C374.454 18.5861 374.74 18.9923 374.909 19.497Z"
              fill="black"
            />
            <rect
              x="396.38"
              y="13.9999"
              width="1"
              height="12"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              d="M431.409 18.1616L429.151 17.5144C429.145 17.5125 429.144 17.5033 429.15 17.4999L432.054 15.8901C432.06 15.8866 432.067 15.8924 432.065 15.8992L431.418 18.1562L431.409 18.1616Z"
              fill="#0F0F0F"
              stroke="#0F0F0F"
              stroke-width="1.2"
              stroke-linejoin="round"
            />
            <path
              d="M431.48 22.7142C431.599 22.4047 431.444 22.0578 431.134 21.9395C430.825 21.8211 430.478 21.976 430.36 22.2855L431.48 22.7142ZM424.38 26.3999C420.845 26.3999 417.98 23.5345 417.98 19.9999H416.78C416.78 24.1972 420.182 27.5999 424.38 27.5999V26.3999ZM417.98 19.9999C417.98 16.4653 420.845 13.5999 424.38 13.5999V12.3999C420.182 12.3999 416.78 15.8025 416.78 19.9999H417.98ZM430.36 22.2855C429.439 24.6923 427.108 26.3999 424.38 26.3999V27.5999C427.622 27.5999 430.388 25.5701 431.48 22.7142L430.36 22.2855ZM424.38 13.5999C427.108 13.5999 429.439 15.3074 430.36 17.7142L431.48 17.2855C430.388 14.4296 427.622 12.3999 424.38 12.3999V13.5999Z"
              fill="#0F0F0F"
            />
            <path
              d="M422.75 21.4037V21.6125C422.75 22.3787 423.482 22.9998 424.386 22.9998C425.29 22.9998 426.022 22.3787 426.022 21.6125C426.022 21.4037 426.022 20.4708 424.38 19.9846C422.737 19.4983 422.75 18.596 422.75 18.3872C422.75 17.621 423.482 16.9998 424.386 16.9998C425.29 16.9998 426.022 17.621 426.022 18.3872V18.596M424.45 15.495V16.9998M424.45 22.9998V24.5046"
              stroke="#0F0F0F"
              stroke-width="1.2"
              stroke-linejoin="round"
            />
            <path
              d="M442.525 15.5453H443.891L447.104 23.3933H447.215L450.428 15.5453H451.794V24.9999H450.723V17.8166H450.631L447.677 24.9999H446.642L443.688 17.8166H443.596V24.9999H442.525V15.5453ZM456.823 25.1476C456.183 25.1476 455.621 24.9953 455.138 24.6906C454.658 24.3859 454.282 23.9596 454.011 23.4118C453.744 22.864 453.61 22.2238 453.61 21.4914C453.61 20.7527 453.744 20.108 454.011 19.5571C454.282 19.0062 454.658 18.5784 455.138 18.2737C455.621 17.969 456.183 17.8166 456.823 17.8166C457.463 17.8166 458.023 17.969 458.503 18.2737C458.986 18.5784 459.362 19.0062 459.63 19.5571C459.901 20.108 460.036 20.7527 460.036 21.4914C460.036 22.2238 459.901 22.864 459.63 23.4118C459.362 23.9596 458.986 24.3859 458.503 24.6906C458.023 24.9953 457.463 25.1476 456.823 25.1476ZM456.823 24.1689C457.309 24.1689 457.709 24.0443 458.023 23.795C458.337 23.5457 458.569 23.2179 458.72 22.8117C458.871 22.4054 458.946 21.9653 458.946 21.4914C458.946 21.0174 458.871 20.5758 458.72 20.1664C458.569 19.7571 458.337 19.4263 458.023 19.1739C457.709 18.9215 457.309 18.7953 456.823 18.7953C456.337 18.7953 455.937 18.9215 455.623 19.1739C455.309 19.4263 455.076 19.7571 454.926 20.1664C454.775 20.5758 454.699 21.0174 454.699 21.4914C454.699 21.9653 454.775 22.4054 454.926 22.8117C455.076 23.2179 455.309 23.5457 455.623 23.795C455.937 24.0443 456.337 24.1689 456.823 24.1689ZM462.789 20.7343V24.9999H461.699V17.909H462.752V19.0169H462.844C463.01 18.6568 463.263 18.3675 463.601 18.149C463.94 17.9274 464.377 17.8166 464.912 17.8166C465.392 17.8166 465.812 17.9151 466.172 18.1121C466.533 18.306 466.813 18.6014 467.013 18.9985C467.213 19.3924 467.313 19.891 467.313 20.4942V24.9999H466.223V20.5681C466.223 20.011 466.079 19.5771 465.789 19.2662C465.5 18.9523 465.103 18.7953 464.598 18.7953C464.25 18.7953 463.94 18.8707 463.666 19.0215C463.395 19.1723 463.181 19.3924 463.024 19.6817C462.867 19.971 462.789 20.3218 462.789 20.7343ZM472.277 25.1476C471.593 25.1476 471.004 24.9968 470.508 24.6952C470.016 24.3905 469.636 23.9658 469.368 23.421C469.104 22.8732 468.971 22.2361 468.971 21.5098C468.971 20.7835 469.104 20.1433 469.368 19.5894C469.636 19.0323 470.008 18.5984 470.485 18.2875C470.965 17.9736 471.526 17.8166 472.166 17.8166C472.535 17.8166 472.9 17.8782 473.26 18.0013C473.62 18.1244 473.948 18.3245 474.243 18.6014C474.539 18.8754 474.774 19.2385 474.95 19.6909C475.125 20.1433 475.213 20.7004 475.213 21.3621V21.8237H469.747V20.882H474.105C474.105 20.4819 474.025 20.1249 473.865 19.811C473.708 19.497 473.483 19.2493 473.191 19.0677C472.901 18.8861 472.56 18.7953 472.166 18.7953C471.732 18.7953 471.356 18.9031 471.039 19.1185C470.725 19.3308 470.484 19.6078 470.315 19.9495C470.145 20.2911 470.061 20.6573 470.061 21.0482V21.676C470.061 22.2115 470.153 22.6655 470.338 23.0379C470.525 23.4072 470.785 23.6888 471.118 23.8827C471.45 24.0735 471.836 24.1689 472.277 24.1689C472.563 24.1689 472.821 24.1289 473.052 24.0489C473.286 23.9658 473.488 23.8427 473.657 23.6796C473.826 23.5134 473.957 23.3072 474.049 23.061L475.102 23.3564C474.991 23.7134 474.805 24.0273 474.543 24.2982C474.282 24.5659 473.959 24.7752 473.574 24.926C473.189 25.0737 472.757 25.1476 472.277 25.1476ZM477.356 27.659C477.171 27.659 477.007 27.6436 476.862 27.6128C476.717 27.5851 476.617 27.5574 476.562 27.5297L476.839 26.5695C477.103 26.6372 477.337 26.6618 477.541 26.6433C477.744 26.6249 477.924 26.5341 478.081 26.371C478.241 26.2109 478.387 25.9509 478.519 25.5908L478.722 25.0368L476.1 17.909H477.282L479.239 23.5595H479.313L481.271 17.909H482.452L479.442 26.034C479.307 26.4002 479.139 26.7034 478.939 26.9434C478.739 27.1865 478.507 27.3666 478.242 27.4835C477.981 27.6005 477.685 27.659 477.356 27.659ZM487.953 20.4388V21.4544H483.817V20.4388H487.953ZM490.018 24.9999V15.5453H491.107V19.0354H491.2C491.28 18.9123 491.39 18.7553 491.532 18.5645C491.677 18.3706 491.883 18.1983 492.151 18.0475C492.421 17.8936 492.788 17.8166 493.249 17.8166C493.846 17.8166 494.373 17.9659 494.828 18.2644C495.284 18.563 495.639 18.9861 495.894 19.534C496.15 20.0818 496.278 20.7281 496.278 21.4729C496.278 22.2238 496.15 22.8748 495.894 23.4257C495.639 23.9735 495.285 24.3982 494.833 24.6998C494.38 24.9983 493.859 25.1476 493.268 25.1476C492.812 25.1476 492.447 25.0722 492.174 24.9214C491.9 24.7675 491.689 24.5936 491.541 24.3997C491.393 24.2028 491.28 24.0397 491.2 23.9104H491.07V24.9999H490.018ZM491.089 21.4544C491.089 21.9899 491.167 22.4624 491.324 22.8717C491.481 23.2779 491.71 23.5965 492.012 23.8273C492.314 24.055 492.683 24.1689 493.12 24.1689C493.575 24.1689 493.956 24.0489 494.26 23.8088C494.568 23.5657 494.799 23.2395 494.953 22.8301C495.11 22.4177 495.188 21.9592 495.188 21.4544C495.188 20.9558 495.111 20.5065 494.957 20.1064C494.807 19.7032 494.577 19.3847 494.269 19.1508C493.965 18.9138 493.582 18.7953 493.12 18.7953C492.677 18.7953 492.304 18.9077 492.003 19.1323C491.701 19.3539 491.473 19.6648 491.32 20.0649C491.166 20.4619 491.089 20.9251 491.089 21.4544ZM500.031 25.1661C499.581 25.1661 499.174 25.0814 498.807 24.9122C498.441 24.7398 498.15 24.4921 497.935 24.1689C497.72 23.8427 497.612 23.4487 497.612 22.9871C497.612 22.5808 497.692 22.2515 497.852 21.9992C498.012 21.7437 498.226 21.5437 498.494 21.399C498.761 21.2544 499.057 21.1467 499.38 21.0759C499.706 21.002 500.034 20.9435 500.363 20.9004C500.794 20.845 501.143 20.8035 501.411 20.7758C501.682 20.745 501.879 20.6942 502.002 20.6235C502.128 20.5527 502.191 20.4296 502.191 20.2541V20.2172C502.191 19.7617 502.067 19.4078 501.817 19.1554C501.571 18.9031 501.197 18.7769 500.696 18.7769C500.175 18.7769 499.768 18.8907 499.472 19.1185C499.177 19.3462 498.969 19.5894 498.849 19.8479L497.815 19.4786C498 19.0477 498.246 18.7122 498.554 18.4722C498.864 18.229 499.203 18.0598 499.569 17.9644C499.938 17.8659 500.302 17.8166 500.659 17.8166C500.886 17.8166 501.148 17.8443 501.443 17.8997C501.742 17.9521 502.03 18.0613 502.307 18.2275C502.587 18.3937 502.819 18.6445 503.004 18.98C503.188 19.3155 503.281 19.7648 503.281 20.328V24.9999H502.191V24.0397H502.136C502.062 24.1935 501.939 24.3582 501.767 24.5336C501.594 24.709 501.365 24.8583 501.079 24.9814C500.793 25.1045 500.443 25.1661 500.031 25.1661ZM500.197 24.1874C500.628 24.1874 500.991 24.1027 501.287 23.9335C501.585 23.7642 501.81 23.5457 501.961 23.2779C502.114 23.0102 502.191 22.7286 502.191 22.4331V21.436C502.145 21.4914 502.044 21.5421 501.887 21.5883C501.733 21.6314 501.554 21.6699 501.351 21.7037C501.151 21.7345 500.956 21.7622 500.765 21.7868C500.577 21.8084 500.425 21.8268 500.308 21.8422C500.025 21.8791 499.76 21.9392 499.514 22.0223C499.271 22.1023 499.074 22.2238 498.923 22.387C498.775 22.547 498.701 22.7655 498.701 23.0425C498.701 23.421 498.841 23.7073 499.121 23.9012C499.405 24.092 499.763 24.1874 500.197 24.1874ZM508.15 25.1476C507.485 25.1476 506.913 24.9906 506.433 24.6767C505.953 24.3628 505.583 23.9304 505.325 23.3795C505.066 22.8286 504.937 22.1992 504.937 21.4914C504.937 20.7712 505.069 20.1356 505.334 19.5847C505.602 19.0308 505.974 18.5984 506.451 18.2875C506.931 17.9736 507.491 17.8166 508.132 17.8166C508.63 17.8166 509.08 17.909 509.48 18.0936C509.88 18.2783 510.207 18.5368 510.463 18.8692C510.718 19.2016 510.877 19.5894 510.938 20.0325H509.849C509.766 19.7094 509.581 19.4232 509.295 19.1739C509.012 18.9215 508.63 18.7953 508.15 18.7953C507.725 18.7953 507.353 18.9061 507.033 19.1277C506.716 19.3462 506.468 19.6555 506.29 20.0556C506.114 20.4526 506.026 20.9189 506.026 21.4544C506.026 22.0022 506.113 22.4793 506.285 22.8855C506.46 23.2918 506.707 23.6072 507.024 23.8319C507.344 24.0566 507.719 24.1689 508.15 24.1689C508.433 24.1689 508.69 24.1197 508.921 24.0212C509.152 23.9227 509.347 23.7811 509.507 23.5965C509.667 23.4118 509.781 23.1902 509.849 22.9317H510.938C510.877 23.3503 510.725 23.7273 510.481 24.0627C510.241 24.3951 509.923 24.6598 509.526 24.8568C509.132 25.0507 508.673 25.1476 508.15 25.1476ZM513.547 22.4147L513.528 21.0666H513.75L516.852 17.909H518.2L514.895 21.2513H514.802L513.547 22.4147ZM512.531 24.9999V15.5453H513.621V24.9999H512.531ZM517.037 24.9999L514.267 21.4914L515.042 20.7343L518.422 24.9999H517.037ZM526.121 27.8067C525.595 27.8067 525.142 27.739 524.764 27.6036C524.385 27.4712 524.07 27.2958 523.817 27.0773C523.568 26.8619 523.369 26.631 523.222 26.3848L524.09 25.7754C524.188 25.9047 524.313 26.0524 524.464 26.2186C524.614 26.3879 524.821 26.5341 525.082 26.6572C525.347 26.7834 525.693 26.8465 526.121 26.8465C526.693 26.8465 527.166 26.708 527.538 26.431C527.911 26.154 528.097 25.72 528.097 25.1291V23.6888H528.004C527.924 23.8181 527.81 23.9781 527.663 24.1689C527.518 24.3566 527.309 24.5244 527.035 24.6721C526.764 24.8168 526.398 24.8891 525.936 24.8891C525.364 24.8891 524.85 24.7537 524.394 24.4828C523.942 24.212 523.583 23.8181 523.319 23.301C523.057 22.784 522.926 22.1561 522.926 21.4175C522.926 20.6912 523.054 20.0587 523.309 19.5201C523.565 18.9785 523.92 18.5599 524.376 18.2644C524.831 17.9659 525.358 17.8166 525.955 17.8166C526.416 17.8166 526.783 17.8936 527.053 18.0475C527.327 18.1983 527.537 18.3706 527.681 18.5645C527.829 18.7553 527.943 18.9123 528.023 19.0354H528.134V17.909H529.186V25.203C529.186 25.8124 529.048 26.3079 528.771 26.6895C528.497 27.0742 528.127 27.3558 527.663 27.5343C527.201 27.7159 526.687 27.8067 526.121 27.8067ZM526.084 23.9104C526.521 23.9104 526.89 23.8104 527.192 23.6103C527.493 23.4103 527.723 23.1225 527.88 22.747C528.037 22.3716 528.115 21.9222 528.115 21.399C528.115 20.8881 528.038 20.4373 527.884 20.0464C527.73 19.6555 527.503 19.3493 527.201 19.1277C526.899 18.9061 526.527 18.7953 526.084 18.7953C525.622 18.7953 525.238 18.9123 524.93 19.1462C524.625 19.3801 524.396 19.694 524.242 20.0879C524.091 20.4819 524.016 20.9189 524.016 21.399C524.016 21.8914 524.093 22.3269 524.247 22.7055C524.404 23.081 524.634 23.3764 524.939 23.5919C525.247 23.8042 525.628 23.9104 526.084 23.9104ZM535.649 22.1007V17.909H536.739V24.9999H535.649V23.7996H535.575C535.409 24.1597 535.151 24.4659 534.8 24.7183C534.449 24.9676 534.006 25.0922 533.47 25.0922C533.027 25.0922 532.633 24.9953 532.288 24.8014C531.944 24.6044 531.673 24.3089 531.476 23.915C531.279 23.518 531.181 23.0179 531.181 22.4147V17.909H532.27V22.3408C532.27 22.8578 532.415 23.2702 532.704 23.578C532.996 23.8858 533.369 24.0397 533.821 24.0397C534.092 24.0397 534.367 23.9704 534.647 23.8319C534.931 23.6934 535.168 23.4811 535.358 23.1948C535.552 22.9086 535.649 22.5439 535.649 22.1007ZM540.821 25.1661C540.372 25.1661 539.964 25.0814 539.598 24.9122C539.231 24.7398 538.94 24.4921 538.725 24.1689C538.51 23.8427 538.402 23.4487 538.402 22.9871C538.402 22.5808 538.482 22.2515 538.642 21.9992C538.802 21.7437 539.016 21.5437 539.284 21.399C539.551 21.2544 539.847 21.1467 540.17 21.0759C540.496 21.002 540.824 20.9435 541.153 20.9004C541.584 20.845 541.933 20.8035 542.201 20.7758C542.472 20.745 542.669 20.6942 542.792 20.6235C542.918 20.5527 542.981 20.4296 542.981 20.2541V20.2172C542.981 19.7617 542.857 19.4078 542.607 19.1554C542.361 18.9031 541.987 18.7769 541.486 18.7769C540.966 18.7769 540.558 18.8907 540.262 19.1185C539.967 19.3462 539.759 19.5894 539.639 19.8479L538.605 19.4786C538.79 19.0477 539.036 18.7122 539.344 18.4722C539.654 18.229 539.993 18.0598 540.359 17.9644C540.729 17.8659 541.092 17.8166 541.449 17.8166C541.676 17.8166 541.938 17.8443 542.234 17.8997C542.532 17.9521 542.82 18.0613 543.097 18.2275C543.377 18.3937 543.609 18.6445 543.794 18.98C543.979 19.3155 544.071 19.7648 544.071 20.328V24.9999H542.981V24.0397H542.926C542.852 24.1935 542.729 24.3582 542.557 24.5336C542.384 24.709 542.155 24.8583 541.869 24.9814C541.583 25.1045 541.233 25.1661 540.821 25.1661ZM540.987 24.1874C541.418 24.1874 541.781 24.1027 542.077 23.9335C542.375 23.7642 542.6 23.5457 542.751 23.2779C542.904 23.0102 542.981 22.7286 542.981 22.4331V21.436C542.935 21.4914 542.834 21.5421 542.677 21.5883C542.523 21.6314 542.344 21.6699 542.141 21.7037C541.941 21.7345 541.746 21.7622 541.555 21.7868C541.367 21.8084 541.215 21.8268 541.098 21.8422C540.815 21.8791 540.55 21.9392 540.304 22.0223C540.061 22.1023 539.864 22.2238 539.713 22.387C539.565 22.547 539.491 22.7655 539.491 23.0425C539.491 23.421 539.631 23.7073 539.911 23.9012C540.195 24.092 540.553 24.1874 540.987 24.1874ZM546.059 24.9999V17.909H547.112V18.98H547.186C547.315 18.6291 547.549 18.3445 547.888 18.1259C548.226 17.9074 548.608 17.7982 549.032 17.7982C549.112 17.7982 549.212 17.7997 549.332 17.8028C549.453 17.8059 549.543 17.8105 549.605 17.8166V18.9246C549.568 18.9154 549.483 18.9015 549.351 18.883C549.222 18.8615 549.085 18.8507 548.94 18.8507C548.595 18.8507 548.288 18.9231 548.017 19.0677C547.749 19.2093 547.537 19.4062 547.38 19.6586C547.226 19.9079 547.149 20.1926 547.149 20.5127V24.9999H546.059ZM552.983 25.1661C552.534 25.1661 552.126 25.0814 551.76 24.9122C551.393 24.7398 551.103 24.4921 550.887 24.1689C550.672 23.8427 550.564 23.4487 550.564 22.9871C550.564 22.5808 550.644 22.2515 550.804 21.9992C550.964 21.7437 551.178 21.5437 551.446 21.399C551.713 21.2544 552.009 21.1467 552.332 21.0759C552.658 21.002 552.986 20.9435 553.315 20.9004C553.746 20.845 554.096 20.8035 554.363 20.7758C554.634 20.745 554.831 20.6942 554.954 20.6235C555.08 20.5527 555.143 20.4296 555.143 20.2541V20.2172C555.143 19.7617 555.019 19.4078 554.77 19.1554C554.523 18.9031 554.149 18.7769 553.648 18.7769C553.128 18.7769 552.72 18.8907 552.424 19.1185C552.129 19.3462 551.921 19.5894 551.801 19.8479L550.767 19.4786C550.952 19.0477 551.198 18.7122 551.506 18.4722C551.817 18.229 552.155 18.0598 552.521 17.9644C552.891 17.8659 553.254 17.8166 553.611 17.8166C553.839 17.8166 554.1 17.8443 554.396 17.8997C554.694 17.9521 554.982 18.0613 555.259 18.2275C555.539 18.3937 555.771 18.6445 555.956 18.98C556.141 19.3155 556.233 19.7648 556.233 20.328V24.9999H555.143V24.0397H555.088C555.014 24.1935 554.891 24.3582 554.719 24.5336C554.546 24.709 554.317 24.8583 554.031 24.9814C553.745 25.1045 553.395 25.1661 552.983 25.1661ZM553.149 24.1874C553.58 24.1874 553.943 24.1027 554.239 23.9335C554.537 23.7642 554.762 23.5457 554.913 23.2779C555.067 23.0102 555.143 22.7286 555.143 22.4331V21.436C555.097 21.4914 554.996 21.5421 554.839 21.5883C554.685 21.6314 554.506 21.6699 554.303 21.7037C554.103 21.7345 553.908 21.7622 553.717 21.7868C553.529 21.8084 553.377 21.8268 553.26 21.8422C552.977 21.8791 552.712 21.9392 552.466 22.0223C552.223 22.1023 552.026 22.2238 551.875 22.387C551.727 22.547 551.653 22.7655 551.653 23.0425C551.653 23.421 551.793 23.7073 552.074 23.9012C552.357 24.092 552.715 24.1874 553.149 24.1874ZM559.311 20.7343V24.9999H558.222V17.909H559.274V19.0169H559.366C559.533 18.6568 559.785 18.3675 560.124 18.149C560.462 17.9274 560.899 17.8166 561.435 17.8166C561.915 17.8166 562.335 17.9151 562.695 18.1121C563.055 18.306 563.335 18.6014 563.535 18.9985C563.735 19.3924 563.835 19.891 563.835 20.4942V24.9999H562.746V20.5681C562.746 20.011 562.601 19.5771 562.312 19.2662C562.022 18.9523 561.625 18.7953 561.121 18.7953C560.773 18.7953 560.462 18.8707 560.188 19.0215C559.917 19.1723 559.703 19.3924 559.546 19.6817C559.389 19.971 559.311 20.3218 559.311 20.7343ZM568.91 17.909V18.8323H565.235V17.909H568.91ZM566.306 16.2101H567.396V22.9686C567.396 23.2764 567.44 23.5072 567.529 23.6611C567.622 23.8119 567.739 23.9135 567.88 23.9658C568.025 24.015 568.177 24.0397 568.337 24.0397C568.457 24.0397 568.556 24.0335 568.633 24.0212C568.71 24.0058 568.771 23.9935 568.817 23.9843L569.039 24.9629C568.965 24.9906 568.862 25.0183 568.73 25.046C568.597 25.0768 568.43 25.0922 568.227 25.0922C567.919 25.0922 567.617 25.026 567.322 24.8937C567.029 24.7614 566.786 24.5598 566.592 24.2889C566.402 24.0181 566.306 23.6765 566.306 23.2641V16.2101ZM573.446 25.1476C572.762 25.1476 572.173 24.9968 571.677 24.6952C571.185 24.3905 570.805 23.9658 570.537 23.421C570.272 22.8732 570.14 22.2361 570.14 21.5098C570.14 20.7835 570.272 20.1433 570.537 19.5894C570.805 19.0323 571.177 18.5984 571.654 18.2875C572.134 17.9736 572.695 17.8166 573.335 17.8166C573.704 17.8166 574.069 17.8782 574.429 18.0013C574.789 18.1244 575.117 18.3245 575.412 18.6014C575.708 18.8754 575.943 19.2385 576.118 19.6909C576.294 20.1433 576.382 20.7004 576.382 21.3621V21.8237H570.916V20.882H575.274C575.274 20.4819 575.194 20.1249 575.034 19.811C574.877 19.497 574.652 19.2493 574.36 19.0677C574.07 18.8861 573.729 18.7953 573.335 18.7953C572.901 18.7953 572.525 18.9031 572.208 19.1185C571.894 19.3308 571.653 19.6078 571.484 19.9495C571.314 20.2911 571.23 20.6573 571.23 21.0482V21.676C571.23 22.2115 571.322 22.6655 571.507 23.0379C571.694 23.4072 571.954 23.6888 572.287 23.8827C572.619 24.0735 573.005 24.1689 573.446 24.1689C573.732 24.1689 573.99 24.1289 574.221 24.0489C574.455 23.9658 574.657 23.8427 574.826 23.6796C574.995 23.5134 575.126 23.3072 575.218 23.061L576.271 23.3564C576.16 23.7134 575.974 24.0273 575.712 24.2982C575.451 24.5659 575.127 24.7752 574.743 24.926C574.358 25.0737 573.926 25.1476 573.446 25.1476ZM581.012 25.1476C580.329 25.1476 579.739 24.9968 579.244 24.6952C578.751 24.3905 578.371 23.9658 578.104 23.421C577.839 22.8732 577.707 22.2361 577.707 21.5098C577.707 20.7835 577.839 20.1433 578.104 19.5894C578.371 19.0323 578.744 18.5984 579.221 18.2875C579.701 17.9736 580.261 17.8166 580.901 17.8166C581.27 17.8166 581.635 17.8782 581.995 18.0013C582.355 18.1244 582.683 18.3245 582.979 18.6014C583.274 18.8754 583.509 19.2385 583.685 19.6909C583.86 20.1433 583.948 20.7004 583.948 21.3621V21.8237H578.482V20.882H582.84C582.84 20.4819 582.76 20.1249 582.6 19.811C582.443 19.497 582.218 19.2493 581.926 19.0677C581.637 18.8861 581.295 18.7953 580.901 18.7953C580.467 18.7953 580.092 18.9031 579.775 19.1185C579.461 19.3308 579.219 19.6078 579.05 19.9495C578.881 20.2911 578.796 20.6573 578.796 21.0482V21.676C578.796 22.2115 578.888 22.6655 579.073 23.0379C579.261 23.4072 579.521 23.6888 579.853 23.8827C580.186 24.0735 580.572 24.1689 581.012 24.1689C581.298 24.1689 581.557 24.1289 581.787 24.0489C582.021 23.9658 582.223 23.8427 582.392 23.6796C582.562 23.5134 582.692 23.3072 582.785 23.061L583.837 23.3564C583.726 23.7134 583.54 24.0273 583.279 24.2982C583.017 24.5659 582.694 24.7752 582.309 24.926C581.924 25.0737 581.492 25.1476 581.012 25.1476Z"
              fill="black"
            />
            <rect
              x="605.38"
              y="13.9999"
              width="1"
              height="12"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              d="M636.404 19.5925C636.617 19.3387 636.584 18.9602 636.33 18.7472C636.076 18.5342 635.698 18.5673 635.485 18.8211L636.404 19.5925ZM632.731 23.037L632.345 23.4967C632.599 23.7097 632.977 23.6766 633.19 23.4227L632.731 23.037ZM631.201 20.9704C630.947 20.7574 630.569 20.7906 630.356 21.0444C630.143 21.2982 630.176 21.6767 630.43 21.8897L631.201 20.9704ZM626.98 25.9998V15.2726H625.78V25.9998H626.98ZM639.38 26.3998H627.38V27.5998H639.38V26.3998ZM628.88 13.6726H627.38V14.8726H628.88V13.6726ZM639.38 13.6726H637.88V14.8726H639.38V13.6726ZM635.38 13.6726H631.38V14.8726H635.38V13.6726ZM640.98 25.9998V15.2726H639.78V25.9998H640.98ZM639.38 27.5998C640.263 27.5998 640.98 26.8835 640.98 25.9998H639.78C639.78 26.2208 639.601 26.3998 639.38 26.3998V27.5998ZM625.78 25.9998C625.78 26.8835 626.496 27.5998 627.38 27.5998V26.3998C627.159 26.3998 626.98 26.2208 626.98 25.9998H625.78ZM639.38 14.8726C639.601 14.8726 639.78 15.0517 639.78 15.2726H640.98C640.98 14.3889 640.263 13.6726 639.38 13.6726V14.8726ZM626.98 15.2726C626.98 15.0517 627.159 14.8726 627.38 14.8726V13.6726C626.496 13.6726 625.78 14.3889 625.78 15.2726H626.98ZM629.38 13.5999H630.88V12.3999H629.38V13.5999ZM630.78 13.4999V15.4999H631.98V13.4999H630.78ZM630.88 15.3999H629.38V16.5999H630.88V15.3999ZM629.48 15.4999V13.4999H628.28V15.4999H629.48ZM629.38 15.3999C629.435 15.3999 629.48 15.4446 629.48 15.4999H628.28C628.28 16.1074 628.772 16.5999 629.38 16.5999V15.3999ZM630.78 15.4999C630.78 15.4446 630.824 15.3999 630.88 15.3999V16.5999C631.487 16.5999 631.98 16.1074 631.98 15.4999H630.78ZM630.88 13.5999C630.824 13.5999 630.78 13.5551 630.78 13.4999H631.98C631.98 12.8924 631.487 12.3999 630.88 12.3999V13.5999ZM629.38 12.3999C628.772 12.3999 628.28 12.8924 628.28 13.4999H629.48C629.48 13.5551 629.435 13.5999 629.38 13.5999V12.3999ZM635.88 13.5999H637.38V12.3999H635.88V13.5999ZM637.28 13.4999V15.4999H638.48V13.4999H637.28ZM637.38 15.3999H635.88V16.5999H637.38V15.3999ZM635.98 15.4999V13.4999H634.78V15.4999H635.98ZM635.88 15.3999C635.935 15.3999 635.98 15.4446 635.98 15.4999H634.78C634.78 16.1074 635.272 16.5999 635.88 16.5999V15.3999ZM637.28 15.4999C637.28 15.4446 637.324 15.3999 637.38 15.3999V16.5999C637.987 16.5999 638.48 16.1074 638.48 15.4999H637.28ZM637.38 13.5999C637.324 13.5999 637.28 13.5551 637.28 13.4999H638.48C638.48 12.8924 637.987 12.3999 637.38 12.3999V13.5999ZM635.88 12.3999C635.272 12.3999 634.78 12.8924 634.78 13.4999H635.98C635.98 13.5551 635.935 13.5999 635.88 13.5999V12.3999ZM635.485 18.8211L632.271 22.6514L633.19 23.4227L636.404 19.5925L635.485 18.8211ZM633.116 22.5774L631.201 20.9704L630.43 21.8897L632.345 23.4967L633.116 22.5774Z"
              fill="#0F0F0F"
            />
            <path
              d="M654.553 25.1291C653.944 25.1291 653.4 25.0245 652.923 24.8152C652.449 24.6059 652.072 24.3151 651.792 23.9427C651.515 23.5672 651.364 23.1317 651.34 22.6362H652.503C652.528 22.9409 652.632 23.2041 652.817 23.4257C653.002 23.6442 653.243 23.8134 653.542 23.9335C653.84 24.0535 654.171 24.1135 654.534 24.1135C654.941 24.1135 655.301 24.0427 655.615 23.9012C655.929 23.7596 656.175 23.5626 656.353 23.3102C656.532 23.0579 656.621 22.7655 656.621 22.4331C656.621 22.0853 656.535 21.7791 656.363 21.5144C656.19 21.2467 655.938 21.0374 655.605 20.8866C655.273 20.7358 654.867 20.6604 654.387 20.6604H653.63V19.6448H654.387C654.762 19.6448 655.092 19.5771 655.375 19.4416C655.661 19.3062 655.884 19.1154 656.044 18.8692C656.207 18.623 656.289 18.3337 656.289 18.0013C656.289 17.6812 656.218 17.4027 656.076 17.1657C655.935 16.9287 655.735 16.7441 655.476 16.6117C655.221 16.4794 654.919 16.4132 654.571 16.4132C654.245 16.4132 653.937 16.4732 653.648 16.5933C653.362 16.7102 653.128 16.881 652.946 17.1057C652.765 17.3273 652.666 17.595 652.651 17.909H651.543C651.561 17.4135 651.711 16.9795 651.991 16.6071C652.271 16.2316 652.637 15.9393 653.09 15.73C653.545 15.5207 654.045 15.4161 654.59 15.4161C655.175 15.4161 655.676 15.5346 656.095 15.7715C656.513 16.0054 656.835 16.3147 657.06 16.6995C657.284 17.0842 657.397 17.4996 657.397 17.9459C657.397 18.4783 657.257 18.9323 656.977 19.3078C656.7 19.6832 656.323 19.9433 655.846 20.0879V20.1618C656.443 20.2603 656.909 20.5142 657.244 20.9235C657.58 21.3298 657.748 21.833 657.748 22.4331C657.748 22.9471 657.608 23.4087 657.327 23.8181C657.05 24.2243 656.672 24.5444 656.192 24.7783C655.712 25.0122 655.165 25.1291 654.553 25.1291ZM662.775 25.1291C662.387 25.123 661.999 25.0491 661.612 24.9075C661.224 24.766 660.87 24.5275 660.55 24.192C660.23 23.8535 659.973 23.3964 659.779 22.8209C659.585 22.2423 659.488 21.516 659.488 20.6419C659.488 19.8048 659.566 19.0631 659.723 18.4168C659.88 17.7674 660.108 17.2211 660.407 16.7779C660.705 16.3317 661.065 15.9931 661.487 15.7623C661.912 15.5315 662.39 15.4161 662.923 15.4161C663.452 15.4161 663.923 15.5222 664.335 15.7346C664.751 15.9439 665.089 16.2363 665.351 16.6117C665.612 16.9872 665.782 17.4196 665.859 17.909H664.732C664.628 17.4843 664.425 17.1319 664.123 16.8518C663.821 16.5717 663.421 16.4317 662.923 16.4317C662.19 16.4317 661.613 16.7502 661.191 17.3873C660.773 18.0244 660.562 18.9184 660.559 20.0695H660.633C660.805 19.8079 661.01 19.5848 661.247 19.4001C661.487 19.2124 661.752 19.0677 662.041 18.9661C662.33 18.8646 662.636 18.8138 662.96 18.8138C663.501 18.8138 663.997 18.9492 664.446 19.22C664.895 19.4878 665.255 19.8587 665.526 20.3326C665.797 20.8035 665.933 21.3436 665.933 21.953C665.933 22.5378 665.802 23.0733 665.54 23.5595C665.279 24.0427 664.911 24.4274 664.437 24.7137C663.966 24.9968 663.412 25.1353 662.775 25.1291ZM662.775 24.1135C663.163 24.1135 663.51 24.0166 663.818 23.8227C664.129 23.6288 664.374 23.3687 664.552 23.0425C664.734 22.7163 664.825 22.3531 664.825 21.953C664.825 21.5621 664.737 21.2067 664.561 20.8866C664.389 20.5634 664.151 20.3065 663.846 20.1156C663.544 19.9248 663.2 19.8294 662.812 19.8294C662.519 19.8294 662.247 19.8879 661.995 20.0048C661.742 20.1187 661.521 20.2757 661.33 20.4757C661.142 20.6758 660.994 20.9051 660.887 21.1636C660.779 21.419 660.725 21.6883 660.725 21.9715C660.725 22.3469 660.813 22.6978 660.988 23.024C661.167 23.3503 661.41 23.6134 661.718 23.8134C662.029 24.0135 662.381 24.1135 662.775 24.1135ZM670.703 25.1291C670.161 25.1291 669.673 25.0214 669.239 24.806C668.805 24.5906 668.457 24.2951 668.196 23.9196C667.934 23.5441 667.791 23.1164 667.766 22.6362H668.874C668.917 23.064 669.111 23.418 669.456 23.698C669.804 23.975 670.219 24.1135 670.703 24.1135C671.09 24.1135 671.435 24.0227 671.737 23.8411C672.041 23.6596 672.28 23.4103 672.452 23.0933C672.628 22.7732 672.715 22.4116 672.715 22.0084C672.715 21.596 672.625 21.2282 672.443 20.9051C672.264 20.5788 672.018 20.3218 671.704 20.1341C671.39 19.9464 671.032 19.851 670.629 19.8479C670.339 19.8448 670.042 19.8894 669.738 19.9818C669.433 20.071 669.182 20.1864 668.985 20.328L667.914 20.1987L668.487 15.5453H673.399V16.561H669.447L669.114 19.3493H669.17C669.364 19.1954 669.607 19.0677 669.899 18.9661C670.192 18.8646 670.496 18.8138 670.813 18.8138C671.392 18.8138 671.907 18.9523 672.36 19.2293C672.815 19.5032 673.172 19.8787 673.431 20.3557C673.692 20.8327 673.823 21.3775 673.823 21.9899C673.823 22.5932 673.688 23.1317 673.417 23.6057C673.149 24.0766 672.78 24.449 672.309 24.7229C671.838 24.9937 671.303 25.1291 670.703 25.1291ZM682.009 25.1476C681.419 25.1476 680.897 24.9983 680.444 24.6998C679.992 24.3982 679.638 23.9735 679.383 23.4257C679.127 22.8748 678.999 22.2238 678.999 21.4729C678.999 20.7281 679.127 20.0818 679.383 19.534C679.638 18.9861 679.994 18.563 680.449 18.2644C680.905 17.9659 681.431 17.8166 682.028 17.8166C682.49 17.8166 682.854 17.8936 683.122 18.0475C683.393 18.1983 683.599 18.3706 683.741 18.5645C683.885 18.7553 683.998 18.9123 684.078 19.0354H684.17V15.5453H685.259V24.9999H684.207V23.9104H684.078C683.998 24.0397 683.884 24.2028 683.736 24.3997C683.588 24.5936 683.377 24.7675 683.104 24.9214C682.83 25.0722 682.465 25.1476 682.009 25.1476ZM682.157 24.1689C682.594 24.1689 682.964 24.055 683.265 23.8273C683.567 23.5965 683.796 23.2779 683.953 22.8717C684.11 22.4624 684.188 21.9899 684.188 21.4544C684.188 20.9251 684.111 20.4619 683.958 20.0649C683.804 19.6648 683.576 19.3539 683.274 19.1323C682.973 18.9077 682.6 18.7953 682.157 18.7953C681.696 18.7953 681.311 18.9138 681.003 19.1508C680.698 19.3847 680.469 19.7032 680.315 20.1064C680.164 20.5065 680.089 20.9558 680.089 21.4544C680.089 21.9592 680.166 22.4177 680.32 22.8301C680.477 23.2395 680.708 23.5657 681.012 23.8088C681.32 24.0489 681.702 24.1689 682.157 24.1689ZM689.493 25.1661C689.043 25.1661 688.636 25.0814 688.269 24.9122C687.903 24.7398 687.612 24.4921 687.397 24.1689C687.181 23.8427 687.074 23.4487 687.074 22.9871C687.074 22.5808 687.154 22.2515 687.314 21.9992C687.474 21.7437 687.688 21.5437 687.955 21.399C688.223 21.2544 688.519 21.1467 688.842 21.0759C689.168 21.002 689.496 20.9435 689.825 20.9004C690.256 20.845 690.605 20.8035 690.873 20.7758C691.144 20.745 691.341 20.6942 691.464 20.6235C691.59 20.5527 691.653 20.4296 691.653 20.2541V20.2172C691.653 19.7617 691.529 19.4078 691.279 19.1554C691.033 18.9031 690.659 18.7769 690.158 18.7769C689.637 18.7769 689.23 18.8907 688.934 19.1185C688.639 19.3462 688.431 19.5894 688.311 19.8479L687.277 19.4786C687.462 19.0477 687.708 18.7122 688.015 18.4722C688.326 18.229 688.665 18.0598 689.031 17.9644C689.4 17.8659 689.764 17.8166 690.121 17.8166C690.348 17.8166 690.61 17.8443 690.905 17.8997C691.204 17.9521 691.492 18.0613 691.769 18.2275C692.049 18.3937 692.281 18.6445 692.466 18.98C692.65 19.3155 692.743 19.7648 692.743 20.328V24.9999H691.653V24.0397H691.598C691.524 24.1935 691.401 24.3582 691.229 24.5336C691.056 24.709 690.827 24.8583 690.541 24.9814C690.254 25.1045 689.905 25.1661 689.493 25.1661ZM689.659 24.1874C690.09 24.1874 690.453 24.1027 690.748 23.9335C691.047 23.7642 691.272 23.5457 691.422 23.2779C691.576 23.0102 691.653 22.7286 691.653 22.4331V21.436C691.607 21.4914 691.506 21.5421 691.349 21.5883C691.195 21.6314 691.016 21.6699 690.813 21.7037C690.613 21.7345 690.418 21.7622 690.227 21.7868C690.039 21.8084 689.887 21.8268 689.77 21.8422C689.487 21.8791 689.222 21.9392 688.976 22.0223C688.733 22.1023 688.536 22.2238 688.385 22.387C688.237 22.547 688.163 22.7655 688.163 23.0425C688.163 23.421 688.303 23.7073 688.583 23.9012C688.866 24.092 689.225 24.1874 689.659 24.1874ZM695.179 27.659C694.994 27.659 694.83 27.6436 694.685 27.6128C694.54 27.5851 694.44 27.5574 694.385 27.5297L694.662 26.5695C694.927 26.6372 695.161 26.6618 695.364 26.6433C695.567 26.6249 695.747 26.5341 695.904 26.371C696.064 26.2109 696.21 25.9509 696.342 25.5908L696.546 25.0368L693.923 17.909H695.105L697.063 23.5595H697.136L699.094 17.909H700.276L697.266 26.034C697.13 26.4002 696.963 26.7034 696.763 26.9434C696.563 27.1865 696.33 27.3666 696.065 27.4835C695.804 27.6005 695.508 27.659 695.179 27.659ZM706.977 24.9999L704.816 17.909H705.961L707.494 23.3379H707.567L709.082 17.909H710.245L711.741 23.3195H711.815L713.347 17.909H714.492L712.332 24.9999H711.261L709.709 19.5524H709.599L708.048 24.9999H706.977ZM718.019 25.1661C717.57 25.1661 717.162 25.0814 716.796 24.9122C716.43 24.7398 716.139 24.4921 715.923 24.1689C715.708 23.8427 715.6 23.4487 715.6 22.9871C715.6 22.5808 715.68 22.2515 715.84 21.9992C716 21.7437 716.214 21.5437 716.482 21.399C716.75 21.2544 717.045 21.1467 717.368 21.0759C717.694 21.002 718.022 20.9435 718.352 20.9004C718.782 20.845 719.132 20.8035 719.399 20.7758C719.67 20.745 719.867 20.6942 719.99 20.6235C720.117 20.5527 720.18 20.4296 720.18 20.2541V20.2172C720.18 19.7617 720.055 19.4078 719.806 19.1554C719.559 18.9031 719.186 18.7769 718.684 18.7769C718.164 18.7769 717.756 18.8907 717.461 19.1185C717.165 19.3462 716.957 19.5894 716.837 19.8479L715.803 19.4786C715.988 19.0477 716.234 18.7122 716.542 18.4722C716.853 18.229 717.191 18.0598 717.557 17.9644C717.927 17.8659 718.29 17.8166 718.647 17.8166C718.875 17.8166 719.136 17.8443 719.432 17.8997C719.73 17.9521 720.018 18.0613 720.295 18.2275C720.575 18.3937 720.807 18.6445 720.992 18.98C721.177 19.3155 721.269 19.7648 721.269 20.328V24.9999H720.18V24.0397H720.124C720.05 24.1935 719.927 24.3582 719.755 24.5336C719.583 24.709 719.353 24.8583 719.067 24.9814C718.781 25.1045 718.432 25.1661 718.019 25.1661ZM718.185 24.1874C718.616 24.1874 718.979 24.1027 719.275 23.9335C719.573 23.7642 719.798 23.5457 719.949 23.2779C720.103 23.0102 720.18 22.7286 720.18 22.4331V21.436C720.133 21.4914 720.032 21.5421 719.875 21.5883C719.721 21.6314 719.543 21.6699 719.339 21.7037C719.139 21.7345 718.944 21.7622 718.753 21.7868C718.565 21.8084 718.413 21.8268 718.296 21.8422C718.013 21.8791 717.748 21.9392 717.502 22.0223C717.259 22.1023 717.062 22.2238 716.911 22.387C716.763 22.547 716.69 22.7655 716.69 23.0425C716.69 23.421 716.83 23.7073 717.11 23.9012C717.393 24.092 717.751 24.1874 718.185 24.1874ZM723.258 24.9999V17.909H724.31V18.98H724.384C724.513 18.6291 724.747 18.3445 725.086 18.1259C725.424 17.9074 725.806 17.7982 726.231 17.7982C726.311 17.7982 726.411 17.7997 726.531 17.8028C726.651 17.8059 726.742 17.8105 726.803 17.8166V18.9246C726.766 18.9154 726.682 18.9015 726.549 18.883C726.42 18.8615 726.283 18.8507 726.138 18.8507C725.794 18.8507 725.486 18.9231 725.215 19.0677C724.947 19.2093 724.735 19.4062 724.578 19.6586C724.424 19.9079 724.347 20.1926 724.347 20.5127V24.9999H723.258ZM728.095 24.9999V17.909H729.147V18.98H729.221C729.35 18.6291 729.584 18.3445 729.923 18.1259C730.261 17.9074 730.643 17.7982 731.068 17.7982C731.148 17.7982 731.248 17.7997 731.368 17.8028C731.488 17.8059 731.578 17.8105 731.64 17.8166V18.9246C731.603 18.9154 731.518 18.9015 731.386 18.883C731.257 18.8615 731.12 18.8507 730.975 18.8507C730.631 18.8507 730.323 18.9231 730.052 19.0677C729.784 19.2093 729.572 19.4062 729.415 19.6586C729.261 19.9079 729.184 20.1926 729.184 20.5127V24.9999H728.095ZM735.018 25.1661C734.569 25.1661 734.161 25.0814 733.795 24.9122C733.429 24.7398 733.138 24.4921 732.922 24.1689C732.707 23.8427 732.599 23.4487 732.599 22.9871C732.599 22.5808 732.679 22.2515 732.839 21.9992C732.999 21.7437 733.213 21.5437 733.481 21.399C733.749 21.2544 734.044 21.1467 734.367 21.0759C734.693 21.002 735.021 20.9435 735.351 20.9004C735.781 20.845 736.131 20.8035 736.398 20.7758C736.669 20.745 736.866 20.6942 736.989 20.6235C737.116 20.5527 737.179 20.4296 737.179 20.2541V20.2172C737.179 19.7617 737.054 19.4078 736.805 19.1554C736.559 18.9031 736.185 18.7769 735.683 18.7769C735.163 18.7769 734.755 18.8907 734.46 19.1185C734.164 19.3462 733.956 19.5894 733.836 19.8479L732.802 19.4786C732.987 19.0477 733.233 18.7122 733.541 18.4722C733.852 18.229 734.19 18.0598 734.556 17.9644C734.926 17.8659 735.289 17.8166 735.646 17.8166C735.874 17.8166 736.135 17.8443 736.431 17.8997C736.729 17.9521 737.017 18.0613 737.294 18.2275C737.574 18.3937 737.806 18.6445 737.991 18.98C738.176 19.3155 738.268 19.7648 738.268 20.328V24.9999H737.179V24.0397H737.123C737.049 24.1935 736.926 24.3582 736.754 24.5336C736.582 24.709 736.352 24.8583 736.066 24.9814C735.78 25.1045 735.431 25.1661 735.018 25.1661ZM735.184 24.1874C735.615 24.1874 735.978 24.1027 736.274 23.9335C736.572 23.7642 736.797 23.5457 736.948 23.2779C737.102 23.0102 737.179 22.7286 737.179 22.4331V21.436C737.132 21.4914 737.031 21.5421 736.874 21.5883C736.72 21.6314 736.542 21.6699 736.338 21.7037C736.138 21.7345 735.943 21.7622 735.752 21.7868C735.564 21.8084 735.412 21.8268 735.295 21.8422C735.012 21.8791 734.747 21.9392 734.501 22.0223C734.258 22.1023 734.061 22.2238 733.91 22.387C733.762 22.547 733.689 22.7655 733.689 23.0425C733.689 23.421 733.829 23.7073 734.109 23.9012C734.392 24.092 734.75 24.1874 735.184 24.1874ZM741.346 20.7343V24.9999H740.257V17.909H741.309V19.0169H741.402C741.568 18.6568 741.82 18.3675 742.159 18.149C742.497 17.9274 742.934 17.8166 743.47 17.8166C743.95 17.8166 744.37 17.9151 744.73 18.1121C745.09 18.306 745.37 18.6014 745.57 18.9985C745.77 19.3924 745.87 19.891 745.87 20.4942V24.9999H744.781V20.5681C744.781 20.011 744.636 19.5771 744.347 19.2662C744.058 18.9523 743.661 18.7953 743.156 18.7953C742.808 18.7953 742.497 18.8707 742.223 19.0215C741.952 19.1723 741.739 19.3924 741.582 19.6817C741.425 19.971 741.346 20.3218 741.346 20.7343ZM750.945 17.909V18.8323H747.27V17.909H750.945ZM748.341 16.2101H749.431V22.9686C749.431 23.2764 749.475 23.5072 749.565 23.6611C749.657 23.8119 749.774 23.9135 749.916 23.9658C750.06 24.015 750.213 24.0397 750.373 24.0397C750.493 24.0397 750.591 24.0335 750.668 24.0212C750.745 24.0058 750.806 23.9935 750.853 23.9843L751.074 24.9629C751 24.9906 750.897 25.0183 750.765 25.046C750.633 25.0768 750.465 25.0922 750.262 25.0922C749.954 25.0922 749.652 25.026 749.357 24.8937C749.065 24.7614 748.821 24.5598 748.628 24.2889C748.437 24.0181 748.341 23.6765 748.341 23.2641V16.2101ZM753.286 27.659C753.101 27.659 752.936 27.6436 752.792 27.6128C752.647 27.5851 752.547 27.5574 752.492 27.5297L752.768 26.5695C753.033 26.6372 753.267 26.6618 753.47 26.6433C753.673 26.6249 753.853 26.5341 754.01 26.371C754.17 26.2109 754.317 25.9509 754.449 25.5908L754.652 25.0368L752.03 17.909H753.212L755.169 23.5595H755.243L757.2 17.909H758.382L755.372 26.034C755.237 26.4002 755.069 26.7034 754.869 26.9434C754.669 27.1865 754.437 27.3666 754.172 27.4835C753.91 27.6005 753.615 27.659 753.286 27.659Z"
              fill="black"
            />
            <rect
              x="779.38"
              y="13.9999"
              width="1"
              height="12"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M800.38 27.5H815.119V12.5H800.38V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M817.085 27.5H831.825V12.5H817.085V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M833.789 27.5H848.528V12.5H833.789V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M849.513 27.5H864.252V12.5H849.513V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M873.094 27.5H880.956V12.5H873.094V27.5Z"
              fill="#0F0F0F"
              fill-opacity="0.33001"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M866.218 27.5H874.079V12.5H866.218V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M813.154 18.5498H809.02L807.749 14.7448L806.479 18.5498H802.345L805.69 20.9083L804.42 24.7133L807.765 22.3548L809.824 20.9083L813.154 18.5498ZM807.75 22.3703L810.098 21.7886L811.08 24.7445L807.75 22.3703Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M829.86 18.5498H825.726L824.455 14.7448L823.185 18.5498H819.051L822.396 20.9083L821.126 24.7133L824.471 22.3548L826.53 20.9083L829.86 18.5498ZM824.456 22.3703L826.804 21.7886L827.786 24.7445L824.456 22.3703Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M846.566 18.5498H842.432L841.161 14.7448L839.891 18.5498H835.757L839.103 20.9083L837.832 24.7133L841.178 22.3548L843.237 20.9083L846.566 18.5498ZM841.162 22.3703L843.511 21.7886L844.492 24.7445L841.162 22.3703Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M862.287 18.5498H858.153L856.882 14.7448L855.612 18.5498H851.478L854.824 20.9083L853.553 24.7133L856.898 22.3548L858.958 20.9083L862.287 18.5498ZM856.883 22.3703L859.232 21.7886L860.213 24.7445L856.883 22.3703Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M878.993 18.5498H874.859L873.588 14.7448L872.318 18.5498H868.184L871.53 20.9083L870.259 24.7133L873.604 22.3548L875.663 20.9083L878.993 18.5498ZM873.589 22.3703L875.937 21.7886L876.919 24.7445L873.589 22.3703Z"
              fill="white"
            />
            <mask
              id="mask0_1_2091"
              maskUnits="userSpaceOnUse"
              x="905"
              y="17"
              width="50"
              height="11"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M905.803 17.3652H954.62V27.9998H905.803V17.3652Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_2091)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M951.098 19.6806H952.097V17.8568H953.418V19.6806H954.61V20.6812H953.418V23.9261C953.418 24.0682 953.424 24.1866 953.435 24.2932C953.447 24.3939 953.476 24.4827 953.517 24.5538C953.558 24.6248 953.622 24.6781 953.71 24.7136C953.798 24.7492 953.909 24.7669 954.061 24.7669C954.154 24.7669 954.248 24.7669 954.341 24.761C954.435 24.7551 954.528 24.7432 954.622 24.7196V25.7558C954.475 25.7735 954.329 25.7854 954.195 25.8031C954.055 25.8209 953.914 25.8268 953.768 25.8268C953.418 25.8268 953.137 25.7913 952.927 25.7262C952.717 25.661 952.547 25.5604 952.43 25.4301C952.308 25.2998 952.231 25.14 952.185 24.9445C952.144 24.7492 952.115 24.5242 952.109 24.2755V20.6931H951.11V19.6806H951.098ZM947.685 24.8608C947.977 24.8608 948.234 24.7956 948.45 24.6713C948.667 24.547 948.842 24.3811 948.982 24.1798C949.122 23.9785 949.222 23.7476 949.292 23.4929C949.356 23.2384 949.391 22.9778 949.391 22.7114C949.391 22.4508 949.356 22.1962 949.292 21.9357C949.228 21.6751 949.122 21.4501 948.982 21.2488C948.842 21.0475 948.667 20.8876 948.45 20.7633C948.234 20.6389 947.977 20.5738 947.685 20.5738C947.393 20.5738 947.136 20.6389 946.919 20.7633C946.703 20.8876 946.528 21.0534 946.388 21.2488C946.247 21.4501 946.148 21.6751 946.078 21.9357C946.014 22.1962 945.979 22.4508 945.979 22.7114C945.979 22.9778 946.014 23.2384 946.078 23.4929C946.142 23.7476 946.247 23.9785 946.388 24.1798C946.528 24.3811 946.703 24.547 946.919 24.6713C947.136 24.8016 947.393 24.8608 947.685 24.8608ZM947.685 25.9221C947.205 25.9221 946.779 25.8392 946.405 25.6794C946.031 25.5195 945.715 25.2945 945.452 25.0162C945.195 24.732 944.997 24.3945 944.862 24.0037C944.728 23.6128 944.658 23.1806 944.658 22.7128C944.658 22.2509 944.728 21.8246 944.862 21.4338C944.997 21.043 945.195 20.7055 945.452 20.4213C945.709 20.1371 946.031 19.918 946.405 19.7581C946.779 19.5982 947.205 19.5153 947.685 19.5153C948.164 19.5153 948.59 19.5982 948.964 19.7581C949.338 19.918 949.654 20.143 949.917 20.4213C950.174 20.7055 950.373 21.043 950.507 21.4338C950.641 21.8246 950.711 22.2509 950.711 22.7128C950.711 23.1806 950.641 23.6128 950.507 24.0037C950.373 24.3945 950.174 24.732 949.917 25.0162C949.66 25.3003 949.338 25.5195 948.964 25.6794C948.59 25.8392 948.164 25.9221 947.685 25.9221ZM942.316 25.7555H943.636V17.3651H942.316V25.7555ZM939.813 25.7552H941.134V19.6799H939.813V25.7552ZM939.813 18.6323H941.134V17.3651H939.813V18.6323ZM937.485 22.7231C937.485 22.4508 937.45 22.1844 937.38 21.9238C937.31 21.6633 937.204 21.4383 937.064 21.237C936.924 21.0356 936.749 20.8758 936.544 20.7574C936.334 20.6389 936.094 20.5738 935.825 20.5738C935.27 20.5738 934.849 20.7691 934.569 21.16C934.288 21.5508 934.148 22.0718 934.148 22.7231C934.148 23.0311 934.183 23.3153 934.259 23.5759C934.335 23.8364 934.44 24.0614 934.592 24.2509C934.738 24.4403 934.914 24.5883 935.118 24.695C935.323 24.8075 935.562 24.8608 935.831 24.8608C936.135 24.8608 936.386 24.7956 936.597 24.6713C936.807 24.547 936.976 24.3811 937.111 24.1858C937.245 23.9844 937.345 23.7594 937.403 23.5048C937.456 23.2502 937.485 22.9896 937.485 22.7231ZM932.865 19.6811H934.115V20.5041H934.139C934.326 20.1489 934.583 19.9002 934.916 19.7463C935.249 19.5923 935.605 19.5153 935.997 19.5153C936.47 19.5153 936.879 19.5982 937.23 19.77C937.58 19.9358 937.873 20.1667 938.106 20.4627C938.34 20.7588 938.51 21.1022 938.626 21.493C938.743 21.8838 938.802 22.3043 938.802 22.7483C938.802 23.1569 938.749 23.5536 938.644 23.9326C938.539 24.3175 938.381 24.655 938.171 24.9511C937.96 25.2471 937.691 25.478 937.364 25.6556C937.037 25.8333 936.657 25.9221 936.213 25.9221C936.02 25.9221 935.827 25.9044 935.634 25.8688C935.442 25.8333 935.255 25.774 935.079 25.6971C934.904 25.6202 934.735 25.5195 934.589 25.3951C934.437 25.2707 934.314 25.1287 934.209 24.9688H934.185V28.0005H932.865V19.6811ZM928.416 19.6806H929.416V17.8568H930.736V19.6806H931.928V20.6812H930.736V23.9261C930.736 24.0682 930.742 24.1866 930.754 24.2932C930.765 24.3939 930.795 24.4827 930.836 24.5538C930.876 24.6248 930.941 24.6781 931.028 24.7136C931.116 24.7492 931.227 24.7669 931.379 24.7669C931.473 24.7669 931.566 24.7669 931.659 24.761C931.753 24.7551 931.846 24.7432 931.94 24.7196V25.7558C931.794 25.7735 931.648 25.7854 931.513 25.8031C931.373 25.8209 931.233 25.8268 931.087 25.8268C930.736 25.8268 930.456 25.7913 930.245 25.7262C930.035 25.661 929.866 25.5604 929.749 25.4301C929.626 25.2998 929.55 25.14 929.503 24.9445C929.462 24.7492 929.433 24.5242 929.427 24.2755V20.6931H928.428V19.6806H928.416ZM924.056 23.8083C924.097 24.1991 924.243 24.4714 924.495 24.6313C924.752 24.7853 925.056 24.8682 925.412 24.8682C925.535 24.8682 925.675 24.8563 925.833 24.8386C925.99 24.8208 926.142 24.7793 926.277 24.726C926.417 24.6728 926.528 24.5898 926.622 24.4833C926.709 24.3767 926.75 24.2405 926.744 24.0688C926.739 23.8971 926.674 23.755 926.557 23.6484C926.44 23.5359 926.294 23.453 926.113 23.3819C925.932 23.3167 925.728 23.2575 925.494 23.2102C925.26 23.1628 925.026 23.1095 924.787 23.0563C924.541 23.003 924.302 22.9318 924.074 22.8549C923.846 22.778 923.641 22.6714 923.46 22.5352C923.279 22.4049 923.133 22.2332 923.028 22.026C922.917 21.8187 922.864 21.5641 922.864 21.2562C922.864 20.9246 922.946 20.6522 923.104 20.4272C923.262 20.2022 923.466 20.0246 923.706 19.8884C923.951 19.7522 924.22 19.6575 924.518 19.5982C924.816 19.545 925.102 19.5153 925.371 19.5153C925.681 19.5153 925.979 19.5509 926.259 19.616C926.54 19.6811 926.797 19.7877 927.025 19.9416C927.253 20.0896 927.44 20.2851 927.592 20.522C927.744 20.7588 927.837 21.0489 927.878 21.3865H926.499C926.435 21.0667 926.294 20.8476 926.066 20.741C925.839 20.6285 925.576 20.5752 925.283 20.5752C925.19 20.5752 925.079 20.5812 924.95 20.5989C924.822 20.6167 924.705 20.6463 924.588 20.6878C924.477 20.7292 924.383 20.7943 924.302 20.8772C924.226 20.9601 924.185 21.0667 924.185 21.2029C924.185 21.3687 924.243 21.499 924.354 21.5996C924.465 21.7003 924.611 21.7832 924.793 21.8542C924.974 21.9194 925.178 21.9786 925.412 22.026C925.646 22.0733 925.885 22.1266 926.131 22.1799C926.37 22.2332 926.604 22.3043 926.838 22.3812C927.072 22.4581 927.276 22.5648 927.457 22.701C927.638 22.8372 927.785 23.003 927.896 23.2043C928.006 23.4055 928.065 23.6602 928.065 23.9563C928.065 24.3175 927.983 24.6194 927.82 24.8741C927.656 25.1227 927.446 25.33 927.188 25.484C926.931 25.6379 926.639 25.7563 926.324 25.8274C926.008 25.8985 925.693 25.934 925.383 25.934C925.003 25.934 924.652 25.8925 924.331 25.8037C924.01 25.7148 923.729 25.5846 923.495 25.4129C923.262 25.2353 923.075 25.0162 922.94 24.7557C922.806 24.4951 922.736 24.1813 922.724 23.82H924.056V23.8083ZM921.811 25.7552H920.514V24.9084H920.491C920.327 25.2163 920.087 25.4591 919.766 25.6426C919.445 25.8262 919.117 25.9209 918.784 25.9209C917.995 25.9209 917.423 25.7255 917.072 25.3288C916.722 24.9321 916.546 24.3341 916.546 23.5347V19.6799H917.867V23.4044C917.867 23.9373 917.966 24.3163 918.171 24.5354C918.369 24.7545 918.656 24.867 919.018 24.867C919.299 24.867 919.526 24.8255 919.713 24.7366C919.9 24.6478 920.052 24.5354 920.163 24.3873C920.28 24.2452 920.362 24.0676 920.415 23.8663C920.467 23.6649 920.491 23.4459 920.491 23.209V19.6859H921.811V25.7552ZM912.225 19.6811H913.463V20.8535H913.487C913.528 20.6878 913.604 20.5279 913.715 20.3739C913.826 20.22 913.96 20.0719 914.118 19.9476C914.276 19.8173 914.451 19.7167 914.644 19.6338C914.837 19.5568 915.035 19.5153 915.234 19.5153C915.386 19.5153 915.497 19.5213 915.555 19.5272C915.614 19.5331 915.672 19.545 915.736 19.5509V20.8417C915.643 20.8239 915.55 20.8121 915.45 20.8002C915.351 20.7884 915.257 20.7825 915.164 20.7825C914.942 20.7825 914.731 20.8298 914.533 20.9186C914.334 21.0074 914.165 21.1437 914.018 21.3154C913.872 21.493 913.756 21.7062 913.668 21.9667C913.58 22.2273 913.539 22.5233 913.539 22.8609V25.7504H912.219V19.6811H912.225ZM905.809 17.3652H912.512V18.6323H909.876V25.7556H908.427V18.6323H905.803V17.3652H905.809Z"
                fill="#0F0F0F"
              />
            </g>
            <mask
              id="mask1_1_2091"
              maskUnits="userSpaceOnUse"
              x="888"
              y="12"
              width="17"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M888.956 12.0001H904.913V27.1052H888.956V12.0001Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1_1_2091)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M904.913 17.7728H898.819L896.937 12.0001L895.049 17.7728L888.956 17.767L893.89 21.3383L892.002 27.1052L896.937 23.5397L901.866 27.1052L899.984 21.3383L904.913 17.7728Z"
                fill="#00B67A"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M900.363 22.9578L899.997 21.5366L897.361 23.9329L900.363 22.9578Z"
              fill="#005128"
            />
            <rect
              x="966.62"
              y="18.4999"
              width="3"
              height="3"
              rx="1.5"
              fill="#0F0F0F"
            />
            <path
              d="M978.599 24.9999V24.1689L981.72 20.7527C982.086 20.3526 982.388 20.0048 982.625 19.7094C982.862 19.4109 983.037 19.1308 983.151 18.8692C983.268 18.6045 983.326 18.3275 983.326 18.0382C983.326 17.7058 983.246 17.4181 983.086 17.1749C982.929 16.9318 982.714 16.7441 982.44 16.6117C982.166 16.4794 981.858 16.4132 981.517 16.4132C981.154 16.4132 980.837 16.4886 980.566 16.6394C980.298 16.7872 980.09 16.9949 979.942 17.2627C979.798 17.5304 979.725 17.8443 979.725 18.2044H978.636C978.636 17.6504 978.764 17.1642 979.019 16.7456C979.275 16.3271 979.622 16.0008 980.062 15.7669C980.506 15.533 981.003 15.4161 981.554 15.4161C982.108 15.4161 982.598 15.533 983.026 15.7669C983.454 16.0008 983.79 16.3163 984.033 16.7133C984.276 17.1103 984.397 17.552 984.397 18.0382C984.397 18.386 984.334 18.7261 984.208 19.0585C984.085 19.3878 983.87 19.7556 983.562 20.1618C983.257 20.565 982.834 21.0574 982.292 21.6391L980.169 23.9104V23.9843H984.564V24.9999H978.599ZM989.794 15.5453V24.9999H988.649V16.7456H988.594L986.285 18.2783V17.1149L988.649 15.5453H989.794ZM993.598 23.7073L993.524 24.2058C993.472 24.5567 993.392 24.9322 993.284 25.3323C993.179 25.7324 993.07 26.1094 992.956 26.4633C992.842 26.8172 992.749 27.0988 992.675 27.3081H991.844C991.884 27.1111 991.936 26.8511 992.001 26.5279C992.065 26.2048 992.13 25.8432 992.195 25.4431C992.262 25.046 992.318 24.6398 992.361 24.2243L992.416 23.7073H993.598ZM998.437 25.1291C997.828 25.1291 997.285 25.0245 996.808 24.8152C996.334 24.6059 995.957 24.3151 995.677 23.9427C995.4 23.5672 995.249 23.1317 995.224 22.6362H996.387C996.412 22.9409 996.517 23.2041 996.701 23.4257C996.886 23.6442 997.128 23.8134 997.426 23.9335C997.725 24.0535 998.056 24.1135 998.419 24.1135C998.825 24.1135 999.185 24.0427 999.499 23.9012C999.813 23.7596 1000.06 23.5626 1000.24 23.3102C1000.42 23.0579 1000.51 22.7655 1000.51 22.4331C1000.51 22.0853 1000.42 21.7791 1000.25 21.5144C1000.07 21.2467 999.822 21.0374 999.49 20.8866C999.157 20.7358 998.751 20.6604 998.271 20.6604H997.514V19.6448H998.271C998.646 19.6448 998.976 19.5771 999.259 19.4416C999.545 19.3062 999.768 19.1154 999.928 18.8692C1000.09 18.623 1000.17 18.3337 1000.17 18.0013C1000.17 17.6812 1000.1 17.4027 999.961 17.1657C999.819 16.9287 999.619 16.7441 999.361 16.6117C999.105 16.4794 998.803 16.4132 998.456 16.4132C998.129 16.4132 997.822 16.4732 997.532 16.5933C997.246 16.7102 997.012 16.881 996.831 17.1057C996.649 17.3273 996.551 17.595 996.535 17.909H995.427C995.446 17.4135 995.595 16.9795 995.875 16.6071C996.155 16.2316 996.521 15.9393 996.974 15.73C997.429 15.5207 997.929 15.4161 998.474 15.4161C999.059 15.4161 999.561 15.5346 999.979 15.7715C1000.4 16.0054 1000.72 16.3147 1000.94 16.6995C1001.17 17.0842 1001.28 17.4996 1001.28 17.9459C1001.28 18.4783 1001.14 18.9323 1000.86 19.3078C1000.58 19.6832 1000.21 19.9433 999.73 20.0879V20.1618C1000.33 20.2603 1000.79 20.5142 1001.13 20.9235C1001.46 21.3298 1001.63 21.833 1001.63 22.4331C1001.63 22.9471 1001.49 23.4087 1001.21 23.8181C1000.93 24.2243 1000.56 24.5444 1000.08 24.7783C999.596 25.0122 999.05 25.1291 998.437 25.1291ZM1006.6 25.1291C1005.91 25.1291 1005.32 24.9399 1004.83 24.5613C1004.34 24.1797 1003.96 23.6272 1003.7 22.904C1003.45 22.1777 1003.32 21.3005 1003.32 20.2726C1003.32 19.2508 1003.45 18.3783 1003.7 17.6551C1003.97 16.9287 1004.34 16.3748 1004.83 15.9931C1005.32 15.6084 1005.91 15.4161 1006.6 15.4161C1007.29 15.4161 1007.88 15.6084 1008.37 15.9931C1008.86 16.3748 1009.24 16.9287 1009.5 17.6551C1009.76 18.3783 1009.89 19.2508 1009.89 20.2726C1009.89 21.3005 1009.76 22.1777 1009.5 22.904C1009.24 23.6272 1008.87 24.1797 1008.38 24.5613C1007.89 24.9399 1007.3 25.1291 1006.6 25.1291ZM1006.6 24.1135C1007.29 24.1135 1007.83 23.7811 1008.21 23.1164C1008.59 22.4516 1008.78 21.5037 1008.78 20.2726C1008.78 19.4539 1008.7 18.7569 1008.52 18.1813C1008.35 17.6058 1008.1 17.1673 1007.77 16.8656C1007.45 16.564 1007.06 16.4132 1006.6 16.4132C1005.92 16.4132 1005.39 16.7502 1005 17.4242C1004.62 18.0952 1004.42 19.0446 1004.42 20.2726C1004.42 21.0913 1004.51 21.7868 1004.68 22.3593C1004.86 22.9317 1005.1 23.3672 1005.43 23.6657C1005.75 23.9642 1006.15 24.1135 1006.6 24.1135ZM1014.67 25.1291C1014.04 25.1291 1013.48 25.0168 1012.99 24.7921C1012.51 24.5644 1012.13 24.252 1011.86 23.855C1011.59 23.4549 1011.46 22.9994 1011.46 22.4885C1011.46 22.0884 1011.54 21.7191 1011.7 21.3806C1011.86 21.0389 1012.07 20.7543 1012.35 20.5265C1012.63 20.2957 1012.94 20.1495 1013.29 20.0879V20.0325C1012.84 19.9156 1012.48 19.6617 1012.21 19.2708C1011.94 18.8769 1011.81 18.4291 1011.81 17.9274C1011.81 17.4473 1011.93 17.018 1012.18 16.6394C1012.42 16.2609 1012.76 15.9624 1013.19 15.7438C1013.63 15.5253 1014.12 15.4161 1014.67 15.4161C1015.22 15.4161 1015.71 15.5253 1016.14 15.7438C1016.57 15.9624 1016.91 16.2609 1017.16 16.6394C1017.41 17.018 1017.53 17.4473 1017.54 17.9274C1017.53 18.4291 1017.4 18.8769 1017.12 19.2708C1016.86 19.6617 1016.5 19.9156 1016.06 20.0325V20.0879C1016.4 20.1495 1016.71 20.2957 1016.98 20.5265C1017.26 20.7543 1017.47 21.0389 1017.64 21.3806C1017.8 21.7191 1017.88 22.0884 1017.89 22.4885C1017.88 22.9994 1017.74 23.4549 1017.47 23.855C1017.2 24.252 1016.82 24.5644 1016.34 24.7921C1015.86 25.0168 1015.3 25.1291 1014.67 25.1291ZM1014.67 24.1135C1015.1 24.1135 1015.47 24.0443 1015.78 23.9058C1016.09 23.7673 1016.33 23.5718 1016.5 23.3195C1016.67 23.0671 1016.76 22.7717 1016.76 22.4331C1016.76 22.0761 1016.66 21.7606 1016.48 21.4867C1016.3 21.2128 1016.05 20.9974 1015.74 20.8404C1015.43 20.6835 1015.07 20.605 1014.67 20.605C1014.27 20.605 1013.91 20.6835 1013.59 20.8404C1013.28 20.9974 1013.03 21.2128 1012.85 21.4867C1012.67 21.7606 1012.58 22.0761 1012.59 22.4331C1012.58 22.7717 1012.67 23.0671 1012.83 23.3195C1013 23.5718 1013.24 23.7673 1013.56 23.9058C1013.87 24.0443 1014.24 24.1135 1014.67 24.1135ZM1014.67 19.6263C1015.01 19.6263 1015.31 19.5586 1015.57 19.4232C1015.84 19.2878 1016.05 19.0985 1016.2 18.8553C1016.35 18.6122 1016.42 18.3275 1016.43 18.0013C1016.42 17.6812 1016.35 17.4027 1016.2 17.1657C1016.05 16.9257 1015.85 16.741 1015.59 16.6117C1015.33 16.4794 1015.02 16.4132 1014.67 16.4132C1014.32 16.4132 1014.01 16.4794 1013.75 16.6117C1013.48 16.741 1013.28 16.9257 1013.13 17.1657C1012.99 17.4027 1012.92 17.6812 1012.92 18.0013C1012.92 18.3275 1012.99 18.6122 1013.14 18.8553C1013.29 19.0985 1013.49 19.2878 1013.76 19.4232C1014.02 19.5586 1014.33 19.6263 1014.67 19.6263ZM1022.44 23.3379V17.2442H1023.48V23.3379H1022.44ZM1019.91 20.8081V19.774H1026.01V20.8081H1019.91Z"
              fill="black"
            />
            <path
              d="M1036.44 24.9999V15.5453H1042.81V17.1934H1038.44V19.4463H1042.49V21.0943H1038.44V23.3518H1042.83V24.9999H1036.44ZM1046.01 17.909L1047.31 20.388L1048.64 17.909H1050.66L1048.61 21.4544L1050.72 24.9999H1048.71L1047.31 22.5485L1045.93 24.9999H1043.9L1046.01 21.4544L1043.98 17.909H1046.01ZM1054.78 25.1384C1054.05 25.1384 1053.43 24.9845 1052.91 24.6767C1052.39 24.3659 1051.99 23.935 1051.71 23.3841C1051.43 22.8332 1051.29 22.1992 1051.29 21.4821C1051.29 20.7558 1051.43 20.1187 1051.71 19.5709C1051.99 19.02 1052.39 18.5907 1052.91 18.2829C1053.43 17.9721 1054.05 17.8166 1054.77 17.8166C1055.39 17.8166 1055.93 17.929 1056.4 18.1536C1056.86 18.3783 1057.23 18.6938 1057.5 19.1C1057.77 19.5063 1057.92 19.9833 1057.95 20.5311H1056.09C1056.04 20.1772 1055.9 19.8925 1055.68 19.6771C1055.45 19.4586 1055.16 19.3493 1054.8 19.3493C1054.5 19.3493 1054.23 19.4324 1054 19.5986C1053.78 19.7617 1053.6 20.0002 1053.48 20.3142C1053.35 20.6281 1053.29 21.0082 1053.29 21.4544C1053.29 21.9068 1053.35 22.2915 1053.47 22.6085C1053.6 22.9255 1053.78 23.1671 1054 23.3333C1054.23 23.4995 1054.5 23.5826 1054.8 23.5826C1055.03 23.5826 1055.23 23.5365 1055.41 23.4441C1055.59 23.3518 1055.74 23.2179 1055.86 23.0425C1055.98 22.864 1056.05 22.6501 1056.09 22.4008H1057.95C1057.92 22.9425 1057.77 23.4195 1057.5 23.8319C1057.24 24.2412 1056.88 24.5613 1056.42 24.7921C1055.96 25.023 1055.41 25.1384 1054.78 25.1384ZM1062.44 25.1384C1061.71 25.1384 1061.08 24.9906 1060.55 24.6952C1060.03 24.3967 1059.63 23.975 1059.34 23.4303C1059.06 22.8825 1058.92 22.2346 1058.92 21.4867C1058.92 20.7573 1059.06 20.1172 1059.34 19.5663C1059.63 19.0154 1060.03 18.5861 1060.54 18.2783C1061.06 17.9705 1061.66 17.8166 1062.36 17.8166C1062.83 17.8166 1063.26 17.892 1063.67 18.0428C1064.07 18.1906 1064.43 18.4137 1064.73 18.7122C1065.03 19.0108 1065.27 19.3862 1065.44 19.8387C1065.61 20.288 1065.69 20.8143 1065.69 21.4175V21.9576H1059.7V20.7389H1063.84C1063.84 20.4557 1063.78 20.2049 1063.66 19.9864C1063.53 19.7679 1063.36 19.5971 1063.14 19.474C1062.93 19.3478 1062.68 19.2847 1062.39 19.2847C1062.09 19.2847 1061.83 19.3539 1061.6 19.4924C1061.37 19.6278 1061.19 19.811 1061.06 20.0418C1060.93 20.2695 1060.87 20.5234 1060.86 20.8035V21.9622C1060.86 22.3131 1060.93 22.6162 1061.06 22.8717C1061.19 23.1271 1061.38 23.3241 1061.62 23.4626C1061.86 23.6011 1062.14 23.6703 1062.47 23.6703C1062.69 23.6703 1062.89 23.6396 1063.07 23.578C1063.25 23.5164 1063.41 23.4241 1063.54 23.301C1063.67 23.1779 1063.76 23.0271 1063.83 22.8486L1065.65 22.9686C1065.56 23.4057 1065.37 23.7873 1065.08 24.1135C1064.8 24.4367 1064.43 24.689 1063.98 24.8706C1063.54 25.0491 1063.02 25.1384 1062.44 25.1384ZM1068.94 15.5453V24.9999H1066.98V15.5453H1068.94ZM1072.48 15.5453V24.9999H1070.52V15.5453H1072.48ZM1077.29 25.1384C1076.56 25.1384 1075.93 24.9906 1075.41 24.6952C1074.88 24.3967 1074.48 23.975 1074.2 23.4303C1073.91 22.8825 1073.77 22.2346 1073.77 21.4867C1073.77 20.7573 1073.91 20.1172 1074.2 19.5663C1074.48 19.0154 1074.88 18.5861 1075.39 18.2783C1075.91 17.9705 1076.52 17.8166 1077.21 17.8166C1077.68 17.8166 1078.12 17.892 1078.52 18.0428C1078.93 18.1906 1079.28 18.4137 1079.58 18.7122C1079.89 19.0108 1080.12 19.3862 1080.29 19.8387C1080.46 20.288 1080.55 20.8143 1080.55 21.4175V21.9576H1074.56V20.7389H1078.69C1078.69 20.4557 1078.63 20.2049 1078.51 19.9864C1078.39 19.7679 1078.22 19.5971 1078 19.474C1077.78 19.3478 1077.53 19.2847 1077.24 19.2847C1076.95 19.2847 1076.68 19.3539 1076.45 19.4924C1076.22 19.6278 1076.04 19.811 1075.92 20.0418C1075.79 20.2695 1075.72 20.5234 1075.72 20.8035V21.9622C1075.72 22.3131 1075.78 22.6162 1075.91 22.8717C1076.04 23.1271 1076.23 23.3241 1076.47 23.4626C1076.71 23.6011 1076.99 23.6703 1077.32 23.6703C1077.54 23.6703 1077.74 23.6396 1077.92 23.578C1078.11 23.5164 1078.26 23.4241 1078.39 23.301C1078.52 23.1779 1078.62 23.0271 1078.69 22.8486L1080.5 22.9686C1080.41 23.4057 1080.22 23.7873 1079.94 24.1135C1079.65 24.4367 1079.29 24.689 1078.84 24.8706C1078.39 25.0491 1077.88 25.1384 1077.29 25.1384ZM1083.8 20.9004V24.9999H1081.83V17.909H1083.7V19.16H1083.79C1083.94 18.7476 1084.21 18.4214 1084.58 18.1813C1084.95 17.9382 1085.39 17.8166 1085.92 17.8166C1086.41 17.8166 1086.84 17.9244 1087.21 18.1398C1087.57 18.3552 1087.86 18.663 1088.06 19.0631C1088.26 19.4601 1088.37 19.9341 1088.37 20.485V24.9999H1086.4V20.8358C1086.4 20.4019 1086.29 20.0633 1086.07 19.8202C1085.84 19.574 1085.53 19.4509 1085.14 19.4509C1084.87 19.4509 1084.64 19.5078 1084.44 19.6217C1084.24 19.7356 1084.08 19.9017 1083.97 20.1203C1083.86 20.3357 1083.8 20.5958 1083.8 20.9004ZM1093.69 17.909V19.3862H1089.42V17.909H1093.69ZM1090.39 16.2101H1092.35V22.8209C1092.35 23.0025 1092.38 23.1441 1092.44 23.2456C1092.49 23.3441 1092.57 23.4133 1092.67 23.4534C1092.77 23.4934 1092.89 23.5134 1093.02 23.5134C1093.11 23.5134 1093.2 23.5057 1093.3 23.4903C1093.39 23.4718 1093.46 23.458 1093.51 23.4487L1093.82 24.9122C1093.72 24.9429 1093.58 24.9783 1093.4 25.0183C1093.22 25.0614 1093.01 25.0876 1092.75 25.0968C1092.28 25.1153 1091.86 25.0522 1091.5 24.9075C1091.15 24.7629 1090.87 24.5382 1090.68 24.2335C1090.48 23.9289 1090.38 23.5441 1090.39 23.0794V16.2101Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="375"
            height="40"
            viewBox="0 0 375 40"
            fill="none"
          >
            <rect width="375" height="39.9997" fill="#F1F3F4" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.3796 27.5H55.1194V12.5H40.3796V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.0852 27.5H71.825V12.5H57.0852V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M73.7886 27.5H88.5284V12.5H73.7886V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M89.5127 27.5H104.252V12.5H89.5127V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M113.094 27.5H120.956V12.5H113.094V27.5Z"
              fill="#0F0F0F"
              fill-opacity="0.33001"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M106.218 27.5H114.079V12.5H106.218V27.5Z"
              fill="#00B67A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M53.1539 18.5492H49.02L47.7493 14.7441L46.4786 18.5492H42.3447L45.6904 20.9077L44.4197 24.7127L47.7654 22.3542L49.8243 20.9077L53.1539 18.5492ZM47.75 22.3697L50.0984 21.7879L51.0796 24.7439L47.75 22.3697Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M69.86 18.5492H65.7261L64.4554 14.7441L63.1847 18.5492H59.0508L62.3965 20.9077L61.1258 24.7127L64.4715 22.3542L66.5304 20.9077L69.86 18.5492ZM64.4561 22.3697L66.8045 21.7879L67.7857 24.7439L64.4561 22.3697Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M86.566 18.5492H82.4323L81.1614 14.7441L79.8907 18.5492H75.7568L79.1027 20.9077L77.8318 24.7127L81.1775 22.3542L83.2366 20.9077L86.566 18.5492ZM81.1621 22.3697L83.5105 21.7879L84.4919 24.7439L81.1621 22.3697Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M102.287 18.5492H98.1532L96.8823 14.7441L95.6116 18.5492H91.4778L94.8235 20.9077L93.5526 24.7127L96.8984 22.3542L98.9575 20.9077L102.287 18.5492ZM96.8831 22.3697L99.2315 21.7879L100.213 24.7439L96.8831 22.3697Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M118.993 18.5492H114.859L113.588 14.7441L112.318 18.5492H108.184L111.53 20.9077L110.259 24.7127L113.604 22.3542L115.664 20.9077L118.993 18.5492ZM113.589 22.3697L115.938 21.7879L116.919 24.7439L113.589 22.3697Z"
              fill="white"
            />
            <mask
              id="mask0_1_5482"
              maskUnits="userSpaceOnUse"
              x="145"
              y="17"
              width="50"
              height="11"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M145.803 17.3652H194.62V27.9998H145.803V17.3652Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_5482)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M191.098 19.6807H192.097V17.857H193.418V19.6807H194.61V20.6813H193.418V23.9262C193.418 24.0683 193.424 24.1868 193.435 24.2933C193.447 24.394 193.476 24.4828 193.517 24.5539C193.558 24.6249 193.622 24.6782 193.71 24.7138C193.798 24.7493 193.909 24.767 194.061 24.767C194.154 24.767 194.248 24.767 194.341 24.7611C194.435 24.7552 194.528 24.7434 194.622 24.7197V25.7559C194.476 25.7736 194.329 25.7855 194.195 25.8032C194.055 25.821 193.915 25.827 193.768 25.827C193.418 25.827 193.137 25.7914 192.927 25.7263C192.717 25.6612 192.547 25.5605 192.43 25.4302C192.308 25.2999 192.232 25.1401 192.185 24.9446C192.144 24.7493 192.115 24.5243 192.109 24.2756V20.6932H191.11V19.6807H191.098ZM187.685 24.8609C187.977 24.8609 188.234 24.7957 188.451 24.6714C188.667 24.5471 188.842 24.3812 188.982 24.18C189.123 23.9786 189.222 23.7477 189.292 23.493C189.356 23.2385 189.391 22.9779 189.391 22.7115C189.391 22.451 189.356 22.1963 189.292 21.9358C189.228 21.6753 189.123 21.4502 188.982 21.2489C188.842 21.0476 188.667 20.8877 188.451 20.7634C188.234 20.6391 187.977 20.5739 187.685 20.5739C187.393 20.5739 187.136 20.6391 186.92 20.7634C186.703 20.8877 186.528 21.0535 186.388 21.2489C186.248 21.4502 186.148 21.6753 186.078 21.9358C186.014 22.1963 185.979 22.451 185.979 22.7115C185.979 22.9779 186.014 23.2385 186.078 23.493C186.142 23.7477 186.248 23.9786 186.388 24.18C186.528 24.3812 186.703 24.5471 186.92 24.6714C187.136 24.8017 187.393 24.8609 187.685 24.8609ZM187.685 25.9222C187.205 25.9222 186.779 25.8394 186.405 25.6795C186.031 25.5196 185.715 25.2946 185.452 25.0163C185.195 24.7321 184.997 24.3946 184.862 24.0038C184.728 23.6129 184.658 23.1807 184.658 22.7129C184.658 22.251 184.728 21.8248 184.862 21.434C184.997 21.0432 185.195 20.7056 185.452 20.4214C185.71 20.1372 186.031 19.9181 186.405 19.7582C186.779 19.5984 187.205 19.5155 187.685 19.5155C188.164 19.5155 188.59 19.5984 188.964 19.7582C189.338 19.9181 189.654 20.1431 189.917 20.4214C190.174 20.7056 190.373 21.0432 190.507 21.434C190.641 21.8248 190.712 22.251 190.712 22.7129C190.712 23.1807 190.641 23.6129 190.507 24.0038C190.373 24.3946 190.174 24.7321 189.917 25.0163C189.66 25.3005 189.338 25.5196 188.964 25.6795C188.59 25.8394 188.164 25.9222 187.685 25.9222ZM182.316 25.7556H183.636V17.3652H182.316V25.7556ZM179.813 25.7553H181.134V19.6801H179.813V25.7553ZM179.813 18.6324H181.134V17.3652H179.813V18.6324ZM177.485 22.7233C177.485 22.451 177.45 22.1845 177.38 21.9239C177.31 21.6634 177.204 21.4384 177.064 21.2371C176.924 21.0357 176.749 20.8759 176.544 20.7575C176.334 20.6391 176.094 20.5739 175.825 20.5739C175.27 20.5739 174.849 20.7693 174.569 21.1601C174.289 21.5509 174.148 22.0719 174.148 22.7233C174.148 23.0312 174.183 23.3154 174.259 23.576C174.335 23.8365 174.44 24.0615 174.592 24.251C174.738 24.4404 174.914 24.5885 175.118 24.6951C175.323 24.8076 175.562 24.8609 175.831 24.8609C176.135 24.8609 176.386 24.7957 176.597 24.6714C176.807 24.5471 176.977 24.3812 177.111 24.1859C177.245 23.9846 177.345 23.7595 177.403 23.5049C177.456 23.2503 177.485 22.9897 177.485 22.7233ZM172.865 19.6813H174.115V20.5043H174.139C174.326 20.149 174.583 19.9003 174.916 19.7464C175.249 19.5924 175.605 19.5155 175.997 19.5155C176.47 19.5155 176.879 19.5984 177.23 19.7701C177.58 19.9359 177.873 20.1668 178.106 20.4629C178.34 20.7589 178.51 21.1024 178.626 21.4932C178.743 21.884 178.802 22.3044 178.802 22.7485C178.802 23.157 178.749 23.5537 178.644 23.9327C178.539 24.3176 178.381 24.6551 178.171 24.9512C177.96 25.2472 177.692 25.4781 177.364 25.6557C177.037 25.8334 176.657 25.9222 176.213 25.9222C176.02 25.9222 175.827 25.9045 175.635 25.869C175.442 25.8334 175.255 25.7742 175.079 25.6973C174.904 25.6203 174.735 25.5196 174.589 25.3953C174.437 25.2709 174.314 25.1288 174.209 24.9689H174.185V28.0006H172.865V19.6813ZM168.416 19.6807H169.416V17.857H170.736V19.6807H171.928V20.6813H170.736V23.9262C170.736 24.0683 170.742 24.1868 170.754 24.2933C170.766 24.394 170.795 24.4828 170.836 24.5539C170.877 24.6249 170.941 24.6782 171.028 24.7138C171.116 24.7493 171.227 24.767 171.379 24.767C171.473 24.767 171.566 24.767 171.66 24.7611C171.753 24.7552 171.847 24.7434 171.94 24.7197V25.7559C171.794 25.7736 171.648 25.7855 171.513 25.8032C171.373 25.821 171.233 25.827 171.087 25.827C170.736 25.827 170.456 25.7914 170.245 25.7263C170.035 25.6612 169.866 25.5605 169.749 25.4302C169.626 25.2999 169.55 25.1401 169.503 24.9446C169.462 24.7493 169.433 24.5243 169.427 24.2756V20.6932H168.428V19.6807H168.416ZM164.056 23.8084C164.097 24.1992 164.243 24.4715 164.495 24.6314C164.752 24.7854 165.056 24.8683 165.412 24.8683C165.535 24.8683 165.675 24.8564 165.833 24.8387C165.991 24.8209 166.143 24.7795 166.277 24.7262C166.417 24.6729 166.528 24.5899 166.622 24.4834C166.709 24.3768 166.75 24.2406 166.744 24.0689C166.739 23.8972 166.674 23.7551 166.557 23.6485C166.441 23.536 166.294 23.4531 166.113 23.382C165.932 23.3169 165.728 23.2576 165.494 23.2103C165.26 23.163 165.026 23.1096 164.787 23.0564C164.541 23.0031 164.302 22.932 164.074 22.8551C163.846 22.7781 163.642 22.6715 163.46 22.5353C163.279 22.405 163.133 22.2333 163.028 22.0261C162.917 21.8188 162.864 21.5642 162.864 21.2563C162.864 20.9247 162.946 20.6523 163.104 20.4273C163.262 20.2023 163.466 20.0247 163.706 19.8885C163.951 19.7523 164.22 19.6576 164.518 19.5984C164.816 19.5451 165.102 19.5155 165.371 19.5155C165.681 19.5155 165.979 19.551 166.259 19.6161C166.54 19.6813 166.797 19.7878 167.025 19.9417C167.253 20.0898 167.44 20.2852 167.592 20.5221C167.744 20.7589 167.837 21.0491 167.878 21.3866H166.499C166.435 21.0668 166.294 20.8477 166.067 20.7411C165.839 20.6287 165.576 20.5754 165.284 20.5754C165.19 20.5754 165.079 20.5813 164.95 20.5991C164.822 20.6168 164.705 20.6464 164.588 20.6879C164.477 20.7293 164.384 20.7945 164.302 20.8774C164.226 20.9603 164.185 21.0668 164.185 21.203C164.185 21.3688 164.243 21.4991 164.354 21.5997C164.465 21.7004 164.612 21.7833 164.793 21.8544C164.974 21.9195 165.178 21.9787 165.412 22.0261C165.646 22.0734 165.885 22.1267 166.131 22.18C166.37 22.2333 166.604 22.3044 166.838 22.3814C167.072 22.4583 167.276 22.5649 167.457 22.7011C167.638 22.8373 167.785 23.0031 167.896 23.2044C168.007 23.4057 168.065 23.6603 168.065 23.9564C168.065 24.3176 167.983 24.6195 167.82 24.8742C167.656 25.1228 167.446 25.3301 167.188 25.4841C166.931 25.638 166.639 25.7565 166.324 25.8275C166.008 25.8986 165.693 25.9341 165.383 25.9341C165.003 25.9341 164.652 25.8926 164.331 25.8038C164.01 25.715 163.729 25.5848 163.495 25.413C163.262 25.2354 163.075 25.0163 162.94 24.7558C162.806 24.4952 162.736 24.1814 162.724 23.8202H164.056V23.8084ZM161.811 25.7553H160.514V24.9085H160.491C160.327 25.2164 160.087 25.4592 159.766 25.6428C159.445 25.8263 159.117 25.921 158.784 25.921C157.996 25.921 157.423 25.7257 157.072 25.3289C156.722 24.9322 156.546 24.3342 156.546 23.5348V19.6801H157.867V23.4045C157.867 23.9374 157.966 24.3164 158.171 24.5355C158.369 24.7546 158.656 24.8671 159.018 24.8671C159.299 24.8671 159.527 24.8256 159.714 24.7368C159.901 24.6479 160.052 24.5355 160.163 24.3875C160.28 24.2454 160.362 24.0677 160.415 23.8664C160.467 23.6651 160.491 23.446 160.491 23.2091V19.686H161.811V25.7553ZM152.225 19.6813H153.463V20.8537H153.487C153.528 20.6879 153.604 20.528 153.715 20.374C153.826 20.2201 153.96 20.0721 154.118 19.9477C154.276 19.8175 154.451 19.7168 154.644 19.6339C154.837 19.5569 155.035 19.5155 155.234 19.5155C155.386 19.5155 155.497 19.5214 155.555 19.5273C155.614 19.5332 155.672 19.5451 155.737 19.551V20.8418C155.643 20.8241 155.55 20.8122 155.45 20.8003C155.351 20.7885 155.257 20.7826 155.164 20.7826C154.942 20.7826 154.731 20.8299 154.533 20.9187C154.334 21.0076 154.165 21.1438 154.019 21.3155C153.872 21.4932 153.756 21.7063 153.668 21.9669C153.58 22.2274 153.539 22.5235 153.539 22.861V25.7505H152.219V19.6813H152.225ZM145.809 17.3653H152.512V18.6325H149.876V25.7557H148.427V18.6325H145.803V17.3653H145.809Z"
                fill="#0F0F0F"
              />
            </g>
            <mask
              id="mask1_1_5482"
              maskUnits="userSpaceOnUse"
              x="128"
              y="12"
              width="17"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M128.956 12H144.913V27.1051H128.956V12Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1_1_5482)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M144.913 17.7727H138.819L136.937 12L135.049 17.7727L128.956 17.7669L133.891 21.3382L132.003 27.1051L136.937 23.5396L141.866 27.1051L139.984 21.3382L144.913 17.7727Z"
                fill="#00B67A"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M140.363 22.9583L139.997 21.5371L137.361 23.9334L140.363 22.9583Z"
              fill="#005128"
            />
            <rect
              x="206.62"
              y="18.5"
              width="3"
              height="3"
              rx="1.5"
              fill="#0F0F0F"
            />
            <path
              d="M218.599 25V24.169L221.72 20.7528C222.086 20.3527 222.388 20.005 222.625 19.7095C222.862 19.411 223.037 19.1309 223.151 18.8693C223.268 18.6046 223.326 18.3277 223.326 18.0384C223.326 17.706 223.246 17.4182 223.086 17.1751C222.929 16.9319 222.714 16.7442 222.44 16.6119C222.166 16.4795 221.858 16.4134 221.517 16.4134C221.154 16.4134 220.837 16.4888 220.566 16.6396C220.298 16.7873 220.09 16.995 219.942 17.2628C219.798 17.5305 219.725 17.8445 219.725 18.2045H218.636C218.636 17.6506 218.764 17.1643 219.019 16.7457C219.275 16.3272 219.622 16.0009 220.062 15.767C220.506 15.5331 221.003 15.4162 221.554 15.4162C222.108 15.4162 222.598 15.5331 223.026 15.767C223.454 16.0009 223.79 16.3164 224.033 16.7134C224.276 17.1104 224.397 17.5521 224.397 18.0384C224.397 18.3861 224.334 18.7262 224.208 19.0586C224.085 19.3879 223.87 19.7557 223.562 20.1619C223.257 20.5651 222.834 21.0575 222.292 21.6392L220.169 23.9105V23.9844H224.564V25H218.599ZM229.794 15.5455V25H228.649V16.7457H228.594L226.285 18.2784V17.1151L228.649 15.5455H229.794ZM233.598 23.7074L233.524 24.206C233.472 24.5568 233.392 24.9323 233.284 25.3324C233.179 25.7325 233.07 26.1095 232.956 26.4634C232.842 26.8174 232.749 27.099 232.675 27.3082H231.844C231.884 27.1113 231.936 26.8512 232.001 26.5281C232.065 26.2049 232.13 25.8433 232.195 25.4432C232.262 25.0462 232.318 24.6399 232.361 24.2244L232.416 23.7074H233.598ZM238.437 25.1293C237.828 25.1293 237.285 25.0246 236.808 24.8153C236.334 24.6061 235.957 24.3152 235.677 23.9428C235.4 23.5674 235.249 23.1319 235.224 22.6364H236.387C236.412 22.9411 236.517 23.2042 236.701 23.4258C236.886 23.6443 237.128 23.8136 237.426 23.9336C237.725 24.0536 238.056 24.1136 238.419 24.1136C238.825 24.1136 239.185 24.0429 239.499 23.9013C239.813 23.7597 240.059 23.5627 240.238 23.3104C240.416 23.058 240.505 22.7656 240.505 22.4332C240.505 22.0855 240.419 21.7792 240.247 21.5146C240.075 21.2468 239.822 21.0375 239.49 20.8867C239.157 20.7359 238.751 20.6605 238.271 20.6605H237.514V19.6449H238.271C238.646 19.6449 238.976 19.5772 239.259 19.4418C239.545 19.3063 239.768 19.1155 239.928 18.8693C240.091 18.6231 240.173 18.3338 240.173 18.0014C240.173 17.6813 240.102 17.4028 239.961 17.1658C239.819 16.9289 239.619 16.7442 239.361 16.6119C239.105 16.4795 238.803 16.4134 238.456 16.4134C238.129 16.4134 237.822 16.4734 237.532 16.5934C237.246 16.7103 237.012 16.8812 236.831 17.1058C236.649 17.3274 236.551 17.5952 236.535 17.9091H235.427C235.446 17.4136 235.595 16.9796 235.875 16.6072C236.155 16.2318 236.521 15.9394 236.974 15.7301C237.429 15.5208 237.929 15.4162 238.474 15.4162C239.059 15.4162 239.561 15.5347 239.979 15.7717C240.398 16.0056 240.719 16.3149 240.944 16.6996C241.169 17.0843 241.281 17.4998 241.281 17.946C241.281 18.4785 241.141 18.9324 240.861 19.3079C240.584 19.6834 240.207 19.9434 239.73 20.0881V20.1619C240.327 20.2604 240.793 20.5143 241.129 20.9237C241.464 21.3299 241.632 21.8331 241.632 22.4332C241.632 22.9472 241.492 23.4089 241.212 23.8182C240.935 24.2244 240.556 24.5445 240.076 24.7784C239.596 25.0123 239.05 25.1293 238.437 25.1293ZM246.604 25.1293C245.908 25.1293 245.316 24.94 244.826 24.5614C244.337 24.1798 243.963 23.6274 243.705 22.9041C243.446 22.1778 243.317 21.3007 243.317 20.2727C243.317 19.2509 243.446 18.3784 243.705 17.6552C243.966 16.9289 244.342 16.3749 244.831 15.9933C245.323 15.6085 245.914 15.4162 246.604 15.4162C247.293 15.4162 247.883 15.6085 248.372 15.9933C248.864 16.3749 249.24 16.9289 249.498 17.6552C249.76 18.3784 249.891 19.2509 249.891 20.2727C249.891 21.3007 249.761 22.1778 249.503 22.9041C249.244 23.6274 248.87 24.1798 248.381 24.5614C247.892 24.94 247.299 25.1293 246.604 25.1293ZM246.604 24.1136C247.293 24.1136 247.829 23.7812 248.21 23.1165C248.592 22.4517 248.783 21.5038 248.783 20.2727C248.783 19.4541 248.695 18.757 248.52 18.1815C248.347 17.6059 248.098 17.1674 247.772 16.8658C247.449 16.5642 247.059 16.4134 246.604 16.4134C245.921 16.4134 245.387 16.7504 245.002 17.4244C244.617 18.0953 244.425 19.0447 244.425 20.2727C244.425 21.0914 244.511 21.7869 244.683 22.3594C244.856 22.9318 245.103 23.3673 245.427 23.6658C245.753 23.9644 246.145 24.1136 246.604 24.1136ZM254.673 25.1293C254.039 25.1293 253.479 25.0169 252.993 24.7923C252.51 24.5645 252.133 24.2521 251.862 23.8551C251.591 23.455 251.457 22.9995 251.46 22.4886C251.457 22.0885 251.536 21.7192 251.696 21.3807C251.856 21.0391 252.074 20.7544 252.351 20.5266C252.631 20.2958 252.944 20.1496 253.288 20.0881V20.0327C252.836 19.9157 252.476 19.6618 252.208 19.271C251.94 18.877 251.808 18.4292 251.811 17.9276C251.808 17.4474 251.93 17.0181 252.176 16.6396C252.422 16.261 252.761 15.9625 253.191 15.744C253.625 15.5254 254.119 15.4162 254.673 15.4162C255.221 15.4162 255.711 15.5254 256.141 15.744C256.572 15.9625 256.911 16.261 257.157 16.6396C257.406 17.0181 257.533 17.4474 257.536 17.9276C257.533 18.4292 257.396 18.877 257.125 19.271C256.857 19.6618 256.501 19.9157 256.058 20.0327V20.0881C256.4 20.1496 256.708 20.2958 256.982 20.5266C257.256 20.7544 257.474 21.0391 257.637 21.3807C257.8 21.7192 257.883 22.0885 257.886 22.4886C257.883 22.9995 257.745 23.455 257.471 23.8551C257.2 24.2521 256.823 24.5645 256.34 24.7923C255.86 25.0169 255.304 25.1293 254.673 25.1293ZM254.673 24.1136C255.101 24.1136 255.47 24.0444 255.781 23.9059C256.092 23.7674 256.332 23.572 256.501 23.3196C256.671 23.0672 256.757 22.7718 256.76 22.4332C256.757 22.0762 256.665 21.7608 256.483 21.4869C256.301 21.2129 256.054 20.9975 255.74 20.8406C255.429 20.6836 255.073 20.6051 254.673 20.6051C254.27 20.6051 253.91 20.6836 253.593 20.8406C253.279 20.9975 253.031 21.2129 252.85 21.4869C252.671 21.7608 252.584 22.0762 252.587 22.4332C252.584 22.7718 252.665 23.0672 252.831 23.3196C253.001 23.572 253.242 23.7674 253.556 23.9059C253.87 24.0444 254.242 24.1136 254.673 24.1136ZM254.673 19.6264C255.012 19.6264 255.312 19.5587 255.574 19.4233C255.838 19.2879 256.046 19.0986 256.197 18.8555C256.348 18.6123 256.425 18.3277 256.428 18.0014C256.425 17.6813 256.349 17.4028 256.201 17.1658C256.054 16.9258 255.849 16.7411 255.587 16.6119C255.326 16.4795 255.021 16.4134 254.673 16.4134C254.319 16.4134 254.01 16.4795 253.745 16.6119C253.481 16.7411 253.276 16.9258 253.131 17.1658C252.987 17.4028 252.916 17.6813 252.919 18.0014C252.916 18.3277 252.988 18.6123 253.136 18.8555C253.287 19.0986 253.495 19.2879 253.759 19.4233C254.024 19.5587 254.329 19.6264 254.673 19.6264ZM262.444 23.3381V17.2443H263.478V23.3381H262.444ZM259.914 20.8082V19.7741H266.008V20.8082H259.914Z"
              fill="black"
            />
            <path
              d="M276.442 25V15.5455H282.813V17.1935H278.441V19.4464H282.485V21.0945H278.441V23.3519H282.831V25H276.442ZM286.009 17.9091L287.31 20.3881L288.645 17.9091H290.662L288.608 21.4545L290.717 25H288.709L287.31 22.5487L285.935 25H283.903L286.009 21.4545L283.977 17.9091H286.009ZM294.78 25.1385C294.054 25.1385 293.429 24.9846 292.906 24.6768C292.385 24.366 291.985 23.9351 291.705 23.3842C291.428 22.8333 291.29 22.1993 291.29 21.4822C291.29 20.7559 291.43 20.1188 291.71 19.571C291.993 19.0201 292.395 18.5908 292.915 18.283C293.435 17.9722 294.054 17.8168 294.771 17.8168C295.389 17.8168 295.931 17.9291 296.396 18.1538C296.86 18.3784 297.228 18.6939 297.499 19.1001C297.77 19.5064 297.919 19.9834 297.947 20.5312H296.091C296.039 20.1773 295.9 19.8926 295.675 19.6772C295.454 19.4587 295.163 19.3494 294.803 19.3494C294.498 19.3494 294.232 19.4325 294.004 19.5987C293.78 19.7618 293.604 20.0004 293.478 20.3143C293.352 20.6282 293.289 21.0083 293.289 21.4545C293.289 21.907 293.35 22.2917 293.473 22.6087C293.6 22.9257 293.777 23.1673 294.004 23.3335C294.232 23.4996 294.498 23.5827 294.803 23.5827C295.028 23.5827 295.229 23.5366 295.408 23.4442C295.589 23.3519 295.739 23.218 295.856 23.0426C295.976 22.8641 296.054 22.6502 296.091 22.4009H297.947C297.916 22.9426 297.768 23.4196 297.504 23.832C297.242 24.2414 296.88 24.5614 296.419 24.7923C295.957 25.0231 295.411 25.1385 294.78 25.1385ZM302.437 25.1385C301.708 25.1385 301.08 24.9908 300.554 24.6953C300.031 24.3968 299.628 23.9751 299.344 23.4304C299.061 22.8826 298.92 22.2347 298.92 21.4869C298.92 20.7575 299.061 20.1173 299.344 19.5664C299.628 19.0155 300.026 18.5862 300.54 18.2784C301.057 17.9706 301.663 17.8168 302.359 17.8168C302.827 17.8168 303.262 17.8922 303.665 18.043C304.072 18.1907 304.426 18.4138 304.727 18.7124C305.032 19.0109 305.269 19.3864 305.438 19.8388C305.607 20.2881 305.692 20.8144 305.692 21.4176V21.9577H299.705V20.739H303.841C303.841 20.4558 303.779 20.205 303.656 19.9865C303.533 19.768 303.362 19.5972 303.144 19.4741C302.928 19.3479 302.678 19.2848 302.391 19.2848C302.093 19.2848 301.828 19.354 301.597 19.4925C301.37 19.628 301.191 19.8111 301.062 20.0419C300.933 20.2696 300.866 20.5236 300.863 20.8036V21.9624C300.863 22.3132 300.928 22.6164 301.057 22.8718C301.189 23.1272 301.376 23.3242 301.616 23.4627C301.856 23.6012 302.14 23.6705 302.47 23.6705C302.688 23.6705 302.888 23.6397 303.07 23.5781C303.252 23.5166 303.407 23.4242 303.536 23.3011C303.665 23.178 303.764 23.0272 303.832 22.8487L305.651 22.9688C305.558 23.4058 305.369 23.7874 305.083 24.1136C304.8 24.4368 304.433 24.6892 303.984 24.8707C303.538 25.0492 303.022 25.1385 302.437 25.1385ZM308.942 15.5455V25H306.975V15.5455H308.942ZM312.484 15.5455V25H310.517V15.5455H312.484ZM317.291 25.1385C316.562 25.1385 315.934 24.9908 315.407 24.6953C314.884 24.3968 314.481 23.9751 314.198 23.4304C313.915 22.8826 313.773 22.2347 313.773 21.4869C313.773 20.7575 313.915 20.1173 314.198 19.5664C314.481 19.0155 314.88 18.5862 315.394 18.2784C315.911 17.9706 316.517 17.8168 317.213 17.8168C317.68 17.8168 318.116 17.8922 318.519 18.043C318.925 18.1907 319.279 18.4138 319.581 18.7124C319.885 19.0109 320.122 19.3864 320.292 19.8388C320.461 20.2881 320.546 20.8144 320.546 21.4176V21.9577H314.558V20.739H318.694C318.694 20.4558 318.633 20.205 318.51 19.9865C318.387 19.768 318.216 19.5972 317.997 19.4741C317.782 19.3479 317.531 19.2848 317.245 19.2848C316.946 19.2848 316.682 19.354 316.451 19.4925C316.223 19.628 316.045 19.8111 315.915 20.0419C315.786 20.2696 315.72 20.5236 315.717 20.8036V21.9624C315.717 22.3132 315.781 22.6164 315.911 22.8718C316.043 23.1272 316.229 23.3242 316.469 23.4627C316.709 23.6012 316.994 23.6705 317.323 23.6705C317.542 23.6705 317.742 23.6397 317.923 23.5781C318.105 23.5166 318.26 23.4242 318.39 23.3011C318.519 23.178 318.617 23.0272 318.685 22.8487L320.504 22.9688C320.412 23.4058 320.222 23.7874 319.936 24.1136C319.653 24.4368 319.287 24.6892 318.838 24.8707C318.391 25.0492 317.876 25.1385 317.291 25.1385ZM323.796 20.9006V25H321.829V17.9091H323.703V19.1602H323.786C323.943 18.7478 324.206 18.4215 324.576 18.1815C324.945 17.9383 325.393 17.8168 325.919 17.8168C326.412 17.8168 326.841 17.9245 327.207 18.1399C327.573 18.3554 327.858 18.6631 328.061 19.0632C328.264 19.4602 328.366 19.9342 328.366 20.4851V25H326.399V20.8359C326.402 20.402 326.292 20.0634 326.067 19.8203C325.842 19.5741 325.533 19.451 325.139 19.451C324.874 19.451 324.64 19.5079 324.437 19.6218C324.237 19.7357 324.08 19.9019 323.966 20.1204C323.856 20.3358 323.799 20.5959 323.796 20.9006ZM333.688 17.9091V19.3864H329.417V17.9091H333.688ZM330.387 16.2102H332.353V22.821C332.353 23.0026 332.381 23.1442 332.437 23.2457C332.492 23.3442 332.569 23.4135 332.667 23.4535C332.769 23.4935 332.886 23.5135 333.018 23.5135C333.111 23.5135 333.203 23.5058 333.295 23.4904C333.387 23.4719 333.458 23.4581 333.508 23.4489L333.817 24.9123C333.718 24.9431 333.58 24.9785 333.401 25.0185C333.223 25.0616 333.006 25.0877 332.75 25.0969C332.276 25.1154 331.861 25.0523 331.504 24.9077C331.15 24.763 330.875 24.5384 330.678 24.2337C330.481 23.929 330.384 23.5443 330.387 23.0795V16.2102Z"
              fill="black"
            />
          </svg>
        )
      ) : (
        ""
      )}
      {/*Title*/}
      {displayTitle == "true" ? (
        ""
      ) : device == "Desktop" ? (
        <div className="titleCtp">
          Prescription Glasses <span> (1,431 Items) </span>
        </div>
      ) : (
        ""
      )}

      {/*Pop up*/}
      <div className={`popup ${isPopupVisible ? true : ""}  `}>
        <div className="popup-content">
          <div className="closePopup" onClick={handleClosePopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="close"
            >
              <path
                d="M1 13L13 1M13 13L1 1"
                stroke="#0F0F0F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="popupTitle">{mdsaleName}</div>
          {linetext ? (
            <div className="offerContainer">
              {selectDsicountType == "Percentage" && (
                <div className="areaDiscount">
                  <div className="percentage">
                    <span>{discountValue ? discountValue : "0"} </span>
                    <svg
                      className="percentageDiscount"
                      width="43"
                      height="59"
                      viewBox="0 0 43 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42.5 58.7902H0.5L36.5762 1.20312H42.5V58.7902Z"
                        fill="#F7F8F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.4989 0C26.7586 0 27.9749 0.461487 28.9191 1.2977C29.3589 1.74344 29.7029 2.27496 29.9297 2.85937C30.1564 3.44378 30.2612 4.06864 30.2375 4.69529V5.79817C30.2539 6.40992 30.1442 7.01847 29.9153 7.58574C29.6864 8.15302 29.3433 8.66681 28.9073 9.09496C28.4569 9.52886 27.9234 9.86661 27.3391 10.0878C26.7547 10.3089 26.1317 10.4089 25.5078 10.3817C24.2551 10.4241 23.0361 9.9704 22.1142 9.11868C21.6627 8.67702 21.31 8.14406 21.0796 7.5552C20.8493 6.96635 20.7465 6.33507 20.778 5.7033V4.61821C20.756 4.00483 20.8601 3.39347 21.0838 2.8222C21.3076 2.25093 21.6463 1.73199 22.0787 1.2977C23.023 0.461487 24.2393 0 25.4989 0ZM27.0331 7.51179C27.4478 7.01539 27.6591 6.37961 27.6244 5.73295L27.6539 4.60635C27.6801 3.97891 27.4689 3.36472 27.0627 2.8868C26.8689 2.66727 26.6289 2.49378 26.3599 2.37891C26.091 2.26404 25.7999 2.21068 25.5078 2.2227C25.2164 2.20707 24.9252 2.25761 24.656 2.37054C24.3868 2.48347 24.1464 2.65589 23.9529 2.87494C23.5438 3.37448 23.3333 4.008 23.3617 4.65378V5.79817C23.3358 6.42377 23.5471 7.03599 23.9529 7.51179C24.149 7.72754 24.3898 7.8977 24.6584 8.01037C24.927 8.12303 25.2169 8.17548 25.5078 8.16403C25.7942 8.17435 26.0794 8.12125 26.343 8.00852C26.6066 7.89579 26.8423 7.7262 27.0331 7.51179ZM37.3921 12.5742C38.6416 12.5742 39.849 13.0273 40.7916 13.8498C41.2353 14.2952 41.5816 14.8284 41.8086 15.4154C42.0356 16.0024 42.1382 16.6303 42.11 17.2593V18.374C42.1303 18.9798 42.0276 19.5834 41.808 20.1481C41.5885 20.7128 41.2568 21.2268 40.833 21.6589C40.3831 22.0995 39.8474 22.4422 39.2594 22.6657C38.6714 22.8891 38.0438 22.9885 37.4157 22.9575C36.7851 22.9855 36.1552 22.8866 35.5632 22.6667C34.9712 22.4467 34.4292 22.1101 33.9689 21.6767C33.5303 21.2344 33.1877 20.7057 32.9629 20.124C32.738 19.5423 32.6357 18.9202 32.6623 18.2969V17.1763C32.6382 16.5591 32.7442 15.9438 32.9734 15.3706C33.2026 14.7974 33.5499 14.2792 33.9926 13.8498C34.9352 13.0273 36.1426 12.5742 37.3921 12.5742ZM38.9529 20.0876C39.3509 19.5836 39.5507 18.9507 39.5146 18.3088L39.5264 17.1585C39.5577 16.5321 39.3458 15.9179 38.9352 15.4448C38.7353 15.2399 38.4967 15.0771 38.2332 14.9659C37.9697 14.8548 37.6868 14.7975 37.401 14.7975C37.1151 14.7975 36.8322 14.8548 36.5687 14.9659C36.3053 15.0771 36.0666 15.2399 35.8668 15.4448C35.45 15.9401 35.2384 16.5767 35.2755 17.2237V18.3444C35.2476 18.9685 35.4592 19.5796 35.8668 20.0521C36.0609 20.2699 36.3 20.4428 36.5675 20.5585C36.8351 20.6742 37.1245 20.73 37.4157 20.7221C37.7028 20.7368 37.9895 20.6875 38.2553 20.5778C38.5211 20.4681 38.7594 20.3007 38.9529 20.0876ZM3.4561 58.7902H0.5L36.5762 1.20312H39.5382L3.4561 58.7902ZM22.8138 57.1767C23.655 56.203 24.0756 54.8232 24.0756 53.0373L24.0933 50.7606C24.0815 48.9432 23.651 47.5279 22.802 46.5147C22.3721 46.0146 21.8345 45.619 21.2298 45.3578C20.6251 45.0965 19.9691 44.9765 19.3114 45.0068C18.6431 44.9691 17.9752 45.0885 17.361 45.3554C16.7468 45.6223 16.2032 46.0295 15.7737 46.5443C14.8663 47.7793 14.4198 49.2944 14.5119 50.8257V53.0728C14.4322 54.5525 14.8911 56.0109 15.8031 57.1767C16.2608 57.6432 16.8064 58.0137 17.4082 58.2666C18.01 58.5195 18.656 58.6497 19.3085 58.6497C19.9609 58.6497 20.6069 58.5195 21.2087 58.2666C21.8105 58.0137 22.3561 57.6432 22.8138 57.1767ZM20.8798 48.1291C21.2694 48.9655 21.4437 49.8865 21.3869 50.8079V53.1201C21.4416 53.9874 21.2624 54.8536 20.868 55.6274C20.7085 55.8954 20.4794 56.115 20.2053 56.2629C19.9312 56.4108 19.6223 56.4813 19.3114 56.4671C18.9946 56.4861 18.6786 56.4193 18.3964 56.2736C18.1142 56.1279 17.8763 55.9088 17.7076 55.6392C17.3059 54.8446 17.1266 53.9556 17.1888 53.0669V50.7015C17.1426 49.8132 17.3232 48.9278 17.7135 48.1291C17.8857 47.8656 18.1205 47.6492 18.3969 47.4994C18.6733 47.3496 18.9825 47.2712 19.2967 47.2712C19.6108 47.2712 19.92 47.3496 20.1964 47.4994C20.4728 47.6492 20.7076 47.8656 20.8798 48.1291ZM32.8367 53.0622H28.674V58.4908H25.9971V45.1914H33.3379V47.4267H28.674V50.8329H32.8367V53.0622ZM37.548 53.0622H41.7107V50.8329H37.548V47.4267H42.2119V45.1914H34.8711V58.4908H37.548V53.0622Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {selectDsicountType == "Dollars" && (
                <div className="areaDiscount">
                  <div className="percentage">
                    <span> {discountValue ? discountValue : "0"} </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41"
                      height="18"
                      viewBox="0 0 41 18"
                      fill="none"
                      className="dollarDiscount"
                    >
                      <path
                        d="M5.65845 12.5306C5.65845 12.0253 5.55496 11.6266 5.348 11.3344C5.14103 11.0422 4.80015 10.7683 4.32534 10.5126C3.39399 10.0987 2.70309 9.70304 2.25264 9.32564C1.80827 8.94214 1.47651 8.5069 1.25737 8.01992C1.03823 7.52686 0.928662 6.94248 0.928662 6.2668C0.928662 5.25632 1.20868 4.42236 1.7687 3.76494C2.32873 3.10143 3.06833 2.70881 3.9875 2.58706V0.633057H5.36626V2.62358C6.27935 2.80011 6.98851 3.26274 7.49375 4.01147C8.00508 4.76021 8.26074 5.70981 8.26074 6.8603H5.67671C5.67671 6.12983 5.57018 5.58503 5.35713 5.22588C5.15016 4.86673 4.87928 4.68716 4.54448 4.68716C4.22186 4.68716 3.96924 4.82716 3.78662 5.10718C3.604 5.38719 3.5127 5.77677 3.5127 6.27593C3.5127 6.70812 3.60705 7.06727 3.79575 7.35337C3.98446 7.63947 4.3436 7.93774 4.87319 8.24819C5.84715 8.71082 6.54718 9.13389 6.97329 9.51738C7.40549 9.89479 7.72507 10.3239 7.93203 10.8048C8.139 11.2857 8.24248 11.8549 8.24248 12.5123C8.24248 13.541 7.96855 14.378 7.4207 15.0233C6.87894 15.6685 6.12716 16.0551 5.16538 16.1829V18H3.79575V16.1829C2.74266 16.0307 1.93001 15.5833 1.35781 14.8407C0.785612 14.0919 0.499512 13.0967 0.499512 11.8549H3.08355C3.08355 12.5732 3.1992 13.1271 3.43052 13.5167C3.66183 13.9002 4.00881 14.0919 4.47144 14.0919C4.84276 14.0919 5.1319 13.955 5.33887 13.6811C5.55192 13.401 5.65845 13.0175 5.65845 12.5306Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M39.9988 10.6504H35.8361V16.079H33.1592V2.77954H40.5V5.01483H35.8361V8.421H39.9988V10.6504Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M31.1248 10.6504H26.9621V16.079H24.2852V2.77954H31.626V5.01483H26.9621V8.421H31.1248V10.6504Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M22.3636 10.6254C22.3636 12.4113 21.943 13.7911 21.1019 14.7649C20.6442 15.2314 20.0986 15.6018 19.4968 15.8547C18.895 16.1076 18.249 16.2378 17.5965 16.2378C16.944 16.2378 16.2981 16.1076 15.6963 15.8547C15.0945 15.6018 14.5488 15.2314 14.0912 14.7649C13.1792 13.599 12.7203 12.1406 12.7999 10.6609V8.4138C12.7078 6.88254 13.1544 5.36741 14.0617 4.13244C14.4913 3.61759 15.0349 3.21048 15.6491 2.94354C16.2633 2.67661 16.9312 2.55724 17.5995 2.59494C18.2572 2.56466 18.9132 2.68466 19.5179 2.94589C20.1226 3.20712 20.6602 3.60274 21.0901 4.10287C21.9391 5.11605 22.3695 6.53134 22.3813 8.34875L22.3636 10.6254ZM19.675 8.39606C19.7318 7.47465 19.5575 6.55365 19.1679 5.71725C18.9957 5.45372 18.7609 5.2373 18.4845 5.08753C18.2081 4.93776 17.8989 4.85934 17.5847 4.85934C17.2706 4.85934 16.9614 4.93776 16.685 5.08753C16.4086 5.2373 16.1738 5.45372 16.0016 5.71725C15.6113 6.51597 15.4307 7.40135 15.4768 8.28961V10.655C15.4147 11.5437 15.594 12.4327 15.9957 13.2274C16.1644 13.497 16.4023 13.7161 16.6845 13.8617C16.9666 14.0074 17.2827 14.0742 17.5995 14.0553C17.9104 14.0695 18.2193 13.9989 18.4934 13.851C18.7675 13.7032 18.9965 13.4835 19.1561 13.2155C19.5505 12.4417 19.7297 11.5756 19.675 10.7082V8.39606Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {selectDsicountType == "Bogo" && (
                <div className="areaDiscount">
                  <div className="bogo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="58"
                      viewBox="0 0 120 58"
                      fill="none"
                    >
                      <path
                        d="M0 10.3746V0.142745H3.58398C4.82549 0.142745 5.76716 0.381677 6.40899 0.859541C7.05083 1.33272 7.37175 2.02843 7.37175 2.94668C7.37175 3.44797 7.24291 3.8907 6.98524 4.27486C6.72757 4.65434 6.36917 4.93309 5.91005 5.11112C6.43476 5.2423 6.84704 5.507 7.14687 5.90522C7.45139 6.30344 7.60365 6.79067 7.60365 7.36692C7.60365 8.35076 7.28976 9.09566 6.66198 9.60163C6.0342 10.1076 5.13938 10.3653 3.97751 10.3746H0ZM2.10822 5.91927V8.68104H3.91427C4.41087 8.68104 4.79738 8.56392 5.07379 8.32967C5.35488 8.09074 5.49543 7.7628 5.49543 7.34584C5.49543 6.40885 5.01054 5.93333 4.04076 5.91927H2.10822ZM2.10822 4.42946H3.66831C4.73179 4.41072 5.26353 3.98674 5.26353 3.1575C5.26353 2.69369 5.12766 2.36106 4.85594 2.15961C4.5889 1.95347 4.16491 1.8504 3.58398 1.8504H2.10822V4.42946Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M16.9361 0.142745V6.88203C16.9361 8.00173 16.5847 8.88718 15.8819 9.53839C15.1839 10.1896 14.2282 10.5152 13.0148 10.5152C11.8201 10.5152 10.8714 10.199 10.1687 9.5665C9.46592 8.93403 9.10752 8.06497 9.09346 6.95933V0.142745H11.2017V6.89608C11.2017 7.56603 11.361 8.0556 11.6796 8.36481C12.0028 8.66933 12.4479 8.82159 13.0148 8.82159C14.2 8.82159 14.8021 8.19849 14.8208 6.9523V0.142745H16.9361Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M22.1926 4.75272L24.3219 0.142745H26.6268L23.2677 6.66418V10.3746H21.1244V6.66418L17.7653 0.142745H20.0773L22.1926 4.75272Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M39.5502 5.4906C39.5502 6.49786 39.3722 7.38097 39.0162 8.13993C38.6601 8.89889 38.1494 9.48451 37.4842 9.89678C36.8236 10.3091 36.0647 10.5152 35.2073 10.5152C34.3593 10.5152 33.6027 10.3114 32.9375 9.90381C32.2722 9.49622 31.7568 8.91529 31.3914 8.16101C31.026 7.40205 30.8409 6.53066 30.8363 5.54682V5.04085C30.8363 4.03359 31.0166 3.14813 31.3774 2.38449C31.7428 1.61616 32.2558 1.0282 32.9164 0.620609C33.5816 0.208335 34.3406 0.00219727 35.1932 0.00219727C36.0459 0.00219727 36.8025 0.208335 37.4631 0.620609C38.1284 1.0282 38.6414 1.61616 39.0021 2.38449C39.3675 3.14813 39.5502 4.03124 39.5502 5.03382V5.4906ZM37.4139 5.02679C37.4139 3.95394 37.2218 3.13876 36.8377 2.58125C36.4535 2.02375 35.9054 1.74499 35.1932 1.74499C34.4858 1.74499 33.94 2.02141 33.5559 2.57423C33.1717 3.12237 32.9773 3.92817 32.9726 4.99165V5.4906C32.9726 6.53534 33.1647 7.34584 33.5488 7.92208C33.933 8.49833 34.4858 8.78646 35.2073 8.78646C35.9147 8.78646 36.4582 8.51004 36.8377 7.95722C37.2171 7.39971 37.4092 6.58922 37.4139 5.52574V5.02679Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M49.4027 10.3746H47.2944L43.1904 3.64239V10.3746H41.0822V0.142745H43.1904L47.3015 6.88905V0.142745H49.4027V10.3746Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M57.3999 5.94036H53.3521V8.68104H58.1026V10.3746H51.2438V0.142745H58.0885V1.8504H53.3521V4.28892H57.3999V5.94036Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M71.019 9.08161C70.6395 9.53605 70.1031 9.88976 69.4097 10.1427C68.7163 10.391 67.948 10.5152 67.1047 10.5152C66.2192 10.5152 65.4415 10.3231 64.7716 9.93895C64.1063 9.5501 63.591 8.98791 63.2256 8.25237C62.8648 7.51684 62.6798 6.65247 62.6704 5.65926V4.96355C62.6704 3.94223 62.8414 3.05912 63.1834 2.31421C63.5301 1.56462 64.0267 0.993062 64.6732 0.599527C65.3244 0.201308 66.0857 0.00219727 66.9571 0.00219727C68.1705 0.00219727 69.1192 0.292663 69.8032 0.873595C70.4872 1.44984 70.8925 2.29079 71.019 3.39643H68.967C68.8733 2.81082 68.6648 2.38215 68.3415 2.11042C68.023 1.83869 67.5826 1.70283 67.0204 1.70283C66.3036 1.70283 65.7578 1.97221 65.383 2.51098C65.0082 3.04975 64.8185 3.85087 64.8138 4.91435V5.5679C64.8138 6.64075 65.0176 7.45125 65.4251 7.99939C65.8327 8.54752 66.4301 8.82159 67.2171 8.82159C68.0089 8.82159 68.5734 8.65293 68.9108 8.31562V6.55174H66.9923V4.99868H71.019V9.08161Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M78.8897 5.94036H74.8419V8.68104H79.5924V10.3746H72.7337V0.142745H79.5784V1.8504H74.8419V4.28892H78.8897V5.94036Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M88.6718 1.8504H85.5376V10.3746H83.4294V1.8504H80.3373V0.142745H88.6718V1.8504Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M101.448 5.4906C101.448 6.49786 101.27 7.38097 100.914 8.13993C100.558 8.89889 100.047 9.48451 99.3816 9.89678C98.721 10.3091 97.9621 10.5152 97.1047 10.5152C96.2567 10.5152 95.5001 10.3114 94.8349 9.90381C94.1696 9.49622 93.6543 8.91529 93.2888 8.16101C92.9234 7.40205 92.7383 6.53066 92.7337 5.54682V5.04085C92.7337 4.03359 92.914 3.14813 93.2748 2.38449C93.6402 1.61616 94.1532 1.0282 94.8138 0.620609C95.479 0.208335 96.238 0.00219727 97.0907 0.00219727C97.9433 0.00219727 98.6999 0.208335 99.3605 0.620609C100.026 1.0282 100.539 1.61616 100.9 2.38449C101.265 3.14813 101.448 4.03124 101.448 5.03382V5.4906ZM99.3113 5.02679C99.3113 3.95394 99.1192 3.13876 98.7351 2.58125C98.3509 2.02375 97.8028 1.74499 97.0907 1.74499C96.3832 1.74499 95.8374 2.02141 95.4533 2.57423C95.0691 3.12237 94.8747 3.92817 94.87 4.99165V5.4906C94.87 6.53534 95.0621 7.34584 95.4462 7.92208C95.8304 8.49833 96.3832 8.78646 97.1047 8.78646C97.8121 8.78646 98.3556 8.51004 98.7351 7.95722C99.1145 7.39971 99.3066 6.58922 99.3113 5.52574V5.02679Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M111.3 10.3746H109.192L105.088 3.64239V10.3746H102.98V0.142745H105.088L109.199 6.88905V0.142745H111.3V10.3746Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M119.297 5.94036H115.249V8.68104H120V10.3746H113.141V0.142745H119.986V1.8504H115.249V4.28892H119.297V5.94036Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M23.0627 42.3331H7.8982V57.9979H0V19.6653H24.9583V26.0628H7.8982V35.9619H23.0627V42.3331Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M43.7297 43.9654H37.4375V57.9979H29.5393V19.6653H43.7824C48.3107 19.6653 51.8034 20.6745 54.2606 22.6929C56.7179 24.7114 57.9465 27.5635 57.9465 31.2493C57.9465 33.8645 57.376 36.0497 56.2352 37.8048C55.1119 39.5424 53.4006 40.929 51.1014 41.9645L59.3945 57.6293V57.9979H50.9171L43.7297 43.9654ZM37.4375 37.5679H43.8087C45.792 37.5679 47.3278 37.0677 48.416 36.0672C49.5042 35.0492 50.0483 33.6539 50.0483 31.8812C50.0483 30.0734 49.5305 28.6517 48.4949 27.6161C47.477 26.5806 45.9061 26.0628 43.7824 26.0628H37.4375V37.5679Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M87.0382 41.3853H71.8736V51.653H89.6709V57.9979H63.9754V19.6653H89.6183V26.0628H71.8736V35.1984H87.0382V41.3853Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M117.367 41.3853H102.203V51.653H120V57.9979H94.3045V19.6653H119.947V26.0628H102.203V35.1984H117.367V41.3853Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div className="mdWidthTxt">
                <div className="mdHeadline">{mdHeadline}</div>
                <div className="mdContent">{mdContent}</div>
              </div>
              <div className="mdSpread"></div>
              <div className="areaCode">
                <div className="lightWeight">Coupon code</div>
                <div className="mdcode">{code}</div>
                <div
                  className="btnCopy"
                  onClick={() => handleCopyCode(code, 0)}
                >
                  {copied === "0" ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                        strokeWidth="1.5"
                        viewBox="0 0 13 11"
                        style={{
                          width: "1em",
                          height: "1em",
                          verticalAlign: "middle",
                        }}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.33 1.714-6.428 7.66-3.83-3.214"
                        ></path>
                      </svg>
                      <span> Code copied </span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="10"
                          height="10"
                          rx="1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 1H2C1.44772 1 1 1.44772 1 2V9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span> Copy Code </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {select == "2" ? (
            <div className="offerContainer">
              {selectDsicountTypeTwo == "Percentage" && (
                <div className="areaDiscount">
                  <div className="percentage">
                    <span>{discountValueTwo ? discountValueTwo : "0"} </span>
                    <svg
                      className="percentageDiscount"
                      width="43"
                      height="59"
                      viewBox="0 0 43 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M42.5 58.7902H0.5L36.5762 1.20312H42.5V58.7902Z"
                        fill="#F7F8F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.4989 0C26.7586 0 27.9749 0.461487 28.9191 1.2977C29.3589 1.74344 29.7029 2.27496 29.9297 2.85937C30.1564 3.44378 30.2612 4.06864 30.2375 4.69529V5.79817C30.2539 6.40992 30.1442 7.01847 29.9153 7.58574C29.6864 8.15302 29.3433 8.66681 28.9073 9.09496C28.4569 9.52886 27.9234 9.86661 27.3391 10.0878C26.7547 10.3089 26.1317 10.4089 25.5078 10.3817C24.2551 10.4241 23.0361 9.9704 22.1142 9.11868C21.6627 8.67702 21.31 8.14406 21.0796 7.5552C20.8493 6.96635 20.7465 6.33507 20.778 5.7033V4.61821C20.756 4.00483 20.8601 3.39347 21.0838 2.8222C21.3076 2.25093 21.6463 1.73199 22.0787 1.2977C23.023 0.461487 24.2393 0 25.4989 0ZM27.0331 7.51179C27.4478 7.01539 27.6591 6.37961 27.6244 5.73295L27.6539 4.60635C27.6801 3.97891 27.4689 3.36472 27.0627 2.8868C26.8689 2.66727 26.6289 2.49378 26.3599 2.37891C26.091 2.26404 25.7999 2.21068 25.5078 2.2227C25.2164 2.20707 24.9252 2.25761 24.656 2.37054C24.3868 2.48347 24.1464 2.65589 23.9529 2.87494C23.5438 3.37448 23.3333 4.008 23.3617 4.65378V5.79817C23.3358 6.42377 23.5471 7.03599 23.9529 7.51179C24.149 7.72754 24.3898 7.8977 24.6584 8.01037C24.927 8.12303 25.2169 8.17548 25.5078 8.16403C25.7942 8.17435 26.0794 8.12125 26.343 8.00852C26.6066 7.89579 26.8423 7.7262 27.0331 7.51179ZM37.3921 12.5742C38.6416 12.5742 39.849 13.0273 40.7916 13.8498C41.2353 14.2952 41.5816 14.8284 41.8086 15.4154C42.0356 16.0024 42.1382 16.6303 42.11 17.2593V18.374C42.1303 18.9798 42.0276 19.5834 41.808 20.1481C41.5885 20.7128 41.2568 21.2268 40.833 21.6589C40.3831 22.0995 39.8474 22.4422 39.2594 22.6657C38.6714 22.8891 38.0438 22.9885 37.4157 22.9575C36.7851 22.9855 36.1552 22.8866 35.5632 22.6667C34.9712 22.4467 34.4292 22.1101 33.9689 21.6767C33.5303 21.2344 33.1877 20.7057 32.9629 20.124C32.738 19.5423 32.6357 18.9202 32.6623 18.2969V17.1763C32.6382 16.5591 32.7442 15.9438 32.9734 15.3706C33.2026 14.7974 33.5499 14.2792 33.9926 13.8498C34.9352 13.0273 36.1426 12.5742 37.3921 12.5742ZM38.9529 20.0876C39.3509 19.5836 39.5507 18.9507 39.5146 18.3088L39.5264 17.1585C39.5577 16.5321 39.3458 15.9179 38.9352 15.4448C38.7353 15.2399 38.4967 15.0771 38.2332 14.9659C37.9697 14.8548 37.6868 14.7975 37.401 14.7975C37.1151 14.7975 36.8322 14.8548 36.5687 14.9659C36.3053 15.0771 36.0666 15.2399 35.8668 15.4448C35.45 15.9401 35.2384 16.5767 35.2755 17.2237V18.3444C35.2476 18.9685 35.4592 19.5796 35.8668 20.0521C36.0609 20.2699 36.3 20.4428 36.5675 20.5585C36.8351 20.6742 37.1245 20.73 37.4157 20.7221C37.7028 20.7368 37.9895 20.6875 38.2553 20.5778C38.5211 20.4681 38.7594 20.3007 38.9529 20.0876ZM3.4561 58.7902H0.5L36.5762 1.20312H39.5382L3.4561 58.7902ZM22.8138 57.1767C23.655 56.203 24.0756 54.8232 24.0756 53.0373L24.0933 50.7606C24.0815 48.9432 23.651 47.5279 22.802 46.5147C22.3721 46.0146 21.8345 45.619 21.2298 45.3578C20.6251 45.0965 19.9691 44.9765 19.3114 45.0068C18.6431 44.9691 17.9752 45.0885 17.361 45.3554C16.7468 45.6223 16.2032 46.0295 15.7737 46.5443C14.8663 47.7793 14.4198 49.2944 14.5119 50.8257V53.0728C14.4322 54.5525 14.8911 56.0109 15.8031 57.1767C16.2608 57.6432 16.8064 58.0137 17.4082 58.2666C18.01 58.5195 18.656 58.6497 19.3085 58.6497C19.9609 58.6497 20.6069 58.5195 21.2087 58.2666C21.8105 58.0137 22.3561 57.6432 22.8138 57.1767ZM20.8798 48.1291C21.2694 48.9655 21.4437 49.8865 21.3869 50.8079V53.1201C21.4416 53.9874 21.2624 54.8536 20.868 55.6274C20.7085 55.8954 20.4794 56.115 20.2053 56.2629C19.9312 56.4108 19.6223 56.4813 19.3114 56.4671C18.9946 56.4861 18.6786 56.4193 18.3964 56.2736C18.1142 56.1279 17.8763 55.9088 17.7076 55.6392C17.3059 54.8446 17.1266 53.9556 17.1888 53.0669V50.7015C17.1426 49.8132 17.3232 48.9278 17.7135 48.1291C17.8857 47.8656 18.1205 47.6492 18.3969 47.4994C18.6733 47.3496 18.9825 47.2712 19.2967 47.2712C19.6108 47.2712 19.92 47.3496 20.1964 47.4994C20.4728 47.6492 20.7076 47.8656 20.8798 48.1291ZM32.8367 53.0622H28.674V58.4908H25.9971V45.1914H33.3379V47.4267H28.674V50.8329H32.8367V53.0622ZM37.548 53.0622H41.7107V50.8329H37.548V47.4267H42.2119V45.1914H34.8711V58.4908H37.548V53.0622Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {selectDsicountTypeTwo == "Dollars" && (
                <div className="areaDiscount">
                  <div className="percentage">
                    <span> {discountValueTwo ? discountValueTwo : "0"} </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41"
                      height="18"
                      viewBox="0 0 41 18"
                      fill="none"
                      className="dollarDiscount"
                    >
                      <path
                        d="M5.65845 12.5306C5.65845 12.0253 5.55496 11.6266 5.348 11.3344C5.14103 11.0422 4.80015 10.7683 4.32534 10.5126C3.39399 10.0987 2.70309 9.70304 2.25264 9.32564C1.80827 8.94214 1.47651 8.5069 1.25737 8.01992C1.03823 7.52686 0.928662 6.94248 0.928662 6.2668C0.928662 5.25632 1.20868 4.42236 1.7687 3.76494C2.32873 3.10143 3.06833 2.70881 3.9875 2.58706V0.633057H5.36626V2.62358C6.27935 2.80011 6.98851 3.26274 7.49375 4.01147C8.00508 4.76021 8.26074 5.70981 8.26074 6.8603H5.67671C5.67671 6.12983 5.57018 5.58503 5.35713 5.22588C5.15016 4.86673 4.87928 4.68716 4.54448 4.68716C4.22186 4.68716 3.96924 4.82716 3.78662 5.10718C3.604 5.38719 3.5127 5.77677 3.5127 6.27593C3.5127 6.70812 3.60705 7.06727 3.79575 7.35337C3.98446 7.63947 4.3436 7.93774 4.87319 8.24819C5.84715 8.71082 6.54718 9.13389 6.97329 9.51738C7.40549 9.89479 7.72507 10.3239 7.93203 10.8048C8.139 11.2857 8.24248 11.8549 8.24248 12.5123C8.24248 13.541 7.96855 14.378 7.4207 15.0233C6.87894 15.6685 6.12716 16.0551 5.16538 16.1829V18H3.79575V16.1829C2.74266 16.0307 1.93001 15.5833 1.35781 14.8407C0.785612 14.0919 0.499512 13.0967 0.499512 11.8549H3.08355C3.08355 12.5732 3.1992 13.1271 3.43052 13.5167C3.66183 13.9002 4.00881 14.0919 4.47144 14.0919C4.84276 14.0919 5.1319 13.955 5.33887 13.6811C5.55192 13.401 5.65845 13.0175 5.65845 12.5306Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M39.9988 10.6504H35.8361V16.079H33.1592V2.77954H40.5V5.01483H35.8361V8.421H39.9988V10.6504Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M31.1248 10.6504H26.9621V16.079H24.2852V2.77954H31.626V5.01483H26.9621V8.421H31.1248V10.6504Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M22.3636 10.6254C22.3636 12.4113 21.943 13.7911 21.1019 14.7649C20.6442 15.2314 20.0986 15.6018 19.4968 15.8547C18.895 16.1076 18.249 16.2378 17.5965 16.2378C16.944 16.2378 16.2981 16.1076 15.6963 15.8547C15.0945 15.6018 14.5488 15.2314 14.0912 14.7649C13.1792 13.599 12.7203 12.1406 12.7999 10.6609V8.4138C12.7078 6.88254 13.1544 5.36741 14.0617 4.13244C14.4913 3.61759 15.0349 3.21048 15.6491 2.94354C16.2633 2.67661 16.9312 2.55724 17.5995 2.59494C18.2572 2.56466 18.9132 2.68466 19.5179 2.94589C20.1226 3.20712 20.6602 3.60274 21.0901 4.10287C21.9391 5.11605 22.3695 6.53134 22.3813 8.34875L22.3636 10.6254ZM19.675 8.39606C19.7318 7.47465 19.5575 6.55365 19.1679 5.71725C18.9957 5.45372 18.7609 5.2373 18.4845 5.08753C18.2081 4.93776 17.8989 4.85934 17.5847 4.85934C17.2706 4.85934 16.9614 4.93776 16.685 5.08753C16.4086 5.2373 16.1738 5.45372 16.0016 5.71725C15.6113 6.51597 15.4307 7.40135 15.4768 8.28961V10.655C15.4147 11.5437 15.594 12.4327 15.9957 13.2274C16.1644 13.497 16.4023 13.7161 16.6845 13.8617C16.9666 14.0074 17.2827 14.0742 17.5995 14.0553C17.9104 14.0695 18.2193 13.9989 18.4934 13.851C18.7675 13.7032 18.9965 13.4835 19.1561 13.2155C19.5505 12.4417 19.7297 11.5756 19.675 10.7082V8.39606Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {selectDsicountTypeTwo == "Bogo" && (
                <div className="areaDiscount">
                  <div className="bogo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="58"
                      viewBox="0 0 120 58"
                      fill="none"
                    >
                      <path
                        d="M0 10.3746V0.142745H3.58398C4.82549 0.142745 5.76716 0.381677 6.40899 0.859541C7.05083 1.33272 7.37175 2.02843 7.37175 2.94668C7.37175 3.44797 7.24291 3.8907 6.98524 4.27486C6.72757 4.65434 6.36917 4.93309 5.91005 5.11112C6.43476 5.2423 6.84704 5.507 7.14687 5.90522C7.45139 6.30344 7.60365 6.79067 7.60365 7.36692C7.60365 8.35076 7.28976 9.09566 6.66198 9.60163C6.0342 10.1076 5.13938 10.3653 3.97751 10.3746H0ZM2.10822 5.91927V8.68104H3.91427C4.41087 8.68104 4.79738 8.56392 5.07379 8.32967C5.35488 8.09074 5.49543 7.7628 5.49543 7.34584C5.49543 6.40885 5.01054 5.93333 4.04076 5.91927H2.10822ZM2.10822 4.42946H3.66831C4.73179 4.41072 5.26353 3.98674 5.26353 3.1575C5.26353 2.69369 5.12766 2.36106 4.85594 2.15961C4.5889 1.95347 4.16491 1.8504 3.58398 1.8504H2.10822V4.42946Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M16.9361 0.142745V6.88203C16.9361 8.00173 16.5847 8.88718 15.8819 9.53839C15.1839 10.1896 14.2282 10.5152 13.0148 10.5152C11.8201 10.5152 10.8714 10.199 10.1687 9.5665C9.46592 8.93403 9.10752 8.06497 9.09346 6.95933V0.142745H11.2017V6.89608C11.2017 7.56603 11.361 8.0556 11.6796 8.36481C12.0028 8.66933 12.4479 8.82159 13.0148 8.82159C14.2 8.82159 14.8021 8.19849 14.8208 6.9523V0.142745H16.9361Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M22.1926 4.75272L24.3219 0.142745H26.6268L23.2677 6.66418V10.3746H21.1244V6.66418L17.7653 0.142745H20.0773L22.1926 4.75272Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M39.5502 5.4906C39.5502 6.49786 39.3722 7.38097 39.0162 8.13993C38.6601 8.89889 38.1494 9.48451 37.4842 9.89678C36.8236 10.3091 36.0647 10.5152 35.2073 10.5152C34.3593 10.5152 33.6027 10.3114 32.9375 9.90381C32.2722 9.49622 31.7568 8.91529 31.3914 8.16101C31.026 7.40205 30.8409 6.53066 30.8363 5.54682V5.04085C30.8363 4.03359 31.0166 3.14813 31.3774 2.38449C31.7428 1.61616 32.2558 1.0282 32.9164 0.620609C33.5816 0.208335 34.3406 0.00219727 35.1932 0.00219727C36.0459 0.00219727 36.8025 0.208335 37.4631 0.620609C38.1284 1.0282 38.6414 1.61616 39.0021 2.38449C39.3675 3.14813 39.5502 4.03124 39.5502 5.03382V5.4906ZM37.4139 5.02679C37.4139 3.95394 37.2218 3.13876 36.8377 2.58125C36.4535 2.02375 35.9054 1.74499 35.1932 1.74499C34.4858 1.74499 33.94 2.02141 33.5559 2.57423C33.1717 3.12237 32.9773 3.92817 32.9726 4.99165V5.4906C32.9726 6.53534 33.1647 7.34584 33.5488 7.92208C33.933 8.49833 34.4858 8.78646 35.2073 8.78646C35.9147 8.78646 36.4582 8.51004 36.8377 7.95722C37.2171 7.39971 37.4092 6.58922 37.4139 5.52574V5.02679Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M49.4027 10.3746H47.2944L43.1904 3.64239V10.3746H41.0822V0.142745H43.1904L47.3015 6.88905V0.142745H49.4027V10.3746Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M57.3999 5.94036H53.3521V8.68104H58.1026V10.3746H51.2438V0.142745H58.0885V1.8504H53.3521V4.28892H57.3999V5.94036Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M71.019 9.08161C70.6395 9.53605 70.1031 9.88976 69.4097 10.1427C68.7163 10.391 67.948 10.5152 67.1047 10.5152C66.2192 10.5152 65.4415 10.3231 64.7716 9.93895C64.1063 9.5501 63.591 8.98791 63.2256 8.25237C62.8648 7.51684 62.6798 6.65247 62.6704 5.65926V4.96355C62.6704 3.94223 62.8414 3.05912 63.1834 2.31421C63.5301 1.56462 64.0267 0.993062 64.6732 0.599527C65.3244 0.201308 66.0857 0.00219727 66.9571 0.00219727C68.1705 0.00219727 69.1192 0.292663 69.8032 0.873595C70.4872 1.44984 70.8925 2.29079 71.019 3.39643H68.967C68.8733 2.81082 68.6648 2.38215 68.3415 2.11042C68.023 1.83869 67.5826 1.70283 67.0204 1.70283C66.3036 1.70283 65.7578 1.97221 65.383 2.51098C65.0082 3.04975 64.8185 3.85087 64.8138 4.91435V5.5679C64.8138 6.64075 65.0176 7.45125 65.4251 7.99939C65.8327 8.54752 66.4301 8.82159 67.2171 8.82159C68.0089 8.82159 68.5734 8.65293 68.9108 8.31562V6.55174H66.9923V4.99868H71.019V9.08161Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M78.8897 5.94036H74.8419V8.68104H79.5924V10.3746H72.7337V0.142745H79.5784V1.8504H74.8419V4.28892H78.8897V5.94036Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M88.6718 1.8504H85.5376V10.3746H83.4294V1.8504H80.3373V0.142745H88.6718V1.8504Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M101.448 5.4906C101.448 6.49786 101.27 7.38097 100.914 8.13993C100.558 8.89889 100.047 9.48451 99.3816 9.89678C98.721 10.3091 97.9621 10.5152 97.1047 10.5152C96.2567 10.5152 95.5001 10.3114 94.8349 9.90381C94.1696 9.49622 93.6543 8.91529 93.2888 8.16101C92.9234 7.40205 92.7383 6.53066 92.7337 5.54682V5.04085C92.7337 4.03359 92.914 3.14813 93.2748 2.38449C93.6402 1.61616 94.1532 1.0282 94.8138 0.620609C95.479 0.208335 96.238 0.00219727 97.0907 0.00219727C97.9433 0.00219727 98.6999 0.208335 99.3605 0.620609C100.026 1.0282 100.539 1.61616 100.9 2.38449C101.265 3.14813 101.448 4.03124 101.448 5.03382V5.4906ZM99.3113 5.02679C99.3113 3.95394 99.1192 3.13876 98.7351 2.58125C98.3509 2.02375 97.8028 1.74499 97.0907 1.74499C96.3832 1.74499 95.8374 2.02141 95.4533 2.57423C95.0691 3.12237 94.8747 3.92817 94.87 4.99165V5.4906C94.87 6.53534 95.0621 7.34584 95.4462 7.92208C95.8304 8.49833 96.3832 8.78646 97.1047 8.78646C97.8121 8.78646 98.3556 8.51004 98.7351 7.95722C99.1145 7.39971 99.3066 6.58922 99.3113 5.52574V5.02679Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M111.3 10.3746H109.192L105.088 3.64239V10.3746H102.98V0.142745H105.088L109.199 6.88905V0.142745H111.3V10.3746Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M119.297 5.94036H115.249V8.68104H120V10.3746H113.141V0.142745H119.986V1.8504H115.249V4.28892H119.297V5.94036Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M23.0627 42.3331H7.8982V57.9979H0V19.6653H24.9583V26.0628H7.8982V35.9619H23.0627V42.3331Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M43.7297 43.9654H37.4375V57.9979H29.5393V19.6653H43.7824C48.3107 19.6653 51.8034 20.6745 54.2606 22.6929C56.7179 24.7114 57.9465 27.5635 57.9465 31.2493C57.9465 33.8645 57.376 36.0497 56.2352 37.8048C55.1119 39.5424 53.4006 40.929 51.1014 41.9645L59.3945 57.6293V57.9979H50.9171L43.7297 43.9654ZM37.4375 37.5679H43.8087C45.792 37.5679 47.3278 37.0677 48.416 36.0672C49.5042 35.0492 50.0483 33.6539 50.0483 31.8812C50.0483 30.0734 49.5305 28.6517 48.4949 27.6161C47.477 26.5806 45.9061 26.0628 43.7824 26.0628H37.4375V37.5679Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M87.0382 41.3853H71.8736V51.653H89.6709V57.9979H63.9754V19.6653H89.6183V26.0628H71.8736V35.1984H87.0382V41.3853Z"
                        fill="#0F0F0F"
                      />
                      <path
                        d="M117.367 41.3853H102.203V51.653H120V57.9979H94.3045V19.6653H119.947V26.0628H102.203V35.1984H117.367V41.3853Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div className="mdWidthTxt">
                <div className="mdHeadline">{mdHeadlineTwo}</div>
                <div className="mdContent">{mdContentTwo}</div>
              </div>
              <div className="mdSpread"></div>
              <div className="areaCode">
                <div className="lightWeight">Coupon code</div>
                <div className="mdcode">{codeTwo}</div>
                <div
                  className="btnCopy"
                  onClick={() => handleCopyCode(codeTwo, 1)}
                >
                  {copied === "1" ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="transparent"
                        strokeWidth="1.5"
                        viewBox="0 0 13 11"
                        style={{
                          width: "1em",
                          height: "1em",
                          verticalAlign: "middle",
                        }}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.33 1.714-6.428 7.66-3.83-3.214"
                        ></path>
                      </svg>
                      <span> Code copied </span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="10"
                          height="10"
                          rx="1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 1H2C1.44772 1 1 1.44772 1 2V9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span> Copy Code </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {select == "3" ? (
            <>
              <div className="offerContainer">
                {selectDsicountTypeTwo == "Percentage" && (
                  <div className="areaDiscount">
                    <div className="percentage">
                      <span>{discountValueTwo ? discountValueTwo : "0"} </span>
                      <svg
                        className="percentageDiscount"
                        width="43"
                        height="59"
                        viewBox="0 0 43 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42.5 58.7902H0.5L36.5762 1.20312H42.5V58.7902Z"
                          fill="#F7F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.4989 0C26.7586 0 27.9749 0.461487 28.9191 1.2977C29.3589 1.74344 29.7029 2.27496 29.9297 2.85937C30.1564 3.44378 30.2612 4.06864 30.2375 4.69529V5.79817C30.2539 6.40992 30.1442 7.01847 29.9153 7.58574C29.6864 8.15302 29.3433 8.66681 28.9073 9.09496C28.4569 9.52886 27.9234 9.86661 27.3391 10.0878C26.7547 10.3089 26.1317 10.4089 25.5078 10.3817C24.2551 10.4241 23.0361 9.9704 22.1142 9.11868C21.6627 8.67702 21.31 8.14406 21.0796 7.5552C20.8493 6.96635 20.7465 6.33507 20.778 5.7033V4.61821C20.756 4.00483 20.8601 3.39347 21.0838 2.8222C21.3076 2.25093 21.6463 1.73199 22.0787 1.2977C23.023 0.461487 24.2393 0 25.4989 0ZM27.0331 7.51179C27.4478 7.01539 27.6591 6.37961 27.6244 5.73295L27.6539 4.60635C27.6801 3.97891 27.4689 3.36472 27.0627 2.8868C26.8689 2.66727 26.6289 2.49378 26.3599 2.37891C26.091 2.26404 25.7999 2.21068 25.5078 2.2227C25.2164 2.20707 24.9252 2.25761 24.656 2.37054C24.3868 2.48347 24.1464 2.65589 23.9529 2.87494C23.5438 3.37448 23.3333 4.008 23.3617 4.65378V5.79817C23.3358 6.42377 23.5471 7.03599 23.9529 7.51179C24.149 7.72754 24.3898 7.8977 24.6584 8.01037C24.927 8.12303 25.2169 8.17548 25.5078 8.16403C25.7942 8.17435 26.0794 8.12125 26.343 8.00852C26.6066 7.89579 26.8423 7.7262 27.0331 7.51179ZM37.3921 12.5742C38.6416 12.5742 39.849 13.0273 40.7916 13.8498C41.2353 14.2952 41.5816 14.8284 41.8086 15.4154C42.0356 16.0024 42.1382 16.6303 42.11 17.2593V18.374C42.1303 18.9798 42.0276 19.5834 41.808 20.1481C41.5885 20.7128 41.2568 21.2268 40.833 21.6589C40.3831 22.0995 39.8474 22.4422 39.2594 22.6657C38.6714 22.8891 38.0438 22.9885 37.4157 22.9575C36.7851 22.9855 36.1552 22.8866 35.5632 22.6667C34.9712 22.4467 34.4292 22.1101 33.9689 21.6767C33.5303 21.2344 33.1877 20.7057 32.9629 20.124C32.738 19.5423 32.6357 18.9202 32.6623 18.2969V17.1763C32.6382 16.5591 32.7442 15.9438 32.9734 15.3706C33.2026 14.7974 33.5499 14.2792 33.9926 13.8498C34.9352 13.0273 36.1426 12.5742 37.3921 12.5742ZM38.9529 20.0876C39.3509 19.5836 39.5507 18.9507 39.5146 18.3088L39.5264 17.1585C39.5577 16.5321 39.3458 15.9179 38.9352 15.4448C38.7353 15.2399 38.4967 15.0771 38.2332 14.9659C37.9697 14.8548 37.6868 14.7975 37.401 14.7975C37.1151 14.7975 36.8322 14.8548 36.5687 14.9659C36.3053 15.0771 36.0666 15.2399 35.8668 15.4448C35.45 15.9401 35.2384 16.5767 35.2755 17.2237V18.3444C35.2476 18.9685 35.4592 19.5796 35.8668 20.0521C36.0609 20.2699 36.3 20.4428 36.5675 20.5585C36.8351 20.6742 37.1245 20.73 37.4157 20.7221C37.7028 20.7368 37.9895 20.6875 38.2553 20.5778C38.5211 20.4681 38.7594 20.3007 38.9529 20.0876ZM3.4561 58.7902H0.5L36.5762 1.20312H39.5382L3.4561 58.7902ZM22.8138 57.1767C23.655 56.203 24.0756 54.8232 24.0756 53.0373L24.0933 50.7606C24.0815 48.9432 23.651 47.5279 22.802 46.5147C22.3721 46.0146 21.8345 45.619 21.2298 45.3578C20.6251 45.0965 19.9691 44.9765 19.3114 45.0068C18.6431 44.9691 17.9752 45.0885 17.361 45.3554C16.7468 45.6223 16.2032 46.0295 15.7737 46.5443C14.8663 47.7793 14.4198 49.2944 14.5119 50.8257V53.0728C14.4322 54.5525 14.8911 56.0109 15.8031 57.1767C16.2608 57.6432 16.8064 58.0137 17.4082 58.2666C18.01 58.5195 18.656 58.6497 19.3085 58.6497C19.9609 58.6497 20.6069 58.5195 21.2087 58.2666C21.8105 58.0137 22.3561 57.6432 22.8138 57.1767ZM20.8798 48.1291C21.2694 48.9655 21.4437 49.8865 21.3869 50.8079V53.1201C21.4416 53.9874 21.2624 54.8536 20.868 55.6274C20.7085 55.8954 20.4794 56.115 20.2053 56.2629C19.9312 56.4108 19.6223 56.4813 19.3114 56.4671C18.9946 56.4861 18.6786 56.4193 18.3964 56.2736C18.1142 56.1279 17.8763 55.9088 17.7076 55.6392C17.3059 54.8446 17.1266 53.9556 17.1888 53.0669V50.7015C17.1426 49.8132 17.3232 48.9278 17.7135 48.1291C17.8857 47.8656 18.1205 47.6492 18.3969 47.4994C18.6733 47.3496 18.9825 47.2712 19.2967 47.2712C19.6108 47.2712 19.92 47.3496 20.1964 47.4994C20.4728 47.6492 20.7076 47.8656 20.8798 48.1291ZM32.8367 53.0622H28.674V58.4908H25.9971V45.1914H33.3379V47.4267H28.674V50.8329H32.8367V53.0622ZM37.548 53.0622H41.7107V50.8329H37.548V47.4267H42.2119V45.1914H34.8711V58.4908H37.548V53.0622Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {selectDsicountTypeTwo == "Dollars" && (
                  <div className="areaDiscount">
                    <div className="percentage">
                      <span> {discountValueTwo ? discountValueTwo : "0"} </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="18"
                        viewBox="0 0 41 18"
                        fill="none"
                        className="dollarDiscount"
                      >
                        <path
                          d="M5.65845 12.5306C5.65845 12.0253 5.55496 11.6266 5.348 11.3344C5.14103 11.0422 4.80015 10.7683 4.32534 10.5126C3.39399 10.0987 2.70309 9.70304 2.25264 9.32564C1.80827 8.94214 1.47651 8.5069 1.25737 8.01992C1.03823 7.52686 0.928662 6.94248 0.928662 6.2668C0.928662 5.25632 1.20868 4.42236 1.7687 3.76494C2.32873 3.10143 3.06833 2.70881 3.9875 2.58706V0.633057H5.36626V2.62358C6.27935 2.80011 6.98851 3.26274 7.49375 4.01147C8.00508 4.76021 8.26074 5.70981 8.26074 6.8603H5.67671C5.67671 6.12983 5.57018 5.58503 5.35713 5.22588C5.15016 4.86673 4.87928 4.68716 4.54448 4.68716C4.22186 4.68716 3.96924 4.82716 3.78662 5.10718C3.604 5.38719 3.5127 5.77677 3.5127 6.27593C3.5127 6.70812 3.60705 7.06727 3.79575 7.35337C3.98446 7.63947 4.3436 7.93774 4.87319 8.24819C5.84715 8.71082 6.54718 9.13389 6.97329 9.51738C7.40549 9.89479 7.72507 10.3239 7.93203 10.8048C8.139 11.2857 8.24248 11.8549 8.24248 12.5123C8.24248 13.541 7.96855 14.378 7.4207 15.0233C6.87894 15.6685 6.12716 16.0551 5.16538 16.1829V18H3.79575V16.1829C2.74266 16.0307 1.93001 15.5833 1.35781 14.8407C0.785612 14.0919 0.499512 13.0967 0.499512 11.8549H3.08355C3.08355 12.5732 3.1992 13.1271 3.43052 13.5167C3.66183 13.9002 4.00881 14.0919 4.47144 14.0919C4.84276 14.0919 5.1319 13.955 5.33887 13.6811C5.55192 13.401 5.65845 13.0175 5.65845 12.5306Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M39.9988 10.6504H35.8361V16.079H33.1592V2.77954H40.5V5.01483H35.8361V8.421H39.9988V10.6504Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M31.1248 10.6504H26.9621V16.079H24.2852V2.77954H31.626V5.01483H26.9621V8.421H31.1248V10.6504Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M22.3636 10.6254C22.3636 12.4113 21.943 13.7911 21.1019 14.7649C20.6442 15.2314 20.0986 15.6018 19.4968 15.8547C18.895 16.1076 18.249 16.2378 17.5965 16.2378C16.944 16.2378 16.2981 16.1076 15.6963 15.8547C15.0945 15.6018 14.5488 15.2314 14.0912 14.7649C13.1792 13.599 12.7203 12.1406 12.7999 10.6609V8.4138C12.7078 6.88254 13.1544 5.36741 14.0617 4.13244C14.4913 3.61759 15.0349 3.21048 15.6491 2.94354C16.2633 2.67661 16.9312 2.55724 17.5995 2.59494C18.2572 2.56466 18.9132 2.68466 19.5179 2.94589C20.1226 3.20712 20.6602 3.60274 21.0901 4.10287C21.9391 5.11605 22.3695 6.53134 22.3813 8.34875L22.3636 10.6254ZM19.675 8.39606C19.7318 7.47465 19.5575 6.55365 19.1679 5.71725C18.9957 5.45372 18.7609 5.2373 18.4845 5.08753C18.2081 4.93776 17.8989 4.85934 17.5847 4.85934C17.2706 4.85934 16.9614 4.93776 16.685 5.08753C16.4086 5.2373 16.1738 5.45372 16.0016 5.71725C15.6113 6.51597 15.4307 7.40135 15.4768 8.28961V10.655C15.4147 11.5437 15.594 12.4327 15.9957 13.2274C16.1644 13.497 16.4023 13.7161 16.6845 13.8617C16.9666 14.0074 17.2827 14.0742 17.5995 14.0553C17.9104 14.0695 18.2193 13.9989 18.4934 13.851C18.7675 13.7032 18.9965 13.4835 19.1561 13.2155C19.5505 12.4417 19.7297 11.5756 19.675 10.7082V8.39606Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {selectDsicountTypeTwo == "Bogo" && (
                  <div className="areaDiscount">
                    <div className="bogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="58"
                        viewBox="0 0 120 58"
                        fill="none"
                      >
                        <path
                          d="M0 10.3746V0.142745H3.58398C4.82549 0.142745 5.76716 0.381677 6.40899 0.859541C7.05083 1.33272 7.37175 2.02843 7.37175 2.94668C7.37175 3.44797 7.24291 3.8907 6.98524 4.27486C6.72757 4.65434 6.36917 4.93309 5.91005 5.11112C6.43476 5.2423 6.84704 5.507 7.14687 5.90522C7.45139 6.30344 7.60365 6.79067 7.60365 7.36692C7.60365 8.35076 7.28976 9.09566 6.66198 9.60163C6.0342 10.1076 5.13938 10.3653 3.97751 10.3746H0ZM2.10822 5.91927V8.68104H3.91427C4.41087 8.68104 4.79738 8.56392 5.07379 8.32967C5.35488 8.09074 5.49543 7.7628 5.49543 7.34584C5.49543 6.40885 5.01054 5.93333 4.04076 5.91927H2.10822ZM2.10822 4.42946H3.66831C4.73179 4.41072 5.26353 3.98674 5.26353 3.1575C5.26353 2.69369 5.12766 2.36106 4.85594 2.15961C4.5889 1.95347 4.16491 1.8504 3.58398 1.8504H2.10822V4.42946Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M16.9361 0.142745V6.88203C16.9361 8.00173 16.5847 8.88718 15.8819 9.53839C15.1839 10.1896 14.2282 10.5152 13.0148 10.5152C11.8201 10.5152 10.8714 10.199 10.1687 9.5665C9.46592 8.93403 9.10752 8.06497 9.09346 6.95933V0.142745H11.2017V6.89608C11.2017 7.56603 11.361 8.0556 11.6796 8.36481C12.0028 8.66933 12.4479 8.82159 13.0148 8.82159C14.2 8.82159 14.8021 8.19849 14.8208 6.9523V0.142745H16.9361Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M22.1926 4.75272L24.3219 0.142745H26.6268L23.2677 6.66418V10.3746H21.1244V6.66418L17.7653 0.142745H20.0773L22.1926 4.75272Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M39.5502 5.4906C39.5502 6.49786 39.3722 7.38097 39.0162 8.13993C38.6601 8.89889 38.1494 9.48451 37.4842 9.89678C36.8236 10.3091 36.0647 10.5152 35.2073 10.5152C34.3593 10.5152 33.6027 10.3114 32.9375 9.90381C32.2722 9.49622 31.7568 8.91529 31.3914 8.16101C31.026 7.40205 30.8409 6.53066 30.8363 5.54682V5.04085C30.8363 4.03359 31.0166 3.14813 31.3774 2.38449C31.7428 1.61616 32.2558 1.0282 32.9164 0.620609C33.5816 0.208335 34.3406 0.00219727 35.1932 0.00219727C36.0459 0.00219727 36.8025 0.208335 37.4631 0.620609C38.1284 1.0282 38.6414 1.61616 39.0021 2.38449C39.3675 3.14813 39.5502 4.03124 39.5502 5.03382V5.4906ZM37.4139 5.02679C37.4139 3.95394 37.2218 3.13876 36.8377 2.58125C36.4535 2.02375 35.9054 1.74499 35.1932 1.74499C34.4858 1.74499 33.94 2.02141 33.5559 2.57423C33.1717 3.12237 32.9773 3.92817 32.9726 4.99165V5.4906C32.9726 6.53534 33.1647 7.34584 33.5488 7.92208C33.933 8.49833 34.4858 8.78646 35.2073 8.78646C35.9147 8.78646 36.4582 8.51004 36.8377 7.95722C37.2171 7.39971 37.4092 6.58922 37.4139 5.52574V5.02679Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M49.4027 10.3746H47.2944L43.1904 3.64239V10.3746H41.0822V0.142745H43.1904L47.3015 6.88905V0.142745H49.4027V10.3746Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M57.3999 5.94036H53.3521V8.68104H58.1026V10.3746H51.2438V0.142745H58.0885V1.8504H53.3521V4.28892H57.3999V5.94036Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M71.019 9.08161C70.6395 9.53605 70.1031 9.88976 69.4097 10.1427C68.7163 10.391 67.948 10.5152 67.1047 10.5152C66.2192 10.5152 65.4415 10.3231 64.7716 9.93895C64.1063 9.5501 63.591 8.98791 63.2256 8.25237C62.8648 7.51684 62.6798 6.65247 62.6704 5.65926V4.96355C62.6704 3.94223 62.8414 3.05912 63.1834 2.31421C63.5301 1.56462 64.0267 0.993062 64.6732 0.599527C65.3244 0.201308 66.0857 0.00219727 66.9571 0.00219727C68.1705 0.00219727 69.1192 0.292663 69.8032 0.873595C70.4872 1.44984 70.8925 2.29079 71.019 3.39643H68.967C68.8733 2.81082 68.6648 2.38215 68.3415 2.11042C68.023 1.83869 67.5826 1.70283 67.0204 1.70283C66.3036 1.70283 65.7578 1.97221 65.383 2.51098C65.0082 3.04975 64.8185 3.85087 64.8138 4.91435V5.5679C64.8138 6.64075 65.0176 7.45125 65.4251 7.99939C65.8327 8.54752 66.4301 8.82159 67.2171 8.82159C68.0089 8.82159 68.5734 8.65293 68.9108 8.31562V6.55174H66.9923V4.99868H71.019V9.08161Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M78.8897 5.94036H74.8419V8.68104H79.5924V10.3746H72.7337V0.142745H79.5784V1.8504H74.8419V4.28892H78.8897V5.94036Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M88.6718 1.8504H85.5376V10.3746H83.4294V1.8504H80.3373V0.142745H88.6718V1.8504Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M101.448 5.4906C101.448 6.49786 101.27 7.38097 100.914 8.13993C100.558 8.89889 100.047 9.48451 99.3816 9.89678C98.721 10.3091 97.9621 10.5152 97.1047 10.5152C96.2567 10.5152 95.5001 10.3114 94.8349 9.90381C94.1696 9.49622 93.6543 8.91529 93.2888 8.16101C92.9234 7.40205 92.7383 6.53066 92.7337 5.54682V5.04085C92.7337 4.03359 92.914 3.14813 93.2748 2.38449C93.6402 1.61616 94.1532 1.0282 94.8138 0.620609C95.479 0.208335 96.238 0.00219727 97.0907 0.00219727C97.9433 0.00219727 98.6999 0.208335 99.3605 0.620609C100.026 1.0282 100.539 1.61616 100.9 2.38449C101.265 3.14813 101.448 4.03124 101.448 5.03382V5.4906ZM99.3113 5.02679C99.3113 3.95394 99.1192 3.13876 98.7351 2.58125C98.3509 2.02375 97.8028 1.74499 97.0907 1.74499C96.3832 1.74499 95.8374 2.02141 95.4533 2.57423C95.0691 3.12237 94.8747 3.92817 94.87 4.99165V5.4906C94.87 6.53534 95.0621 7.34584 95.4462 7.92208C95.8304 8.49833 96.3832 8.78646 97.1047 8.78646C97.8121 8.78646 98.3556 8.51004 98.7351 7.95722C99.1145 7.39971 99.3066 6.58922 99.3113 5.52574V5.02679Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M111.3 10.3746H109.192L105.088 3.64239V10.3746H102.98V0.142745H105.088L109.199 6.88905V0.142745H111.3V10.3746Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M119.297 5.94036H115.249V8.68104H120V10.3746H113.141V0.142745H119.986V1.8504H115.249V4.28892H119.297V5.94036Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M23.0627 42.3331H7.8982V57.9979H0V19.6653H24.9583V26.0628H7.8982V35.9619H23.0627V42.3331Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M43.7297 43.9654H37.4375V57.9979H29.5393V19.6653H43.7824C48.3107 19.6653 51.8034 20.6745 54.2606 22.6929C56.7179 24.7114 57.9465 27.5635 57.9465 31.2493C57.9465 33.8645 57.376 36.0497 56.2352 37.8048C55.1119 39.5424 53.4006 40.929 51.1014 41.9645L59.3945 57.6293V57.9979H50.9171L43.7297 43.9654ZM37.4375 37.5679H43.8087C45.792 37.5679 47.3278 37.0677 48.416 36.0672C49.5042 35.0492 50.0483 33.6539 50.0483 31.8812C50.0483 30.0734 49.5305 28.6517 48.4949 27.6161C47.477 26.5806 45.9061 26.0628 43.7824 26.0628H37.4375V37.5679Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M87.0382 41.3853H71.8736V51.653H89.6709V57.9979H63.9754V19.6653H89.6183V26.0628H71.8736V35.1984H87.0382V41.3853Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M117.367 41.3853H102.203V51.653H120V57.9979H94.3045V19.6653H119.947V26.0628H102.203V35.1984H117.367V41.3853Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="mdWidthTxt">
                  <div className="mdHeadline">{mdHeadlineTwo}</div>
                  <div className="mdContent">{mdContentTwo}</div>
                </div>
                <div className="mdSpread"></div>
                <div className="areaCode">
                  <div className="lightWeight">Coupon code</div>
                  <div className="mdcode">{codeTwo}</div>
                  <div
                    className="btnCopy"
                    onClick={() => handleCopyCode(codeTwo, 1)}
                  >
                    {copied === "1" ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="transparent"
                          strokeWidth="1.5"
                          viewBox="0 0 13 11"
                          style={{
                            width: "1em",
                            height: "1em",
                            verticalAlign: "middle",
                          }}
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.33 1.714-6.428 7.66-3.83-3.214"
                          ></path>
                        </svg>
                        <span> Code copied </span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <rect
                            x="5"
                            y="5"
                            width="10"
                            height="10"
                            rx="1"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 1H2C1.44772 1 1 1.44772 1 2V9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span> Copy Code </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="offerContainer">
                {selectDsicountTypeThree == "Percentage" && (
                  <div className="areaDiscount">
                    <div className="percentage">
                      <span>
                        {discountValueThree ? discountValueThree : "0"}
                      </span>
                      <svg
                        className="percentageDiscount"
                        width="43"
                        height="59"
                        viewBox="0 0 43 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42.5 58.7902H0.5L36.5762 1.20312H42.5V58.7902Z"
                          fill="#F7F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.4989 0C26.7586 0 27.9749 0.461487 28.9191 1.2977C29.3589 1.74344 29.7029 2.27496 29.9297 2.85937C30.1564 3.44378 30.2612 4.06864 30.2375 4.69529V5.79817C30.2539 6.40992 30.1442 7.01847 29.9153 7.58574C29.6864 8.15302 29.3433 8.66681 28.9073 9.09496C28.4569 9.52886 27.9234 9.86661 27.3391 10.0878C26.7547 10.3089 26.1317 10.4089 25.5078 10.3817C24.2551 10.4241 23.0361 9.9704 22.1142 9.11868C21.6627 8.67702 21.31 8.14406 21.0796 7.5552C20.8493 6.96635 20.7465 6.33507 20.778 5.7033V4.61821C20.756 4.00483 20.8601 3.39347 21.0838 2.8222C21.3076 2.25093 21.6463 1.73199 22.0787 1.2977C23.023 0.461487 24.2393 0 25.4989 0ZM27.0331 7.51179C27.4478 7.01539 27.6591 6.37961 27.6244 5.73295L27.6539 4.60635C27.6801 3.97891 27.4689 3.36472 27.0627 2.8868C26.8689 2.66727 26.6289 2.49378 26.3599 2.37891C26.091 2.26404 25.7999 2.21068 25.5078 2.2227C25.2164 2.20707 24.9252 2.25761 24.656 2.37054C24.3868 2.48347 24.1464 2.65589 23.9529 2.87494C23.5438 3.37448 23.3333 4.008 23.3617 4.65378V5.79817C23.3358 6.42377 23.5471 7.03599 23.9529 7.51179C24.149 7.72754 24.3898 7.8977 24.6584 8.01037C24.927 8.12303 25.2169 8.17548 25.5078 8.16403C25.7942 8.17435 26.0794 8.12125 26.343 8.00852C26.6066 7.89579 26.8423 7.7262 27.0331 7.51179ZM37.3921 12.5742C38.6416 12.5742 39.849 13.0273 40.7916 13.8498C41.2353 14.2952 41.5816 14.8284 41.8086 15.4154C42.0356 16.0024 42.1382 16.6303 42.11 17.2593V18.374C42.1303 18.9798 42.0276 19.5834 41.808 20.1481C41.5885 20.7128 41.2568 21.2268 40.833 21.6589C40.3831 22.0995 39.8474 22.4422 39.2594 22.6657C38.6714 22.8891 38.0438 22.9885 37.4157 22.9575C36.7851 22.9855 36.1552 22.8866 35.5632 22.6667C34.9712 22.4467 34.4292 22.1101 33.9689 21.6767C33.5303 21.2344 33.1877 20.7057 32.9629 20.124C32.738 19.5423 32.6357 18.9202 32.6623 18.2969V17.1763C32.6382 16.5591 32.7442 15.9438 32.9734 15.3706C33.2026 14.7974 33.5499 14.2792 33.9926 13.8498C34.9352 13.0273 36.1426 12.5742 37.3921 12.5742ZM38.9529 20.0876C39.3509 19.5836 39.5507 18.9507 39.5146 18.3088L39.5264 17.1585C39.5577 16.5321 39.3458 15.9179 38.9352 15.4448C38.7353 15.2399 38.4967 15.0771 38.2332 14.9659C37.9697 14.8548 37.6868 14.7975 37.401 14.7975C37.1151 14.7975 36.8322 14.8548 36.5687 14.9659C36.3053 15.0771 36.0666 15.2399 35.8668 15.4448C35.45 15.9401 35.2384 16.5767 35.2755 17.2237V18.3444C35.2476 18.9685 35.4592 19.5796 35.8668 20.0521C36.0609 20.2699 36.3 20.4428 36.5675 20.5585C36.8351 20.6742 37.1245 20.73 37.4157 20.7221C37.7028 20.7368 37.9895 20.6875 38.2553 20.5778C38.5211 20.4681 38.7594 20.3007 38.9529 20.0876ZM3.4561 58.7902H0.5L36.5762 1.20312H39.5382L3.4561 58.7902ZM22.8138 57.1767C23.655 56.203 24.0756 54.8232 24.0756 53.0373L24.0933 50.7606C24.0815 48.9432 23.651 47.5279 22.802 46.5147C22.3721 46.0146 21.8345 45.619 21.2298 45.3578C20.6251 45.0965 19.9691 44.9765 19.3114 45.0068C18.6431 44.9691 17.9752 45.0885 17.361 45.3554C16.7468 45.6223 16.2032 46.0295 15.7737 46.5443C14.8663 47.7793 14.4198 49.2944 14.5119 50.8257V53.0728C14.4322 54.5525 14.8911 56.0109 15.8031 57.1767C16.2608 57.6432 16.8064 58.0137 17.4082 58.2666C18.01 58.5195 18.656 58.6497 19.3085 58.6497C19.9609 58.6497 20.6069 58.5195 21.2087 58.2666C21.8105 58.0137 22.3561 57.6432 22.8138 57.1767ZM20.8798 48.1291C21.2694 48.9655 21.4437 49.8865 21.3869 50.8079V53.1201C21.4416 53.9874 21.2624 54.8536 20.868 55.6274C20.7085 55.8954 20.4794 56.115 20.2053 56.2629C19.9312 56.4108 19.6223 56.4813 19.3114 56.4671C18.9946 56.4861 18.6786 56.4193 18.3964 56.2736C18.1142 56.1279 17.8763 55.9088 17.7076 55.6392C17.3059 54.8446 17.1266 53.9556 17.1888 53.0669V50.7015C17.1426 49.8132 17.3232 48.9278 17.7135 48.1291C17.8857 47.8656 18.1205 47.6492 18.3969 47.4994C18.6733 47.3496 18.9825 47.2712 19.2967 47.2712C19.6108 47.2712 19.92 47.3496 20.1964 47.4994C20.4728 47.6492 20.7076 47.8656 20.8798 48.1291ZM32.8367 53.0622H28.674V58.4908H25.9971V45.1914H33.3379V47.4267H28.674V50.8329H32.8367V53.0622ZM37.548 53.0622H41.7107V50.8329H37.548V47.4267H42.2119V45.1914H34.8711V58.4908H37.548V53.0622Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {selectDsicountTypeThree == "Dollars" && (
                  <div className="areaDiscount">
                    <div className="percentage">
                      <span>
                        {discountValueThree ? discountValueThree : ""}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="18"
                        viewBox="0 0 41 18"
                        fill="none"
                        className="dollarDiscount"
                      >
                        <path
                          d="M5.65845 12.5306C5.65845 12.0253 5.55496 11.6266 5.348 11.3344C5.14103 11.0422 4.80015 10.7683 4.32534 10.5126C3.39399 10.0987 2.70309 9.70304 2.25264 9.32564C1.80827 8.94214 1.47651 8.5069 1.25737 8.01992C1.03823 7.52686 0.928662 6.94248 0.928662 6.2668C0.928662 5.25632 1.20868 4.42236 1.7687 3.76494C2.32873 3.10143 3.06833 2.70881 3.9875 2.58706V0.633057H5.36626V2.62358C6.27935 2.80011 6.98851 3.26274 7.49375 4.01147C8.00508 4.76021 8.26074 5.70981 8.26074 6.8603H5.67671C5.67671 6.12983 5.57018 5.58503 5.35713 5.22588C5.15016 4.86673 4.87928 4.68716 4.54448 4.68716C4.22186 4.68716 3.96924 4.82716 3.78662 5.10718C3.604 5.38719 3.5127 5.77677 3.5127 6.27593C3.5127 6.70812 3.60705 7.06727 3.79575 7.35337C3.98446 7.63947 4.3436 7.93774 4.87319 8.24819C5.84715 8.71082 6.54718 9.13389 6.97329 9.51738C7.40549 9.89479 7.72507 10.3239 7.93203 10.8048C8.139 11.2857 8.24248 11.8549 8.24248 12.5123C8.24248 13.541 7.96855 14.378 7.4207 15.0233C6.87894 15.6685 6.12716 16.0551 5.16538 16.1829V18H3.79575V16.1829C2.74266 16.0307 1.93001 15.5833 1.35781 14.8407C0.785612 14.0919 0.499512 13.0967 0.499512 11.8549H3.08355C3.08355 12.5732 3.1992 13.1271 3.43052 13.5167C3.66183 13.9002 4.00881 14.0919 4.47144 14.0919C4.84276 14.0919 5.1319 13.955 5.33887 13.6811C5.55192 13.401 5.65845 13.0175 5.65845 12.5306Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M39.9988 10.6504H35.8361V16.079H33.1592V2.77954H40.5V5.01483H35.8361V8.421H39.9988V10.6504Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M31.1248 10.6504H26.9621V16.079H24.2852V2.77954H31.626V5.01483H26.9621V8.421H31.1248V10.6504Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M22.3636 10.6254C22.3636 12.4113 21.943 13.7911 21.1019 14.7649C20.6442 15.2314 20.0986 15.6018 19.4968 15.8547C18.895 16.1076 18.249 16.2378 17.5965 16.2378C16.944 16.2378 16.2981 16.1076 15.6963 15.8547C15.0945 15.6018 14.5488 15.2314 14.0912 14.7649C13.1792 13.599 12.7203 12.1406 12.7999 10.6609V8.4138C12.7078 6.88254 13.1544 5.36741 14.0617 4.13244C14.4913 3.61759 15.0349 3.21048 15.6491 2.94354C16.2633 2.67661 16.9312 2.55724 17.5995 2.59494C18.2572 2.56466 18.9132 2.68466 19.5179 2.94589C20.1226 3.20712 20.6602 3.60274 21.0901 4.10287C21.9391 5.11605 22.3695 6.53134 22.3813 8.34875L22.3636 10.6254ZM19.675 8.39606C19.7318 7.47465 19.5575 6.55365 19.1679 5.71725C18.9957 5.45372 18.7609 5.2373 18.4845 5.08753C18.2081 4.93776 17.8989 4.85934 17.5847 4.85934C17.2706 4.85934 16.9614 4.93776 16.685 5.08753C16.4086 5.2373 16.1738 5.45372 16.0016 5.71725C15.6113 6.51597 15.4307 7.40135 15.4768 8.28961V10.655C15.4147 11.5437 15.594 12.4327 15.9957 13.2274C16.1644 13.497 16.4023 13.7161 16.6845 13.8617C16.9666 14.0074 17.2827 14.0742 17.5995 14.0553C17.9104 14.0695 18.2193 13.9989 18.4934 13.851C18.7675 13.7032 18.9965 13.4835 19.1561 13.2155C19.5505 12.4417 19.7297 11.5756 19.675 10.7082V8.39606Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {selectDsicountTypeThree == "Bogo" && (
                  <div className="areaDiscount">
                    <div className="bogo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="58"
                        viewBox="0 0 120 58"
                        fill="none"
                      >
                        <path
                          d="M0 10.3746V0.142745H3.58398C4.82549 0.142745 5.76716 0.381677 6.40899 0.859541C7.05083 1.33272 7.37175 2.02843 7.37175 2.94668C7.37175 3.44797 7.24291 3.8907 6.98524 4.27486C6.72757 4.65434 6.36917 4.93309 5.91005 5.11112C6.43476 5.2423 6.84704 5.507 7.14687 5.90522C7.45139 6.30344 7.60365 6.79067 7.60365 7.36692C7.60365 8.35076 7.28976 9.09566 6.66198 9.60163C6.0342 10.1076 5.13938 10.3653 3.97751 10.3746H0ZM2.10822 5.91927V8.68104H3.91427C4.41087 8.68104 4.79738 8.56392 5.07379 8.32967C5.35488 8.09074 5.49543 7.7628 5.49543 7.34584C5.49543 6.40885 5.01054 5.93333 4.04076 5.91927H2.10822ZM2.10822 4.42946H3.66831C4.73179 4.41072 5.26353 3.98674 5.26353 3.1575C5.26353 2.69369 5.12766 2.36106 4.85594 2.15961C4.5889 1.95347 4.16491 1.8504 3.58398 1.8504H2.10822V4.42946Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M16.9361 0.142745V6.88203C16.9361 8.00173 16.5847 8.88718 15.8819 9.53839C15.1839 10.1896 14.2282 10.5152 13.0148 10.5152C11.8201 10.5152 10.8714 10.199 10.1687 9.5665C9.46592 8.93403 9.10752 8.06497 9.09346 6.95933V0.142745H11.2017V6.89608C11.2017 7.56603 11.361 8.0556 11.6796 8.36481C12.0028 8.66933 12.4479 8.82159 13.0148 8.82159C14.2 8.82159 14.8021 8.19849 14.8208 6.9523V0.142745H16.9361Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M22.1926 4.75272L24.3219 0.142745H26.6268L23.2677 6.66418V10.3746H21.1244V6.66418L17.7653 0.142745H20.0773L22.1926 4.75272Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M39.5502 5.4906C39.5502 6.49786 39.3722 7.38097 39.0162 8.13993C38.6601 8.89889 38.1494 9.48451 37.4842 9.89678C36.8236 10.3091 36.0647 10.5152 35.2073 10.5152C34.3593 10.5152 33.6027 10.3114 32.9375 9.90381C32.2722 9.49622 31.7568 8.91529 31.3914 8.16101C31.026 7.40205 30.8409 6.53066 30.8363 5.54682V5.04085C30.8363 4.03359 31.0166 3.14813 31.3774 2.38449C31.7428 1.61616 32.2558 1.0282 32.9164 0.620609C33.5816 0.208335 34.3406 0.00219727 35.1932 0.00219727C36.0459 0.00219727 36.8025 0.208335 37.4631 0.620609C38.1284 1.0282 38.6414 1.61616 39.0021 2.38449C39.3675 3.14813 39.5502 4.03124 39.5502 5.03382V5.4906ZM37.4139 5.02679C37.4139 3.95394 37.2218 3.13876 36.8377 2.58125C36.4535 2.02375 35.9054 1.74499 35.1932 1.74499C34.4858 1.74499 33.94 2.02141 33.5559 2.57423C33.1717 3.12237 32.9773 3.92817 32.9726 4.99165V5.4906C32.9726 6.53534 33.1647 7.34584 33.5488 7.92208C33.933 8.49833 34.4858 8.78646 35.2073 8.78646C35.9147 8.78646 36.4582 8.51004 36.8377 7.95722C37.2171 7.39971 37.4092 6.58922 37.4139 5.52574V5.02679Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M49.4027 10.3746H47.2944L43.1904 3.64239V10.3746H41.0822V0.142745H43.1904L47.3015 6.88905V0.142745H49.4027V10.3746Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M57.3999 5.94036H53.3521V8.68104H58.1026V10.3746H51.2438V0.142745H58.0885V1.8504H53.3521V4.28892H57.3999V5.94036Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M71.019 9.08161C70.6395 9.53605 70.1031 9.88976 69.4097 10.1427C68.7163 10.391 67.948 10.5152 67.1047 10.5152C66.2192 10.5152 65.4415 10.3231 64.7716 9.93895C64.1063 9.5501 63.591 8.98791 63.2256 8.25237C62.8648 7.51684 62.6798 6.65247 62.6704 5.65926V4.96355C62.6704 3.94223 62.8414 3.05912 63.1834 2.31421C63.5301 1.56462 64.0267 0.993062 64.6732 0.599527C65.3244 0.201308 66.0857 0.00219727 66.9571 0.00219727C68.1705 0.00219727 69.1192 0.292663 69.8032 0.873595C70.4872 1.44984 70.8925 2.29079 71.019 3.39643H68.967C68.8733 2.81082 68.6648 2.38215 68.3415 2.11042C68.023 1.83869 67.5826 1.70283 67.0204 1.70283C66.3036 1.70283 65.7578 1.97221 65.383 2.51098C65.0082 3.04975 64.8185 3.85087 64.8138 4.91435V5.5679C64.8138 6.64075 65.0176 7.45125 65.4251 7.99939C65.8327 8.54752 66.4301 8.82159 67.2171 8.82159C68.0089 8.82159 68.5734 8.65293 68.9108 8.31562V6.55174H66.9923V4.99868H71.019V9.08161Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M78.8897 5.94036H74.8419V8.68104H79.5924V10.3746H72.7337V0.142745H79.5784V1.8504H74.8419V4.28892H78.8897V5.94036Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M88.6718 1.8504H85.5376V10.3746H83.4294V1.8504H80.3373V0.142745H88.6718V1.8504Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M101.448 5.4906C101.448 6.49786 101.27 7.38097 100.914 8.13993C100.558 8.89889 100.047 9.48451 99.3816 9.89678C98.721 10.3091 97.9621 10.5152 97.1047 10.5152C96.2567 10.5152 95.5001 10.3114 94.8349 9.90381C94.1696 9.49622 93.6543 8.91529 93.2888 8.16101C92.9234 7.40205 92.7383 6.53066 92.7337 5.54682V5.04085C92.7337 4.03359 92.914 3.14813 93.2748 2.38449C93.6402 1.61616 94.1532 1.0282 94.8138 0.620609C95.479 0.208335 96.238 0.00219727 97.0907 0.00219727C97.9433 0.00219727 98.6999 0.208335 99.3605 0.620609C100.026 1.0282 100.539 1.61616 100.9 2.38449C101.265 3.14813 101.448 4.03124 101.448 5.03382V5.4906ZM99.3113 5.02679C99.3113 3.95394 99.1192 3.13876 98.7351 2.58125C98.3509 2.02375 97.8028 1.74499 97.0907 1.74499C96.3832 1.74499 95.8374 2.02141 95.4533 2.57423C95.0691 3.12237 94.8747 3.92817 94.87 4.99165V5.4906C94.87 6.53534 95.0621 7.34584 95.4462 7.92208C95.8304 8.49833 96.3832 8.78646 97.1047 8.78646C97.8121 8.78646 98.3556 8.51004 98.7351 7.95722C99.1145 7.39971 99.3066 6.58922 99.3113 5.52574V5.02679Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M111.3 10.3746H109.192L105.088 3.64239V10.3746H102.98V0.142745H105.088L109.199 6.88905V0.142745H111.3V10.3746Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M119.297 5.94036H115.249V8.68104H120V10.3746H113.141V0.142745H119.986V1.8504H115.249V4.28892H119.297V5.94036Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M23.0627 42.3331H7.8982V57.9979H0V19.6653H24.9583V26.0628H7.8982V35.9619H23.0627V42.3331Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M43.7297 43.9654H37.4375V57.9979H29.5393V19.6653H43.7824C48.3107 19.6653 51.8034 20.6745 54.2606 22.6929C56.7179 24.7114 57.9465 27.5635 57.9465 31.2493C57.9465 33.8645 57.376 36.0497 56.2352 37.8048C55.1119 39.5424 53.4006 40.929 51.1014 41.9645L59.3945 57.6293V57.9979H50.9171L43.7297 43.9654ZM37.4375 37.5679H43.8087C45.792 37.5679 47.3278 37.0677 48.416 36.0672C49.5042 35.0492 50.0483 33.6539 50.0483 31.8812C50.0483 30.0734 49.5305 28.6517 48.4949 27.6161C47.477 26.5806 45.9061 26.0628 43.7824 26.0628H37.4375V37.5679Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M87.0382 41.3853H71.8736V51.653H89.6709V57.9979H63.9754V19.6653H89.6183V26.0628H71.8736V35.1984H87.0382V41.3853Z"
                          fill="#0F0F0F"
                        />
                        <path
                          d="M117.367 41.3853H102.203V51.653H120V57.9979H94.3045V19.6653H119.947V26.0628H102.203V35.1984H117.367V41.3853Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="mdWidthTxt">
                  <div className="mdHeadline">{mdHeadlineThree}</div>
                  <div className="mdContent">{mdContentThree}</div>
                </div>
                <div className="mdSpread"></div>
                <div className="areaCode">
                  <div className="lightWeight">Coupon code</div>
                  <div className="mdcode">{codeThree}</div>
                  <div
                    className="btnCopy"
                    onClick={() => handleCopyCode(codeThree, 2)}
                  >
                    {copied === "2" ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="transparent"
                          strokeWidth="1.5"
                          viewBox="0 0 13 11"
                          style={{
                            width: "1em",
                            height: "1em",
                            verticalAlign: "middle",
                          }}
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.33 1.714-6.428 7.66-3.83-3.214"
                          ></path>
                        </svg>
                        <span>Code copied</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <rect
                            x="5"
                            y="5"
                            width="10"
                            height="10"
                            rx="1"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 1H2C1.44772 1 1 1.44772 1 2V9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span> Copy Code </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="disclaimer">{generalDisclamier}</div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBannerCtp;

import React, { useState, useEffect } from "react";
interface PreviewBannerProps {
  id: string;
  device: string;
  selectlayout: string;
  themeMode: string;
  backgroundColorStrip: string;
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
  select: string;
  linetext: string;
  selectDsicountType: string;
  discountValue: string;
  code: string;
  mdHeadline: string;
  mdContent: string;
  generalDisclamier: string;
  linetexttwo: string;
  selectDsicountTypeTwo: string;
  discountValueTwo: string;
  codeTwo: string;
  mdHeadlineTwo: string;
  mdContentTwo: string;
  linetextthree: string;
  selectDsicountTypeThree: string;
  discountValueThree: string;
  codeThree: string;
  mdHeadlineThree: string;
  mdContentThree: string;
  mdsaleName: string;
}

const PreviewBannerPdp: React.FC<PreviewBannerProps> = ({
  id,
  device = "Desktop",
  selectlayout,
  themeMode,
  backgroundColorStrip,
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
  select,
  linetext,
  selectDsicountType,
  discountValue,
  code,
  mdHeadline,
  mdContent,
  generalDisclamier,
  linetexttwo,
  selectDsicountTypeTwo,
  discountValueTwo,
  codeTwo,
  mdHeadlineTwo,
  mdContentTwo,
  linetextthree,
  selectDsicountTypeThree,
  discountValueThree,
  codeThree,
  mdHeadlineThree,
  mdContentThree,
  mdsaleName,
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
        className={`${device === "Desktop" ? "strip" : ""} ${
          themeMode === "Dark" ? "dark" : "light"
        }`}
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
                        <span>
                          <b>
                            {strip.linetext.length <= 30 ? strip.linetext : ""}
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
                            color: backgroundColorStrip ? moreDetailsColor : "",
                          }}
                        >
                          More Details
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
                        style={{ stroke: backgroundColorStrip ? copySvg : "" }}
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
                        style={{ stroke: backgroundColorStrip ? copySvg : "" }}
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
                        style={{ stroke: backgroundColorStrip ? copySvg : "" }}
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
                        style={{ stroke: backgroundColorStrip ? copySvg : "" }}
                      />
                    </svg>
                  )}
                </div>
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
          ""
        )}
      </div>
      {device == "Mobile" ? (
        <div
          style={{
            backgroundColor: backgroundColorStrip ? backgroundColorStrip : "",
            color: backgroundColorStrip ? textColor : "",
          }}
          onClick={handleMoreDetailsClick}
          className={`stripPdp ${themeMode === "Dark" ? "dark" : "light"} `}
        >
          {linetext ? (
            <>
              <span className="offer">
                <b> {linetext.length <= 30 ? linetext : ""}</b>
              </span>
              <span className="codeMobile"> Code:{code}</span>
            </>
          ) : null}
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
          {select == "2" && device !== "Mobile" ? (
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
          {select == "3" && device !== "Mobile" ? (
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

export default PreviewBannerPdp;

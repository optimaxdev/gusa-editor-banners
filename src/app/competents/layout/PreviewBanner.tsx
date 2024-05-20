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
  link: string;
  contentPostion: string;
  backgroundPostion: string;
  select: string;
  linetext: string;
  selectTextSize: string;
  fontWeightLineOne: string;
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
  selectCta: string;
  buttonTextOne: string;
  buttonLinkOne: string;
  buttonColorOne: string;
  buttonTextTwo: string;
  buttonLinkTwo: string;
  buttonColorTwo: string;
  disclaimerleftTxt: string;
  disclaimerleftTxtFontWeight: string;
  disclaimerleftTxtColor: string;
  disclaimerleftbgColor: string;
  disclaimerrightTxt: string;
  disclaimerrightTxtFontWeight: string;
  disclaimerrightTxtColor: string;
  disclaimerrightbgColor: string;
}

const PreviewBanner: React.FC<PreviewBannerProps> = ({
  ImageLink,
  VideoLink,
  templateD = "0",
  templateM = "0",
  formatType = "image",
  deviceType,
  backgroundColor,
  themeMode,
  backgroundPostion,
  link,
  contentPostion,
  select,
  linetext,
  selectTextSize,
  fontWeightLineOne,
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
  selectCta,
  buttonTextOne,
  buttonLinkOne,
  buttonColorOne,
  buttonTextTwo,
  buttonLinkTwo,
  buttonColorTwo,
  disclaimerleftTxt,
  disclaimerleftTxtFontWeight,
  disclaimerleftTxtColor,
  disclaimerleftbgColor,
  disclaimerrightTxt,
  disclaimerrightTxtFontWeight,
  disclaimerrightTxtColor,
  disclaimerrightbgColor,
}) => {
  return (
    <a
      href={
        (deviceType == "Desktop" && templateD === "0") ||
        (deviceType == "Mobile" && templateM === "0")
          ? link
          : "#"
      }
      style={{
        backgroundColor: backgroundColor === "" ? "#000000" : backgroundColor,
      }}
      className={`${
        deviceType == "Mobile"
          ? "previewBanner MobileStyle"
          : "previewBanner DesktopStyle"
      } ${themeMode == "Dark" ? "darkTxt" : "lightText"}`}
    >
      {deviceType == "Desktop" ? (
        templateD == "5" ? (
          <div className="flex">
            <div
              className={`halfBanner  ${
                contentPostion == "right"
                  ? "textright"
                  : contentPostion == "center"
                  ? "textcenter"
                  : ""
              }`}
            >
              <div className="textside">
                <div
                  className={selectTextSize ? selectTextSize : "h1"}
                  style={{
                    color: textColor,
                    marginBottom: mBottom ? mBottom + "px" : "0",
                    fontWeight: fontWeightLineOne,
                  }}
                >
                  {linetext}
                </div>
                {select == "2" ? (
                  <div
                    className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                    style={{
                      color: textColortwo,
                      marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                      fontWeight: fontWeightLinetwo,
                    }}
                  >
                    {linetexttwo}
                  </div>
                ) : (
                  ""
                )}
                {select == "3" ? (
                  <>
                    <div
                      className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                      style={{
                        color: textColortwo,
                        marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                        fontWeight: fontWeightLinetwo,
                      }}
                    >
                      {linetexttwo}
                    </div>
                    <div
                      className={
                        selectTextSizethree ? selectTextSizethree : "h1"
                      }
                      style={{
                        color: textColorthree,
                        marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                        fontWeight: fontWeightLinethree,
                      }}
                    >
                      {linetextthree}
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className={selectCta == "2" ? "ctaArea" : ""}>
                  {buttonTextOne ? (
                    buttonTextOne.length < 18 ? (
                      <a
                        href={buttonLinkOne}
                        target="_blank"
                        className={`button ${
                          buttonColorOne == "Dark"
                            ? "darkbutton"
                            : "lightbutton"
                        }
                        `}
                      >
                        {buttonTextOne}
                      </a>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}

                  {selectCta == "2" &&
                  buttonTextTwo.length < 18 &&
                  buttonTextTwo ? (
                    <a
                      href={buttonLinkTwo}
                      target="_blank"
                      className={`button ${
                        buttonColorTwo == "Dark" ? "darkbutton" : "lightbutton"
                      } `}
                    >
                      {buttonTextTwo}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="halfBanner">
              {formatType === "video" ? (
                VideoLink ? (
                  <video
                    poster={ImageLink}
                    className="imagePreviewHalf"
                    playsInline
                    autoPlay
                    loop
                  >
                    <source src={VideoLink} type="video/mp4" />
                  </video>
                ) : (
                  ""
                )
              ) : ImageLink ? (
                <Image
                  src={ImageLink}
                  alt={"image"}
                  width={1024}
                  height={256}
                  className="imagePreviewHalf"
                  style={{ objectPosition: backgroundPostion }}
                />
              ) : (
                ""
              )}
            </div>
            {disclaimerleftTxt ? (
              disclaimerleftTxt.length < 18 ? (
                <div
                  className="leftDisclimar themeColor"
                  style={{
                    fontWeight:
                      disclaimerleftTxtFontWeight == "bold" ? "700" : "400",
                    background:
                      disclaimerleftbgColor !== "Dark" &&
                      disclaimerleftbgColor !== "Light"
                        ? ""
                        : disclaimerleftbgColor == "Dark"
                        ? "rgba(0, 0, 0, .4)"
                        : "hsla(0, 0%, 100%, .4)",
                    color: disclaimerleftTxtColor == "Dark" ? "#000" : "#fff",
                  }}
                >
                  {disclaimerleftTxt}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {disclaimerrightTxt ? (
              disclaimerrightTxt.length < 18 ? (
                <div
                  className="rightDisclimar themeColor"
                  style={{
                    fontWeight:
                      disclaimerrightTxtFontWeight == "bold" ? "700" : "400",
                    background:
                      disclaimerrightbgColor !== "Dark" &&
                      disclaimerrightbgColor !== "Light"
                        ? ""
                        : disclaimerrightbgColor == "Dark"
                        ? "rgba(0, 0, 0, .4)"
                        : "hsla(0, 0%, 100%, .4)",
                    color: disclaimerrightTxtColor == "Dark" ? "#000" : "#fff",
                  }}
                >
                  {disclaimerrightTxt}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        ) : templateD == "4" ? (
          <div className="flex">
            <div className="halfBanner">
              {formatType == "video" ? (
                VideoLink ? (
                  <video
                    poster={ImageLink}
                    className="imagePreviewHalf"
                    playsInline
                    autoPlay
                    loop
                  >
                    <source src={VideoLink} type="video/mp4" />
                  </video>
                ) : (
                  ""
                )
              ) : ImageLink ? (
                <Image
                  src={ImageLink}
                  alt={"image"}
                  width={1024}
                  height={256}
                  className="imagePreviewHalf"
                  style={{ objectPosition: backgroundPostion }}
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`halfBanner ${
                themeMode == "Dark" ? "darkTxt" : "lightText"
              } ${
                contentPostion == "right"
                  ? "textright"
                  : contentPostion == "center"
                  ? "textcenter"
                  : ""
              }`}
            >
              <div className="textside">
                <div
                  className={selectTextSize ? selectTextSize : "h1"}
                  style={{
                    color: textColor,
                    marginBottom: mBottom ? mBottom + "px" : "0",
                    fontWeight: fontWeightLineOne,
                  }}
                >
                  {linetext}
                </div>
                {select == "2" ? (
                  <div
                    className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                    style={{
                      color: textColortwo,
                      marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                      fontWeight: fontWeightLinetwo,
                    }}
                  >
                    {linetexttwo}
                  </div>
                ) : (
                  ""
                )}
                {select == "3" ? (
                  <>
                    <div
                      className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                      style={{
                        color: textColortwo,
                        marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                        fontWeight: fontWeightLinetwo,
                      }}
                    >
                      {linetexttwo}
                    </div>
                    <div
                      className={
                        selectTextSizethree ? selectTextSizethree : "h1"
                      }
                      style={{
                        color: textColorthree,
                        marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                        fontWeight: fontWeightLinethree,
                      }}
                    >
                      {linetextthree}
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className={selectCta == "2" ? "ctaArea" : ""}>
                  {buttonTextOne ? (
                    buttonTextOne.length < 18 ? (
                      <a
                        href={buttonLinkOne}
                        target="_blank"
                        className={`button ${
                          buttonColorOne == "Dark"
                            ? "darkbutton"
                            : "lightbutton"
                        } `}
                      >
                        {buttonTextOne}
                      </a>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}

                  {selectCta == "2" &&
                  buttonTextTwo.length < 18 &&
                  buttonTextTwo ? (
                    <a
                      href={buttonLinkTwo}
                      target="_blank"
                      className={`button ${
                        buttonColorTwo == "Dark" ? "darkbutton" : "lightbutton"
                      } `}
                    >
                      {buttonTextTwo}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {disclaimerleftTxt ? (
              disclaimerleftTxt.length < 18 ? (
                <div
                  className="leftDisclimar themeColor"
                  style={{
                    fontWeight:
                      disclaimerleftTxtFontWeight == "bold" ? "700" : "400",
                    background:
                      disclaimerleftbgColor !== "Dark" &&
                      disclaimerleftbgColor !== "Light"
                        ? ""
                        : disclaimerleftbgColor == "Dark"
                        ? "rgba(0, 0, 0, .4)"
                        : "hsla(0, 0%, 100%, .4)",
                    color: disclaimerleftTxtColor == "Dark" ? "#000" : "#fff",
                  }}
                >
                  {disclaimerleftTxt}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {disclaimerrightTxt ? (
              disclaimerrightTxt.length < 18 ? (
                <div
                  className="rightDisclimar themeColor"
                  style={{
                    fontWeight:
                      disclaimerrightTxtFontWeight == "bold" ? "700" : "400",
                    background:
                      disclaimerrightbgColor !== "Dark" &&
                      disclaimerrightbgColor !== "Light"
                        ? ""
                        : disclaimerrightbgColor == "Dark"
                        ? "rgba(0, 0, 0, .4)"
                        : "hsla(0, 0%, 100%, .4)",
                    color: disclaimerrightTxtColor == "Dark" ? "#000" : "#fff",
                  }}
                >
                  {disclaimerrightTxt}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        ) : templateD && templateD !== "0" ? (
          <div
            className={`fullImage ${
              themeMode == "Dark" ? "darkTxt" : "lightText"
            }`}
          >
            {formatType == "video" ? (
              VideoLink ? (
                <video
                  poster={ImageLink}
                  className="imagePreview"
                  playsInline
                  autoPlay
                  loop
                >
                  <source src={VideoLink} type="video/mp4" />
                </video>
              ) : (
                ""
              )
            ) : ImageLink ? (
              <Image
                src={ImageLink}
                alt={"image"}
                width={1024}
                height={800}
                className="imagePreview"
                style={{ objectPosition: backgroundPostion }}
              />
            ) : (
              ""
            )}
            <div
              className={`contentPostion ${
                templateD == "3"
                  ? "left"
                  : templateD == "2"
                  ? "right"
                  : templateD == "1"
                  ? "center"
                  : "hide"
              } ${
                contentPostion == "right"
                  ? "textright"
                  : contentPostion == "center"
                  ? "textcenter"
                  : ""
              }`}
            >
              <div
                className={selectTextSize ? selectTextSize : "h1"}
                style={{
                  color: textColor,
                  marginBottom: mBottom ? mBottom + "px" : "0",
                  fontWeight: fontWeightLineOne,
                }}
              >
                {linetext}
              </div>
              {select == "2" ? (
                <div
                  className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                  style={{
                    color: textColortwo,
                    marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                    fontWeight: fontWeightLinetwo,
                  }}
                >
                  {linetexttwo}
                </div>
              ) : (
                ""
              )}
              {select == "3" ? (
                <>
                  <div
                    className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                    style={{
                      color: textColortwo,
                      marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                      fontWeight: fontWeightLinetwo,
                    }}
                  >
                    {linetexttwo}
                  </div>
                  <div
                    className={selectTextSizethree ? selectTextSizethree : "h1"}
                    style={{
                      color: textColorthree,
                      marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                      fontWeight: fontWeightLinethree,
                    }}
                  >
                    {linetextthree}
                  </div>
                </>
              ) : (
                ""
              )}
              <div className={selectCta == "2" ? "ctaArea" : ""}>
                {buttonTextOne ? (
                  buttonTextOne.length < 18 && buttonTextOne ? (
                    <a
                      href={buttonLinkOne}
                      target="_blank"
                      className={`button ${
                        buttonColorOne == "Dark" ? "darkbutton" : "lightbutton"
                      } ${selectCta == "1" ? "oneCta" : ""} `}
                    >
                      {buttonTextOne}
                    </a>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                {selectCta == "2" &&
                buttonTextTwo.length < 18 &&
                buttonTextTwo ? (
                  <a
                    href={buttonLinkTwo}
                    target="_blank"
                    className={`button ${
                      buttonColorTwo == "Dark" ? "darkbutton" : "lightbutton"
                    } `}
                  >
                    {buttonTextTwo}
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
            {disclaimerleftTxt ? (
              disclaimerleftTxt.length < 18 ? (
                <div
                  className="leftDisclimar themeColor"
                  style={{
                    fontWeight:
                      disclaimerleftTxtFontWeight == "bold" ? "700" : "400",
                    background:
                      disclaimerleftbgColor !== "Dark" &&
                      disclaimerleftbgColor !== "Light"
                        ? ""
                        : disclaimerleftbgColor == "Dark"
                        ? "rgba(0, 0, 0, .4)"
                        : "hsla(0, 0%, 100%, .4)",
                    color: disclaimerleftTxtColor == "Dark" ? "#000" : "#fff",
                  }}
                >
                  {disclaimerleftTxt}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {disclaimerrightTxt ? (
              disclaimerrightTxt.length < 18 ? (
                <div
                  className="rightDisclimar themeColor"
                  style={{
                    fontWeight:
                      disclaimerrightTxtFontWeight == "bold" ? "700" : "400",
                    background:
                      disclaimerrightbgColor !== "Dark" &&
                      disclaimerrightbgColor !== "Light"
                        ? ""
                        : disclaimerrightbgColor == "Dark"
                        ? "rgba(0, 0, 0, .4)"
                        : "hsla(0, 0%, 100%, .4)",
                    color: disclaimerrightTxtColor == "Dark" ? "#000" : "#fff",
                  }}
                >
                  {disclaimerrightTxt}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )
      ) : (
        <div className="MobileStyle">
          {templateM === "3" ? (
            <>
              <div className="areaImage">
                {formatType == "video" ? (
                  VideoLink ? (
                    <video
                      poster={ImageLink}
                      className="imagePreviewHalfMobile"
                      playsInline
                      autoPlay
                      loop
                    >
                      <source src={VideoLink} type="video/mp4" />
                    </video>
                  ) : (
                    ""
                  )
                ) : ImageLink ? (
                  <Image
                    src={ImageLink}
                    alt={"image"}
                    width={375}
                    height={180}
                    className="imagePreviewHalfMobile"
                    style={{ objectPosition: backgroundPostion }}
                  />
                ) : (
                  ""
                )}
              </div>
              <div
                className={`halfTxtMobile ${
                  themeMode == "Dark" ? "darkTxt" : "lightText"
                }`}
              >
                <div
                  className={selectTextSize ? selectTextSize : "h1"}
                  style={{
                    color: textColor,
                    marginBottom: mBottom ? mBottom + "px" : "0",
                    fontWeight: fontWeightLineOne,
                  }}
                >
                  {linetext}
                </div>
                {select == "2" ? (
                  <div
                    className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                    style={{
                      color: textColortwo,
                      marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                      fontWeight: fontWeightLinetwo,
                    }}
                  >
                    {linetexttwo}
                  </div>
                ) : (
                  ""
                )}
                {select == "3" ? (
                  <>
                    <div
                      className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                      style={{
                        color: textColortwo,
                        marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                        fontWeight: fontWeightLinetwo,
                      }}
                    >
                      {linetexttwo}
                    </div>
                    <div
                      className={
                        selectTextSizethree ? selectTextSizethree : "h1"
                      }
                      style={{
                        color: textColorthree,
                        marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                        fontWeight: fontWeightLinethree,
                      }}
                    >
                      {linetextthree}
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className={selectCta == "2" ? "ctaArea" : ""}>
                  {buttonTextOne ? (
                    buttonTextOne.length < 15 ? (
                      <a
                        href={buttonLinkOne}
                        target="_blank"
                        className={`button ${
                          buttonColorOne == "Dark"
                            ? "darkbutton"
                            : "lightbutton"
                        } `}
                      >
                        {buttonTextOne}
                      </a>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}

                  {selectCta == "2" &&
                  buttonTextTwo.length < 15 &&
                  buttonTextTwo ? (
                    <a
                      href={buttonLinkTwo}
                      target="_blank"
                      className={`button ${
                        buttonColorTwo == "Dark" ? "darkbutton" : "lightbutton"
                      } `}
                    >
                      {buttonTextTwo}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          ) : templateM ? (
            <div
              className={`fullImage ${
                themeMode == "Dark" ? "darkTxt" : "lightText"
              }`}
            >
              {formatType == "video" ? (
                VideoLink ? (
                  <video
                    poster={ImageLink}
                    className="imagePreviewFullimage"
                    playsInline
                    autoPlay
                    loop
                  >
                    <source src={VideoLink} type="video/mp4" />
                  </video>
                ) : (
                  ""
                )
              ) : ImageLink ? (
                <Image
                  src={ImageLink}
                  alt={"image"}
                  width={375}
                  height={360}
                  className="imagePreviewFullimage"
                  style={{ objectPosition: backgroundPostion }}
                />
              ) : (
                ""
              )}
              <div
                className={`contentPostion ${
                  templateM == "2"
                    ? "topTxtPostion"
                    : templateM == "1"
                    ? "bottomTxtPostion"
                    : ""
                } ${templateM == "0" ? "hide" : ""}`}
              >
                <div
                  className={selectTextSize ? selectTextSize : "h1"}
                  style={{
                    color: textColor,
                    marginBottom: mBottom ? mBottom + "px" : "0",
                    fontWeight: fontWeightLineOne,
                  }}
                >
                  {linetext}
                </div>
                {select == "2" ? (
                  <div
                    className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                    style={{
                      color: textColortwo,
                      marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                      fontWeight: fontWeightLinetwo,
                    }}
                  >
                    {linetexttwo}
                  </div>
                ) : (
                  ""
                )}
                {select == "3" ? (
                  <>
                    <div
                      className={selectTextSizetwo ? selectTextSizetwo : "h1"}
                      style={{
                        color: textColortwo,
                        marginBottom: mBottomtwo ? mBottomtwo + "px" : "0",
                        fontWeight: fontWeightLinetwo,
                      }}
                    >
                      {linetexttwo}
                    </div>
                    <div
                      className={
                        selectTextSizethree ? selectTextSizethree : "h1"
                      }
                      style={{
                        color: textColorthree,
                        marginBottom: mBottomthree ? mBottomthree + "px" : "0",
                        fontWeight: fontWeightLinethree,
                      }}
                    >
                      {linetextthree}
                    </div>
                    <div className={selectCta == "2" ? "ctaArea" : ""}>
                      {buttonTextOne ? (
                        buttonTextOne.length < 18 ? (
                          <a
                            href={buttonLinkOne}
                            target="_blank"
                            className={`button ${
                              buttonColorOne == "Dark"
                                ? "darkbutton"
                                : "lightbutton"
                            } `}
                          >
                            {buttonTextOne}
                          </a>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}

                      {selectCta == "2" &&
                      buttonTextTwo.length < 18 &&
                      buttonTextTwo ? (
                        <a
                          href={buttonLinkTwo}
                          target="_blank"
                          className={`button ${
                            buttonColorTwo == "Dark"
                              ? "darkbutton"
                              : "lightbutton"
                          } `}
                        >
                          {buttonTextTwo}
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
                {templateM && templateM !== "2" ? (
                  <div className={selectCta == "2" ? "ctaArea" : ""}>
                    {buttonTextOne ? (
                      buttonTextOne.length < 15 ? (
                        <a
                          href={buttonLinkOne}
                          target="_blank"
                          className={`button ${
                            buttonColorOne == "Dark"
                              ? "darkbutton"
                              : "lightbutton"
                          } `}
                        >
                          {buttonTextOne}
                        </a>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}

                    {selectCta == "2" &&
                    buttonTextTwo.length < 15 &&
                    buttonTextTwo ? (
                      <a
                        href={buttonLinkTwo}
                        target="_blank"
                        className={`button ${
                          buttonColorTwo == "Dark"
                            ? "darkbutton"
                            : "lightbutton"
                        } `}
                      >
                        {buttonTextTwo}
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
              {templateM == "2" ? (
                <div
                  className={`temp2Cta ${selectCta == "2" ? "ctaArea" : ""}`}
                >
                  {buttonTextOne ? (
                    buttonTextOne.length < 15 ? (
                      <a
                        href={buttonLinkOne}
                        target="_blank"
                        className={`button ${
                          buttonColorOne == "Dark"
                            ? "darkbutton"
                            : "lightbutton"
                        } `}
                      >
                        {buttonTextOne}
                      </a>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}

                  {selectCta == "2" &&
                  buttonTextTwo.length < 15 &&
                  buttonTextTwo ? (
                    <a
                      href={buttonLinkTwo}
                      target="_blank"
                      className={`button ${
                        buttonColorTwo == "Dark" ? "darkbutton" : "lightbutton"
                      } `}
                    >
                      {buttonTextTwo}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {disclaimerleftTxt && templateM !== "0" ? (
            disclaimerleftTxt.length < 18 ? (
              <div
                className="leftDisclimar themeColor"
                style={{
                  fontWeight:
                    disclaimerleftTxtFontWeight == "bold" ? "700" : "400",
                  color: disclaimerleftTxtColor == "Dark" ? "#000" : "#fff",
                }}
              >
                {disclaimerleftTxt}
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {disclaimerrightTxt && templateM !== "0" ? (
            disclaimerrightTxt.length < 18 ? (
              <div
                className="rightDisclimar themeColor"
                style={{
                  fontWeight:
                    disclaimerrightTxtFontWeight == "bold" ? "700" : "400",
                  color: disclaimerrightTxtColor == "Dark" ? "#000" : "#fff",
                }}
              >
                {disclaimerrightTxt}
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      )}
    </a>
  );
};

export default PreviewBanner;

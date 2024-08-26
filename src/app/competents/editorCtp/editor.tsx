import React, { useState, useEffect } from "react";
import FormInput from "../layout/FormInput";
interface FormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  id: string;
  device: string;
  selectlayout: string;
  selectCampaign: string;
  campaign: string;
  campaignTime: string;
  themeMode: string;
  imageLink: string;
  height: string;
  trustpilot: string;
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
  headline: string;
  textcolorheadline: string;
  subheadline: string;
  textcolorsubheadline: string;
}

const EditorCtp: React.FC<FormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    device: "Desktop",
    selectlayout: "",
    selectCampaign: "",
    campaignTime: "",
    campaign: "",
    themeMode: "",
    imageLink: "",
    height: "",
    backgroundColorStrip: "",
    date: "",
    backgroundColorCounter: "",
    txtColorCounter: "",
    trustpilot: "",
    checkactive: "false",
    txtColorCountertwo: "",
    txtColorCounterthree: "",
    datethree: "",
    backgroundColorCounterthree: "",
    checkactivethree: "false",
    datetwo: "",
    backgroundColorCountertwo: "",
    checkactivetwo: "false",
    select: "1",
    linetext: "",
    selectDsicountType: "Percentage",
    discountValue: "",
    code: "",
    mdHeadline: "",
    mdContent: "",
    generalDisclamier: "",
    linetexttwo: "",
    selectDsicountTypeTwo: "Percentage",
    discountValueTwo: "",
    codeTwo: "",
    mdHeadlineTwo: "",
    mdContentTwo: "",
    linetextthree: "",
    selectDsicountTypeThree: "Percentage",
    discountValueThree: "",
    codeThree: "",
    mdHeadlineThree: "",
    mdContentThree: "",
    headline: "",
    textcolorheadline: "",
    subheadline: "",
    textcolorsubheadline: "",
    mdsaleName: "",
  });
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      onFormSubmit(formData);
    }
  }, [formData, onFormSubmit]);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form className="editorLayout" onSubmit={handleSubmit}>
      <FormInput
        label="Devices"
        value={formData.device}
        onChange={(value) => handleInputChange("device", value)}
        type="radio"
        id="DeviceType"
        classN="toggleType"
        options={[
          {
            value: "Desktop",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M6 17.5V16H8V14H1.8077C1.30257 14 0.875 13.825 0.525 13.475C0.175 13.125 0 12.6974 0 12.1923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H17.1923C17.6974 0.5 18.125 0.675 18.475 1.025C18.825 1.375 19 1.80257 19 2.3077V12.1923C19 12.6974 18.825 13.125 18.475 13.475C18.125 13.825 17.6974 14 17.1923 14H11V16H13V17.5H6ZM1.8077 12.5H17.1923C17.2692 12.5 17.3397 12.468 17.4038 12.4039C17.4679 12.3398 17.5 12.2692 17.5 12.1923V2.3077C17.5 2.23077 17.4679 2.16024 17.4038 2.09613C17.3397 2.03203 17.2692 1.99998 17.1923 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49998 2.23077 1.49998 2.3077V12.1923C1.49998 12.2692 1.53202 12.3398 1.59613 12.4039C1.66024 12.468 1.73077 12.5 1.8077 12.5Z" fill="#2196F3"/>
            </svg>`,
          },
          {
            value: "Mobile",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
            <path d="M2.75 7.49995V5.99998H10.25V7.49995H2.75ZM1.8077 21.5C1.30257 21.5 0.875 21.325 0.525 20.975C0.175 20.625 0 20.1974 0 19.6923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H11.1922C11.6974 0.5 12.125 0.675 12.475 1.025C12.825 1.375 13 1.80257 13 2.3077V19.6923C13 20.1974 12.825 20.625 12.475 20.975C12.125 21.325 11.6974 21.5 11.1922 21.5H1.8077ZM1.49997 18.75V19.6923C1.49997 19.7692 1.53202 19.8397 1.59613 19.9038C1.66024 19.9679 1.73077 20 1.8077 20H11.1922C11.2692 20 11.3397 19.9679 11.4038 19.9038C11.4679 19.8397 11.5 19.7692 11.5 19.6923V18.75H1.49997ZM1.49997 17.25H11.5V4.74995H1.49997V17.25ZM1.49997 3.25H11.5V2.3077C11.5 2.23077 11.4679 2.16024 11.4038 2.09613C11.3397 2.03203 11.2692 1.99998 11.1922 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49997 2.23077 1.49997 2.3077V3.25Z" fill="#2196F3"/>
          </svg>`,
          },
        ]}
      />
      {/* <FormInput
        label="Layout"
        value={formData.selectlayout}
        onChange={(value) => handleInputChange("selectlayout", value)}
        type="select"
        classN="layoutSelect"
        options={[
          {
            value: "Narrow",
            text: "Narrow",
          },
          {
            value: "Wide",
            text: "Wide",
          },
        ]}
      /> */}
      <FormInput
        label="Campaign"
        value={formData.selectCampaign}
        onChange={(value) => handleInputChange("selectCampaign", value)}
        type="select"
        classN="layoutSelect"
        options={[
          {
            value: "Default",
            text: "Default",
          },
          {
            value: "Paramter",
            text: "Paramter",
          },
        ]}
      />
      {formData.selectCampaign == "Paramter" ? (
        <>
          <FormInput
            label="Campaign duration"
            value={formData.campaignTime}
            onChange={(value) => handleInputChange("campaignTime", value)}
            type="number"
            classN="campaignTime"
            max="100"
            min="0"
          />
          <FormInput
            label="Campaign Name"
            value={formData.campaign}
            onChange={(value) => handleInputChange("campaign", value)}
            type="text"
            classN="inputLineText"
            placeholder="Campaign Name"
          />
        </>
      ) : (
        ""
      )}

      <div className="optionStripBanner">
        <div className="title">CMS strip</div>
        <div className="innerDiv">
          <div className="LayoutTemplate">
            <FormInput
              label="Dark/light mode"
              value={formData.themeMode}
              onChange={(value) => handleInputChange("themeMode", value)}
              type="radio"
              id="themeMode"
              classN="Theme"
              options={[
                {
                  value: "Light",
                },
                {
                  value: "Dark",
                },
              ]}
            />
            <FormInput
              label="Background color"
              value={formData.backgroundColorStrip}
              onChange={(value) =>
                handleInputChange("backgroundColorStrip", value)
              }
              type="color"
              id="backgroundColor"
              backgroundColor={formData.backgroundColorStrip}
            />

            <FormInput
              label="Number of Offers"
              value={formData.select}
              onChange={(value) => handleInputChange("select", value)}
              type="select"
              classN="event"
              options={[
                {
                  value: "1",
                  text: "1",
                },
                {
                  value: "2",
                  text: "2",
                },
                {
                  value: "3",
                  text: "3",
                },
              ]}
            />
            <div className="offer">
              <div className="titleBold fpt">Offer strip 1:</div>
              <FormInput
                label=""
                value={formData.linetext}
                onChange={(value) => handleInputChange("linetext", value)}
                type="text"
                classN="inputLineText"
                placeholder="Offer"
              />
              <FormInput
                label=""
                value={formData.code}
                onChange={(value) => handleInputChange("code", value)}
                type="text"
                classN="inputLineText"
                placeholder="Code"
              />
              <FormInput
                label="Discount Type"
                value={formData.selectDsicountType}
                onChange={(value) =>
                  handleInputChange("selectDsicountType", value)
                }
                type="select"
                classN="layoutSelect"
                options={[
                  {
                    value: "Percentage",
                    text: "Percentage",
                  },
                  {
                    value: "Bogo",
                    text: "Bogo",
                  },
                ]}
              />
              {formData.selectDsicountType === "Percentage" ? (
                <>
                  <FormInput
                    label="Discount Value"
                    value={formData.discountValue}
                    onChange={(value) =>
                      handleInputChange("discountValue", value)
                    }
                    type="number"
                    classN="campaignTime"
                    max="100"
                    min="0"
                  />
                </>
              ) : (
                ""
              )}

              <FormInput
                label=""
                value={formData.mdHeadline}
                onChange={(value) => handleInputChange("mdHeadline", value)}
                type="text"
                classN="inputLineText"
                placeholder="Details - headline"
              />
              <FormInput
                label=""
                value={formData.mdContent}
                onChange={(value) => handleInputChange("mdContent", value)}
                type="text"
                classN="inputLineText"
                placeholder="Details - Offer Disclamier "
              />
            </div>
            <div className="counterFlex">
              <FormInput
                label="counter"
                value={formData.checkactive}
                onChange={() => {
                  const newValue =
                    formData.checkactive === "true" ? "false" : "true";
                  handleInputChange("checkactive", newValue);
                }}
                type="checkbox"
                classN="checkactive pr"
              />
              <div
                className={`pickerDate ${
                  formData.checkactive == "true" ? "activePicker" : ""
                }`}
              >
                <div className="disabled">
                  <div className="maskHide"></div>
                  <FormInput
                    label="Counter"
                    value={formData.date}
                    onChange={(value) => handleInputChange("date", value)}
                    type="date"
                    classN="inputCounter"
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_280_2692)">
                    <path
                      d="M8.2 9.6C7.97333 9.6 7.78347 9.5232 7.6304 9.3696C7.4768 9.21653 7.4 9.02667 7.4 8.8C7.4 8.57333 7.4768 8.3832 7.6304 8.2296C7.78347 8.07653 7.97333 8 8.2 8C8.42667 8 8.6168 8.07653 8.7704 8.2296C8.92347 8.3832 9 8.57333 9 8.8C9 9.02667 8.92347 9.21653 8.7704 9.3696C8.6168 9.5232 8.42667 9.6 8.2 9.6ZM5 9.6C4.77333 9.6 4.5832 9.5232 4.4296 9.3696C4.27653 9.21653 4.2 9.02667 4.2 8.8C4.2 8.57333 4.27653 8.3832 4.4296 8.2296C4.5832 8.07653 4.77333 8 5 8C5.22667 8 5.4168 8.07653 5.5704 8.2296C5.72347 8.3832 5.8 8.57333 5.8 8.8C5.8 9.02667 5.72347 9.21653 5.5704 9.3696C5.4168 9.5232 5.22667 9.6 5 9.6ZM11.4 9.6C11.1733 9.6 10.9835 9.5232 10.8304 9.3696C10.6768 9.21653 10.6 9.02667 10.6 8.8C10.6 8.57333 10.6768 8.3832 10.8304 8.2296C10.9835 8.07653 11.1733 8 11.4 8C11.6267 8 11.8165 8.07653 11.9696 8.2296C12.1232 8.3832 12.2 8.57333 12.2 8.8C12.2 9.02667 12.1232 9.21653 11.9696 9.3696C11.8165 9.5232 11.6267 9.6 11.4 9.6ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.2C1 2.76 1.15653 2.38347 1.4696 2.0704C1.7832 1.7568 2.16 1.6 2.6 1.6H3.4V0H5V1.6H11.4V0H13V1.6H13.8C14.24 1.6 14.6168 1.7568 14.9304 2.0704C15.2435 2.38347 15.4 2.76 15.4 3.2V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.4H2.6V14.4Z"
                      fill="#AAAAAA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_280_2692">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {formData.checkactive === "true" ? (
              <>
                <FormInput
                  label="Background Color Counter"
                  value={formData.backgroundColorCounter}
                  onChange={(value) =>
                    handleInputChange("backgroundColorCounter", value)
                  }
                  type="color"
                  id="backgroundColor"
                  backgroundColor={formData.backgroundColorCounter}
                  classN=""
                />
                <FormInput
                  label="Text Color Counter"
                  value={formData.txtColorCounter}
                  onChange={(value) =>
                    handleInputChange("txtColorCounter", value)
                  }
                  type="color"
                  id="backgroundColor"
                  backgroundColor={formData.txtColorCounter}
                  classN=""
                />
              </>
            ) : (
              ""
            )}

            {formData.select === "2" && (
              <>
                <div className="offer">
                  <div className="titleBold">Offer strip 2:</div>
                  <FormInput
                    label=""
                    value={formData.linetexttwo}
                    onChange={(value) =>
                      handleInputChange("linetexttwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Offer"
                  />
                  <FormInput
                    label=""
                    value={formData.codeTwo}
                    onChange={(value) => handleInputChange("codeTwo", value)}
                    type="text"
                    classN="inputLineText"
                    placeholder="Code"
                  />
                  <FormInput
                    label="Discount Type"
                    value={formData.selectDsicountTypeTwo}
                    onChange={(value) =>
                      handleInputChange("selectDsicountTypeTwo", value)
                    }
                    type="select"
                    classN="layoutSelect"
                    options={[
                      {
                        value: "Percentage",
                        text: "Percentage",
                      },
                      {
                        value: "Bogo",
                        text: "Bogo",
                      },
                    ]}
                  />
                  {formData.selectDsicountTypeTwo === "Percentage" ? (
                    <>
                      <FormInput
                        label="Discount Value"
                        value={formData.discountValueTwo}
                        onChange={(value) =>
                          handleInputChange("discountValueTwo", value)
                        }
                        type="number"
                        classN="campaignTime"
                        max="100"
                        min="0"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <FormInput
                    label=""
                    value={formData.mdHeadlineTwo}
                    onChange={(value) =>
                      handleInputChange("mdHeadlineTwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Details - headline"
                  />
                  <FormInput
                    label=""
                    value={formData.mdContentTwo}
                    onChange={(value) =>
                      handleInputChange("mdContentTwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Details - Offer Disclamier"
                  />
                </div>
                <div className="counterFlex">
                  <FormInput
                    label="counter"
                    value={formData.checkactivetwo}
                    onChange={() => {
                      const newValue =
                        formData.checkactivetwo === "true" ? "false" : "true";
                      handleInputChange("checkactivetwo", newValue);
                    }}
                    type="checkbox"
                    classN="checkactive pr"
                  />
                  <div
                    className={`pickerDate ${
                      formData.checkactivetwo == "true" ? "activePicker" : ""
                    }`}
                  >
                    <div className="disabled">
                      <div className="maskHide"></div>
                      <FormInput
                        label="Counter"
                        value={formData.datetwo}
                        onChange={(value) =>
                          handleInputChange("datetwo", value)
                        }
                        type="date"
                        classN="inputCounter"
                      />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_280_2692)">
                        <path
                          d="M8.2 9.6C7.97333 9.6 7.78347 9.5232 7.6304 9.3696C7.4768 9.21653 7.4 9.02667 7.4 8.8C7.4 8.57333 7.4768 8.3832 7.6304 8.2296C7.78347 8.07653 7.97333 8 8.2 8C8.42667 8 8.6168 8.07653 8.7704 8.2296C8.92347 8.3832 9 8.57333 9 8.8C9 9.02667 8.92347 9.21653 8.7704 9.3696C8.6168 9.5232 8.42667 9.6 8.2 9.6ZM5 9.6C4.77333 9.6 4.5832 9.5232 4.4296 9.3696C4.27653 9.21653 4.2 9.02667 4.2 8.8C4.2 8.57333 4.27653 8.3832 4.4296 8.2296C4.5832 8.07653 4.77333 8 5 8C5.22667 8 5.4168 8.07653 5.5704 8.2296C5.72347 8.3832 5.8 8.57333 5.8 8.8C5.8 9.02667 5.72347 9.21653 5.5704 9.3696C5.4168 9.5232 5.22667 9.6 5 9.6ZM11.4 9.6C11.1733 9.6 10.9835 9.5232 10.8304 9.3696C10.6768 9.21653 10.6 9.02667 10.6 8.8C10.6 8.57333 10.6768 8.3832 10.8304 8.2296C10.9835 8.07653 11.1733 8 11.4 8C11.6267 8 11.8165 8.07653 11.9696 8.2296C12.1232 8.3832 12.2 8.57333 12.2 8.8C12.2 9.02667 12.1232 9.21653 11.9696 9.3696C11.8165 9.5232 11.6267 9.6 11.4 9.6ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.2C1 2.76 1.15653 2.38347 1.4696 2.0704C1.7832 1.7568 2.16 1.6 2.6 1.6H3.4V0H5V1.6H11.4V0H13V1.6H13.8C14.24 1.6 14.6168 1.7568 14.9304 2.0704C15.2435 2.38347 15.4 2.76 15.4 3.2V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.4H2.6V14.4Z"
                          fill="#AAAAAA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_280_2692">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                {formData.checkactivetwo === "true" ? (
                  <>
                    <FormInput
                      label="Background Color Counter"
                      value={formData.backgroundColorCountertwo}
                      onChange={(value) =>
                        handleInputChange("backgroundColorCountertwo", value)
                      }
                      type="color"
                      id="backgroundColor"
                      backgroundColor={formData.backgroundColorCountertwo}
                      classN=""
                    />
                    <FormInput
                      label="Text Color Counter"
                      value={formData.txtColorCountertwo}
                      onChange={(value) =>
                        handleInputChange("txtColorCountertwo", value)
                      }
                      type="color"
                      id="backgroundColor"
                      backgroundColor={formData.txtColorCountertwo}
                      classN=""
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            )}
            {formData.select === "3" ? (
              <>
                <div className="offer">
                  <div className="titleBold">Offer strip 2:</div>
                  <FormInput
                    label=""
                    value={formData.linetexttwo}
                    onChange={(value) =>
                      handleInputChange("linetexttwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Offer"
                  />
                  <FormInput
                    label=""
                    value={formData.codeTwo}
                    onChange={(value) => handleInputChange("codeTwo", value)}
                    type="text"
                    classN="inputLineText"
                    placeholder="Code"
                  />
                  <FormInput
                    label="Discount Type"
                    value={formData.selectDsicountTypeTwo}
                    onChange={(value) =>
                      handleInputChange("selectDsicountTypeTwo", value)
                    }
                    type="select"
                    classN="layoutSelect"
                    options={[
                      {
                        value: "Percentage",
                        text: "Percentage",
                      },
                      {
                        value: "Bogo",
                        text: "Bogo",
                      },
                    ]}
                  />
                  {formData.selectDsicountTypeTwo === "Percentage" ? (
                    <>
                      <FormInput
                        label="Discount Value"
                        value={formData.discountValueTwo}
                        onChange={(value) =>
                          handleInputChange("discountValueTwo", value)
                        }
                        type="number"
                        classN="campaignTime"
                        max="100"
                        min="0"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <FormInput
                    label=""
                    value={formData.mdHeadlineTwo}
                    onChange={(value) =>
                      handleInputChange("mdHeadlineTwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Details - headline"
                  />
                  <FormInput
                    label=""
                    value={formData.mdContentTwo}
                    onChange={(value) =>
                      handleInputChange("mdContentTwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Details - Offer Disclamier"
                  />
                </div>
                <div className="counterFlex">
                  <FormInput
                    label="counter"
                    value={formData.checkactivetwo}
                    onChange={() => {
                      const newValue =
                        formData.checkactivetwo === "true" ? "false" : "true";
                      handleInputChange("checkactivetwo", newValue);
                    }}
                    type="checkbox"
                    classN="checkactive pr"
                  />
                  <div
                    className={`pickerDate ${
                      formData.checkactivetwo == "true" ? "activePicker" : ""
                    }`}
                  >
                    <div className="disabled">
                      <div className="maskHide"></div>
                      <FormInput
                        label="Counter"
                        value={formData.datetwo}
                        onChange={(value) =>
                          handleInputChange("datetwo", value)
                        }
                        type="date"
                        classN="inputCounter"
                      />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_280_2692)">
                        <path
                          d="M8.2 9.6C7.97333 9.6 7.78347 9.5232 7.6304 9.3696C7.4768 9.21653 7.4 9.02667 7.4 8.8C7.4 8.57333 7.4768 8.3832 7.6304 8.2296C7.78347 8.07653 7.97333 8 8.2 8C8.42667 8 8.6168 8.07653 8.7704 8.2296C8.92347 8.3832 9 8.57333 9 8.8C9 9.02667 8.92347 9.21653 8.7704 9.3696C8.6168 9.5232 8.42667 9.6 8.2 9.6ZM5 9.6C4.77333 9.6 4.5832 9.5232 4.4296 9.3696C4.27653 9.21653 4.2 9.02667 4.2 8.8C4.2 8.57333 4.27653 8.3832 4.4296 8.2296C4.5832 8.07653 4.77333 8 5 8C5.22667 8 5.4168 8.07653 5.5704 8.2296C5.72347 8.3832 5.8 8.57333 5.8 8.8C5.8 9.02667 5.72347 9.21653 5.5704 9.3696C5.4168 9.5232 5.22667 9.6 5 9.6ZM11.4 9.6C11.1733 9.6 10.9835 9.5232 10.8304 9.3696C10.6768 9.21653 10.6 9.02667 10.6 8.8C10.6 8.57333 10.6768 8.3832 10.8304 8.2296C10.9835 8.07653 11.1733 8 11.4 8C11.6267 8 11.8165 8.07653 11.9696 8.2296C12.1232 8.3832 12.2 8.57333 12.2 8.8C12.2 9.02667 12.1232 9.21653 11.9696 9.3696C11.8165 9.5232 11.6267 9.6 11.4 9.6ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.2C1 2.76 1.15653 2.38347 1.4696 2.0704C1.7832 1.7568 2.16 1.6 2.6 1.6H3.4V0H5V1.6H11.4V0H13V1.6H13.8C14.24 1.6 14.6168 1.7568 14.9304 2.0704C15.2435 2.38347 15.4 2.76 15.4 3.2V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.4H2.6V14.4Z"
                          fill="#AAAAAA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_280_2692">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                {formData.checkactivetwo === "true" ? (
                  <>
                    <FormInput
                      label="Background Color Counter"
                      value={formData.backgroundColorCountertwo}
                      onChange={(value) =>
                        handleInputChange("backgroundColorCountertwo", value)
                      }
                      type="color"
                      id="backgroundColor"
                      backgroundColor={formData.backgroundColorCountertwo}
                      classN=""
                    />
                    <FormInput
                      label="Text Color Counter"
                      value={formData.txtColorCountertwo}
                      onChange={(value) =>
                        handleInputChange("txtColorCountertwo", value)
                      }
                      type="color"
                      id="backgroundColor"
                      backgroundColor={formData.txtColorCountertwo}
                      classN=""
                    />
                  </>
                ) : (
                  ""
                )}
                <div className="offer">
                  <div className="titleBold">Offer strip 3:</div>
                  <FormInput
                    label=""
                    value={formData.linetextthree}
                    onChange={(value) =>
                      handleInputChange("linetextthree", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Offer"
                  />
                  <FormInput
                    label=""
                    value={formData.codeThree}
                    onChange={(value) => handleInputChange("codeThree", value)}
                    type="text"
                    classN="inputLineText"
                    placeholder="Code"
                  />
                  <FormInput
                    label="Discount Type"
                    value={formData.selectDsicountTypeThree}
                    onChange={(value) =>
                      handleInputChange("selectDsicountTypeThree", value)
                    }
                    type="select"
                    classN="layoutSelect"
                    options={[
                      {
                        value: "Percentage",
                        text: "Percentage",
                      },
                      {
                        value: "Bogo",
                        text: "Bogo",
                      },
                    ]}
                  />
                  {formData.selectDsicountTypeThree === "Percentage" ? (
                    <>
                      <FormInput
                        label="Discount Value"
                        value={formData.discountValueThree}
                        onChange={(value) =>
                          handleInputChange("discountValueThree", value)
                        }
                        type="number"
                        classN="campaignTime"
                        max="100"
                        min="0"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <FormInput
                    label=""
                    value={formData.mdHeadlineThree}
                    onChange={(value) =>
                      handleInputChange("mdHeadlineThree", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Details - headline"
                  />
                  <FormInput
                    label=""
                    value={formData.mdContentThree}
                    onChange={(value) =>
                      handleInputChange("mdContentThree", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="Details - Offer Disclamier"
                  />
                </div>
                <div className="counterFlex">
                  <FormInput
                    label="counter"
                    value={formData.checkactivethree}
                    onChange={() => {
                      const newValue =
                        formData.checkactivethree === "true" ? "false" : "true";
                      handleInputChange("checkactivethree", newValue);
                    }}
                    type="checkbox"
                    classN="checkactive pr"
                  />
                  <div
                    className={`pickerDate ${
                      formData.checkactivethree == "true" ? "activePicker" : ""
                    }`}
                  >
                    <div className="disabled">
                      <div className="maskHide"></div>
                      <FormInput
                        label="Counter"
                        value={formData.datethree}
                        onChange={(value) =>
                          handleInputChange("datethree", value)
                        }
                        type="date"
                        classN="inputCounter"
                      />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_280_2692)">
                        <path
                          d="M8.2 9.6C7.97333 9.6 7.78347 9.5232 7.6304 9.3696C7.4768 9.21653 7.4 9.02667 7.4 8.8C7.4 8.57333 7.4768 8.3832 7.6304 8.2296C7.78347 8.07653 7.97333 8 8.2 8C8.42667 8 8.6168 8.07653 8.7704 8.2296C8.92347 8.3832 9 8.57333 9 8.8C9 9.02667 8.92347 9.21653 8.7704 9.3696C8.6168 9.5232 8.42667 9.6 8.2 9.6ZM5 9.6C4.77333 9.6 4.5832 9.5232 4.4296 9.3696C4.27653 9.21653 4.2 9.02667 4.2 8.8C4.2 8.57333 4.27653 8.3832 4.4296 8.2296C4.5832 8.07653 4.77333 8 5 8C5.22667 8 5.4168 8.07653 5.5704 8.2296C5.72347 8.3832 5.8 8.57333 5.8 8.8C5.8 9.02667 5.72347 9.21653 5.5704 9.3696C5.4168 9.5232 5.22667 9.6 5 9.6ZM11.4 9.6C11.1733 9.6 10.9835 9.5232 10.8304 9.3696C10.6768 9.21653 10.6 9.02667 10.6 8.8C10.6 8.57333 10.6768 8.3832 10.8304 8.2296C10.9835 8.07653 11.1733 8 11.4 8C11.6267 8 11.8165 8.07653 11.9696 8.2296C12.1232 8.3832 12.2 8.57333 12.2 8.8C12.2 9.02667 12.1232 9.21653 11.9696 9.3696C11.8165 9.5232 11.6267 9.6 11.4 9.6ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.2C1 2.76 1.15653 2.38347 1.4696 2.0704C1.7832 1.7568 2.16 1.6 2.6 1.6H3.4V0H5V1.6H11.4V0H13V1.6H13.8C14.24 1.6 14.6168 1.7568 14.9304 2.0704C15.2435 2.38347 15.4 2.76 15.4 3.2V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.4H2.6V14.4Z"
                          fill="#AAAAAA"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_280_2692">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                {formData.checkactivethree === "true" ? (
                  <>
                    <FormInput
                      label="Background Color Counter"
                      value={formData.backgroundColorCounterthree}
                      onChange={(value) =>
                        handleInputChange("backgroundColorCounterthree", value)
                      }
                      type="color"
                      id="backgroundColor"
                      backgroundColor={formData.backgroundColorCounterthree}
                      classN=""
                    />
                    <FormInput
                      label="Text Color Counter"
                      value={formData.txtColorCounterthree}
                      onChange={(value) =>
                        handleInputChange("txtColorCountertwo", value)
                      }
                      type="color"
                      id="backgroundColor"
                      backgroundColor={formData.txtColorCounterthree}
                      classN=""
                    />
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </div>
          {formData.select == "1" ? (
            ""
          ) : (
            <div className="offer">
              <div className="titleBold">General Disclamier:</div>
              <FormInput
                label=""
                value={formData.generalDisclamier}
                onChange={(value) =>
                  handleInputChange("generalDisclamier", value)
                }
                type="text"
                classN="inputLineText"
                placeholder="Details - General Disclamier"
              />
            </div>
          )}
          <div className="offer">
            <div className="titleBold">Sale Name:</div>
            <FormInput
              label=""
              value={formData.mdsaleName}
              onChange={(value) => handleInputChange("mdsaleName", value)}
              type="text"
              classN="inputLineText"
              placeholder="Details - Sale name"
            />
          </div>
        </div>

        <div className="innerInputs"></div>
      </div>

      <div className="optionStripBanner">
        <div className="title">Banner</div>
        <div className="innerDiv">
          <div className="LayoutTemplate">
            <FormInput
              label="Image link"
              value={formData.imageLink}
              onChange={(value) => handleInputChange("imageLink", value)}
              type="text"
              classN="inputLineText"
              placeholder=""
            />
            {formData.device == "Desktop" ? (
              <FormInput
                label="Height"
                value={formData.height}
                onChange={(value) => handleInputChange("height", value)}
                type="select"
                classN="layoutSelect"
                options={[
                  {
                    value: "Large",
                    text: "Large",
                  },
                  {
                    value: "Small",
                    text: "Small",
                  },
                ]}
              />
            ) : (
              ""
            )}

            <FormInput
              label="Trustpilot strip"
              value={formData.trustpilot}
              onChange={() => {
                const newValue =
                  formData.trustpilot === "true" ? "false" : "true";
                handleInputChange("trustpilot", newValue);
              }}
              type="checkbox"
              classN="pr trustCheck"
            />

            <div className="labelTxt pb">Banner Headline:</div>
            <div className="areaOftext">
              <FormInput
                label=""
                value={formData.headline}
                onChange={(value) => handleInputChange("headline", value)}
                type="text"
                classN="inputLineText pr"
                placeholder=""
              />
              <FormInput
                label=""
                value={formData.textcolorheadline}
                onChange={(value) =>
                  handleInputChange("textcolorheadline", value)
                }
                type="color"
                id="backgroundColor"
                backgroundColor={formData.textcolorheadline}
              />
            </div>
            <div className="labelTxt pt">Banner Subheadline:</div>
            <div className="areaOftext">
              <FormInput
                label=""
                value={formData.subheadline}
                onChange={(value) => handleInputChange("subheadline", value)}
                type="text"
                classN="inputLineText pr"
                placeholder=""
              />
              <FormInput
                label=""
                value={formData.textcolorsubheadline}
                onChange={(value) =>
                  handleInputChange("textcolorsubheadline", value)
                }
                type="color"
                id="backgroundColor"
                backgroundColor={formData.textcolorsubheadline}
              />
            </div>
          </div>
        </div>
        <div className="innerInputs"></div>
      </div>

      {/* <>
        <div className="ContainerOfInputs UniqueSpaceCounter">
          <div className="title">Text</div>
          <div className="innerDiv">
            <FormInput
              label="Number of lines text"
              value={formData.select}
              onChange={(value) => handleInputChange("select", value)}
              type="select"
              classN="event"
              options={[
                {
                  value: "1",
                  text: "1",
                },
                {
                  value: "2",
                  text: "2",
                },
                {
                  value: "3",
                  text: "3",
                },
              ]}
            />

            <div className="areaofContent">
              <FormInput
                label=""
                value={formData.linetext}
                onChange={(value) => handleInputChange("linetext", value)}
                type="text"
                classN="inputLineText"
                placeholder="line 1"
              />
            </div>
            <div className="areaofContent spaceLeft"></div>
            {formData.select === "2" && (
              <>
                <div className="areaofContent">
                  <FormInput
                    label=""
                    value={formData.linetexttwo}
                    onChange={(value) =>
                      handleInputChange("linetexttwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="line 2"
                  />
                </div>
              </>
            )}
            {formData.select === "3" && (
              <>
                <div className="areaofContent">
                  <FormInput
                    label=""
                    value={formData.linetexttwo}
                    onChange={(value) =>
                      handleInputChange("linetexttwo", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="line 2"
                  />
                </div>
                <div className="areaofContent">
                  <FormInput
                    label=""
                    value={formData.linetextthree}
                    onChange={(value) =>
                      handleInputChange("linetextthree", value)
                    }
                    type="text"
                    classN="inputLineText"
                    placeholder="line 3"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </> */}
    </form>
  );
};

export default EditorCtp;

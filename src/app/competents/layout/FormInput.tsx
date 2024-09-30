import React, { useEffect, useState } from "react";

interface FormInputProps {
  id?: string;
  classN?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  options?: { value: string; svg?: string; text?: string }[];
  backgroundColor?: string;
  placeholder?: string;
  max?: string;
  min?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  classN,
  label,
  value,
  onChange,
  type,
  options,
  backgroundColor,
  placeholder,
  max,
  min,
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const activeType = () => {
    const selectType = document.querySelector(`#${id} .select`);
    const selectTypeSVG = document.querySelector(`#${id} .opacitylayer`);
    selectType?.classList.toggle("activeSelected");
    selectTypeSVG?.classList.toggle("activeSelected");
  };

  const activeTypeTheme = (value: string) => {
    const ThemeContainer = document.querySelector(`.Theme#${id}`);
    if (value == "Dark") {
      ThemeContainer?.classList.add("activeCotainer");
    } else {
      ThemeContainer?.classList.remove("activeCotainer");
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contentPosition = (_value: string) => {
    const contentPositions = document.querySelectorAll(`#${id} .postion`);
    contentPositions?.forEach((position) => {
      const positionValue = position.querySelector("input")?.value;
      const isActive = positionValue === activeTab;
      position.classList.toggle("activeTabPos", isActive);
    });
  };
  const [isActive, setActive] = useState(false);

  const activeTabHandler = (value: string) => {
    setActiveTab(value);
    contentPosition(value);
  };

  useEffect(() => {
    setActiveTab(value);
    contentPosition(value);
  }, [contentPosition, value, id, activeTab]);
  const handleDecrease = () => {
    const currentValue = parseFloat(value);
    const newValue = isNaN(currentValue)
      ? 0
      : currentValue <= 0
      ? ""
      : currentValue - 1;
    onChange(newValue.toString());
  };
  const handleIncrease = () => {
    const currentValue = parseFloat(value);
    const newValue = isNaN(currentValue)
      ? 0
      : currentValue >= 50
      ? "50"
      : currentValue + 1;
    onChange(newValue.toString());
  };

  return (
    <div className="form-input">
      {classN == "layoutTemplateArea" ? (
        ""
      ) : (
        <label
          className={`labelTxt ${label && label !== "counter" ? "pr" : ""}`}
        >
          {label && label !== "counter" ? label + ":" : ""}
        </label>
      )}
      {type === "radio" ? (
        <div className={`${classN}`} id={`${id}`}>
          {options?.map((option) => (
            <label
              className={`areaOfType  ${
                (activeTab === option.value &&
                  classN === "layoutTemplateArea") ||
                (option === options[0] &&
                  !activeTab &&
                  id !== "Theme" &&
                  id !== "Contentposition" &&
                  id !== "backgroundPostion")
                  ? "activeTemplate"
                  : ""
              }${id == "Contentposition" ? "postion" : ""} ${
                id == "backgroundPostion" ? "postion" : ""
              }`}
              key={option.value}
            >
              <div className={`areaTypeTemp-${option.value}`}>
                <input
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => {
                    onChange(option.value);
                    {
                      classN === "toggleType" || classN === "toggleTypefWeight"
                        ? activeType()
                        : "";
                    }
                    {
                      classN === "Theme" ? activeTypeTheme(option.value) : "";
                    }
                    {
                      id == "Contentposition" || "backgroundPostion"
                        ? contentPosition(option.value)
                        : "";
                    }
                    classN === "layoutTemplateArea" &&
                      activeTabHandler(option.value);
                  }}
                />

                <div
                  className={`${
                    classN == "Contentposition" || id === "backgroundPostion"
                      ? `${
                          option.value == options[0].value &&
                          !activeTab &&
                          "activeTabPos"
                        }`
                      : ""
                  }`}
                >
                  <span
                    className="areaOfinput"
                    dangerouslySetInnerHTML={{
                      __html: option.svg
                        ? option.svg.replace(/`/g, "'")
                        : classN === "toggleType"
                        ? option.value
                        : classN === "toggleTypefWeight"
                        ? option.text || ""
                        : "",
                    }}
                  />
                </div>
              </div>
              {id === "templateD" ? (
                <div className="NumberofTemplate">{option.text}</div>
              ) : (
                ""
              )}
              {classN === "Theme" ? (
                <span className={`themeMode ${option.value}`}>
                  {option.value}
                </span>
              ) : (
                ""
              )}
              {id === "templateM" ? (
                <div className={`NumberofTemplate width-${option.value}`}>
                  {option.text}
                </div>
              ) : (
                ""
              )}
            </label>
          ))}
          {classN === "toggleType" ? (
            <>
              <div className="select"></div>{" "}
              <div className="opacitylayer"></div>
            </>
          ) : (
            ""
          )}
          {classN === "toggleTypefWeight" ? <div className="select"></div> : ""}
          {classN == "Theme" ? <div className="BallSwitch"></div> : ""}
        </div>
      ) : type === "select" ? (
        <select
          value={value}
          className={`${classN} ${isActive ? "focused" : ""}`}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onClick={() => {
            setActive(!isActive);
          }}
          onBlur={() => {
            setActive(false);
          }}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {classN == "TextSizeSelect" ? option.value : option.text}
            </option>
          ))}
        </select>
      ) : (
        <>
          {type === "number" ? (
            <>
              <div className="arrowsCounterArea">
                <div className="arrow-btn plus" onClick={handleIncrease}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M9 5.5L5 0.5L1 5.5"
                      stroke="#AAAAAA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="arrow-btn minus" onClick={handleDecrease}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 0.5L5 5.5L9 0.5"
                      stroke="#AAAAAA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {type !== "textarea" ? (
            <input
              type={type}
              value={type === "number" && value === "" ? "0" : value}
              className={`inputText ${
                classN === "inputText" || "checkactive" ? classN : ""
              }
            `}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={classN === "inputLineText" ? placeholder : ""}
              max={max}
              min={min}
              style={
                classN === "mBottom" && parseInt(value) >= 10
                  ? { width: "70px" }
                  : {}
              }
            />
          ) : (
            <textarea
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              className={`textArea ${classN}`}
            ></textarea>
          )}
        </>
      )}
      {type === "number" && (
        <span
          className="pxValue"
          style={parseInt(value) >= 10 ? { right: "22px" } : { right: "22px" }}
        >
          {classN == "campaignTime" ? "" : "px"}
        </span>
      )}
      {type === "color" ? (
        <div className="areaOfColor">
          {backgroundColor ? backgroundColor : "#000000"}
        </div>
      ) : (
        backgroundColor
      )}
    </div>
  );
};

export default FormInput;

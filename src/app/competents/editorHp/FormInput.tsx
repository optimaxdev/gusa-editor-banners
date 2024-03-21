import React, { useEffect, useState } from "react";
import "./hpeditor.scss";

interface FormInputProps {
  id?: string;
  classN?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  options?: { value: string; svg?: string; text?: string }[];
  backgroundColor?: string;
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
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const activeType = () => {
    const selectType = document.querySelector(`#${id} .select`);
    if (selectType) {
      selectType.classList.toggle("activeSelected");
    }
  };
  const activeTypeTheme = () => {
    const ThemeContainer = document.querySelector(".Theme");
    ThemeContainer?.classList.toggle("activeCotainer");
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
  const checkBoxToActiveCounter = () => {
    const checkbox = document.querySelector(".checkactive");
    const inputDate = document.querySelector(".inputCounter");
    const pickerDate = document.querySelector(".pickerDate");
    if (checkbox) {
      inputDate?.toggleAttribute("disabled");
      pickerDate?.classList.toggle("activePicker");
    }
  };
  const activeTabHandler = (value: string) => {
    setActiveTab(value);
    contentPosition(value);
  };

  useEffect(() => {
    setActiveTab(value);
    contentPosition(value);
  }, [contentPosition, value, id, activeTab]);
  return (
    <div className="form-input">
      {classN == "layoutTemplateArea" ? (
        ""
      ) : (
        <label className={`labelTxt ${label ? "pr" : ""}`}>
          {" "}
          {label ? label + ":" : ""}{" "}
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
                      classN == "toggleType" ? activeType() : "";
                    }
                    {
                      id === "Theme" ? activeTypeTheme() : "";
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
              {id === "Theme" ? (
                <span className={`themeMode ${option.value}`}>
                  {option.value}{" "}
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
          {classN === "toggleType" ? <div className="select"></div> : ""}
          {id == "Theme" ? <div className="BallSwitch"></div> : ""}
        </div>
      ) : type === "select" ? (
        <select
          value={value}
          className="inputSelect"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          className={`inputText ${
            classN == "inputText" || "checkactive" ? (classN ? classN : "") : ""
          }`}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onClick={checkBoxToActiveCounter}
          disabled={classN === "inputCounter" ? true : false}
        />
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

/* eslint-disable react-hooks/exhaustive-deps */
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
  const contentPosition = (_value: string) => {
    const contentPositions = document.querySelectorAll(`#${id} .areaOfType`);

    contentPositions?.forEach((position) => {
      const positionValue = position.querySelector("input")?.value;
      if (positionValue === activeTab) {
        position.classList.add("activeTabPos");
      } else {
        position.classList.remove("activeTabPos");
      }
    });
  };

  const activeTabHandler = (value: string) => {
    setActiveTab(value);
    contentPosition(value);
  };

  useEffect(() => {
    setActiveTab(value);
    contentPosition(value);
  }, [contentPosition, value]);

  return (
    <div className="form-input">
      <label className="labelTxt">
        {classN == "layoutTemplateArea" ? "" : label + ":"}
      </label>
      {type === "radio" ? (
        <div className={`${classN}`} id={`${id}`}>
          {options?.map((option) => (
            <label
              className={`areaOfType  ${
                (activeTab === option.value &&
                  classN === "layoutTemplateArea") ||
                (option === options[0] && !activeTab && id !== "Theme")
                  ? "activeTemplate"
                  : ""
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
                    classN === "layoutTemplateArea" &&
                      activeTabHandler(option.value);
                    activeTabHandler(option.value);
                  }}
                />
                <span
                  className="areaOfinput"
                  dangerouslySetInnerHTML={{
                    __html: option.svg ? option.svg.replace(/`/g, "'") : "",
                  }}
                />
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
      ) : (
        <input
          type={type}
          value={value}
          className="inputText"
          onChange={(e) => onChange(e.target.value)}
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

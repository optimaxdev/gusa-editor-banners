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

  const activeTabHandler = (value: string) => {
    setActiveTab(value);
  };

  useEffect(() => {
    setActiveTab(value);
  }, [value]);

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
                (option === options[0] && !activeTab)
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
                    activeType();
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

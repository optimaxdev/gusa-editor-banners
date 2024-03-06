import React from "react";
import "./hpeditor.scss";

interface FormInputProps {
  id: string;
  classN: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  options?: { value: string; svg: string; text: string }[];
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  classN,
  label,
  value,
  onChange,
  type,
  options,
}) => {
  const activeType = () => {
    const selectType = document.querySelector(`#${id} .select`);
    if (selectType) {
      selectType.classList.toggle("activeSelected");
    }
  };
  const activeTab = (event: React.MouseEvent<HTMLLabelElement>) => {
    const clickedLabel = event.currentTarget;
    clickedLabel.classList.add("activeTemplate");
  };
  return (
    <div className="form-input">
      <label className="labelTxt">{label}:</label>
      {type === "radio" ? (
        <div className={`${classN}`} id={`${id}`}>
          {options?.map((option, index) => (
            <label
              className={`areaOfType  ${
                value === option.value && classN == "layoutTemplateArea"
                  ? "activeTemplate"
                  : ""
              }
              `}
              key={option.value}
              onClick={(e) => {
                {
                  classN == "layoutTemplateArea" ? activeTab(e) : "";
                }
              }}
            >
              <div className={`areaTypeTemp-${option.value}`}>
                {id == "templateM" ? "" : ""}
                <input
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => {
                    onChange(option.value);
                    activeType();
                  }}
                />
                <span
                  className="areaOfinput"
                  dangerouslySetInnerHTML={{
                    __html: option.svg.replace(/`/g, "'"),
                  }}
                />
              </div>
              {id == "template" ? (
                <div className="NumberofTemplate">{option.text}</div>
              ) : (
                ""
              )}
              {id == "templateM" ? (
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
    </div>
  );
};

export default FormInput;

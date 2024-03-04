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

  return (
    <div className="form-input">
      <label className="labelTxt">{label}:</label>
      {type === "radio" ? (
        <div className={`${classN}`} id={`${id}`}>
          {options?.map((option) => (
            <label className="areaOfType" key={option.value}>
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
              {classN === "layoutTemplateArea" ? <div>{option.text}</div> : ""}
            </label>
          ))}
          <div className="select"></div>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormInput;

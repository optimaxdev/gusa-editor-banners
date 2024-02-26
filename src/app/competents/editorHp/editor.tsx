// components/Form.tsx
import React, { useState } from "react";
import "./hpeditor.scss";
interface FormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  device: string;
  input2: string;
}

const EditorHp: React.FC<FormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    device: "",
    input2: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };
  const handleDeviceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      device: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form className="hpEditor" onSubmit={handleSubmit}>
      <div className="forminput">
        <label>Device:</label>
        <div className="toggleType">
          <input
            id="toggle-on"
            className="toggle toggle-left"
            name="toggle"
            value="Desktop"
            type="radio"
            checked={formData.device === "Desktop"}
            onChange={handleDeviceChange}
          />

          <label htmlFor="toggle-on" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
            >
              <path
                d="M2.75 7.49995V5.99998H10.25V7.49995H2.75ZM1.8077 21.5C1.30257 21.5 0.875 21.325 0.525 20.975C0.175 20.625 0 20.1974 0 19.6923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H11.1922C11.6974 0.5 12.125 0.675 12.475 1.025C12.825 1.375 13 1.80257 13 2.3077V19.6923C13 20.1974 12.825 20.625 12.475 20.975C12.125 21.325 11.6974 21.5 11.1922 21.5H1.8077ZM1.49997 18.75V19.6923C1.49997 19.7692 1.53202 19.8397 1.59613 19.9038C1.66024 19.9679 1.73077 20 1.8077 20H11.1922C11.2692 20 11.3397 19.9679 11.4038 19.9038C11.4679 19.8397 11.5 19.7692 11.5 19.6923V18.75H1.49997ZM1.49997 17.25H11.5V4.74995H1.49997V17.25ZM1.49997 3.25H11.5V2.3077C11.5 2.23077 11.4679 2.16024 11.4038 2.09613C11.3397 2.03203 11.2692 1.99998 11.1922 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49997 2.23077 1.49997 2.3077V3.25Z"
                fill="#2196F3"
              />
            </svg>
          </label>
          <input
            id="toggle-off"
            className="toggle toggle-right"
            name="toggle"
            value="Mobile"
            type="radio"
            onChange={handleDeviceChange}
            checked={formData.device === "Mobile"}
          />
          <label htmlFor="toggle-off" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
            >
              <path
                d="M2.75 7.49995V5.99998H10.25V7.49995H2.75ZM1.8077 21.5C1.30257 21.5 0.875 21.325 0.525 20.975C0.175 20.625 0 20.1974 0 19.6923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H11.1922C11.6974 0.5 12.125 0.675 12.475 1.025C12.825 1.375 13 1.80257 13 2.3077V19.6923C13 20.1974 12.825 20.625 12.475 20.975C12.125 21.325 11.6974 21.5 11.1922 21.5H1.8077ZM1.49997 18.75V19.6923C1.49997 19.7692 1.53202 19.8397 1.59613 19.9038C1.66024 19.9679 1.73077 20 1.8077 20H11.1922C11.2692 20 11.3397 19.9679 11.4038 19.9038C11.4679 19.8397 11.5 19.7692 11.5 19.6923V18.75H1.49997ZM1.49997 17.25H11.5V4.74995H1.49997V17.25ZM1.49997 3.25H11.5V2.3077C11.5 2.23077 11.4679 2.16024 11.4038 2.09613C11.3397 2.03203 11.2692 1.99998 11.1922 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49997 2.23077 1.49997 2.3077V3.25Z"
                fill="#2196F3"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="forminput">
        <label>Format:</label>
        <input
          type="text"
          value={formData.input2}
          onChange={(e) => handleInputChange(e, "input2")}
        />
      </div>
      {formData.device === "Desktop"
        ? "Templates Of Desktop"
        : "Templates Of Mobile"}
      <button type="submit">Generate</button>
    </form>
  );
};

export default EditorHp;

// components/Form.tsx
import React, { useState } from "react";

interface FormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  input1: string;
  input2: string;
}

const EditorHp: React.FC<FormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    input1: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter data for Input 1:
        <input
          type="text"
          value={formData.input1}
          onChange={(e) => handleInputChange(e, "input1")}
        />
      </label>
      <label>
        Enter data for Input 2:
        <input
          type="text"
          value={formData.input2}
          onChange={(e) => handleInputChange(e, "input2")}
        />
      </label>
      <button type="submit">Generate</button>
    </form>
  );
};

export default EditorHp;

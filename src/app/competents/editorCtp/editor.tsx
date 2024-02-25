// components/Form.tsx
import React, { useState } from "react";

interface FormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  input1: string;
  input2: string;
  // Add more input fields as needed
}

const EditorCtp: React.FC<FormProps> = ({ onFormSubmit }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState<FormData>({
    input1: "",
    input2: "",
    // Initialize additional fields if needed
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
      {/* Add more input fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditorCtp;

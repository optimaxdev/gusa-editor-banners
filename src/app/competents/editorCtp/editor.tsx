// components/InputComponent.tsx

import { useState } from "react";
interface InputComponentProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  value1: string;
  value2: string;
  // Add more fields as needed
}

const CtpEditor: React.FC<InputComponentProps> = ({ onSubmit }) => {
  interface FormData {
    value1: string;
    value2: string;
    // Add more fields as needed
  }

  const [formData, setFormData] = useState<FormData>({
    value1: "",
    value2: "",
    // Initialize additional fields
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Device:</label>
        <select
          name="value1"
          value={formData.value1}
          onChange={handleSelectChange}
        >
          <option value="Choose Device">Choose Device</option>
          <option value="Desktop">Desktop</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>
      {formData.value1 === "Desktop" ? (
        <div>Additional input for Desktop</div>
      ) : (
        <div>Additional input for Mobile</div>
      )}
      <div>
        <label>Value 2:</label>
        <input
          type="text"
          name="value2"
          value={formData.value2}
          onChange={handleInputChange}
        />
      </div>
      {/* Add more input fields as needed */}
      <button type="submit">Genrate</button>
    </form>
  );
};

export default CtpEditor;

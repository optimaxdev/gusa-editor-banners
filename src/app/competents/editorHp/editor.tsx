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

const HpEditor: React.FC<InputComponentProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    value1: "",
    value2: "",
    // Initialize additional fields
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Value 1:
        <input
          type="text"
          name="value1"
          value={formData.value1}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Value 2:
        <input
          type="text"
          name="value2"
          value={formData.value2}
          onChange={handleInputChange}
        />
      </label>
      {/* Add more input fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default HpEditor;

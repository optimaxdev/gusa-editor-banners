"use client";
import { useState } from "react";
import HpEditor from "../competents/editorHp/editor";
import Preview from "../competents/editorHp/preview";
interface FormData {
  value1: string;
  value2: string;
  // Add more fields as needed
}

const HpEditorHomePage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSubmit = (formData: FormData) => {
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Hp Editor banner Page</h1>
      <HpEditor onSubmit={handleSubmit} />
      <Preview submittedData={submittedData} />
    </div>
  );
};

export default HpEditorHomePage;

"use client";
import { useState } from "react";
import CtpEditor from "../competents/editorCtp/editor";
import Preview from "../competents/editorCtp/preview";

interface FormData {
  value1: string;
  value2: string;
}

const EditorCategoryPage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSubmit = (formData: FormData) => {
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Ctp Editor banner Page test</h1>
      <CtpEditor onSubmit={handleSubmit} />
      <Preview submittedData={submittedData} />
    </div>
  );
};

export default EditorCategoryPage;

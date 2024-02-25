// pages/hp.tsx
"use client";
import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorHp from "../competents/editorHp/editor";
const HpPage: React.FC = () => {
  const [formDataHp, setFormDataHp] = useState({
    input1: "",
    input2: "",
    // Initialize additional fields if needed
  });

  const handleFormSubmit = (data: any) => {
    setFormDataHp(data);
  };

  return (
    <Layout currentPage="HP" formDataCtp={{}} formDataHp={formDataHp}>
      <div>
        <EditorHp onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default HpPage;

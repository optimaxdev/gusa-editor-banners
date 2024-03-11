// pages/hp.tsx
"use client";
import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorHp from "../competents/editorHp/editor";
const HpPage: React.FC = () => {
  const [formDataHp, setFormDataHp] = useState({
    imageLink: "",
    videoLink: "",
    templateb: "",
  });

  const handleFormSubmit = (data: any) => {
    setFormDataHp(data);
  };

  return (
    <Layout currentPage="HP" formDataHp={formDataHp}>
      <div>
        <EditorHp onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default HpPage;

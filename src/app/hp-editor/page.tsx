// pages/hp.tsx
"use client";
import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorHp from "../competents/editorHp/editor";
const HpPage: React.FC = () => {
  const [formDataHp, setFormDataHp] = useState({
    id: "",
    device: "Desktop",
    format: "",
    imageLink: "",
    videoLink: "",
    templateD: "0",
    templateM: "0",
    backgroundColor: "",
    color: "",
    Theme: "",
    contentPostion: "",
    link: "",
    event: "",
    backgroundPostion: "",
    date: "",
    checkactive: "",
  });

  const handleFormSubmit = (data: any) => {
    setFormDataHp(data);
  };

  return (
    <Layout currentPage="HP" formData={formDataHp}>
      <div>
        <EditorHp onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default HpPage;

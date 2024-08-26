// pages/hp.tsx
"use client";
import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorCtp from "../competents/editorCtp/editor";
const HpPage: React.FC = () => {
  const [formData, setformData] = useState({
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
    setformData(data);
  };

  return (
    <Layout currentPage="CTP" formData={formData}>
      <div>
        <EditorCtp onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default HpPage;

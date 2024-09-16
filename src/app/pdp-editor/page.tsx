// pages/hp.tsx
"use client";
import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorPdp from "./../competents/editorPdp/editor";
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
    <Layout currentPage="PDP" formData={formData}>
      <div>
        <EditorPdp onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default HpPage;

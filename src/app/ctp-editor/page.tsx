// pages/hp.tsx
"use client";

import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorCtp from "../competents/editorCtp/editor";

const CtpPage: React.FC = () => {
  const [formDataCtp, setFormDataCtp] = useState({
    input1: "",
    input2: "",
    // Initialize additional fields if needed
  });

  const handleFormSubmit = (data: any) => {
    setFormDataCtp(data);
  };

  return (
    <Layout currentPage="CTP" formDataHp={{}}>
      <div>
        <h1>CTP Form Page</h1>
        <EditorCtp onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default CtpPage;

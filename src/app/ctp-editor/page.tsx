// pages/hp.tsx
"use client";

import React, { useState } from "react";
import Layout from "../competents/layout/layout";
import EditorCtp from "../competents/editorCtp/editor";

const CtpPage: React.FC = () => {
  return (
    <Layout currentPage="CTP" formDataHp={{}}>
      <div>
        <EditorCtp />
      </div>
    </Layout>
  );
};

export default CtpPage;

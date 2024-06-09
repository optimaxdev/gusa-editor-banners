"use client";

import React, { useRef, FormEvent } from "react";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        const formData = new FormData(formRef.current);
        const response = await fetch(
          "https://script.google.com/a/macros/optimaxeyewear.com/s/AKfycbyAlvhCXiRcFFzmZhT7AYj55SBm6wOd2NKOxU4sI0lupX3TNuO1H1PA5bbVcimMEQ02/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        console.log(data);
        alert(data.msg);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div
      style={{
        width: "50%",
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          textAlign: "left",
          backgroundColor: "gray",
          padding: "5%",
          borderRadius: "15px",
        }}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h3>Contact Form</h3>
        <div className="mb-3" id="formName">
          <label>Name</label>
          <input type="text" placeholder="Enter Name" name="Name" />
        </div>
        <div className="mb-3" id="formBasicEmail">
          <label>Email Id</label>
          <input type="email" placeholder="Enter email" name="Email" />
          <div className="text-muted">
            Wedll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea name="Message" rows={3} />
        </div>
        <button style={{ float: "right" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

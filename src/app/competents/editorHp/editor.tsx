import React, { useState } from "react";
import FormInput from "./FormInput";

interface FormProps {
  onFormSubmit: (formData: FormData) => void;
}

interface FormData {
  id: string;
  device: string;
  format: string;
  imageLink: string;
  videoLink: string;
  templateD: string;
  templateM: string;
  backgroundColor: string;
  color: string;
  Theme: string;
  contentPostion: string;
  link: string;
}

const EditorHp: React.FC<FormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    device: "",
    format: "",
    imageLink: "",
    videoLink: "",
    templateD: "",
    templateM: "",
    backgroundColor: "",
    color: "",
    Theme: "",
    contentPostion: "",
    link: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form className="hpEditor" onKeyUp={handleSubmit} onInput={handleSubmit}>
      <FormInput
        label="Device"
        value={formData.device}
        onChange={(value) => handleInputChange("device", value)}
        type="radio"
        id="DeviceType"
        classN="toggleType"
        options={[
          {
            value: "Desktop",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M6 17.5V16H8V14H1.8077C1.30257 14 0.875 13.825 0.525 13.475C0.175 13.125 0 12.6974 0 12.1923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H17.1923C17.6974 0.5 18.125 0.675 18.475 1.025C18.825 1.375 19 1.80257 19 2.3077V12.1923C19 12.6974 18.825 13.125 18.475 13.475C18.125 13.825 17.6974 14 17.1923 14H11V16H13V17.5H6ZM1.8077 12.5H17.1923C17.2692 12.5 17.3397 12.468 17.4038 12.4039C17.4679 12.3398 17.5 12.2692 17.5 12.1923V2.3077C17.5 2.23077 17.4679 2.16024 17.4038 2.09613C17.3397 2.03203 17.2692 1.99998 17.1923 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49998 2.23077 1.49998 2.3077V12.1923C1.49998 12.2692 1.53202 12.3398 1.59613 12.4039C1.66024 12.468 1.73077 12.5 1.8077 12.5Z" fill="#2196F3"/>
            </svg>`,
          },
          {
            value: "Mobile",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
            <path d="M2.75 7.49995V5.99998H10.25V7.49995H2.75ZM1.8077 21.5C1.30257 21.5 0.875 21.325 0.525 20.975C0.175 20.625 0 20.1974 0 19.6923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H11.1922C11.6974 0.5 12.125 0.675 12.475 1.025C12.825 1.375 13 1.80257 13 2.3077V19.6923C13 20.1974 12.825 20.625 12.475 20.975C12.125 21.325 11.6974 21.5 11.1922 21.5H1.8077ZM1.49997 18.75V19.6923C1.49997 19.7692 1.53202 19.8397 1.59613 19.9038C1.66024 19.9679 1.73077 20 1.8077 20H11.1922C11.2692 20 11.3397 19.9679 11.4038 19.9038C11.4679 19.8397 11.5 19.7692 11.5 19.6923V18.75H1.49997ZM1.49997 17.25H11.5V4.74995H1.49997V17.25ZM1.49997 3.25H11.5V2.3077C11.5 2.23077 11.4679 2.16024 11.4038 2.09613C11.3397 2.03203 11.2692 1.99998 11.1922 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49997 2.23077 1.49997 2.3077V3.25Z" fill="#2196F3"/>
          </svg>`,
          },
        ]}
      />
      <FormInput
        label="Format"
        value={formData.format}
        onChange={(value) => handleInputChange("format", value)}
        type="radio"
        id="formatType"
        classN="toggleType"
        options={[
          {
            value: "image",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
            <path d="M6.32688 11.3461H15.673L12.5692 7.26923L10.1922 10.3077L8.623 8.36538L6.32688 11.3461ZM5.30765 15C4.80252 15 4.37496 14.825 4.02498 14.475C3.67498 14.125 3.49998 13.6974 3.49998 13.1923V1.8077C3.49998 1.30257 3.67498 0.875 4.02498 0.525C4.37496 0.175 4.80252 0 5.30765 0H16.6922C17.1973 0 17.6249 0.175 17.9749 0.525C18.3249 0.875 18.4999 1.30257 18.4999 1.8077V13.1923C18.4999 13.6974 18.3249 14.125 17.9749 14.475C17.6249 14.825 17.1973 15 16.6922 15H5.30765ZM5.30765 13.5H16.6922C16.7691 13.5 16.8397 13.4679 16.9038 13.4038C16.9679 13.3397 16.9999 13.2692 16.9999 13.1923V1.8077C16.9999 1.73077 16.9679 1.66024 16.9038 1.59613C16.8397 1.53203 16.7691 1.49998 16.6922 1.49998H5.30765C5.23072 1.49998 5.1602 1.53203 5.0961 1.59613C5.03198 1.66024 4.99993 1.73077 4.99993 1.8077V13.1923C4.99993 13.2692 5.03198 13.3397 5.0961 13.4038C5.1602 13.4679 5.23072 13.5 5.30765 13.5ZM1.80768 18.4999C1.30256 18.4999 0.875 18.3249 0.525 17.9749C0.175 17.6249 0 17.1973 0 16.6922V3.8077H1.49998V16.6922C1.49998 16.7692 1.53202 16.8397 1.59613 16.9038C1.66024 16.9679 1.73076 17 1.80768 17H14.6922V18.4999H1.80768Z" fill="#2196F3"/>
          </svg>`,
          },
          {
            value: "video",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
            <path d="M7.25 12.0384L13.5384 7.99998L7.25 3.96155V12.0384ZM1.8077 15.5C1.30257 15.5 0.875 15.325 0.525 14.975C0.175 14.625 0 14.1974 0 13.6923V2.3077C0 1.80257 0.175 1.375 0.525 1.025C0.875 0.675 1.30257 0.5 1.8077 0.5H17.1923C17.6974 0.5 18.125 0.675 18.475 1.025C18.825 1.375 19 1.80257 19 2.3077V13.6923C19 14.1974 18.825 14.625 18.475 14.975C18.125 15.325 17.6974 15.5 17.1923 15.5H1.8077ZM1.8077 14H17.1923C17.2692 14 17.3397 13.9679 17.4038 13.9038C17.4679 13.8397 17.5 13.7692 17.5 13.6923V2.3077C17.5 2.23077 17.4679 2.16024 17.4038 2.09613C17.3397 2.03203 17.2692 1.99998 17.1923 1.99998H1.8077C1.73077 1.99998 1.66024 2.03203 1.59613 2.09613C1.53202 2.16024 1.49998 2.23077 1.49998 2.3077V13.6923C1.49998 13.7692 1.53202 13.8397 1.59613 13.9038C1.66024 13.9679 1.73077 14 1.8077 14Z" fill="#2196F3"/>
          </svg>`,
          },
        ]}
      />
      <FormInput
        label={formData.format == "video" ? " Image Poster Link" : "Image Link"}
        value={formData.imageLink}
        onChange={(value) => handleInputChange("imageLink", value)}
        type="url"
      />

      {formData.format === "video" ? (
        <FormInput
          label="Video Link"
          value={formData.videoLink}
          onChange={(value) => handleInputChange("videoLink", value)}
          type="url"
        />
      ) : (
        ""
      )}
      <div className="ContainerOfInputs">
        <div className="title">Layout</div>
        <div className="innerDiv">
          <div className="LayoutTemplate">
            {formData.device == "Desktop" || formData.device !== "Mobile" ? (
              <FormInput
                label="template"
                value={formData.templateD}
                onChange={(value) => handleInputChange("templateD", value)}
                type="radio"
                id="templateD"
                classN="layoutTemplateArea"
                options={[
                  {
                    value: "0",
                    text: "Image only",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
               <path d="M4.93682 41.8096C3.7451 41.8096 2.75006 41.4104 1.95169 40.612C1.15333 39.8136 0.75415 38.8186 0.75415 37.6269V4.56365C0.75415 3.37193 1.15333 2.37689 1.95169 1.57853C2.75006 0.780163 3.7451 0.380981 4.93682 0.380981H38.0001C39.1918 0.380981 40.1868 0.780163 40.9852 1.57853C41.7835 2.37689 42.1827 3.37193 42.1827 4.56365V37.6269C42.1827 38.8186 41.7835 39.8136 40.9852 40.612C40.1868 41.4104 39.1918 41.8096 38.0001 41.8096H4.93682ZM4.93682 39.2203H38.0001C38.3984 39.2203 38.7635 39.0543 39.0955 38.7223C39.4275 38.3904 39.5934 38.0252 39.5934 37.6269V4.56365C39.5934 4.16533 39.4275 3.80018 39.0955 3.46819C38.7635 3.13624 38.3984 2.97027 38.0001 2.97027H4.93682C4.5385 2.97027 4.17335 3.13624 3.84136 3.46819C3.50941 3.80018 3.34344 4.16533 3.34344 4.56365V37.6269C3.34344 38.0252 3.50941 38.3904 3.84136 38.7223C4.17335 39.0543 4.5385 39.2203 4.93682 39.2203ZM9.81665 32.7471H33.5186L26.1989 22.9875L19.4269 31.552L14.8956 26.0747L9.81665 32.7471Z" fill="#89959C"/>
               </svg>`,
                  },
                  {
                    value: "1",
                    text: "Text center",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="98" height="64" viewBox="0 0 98 64" fill="none">
               <rect x="0.80957" y="17.1091" width="97.0201" height="7.80622" rx="3.90311" fill="#89959C"/>
               <rect x="22.6748" y="0.960327" width="54.7564" height="7.96457" rx="3.98229" fill="#89959C"/>
               <rect x="10.0161" y="28.8365" width="78.1524" height="7.96457" rx="3.98229" fill="#89959C"/>
               <rect x="26.1272" y="51.7346" width="46.0452" height="11.9469" rx="5.75397" fill="#89959C"/>
               </svg>`,
                  },
                  {
                    value: "2",
                    text: "Full image right",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="119" height="65" viewBox="0 0 119 65" fill="none">
                  <rect x="67.6909" y="16.9366" width="50.6349" height="8.05556" rx="4.02778" fill="#89959C"/>
                  <rect x="67.6907" y="0.82547" width="28.7698" height="8.05556" rx="4.02778" fill="#89959C"/>
                  <rect x="67.6909" y="28.4445" width="40.2778" height="8.05556" rx="4.02778" fill="#89959C"/>
                  <rect x="67.6909" y="51.4604" width="34.5238" height="12.6587" rx="5.75397" fill="#89959C"/>
                  </svg>`,
                  },
                  {
                    value: "3",
                    text: "Full image left",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="115" height="65" viewBox="0 0 115 65" fill="none">
                  <rect x="0.356934" y="17.0714" width="50.6349" height="8.05556" rx="4.02778" fill="#89959C"/>
                  <rect x="0.356934" y="0.960327" width="28.7698" height="8.05556" rx="4.02778" fill="#89959C"/>
                  <rect x="0.356934" y="28.5794" width="40.2778" height="8.05556" rx="4.02778" fill="#89959C"/>
                  <rect x="0.356934" y="51.5952" width="34.5238" height="12.6587" rx="5.75397" fill="#89959C"/>
                  </svg>`,
                  },
                  {
                    value: "4",
                    text: "Full half right",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="118" height="65" viewBox="0 0 118 65" fill="none">
               <path d="M4.18267 53.3215C2.99095 53.3215 1.99591 52.9223 1.19754 52.1239C0.399182 51.3255 0 50.3305 0 49.1388V16.0756C0 14.8838 0.399182 13.8888 1.19754 13.0904C1.99591 12.2921 2.99095 11.8929 4.18267 11.8929H37.2459C38.4376 11.8929 39.4327 12.2921 40.231 13.0904C41.0294 13.8888 41.4286 14.8838 41.4286 16.0756V49.1388C41.4286 50.3305 41.0294 51.3255 40.231 52.1239C39.4327 52.9223 38.4376 53.3215 37.2459 53.3215H4.18267ZM4.18267 50.7322H37.2459C37.6442 50.7322 38.0094 50.5662 38.3414 50.2342C38.6733 49.9023 38.8393 49.5371 38.8393 49.1388V16.0756C38.8393 15.6772 38.6733 15.3121 38.3414 14.9801C38.0094 14.6481 37.6442 14.4822 37.2459 14.4822H4.18267C3.78435 14.4822 3.4192 14.6481 3.08721 14.9801C2.75526 15.3121 2.58929 15.6772 2.58929 16.0756V49.1388C2.58929 49.5371 2.75526 49.9023 3.08721 50.2342C3.4192 50.5662 3.78435 50.7322 4.18267 50.7322ZM9.0625 44.259H32.7644L25.4447 34.4994L18.6728 43.0639L14.1414 37.5866L9.0625 44.259Z" fill="#89959C"/>
               <rect x="66.4287" y="17.0715" width="50.6349" height="8.05556" rx="4.02778" fill="#89959C"/>
               <rect x="66.4285" y="0.960327" width="28.7698" height="8.05556" rx="4.02778" fill="#89959C"/>
               <rect x="66.4287" y="28.5794" width="40.2778" height="8.05556" rx="4.02778" fill="#89959C"/>
               <rect x="66.4287" y="51.5953" width="34.5238" height="12.6587" rx="5.75397" fill="#89959C"/>
               </svg>`,
                  },
                  {
                    value: "5",
                    text: "Full half left",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="115" height="64" viewBox="0 0 115 64" fill="none">
               <rect y="16.1111" width="50.6349" height="8.05556" rx="4.02778" fill="#89959C"/>
               <rect width="28.7698" height="8.05556" rx="4.02778" fill="#89959C"/>
               <rect y="27.6191" width="40.2778" height="8.05556" rx="4.02778" fill="#89959C"/>
               <rect y="50.6349" width="34.5238" height="12.6587" rx="5.75397" fill="#89959C"/>
               <path d="M76.8177 52.3611C75.626 52.3611 74.6309 51.9619 73.8326 51.1636C73.0342 50.3652 72.635 49.3702 72.635 48.1785V15.1152C72.635 13.9235 73.0342 12.9285 73.8326 12.1301C74.6309 11.3317 75.626 10.9326 76.8177 10.9326H109.881C111.073 10.9326 112.068 11.3317 112.866 12.1301C113.664 12.9285 114.064 13.9235 114.064 15.1152V48.1785C114.064 49.3702 113.664 50.3652 112.866 51.1636C112.068 51.9619 111.073 52.3611 109.881 52.3611H76.8177ZM76.8177 49.7718H109.881C110.279 49.7718 110.644 49.6059 110.976 49.2739C111.308 48.9419 111.474 48.5768 111.474 48.1785V15.1152C111.474 14.7169 111.308 14.3518 110.976 14.0198C110.644 13.6878 110.279 13.5218 109.881 13.5218H76.8177C76.4194 13.5218 76.0542 13.6878 75.7222 14.0198C75.3903 14.3518 75.2243 14.7169 75.2243 15.1152V48.1785C75.2243 48.5768 75.3903 48.9419 75.7222 49.2739C76.0542 49.6059 76.4194 49.7718 76.8177 49.7718ZM81.6975 43.2986H105.399L98.0797 33.539L91.3078 42.1035L86.7765 36.6262L81.6975 43.2986Z" fill="#89959C"/>
               </svg>`,
                  },
                ]}
              />
            ) : (
              <FormInput
                label="template"
                value={formData.templateM}
                onChange={(value) => handleInputChange("templateM", value)}
                type="radio"
                id="templateM"
                classN="layoutTemplateArea"
                options={[
                  {
                    value: "0",
                    text: "Image only",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
           <path d="M4.93682 41.8096C3.7451 41.8096 2.75006 41.4104 1.95169 40.612C1.15333 39.8136 0.75415 38.8186 0.75415 37.6269V4.56365C0.75415 3.37193 1.15333 2.37689 1.95169 1.57853C2.75006 0.780163 3.7451 0.380981 4.93682 0.380981H38.0001C39.1918 0.380981 40.1868 0.780163 40.9852 1.57853C41.7835 2.37689 42.1827 3.37193 42.1827 4.56365V37.6269C42.1827 38.8186 41.7835 39.8136 40.9852 40.612C40.1868 41.4104 39.1918 41.8096 38.0001 41.8096H4.93682ZM4.93682 39.2203H38.0001C38.3984 39.2203 38.7635 39.0543 39.0955 38.7223C39.4275 38.3904 39.5934 38.0252 39.5934 37.6269V4.56365C39.5934 4.16533 39.4275 3.80018 39.0955 3.46819C38.7635 3.13624 38.3984 2.97027 38.0001 2.97027H4.93682C4.5385 2.97027 4.17335 3.13624 3.84136 3.46819C3.50941 3.80018 3.34344 4.16533 3.34344 4.56365V37.6269C3.34344 38.0252 3.50941 38.3904 3.84136 38.7223C4.17335 39.0543 4.5385 39.2203 4.93682 39.2203ZM9.81665 32.7471H33.5186L26.1989 22.9875L19.4269 31.552L14.8956 26.0747L9.81665 32.7471Z" fill="#89959C"/>
           </svg>`,
                  },
                  {
                    value: "3",
                    text: "Half Image",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="98" height="120" viewBox="0 0 98 120" fill="none">
                <rect y="79.1487" width="97.0201" height="7.80622" rx="3.90311" fill="#89959C"/>
                <rect x="21.8652" y="63" width="54.7564" height="7.96457" rx="3.98229" fill="#89959C"/>
                <rect x="9.20654" y="90.8762" width="78.1524" height="7.96457" rx="3.98229" fill="#89959C"/>
                <rect x="25.3176" y="107.774" width="46.0452" height="11.9469" rx="5.75397" fill="#89959C"/>
                <path d="M32.2784 41.992C31.0867 41.992 30.0916 41.5929 29.2932 40.7945C28.4949 39.9961 28.0957 39.0011 28.0957 37.8094V4.74614C28.0957 3.55442 28.4949 2.55938 29.2932 1.76102C30.0916 0.962658 31.0867 0.563477 32.2784 0.563477H65.3416C66.5333 0.563477 67.5284 0.962658 68.3267 1.76102C69.1251 2.55938 69.5243 3.55442 69.5243 4.74614V37.8094C69.5243 39.0011 69.1251 39.9961 68.3267 40.7945C67.5284 41.5929 66.5333 41.992 65.3416 41.992H32.2784ZM32.2784 39.4028H65.3416C65.7399 39.4028 66.1051 39.2368 66.4371 38.9048C66.769 38.5729 66.935 38.2077 66.935 37.8094V4.74614C66.935 4.34782 66.769 3.98267 66.4371 3.65068C66.1051 3.31874 65.7399 3.15276 65.3416 3.15276H32.2784C31.8801 3.15276 31.5149 3.31874 31.1829 3.65068C30.851 3.98267 30.685 4.34782 30.685 4.74614V37.8094C30.685 38.2077 30.851 38.5729 31.1829 38.9048C31.5149 39.2368 31.8801 39.4028 32.2784 39.4028ZM37.1582 32.9295H60.8601L53.5404 23.1699L46.7685 31.7345L42.2372 26.2572L37.1582 32.9295Z" fill="#89959C"/>
                </svg>`,
                  },
                  {
                    value: "2",
                    text: "Full Image Text Top",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="98" height="100" viewBox="0 0 98 100" fill="none">
                <rect y="16.1487" width="97.0201" height="7.80622" rx="3.90311" fill="#89959C"/>
                <rect x="21.8652" width="54.7564" height="7.96457" rx="3.98229" fill="#89959C"/>
                <rect x="9.20654" y="27.8762" width="78.1524" height="7.96457" rx="3.98229" fill="#89959C"/>
                <rect x="25.3176" y="87.7743" width="46.0452" height="11.9469" rx="5.75397" fill="#89959C"/>
                </svg>`,
                  },
                  {
                    value: "1",
                    text: "Full Image Text Bottom",
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="98" height="62" viewBox="0 0 98 62" fill="none">
                <rect y="16.1487" width="97.0201" height="7.80622" rx="3.90311" fill="#89959C"/>
                <rect x="21.8652" width="54.7564" height="7.96457" rx="3.98229" fill="#89959C"/>
                <rect x="9.20654" y="27.8762" width="78.1524" height="7.96457" rx="3.98229" fill="#89959C"/>
                <rect x="25.3176" y="49.7743" width="46.0452" height="11.9469" rx="5.75397" fill="#89959C"/>
                </svg>`,
                  },
                ]}
              />
            )}
            <div className="template"></div>
          </div>
          <div className="innerInputs">
            <FormInput
              label="Background color"
              value={formData.backgroundColor}
              onChange={(value) => handleInputChange("backgroundColor", value)}
              type="color"
              id="backgroundColor"
              backgroundColor={formData.backgroundColor}
            />
            <FormInput
              label="Theme mode"
              value={formData.Theme}
              onChange={(value) => handleInputChange("Theme", value)}
              type="radio"
              id="Theme"
              classN="Theme"
              options={[
                {
                  value: "Dark",
                },
                {
                  value: "Light",
                },
              ]}
            />
            <FormInput
              label="Content position"
              value={formData.contentPostion}
              onChange={(value) => handleInputChange("contentPostion", value)}
              type="radio"
              id="Contentposition"
              classN="Contentposition"
              options={[
                {
                  value: "left",
                  svg: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 17V15.5H17.5V17H0.5ZM0.5 13.125V11.625H11.5V13.125H0.5ZM0.5 9.24995V7.75H17.5V9.24995H0.5ZM0.5 5.37498V3.875H11.5V5.37498H0.5ZM0.5 1.49998V0H17.5V1.49998H0.5Z" fill="black"/>
                  </svg>
                  `,
                },
                {
                  value: "center",
                  svg: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.5 17V15.5H17.5V17H0.5ZM4.5 13.125V11.625H13.5V13.125H4.5ZM0.5 9.24995V7.75H17.5V9.24995H0.5ZM4.5 5.37498V3.875H13.5V5.37498H4.5ZM0.5 1.49998V0H17.5V1.49998H0.5Z" fill="#1C1B1F"/> </svg>`,
                },
                {
                  value: "right",
                  svg: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 1.49998V0H17.5V1.49998H0.5ZM6.5 5.37498V3.875H17.5V5.37498H6.5ZM0.5 9.24995V7.75H17.5V9.24995H0.5ZM6.5 13.125V11.625H17.5V13.125H6.5ZM0.5 17V15.5H17.5V17H0.5Z" fill="#1C1B1F"/>
                  </svg>
                  `,
                },
              ]}
            />
            <FormInput
              label="Entire banner link"
              value={formData.link}
              onChange={(value) => handleInputChange("link", value)}
              type="url"
              classN="inputUrl"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditorHp;

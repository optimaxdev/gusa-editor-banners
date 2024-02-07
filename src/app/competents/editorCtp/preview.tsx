// components/DisplayComponent.tsx
import { useState } from "react";

interface DisplayComponentProps {
  submittedData: FormData | null;
}

interface FormData {
  value1: string;
  value2: string;
  // Add more fields as needed
}

const Preview: React.FC<DisplayComponentProps> = ({ submittedData }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = document.querySelector(".copy") as HTMLDivElement | null;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy.innerText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div>
      <h2>Display Component</h2>
      {submittedData ? (
        <div>
          <p>Submitted Values:</p>
          <pre className="copy">
            {`{
           image:"${submittedData.value1}"
           template:"${submittedData.value2}"
 } `}
          </pre>
          <button onClick={handleCopyClick}>
            {copySuccess ? "Copied!" : "Copy All Text"}
          </button>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default Preview;

// components/DisplayComponent.tsx
interface DisplayComponentProps {
  submittedData: FormData | null;
}

interface FormData {
  value1: string;
  value2: string;
  // Add more fields as needed
}

const Preview: React.FC<DisplayComponentProps> = ({ submittedData }) => {
  return (
    <div>
      <h2>Display Component</h2>
      {submittedData ? (
        <div>
          <p>Submitted Value 1: {submittedData.value1}</p>
          <p>Submitted Value 2: {submittedData.value2}</p>
          {/* Display additional submitted data */}
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default Preview;

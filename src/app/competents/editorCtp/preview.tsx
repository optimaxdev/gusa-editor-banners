interface DisplayComponentProps {
  submittedData: FormData | null;
}

interface FormData {
  value1: string;
  value2: string;
}

const Preview: React.FC<DisplayComponentProps> = ({ submittedData }) => {
  return (
    <div>
      <h2>Display Component</h2>
      {submittedData ? (
        <div>
          <p>image: {submittedData.value1}</p>
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

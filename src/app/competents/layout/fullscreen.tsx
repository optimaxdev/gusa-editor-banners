import React from "react";

interface FullScreenProps {
  isActive: boolean;
}

const FullScreen: React.FC<FullScreenProps> = ({ isActive }) => {
  return (
    <div className="flexEnd">
      <div className="fullScreen">
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M3 18V15H0V13H5V18H3ZM13 18V13H18V15H15V18H13ZM0 5V3H3V0H5V5H0ZM13 5V0H15V3H18V5H13Z"
              fill="#2196F3"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M0 18V13H2V16H5V18H0ZM13 18V16H16V13H18V18H13ZM0 5V0H5V2H2V5H0ZM16 5V2H13V0H18V5H16Z"
              fill="#2196F3"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default FullScreen;

import React from "react";

const Error = ({ errorType, message }) => {
  return (
    <div
      className={`border  p-6 rounded-lg   ${
        errorType === "error"
          ? "border-red-600 bg-red-200 text-red-600"
          : "border-yellow-600 bg-yellow-200 text-yellow-600"
      }`}
    >
      {message}
    </div>
  );
};

export default Error;

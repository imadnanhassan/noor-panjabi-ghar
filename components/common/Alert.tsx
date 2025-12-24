import React from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = "info", onClose }) => {
  const bgColor =
    type === "error"
      ? "bg-red-500"
      : type === "success"
      ? "bg-green-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed top-4 left-4 right-4 z-50 p-4 ${bgColor} text-white rounded-lg shadow-lg flex items-center justify-between`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        ×
      </button>
    </div>
  );
};

export default Alert;

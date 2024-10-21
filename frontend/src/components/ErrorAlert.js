import React, { useEffect, useState } from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const ErrorAlert = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "75px",
        right: "20px",
        zIndex: 9999,
        width: "300px",
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #f44336",
        color: "#f44336",
        backgroundColor: "rgba(50, 50, 50, 0.9)",
        boxShadow: "0px 4px 12px rgba(255, 0, 0, 0.3)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ErrorOutlineOutlinedIcon />
      <span style={{ marginLeft: 12 }}>{message}</span>
    </div>
  );
};

export default ErrorAlert;

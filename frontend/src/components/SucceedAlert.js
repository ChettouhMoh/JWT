import * as React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export const SucceedAlert = ({ message }) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const styles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 9999,
    width: "300px",
    padding: "16px",
    borderRadius: "8px",
    border: `1px solid rgba(100, 255, 100, 0.3)`,
    color: "#a8e5a2",
    backgroundColor: "rgba(40, 80, 40, 0.85)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    transition: "opacity 0.3s ease-in-out",
  };

  if (!visible) return null;
  return (
    <div style={styles}>
      <CheckCircleOutlineOutlinedIcon sx={{ color: "#a8e5a2" }} />
      <div style={{ marginLeft: 26, fontSize: 16 }}>{message}</div>
    </div>
  );
};

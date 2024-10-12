import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function AlertComponent({ title, message, severity }) {
  return (
    <Stack
      sx={{
        width: "30%",
        position: "absolute",
        paddingRight: "30px",
        bottom: "50px",
        right: "5px",
      }}
      spacing={2}
    >
      <Alert severity={severity} color="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Stack>
  );
}

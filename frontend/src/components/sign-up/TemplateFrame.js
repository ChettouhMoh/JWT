import * as React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import getSignUpTheme from "./theme/getSignUpTheme";

function TemplateFrame({ mode, children }) {
  const signUpTheme = createTheme(getSignUpTheme(mode));

  return (
    <ThemeProvider theme={signUpTheme}>
      <Box>
        <Box sx={{ flex: "1 1", overflow: "auto" }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}

TemplateFrame.propTypes = {
  children: PropTypes.node,
  mode: "dark",
};

export default TemplateFrame;

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import MainContent from "../components/MainContent";
import Latest from "../components/Latest";
import Footer from "../components/Footer";
import TemplateFrame from "../components/sign-up/TemplateFrame";
import { useSelector } from "react-redux";
import getBlogTheme from "../components/sign-up/theme/getSignUpTheme";
import HomepageSkeleton from "../components/HomepageSkeleton";

import { SucceedAlert } from "../components/SucceedAlert";

const Homepage = () => {
  const blogTheme = createTheme(getBlogTheme("dark"));

  const { msg, error, loading } = useSelector((state) => state.auth);
  console.log(msg);

  return (
    <TemplateFrame
      // toggleCustomTheme={toggleCustomTheme}
      // showCustomTheme={showCustomTheme}
      mode={"dark"}
      // toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={blogTheme}>
        <CssBaseline enableColorScheme />
        {loading ? (
          <HomepageSkeleton />
        ) : (
          <>
            <AppAppBar />
            <Container
              maxWidth="lg"
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                my: 16,
                gap: 4,
                marginTop: 23,
              }}
            >
              <MainContent />
              <Latest />
            </Container>
            <Footer />

            <SucceedAlert />
          </>
        )}
        {!!msg ? (
          <SucceedAlert message={msg} />
        ) : (
          <SucceedAlert message={"Welcome !"} />
        )}
      </ThemeProvider>
    </TemplateFrame>
  );
};

export default Homepage;

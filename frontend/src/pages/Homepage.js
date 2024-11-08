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
import AddPostDialog from "../components/DialogComp";
import ErrorAlert from "../components/ErrorAlert";
import { Fab, Dialog, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Homepage = () => {
  const blogTheme = createTheme(getBlogTheme("dark"));
  const [openDialog, setOpenDialog] = React.useState(false);
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const { msg, error, loading } = useSelector((state) => state.auth);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <TemplateFrame mode={"dark"}>
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
          </>
        )}
        {!!user ? (
          <Fab
            color="default"
            aria-label="edit"
            sx={{
              position: "fixed",
              bottom: 26,
              right: 26,
              backgroundColor: "#00bcd4",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0097a7",
              },
            }}
            onClick={handleClickOpen}
          >
            <EditIcon />
          </Fab>
        ) : null}
        {openDialog ? (
          <AddPostDialog openDialog={openDialog} handleClose={handleClose} />
        ) : null}

        {!!msg ? <SucceedAlert message={msg} /> : null}

        {!!error ? <ErrorAlert message={error} /> : null}
      </ThemeProvider>
    </TemplateFrame>
  );
};

export default Homepage;

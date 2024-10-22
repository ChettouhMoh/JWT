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
import { DialogComp } from "../components/DialogComp";
import ErrorAlert from "../components/ErrorAlert";
import {
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Homepage = () => {
  const blogTheme = createTheme(getBlogTheme("dark"));
  const [openDialog, setOpenDialog] = React.useState(false);
  console.log(openDialog);
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
        {/* {loading ? (
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
        )} */}
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
        {openDialog ? (
          <Dialog
            open={openDialog}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
              sx: {
                backgroundColor: "#333", // Darker background for dialog
                color: "#fff",
                borderRadius: "12px", // Rounded corners for a modern look
              },
            }}
          >
            <DialogTitle sx={{ color: "#e0f7fa" }}>Add a New Post</DialogTitle>
            <DialogContent>
              {/* TextField */}
              <TextField
                autoFocus
                margin="dense"
                id="post"
                label="Write your post..."
                type="text"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#424242", // Subtle dark background for the input
                    color: "#fff",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#bdbdbd", // Label color in dark mode
                  },
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#80deea", // Teal focus color for label
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#bdbdbd", // Initial border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#80deea", // Teal border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#80deea", // Teal border on focus
                    },
                  },
                }}
              />
            </DialogContent>
            <DialogActions sx={{ padding: "16px" }}>
              {/* Cancel Button */}
              <Button
                onClick={handleClose}
                sx={{
                  color: "#f44336", // Red for cancel button
                  backgroundColor: "rgba(255, 68, 68, 0.1)", // Soft red background
                  "&:hover": {
                    backgroundColor: "rgba(255, 68, 68, 0.2)", // Darker red on hover
                  },
                }}
              >
                Cancel
              </Button>
              {/* Add Post Button */}
              <Button
                onClick={handleClose}
                sx={{
                  color: "#00bcd4", // Teal for submit button
                  backgroundColor: "rgba(0, 188, 212, 0.1)", // Soft teal background
                  "&:hover": {
                    backgroundColor: "rgba(0, 188, 212, 0.2)", // Darker teal on hover
                  },
                }}
              >
                Add Post
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}

        {!!msg ? <SucceedAlert message={msg} /> : null}

        {!!error ? <ErrorAlert message={error} /> : null}
      </ThemeProvider>
    </TemplateFrame>
  );
};

export default Homepage;

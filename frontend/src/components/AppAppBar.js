import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button variant="text" color="info" size="small">
                Trending
                <LocalFireDepartmentIcon
                  sx={{ fontSize: "18px", marginLeft: "4px", color: "#ff0039" }}
                />
              </Button>
              <Button variant="text" color="info" size="small">
                Write
                <CreateOutlinedIcon
                  sx={{ fontSize: "18px", marginLeft: "4px" }}
                />
              </Button>
              <Button variant="text" color="info" size="small">
                Following
                <PeopleAltOutlinedIcon
                  sx={{ fontSize: "18px", marginLeft: "4px" }}
                />
              </Button>

              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                FAQ
                <QuizOutlinedIcon
                  sx={{ fontSize: "18px", marginLeft: "4px" }}
                />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {user ? (
              <>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0 }}
                >
                  Mohamed, C
                </Button>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Avatar
                    alt={user.username}
                    src=""
                    sx={{
                      width: 36,
                      height: 36,
                      transition: "box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: (theme) =>
                          `0 2px 14px ${
                            theme.palette.mode === "dark"
                              ? "rgba(255, 255, 255, 0.2)"
                              : "rgba(0, 0, 0, 0.2)"
                          }`,
                      },
                    }}
                  />
                </Link>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/signin"
                  color="primary"
                  variant="text"
                  size="small"
                >
                  Sign in
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  color="primary"
                  variant="contained"
                  size="small"
                >
                  Sign up
                </Button>
              </>
            )}
          </Box>

          <Box
            sx={{
              display: {
                sm: "flex",
                md: "none",
              },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Stack direction="row" spacing={2}>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                Mohamed, C
              </Button>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <Avatar
                  alt={user.username}
                  src=""
                  sx={{
                    width: 36,
                    height: 36,
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: (theme) =>
                        `0 2px 14px ${
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(0, 0, 0, 0.2)"
                        }`,
                    },
                  }}
                />
              </Link>
            </Stack>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem variant="text" color="info" size="small">
                  Trending
                  <LocalFireDepartmentIcon
                    sx={{
                      fontSize: "18px",
                      marginLeft: "9px",
                      color: "#ff0039",
                    }}
                  />
                </MenuItem>
                <MenuItem variant="text" color="info" size="small">
                  Write
                  <CreateOutlinedIcon
                    sx={{ fontSize: "18px", marginLeft: "9px" }}
                  />
                </MenuItem>
                <MenuItem variant="text" color="info" size="small">
                  Following
                  <PeopleAltOutlinedIcon
                    sx={{ fontSize: "18px", marginLeft: "9px" }}
                  />
                </MenuItem>

                <MenuItem
                  variant="text"
                  color="info"
                  size="small"
                  sx={{ minWidth: 0 }}
                >
                  FAQ
                  <QuizOutlinedIcon
                    sx={{ fontSize: "18px", marginLeft: "9px" }}
                  />
                </MenuItem>
                <MenuItem>
                  <Button
                    component={Link}
                    to="/signup"
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    component={Link}
                    to="/signin"
                    color="primary"
                    variant="outlined"
                    fullWidth
                  >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

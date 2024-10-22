// import * as React from "react";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
//   TextField,
// } from "@mui/material";

// export const DialogComp = () => {
//   return (
//     <Dialog
//       openDialog={openDialog}
//       onClose={handleClose}
//       fullWidth
//       maxWidth="sm" // Makes the dialog small and centered
//       PaperProps={{
//         sx: {
//           backgroundColor: "#424242", // Dark background for the dialog
//           color: "#fff", // White text color for dark mode
//         },
//       }}
//     >
//       <DialogTitle>{"Add a New Post"}</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           id="post"
//           label="Post"
//           type="text"
//           fullWidth
//           multiline
//           rows={4}
//           variant="outlined"
//           sx={{
//             backgroundColor: "#616161", // Input field background for dark mode
//             color: "#fff",
//             "& label.Mui-focused": {
//               color: "#00bcd4", // Focused input label color
//             },
//             "& .MuiOutlinedInput-root": {
//               "& fieldset": {
//                 borderColor: "#bdbdbd", // Border color for input
//               },
//               "&:hover fieldset": {
//                 borderColor: "#00bcd4", // Border color on hover
//               },
//               "&.Mui-focused fieldset": {
//                 borderColor: "#00bcd4", // Border color when focused
//               },
//             },
//           }}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} sx={{ color: "#bdbdbd" }}>
//           Cancel
//         </Button>
//         <Button onClick={handleClose} sx={{ color: "#00bcd4" }}>
//           Add Post
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

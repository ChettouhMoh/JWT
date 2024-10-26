import * as React from "react";
import { useState } from "react";
import { Dialog, Container, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const AddPostDialog = ({ openDialog, handleClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const fileSize = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedImage(`${file.name} - ${fileSize} MB`);
    }
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px !important",
          backgroundColor: "hsl(220deg 35% 3% / 98%)",
          backgroundImage: "none",
          color: "#fff",
          overflow: "hidden",
          width: "475px",
          padding: "20px",
        },
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: "17px",
          cursor: "pointer",
          top: "17px",
          color: "#b3b3b3",
          backgroundColor: "#363639",
        }}
        onClick={handleClose}
      >
        <CloseIcon fontSize="10px" />
      </div>
      <Container
        sx={{
          maxHeight: "calc(100vh - 200px)",
          overflow: "auto",
          padding: "0 10px",
          margin: "10px 0 20px 0",
          position: "relative",
        }}
      >
        <h3 style={{ fontFamily: "Inter" }}>Write your thoughts.</h3>
        <label htmlFor="image-upload">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100px",
              color: selectedImage ? "#fff" : "#5e5e5f",
              borderRadius: "14px",
              backgroundColor: "#2b2b2b38",
              cursor: "pointer",
              border: selectedImage
                ? "1px solid #0097a7"
                : "1px dashed #5e5e5f",
              transition: "background-color 0.3s, border 0.3s",
              "&:hover": {
                backgroundColor: "#2b2b2b88",
              },
            }}
          >
            <AddPhotoAlternateIcon sx={{ marginTop: "22px" }} />
            <h5 style={{ marginTop: "6px", fontFamily: "Inter" }}>
              {selectedImage || "upload image"}
            </h5>
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </label>
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            margin: "10px 0 5px 0",
          }}
        >
          Title
        </div>
        <input
          style={{
            outline: "none",
            border: "none",
            borderBottom: "1px solid #292828",
            width: "100%",
            height: "30px",
            background: "none",
          }}
        />
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            margin: "18px 0 5px 0",
          }}
        >
          Content
        </div>
        <textarea
          style={{
            outline: "none",
            border: "none",
            borderBottom: "1px solid #292828",
            width: "100%",
            height: "30px",
            background: "none",
            marginBottom: "80px",
            resize: "none",
            overflow: "hidden",
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />

        <Button
          sx={{
            position: "absolute",
            bottom: "0px",
            right: "25px",
            background: "#292828",
            borderRadius: "20px",
            padding: "0 15px",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#0097a7",
            },
          }}
        >
          Submit
        </Button>
      </Container>
    </Dialog>
  );
};

export default AddPostDialog;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { Button, Container, Grid } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
import {
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import CreateFormDialog from "./CreateFormDialog";
import CreateElement from "./CreateElement";

function CreateForm() {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [formInputDetails, setFormInputDetails] = useState("");

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  const handleFormSave = () => {
    let localStorageFormValues =
      JSON.parse(localStorage.getItem("forms")) || [];
    localStorageFormValues.push(formInputDetails);
    localStorage.setItem("forms", JSON.stringify(localStorageFormValues));
    window.location.reload();
  };

  return (
    <Box
      sx={{
        width: "70%",
        border: "1px solid black",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button variant="outlined" onClick={handleOpenDialog}>
        Create Inputs
      </Button>

      {formInputDetails?.formElements?.length ? (
        formInputDetails?.formElements?.map((element) => (
          <CreateElement element={element} />
        ))
      ) : (
        <></>
      )}

      {formInputDetails?.formElements?.length ? (
        <Button variant="outlined" onClick={handleFormSave}>
          Save
        </Button>
      ) : (
        <></>
      )}
      <CreateFormDialog
        isOpenDialog={isOpenDialog}
        handleCloseDialog={handleCloseDialog}
        setIsOpenDialog={setIsOpenDialog}
        setFormInputDetails={setFormInputDetails}
      />
    </Box>
  );
}

export default CreateForm;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Button, Container, Grid, Chip } from "@mui/material";

function FormList({ setSelectedInputDetails, selectedFormInputDetails }) {
  const [formLists, setFormLists] = useState([]);
  const formsList = JSON.parse(localStorage.getItem("forms")) || [];

  useEffect(() => {
    setFormLists(formsList);
  }, []);

  const handleSelectForm = (selectedFormName) => {
    let selectedFormInputDetails = formLists.find(
      (item) => item.formName === selectedFormName
    );
    console.log("selected input details", selectedFormInputDetails);
    setSelectedInputDetails(selectedFormInputDetails);
  };

  return (
    <Box
      sx={{
        width: "30%",
        border: "1px solid red",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {formLists.map((items) => (
        <Chip
          label={items?.formName}
          onClick={() => handleSelectForm(items?.formName)}
          sx={{ margin: "5px" }}
        />
      ))}
    </Box>
  );
}

export default FormList;

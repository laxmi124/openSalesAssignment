import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormList from "../Components/FormList";
import CreateForm from "../Components/CreateForm";
import GenerateFormInputs from "../Components/GenerateFormInputs";
import CreateElement from "../Components/CreateElement";

function DashBoard() {
  const [selectedFormInputDetails, setSelectedInputDetails] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        height: "700px",
        width: "100%",
      }}
    >
      <FormList
        setSelectedInputDetails={setSelectedInputDetails}
        selectedFormInputDetails={selectedFormInputDetails}
      />
      {selectedFormInputDetails?.formName ? (
        <GenerateFormInputs element={selectedFormInputDetails.formElements} />
      ) : (
        <CreateForm />
      )}
    </div>
  );
}

export default DashBoard;

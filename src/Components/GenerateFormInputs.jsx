import React, { useEffect, useState } from "react";
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
  Radio,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function GenerateFormInputs({ element }) {
  return (
    <div>
      {element.map((item, index) => {
        switch (item.inputType) {
          case "textInput":
            return (
              <TextField
                key={index}
                placeholder={item?.input_label_name}
                variant="outlined"
              />
            );
          case "checkbox":
            return (
              <FormControlLabel
                key={index}
                control={<Checkbox checked={item?.checkBoxDefaultValue} />}
                label={item?.input_label_name}
              />
            );
          case "radio":
            return (
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  {item.radioOptionsName.map((labelName) => (
                    <FormControlLabel
                      value={labelName}
                      control={<Radio />}
                      label={labelName}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default GenerateFormInputs;

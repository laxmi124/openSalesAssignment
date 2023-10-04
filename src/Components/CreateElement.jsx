import React from "react";
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

function CreateElement({ element }) {
  return (
    <>
      {element.inputType === "textInput" && (
        <TextField
          placeholder={element?.input_label_name}
          variant="outlined"
          disabled
        />
      )}
      {element.inputType === "checkbox" && (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={element?.checkBoxDefaultValue} disabled />
            }
            label={element?.input_label_name}
          />
        </FormGroup>
      )}

      {element.inputType === "radio" && (
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {element.radioOptionsName.map((labelName) => (
              <FormControlLabel
                value={labelName}
                disabled
                control={<Radio />}
                label={labelName}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}

export default CreateElement;

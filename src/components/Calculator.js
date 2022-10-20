import React, { useState } from "react";
import { getMin, getMax } from "../utils/calculatorFunctions";
import { Stack, Box, TextField, Button } from "@mui/material";

// TODO:
// Custom Buttons
// Clean Func-s
// Responsive
// Able to run multiple instance of this app on the same page
// TEST && CHECK

function Calculator({ inputsNum = 3, buttons = ["biggest", "smallest"] }) {
  // lazy init
  const [inputs, setInputs] = useState(() =>
    Array(inputsNum)
      .fill()
      .map((_, i) => ({ id: i, value: "", triggered: false }))
  );

  const removeHighlights = () => {
    inputs.forEach((input) => {
      input.triggered = false;
      let tempArray = [...inputs];
      setInputs(tempArray);
    });
  };

  return (
    // Using Controlled Form
    <Box component="div">
      <Stack
        direction={{ xs: "column", md: "row" }}
        my={2}
        sx={{ flexWrap: "wrap", gap: 2 }}
      >
        {inputs.map((input, i) => (
          <TextField
            sx={
              input.triggered
                ? {
                    "& input:valid + fieldset": {
                      borderColor: "green",
                      borderWidth: 2,
                    },
                  }
                : {}
            }
            type="number"
            value={input.value}
            key={i}
            variant="outlined"
            onChange={(e) => {
              removeHighlights();

              input.value = Number(e.target.value);
              let tempArray = [...inputs];
              setInputs(tempArray);
            }}
          />
        ))}
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} my={2}>
        {buttons.map((type, i) => {
          switch (type) {
            case "biggest":
              return (
                <Button
                  key={i}
                  variant="contained"
                  onClick={() => {
                    // triggering BIGGEST input(s)
                    inputs.forEach((input) => {
                      input.triggered =
                        getMax(inputs.map((o) => o.value)) === input.value &&
                        true;
                      let tempArray = [...inputs];
                      setInputs(tempArray);
                    });
                  }}
                >
                  Biggest
                </Button>
              );
            case "smallest":
              return (
                <Button
                  key={i}
                  variant="contained"
                  onClick={() => {
                    // triggering SMALLEST input(s)
                    inputs.forEach((input) => {
                      input.triggered =
                        getMin(inputs.map((o) => o.value)) === input.value &&
                        true;
                      let tempArray = [...inputs];
                      setInputs(tempArray);
                    });
                  }}
                >
                  Smallest
                </Button>
              );
            default:
              return (
                <Button key={i} variant="contained">
                  Nothing Button : )
                </Button>
              );
          }
        })}
      </Stack>
    </Box>
  );
}

export default Calculator;

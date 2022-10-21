import React, { useState } from "react";
import {
  getMin,
  getMax,
  getOdd,
  getEven,
  getNegative,
} from "../utils/calculatorFunctions";
import { buttonTypes } from "../utils/buttonTypes";
import { Stack, Box, TextField, Button } from "@mui/material";

const calcFuncs = (type, arr) => {
  // Create && Filter an Array from the passed Object
  const destructuredArr = arr
    ?.map((o) => o.value)
    .filter((o) => typeof o == "number");
  switch (type) {
    case "biggest":
      return getMax(destructuredArr);
    case "smallest":
      return getMin(destructuredArr);
    case "even":
      return getEven(destructuredArr);
    case "odd":
      return getOdd(destructuredArr);
    case "negative":
      return getNegative(destructuredArr);
    default:
      return null;
  }
};

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
    <Box component="div">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        my={3}
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

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} my={3}>
        {buttons.map((type, i) => {
          return (
            buttonTypes[type] && (
              <Button
                key={i}
                variant="contained"
                onClick={() => {
                  // triggering BIGGEST input(s)
                  const calcFuncsRes = calcFuncs(type, inputs);
                  inputs.forEach((input) => {
                    input.triggered = calcFuncsRes?.includes(input.value);
                    let tempArray = [...inputs];
                    setInputs(tempArray);
                  });
                }}
              >
                {buttonTypes[type]}
              </Button>
            )
          );
        })}
      </Stack>
    </Box>
  );
}

export default Calculator;

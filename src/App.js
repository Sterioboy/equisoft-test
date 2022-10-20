import * as React from "react";
import Calculator from "./components/Calculator";
import { Box, Button, Container, Grid } from "@mui/material";

function App() {
  return (
    <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="lg" sx={{ m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Support any number of fields and button */}
            <Calculator
              inputsNum={5}
              buttons={["even", "biggest", "smallest"]} // types: "odd", "even", "biggest", "smallest"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;

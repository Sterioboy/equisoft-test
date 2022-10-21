import * as React from "react";
import Calculator from "./components/Calculator";
import { Box, Container, Grid } from "@mui/material";

function App() {
  return (
    <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="lg" sx={{ m: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Support any number of fields and button */}
            {/* Able to run multiple instance of this app on the same page */}
            <Calculator
              inputsNum={6}
              buttons={["odd", "even", "negative", "biggest", "smallest"]} // types: "odd", "even", "negative", "biggest", "smallest"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;

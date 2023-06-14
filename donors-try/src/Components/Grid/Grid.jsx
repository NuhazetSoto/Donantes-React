import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>
              <Button>Puntos Fijos</Button>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Button>Puntos Itinerantes</Button>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <Button>Cita Previa</Button>
            </Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>
              <Button>¿Puedo Donar?</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

import React from "react";
import { Button, Stack, Box, Typography } from "@mui/material";

const Form = ({ floor, title, subtitle }) => {
  return (
    <Box
      sx={{
        direction: "column",
        width: "100%",
        padding: 3,
      }}
    >
      <Stack
        sx={{
          direction: "column",
          width: "100%",
          marginY: 3,
          padding: 3,
          background: "purple",
        }}
      >
        <Typography variant="h4">{title}</Typography>
      </Stack>

      <Box
        sx={{
          direction: "column",
          width: "100%",
          marginY: 3,
          padding: 3,
          background: "green",
        }}
      >
        <Typography variant="h6">{subtitle}</Typography>
      </Box>
    </Box>
  );
};

export default Form;

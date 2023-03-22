import React from "react";
import { Button, Stack, Box } from "@mui/material";
import { Form } from "../layout";
import { dummyData } from "../assets/data";


const Main = ({ item, selectedFloor }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "yellow",
          //   alignItems: "center",
          //   width: "100dvw",
          // height: "100dvh",
        }}
      >
        {item
          .filter(
            (item) => selectedFloor === null || item.floor === selectedFloor
          )
          .map((item) => (
            <Form
              floor={item.floor}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
      </Box>
    </>
  );
};

export default Main;

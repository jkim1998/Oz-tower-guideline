import React from "react";
import { Button, Stack, Box, Typography } from "@mui/material";

const Sidebar = ({ floors, onFloorSelect }) => {
  const sortedData = floors && floors.sort((a, b) => a.floor - b.floor);

  const handleClick = (floor) => {
    onFloorSelect(floor);
  };

  return (
    <Stack
      sx={{
        background: "blue",
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "fit-content",
        height: "calc(100vh - 300px)",
        overflow: "hidden",
        position: "absolute",
      }}
    >
      {sortedData?.map((item) => (
        <Button key={item.floor} onClick={() => handleClick(item.floor)}>
          {item.floor}
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;

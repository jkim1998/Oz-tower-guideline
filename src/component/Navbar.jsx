import React, { useState } from "react";
import { Button, Stack, Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ floors, onFloorSelect }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <>
      <Box
        sx={{
          background: "red",
          padding: 1,
        }}
      >
        <Button onClick={() => toggleExpand()}>
          <MenuIcon />
        </Button>
        <Button>Home</Button>
        <Typography>{expand}</Typography>
      </Box>
      {expand && <Sidebar floors={floors} onFloorSelect={onFloorSelect} />}
    </>
  );
};

export default Navbar;

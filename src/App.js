import React, { useState } from "react";
import { Home, Main } from "./page";
import { Navbar, Sidebar } from "./component";
import { dummyData } from "./assets/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
  };

  return (
    <>
      {/* <Router>
      <Routes>
        <Route path="/:floor" component={Main} />
        <Route path="/" component={Home} />
      </Routes>
    </Router> */}
      <Navbar floors={dummyData} onFloorSelect={handleFloorSelect} />
      {selectedFloor === null ? (
        <Home />
      ) : (
        <Main item={dummyData} selectedFloor={selectedFloor} />
      )}
    </>
  );
}

export default App;

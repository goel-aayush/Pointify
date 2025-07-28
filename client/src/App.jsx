import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ranks from "./pages/Ranks";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranks />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ranks from "./pages/Ranks";
import Add from "./pages/Add";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Leaderboard />} />
        <Route path="/addnew" element={<Add />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

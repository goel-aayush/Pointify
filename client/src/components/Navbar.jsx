import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ranking.png";
import { Crown } from "lucide-react";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <Crown
        className="size-[48px] cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Navbar;

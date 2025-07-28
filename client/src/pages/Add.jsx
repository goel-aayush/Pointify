import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useUserStore } from "../store/useUserStore";

const Add = () => {
  const [name, setName] = useState("");
  const { addUser } = useUserStore();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) {
      alert("User can't be empty");
    }
    const data = {
      fullName: name,
    };

    addUser(data);
    console.log("Data added", data);
    setName("");
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full  justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
            POINTIFY <br />
            <span className="text-primary">Add a new User</span>
          </h1>
        </div>
        {/* input field  */}
        <div className="mt-2 flex justify-center gap-3">
          <div className="relative w-64">
            <input
              type="text"
              value={name}
              className="appearance-none w-full text-base sm:text-lg px-5 py-3 pr-10 rounded-xl bg-white border border-gray-300 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
              placeholder="👤 Add a User"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            onClick={handleAdd}
            className="bg-primary text-white px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition shadow-md text-base sm:text-lg"
          >
            Add new
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;

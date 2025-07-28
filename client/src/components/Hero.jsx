import React, { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";

const Hero = () => {
  const { getUsers, users, sendPoint } = useUserStore();
  const [selectedUser, setSelectedUser] = useState("");
  // const [formData, setFormData] = useState({ fullName: "", point: null });

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleClaim = (e) => {
    e.preventDefault();
    if (!selectedUser) {
      console.log(users.data);
      alert("Please select a user first.");
      return;
    }

    // finding the user in the users array
    const userObj = users.find((u) => u.fullName === selectedUser);
    if (!userObj) {
      alert("User not found");
    }

    // example: assign random points (you can change logic as needed)
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    // Here you would call a backend function to update the user's points

    console.log(`Claiming ${randomPoints} points for ${selectedUser}`);
    const data = {
      fullName: userObj.fullName,
      points: randomPoints,
    };
    sendPoint(data);
  };

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full  justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Manage Points & Rank <br />
          <span className="text-primary">Users</span>
        </h1>
        <p className=" text-xl mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Select a user, claim random points, and see live rankings.
        </p>
      </div>

      {/* dropdown */}
      <div className="mt-2 flex justify-center gap-3">
        <div className="relative w-64">
          <form action="">
            <select
              value={selectedUser}
              onChange={(e) => {
                // const user = users.find((u) => u.fullName === e.target.value);
                setSelectedUser(e.target.value);
                // setFormData({ ...formData, fullName: selectedUser });
              }}
              className="appearance-none w-full text-base sm:text-lg px-5 py-3 pr-10 rounded-xl bg-white border border-gray-300 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            >
              <option value="" disabled>
                👤 Select a User
              </option>
              {users.map((user, index) => (
                <option key={index} value={user.fullName}>
                  {user.fullName}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </form>
        </div>

        <button
          type="submit"
          onClick={handleClaim}
          className="bg-primary text-white px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition shadow-md text-base sm:text-lg"
        >
          Claim Points
        </button>
      </div>
    </div>
  );
};

export default Hero;

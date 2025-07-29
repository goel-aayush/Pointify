import React, { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import io from "socket.io-client";

const socket = io("http://localhost:5001");

const Leaderboard = () => {
  const { users, getUsers } = useUserStore();

  useEffect(() => {
    getUsers();

    socket.on("pointsUpdated", () => {
      getUsers();
    });

    return () => {
      socket.off("pointsUpdated");
    };
  }, []);

  const sortedUsers = [...users].sort((a, b) => b.point - a.point);

  return (
    <div className="p-[100px]">
      <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr key={user._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.fullName}</td>
                <td className="px-4 py-2">{user.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;

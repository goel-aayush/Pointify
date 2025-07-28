import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useUserStore = create((set, get) => ({
  users: [],
  isUsersLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/getuser");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  sendPoint: async (data) => {
    try {
      const res = await axiosInstance.post("/update-score", data);
      toast.success("Points Claimed");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to claim points");
    }
  },
  addUser: async (data) => {
    try {
      const res = await axiosInstance.post("/adduser", data);
      toast.success("new user added");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add new user");
    }
  },
}));

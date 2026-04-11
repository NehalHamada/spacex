import { toast } from "react-toastify";
import type { Launch } from "../types/launch.types";
import { api } from "./api";

export const getLaunches = async (): Promise<Launch[]> => {
  try {
    const response = await api.get("/launches");
    return response.data;
  } catch (error) {
    toast.error("Failed Fetch Data");
    throw error;
  }
};

export const getLaunchesById = async (id: string): Promise<Launch> => {
  try {
    const response = await api.get(`/launches/${id}`);
    return response.data;
  } catch (error) {
    toast.error("Failed get product details");
    throw error;
  }
};

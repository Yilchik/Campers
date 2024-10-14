import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters) => {
    const queryParams = {
      location: filters.location || "",
      transmission: filters.transmission || "",
      form: filters.form || "",
      AC: filters.ac ? "true" : undefined,
      kitchen: filters.kitchen ? "true" : undefined,
      TV: filters.tv ? "true" : undefined,
      bathroom: filters.bathroom ? "true" : undefined,
    };

    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(([key, value]) => value !== undefined)
    );

    const query = new URLSearchParams(filteredParams).toString();

    const response = await axios.get(`?${query}`);

    return response.data;
  }
);

export const getCamperDetails = async (id) => {
  try {
    const response = await axios.get(`/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching camper details:", error);
    return null;
  }
};

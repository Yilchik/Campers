import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${query}`
    );
    console.log("API Response:", response.data);
    return response.data;
  }
);

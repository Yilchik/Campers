import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters) => {
    const {
      location,
      as,
      automatic,
      kitchen,
      tv,
      bathroom,
      van,
      fullyIntegrated,
      alcove,
    } = filters || {};
    const query = new URLSearchParams({
      location,
      ac: as ? "true" : undefined,
      automatic: automatic ? "true" : undefined,
      kitchen: kitchen ? "true" : undefined,
      tv: tv ? "true" : undefined,
      bathroom: bathroom ? "true" : undefined,
      van: van ? "true" : undefined,
      fullyIntegrated: fullyIntegrated ? "true" : undefined,
      alcove: alcove ? "true" : undefined,
    }).toString();

    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${query}`
    );
    return response.data;
  }
);

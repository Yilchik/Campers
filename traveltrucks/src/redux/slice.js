import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    favorites: [],
    filters: {
      location: "",
      as: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
      van: false,
      fullyIntegrated: false,
      alcove: false,
    },
    status: "idle",
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = {
        location: "",
        as: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
        van: false,
        fullyIntegrated: false,
        alcove: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite, setFilters, resetFilters } =
  campersSlice.actions;
export default campersSlice.reducer;

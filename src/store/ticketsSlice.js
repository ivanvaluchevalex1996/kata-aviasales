/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (_, { rejectWithValue }) => {
    const searchId = localStorage.getItem("searchId");
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      if (!response.ok) throw new Error("Error");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    status: null,
    error: null,
  },
  reducers: {
    checkAll(state, action) {},
    toggleCheck(state, action) {},
  },
  extraReducers: {
    [fetchTickets.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.tickets = action.payload;
    },
    [fetchTickets.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { toggleCheck, checkAll } = ticketsSlice.actions;
export default ticketsSlice.reducer;

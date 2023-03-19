/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk("tickets/fetchTickets", async () => {
  const searchId = localStorage.getItem("searchId");
  const response = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
});

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
    [fetchTickets.rejected]: (state, action) => {},
  },
});

export const { toggleCheck, checkAll } = ticketsSlice.actions;
export default ticketsSlice.reducer;

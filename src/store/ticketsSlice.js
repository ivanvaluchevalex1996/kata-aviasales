/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (_, { rejectWithValue }) => {
    const searchId = localStorage.getItem("searchId");
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      // console.log(response);
      if (!response.ok) throw new Error("Error");
      const data = await response.json();
      // console.log(data);
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
    // buttons: [
    //   { label: "Самый дешевый", name: "cheap", active: false },
    //   { label: "Самый быстрый", name: "fast", active: false },
    // ],
    status: null,
    error: null,
  },
  reducers: {
    sortTicketByPrice(state) {
      const filterTickets = current(state.tickets.tickets).slice();
      state.tickets.tickets = filterTickets.sort((previous, next) =>
        previous.price > next.price ? 1 : -1
      );
    },

    // clickFast(state, action) {},
    // toggleCheck(state, action) {},
  },
  extraReducers: {
    [fetchTickets.pending]: (state) => {
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

export const { sortTicketByPrice } = ticketsSlice.actions;
export default ticketsSlice.reducer;

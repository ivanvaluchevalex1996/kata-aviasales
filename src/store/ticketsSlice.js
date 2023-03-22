/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const getTickets = async () => {
  const ticketsResult = [];
  const searchId = localStorage.getItem("searchId");
  try {
    const ticketsResponse = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    const { tickets, stop } = await ticketsResponse.json();
    ticketsResult.push(...tickets);
    if (!stop) {
      ticketsResult.push(...(await getTickets()));
    }
  } catch (e) {
    if (e.name === "SyntaxError") {
      ticketsResult.push(...(await getTickets()));
    }
  }
  console.log(ticketsResult);
  return ticketsResult;
};
export const fetchTickets = createAsyncThunk("tickets/fetchTickets", getTickets);

// export const fetchTickets = createAsyncThunk(
//   "tickets/fetchTickets",
//   async (_, { rejectWithValue }) => {
//     const searchId = localStorage.getItem("searchId");
//     try {
//       const response = await fetch(
//         `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
//       );
//       if (!response.ok) throw new Error("Error");
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
    addTickets: 5,
  },
  reducers: {
    sortTicketByPrice(state) {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((previous, next) =>
        previous.price > next.price ? 1 : -1
      );
    },
    sortTicketByCheap(state) {
      const filterTickets = current(state.tickets).slice();
      state.tickets = filterTickets.sort((previous, next) =>
        previous.segments[0]?.duration > next.segments[0]?.duration ? 1 : -1
      );
    },
    // durationObratno={item.segments[1]?.duration}

    showMore(state) {
      state.addTickets += 5;
    },
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

export const { sortTicketByPrice, sortTicketByCheap, showMore } = ticketsSlice.actions;
export default ticketsSlice.reducer;

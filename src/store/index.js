import { configureStore } from "@reduxjs/toolkit";
import checkSlice from "./checkSlice";
import ticketsSlice from "./ticketsSlice";

export default configureStore({
  reducer: {
    checkbox: checkSlice,
    tickets: ticketsSlice,
  },
});

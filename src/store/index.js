import { configureStore } from "@reduxjs/toolkit";
import checkSlice from "./checkSlice";

export default configureStore({
  reducer: {
    checkbox: checkSlice,
  },
});

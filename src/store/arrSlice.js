import { createSlice } from "@reduxjs/toolkit";

const arrSlice = createSlice({
  name: "checkbox",
  initialState: {
    arr: [],
  },
  reducers: {
    addUser(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.arr = [...state.arr, action.payload];
    },
    removeUser(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.arr = state.arr.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = arrSlice.actions;
export default arrSlice.reducer;

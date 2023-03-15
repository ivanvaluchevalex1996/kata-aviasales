import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
  name: "checkbox",
  initialState: {
    panel: [
      { label: "Без пересадок", id: 0, isChecked: false },
      { label: "1 пересадка", id: 1, isChecked: false },
      { label: "2 пересадка", id: 2, isChecked: false },
      { label: "3 пересадка", id: 3, isChecked: false },
    ],
  },
  reducers: {
    checkAll(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.panel = state.panel.map((el) => ({ ...el, isChecked: action.payload }));
    },
    toggleCheck(state, action) {
      const toggledCheck = state.panel.find((check) => check.id === action.payload);
      toggledCheck.isChecked = !toggledCheck.isChecked;
    },
  },
});

export const { toggleCheck, checkAll } = checkSlice.actions;

export default checkSlice.reducer;

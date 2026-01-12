import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openMenu(state) {
      state.isOpen = true;
    },
    closeMenu(state) {
      state.isOpen = false;
    },
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { actions: mobileMenuActions } = mobileMenuSlice;
export const { reducer: mobileMenuReducer } = mobileMenuSlice;

// export const { openMenu, closeMenu, toggleMenu } = mobileMenuSlice.actions;
// export default mobileMenuSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";

import { mobileMenuReducer } from "@/features";

export const rootReducer = combineReducers({
  mobileMenu: mobileMenuReducer,
});

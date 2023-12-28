// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardSlice from "../slices/messageBoardSlice";

export const store = configureStore({
  reducer: {
    board: messageBoardSlice,
  },
});

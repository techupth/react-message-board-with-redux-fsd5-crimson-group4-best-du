// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
};

export const messageBoardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    deleteBoard: (state, action) => {
      state.boards.splice(action.payload, 1);
    },
  },
});

export const { addBoard, deleteBoard } = messageBoardSlice.actions;
export default messageBoardSlice.reducer;

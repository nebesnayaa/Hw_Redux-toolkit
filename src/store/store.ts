import userSlice from "../slices/user/user-slice";
import todosSlice from "../slices/todos/todos-slice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todosSlice,
  },
});

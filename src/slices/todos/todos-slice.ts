import { createSlice } from "@reduxjs/toolkit";
const initialState: any = {
  todos: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoType } from "../../types/todo-type";

const initialState: { todos: TodoType[] } = {
  todos: [],
};

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_PATH_TO_SERVER + "/todos"
      );
      return res.data as TodoType[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const postTodos = createAsyncThunk(
  "todos/postTodos",
  async (newTodo: TodoType, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_PATH_TO_SERVER + "/todos",
        newTodo
      );
      return res.data as TodoType;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, () => {
        console.log("pending");
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        console.log("success");
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, () => {
        console.log("rejected");
      })
      .addCase(postTodos.fulfilled, (state, action) => {
        console.log("post success");
        state.todos.push(action.payload);
      })
      .addCase(postTodos.rejected, () => {
        console.log("post rejected");
      });
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
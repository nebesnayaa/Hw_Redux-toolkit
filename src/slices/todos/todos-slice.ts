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
      console.log(res.data);
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
      return res.data as TodoType[]; // Ensure type safety
    } catch (error: any) {
      return rejectWithValue(error.message); // Handle errors
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: { payload: TodoType }) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        console.log("pending");
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        console.log("success");
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;

// export const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     setTodos: (state, action) => {
//       state.todos = action.payload;
//     },
//     addArrayTodo: (state, action) => {
//       state.todos = action.payload;
//     },
//     addTodo: (state, action) => {
//       state.todos.push(action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getTodos.pending, (state) => {
//         console.log("pending");
//       })
//       .addCase(getTodos.fulfilled, (state, action) => {
//         console.log("success");

//         state.todos = action.payload;
//       })
//       .addCase(getTodos.rejected, (state, action) => {
//         console.log("failed");
//       });
//   },
// });

// export const { addTodo, setTodos, addArrayTodo } = todosSlice.actions;
// export default todosSlice.reducer;

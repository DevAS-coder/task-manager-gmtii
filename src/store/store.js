import { configureStore } from "@reduxjs/toolkit";
import TasksSliceReduser from "../features/TasksSlice";

export const store = configureStore({
  reducer: {
    tasks: TasksSliceReduser,
  },
});

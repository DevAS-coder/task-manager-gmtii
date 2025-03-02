import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
  name: "tasks",
  initialState: { value: []},
  reducers: {
    updateFromLocal: (state, action) => {
      return { value: [...action.payload] }
    },
  },
});

export const { updateFromLocal } = TasksSlice.actions;
export default TasksSlice.reducer;

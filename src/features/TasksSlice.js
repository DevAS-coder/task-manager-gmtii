import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
  name: "tasks",
  initialState: { value: []},
  reducers: {
    updateFromAPI: (state, action) => {
      return { value: [...action.payload] }
    },
    addTask: (state, action) => {
        state.value.push(action.payload)
    },
    deletedTask: (state,action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    }
  },
});

export const { updateFromAPI, addTask, deletedTask } = TasksSlice.actions;
export default TasksSlice.reducer;
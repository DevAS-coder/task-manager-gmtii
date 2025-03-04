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
    },
    editTask: (state, action) => {
      const { id, newValue } = action.payload;
      const taskIndex = state.value.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.value[taskIndex] = { ...state.value[taskIndex], ...newValue };
      }
    }
  },
});

export const { updateFromAPI, addTask, deletedTask,editTask } = TasksSlice.actions;
export default TasksSlice.reducer;
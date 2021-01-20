import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    del(state, { payload }) {
      return state = state.filter(({ id }) => id !== payload);
    }
  }
});

export const { add, del } = todosSlice.actions;

export const selectTodos = ({ todos }) => todos;

export default todosSlice.reducer;
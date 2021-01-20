import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import todosReducer from '../features/todos/todosSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    todos: todosReducer
  },
});

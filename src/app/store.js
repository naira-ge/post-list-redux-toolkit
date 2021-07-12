import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import selectedPostReducer from '../features/selectedPost/selectedPostSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    selectedPost: selectedPostReducer,
  },
});

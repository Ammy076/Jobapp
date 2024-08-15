import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from './bookmarksSlice';

export default configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
  },
});

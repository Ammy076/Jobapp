import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const updatedBookmarks = [...state, action.payload];
      AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    },
    setBookmarks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBookmark, setBookmarks } = bookmarksSlice.actions;

export const loadBookmarks = () => async (dispatch) => {
  const bookmarks = await AsyncStorage.getItem('bookmarks');
  if (bookmarks) {
    dispatch(setBookmarks(JSON.parse(bookmarks)));
  }
};

export default bookmarksSlice.reducer;


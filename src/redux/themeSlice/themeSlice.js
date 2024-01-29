import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
 isDarkTheme:false
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
     setDarkTheme : state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
  
});

export const {setDarkTheme} = themeSlice.actions;

export default loginSlice.reducer;

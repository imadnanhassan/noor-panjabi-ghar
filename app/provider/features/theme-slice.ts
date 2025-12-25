import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  sidebar: boolean;
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  sidebar: false,
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleSidebar, setSidebar, toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;

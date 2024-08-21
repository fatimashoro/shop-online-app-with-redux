import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dark: false,
    systemTheme: window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const themeSwitcher = createSlice({
    name: 'theme',
    initialState,
    reducers: {
     
        systemBasedThemeChange: (state, action) => {
            state.systemTheme = action.payload;
            state.dark = action.payload
        }

    },
})


export const {  systemBasedThemeChange } = themeSwitcher.actions

export default themeSwitcher.reducer
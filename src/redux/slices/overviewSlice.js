import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	tab: 0,
	previousTab: 0,
	status: "idle",
}

const overviewSlice = createSlice({
	name: "tabs",
	initialState,
	reducers: {
		setTab: (state, action) => {
            state.tab = action.payload;
        },
		setPreviousTab: (state, action) => {
            state.previousTab = action.payload;
        },
	},
})

export const { setTab, setPreviousTab } = overviewSlice.actions
export default overviewSlice.reducer

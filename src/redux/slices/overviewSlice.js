import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: 0,
	status: "idle",
}

const overviewSlice = createSlice({
	name: "tabs",
	initialState,
	reducers: {
		setTab: (state, action) => {
            state.value = action.payload;
        },
	},
})

export const { setTab } = overviewSlice.actions
export default overviewSlice.reducer

import { configureStore } from "@reduxjs/toolkit"
import overviewReducer from "src/redux/slices/overviewSlice"

const store = configureStore({
	reducer: {
		overview: overviewReducer,
	},
})

export default store

import { useDispatch, useSelector } from "react-redux"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import { setTab } from "src/redux/slices/overviewSlice"
import "./index.scss"
import Content from "./content"
import Paper from "@mui/material/Paper"

const HeaderMenu = () => {
	const dispatch = useDispatch()
	const tab = useSelector((state: any) => state.overview.value)

	const handleClickAway = (event: any) => {
		if (event.target.tagName !== "A" && event.target.tagName !== "BUTTON") {
			dispatch(setTab(0))
		} else {
			event.stopPropagation()
		}
	}

	if (tab !== 0)
		return (
			<ClickAwayListener
				onClickAway={event => {
					handleClickAway(event)
				}}
			>
				<Paper elevation={3}>
					<Content />
				</Paper>
			</ClickAwayListener>
		)
	else return <Content />
}

export default HeaderMenu

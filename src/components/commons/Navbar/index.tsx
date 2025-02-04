import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"
import LinkWithIcon from "../LinkWithIcon"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { setTab, setPreviousTab } from "src/redux/slices/overviewSlice"
import { useDispatch, useSelector } from "react-redux"

const Navbar = () => {
	const dispatch = useDispatch()
	const tab = useSelector((state: any) => state.overview.tab)
	const previousTab = useSelector((state: any) => state.overview.previousTab)

	return (
		<nav className="navbar">
			<LinkWithIcon
				to="/"
				className={`link ${tab === 1 ? "active" : ""} ${
					previousTab === 1 ? "closing" : ""
				}`}
				onClick={() => {
					dispatch(setPreviousTab(tab))
					if (tab !== 1) dispatch(setTab(1))
					else dispatch(setTab(0))
				}}
				opened={tab === 1}
				icon={<FaCaretDown />}
				iconOpened={<FaCaretUp />}
			>
				Solutions
			</LinkWithIcon>
			<Link className="link" to="/prices">
				Prices
			</Link>
			<LinkWithIcon
				to="/"
				className={`link ${tab === 2 ? "active" : ""} ${
					previousTab === 2 ? "closing" : ""
				}`}
				onClick={() => {
					dispatch(setPreviousTab(tab))
					if (tab !== 2) dispatch(setTab(2))
					else dispatch(setTab(0))
				}}
				opened={tab === 2}
				icon={<FaCaretDown />}
				iconOpened={<FaCaretUp />}
			>
				Resources
			</LinkWithIcon>
			<LinkWithIcon
				to="/"
				className={`link ${tab === 3 ? "active" : ""} ${
					previousTab === 3 ? "closing" : ""
				}`}
				onClick={() => {
					dispatch(setPreviousTab(tab))
					if (tab !== 3) dispatch(setTab(3))
					else dispatch(setTab(0))
				}}
				opened={tab === 3}
				icon={<FaCaretDown />}
				iconOpened={<FaCaretUp />}
			>
				News
			</LinkWithIcon>
		</nav>
	)
}

export default Navbar

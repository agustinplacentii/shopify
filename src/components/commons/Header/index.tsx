import React from "react"
import { Link } from "react-router-dom" // Import for routing
import Navbar from "../Navbar"
import { FaBars, FaShopify } from "react-icons/fa"
import { useSelector } from "react-redux"
import "./index.scss"

const Header = () => {
	const tab = useSelector((state: any) => state.overview.tab)

	return (
		<div>
			<header className={`header ${tab !== 0 ? "active" : ""}`}>
				<div className="navbar-section">
					<Link to="/" className="logo">
						<div className="logo-container">
							<FaShopify size={32} color="green" />
							<div className="logo-text">shopify</div>
						</div>
					</Link>
					<Navbar />
				</div>
				<div className="login-section">
					<Link
						id="login-button"
						className="link"
						to="https://accounts.shopify.com/lookup"
					>
						Log in
					</Link>
					<Link
						id="join-free-button"
						to="https://accounts.shopify.com/store-create"
					>
						Join Free
					</Link>
					<button className="menu-button">
						<FaBars size={20} />
					</button>
				</div>
			</header>
		</div>
	)
}

export default Header

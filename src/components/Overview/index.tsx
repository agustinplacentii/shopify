import { Link } from "react-router-dom"
import "./index.scss"

const Overview = () => {
	return (
		<div className="overview">
			<div className="summary-container">
			<Link to="https://www.shopify.com/es#/video/rp9htvhybv" className="video-link"> 
				Watch short Shopify 2 minutes description
			</Link>
			<div className="side-images-container">
				<img src="imagen1.jpg" alt="Imagen 1" className="imagen" />
				<img src="imagen2.jpg" alt="Imagen 2" className="imagen" />
			</div>
			</div>
		</div>
	)
}

export default Overview

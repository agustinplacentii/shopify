import { useSelector } from "react-redux"
import "./index.scss"

const HeaderMenu = () => {
	const tab = useSelector((state: any) => state.overview.value)

	return (
		<div className="header-menu">
			<div className={`tab-content ${tab === 1 ? "active" : ""}`}>
				<div>
					Contenido para tab 1Contenido para tab 1Contenido para tab 1Contenido
					para tab 1Contenido para tab 1Contenido para tab 1Contenido para tab 1
				</div>
				<div>Contenido para tab 1</div>
				<div>Contenido para tab 1</div>
				<div>Contenido para tab 1</div>
				<div>Contenido para tab 1</div>
				<div>
					Contenido para tab 1Contenido para tab 1Contenido para tab 1Contenido
					para tab 1Contenido para tab 1Contenido para tab 1Contenido para tab
					1Contenido para tab 1Contenido para tab 1
				</div>
				<div>Contenido para tab 1</div>
				<div>Contenido para tab 1</div>
				<div>Contenido para tab 1</div>
			</div>

			<div className={`tab-content ${tab === 2 ? "active" : ""}`}>
				Contenido para tab 2
			</div>

			<div className={`tab-content ${tab === 3 ? "active" : ""}`}>
				Contenido para tab 3
			</div>
		</div>
	)
}

export default HeaderMenu

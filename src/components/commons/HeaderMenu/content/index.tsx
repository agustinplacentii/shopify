import { useSelector } from "react-redux"
import "../index.scss"

const Content = () => {
	const tab = useSelector((state: any) => state.overview.value)

	return (
		<div className={`header-menu ${tab !== 0 ? "open" : "closed"}`}>
			<div className={`tab-content ${tab === 1 ? "active" : "inactive"}`}>
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

			<div className={`tab-content ${tab === 2 ? "active" : "inactive"}`}>
				Contenido para tab 2
			</div>

			<div className={`tab-content ${tab === 3 ? "active" : "inactive"}`}>
				Contenido para tab 3
			</div>
		</div>
	)
}

export default Content

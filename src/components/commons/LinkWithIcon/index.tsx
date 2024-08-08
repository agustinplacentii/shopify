import { Link } from "react-router-dom"
import "./index.scss"

interface Props {
	to: string
	icon: any
	children: React.ReactNode
	onClick?: () => void
	opened?: boolean
	iconOpened?: any
	className: string
}

const LinkWithIcon = ({
	iconOpened,
	opened,
	to,
	icon,
	children,
	className,
	onClick,
}: Props) => {
	return (
		<Link to={to} onClick={onClick} className={className}>
			{children}
			{opened ? iconOpened : icon}
		</Link>
	)
}

export default LinkWithIcon

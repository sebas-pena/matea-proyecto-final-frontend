import { useEffect } from "react"
import "./Alert.css"
const Alert = ({ children, setShowAlert }) => {
	useEffect(() => {
		setTimeout(() => {
			setShowAlert(false)
		}, 4000)
	}, [])
	return <div className="alert__ctn">{children}</div>
}

export default Alert

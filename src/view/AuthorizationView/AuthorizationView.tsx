import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const AuthorizationView = () => {
	let navigate = useNavigate()
	const redirectToItems = () => {
		navigate("/")
	}
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Button onClick={redirectToItems}>AuthorizationView</Button>
		</div>
	)
}

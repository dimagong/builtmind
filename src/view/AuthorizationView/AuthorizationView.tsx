import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { FormAuthorization, Layout } from "../../ui"
import { IFormData } from "../../interfaces"
import { FormLogin } from "../../ui/FornLogin/Formlogin"

export const AuthorizationView = () => {
	let navigate = useNavigate()
	const redirectToItems = () => {
		navigate("/")
	}
	const onSignUp = (data: IFormData) => {
		if (data) {
			localStorage.setItem("user", JSON.stringify(data))
			redirectToItems()
		}
	}
	return (
		<Layout>
			<div>
				<FormLogin />
			</div>
		</Layout>
	)
}

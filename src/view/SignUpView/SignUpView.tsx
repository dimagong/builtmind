import { useNavigate } from "react-router-dom"
import { FormAuthorization, Layout } from "../../ui"
import { IFormData } from "../../interfaces"

export const SignUpView = () => {
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
				<FormAuthorization onSignUp={onSignUp} />
			</div>
		</Layout>
	)
}

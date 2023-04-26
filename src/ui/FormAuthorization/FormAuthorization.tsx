import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	Link,
	MenuItem,
	Select,
	TextField,
} from "@mui/material"
import { useState } from "react"
import { IFormData } from "../../interfaces"

const initFormData = {
	firstName: "",
	lastName: "",
	password: "",
	status: "",
}

interface IFormAuthorization {
	onSignUp: (data: IFormData) => void
}

export const FormAuthorization = ({ onSignUp }: IFormAuthorization) => {
	const [formData, setFotmData] = useState<IFormData>(initFormData)
	const handleChange = (e: any) => {
		const { name, value } = e.target
		const upValue = { [name]: value }
		setFotmData((prevState) => {
			return { ...prevState, ...upValue }
		})
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log("handleSubmit", e.target.value)
		onSignUp(formData)
		setFotmData((prevState) => {
			return { ...prevState, ...initFormData }
		})
	}

	console.log("formData", formData)
	return (
		<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						onChange={handleChange}
						autoComplete='given-name'
						name='firstName'
						required
						fullWidth
						id='firstName'
						label='First Name'
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						onChange={handleChange}
						required
						fullWidth
						id='lastName'
						label='Last Name'
						name='lastName'
						autoComplete='family-name'
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						onChange={handleChange}
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='new-password'
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id='status-label'>Status</InputLabel>
						<Select
							onChange={handleChange}
							fullWidth
							labelId='status-label'
							id='status'
							label='Status'
							name='status'
							defaultValue='viewer'

							// onChange={handleChange}
						>
							<MenuItem value={"admin"}>Admin</MenuItem>
							<MenuItem value={"editor"}>Editor</MenuItem>
							<MenuItem value={"viewer"}>Viewer</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Sign Up
			</Button>
			<Grid container justifyContent='flex-end'>
				<Grid item>
					<Link href='#' variant='body2'>
						Already have an account? Sign in
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}

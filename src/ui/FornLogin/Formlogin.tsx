import { Box, Button, Grid, Link, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const FormLogin = () => {
	let navigate = useNavigate()

	const [password, setPassword] = useState<string>("")
	const handleChange = (e: any) => {
		const { value } = e.target
		setPassword(value)
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()
		let userData = localStorage.getItem("user")
		if (!userData) {
			navigate("/sign-up")
		} else {
			const user = JSON.parse(userData)
			if (user.password === password) {
				navigate("/posts")
			} else {
				// navigate("/sign-up")
			}
		}
	}

	return (
		<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid item xs={12} sm={6}>
				<TextField
					fullWidth
					type='password'
					onChange={handleChange}
					name='password'
					required
					id='password'
					label='password'
					autoFocus
				/>
			</Grid>

			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Sign In
			</Button>
			<Grid container justifyContent='flex-end'>
				<Grid item>
					<Link href='/sign-up' variant='body2'>
						Forgot password? Sign up
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}

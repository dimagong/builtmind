import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

type LayoutProps = {
	children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<CssBaseline />
			<Container maxWidth='md'>
				<Box
					sx={{
						bgcolor: "F1F6F9",
						height: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					{children}
				</Box>
			</Container>
		</>
	)
}

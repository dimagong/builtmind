import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { ChangeEvent, useEffect, useState } from "react"
import { IPosts } from "../../interfaces"

export const FormPostDialog = ({ open, createPost, handleClickModal, initPost }: any) => {
	const [post, setPost] = useState<Partial<IPosts | null>>(initPost)

	useEffect(() => {
		setPost(initPost)
	}, [initPost])

	const handleConfirm = () => {
		if (post?.body && post?.title) {
			createPost(post)
		}
		setPost(null)
	}
	const handleClose = () => {
		handleClickModal(false)
	}

	const onChangePost = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setPost((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Type new post</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please enter the title and then the content of your post
					</DialogContentText>
					<TextField
						required
						name='title'
						margin='dense'
						id='title'
						label='Title'
						type='text'
						fullWidth
						variant='standard'
						value={post?.title ?? ""}
						onChange={onChangePost}
					/>
					<TextField
						required
						name='body'
						margin='dense'
						id='body'
						label='Content'
						type=''
						fullWidth
						variant='standard'
						multiline
						maxRows={4}
						value={post?.body ?? ""}
						onChange={onChangePost}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleConfirm}>Confirm</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

import { Button } from "@mui/material"
import { useState } from "react"
import { FormPostDialog } from "../../ui"
import { IPosts } from "../../interfaces"
import { v4 as uuidv4 } from "uuid"
import { createPostApi } from "../../api/services"
import { useContextPosts } from "../../hooks"

interface IModalViewProps {
	title?: string
}

export const ModalView = ({ title = "Create new post" }: IModalViewProps) => {
	const { posts, setPosts } = useContextPosts()
	const [open, setOpen] = useState<boolean>(false)

	const createPost = async (post: Partial<IPosts>) => {
		handleClickModal(false)
		const userId = Date.now()
		const data: Partial<IPosts> = { userId, ...post }
		const { data: upPost } = await createPostApi(data)
		setPosts([...posts, upPost])
	}
	const handleClickModal = (isOpen: boolean) => {
		setOpen(isOpen)
	}

	return (
		<div>
			<Button style={{ marginTop: 10 }} variant='outlined' onClick={() => handleClickModal(true)}>
				{title}
			</Button>
			<FormPostDialog open={open} handleClickModal={handleClickModal} createPost={createPost} />
		</div>
	)
}

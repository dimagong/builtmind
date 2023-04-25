import { useEffect, useState } from "react"
import { deleteTaskApi, updatePostApi } from "../../api/services"
import { useContextPosts } from "../../hooks"
import { IPosts } from "../../interfaces"
import { FormPostDialog, TablePosts } from "../../ui"

export const TablePostView = () => {
	const { posts, images, setPosts } = useContextPosts()
	const [open, setOpen] = useState<boolean>(false)
	const [selectedPost, setSelectedPost] = useState<IPosts | null>(null)
	useEffect(() => {
		if (selectedPost) {
			setOpen(true)
		}
	}, [selectedPost])

	const onEditePost = (data: IPosts) => {
		setSelectedPost(data)
	}

	const onDeletePost = async (data: IPosts) => {
		const { data: deletedPost } = await deleteTaskApi(data.id)
		const postsReduce = posts.filter((post) => post.id !== data.id)
		setPosts(postsReduce)
	}
	const handleClickModal = () => {
		setOpen(false)
		setSelectedPost(null)
	}

	const handleEditPost = async (data: IPosts) => {
		const { data: editedPost } = await updatePostApi(data.id, data)

		const findPost = posts.find((post) => post.id === editedPost.id)
		if (findPost) {
			findPost.body = editedPost.body
			findPost.title = editedPost.title
		}
		handleClickModal()
	}

	return (
		<>
			<TablePosts
				posts={posts}
				images={images}
				onEditePost={onEditePost}
				onDeletePost={onDeletePost}
			/>
			<FormPostDialog
				open={open}
				initPost={selectedPost}
				handleClickModal={handleClickModal}
				createPost={handleEditPost}
			/>
		</>
	)
}

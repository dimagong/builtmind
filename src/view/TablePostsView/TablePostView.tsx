import { useEffect, useState } from "react"
import { deleteTaskApi, updatePostApi } from "../../api/services"
import { useContextPosts } from "../../hooks"
import { IPosts } from "../../interfaces"
import { FormPostDialog, InputSearch, TablePosts } from "../../ui"

export const TablePostView = () => {
	const { posts, images, selectedPosts, setSelectedPosts } = useContextPosts()
	const [open, setOpen] = useState<boolean>(false)
	const [editedPost, setEditedPost] = useState<IPosts | null>(null)
	useEffect(() => {
		if (editedPost) {
			setOpen(true)
		}
	}, [editedPost])

	const onEditePost = (data: IPosts) => {
		setEditedPost(data)
	}

	const onDeletePost = async (data: IPosts) => {
		const { data: deletedPost } = await deleteTaskApi(data.id)
		const postsReduce = selectedPosts.filter((post) => post.id !== data.id)
		setSelectedPosts(postsReduce)
	}
	const handleClickModal = () => {
		setOpen(false)
		setEditedPost(null)
	}

	const handleEditPost = async (data: IPosts) => {
		//const { data: edPost } = await updatePostApi(data.id, data)
		const findPost = selectedPosts.find((post) => post.id === data.id)
		if (findPost) {
			findPost.body = data.body
			findPost.title = data.title
		}
		handleClickModal()
	}

	const onSearch = (searchValue: string) => {
		if (searchValue.trim().length) {
			const searchText = new RegExp(searchValue, "gi")
			const findСoincidence: IPosts[] = []
			selectedPosts.forEach((post: IPosts) => {
				for (const key in post) {
					const finfMatch = post[key as keyof typeof post].toString().match(searchText)
					if (finfMatch?.length) {
						const existPosts = findСoincidence.find((el) => el.id === post.id)
						if (!existPosts) findСoincidence.push(post)
					}
				}
			})
			if (findСoincidence.length) {
				setSelectedPosts(findСoincidence)
			} else {
				setSelectedPosts(posts)
			}
		} else {
			setSelectedPosts(posts)
		}
	}

	return (
		<>
			<InputSearch onSearch={onSearch} />
			<TablePosts
				posts={selectedPosts}
				images={images}
				onEditePost={onEditePost}
				onDeletePost={onDeletePost}
			/>
			<FormPostDialog
				open={open}
				initPost={editedPost}
				handleClickModal={handleClickModal}
				createPost={handleEditPost}
			/>
		</>
	)
}

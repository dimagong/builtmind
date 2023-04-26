import { useEffect, useState } from "react"
import { getPostsApi } from "../../api/services"

import { Layout } from "../../ui"
import { PostsProvider } from "../../hooks"
import { TablePostView } from "../TablePostsView"
import { ModalView as CreatePostModalView } from "../ModalView/ModalView"
import { useNavigate } from "react-router-dom"

export const ItemsListView = () => {
	let navigate = useNavigate()
	const user: string | null = localStorage.getItem("user")
	if (!user) {
		navigate("/authorization")
	}

	return (
		<Layout>
			<PostsProvider>
				<TablePostView />
				<CreatePostModalView />
			</PostsProvider>
		</Layout>
	)
}

import { useEffect, useState } from "react"
import { getPostsApi } from "../../api/services"

import { Layout } from "../../ui"
import { PostsProvider } from "../../hooks"
import { TablePostView } from "../TablePostsView"
import { ModalView as CreatePostModalView } from "../ModalView/ModalView"

export const ItemsListView = () => {
	return (
		<Layout>
			<PostsProvider>
				<TablePostView />
				<CreatePostModalView />
			</PostsProvider>
		</Layout>
	)
}

import { createContext, useContext, useEffect, useState } from "react"
import { getImagesPostsApi, getPostsApi } from "../api/services"
import { IPhotos, IPosts } from "../interfaces"

interface Props {
	children: React.ReactNode
}

interface IContest {
	posts: IPosts[]
	selectedPosts: IPosts[]
	images: IPhotos[]
	setPosts?: any
	setSelectedPosts?: any
}

const PostsContext = createContext<IContest>({ posts: [], images: [], selectedPosts: [] })

export const PostsProvider = ({ children }: Props) => {
	const [posts, setPosts] = useState<IPosts[]>([])
	const [images, setImages] = useState<any[]>([])
	const [selectedPosts, setSelectedPosts] = useState<IPosts[]>([])

	useEffect(() => {
		const getPosts = async () => {
			const { data: posts } = await getPostsApi()
			if (posts) {
				setPosts(posts)
				setSelectedPosts(posts)
			}
			const { data: images } = await getImagesPostsApi()
			if (images) setImages(images)
		}
		getPosts()
	}, [])

	return (
		<PostsContext.Provider value={{ posts, images, setPosts, selectedPosts, setSelectedPosts }}>
			{children}
		</PostsContext.Provider>
	)
}

export const useContextPosts = () => {
	return useContext(PostsContext)
}

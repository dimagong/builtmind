import { createContext, useContext, useEffect, useState } from "react"
import { getImagesPostsApi, getPostsApi } from "../api/services"
import { IPhotos, IPosts } from "../interfaces"

interface Props {
	children: React.ReactNode
}

interface IContest {
	posts: IPosts[]
	images: IPhotos[]
	setPosts?: any
}

const PostsContext = createContext<IContest>({ posts: [], images: [] })

export const PostsProvider = ({ children }: Props) => {
	const [posts, setPosts] = useState<IPosts[]>([])
	const [images, setImages] = useState<any[]>([])

	useEffect(() => {
		const getPosts = async () => {
			const { data: posts } = await getPostsApi()
			if (posts) setPosts(posts)
			const { data: images } = await getImagesPostsApi()
			if (images) setImages(images)
		}
		getPosts()
	}, [])

	return (
		<PostsContext.Provider value={{ posts, images, setPosts }}>{children}</PostsContext.Provider>
	)
}

export const useContextPosts = () => {
	return useContext(PostsContext)
}

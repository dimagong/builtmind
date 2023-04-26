import { createContext, useContext, useEffect, useState } from "react"
import { getImagesPostsApi, getPostsApi } from "../api/services"
import { IFormData, IPhotos, IPosts } from "../interfaces"

interface Props {
	children: React.ReactNode
}

const initFormData = {
	firstName: "",
	lastName: "",
	password: "",
	status: "",
}

const AuthorizationContext = createContext<IFormData>(initFormData)

// export const AuthorizationProvider = ({ children }: Props) => {
// 	const [posts, setPosts] = useState<IFormData[]>([])
// 	const [images, setImages] = useState<any[]>([])
// 	const [selectedPosts, setSelectedPosts] = useState<IFormData[]>([])

// 	useEffect(() => {
// 		const getPosts = async () => {
// 			const { data: posts } = await getPostsApi()
// 			if (posts) {
// 				setPosts(posts)
// 				setSelectedPosts(posts)
// 			}
// 			const { data: images } = await getImagesPostsApi()
// 			if (images) setImages(images)
// 		}
// 		getPosts()
// 	}, [])

// 	return (
// 		<AuthorizationContext.Provider>
// 			{children}
// 		</AuthorizationContext.Provider>
// 	)
// }

// export const useContextAuthorization = () => {
// 	return useContext(AuthorizationContext)
// }
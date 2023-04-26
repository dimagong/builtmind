import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { AuthorizationView, ItemView, ItemsListView, SignUpView } from "./view"
import { Loader } from "./ui"

let router = createBrowserRouter([
	{
		path: "/posts",
		element: <ItemsListView />,
		loader: Loader,
		ErrorBoundary: Loader,
		children: [
			{
				path: ":id",
				loader: Loader,
				element: <ItemView />,
				ErrorBoundary: Loader,
			},
		],
	},
	{
		path: "/",
		loader: Loader,
		ErrorBoundary: Loader,
		element: <AuthorizationView />,
	},
	{
		path: "/sign-up",
		loader: Loader,
		ErrorBoundary: Loader,
		element: <SignUpView />,
	},
])

function App() {
	return <RouterProvider router={router} fallbackElement={<Loader />} />
}

export default App

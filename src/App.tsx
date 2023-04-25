import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { AuthorizationView, ItemView, ItemsListView } from "./view"
import { Loader } from "./ui"

let router = createBrowserRouter([
	{
		path: "/",
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
		path: "/authorization",
		loader: Loader,
		ErrorBoundary: Loader,
		element: <AuthorizationView />,
	},
])

function App() {
	return <RouterProvider router={router} fallbackElement={<Loader />} />
}

export default App

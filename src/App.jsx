import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./pages/Home"
import CounterView from "./features/counter/CounterView"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'counter', element: <CounterView /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
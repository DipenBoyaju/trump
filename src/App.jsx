import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./pages/Home"
import CounterView from "./features/counter/CounterView"
import InputField from "./features/inputField/InputField"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'counter', element: <CounterView /> },
        { path: 'inputField', element: <InputField /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
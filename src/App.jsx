import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./pages/Home"
import CounterView from "./features/counter/CounterView"
import InputField from "./features/inputField/InputField"
import ToggleView from "./features/Toggle/ToggleView"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'counter', element: <CounterView /> },
        { path: 'inputField', element: <InputField /> },
        { path: 'toggle', element: <ToggleView /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
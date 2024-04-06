import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout"
import Home from "./pages/Home"
import CounterView from "./features/counter/CounterView"
import InputField from "./features/inputField/InputField"
import ToggleView from "./features/Toggle/ToggleView"
import CharacterCounter from "./features/characterCounter/CharacterCounter"
import Todo from "./features/todo/Todo"

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
        { path: 'toggle', element: <ToggleView /> },
        { path: 'todo', element: <Todo /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App
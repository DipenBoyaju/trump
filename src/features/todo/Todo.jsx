import { Button } from "@material-tailwind/react"

const Todo = () => {
  return (
    <div className="p-4 text-center gap-y-4">
      <h1 className="uppercase text-center p-4 font-bold text-3xl text-green-500">Todo App</h1>
      <input type="text" className="border-2 border-black h-12 w-96" />
      <Button className="bg-yellow-600 p-2 px-8 rounded-3xl my-6">Add</Button>

    </div>
  )
}
export default Todo
import { Button } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { showToggle } from "./toggleSlice";

const ToggleView = () => {

  const dispatch = useDispatch();

  const { toggle } = useSelector((state) => state.toggleSlice)

  console.log(toggle);
  return (
    <div className="p-4 text-center gap-y-4">
      <h1 className="uppercase text-center p-4 font-bold text-3xl text-pink-500">Toggle Visibility</h1>
      <Button ripple={true} className="text-white bg-pink-500 rounded-3xl px-8 my-6" size="sm" onClick={() => dispatch(showToggle())}>{toggle ? 'Hide' : 'Show'} Text</Button>
      {toggle ? <h1 className="bg-pink-600 text-white p-4 text-xl">Im the visible text</h1> : ''}
    </div>
  )
}
export default ToggleView
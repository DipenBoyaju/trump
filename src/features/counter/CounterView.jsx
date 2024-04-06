import { Button } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {

  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counterSlice)
  return (
    <div className="p-4 text-center gap-y-4">
      <h1 className="uppercase text-center p-4 font-bold text-3xl text-teal-400">Counter</h1>

      <h2 className="py-6 font-bold text-6xl text-indigo-800">{count}</h2>
      <div className=" flex gap-4 justify-center">
        <Button ripple="true" size="sm" className="bg-green-400 rounded-3xl" onClick={() => dispatch(increment())}>Increment</Button>
        <Button ripple={true} size="sm" className="bg-red-400 rounded-3xl" onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
      <Button ripple={true} className="bg-indigo-500 rounded-3xl mt-4" size="sm" onClick={() => dispatch(reset())}>Reset</Button>
    </div>
  )
}
export default CounterView
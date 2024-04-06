import { useDispatch, useSelector } from "react-redux"
import { showText } from "./characterSlice";


const CharacterCounter = () => {

  const dispatch = useDispatch();

  const { text } = useSelector((state) => state.characterSlice)

  const handleClick = (e) => {
    dispatch(showText(e.target.value))
  }


  return (
    <div className="p-4 text-center gap-y-4">
      <h1 className="uppercase text-center p-4 font-bold text-3xl text-green-500">Character Counter</h1>
      <textarea onChange={handleClick} cols={50} rows={10} className="border-2 border-black"></textarea>
      <h2>Character Count: {text.length}</h2>
    </div>
  )
}
export default CharacterCounter
import { useDispatch, useSelector } from "react-redux"
import { showText } from "./InputFieldSlice";

const InputField = () => {

  const dispatch = useDispatch();

  const { text } = useSelector((state) => state.inputFieldSlice)

  const handleInputChange = (e) => {
    dispatch(showText(e.target.value));
  }

  return (
    <div className="p-4 text-center gap-y-4">
      <h1 className="uppercase text-center p-4 font-bold text-3xl text-green-500">Controlled Input Field</h1>
      <input type="text" className="border-2 border-black w-96 h-14" onChange={handleInputChange} />
      <h3>Text: {text}</h3>
    </div>
  )
}
export default InputField
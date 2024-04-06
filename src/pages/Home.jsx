import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto text-center py-8">
      <h1 className="text-2xl font-bold uppercase py-6">Projects using Redux</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 py-4 h-[300px] lg:h-[450px]">
        <Link to='/counter' className="bg-gray-900 hover:bg-gray-950 items-center flex justify-center"><Button className="border-2 border-gray-900 text-white rounded-3xl py-2 px-6 transition-all text-xl bg-transparent">Counter</Button></Link>
        <Link to='/inputField' className="bg-green-600 hover:bg-green-700 transition-all flex justify-center items-center"><Button className="border-2 border-green-600 text-white rounded-3xl py-2 px-6 text-xl bg-transparent">Controlled Input Fied</Button></Link>
        <Link to='/toggle' className="hover:bg-pink-700 bg-pink-600 flex justify-center transition-all items-center"><Button className="border-2 border-pink-600 text-white rounded-3xl py-2 px-6 text-xl bg-transparent">Toggle</Button></Link>
        <Link to='/characterCounter' className="bg-blue-600 hover:bg-blue-700 flex justify-center items-center"><Button className="border-2 border-blue-600 text-white rounded-3xl py-2 px-6 text-xl bg-transparent">Character Counter</Button></Link>
        <Link to='/todo' className="bg-yellow-600 hover:bg-yellow-700 flex justify-center items-center"><Button className="border-2 border-yellow-600 text-white rounded-3xl py-2 px-6 text-xl bg-transparent">ToDo List</Button></Link>
      </div>
    </div>
  )
}
export default Home
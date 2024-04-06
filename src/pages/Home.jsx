import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto text-center">
      <h1 className="text-2xl font-bold uppercase">Projects using Redux</h1>
      <div className="flex justify-center flex-col gap-4 py-4">
        <Link to='/counter'><Button className="border-2 border-black text-black rounded-3xl py-2 px-6 hover:bg-black hover:text-white transition-all">Counter</Button></Link>
        <Link to='/inputField'><Button className="border-2 border-green-600 text-green-600 rounded-3xl py-2 px-6 hover:bg-green-600 hover:text-white transition-all">Controlled Input Fied</Button></Link>
        <Link to='/toggle'><Button className="border-2 border-pink-600 text-pink-600 rounded-3xl py-2 px-6 hover:bg-pink-600 hover:text-white transition-all">Toggle</Button></Link>
      </div>
    </div>
  )
}
export default Home
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto text-center">
      <h1 className="text-2xl font-bold uppercase">Projects using Redux</h1>
      <div className="">
        <Link to='/counter'><Button className="border-2 border-black text-black rounded-3xl py-2 px-6 hover:bg-black hover:text-white transition-all">Counter</Button></Link>
      </div>
    </div>
  )
}
export default Home
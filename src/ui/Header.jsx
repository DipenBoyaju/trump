import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="flex bg-black text-white justify-between p-3 flex-row">
        <div className="">
          <h1>LOGO</h1>
        </div>
        <div className="gap-4 flex">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Contact</NavLink>
        </div>
      </nav>
    </div>
  )
}
export default Header
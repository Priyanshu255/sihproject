import { Link } from "react-router-dom";

const TopBar = ({pageName, login, home, logout}) => {
  return (
    <div className="w-full h-16 bg-[#96b6c5] relative py-5 drop-shadow-lg">
      <h1 className="font-bold text-lg ml-5" >{pageName}</h1>
      {login && <Link to="/login" className="absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Login</Link>}
      {home && <Link to="/" className="absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Home</Link>}
      {logout && <Link to="/" className="absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md">Logout</Link>}
    </div>
  )
}

export default TopBar

import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="https://millikensac.com" className="flex items-center">
                <FaHome className="h-8 w-8 text-white mr-3" />
            </NavLink>
          </div>

          {/* Links */}
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <NavLink to="https://millikensac.com" className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "underline text-yellow-400" : "hover:underline"}>Rubber Duck Gala</NavLink>
            </li>
            <li>
              <NavLink to="/ticketpage" className={({ isActive }) => isActive ? "underline text-yellow-400" : "hover:underline"}>Tickets</NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar
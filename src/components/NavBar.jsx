import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="https://millikensac.com" className="flex items-center">
                <FaHome className="h-8 w-8 text-white mr-3" />
            </Link>
          </div>

          {/* Links */}
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link to="https://millikensac.com" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">Rubber Duck Gala</Link>
            </li>
            <li>
              <Link to="/ticketpage" className="hover:underline">Tickets</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar
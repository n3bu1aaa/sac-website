import { Link, useLocation } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

const NavBar = () => {
  const location = useLocation();
  return (
    <div>
        <nav style = {{ backgroundColor: 'rgb(255, 255, 255)' }} className="p-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="https://millikensac.com" className="h-full flex items-center">
                <img src={logo} alt = "Logo" className='max-h-full object-contain'/>
            </Link>
          </div>

          {/* Links */}
          <ul className="flex space-x-6 text-2xl">
            <li>
              <Link to="https://millikensac.com" className="hover:underline text-blue-800">Home</Link>
            </li>
            <li>
              <Link to="/" className={`hover:underline ${location.pathname === '/' ? 'underline text-black-400' : 'text-blue-800'}`}>Rubber Duck Gala</Link>
            </li>
            <li>
              <Link to="/ticketpage" className={`hover:underline ${location.pathname === '/ticketpage' ? 'underline text-black-400' : 'text-blue-800'}`}>Tickets</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar
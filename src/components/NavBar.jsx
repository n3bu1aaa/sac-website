import { BrowserRouter as Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className="bg-blue-500 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="https://millikensac.com" className="flex items-center">
              <img src="/images/logo.webp" alt="Logo" className="h-10 mr-3" />
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
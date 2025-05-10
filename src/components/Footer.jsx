import logo from '../../src/assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-4 h-25 flex items-center justify-between">
            <div className="flex items-center">
                <Link to="https://millikensac.com" className="h-full flex items-center">
                    <img src={logo} alt = "Logo" className='max-h-full object-contain'/>
                </Link>
            </div>
            <div className='flex items-center'>
                <h2 className="text-blue-900 font-semibold text-2xl">
                    Made by ???
                </h2>
            </div>
        </footer>
    )
}

export default Footer;
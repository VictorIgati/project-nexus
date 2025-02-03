// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-indigo-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">Nexus</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-indigo-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/pets" className="text-white hover:text-indigo-300">Pets</Link>
                    </li>
                    <li>
                        <Link to="/adopt" className="text-white hover:text-indigo-300">Adopt</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
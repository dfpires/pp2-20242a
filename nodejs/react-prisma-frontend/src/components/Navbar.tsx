
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, handleLogout }) => {
  
  
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          {isAuthenticated && (
            <>
          <li>
            <Link to="/users" className="text-white">
              Usuários
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/orders" className="text-white">
              Pedidos
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="bg-blue-700 text-white p-2 w-full">
              Logout
            </button>
          </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

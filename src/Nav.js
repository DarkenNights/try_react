import './Nav.css';
import { Link } from 'react-router-dom';
import AuthService from './services/authService';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(AuthService.getCurrentUser);

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <ul>
          <Link to="/products">
            <li>Les produits</li>
          </Link>
          <Link to="/products/add">
            <li>Ajouter un produit</li>
          </Link>
          {user ? (
            <Link to="/login" onClick={handleLogout}>
              <li>Déconnexion</li>
            </Link>
          ) : (
            <div style={{ display: 'inherit' }}>
              <Link to="/login">
                <li>Connexion</li>
              </Link>
              <Link to="/register">
                <li>Inscription</li>
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default App;

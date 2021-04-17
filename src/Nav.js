import './Nav.css';
import { Link } from 'react-router-dom';

function App() {
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
          <Link to="/login">
            <li>Connexion</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default App;

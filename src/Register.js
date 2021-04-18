import './Login.css';
import { useState } from 'react';
import AuthService from './services/authService';

function Login({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.register(name, email, password);
      if (response.status === 201) {
        const response = await AuthService.login(email, password);
        if (response.status === 200) {
          history.push('/products');
          window.location.reload();
        }
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      <h1>Vous êtes sur la page d'inscription</h1>
      <form>
        {error && <div className="login-form-error">{error}</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Connexion
        </button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import AuthService from "./services/authService"

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await AuthService.login(email, password)
  }

  return (
    <div>
      <h1>Vous êtes sur la page de connexion</h1>
      <form>
        <input type="text" placeholder="Email" value={email} onChange={handleEmailChange}/>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit" onClick={handleSubmit}>Connexion</button>
      </form>
    </div>
  );
}

export default Login;

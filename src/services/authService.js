import axios from 'axios';

const BASE_URL = 'http://localhost:4000/fr/user/';

class AuthService {
  async login(email, password) {
    const response = await axios({
      method: 'POST',
      url: BASE_URL + 'login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    });
    if (response.status === 200 && response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  }

  async register(name, email, password) {
    return axios({
      method: 'POST',
      url: BASE_URL + 'register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name,
        email,
        password,
      },
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();

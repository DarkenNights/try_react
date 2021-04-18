import axios from "axios"

const BASE_URL = "http://localhost:4000/fr/user/"

class AuthService {

  login(email, password)
  {
    return axios({
      method: 'post',
      url: BASE_URL + "login",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email: email,
        password: password
      }
    }).then(response => {
      if(response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    }).catch((error) => {
      console.log(error)
    });
  }

}

export default new AuthService();

import axios from "axios";
import swal from "sweetalert";


export const loginService = (value) => {
  let formData = {
    username: value.username,
    password: value.password
  }
  console.log(formData)
  axios.post("https://www.melivecode.com/api/login", formData)
    .then((response) => {
      console.log(response);
      if (response.data.status === "ok") {
        let tokenValue = response.data.accessToken;
        localStorage.setItem("token", tokenValue);
        sessionStorage.setItem('token', (response.data.accessToken))
        sessionStorage.setItem('user', JSON.stringify(response.data.user))
        swal(response.data.message, "Success")
      }
    })
    .catch((error) => {
      console.log("errrrrrr", error);
      swal(error.message)
    });
}

export const registerUser = (value) => {
  axios
    .post(
      "https://www.melivecode.com/api/users/create", {
      fname: value.first_name,
      lname: value.last_name,
      username: value.user_name,
      email: value.email,
      password: value.password,
      avatar: 'https://www.melivecode.com/users/cat.png'
    }
    )
    .then((response) => {
      console.log(response);
      swal(response.data.message, "Success")

    })
    .catch((error) => {
      console.log("errrrrror", error);
      swal(error.response.data.message)
    });
}

export const getUserData = (id) => {
  axios
    .get(`https://www.melivecode.com/api/users/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
}




import axios from "axios";
import TokenManager from "./TokenManager";

const UserAPI = {
  getAllUsers: () =>
    axios
      .get("http://localhost:8080/users", {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data.users),

  postUser: (newUser) => axios.post("http://localhost:8080/users", newUser),

  getUserByEmail: (email) =>
    axios
      .get("http://localhost:8080/email/" + email, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data),

  updateUser: (updateUser) =>
    axios.put(`http://localhost:8080/users/${updateUser.id}`, updateUser, {
      headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
    }),

  getUserById: (userId) =>
    axios
      .get(`http://localhost:8080/users/id/${userId}`, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data),
};

export default UserAPI;

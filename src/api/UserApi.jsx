import axios from "axios";

const UserAPI = {
    getAllUsers: () => axios.get("http://localhost:8080/users")
    .then(response => response.data.users),
    postUser: (newUser) => axios.post("http://localhost:8080/users",newUser)
}

export default UserAPI;
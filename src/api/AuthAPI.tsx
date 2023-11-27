import axios from "axios";
import TokenManager from "./TokenManager";

const AuthAPI = {
  login: (email: string, password: string) =>
    axios
      .post("http://localhost:8080/tokens", { email, password })
      .then((response) => response.data.accessToken)
      .then((accessToken) => TokenManager.setAccessToken(accessToken)),
};

export default AuthAPI;

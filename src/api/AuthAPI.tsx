import axios from "axios";
import TokenManager from "./TokenManager";
import jwtDecode from "jwt-decode";
import { DecodedToken } from "./DecodedToken";

const AuthAPI = {
  login: (email: string, password: string) =>
    axios
      .post("http://localhost:8080/tokens", { email, password })
      .then((response) => {
        const accessToken = response.data.accessToken;
        const decodedToken = jwtDecode<DecodedToken>(accessToken);

        const userRole = decodedToken.roles;

        TokenManager.setAccessToken(accessToken);
        return { accessToken, userRole };
      }),
};

// const AuthAPI = {
//   login: (email: string, password: string) =>
//     axios
//       .post("http://localhost:8080/tokens", { email, password })
//       .then((response) =>  response.data.accessToken)
//       .then((accessToken) => TokenManager.setAccessToken(accessToken)),
// };

export default AuthAPI;

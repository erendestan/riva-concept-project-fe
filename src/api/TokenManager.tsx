//import jwt_decode from "jwt-decode";

import jwtDecode from "jwt-decode";

const TokenManager = {
  getAccessToken: () => localStorage.getItem("accessToken"),
  getClaims: () => {
    if (!localStorage.getItem("claims")) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem("claims"));
  },
  setAccessToken: (token: string) => {
    localStorage.setItem("accessToken", token);
    const claims = jwtDecode(token);
    localStorage.setItem("claims", JSON.stringify(claims));
    return claims;
  },
  clear: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("claims");
  },

  isAuthenticated: () => {
    // Check if the access token exists
    const accessToken = localStorage.getItem("accessToken");
    return accessToken !== null;
  },
};

export default TokenManager;

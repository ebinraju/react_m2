import { jwtDecode } from "jwt-decode";

const getUserClaims = () => {
    let token = localStorage.getItem("access_token");
    if (token && token !== null && token !== "null") {
      try {
        const decodedJwt = jwtDecode(token);
        if (decodedJwt && decodedJwt.exp * 1000 > Date.now()) {
          return decodedJwt;
        }
      } catch (e) {
        return null;
      }
    }
    return null;
  };
  
  export const isLoginSessionExists = () => {
    const userclaims = getUserClaims();
    if (!userclaims || userclaims == null) return false;
    return true;
  };
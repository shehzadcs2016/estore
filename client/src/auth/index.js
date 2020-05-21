import jwtDecode from "jwt-decode";
import store from "../redux/index";
import { Logout } from "../redux/actions/index";
export const isAuthenticated = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    const decodedtoken = jwtDecode(token);
    if (decodedtoken.exp * 1000 < Date.now()) {
      store.dispatch(Logout());
      window.location.href = "/SignIn";
      return false;
    }
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    store.dispatch({ type: "SET_UNAUTHENTICATED" });
    return false;
  }
};
export const SignOut = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    store.dispatch({ type: "SET_UNAUTHENTICATED" });
    window.location.href = "/login";
  }
};

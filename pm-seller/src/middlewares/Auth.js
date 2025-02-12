// import urls from '../urls.json';
import axios from "axios";

export const checkAuth = async ({setUser, contextData}) => {
  try {
    const res = await axios.post("/api/auth/check", { token: localStorage.getItem("user"), type: "seller" });
    if (res.data.ok) {
      setUser(true);
      contextData.setAuth(localStorage.getItem("user"));
    }
    else {
      setUser(false);
      contextData.setAuth(null);
      localStorage.removeItem("user");
    }
  }
  catch (error) {
    console.log(error);
    contextData.setAuth(null);
    localStorage.removeItem("user");
  }
};
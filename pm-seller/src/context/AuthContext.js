import { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const contextData = {
    auth: user,
    setAuth: setUser
  };
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}
import { useContext, useState } from "react";
import { createContext } from "react";

const auth = createContext();

const useAuth = () => {
  return useContext(auth);
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [logged, setLogged] = useState(() => {
    return sessionStorage.getItem("auth") || false;
  });

  const getUser = () => {
    return JSON.parse(sessionStorage.getItem("auth"));
  };
  return (
    <auth.Provider value={{ auth, setAuth, logged, setLogged, getUser }}>
      {children}
    </auth.Provider>
  );
};

export { AuthProvider };
export default useAuth;
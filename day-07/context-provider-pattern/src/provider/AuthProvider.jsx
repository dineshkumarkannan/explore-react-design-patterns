import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { AuthContext } from "../context";

const initalState = {
  isAuthenticated: false,
  user: {
    name: "",
  },
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initalState);

  const login = (username, password) => {
    if (
      username &&
      password &&
      username.toLowerCase() === "admin" &&
      password === "admin"
    ) {
      setAuthState({
        isAuthenticated: true,
        user: {
          name: username,
        },
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthState(initalState);
  };

  useEffect(() => {
    // setAuthState((prev) => ({ ...prev, isAuthenticated: true }));
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

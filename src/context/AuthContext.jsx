import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    console.log("AuthContext invoked.");
  }, []);

  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

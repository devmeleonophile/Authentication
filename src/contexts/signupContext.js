import React, { createContext, useState, useEffect, useContext } from "react";
import { authentication } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return authentication.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return authentication.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return authentication.signOut();
  }
  useEffect(() => {
    const unsubrcibe = authentication.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubrcibe;
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

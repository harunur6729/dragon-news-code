import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

 const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
 };

  const authinfo = {
    user,
    setUser,
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;

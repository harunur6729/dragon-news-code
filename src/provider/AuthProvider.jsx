import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)

 const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
 };

 //logOut
 const logOut =()=>{
  return signOut(auth)
 }

  const authinfo = {
    user,
    setUser,
    createNewUser,
    logOut
  };

  //for observer
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;

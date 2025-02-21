import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);
  console.log(loading ,user)

 const createNewUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
 };

 //logOut
 const logOut =()=>{
  setLoading(true)
  return signOut(auth)
 }
 
//  sing in
const userLogin = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

  const authinfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,

  };

  //for observer
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false);
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

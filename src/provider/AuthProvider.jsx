import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name:"Harunur Rashid",
        email:"harun@rahisd.com"
    })
     const authinfo ={
        user,
        setUser
     }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
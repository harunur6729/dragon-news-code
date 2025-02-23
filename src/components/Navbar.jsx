import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className=" font-bold">{user && user.email}</div>
            <div className="nav space-x-6">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/career'>About</Link>
            </div>
            <div className="login flex items-center gap-5 py-1">
                <div>
                    {user && user?.email? (
                        <div>
                            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                            <p>{user.displayName}</p>
                        </div>
                    ) : (
                        <img src={userIcon} alt="" />
                    )}
                </div>
                {
                    user && user?.email? (<button onClick={logOut} className="btn rounded-none">Logout</button>) 
                    :
                    (<Link to="/auth/login" className="btn rounded-none">Login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user} =useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className=" font-bold">{user && user.name}</div>
            <div className="nav space-x-6">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/career'>About</Link>
            </div>
            <div className="login flex items-center gap-5 py-1">
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className="btn rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
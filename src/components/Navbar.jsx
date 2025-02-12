import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-6">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/career'>About</Link>
            </div>
            <div className="login flex items-center gap-5 py-1">
                <img src={userIcon} alt="" />
                <button className="btn rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
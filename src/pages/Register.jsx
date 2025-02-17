import { useContext } from "react";
import { Link } from "react-router-dom";
import  { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser,setUser} = useContext(AuthContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        //get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({name,photo, email, password})
        createNewUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user)
            console.log(user)
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
        
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl py-6 rounded-none">
          <h2 className="text-3xl font-bold text-center">Login your Account</h2>
          <form onSubmit={handleSubmit} className="card-body">
            {/* name field */}
          <div className="form-control ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
              name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered bg-slate-200"
                required
              />
            </div>
            {/* Photo Url field */}
          <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
              name="photo"
                type="text"
                placeholder="enter photo url"
                className="input input-bordered bg-slate-200"
                required
              />
            </div>
            {/* email field */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered bg-slate-200"
                required
              />
            </div>
            {/* password field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered bg-slate-200"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none font-bold">Register</button>
            </div>
            <p> Already have an account? <Link to="/auth/login" className="font-semibold text-red-500" >Login?</Link> </p>
          </form>
        </div>
      </div>
    );
};

export default Register;
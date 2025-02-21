import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser} = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

const handleSubmit =(e)=>{
  e.preventDefault();
  const form = e.target;
  const email =form.email.value;
  const password= form.password.value;
  userLogin(email, password)
  .then(result =>{
    const user = result.user;
    setUser(user)
    navigate(location?.state?location.state : "/")
    
  })
  .catch((error) => {
    alert(error.code);
  });
  console.log({email, password})
}
   
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl py-6 rounded-none">
        <h2 className="text-3xl font-bold text-center">Login your Account  </h2>
        <form onSubmit={handleSubmit} className="card-body">
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
            <button className="btn btn-neutral rounded-none font-bold">Login</button>
          </div>
          <p> Don`t have an account? <Link to="/auth/register" className="font-semibold text-red-500" >Register?</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

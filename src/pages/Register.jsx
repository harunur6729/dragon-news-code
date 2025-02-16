import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl py-6 rounded-none">
          <h2 className="text-3xl font-bold text-center">Login your Account</h2>
          <form className="card-body">
            {/* name field */}
          <div className="form-control ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="email"
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
                type="email"
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
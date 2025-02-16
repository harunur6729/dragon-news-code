const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl py-6 rounded-none">
        <h2 className="text-3xl font-bold text-center">Login your Account</h2>
        <form className="card-body">
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
            <button className="btn btn-neutral rounded-none font-bold">Login</button>
          </div>
          <p>Don't have an account? <span className="text-red-500">Register</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

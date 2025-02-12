import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold">Login With</h1>
      <div className="flex flex-col gap-2 mt-3">
        <div>
          <button className="w-full flex border border-gray-200 px-4 py-2 gap-2">
            <FaGoogle className="text-2xl"></FaGoogle>{" "}
            <span>Login with Google</span>
          </button>
        </div>
        <div>
          <button className="w-full flex gap-2 border border-gray-200 px-4 py-2">
            <FaGithub className="text-2xl"></FaGithub>{" "}
            <span>Login with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;

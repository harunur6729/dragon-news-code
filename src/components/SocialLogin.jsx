import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold">Login With</h1>
      <div className="flex flex-col gap-2 mt-3 ">
        
          <button className="w-full  flex justify-center border border-gray-200 px-4 py-2 gap-2">
            <FaGoogle className="text-2xl"></FaGoogle>{" "}
            <span>Login with Google</span>
          </button>
       
          <button className="w-full justify-center flex gap-2 border border-gray-200 px-4 py-2">
            <FaGithub className="text-2xl"></FaGithub>{" "}
            <span>Login with Github</span>
          </button>
       
      </div>
    </div>
  );
};

export default SocialLogin;

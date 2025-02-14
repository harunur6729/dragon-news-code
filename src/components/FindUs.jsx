import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const FindUs = () => {
  return (
    <div className="mt-6">
        <h1 className="font-semibold">Find Us On</h1>
      <div className="join *:bg-white *:text-black flex join-vertical">
        <button className="btn join-item justify-start border-gray-200 hover:bg-gray-200"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item  justify-start border-gray-200 hover:bg-gray-200"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item justify-start border-gray-200 hover:bg-gray-200"><FaInstagram className="text-amber-600"> </FaInstagram>Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;

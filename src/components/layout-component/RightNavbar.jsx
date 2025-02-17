import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
  return (
    <div className="pl-4">
      <div>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
      </div>
    </div>
  );
};

export default RightNavbar;

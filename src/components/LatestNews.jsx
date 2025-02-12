import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center bg-slate-300 py-2">
            <p className="bg-[#D72050] text-white px-3 text-center font-bold py-1 text-2xl">Latest</p>
            <Marquee className="text-3xl" pauseOnHover={true} speed={100}>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
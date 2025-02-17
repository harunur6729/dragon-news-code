import PropTypes from "prop-types";
import { FaEye, FaHome, FaShare, FaStar } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  const {
    others_info,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = singleNews;
  return (
    <div className="mb-12 ">

        {/* header part start */}
      <div className="flex justify-between p-4 bg-gray-200">
        <div className="flex gap-2">
          <img className="rounded-full w-10 " src={author.img} alt="" />
          <div>
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="space-x-2">
          <button>
            <FaShare></FaShare>
          </button>
          <button>
            <FaHome></FaHome>
          </button>
        </div>
      </div>

      {/* middle part start */}
      <div>
        <h1 className="font-semibold">{title}</h1>
        <img className="w-full" src={image_url} alt="" />
        <p>{details} </p>
        <button className="text-amber-600 font-semibold">Read More</button>

        {/* lower part start */}
        <div className="flex justify-between px-6">
            <div className="flex gap-2 py-4">
                <FaStar className="text-red-300"></FaStar>
                <FaStar className="text-red-300"></FaStar>
                <FaStar className="text-red-300"></FaStar>
                <FaStar className="text-red-300"></FaStar>
                <p className="items-center">{rating.number}</p>
            </div>

            <div className="flex gap-2 py-4">
                <FaEye></FaEye>
                <p className="items-center">{total_view}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default NewsCard;

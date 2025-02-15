import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbat = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="font-semibold">All Caterogy({categories.length})</h1>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} className="btn hover:bg-[#E7E7E7] bg-white text-black mx-6 border-none " key={category.category_id}>{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbat;

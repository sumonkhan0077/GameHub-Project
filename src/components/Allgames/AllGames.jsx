import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import AllGamesCads from "../AllGamesCards/AllGamesCads";
import Spinner from "../Spinner/Spinner";

const AllGames = () => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
    const [categoryLoading, setCategoryLoading] = useState(false);

   const handleCategoryChange = (cat) => {
    setCategoryLoading(true);
    setSelectedCategory(cat);

    setTimeout(() => {
      setCategoryLoading(false);
    }, 400);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p) =>
            p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div data-aos="fade-up" className="max-w-[1150px] mx-auto mt-25">
      <title>GameHub-all-game</title>
      <div className="text-center">
        <h2 data-aos="fade-right" className='font-bold text-3xl'> YOUR NEXT FAVORITE GAME AWAITS</h2>
            <p data-aos="fade-left" className='text-[#535353db] mt-2'>Check out the top-rated games and connect <br /> with gamers everywhere</p>
            <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />
      </div>
      

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {[
          "all",
          "Action",
          "Adventure",
          "RPG",
          "FPS",
          "Racing",
          "Sports",
          "Strategy",
          "Battle Royale",
          "MOBA",
          "Horror",
          "Simulation",
          "Sandbox",
          "Shooter",
          "Party",
        ].map((cate) => (
          <button
            key={cate}
            onClick={() => handleCategoryChange(cate)}
            data-aos="slide-up"
            className={`px-4 py-2 rounded-lg font-medium uppercase transition ${
              selectedCategory.toLowerCase() === cate.toLowerCase()
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>
       <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />

      {loading  || categoryLoading ? (
        <Spinner />
      ) : (
        <div className="max-w-[1150px] mx-auto grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <AllGamesCads key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No games found in this category 
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllGames;

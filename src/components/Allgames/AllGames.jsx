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
    <div>
      <h1 className="text-center text-4xl font-bold mt-25 mb-10">All Games</h1>


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
            className={`px-4 py-2 rounded-xl font-medium capitalize transition ${
              selectedCategory.toLowerCase() === cate.toLowerCase()
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>


      {loading  || categoryLoading ? (
        <Spinner />
      ) : (
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

import React, { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import AllGamesCads from "../AllGamesCards/AllGamesCads";
import Spinner from "../Spinner/Spinner";

const AllGames = () => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [finalProducts, setFinalProducts] = useState([]);
  // console.log(products)

  useEffect(() => {
    const dataToFilter = products || [];
    let result = dataToFilter;

    // Search filter
   if (search.trim()) {
  const term = search.trim().toLowerCase();
  result = result.filter((p) =>
    p.title && p.title.toLowerCase().includes(term)
  );
}

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFinalProducts(result);
  }, [products, search, selectedCategory]);

  useEffect(() => {
    if (search === "") {
      setCategoryLoading(false);
      return;
    }

    setCategoryLoading(true);

    const timeout = setTimeout(() => {
      setCategoryLoading(false);
    }, 600);
    return () => clearTimeout(timeout);
  }, [search]);

  const handleCategoryChange = (cat) => {
    setCategoryLoading(true);
    setSelectedCategory(cat);

    setTimeout(() => {
      setCategoryLoading(false);
    }, 400);
  };

  return (
    <div data-aos="fade-up" className="max-w-[1150px] mx-auto mt-25">
      <title>GameHub-all-game</title>
      <div className="text-center">
        <h2 data-aos="fade-right" className="font-bold text-3xl">
          {" "}
          YOUR NEXT FAVORITE GAME AWAITS
        </h2>
        <p data-aos="fade-left" className="text-[#535353db] mt-2">
          Check out the top-rated games and connect <br /> with gamers
          everywhere
        </p>
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

      <div className="flex justify-end mb-8">
        <div
          data-aos="flip-up"
          className="flex items-center w-96 bg-gray-50 border border-gray-200 rounded-lg p-1 "
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            type="text"
            className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-gray-700 placeholder-gray-400"
          />
          <button className="bg-primary hover:bg-indigo-600 text-white p-2 rounded-md transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {loading || categoryLoading ? (
        <Spinner />
      ) : (
        <div className="max-w-[1150px] mx-auto grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6">
          {finalProducts.length > 0 ? (
            finalProducts.map((product) => (
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

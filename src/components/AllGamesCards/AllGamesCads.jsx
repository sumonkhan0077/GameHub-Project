import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router";

const AllGamesCads = ({product}) => {
    const {title, coverPhoto, category, ratings, id} = product;
  return (
    <Link to={`/product/${id}`}>
      <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
        <div data-aos="fade-up" className="relative h-76">
          <img
            src={coverPhoto}
            alt="Game cover photo"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-[#2a82ff] text-white text-[14px] px-3 py-1 rounded-xl">
                {category}
              </span>
              <span className="text-yellow-400 flex items-center gap-2 font-semibold">
                <GiRoundStar /> {ratings}
              </span>
            </div>
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllGamesCads;

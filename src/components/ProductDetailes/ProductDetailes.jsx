import React from "react";
import useProducts from "../Hooks/useProducts";
import { useParams } from "react-router";
import AppNotFound from "../AppNotFound/AppNotFound";
import Spinner from "../Spinner/Spinner";
import * as motion from "motion/react-client";
import { BsStarFill } from "react-icons/bs";

const ProductDetailes = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((p) => p.id === Number(id));

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!product) {
    return (
      <div className="mt-12 max-w-[1280px] mx-auto p-8 text-center">
        <AppNotFound />
      </div>
    );
  }
  console.log(product);
  const {
    title,
    category,
    description,
    developer,
    downloadLink,
    ratings,
    coverPhoto,
  } = product;

  return (
    <div className="min-h-[87vh] flex justify-center items-center">
    <motion.div
      className="  flex flex-col md:flex-row items-center bg-[#FAF4EF] rounded-xl p-6 shadow-md max-w-3xl mx-auto"
      whileHover={{ scale: 1.02, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex-shrink-0">
        <img
          src={coverPhoto}
          alt="Red Seal Vitamin C"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-8 text-gray-800">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

        <div className="flex items-center mt-2 space-x-2">
          <div className="flex text-yellow-400 text-lg items-center justify-center gap-2">
            <BsStarFill /> {ratings}
          </div>
          <span className="text-sm text-gray-400">|</span>
          <span className="text-sm text-gray-500">{developer}</span>
        </div>

        <p className="mt-3 text-gray-500 leading-relaxed">{description}</p>

        <div className="mt-4">
          <motion.a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#7e2eff] text-white rounded-lg"
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            Download
          </motion.a>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default ProductDetailes;

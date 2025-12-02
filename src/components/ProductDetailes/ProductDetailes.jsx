import React from "react";
import useProducts from "../Hooks/useProducts";
import { useNavigate, useParams } from "react-router";
import AppNotFound from "../AppNotFound/AppNotFound";
import Spinner from "../Spinner/Spinner";
import * as motion from "motion/react-client";
import { BsStarFill } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";

const ProductDetailes = () => {
  const { id } = useParams();
  const navigate = useNavigate()
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
  // console.log(product);
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
    <div data-aos="fade-up" className="max-w-[1150px] mx-auto min-h-[87vh] flex justify-center items-center">
      <title>{title}</title>
      <motion.div
      className="  flex flex-col md:flex-row items-center bg-[#FAF4EF]  rounded-xl p-6 shadow-md mt-5  mx-auto"
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

        <div className="mt-4 flex justify-between items-center">
          <motion.a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 btn btn-primary  text-white "
            whileHover={{ scale: 1.04, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            Download
          </motion.a>
          <motion.button onClick={() => navigate(-1)} className="btn  mt-4 flex items-center justify-center px-8 btn-primary " whileHover={{ scale: 1.04, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}> 
            <span><TiArrowBack className="text-xl" />
            </span>
            <span> Back</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
     
     
     
    </div>
  );
};

export default ProductDetailes;

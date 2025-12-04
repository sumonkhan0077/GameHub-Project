import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/1168382.jpg";
import img2 from "../../assets/EA-Sports-FC-24-Review-1-1.jpg";
import img3 from "../../assets/capsule_616x353.jpg";
import { FaStar, FaTrophy, FaBolt, FaUsers } from "react-icons/fa";
import useProducts from "../Hooks/useProducts";
import Spinner from "../Spinner/Spinner";
import Topgames from "../TopGames/Topgames";
import { Link } from "react-router";
import { MdNavigateNext } from "react-icons/md";
import FAQ from "../FAQ/Faq";

const Home = () => {
  const { products, loading } = useProducts();

  const topGames = [...products]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 6);
  // console.log(topGames);
  return (
    <div data-aos="fade-up" className="max-w-[1280px] mx-auto mt-25">
      <h2 data-aos="fade-left" className="font-bold text-6xl text-center">
        CONNECT WITH <span className="text-[#2772db]">GAME</span> <br />{" "}
        EVERYWHERE
      </h2>
      <p
        data-aos="fade-right"
        className="text-center text-lg mt-2 text-[#616161]"
      >
        Join our community to discuss your favorite game, <br /> share your
        content, and find new friend.
      </p>
      {/* img 3  */}
      <div>
        <div className=" max-w-[1150px] mx-auto mt-5">
          <h2
            data-aos="slide-up"
            className="text-2xl font-bold text-center mb-4"
          >
            🎮 Featured Games
          </h2>

          <Swiper
            pagination={{ dynamicBullets: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="rounded-2xl overflow-hidden"
          >
            <SwiperSlide className="relative h-[300px] md:h-[450px] lg:h-[550px]">
              <img
                src={img1}
                alt="Fortune"
                className="w-full h-[300px] md:h-[520px] object-fill rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 rounded-xl">
                <h2
                  data-aos="fade-left"
                  className="text-white text-3xl font-bold"
                >
                  Fortune
                </h2>
                <p
                  data-aos="fade-left"
                  className="text-gray-300 text-sm max-w-md"
                >
                  Embark on a mysterious adventure to discover hidden treasures
                  and ancient secrets.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative h-[300px] md:h-[450px] lg:h-[550px]">
              <img
                src={img2}
                alt="FIFA 25"
                className="w-full h-[300px] md:h-[520px] object-fill  rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 rounded-xl">
                <h2
                  data-aos="fade-left"
                  className="text-white text-3xl font-bold"
                >
                  FIFA 25
                </h2>
                <p
                  data-aos="fade-left"
                  className="text-gray-300 text-sm max-w-md"
                >
                  Experience next-level football with realistic graphics and
                  ultimate gameplay.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative h-[300px] md:h-[450px] lg:h-[550px]">
              <img
                src={img3}
                alt="Forza Horizon 5"
                className="w-full h-[300px] md:h-[520px] object-fill  rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 rounded-xl">
                <h2
                  data-aos="fade-left"
                  className="text-white text-3xl font-bold"
                >
                  Forza Horizon 5
                </h2>
                <p
                  data-aos="fade-left"
                  className="text-gray-300 text-sm max-w-md"
                >
                  Race across stunning open worlds with breathtaking cars and
                  dynamic seasons.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/*------ Most pupular game------- */}
      <div>
        <h1 className="text-center text-4xl font-bold mt-5 mb-10">
          Most Popular Game
        </h1>
        <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <>
            <div className="max-w-[1150px] mx-auto grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6">
              {topGames.map((topgame) => (
                <Topgames key={topgame.id} topgame={topgame}></Topgames>
              ))}
            </div>
          </>
        )}
        <div className="flex justify-end">
          <Link
            to="/all_games"
            className="hover:scale-105 transition ease-in-out btn bg-[#2a82ff] text-[#ffff] py-5 px-6 mt-8 mr-25 flex items-center"
          >
            {" "}
            <span className="text-2xl text-[#ffff]">
              <MdNavigateNext />
            </span>{" "}
            <p>See All</p>
          </Link>
        </div>
      </div>

       <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />

      {/* key */}
      <div >
        <div className="max-w-[1000px] mx-auto mt-10 mb-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md cursor-pointer">
              <FaStar className="text-yellow-400 text-2xl" />
              <p className="mt-3 text-center font-medium">Stunning Graphics</p>
            </div>

            {/* Feature 2 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md cursor-pointer">
              <FaBolt className="text-blue-400 text-2xl" />
              <p className="mt-3 text-center font-medium">
                Fast & Smooth Gameplay
              </p>
            </div>

            {/* Feature 3 */}
            <div data-aos="fade-up" className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md cursor-pointer">
              <FaTrophy className="text-green-400 text-2xl" />
              <p className="mt-3 text-center font-medium">
                Achievements & Leaderboards
              </p>
            </div>

            {/* Feature 4 */}
            <div data-aos="fade-up"  className="flex flex-col items-center p-4 bg-base-100 rounded-lg shadow-md cursor-pointer">
              <FaUsers className="text-purple-400 text-2xl" />
              <p className="mt-3 text-center font-medium">Multiplayer Mode</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div data-aos="fade-up">
        <FAQ></FAQ>
      </div>

      <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />

      <section
        data-aos="fade-down"
        className="max-w-[1000px] mt-4 mx-auto bg-gradient-to-r from-[#0b2e5f] to-[#2772db] text-white rounded-2xl p-10  shadow-xl"
      >
        <div className="md:w-1/2 w-full space-y-6 ">
          <button
            data-aos="fade-left"
            className="bg-[#1c4c8e] text-white text-sm px-4 py-1 rounded-full"
          >
            Our newsletters
          </button>

          <h2
            data-aos="fade-left"
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Subscribe to our newsletter to receive more updates
          </h2>

          <div
            data-aos="fade-left"
            className="flex bg-white rounded-xl overflow-hidden max-w-md mt-4"
          >
            <input
              type="email"
              placeholder="Write your email"
              className="flex-1 px-4 py-3 text-gray-800 outline-none"
            />
            <button className="bg-[#153b72] hover:bg-[#1b4d9b] text-white px-6 py-3 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

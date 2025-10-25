import React from "react";
import { Link } from "react-router";
import { GoArrowUp } from "react-icons/go";

const About = () => {
  return (
    <section data-aos="fade-down" className="mt-15 py-10 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

        <div className="flex-1">
          <figure data-aos="fade-left" className="hover-gallery max-w-100 max-h-[450px] rounded-xl ">
            <img src="https://m.media-amazon.com/images/M/MV5BZTQ3OWJiYjQtOGYzNC00MGIyLWJhZmMtZjNjYWM5YWVkMmU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" />
            <img src="https://upload.wikimedia.org/wikipedia/en/2/23/Assassin%27s_Creed_Mirage_cover.jpeg" />
            <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/250px-Red_Dead_Redemption_II.jpg" />
          </figure>
          <p className="flex items-center justify-center text-xl md:mr-25 text-[#0055ff]">
            {" "}
            Hover The Image <GoArrowUp className="animate-bounce text-red-600" />
          </p>
        </div>


        <div className="flex-1 text-center md:text-left">
          <h3  data-aos="fade-right" className="text-[#221eff] text-lg font-semibold tracking-wide uppercase mb-2">
            About Us
          </h3>
          <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            GameHub — Play, Explore & Discover
          </h2>
          <p data-aos="fade-right" className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Welcome to{" "}
            <Link to="/">
              {" "}
              <span className="font-semibold text-[#221eff]">GameHub</span>{" "}
            </Link>{" "}
            — your one-stop destination for discovering the latest and most
            exciting video games. We bring gamers together by providing reviews,
            trending updates, and community features.
          </p>
          <p data-aos="fade-left" className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Whether you’re a casual player or a pro gamer, GameHub gives you the
            tools to explore, connect, and enjoy everything gaming has to offer
            — completely free!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

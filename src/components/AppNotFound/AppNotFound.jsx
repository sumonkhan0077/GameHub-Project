import React from 'react';
import { Link } from 'react-router';
import * as motion from "motion/react-client";

const AppNotFound = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-[#ece9ff] to-[#ffffff]">
     
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-[#3f00a4] drop-shadow-lg"
        >
          App Not Found
        </motion.h1>

        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mt-6"
        >
          😵‍💫
        </motion.div>

        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-[#3f00a4] text-white font-medium rounded-lg shadow-lg hover:bg-[#5b18e5] transition-all duration-300"
          >
            ⬅ Go Back Home
          </Link>
        </motion.div>
      </div>
    );
};

export default AppNotFound;
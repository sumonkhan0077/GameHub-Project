import React from 'react';
import useProducts from '../Hooks/useProducts';
import Topgames from '../TopGames/Topgames';
import Spinner from '../Spinner/Spinner';
import MostPopularCard from './MostPopularCard';


const MostPopular = () => {
    const { products, loading } = useProducts();

   const randomPopularGames = [...products]
      .sort(() => 0.5 - Math.random()) 
       .slice(0, 14); 

    return (
        <div data-aos="fade-up" className='mt-25 text-center'>
         <title>GameHub-Most-Popular</title>
            <h2 data-aos="fade-right" className='font-bold text-3xl'> YOUR NEXT FAVORITE GAME AWAITS</h2>
            <p data-aos="fade-left" className='text-[#535353db] mt-2'>Check out the top-rated games and connect <br /> with gamers everywhere</p>
            <hr className="max-w-[850px] mx-auto my-6 border-0 h-[2px] bg-gradient-to-r from-transparent via-[#006affe1] to-transparent" />
            <h1 data-aos="slide-up" className='font-bold text-2xl mt-4'>MOST POPULAR GAME</h1>

            {loading ? (
          <Spinner></Spinner>
           ) : (
          <>
            <div className="max-w-[1100px] mt-10 mx-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-6">
              {randomPopularGames.map((popularGame) => (
                <MostPopularCard key={popularGame.id} popularGame={popularGame}></MostPopularCard>
              ))}
            </div>
          </>
        )}
        </div>
    );
};

export default MostPopular;
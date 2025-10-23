import React from 'react';

const Profile = () => {
    return (
        <div className='min-h-[80vh] max-w-[1100px] mx-auto flex justify-center items-center'>
                <div className="min-h-[87vh] flex justify-center items-center">
                    <div
                      className="  flex flex-col md:flex-row items-center bg-[#FAF4EF] rounded-xl p-6 shadow-md max-w-3xl mx-auto"    
                    >
            
                      <div className="flex-shrink-0">
                        
                        <img
                          src="ksh"
                          alt="Red Seal Vitamin C"
                          className="w-48 h-auto rounded-lg"
                        />
                      </div>
                
                      <div className="mt-6 md:mt-0 md:ml-8 text-gray-800">
                        <h1 className='font-bold text-2xl'>My Profile</h1>
                        <h2 className="text-2xl font-semibold text-gray-900">sfdsdfsfdsdfsfdsdf <br />dfsfsf</h2>
                      </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Profile;
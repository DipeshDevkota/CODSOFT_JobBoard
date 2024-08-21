import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="lower w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
          className="object-cover w-full h-full"
          alt="Hero Background"
        />
      </div>
      
      <div className="upper absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold text-center">Hire the best talent for your company</h1>
        <div className="relative flex justify-center w-full max-w-md">
          {/* Search Input with Icon */}
          <input 
            type="text" 
            className="w-full p-3 pl-10 rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Search Your Favourite Job"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
          </svg>
        </div>
        <button className="p-3 text-white bg-sky-600 rounded-xl hover:bg-gray-500 transition duration-300">
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;

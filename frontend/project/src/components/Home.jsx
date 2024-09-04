import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Listings from './Listings';

const Home = () => {
  const navigate = useNavigate();

  const handlePostJob = () => {
    navigate('/post-job');
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Listings />
      <div className="container mx-auto px-6 py-12 text-center">
        <button
          onClick={handlePostJob}
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
        >
          Post a Job
        </button>
      </div>
    </div>
  );
};

export default Home;

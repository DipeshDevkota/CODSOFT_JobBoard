import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-3xl text-black font-bold">
          <Link to='/'>JobList</Link>
        </div>

        <div className="flex gap-8">
          <Link
            to='/employee'
            className="text-black text-lg hover:text-blue-200 transition duration-300"
          >
            For Employers
          </Link>
          <Link
            to='/candidate'
            className="text-black text-lg hover:text-blue-200 transition duration-300"
          >
            For Candidates
          </Link>
          <Link
            to='/resource'
            className="text-black text-lg hover:text-blue-200 transition duration-300"
          >
            Resources
          </Link>
          <Link
            to='/job'
            className="bg-yellow-500 text-black text-lg py-1 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Post a Job
          </Link>

          <Link 
          to='/signupcandidate'
          className=' text-black text-lg py-1 px-4 rounded-lg hover:bg-yellow-400 transition duration-300'>
            Sign Up-Candidate
          </Link>

          <Link 
          to='/signupemployer'
          className=' text-black text-lg py-1 px-4 rounded-lg hover:bg-yellow-400 transition duration-300'>
            Sign Up-Employer
          </Link>

        </div>

        <div className="text-black text-3xl font-bold">
          <h1>D</h1> {/* Replace with a profile icon or dropdown if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/UseContext';

const Listings = () => {
  const sampleJob = [
    {
      id: 1,
      title: "Senior Product Designer",
      description: "Join a dynamic team of professionals working on innovative design projects. Ideal for experienced designers looking to make a significant impact.",
      type: 'Designer',
      image: 'https://plus.unsplash.com/premium_photo-1678453146137-0847be9de9d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
    },
    {
      id: 2,
      title: "Software Engineer",
      description: "Work with a team of engineers to build cutting-edge web applications. Ideal for developers passionate about technology.",
      type: 'Engineer',
      image: 'https://plus.unsplash.com/premium_photo-1678453146137-0847be9de9d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
    },
  ];

  const navigate = useNavigate();
  const { setJobDetails } = useJobContext();

  const handleViewMore = (job) => {
    setJobDetails(job);
    console.log(job)
    navigate('/job-detail');
  };

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Featured Jobs
        </h1>
        {sampleJob.map((data) => (
          <div key={data.id} className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-3">{data.type}</h3>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h2>
              <p className="mt-4 text-gray-600 mb-6">{data.description}</p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => handleViewMore(data)}
                  className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  View More
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={data.image}
                className="object-cover w-full h-auto max-w-md rounded-lg shadow-xl border border-gray-300"
                alt="Job Listing"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;

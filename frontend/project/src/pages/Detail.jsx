// JobDetail.js
import React from 'react';
import { useJobContext } from '../context/UseContext';

const Detail = () => {
  const { jobDetails } = useJobContext();

  if (!jobDetails.title) {
    return <div>No job details available</div>;
  }

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          {jobDetails.title}
        </h1>

        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Job Details</h2>
          <p className="text-gray-600">{jobDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

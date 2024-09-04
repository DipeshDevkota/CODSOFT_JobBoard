import React, { useEffect, useState } from 'react';
import { useJobContext } from '../context/UseContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { addJob } = useJobContext(); // Add job to context (optional)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">All Posted Jobs</h2>
      {jobs.length > 0 ? (
        <div>
          {jobs.map((job) => (
            <div key={job._id} className="mb-6 p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-700 mt-2">{job.description}</p>
              <p className="text-gray-600 mt-2">Position: {job.position}</p>
              <p className="text-gray-600 mt-2">Salary: {job.salary}</p>
              <p className="text-gray-600 mt-2">Location: {job.location}</p>
              <p className="text-gray-600 mt-2">Openings: {job.opening}</p>
              <p className="text-gray-600 mt-2">Deadline: {new Date(job.deadline * 1000).toLocaleDateString()}</p>
              <div className="mt-4">
                <Link to={`/job-detail/${job._id}`} className="text-blue-600 hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">No jobs available.</p>
      )}
    </div>
  );
};

export default AllJobs;

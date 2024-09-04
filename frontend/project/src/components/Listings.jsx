import { useNavigate } from 'react-router-dom';
import { useJobContext } from '../context/UseContext';

const Listings = () => {
  const { jobs } = useJobContext();
  const navigate = useNavigate();

  const handleViewMore = (job) => {
    navigate(`/job-detail/${job.id}`);
  };

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Featured Jobs
        </h1>
        {jobs.map((job) => (
          <div key={job.id} className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6">
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-900 mb-3">{job.jobType}</h3>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h2>
              <p className="mt-4 text-gray-600 mb-6">{job.description}</p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => handleViewMore(job)}
                  className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  View More
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={job.img}
                alt={job.title}
                className="object-cover w-full h-auto max-w-md rounded-lg shadow-xl border border-gray-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;

import { useJobContext } from '../context/UseContext';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const { getJobById } = useJobContext();
  const { id } = useParams();
  const navigate = useNavigate();




  const jobDetails = getJobById(parseInt(id));

  if (!jobDetails) {
    return <div>No job details available</div>;
  }

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          {jobDetails.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Job Details */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Company Name</h2>
              <p className="text-gray-600">{jobDetails.companyName}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Location</h2>
              <p className="text-gray-600">{jobDetails.location}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Salary</h2>
              <p className="text-gray-600">{jobDetails.salary}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Job Type</h2>
              <p className="text-gray-600">{jobDetails.jobType}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Requirements</h2>
              <ul className="list-disc list-inside text-gray-600">
                {jobDetails.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Job Description</h2>
              <p className="text-gray-600">{jobDetails.description}</p>
            </div>
          </div>

          {/* Job Image */}
          <div className="flex-none w-full md:w-1/2 flex justify-center items-center">
            <img
              src={jobDetails.img}
              alt={jobDetails.title}
              className="object-cover w-full h-auto max-w-md rounded-lg shadow-xl border border-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/apply')}
            className="text-2xl text-white bg-red-500 p-3 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

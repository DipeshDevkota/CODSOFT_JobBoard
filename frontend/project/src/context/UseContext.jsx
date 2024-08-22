import React, { createContext, useContext, useState } from 'react';

// Create the context
const JobContext = createContext();

// Create a provider component
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      companyName: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      jobType: 'Full-time',
      requirements: [
        '3+ years of experience in software development',
        'Proficiency in JavaScript and React',
        'Experience with Node.js and Express',
      ],
      description: 'We are looking for a skilled software engineer to join our dynamic team...',
      img:'https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ifGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      companyName: 'Creative Minds LLC',
      location: 'New York, NY',
      salary: '$90,000 - $110,000',
      jobType: 'Full-time',
      requirements: [
        '2+ years of experience in frontend development',
        'Strong knowledge of HTML, CSS, and JavaScript',
        'Experience with React and Redux',
      ],
      description: 'Seeking a talented frontend developer to bring our designs to life...',
      img:'https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ifGVufDB8fDB8fHww'
    },
    // Add more jobs as needed
  ]);

  const getJobById = (id) => jobs.find(job => job.id === id);

  return (
    <JobContext.Provider value={{ jobs, getJobById }}>
      {children}
    </JobContext.Provider>
  );
};

// Custom hook to use the JobContext
export const useJobContext = () => useContext(JobContext);

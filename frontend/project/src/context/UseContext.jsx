import React, { createContext, useContext, useState } from 'react';

// Create the context
const JobContext = createContext();

// Create a provider component
export const JobProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState({});

  return (
    <JobContext.Provider value={{ jobDetails, setJobDetails }}>
      {children}
    </JobContext.Provider>
  );
};

// Custom hook to use the JobContext
export const useJobContext = () => useContext(JobContext);

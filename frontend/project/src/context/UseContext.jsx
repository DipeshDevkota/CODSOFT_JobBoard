import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const useJobContext = () => {
    return useContext(JobContext);
};

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);

    const addJob = (job) => {
        setJobs((prevJobs) => [...prevJobs, job]);
    };

    return (
        <JobContext.Provider value={{ jobs, addJob }}>
            {children}
        </JobContext.Provider>
    );
};

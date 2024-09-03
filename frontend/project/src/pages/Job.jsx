import React, { useState } from 'react';
import axios from 'axios';

const Job = () => {
    const [job, setJob] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [deadline, setDeadline] = useState('');
    const [opening, setOpening] = useState('');
    const [requirement, setRequirement] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            job,
            position,
            salary,
            deadline,
            opening,
            requirement,
            location,
        };

        try {
            const response = await axios.post('/api/jobs', jobData);
            console.log(response.data);
            alert('Job posted successfully');
            setJob(''); // Clear the form fields
            setPosition('');
            setSalary('');
            setDeadline('');
            setOpening('');
            setRequirement('');
            setLocation('');

        } catch (error) {
            console.error('There was an error posting the job:', error);
            alert('Failed to post job');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Post a New Job</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Job Title:</label>
                    <input
                        type="text"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter job title"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Position:</label>
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter position"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Salary:</label>
                    <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter salary"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Application Deadline (Unix timestamp):</label>
                    <input
                        type="number"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter application deadline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Number of Openings:</label>
                    <input
                        type="number"
                        value={opening}
                        onChange={(e) => setOpening(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter number of openings"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Requirements:</label>
                    <textarea
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter job requirements"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter job location"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default Job;

import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        // Fetch posts on component mount
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/post/allposts');
                setPosts(response.data);
                console.log(response.data);
                
            } catch (error) {
                setError('Failed to fetch posts');
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-4">{error}</div>;
    }


    const handleApplyClick = async (jobId) => {
        // Get the logged-in user's ID (you can replace this with the actual method you're using to get the ID)
        const userId = localStorage.getItem('userId'); // Assuming userId is stored in local storage
    
        if (!userId) {
            alert('Please log in to apply for a job');
            return;
        }
    
        try {
            await axios.post(`http://localhost:3000/api/dashboard/apply/${userId}/${jobId}`);
            alert('Job applied successfully!');
            navigate(`/signupcandidate/${jobId}`); // Navigate to SignCandidate with jobId
        } catch (error) {
            console.error('Error applying for the job', error);
            alert('Failed to apply for the job');
        }
    };
    
    
    return (
        <>
        <Navbar/>
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Job Posts</h1>
            {posts.length === 0 ? (
                <p className="text-center text-gray-500">No posts available</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map(post => (
                        <li key={post._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold mb-2">{post.job}</h2>
                            <p className="text-gray-700"><strong>Position:</strong> {post.position}</p>
                            <p className="text-gray-700"><strong>Salary:</strong> ${post.salary}</p>
                            <p className="text-gray-700"><strong>Deadline:</strong> {post.deadline}</p>
                            <p className="text-gray-700"><strong>Opening:</strong> {post.opening}</p>
                            <p className="text-gray-700"><strong>Requirement:</strong> {post.requirement}</p>
                            <p className="text-gray-700"><strong>Location:</strong> {post.location}</p>
                            <button 
                                onClick={() => handleApplyClick(post._id)}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Apply Job
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>

        </>
    );
};

export default PostList;

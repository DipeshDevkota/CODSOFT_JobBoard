const User= require('../model/Candidate.model')
const Post= require('../model/Post.model')


const userjob = async (req, res) => {
    const { userId, jobId } = req.params;

    try {
        // Logic to handle the job application (e.g., update user's record with jobId)
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Assuming the user schema has an array to store applied jobs
        user.appliedJobs.push(jobId);
        await user.save();

        res.status(200).json({ message: 'Job application successful' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to apply for job', error });
    }
};

module.exports = { userjob };


    module.exports={
        userjob
    }
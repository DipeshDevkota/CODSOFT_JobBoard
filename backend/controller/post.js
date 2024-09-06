const Post = require('../model/Post.model');

const newPost = async (req, res) => {
    try {
        const { job, position, salary, deadline, opening, requirement, location } = req.body;
        
        // Check if all fields are provided
        if (!job || !position || !salary || !deadline || !opening || !requirement || !location) {
            return res.status(400).json({ message: "All fields are required" });  // Add status code and return
        }

        // Check if the job already exists
        const existingJob = await Post.findOne({ job });
        if (existingJob) {
            return res.status(200).json({ message: 'Job already exists, skipping creation.' });
        }
        
        // Create a new job
        const newJob = new Post({
            job,
            position,
            salary,
            deadline,
            opening,
            requirement,
            location
        });

        await newJob.save();

        // Return success response
        return res.status(201).json({ message: "Job Posted Successfully!" });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deletePost = async(req,res)=>{
    try {
        const { id } = req.params; // Extract ID from params

        const deletedPost = await Post.findByIdAndDelete(id);
        
        if (deletedPost) {
            return res.status(200).json({ message: "Post deleted successfully" });
        } else {
            return res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from params
        const { job, position, salary, deadline, opening, requirement, location } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { job, position, salary, deadline, opening, requirement, location },
            { new: true }
        );

        if (updatedPost) {
            return res.status(200).json({ message: 'Job Updated Successfully', post: updatedPost });
        } else {
            return res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


const allPost = async (req, res) => {
    try {
        // Get the job name from query parameters
        const { job } = req.query;

        let posts;

        if (job) {
            // If a job name is provided, find posts matching the job name
            posts = await Post.find({ job: { $regex: new RegExp(job, 'i') } }); // Case-insensitive search
        } else {
            // Otherwise, fetch all posts
            posts = await Post.find();
        }
        
        // Check if posts are found
        if (posts.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }
        
        // Return posts
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports={
    newPost,
    deletePost,
    updatePost,
    allPost
}


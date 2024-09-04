const Post= require('../model/Post.model');

const newPost = async(req,res)=>{

    try {
        const {job,position,salary,deadline,opening,requirement,location}= req.body;
    
        if(!job || !position || !salary || !deadline || !opening || !requirement || !location)
        {
            res.json({message:"All fields are required"});
        }
    
        const existingJob = await Post.findOne({job})
        if(existingJob)
        {
            res.json({message:'Job already exists!'})
        };
    
        const newJob =  new Post ({
            job,
            position,
            salary,
            deadline,
            opening,
            requirement,
            location
        });
        
        await newJob.save();
        return  res.status(201).json({message:"Job Posted Successfully!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal Server Error'})
    }


}

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

module.exports={
    newPost,
    deletePost,
    updatePost
}


const Apply = require('../model/Apply.model');

const newapply = async (req, res) => {
    try {
        const { name, email, phoneno, message } = req.body;
        const cv = req.file ? req.file.filename : null;

        if (!name || !email || !phoneno || !message || !cv) {
            return res.status(400).json({ message: "Fill all the fields" });
        }

        const existingApply = await Apply.findOne({ phoneno });
        if (existingApply) {
            return res.status(409).json({ message: "User already exists! Can't apply" });
        }

        const newApply = new Apply({
            name,
            email,
            phoneno,
            message,
            cv,
        });

        await newApply.save();

        return res.status(201).json({ message: 'Applied for job successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteapply = async (req,res)=>{
    try {

        const {id} = req.params;

        const deleteapply = await Apply.findByIdAndDelete({id})
        if (deleteapply) {
            res.status(200).json({ message: "Apply deleted successfully" });
        } else {
            res.status(404).json({ message: "Apply not found" });
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error"})
    }
}

module.exports = {
    newapply,deleteapply
};

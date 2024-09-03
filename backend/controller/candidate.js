const Candidate = require("../model/Candidate.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerCandidate = async (req, res) => {
    try {
        const { name, email, phoneno, password } = req.body;
        if (!name || !email || !phoneno || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const existingCandidate = await Candidate.findOne({ email });

        if (existingCandidate) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        const newCandidate = new Candidate({
            name,
            email,
            phoneno,
            password: hashedPassword,
        });

        await newCandidate.save();

        return res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

const loginCandidate = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const user = await Candidate.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "No user found with this email"
            });
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d"
        });

        res.cookie("worker", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        return res.status(200).json({
            message: "User logged in Successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phoneno: user.phoneno
            },
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};


const logoutCandidate = async(req,res)=>{
    res.clearCookie("worker");
    res.status(200).json({
        message:"LogOut Successfully"
    })
}

module.exports = {
    registerCandidate,
    loginCandidate,
    logoutCandidate

};

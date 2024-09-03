const Employee = require("../model/Employee.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerEmployee = async (req, res) => {
    try {
        const { name, email, phoneno, password } = req.body;
        if (!name || !email || !phoneno || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const existingEmployee = await Employee.findOne({ email });

        if (existingEmployee) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        const newEmployee = new Employee({
            name,
            email,
            phoneno,
            password: hashedPassword,
        });

        await newEmployee.save();

        return res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

const loginEmployee = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const user = await Employee.findOne({ email });
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

        res.cookie("employer", token, {
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
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

const logoutEmployee = async (req, res) => {
    res.clearCookie("employer");
    res.status(200).json({
        message: "Logged Out Successfully"
    });
}

module.exports = {
    registerEmployee,
    loginEmployee,
    logoutEmployee
};

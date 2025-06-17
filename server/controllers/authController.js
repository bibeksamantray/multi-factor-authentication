const User = require('../models/User');
const nodemailer = require('nodemailer');
const randomize = require('randomatic');
const dotenv = require('dotenv');

dotenv.config();

const MAIL = process.env.MAIL;
const PASS = process.env.PASS;

// Function to send OTP email
async function sendOtpEmail(email, otp) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: MAIL,
                pass: PASS,
            },
        });

        const mailOptions = {
            from: MAIL,
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP is: ${otp}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Sign-up handler
exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser  = await User.findOne({ email });
        if (existingUser ) {
            return res.status(400).json({ success: false, message: 'User  already exists' });
        }

        const newUser  = new User({ email, password });
        await newUser .save();

        return res.status(201).json({ success: true, message: 'User  registered successfully' });
    } catch (error) {
        console.error('Error during sign-up:', error.message);
        return res.status(500).json({ success: false, message: 'Server error during sign-up' });
    }
};

// Login handler
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

        const generatedOtp = randomize('0', 6);
        user.otp = generatedOtp;
        await user.save();

        sendOtpEmail(email, generatedOtp);

        return res.json({ success: true });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ success: false, message: 'An error occurred during login' });
    }
};

// OTP verification handler
exports.verifyOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        const user = await User.findOne({ otp });

        if (!user) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        user.otp = '';
        await user.save();

        return res.json({ success: true });
    } catch (error) {
        console.error('Error during OTP verification:', error.message);
        return res.status(500).json({ success: false, message: 'An error occurred during OTP verification' });
    }
};

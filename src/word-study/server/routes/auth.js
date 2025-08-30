const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model defined

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

// Route for Google login
router.post('/google-login', async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userId = payload['sub'];
        const email = payload['email'];

        // Check if user already exists in the database
        let user = await User.findOne({ googleId: userId });

        if (!user) {
            // Create a new user if not found
            user = new User({
                googleId: userId,
                email: email,
                // Add any other user fields you need
            });
            await user.save();
        }

        // Here you can set up a session or token for the user
        req.session.userId = user._id; // Example of setting a session

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during Google login:', error);
        res.status(400).json({ message: 'Login failed', error });
    }
});

// Route for logging out
router.post('/logout', (req, res) => {
    req.session = null; // Destroy the session
    res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
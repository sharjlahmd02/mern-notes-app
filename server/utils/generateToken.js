import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: process.env.JWT_EXPIRES_IN } // Token expiration time
    );
}

export default generateToken;
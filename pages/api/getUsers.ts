import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../database/mongodb';
import User from '../../models/User';

// API route to fetch all users from MongoDB
export default async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to the database
    await connectDB();

    // Fetch all users from the User model
    const users = await User.find({}); // Empty object fetches all documents

    // Return the users as a JSON response
    res.status(200).json(users);
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    res.status(500).json({ message: 'Error fetching users', error });
  }
}

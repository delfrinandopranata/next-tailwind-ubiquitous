import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../database/mongodb';
import User from '../../models/User';

export default async function registerUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await connectDB();

      const { username, email, firstName, lastName } = req.body;
      const newUser = new User({
        username,
        email,
        firstName,
        lastName,
      });

      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'Failed to register user', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

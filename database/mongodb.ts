import mongoose from 'mongoose';

const connectDB = async () => {
  // Check if the connection is already established
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp', {
      // No need to specify useNewUrlParser or useUnifiedTopology anymore
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

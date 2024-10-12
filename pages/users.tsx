import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

// Define the User interface
interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);  // Explicitly define the state type
  const [loading, setLoading] = useState(true);

  // Fetch users from the API when the page loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/getUsers');  // Fetching from the API
        const data: User[] = await res.json();  // Explicitly set the type of the response
        setUsers(data);  // Set the fetched users into state
        setLoading(false);  // Stop the loading spinner
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Loading indicator
  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <>
      {/* Include the Navbar at the top */}
      <Navbar />

      {/* Content for the Users Page */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Users List</h1>
        {users.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-3 border border-gray-300">Username</th>
                  <th className="px-4 py-3 border border-gray-300">Email</th>
                  <th className="px-4 py-3 border border-gray-300">First Name</th>
                  <th className="px-4 py-3 border border-gray-300">Last Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user._id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-blue-100 transition duration-200`}
                  >
                    <td className="px-4 py-3 border border-gray-300">{user.username}</td>
                    <td className="px-4 py-3 border border-gray-300">{user.email}</td>
                    <td className="px-4 py-3 border border-gray-300">{user.firstName}</td>
                    <td className="px-4 py-3 border border-gray-300">{user.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-lg font-semibold">No users found.</p>
        )}
      </div>
    </>
  );
};

export default UsersPage;

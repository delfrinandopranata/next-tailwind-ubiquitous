import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

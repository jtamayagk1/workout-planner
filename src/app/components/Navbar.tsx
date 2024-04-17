// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 p-4 flex justify-end'>
      <ul className='flex space-x-4 mx-6'>
        <li className='navItem'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='navItem'>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className='navItem'>
          <Link href="/exercises">
            Exercises
          </Link>
        </li>
      </ul>
    </nav>
  );
};


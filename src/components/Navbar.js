import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Responsive Test App</h1>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="text-white">Home</a></li>
          <li><a href="#cards" className="text-white">About</a></li>
          <li><a href="#footer" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

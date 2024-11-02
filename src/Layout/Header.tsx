// src/components/Header.tsx

import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-green-900 p-10 shadow-lg rounded-3xl max-w-5xl mx-auto mt-4 mb-8 h-48 flex flex-col justify-center">
      <h1 className="text-white text-5xl font-bold text-center">{title}</h1>
      <nav className="flex justify-center mt-4">
        <a href="/" className="text-white mx-4 hover:underline transition duration-300 ease-in-out"> {/* Updated href to navigate to Home */}
          Take Quiz
        </a>
      </nav>
    </header>
  );
};

export default Header;

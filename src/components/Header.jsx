import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
        <div className="text-xl font-bold text-blue-800">Association</div>
        </Link>
        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600">Accueil</Link>
          <Link to="/a-propos" className="hover:text-blue-600">À propos</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/faire-un-don" className="hover:text-blue-600 font-semibold">Don</Link>
        </nav>

        {/* Hamburger icon */}
        <button onClick={toggleMenu} className="md:hidden text-blue-800 focus:outline-none">
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden mt-2 px-4 pb-4 flex flex-col gap-2 bg-gray-50 rounded">
          <Link to="/" className="hover:text-blue-600" onClick={toggleMenu}>Accueil</Link>
          <Link to="/a-propos" className="hover:text-blue-600" onClick={toggleMenu}>À propos</Link>
          <Link to="/contact" className="hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
          <Link to="/faire-un-don" className="hover:text-blue-600 font-semibold" onClick={toggleMenu}>Don</Link>
        </nav>
      )}
    </header>
  );
}

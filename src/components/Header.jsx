import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow flex justify-between items-center">
      <div className="font-bold text-xl">Association</div>
      <nav className="space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faire-un-don">Don</Link>
      </nav>
    </header>
  );
}

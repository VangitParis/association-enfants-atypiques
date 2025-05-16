import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4 text-center mt-10">
      © {new Date().getFullYear()} Association - Tous droits réservés.
    </footer>
  );
}

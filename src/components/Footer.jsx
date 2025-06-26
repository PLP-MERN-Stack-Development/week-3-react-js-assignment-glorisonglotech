import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {year} Tasky — Stay organized, stay ahead.</p>

        <nav className="flex flex-wrap gap-4 mt-4 md:mt-0 text-sm">
          <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="#tasks" className="hover:text-white transition">My Tasks</a>
          <a href="#analytics" className="hover:text-white transition">Analytics</a>
          <a href="#settings" className="hover:text-white transition">Settings</a>
          <a href="#support" className="hover:text-white transition">Support</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

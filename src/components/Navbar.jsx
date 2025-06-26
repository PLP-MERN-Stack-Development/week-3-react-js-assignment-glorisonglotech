import React from "react";
import { IoSettings } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <nav class="bg-blue-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">Tasky</div>
        <div class="block lg:hidden">
          <button class="text-white focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div class="hidden items-center lg:flex space-x-4">
          <a href="#" class="text-gray-300 hover:text-white">
           Home
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            <IoSettings />
          </a>
          <a href="#" class="text-gray-300 hover:text-white">
            <FaMoon />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

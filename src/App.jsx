import { useState } from 'react';
import './App.css';
import {NavigationMenu} from '@/components/ui/navigation-menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';
// import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
      <Navbar/>
      <NavigationMenu/>
      

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <TaskManager/>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
             <ApiData />
          </p>
        </div>
      </main>

      {/* Footer component will go here */}
      <Footer/>
    </div>
  );
}

export default App; 


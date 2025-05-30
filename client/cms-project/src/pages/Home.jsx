import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to CMS Project
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Build, manage, and publish content effortlessly with our modern content management system powered by React and Tailwind CSS.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <Link
          to="/SignUp"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/About"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition"
        >
          Learn More
        </Link>
      </div>

      <footer className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} CMS Project. All rights reserved.
      </footer>
    </div>
  );
}

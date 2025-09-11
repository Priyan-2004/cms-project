import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our content management system project! This platform is designed to
          help users manage and publish content efficiently. Built with modern technologies
          like React and Tailwind CSS, our aim is to provide a user-friendly and powerful experience.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To deliver fast, flexible, and scalable content solutions for users of all kinds,
            from individuals to enterprise teams.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Technologies Used</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

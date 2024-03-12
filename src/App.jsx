import React from 'react';
import pfp from './assets/pfp.jpg';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 animate-slide-in">
        <img className="w-full" src={pfp} alt="Egor" />
        <div className="px-6 py-4">
          <div className="card-header flex items-center justify-between">
            <div className="font-bold text-xl mb-2">Egor Strakhov</div>
            <div className="icons flex items-center">
              <a
                href="https://www.linkedin.com/in/egorstrakhov/"
                className="mr-2 transform transition duration-500 ease-in-out hover:scale-125"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Sillor"
                className="transform transition duration-500 ease-in-out hover:scale-125"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          <p className="text-gray-300 text-base mb-">
            🚀 Software Engineer Intern at{' '}
            <a
              href="https://www.linkedin.com/company/bay-valley-tech/mycompany/"
              className="text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              Bay Valley Tech
            </a>
          </p>
          <p className="text-gray-300 text-base">
            💻 Curious for Frontend, Backend, and Fullstack development. Beyond
            coding, I'm a gamer, 3D printing enthusiast, beginner guitarist, and
            PC-building fan.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            #frontend
          </span>
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            #software
          </span>
          <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            #dev
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import Navbares from '../components/Navbares';
import Sidebares from '../components/Sidebares';

const Project = () => {
  return (
    <>
      <Navbares />
      <Sidebares />

      <main className="min-h-screen ml-64 pt-20 bg-green-100 font-sans">
        <div className="p-8 max-w-screen-xl mx-auto flex flex-col items-center">

          {/* Page Title */}
          <div className="w-full mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-green-900 tracking-wide border-b-4 border-green-500 pb-2">
              🌿 Barangay Projects
            </h1>
          </div>

          {/* Green Container */}
          <div className="w-full bg-green-200 p-6 rounded-2xl shadow-xl space-y-8">

            {/* Main Content: Chart + Project Details */}
            <div className="flex flex-col md:flex-row gap-6">

              {/* Left: Chart */}
              <div className="flex-1 bg-white rounded-xl shadow-md p-3 flex items-center justify-center border border-green-300">
                <img
                  src="https://salaymisor.gov.ph/wp-content/uploads/2020/12/20200828_090843.jpg"
                  alt="Projects Chart"
                  className="rounded-lg max-h-[20rem] object-contain"
                />
              </div>

              {/* Right: Project Info */}
              <div className="w-full md:w-1/2 bg-white rounded-xl p-6 shadow-md space-y-6 text-sm text-gray-800">
                <div>
                  <h2 className="text-xl font-bold text-green-700 mb-1">Project 1</h2>
                  <p className="font-medium">Barangay Health and Wellness Hub</p>
                  <p className="mt-1">
                    <strong>Objective:</strong> To improve access to basic health services and promote wellness activities within the community.
                  </p>
                  <p className="mt-2 text-green-800"><strong>Estimated Cost:</strong> PHP 50,000</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-green-700 mb-1">Project 2</h2>
                  <p className="font-medium">Barangay Youth Tech Center</p>
                  <p className="mt-1">
                    <strong>Objective:</strong> To provide access to technology and digital literacy training for the youth in the barangay.
                  </p>
                  <p className="mt-2 text-green-800"><strong>Estimated Cost:</strong> PHP 95,000</p>
                </div>
              </div>
            </div>

            {/* Feedback Button */}
            <div className="flex justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m-2 8c-4.418 0-8-1.79-8-4V5a2 2 0 012-2h16a2 2 0 012 2v11c0 2.21-3.582 4-8 4h-2z" />
                </svg>
                Add Feedback
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Project;

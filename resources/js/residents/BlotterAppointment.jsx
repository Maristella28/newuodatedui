import React from 'react';
import Navbares from '../components/Navbares';
import Sidebares from '../components/Sidebares';

const BlotterAppointment = () => {
  return (
    <>
      <Navbares />
      <Sidebares />
      <main className="ml-64 pt-20 px-6 md:px-12 bg-gray-50 min-h-screen font-sans">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">📋 Blotter Report</h1>
          <p className="text-gray-500 mt-1">Manage and generate blotter reports with ease.</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Charter List Button */}
          <button className="bg-yellow-100 hover:bg-yellow-200 transition-all duration-200 text-black px-6 py-8 rounded-2xl shadow-md hover:shadow-lg flex flex-col items-center justify-center w-full">
            <div className="text-5xl mb-4">📄</div>
            <div className="text-lg font-semibold">Show List of Charter</div>
            <p className="text-sm text-gray-600 mt-1">View existing blotter entries</p>
          </button>

          {/* Generate Blotter Button */}
          <button className="bg-red-100 hover:bg-red-200 transition-all duration-200 text-black px-6 py-8 rounded-2xl shadow-md hover:shadow-lg flex flex-col items-center justify-center w-full">
            <div className="text-5xl mb-4">📝</div>
            <div className="text-lg font-semibold">Generate Blotter Appointment</div>
            <p className="text-sm text-gray-600 mt-1">Create a new blotter entry</p>
          </button>
        </div>
      </main>
    </>
  );
};

export default BlotterAppointment;

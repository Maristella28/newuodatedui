import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="bg-gray-100 min-h-screen ml-64 pt-20 p-6 font-sans">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-lime-500">
            <div className="text-2xl font-bold text-gray-700">1,245</div>
            <div className="text-sm text-gray-500 mt-1">Total Residents</div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-gray-700">58</div>
            <div className="text-sm text-gray-500 mt-1">Certificates Issued</div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-gray-700">16</div>
            <div className="text-sm text-gray-500 mt-1">Pending Requests</div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-amber-500">
            <div className="text-2xl font-bold text-gray-700">12</div>
            <div className="text-sm text-gray-500 mt-1">Household Records</div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-rose-500">
            <div className="text-2xl font-bold text-gray-700">8</div>
            <div className="text-sm text-gray-500 mt-1">Blotter Reports</div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-teal-500">
            <div className="text-2xl font-bold text-gray-700">3</div>
            <div className="text-sm text-gray-500 mt-1">Barangay Officials</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

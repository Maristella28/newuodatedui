import React from 'react';
import Navbares from '../components/Navbares';
import Sidebares from '../components/Sidebares';
import { FaFileAlt, FaBusinessTime, FaIdBadge } from 'react-icons/fa';

const RequestDocuments = () => {
  return (
    <>
      <Navbares />
      <div className="flex min-h-screen bg-green-50">
        <Sidebares />

        <main className="flex-1 ml-64 pt-20 px-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-green-900">Request Documents</h1>
            <p className="text-gray-600 mt-2 text-sm">
              Select a document type to begin your request.
            </p>
          </div>

          {/* Document Cards */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-green-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <FaFileAlt className="text-green-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-green-900">Barangay Clearance</p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <FaBusinessTime className="text-blue-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-blue-900">Barangay Business Clearance</p>
            </div>

            {/* Card 3 */}
            <div className="bg-purple-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <FaIdBadge className="text-purple-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-purple-900">Community Tax Certificate (Cedula)</p>
            </div>
          </div>

          {/* Dropdown */}
          <div className="w-full sm:w-1/3 mx-auto">
            <select
              className="w-full border border-green-300 rounded-lg p-3 shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""
            >
              <option value="" disabled>Other Types of Document</option>
              <option>Certificate of Indigency</option>
              <option>Certificate of Residency</option>
              <option>Barangay ID</option>
            </select>
          </div>
        </main>
      </div>
    </>
  );
};

export default RequestDocuments;

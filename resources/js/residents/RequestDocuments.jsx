import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbares from '../components/Navbares';
import Sidebares from '../components/Sidebares';
import { FaFileAlt, FaBusinessTime, FaIdBadge, FaHome } from 'react-icons/fa';

const RequestDocuments = () => {
  const navigate = useNavigate();

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
            {/* Barangay Clearance */}
            <div
              className="bg-green-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              onClick={() => navigate('/residents/brgyclearance')}
            >
              <FaFileAlt className="text-green-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-green-900">Barangay Clearance</p>
            </div>

            {/* Business Permit */}
            <div
              className="bg-green-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              onClick={() => navigate('/residents/brgybusinesspermit')}
            >
              <FaBusinessTime className="text-green-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-green-900">Barangay Business Permit</p>
            </div>

            {/* Certificate of Indigency */}
            <div
              className="bg-green-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              onClick={() => navigate('/residents/brgyindigency')}
            >
              <FaIdBadge className="text-green-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-green-900">Certificate of Indigency</p>
            </div>

            {/* Certificate of Residency */}
            <div
              className="bg-green-100 rounded-xl p-6 shadow-md text-center w-72 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              onClick={() => navigate('/residents/brgyresidency')}
            >
              <FaHome className="text-green-700 text-5xl mb-4 mx-auto" />
              <p className="font-semibold text-green-900">Certificate of Residency</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RequestDocuments;

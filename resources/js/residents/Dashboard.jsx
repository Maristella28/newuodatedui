import React from 'react';
import Sidebares from '../components/Sidebares';
import Navbares from '../components/Navbares';

const Dashboard = () => {
  return (
    <>
      <Navbares />
      <Sidebares />
      <main className="bg-green-50 min-h-screen ml-64 pt-20 px-6 py-10 font-sans flex flex-col items-center">

        {/* Page Title */}
        <div className="w-full max-w-3xl mb-8">
          <h1 className="text-3xl font-bold text-green-900 tracking-wide border-b-4 border-green-400 inline-block pb-1">
            📢 Announcement
          </h1>
        </div>

        {/* Announcement Card */}
        <div className="w-full max-w-3xl bg-white shadow-xl border border-green-300 rounded-xl p-6 mb-8 space-y-4">
          <p className="text-gray-800 text-justify leading-relaxed text-sm sm:text-base">
            <strong className="block mb-1 text-green-700">Mahal na mamamayan ng Mamatid,</strong>
            Magandang araw sa inyong lahat...
            <br /><br />
            <span className="font-semibold text-green-700">Maraming salamat po at nawa’y magpatuloy ang ating pagkakaisa para sa mas maliwanag na bukas.</span>
          </p>
        </div>

        {/* Image Box */}
        <div className="w-full max-w-3xl bg-white border border-green-300 rounded-xl p-4 shadow-lg mb-8">
          <img 
            src="https://mamatidseniorhighschool.wordpress.com/wp-content/uploads/2017/08/mshspic.jpg" 
            alt="Peryahan Image" 
            className="rounded-lg object-cover w-full max-h-96 border border-green-200"
          />
        </div>

        {/* ✅ Flowbite Modal Toggle Button */}
        <button
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Open Modal
        </button>

        {/* ✅ Flowbite Modal Element */}
        <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Flowbite Modal
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="defaultModal">
                  ✖
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  This is a Flowbite-powered modal. If this works, Flowbite is configured properly!
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default Dashboard;

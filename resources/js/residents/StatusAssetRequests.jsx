import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbares from '../components/Navbares';
import Sidebares from '../components/Sidebares';

const defaultStatuses = [
  { asset: 'Tent', date: '2025-06-01', status: 'Pending' },
  { asset: 'Plastic Chairs (set of 10)', date: '2025-06-02', status: 'Approved' },
  { asset: 'Sound System', date: '2025-06-03', status: 'Denied' },
  { asset: 'Table', date: '2025-06-04', status: 'Pending' },
  { asset: 'Commercial Space (1 day)', date: '2025-06-05', status: 'Approved' },
];

const StatusAssetRequests = () => {
  const [requests, setRequests] = useState([]);
  const [lastDeleted, setLastDeleted] = useState(null);

  useEffect(() => {
    const localRequests = JSON.parse(localStorage.getItem('requestedAssets')) || [];
    setRequests([...defaultStatuses, ...localRequests]);
  }, []);

  const updateLocalStorage = (newRequests) => {
    const localOnly = newRequests.filter(
      (item) => !defaultStatuses.some((d) => d.asset === item.asset && d.date === item.date)
    );
    localStorage.setItem('requestedAssets', JSON.stringify(localOnly));
  };

  const handleDelete = (indexToRemove) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      const deletedItem = requests[indexToRemove];
      const updated = requests.filter((_, i) => i !== indexToRemove);
      setRequests(updated);
      updateLocalStorage(updated);
      setLastDeleted({ item: deletedItem, index: indexToRemove });
    }
  };

  const handleUndo = () => {
    if (lastDeleted) {
      const updated = [...requests];
      updated.splice(lastDeleted.index, 0, lastDeleted.item);
      setRequests(updated);
      updateLocalStorage(updated);
      setLastDeleted(null);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all user-added requests?')) {
      setRequests(defaultStatuses);
      localStorage.removeItem('requestedAssets');
      setLastDeleted(null);
    }
  };

  return (
    <>
      <Navbares />
      <Sidebares />
      <main className="ml-64 pt-20 p-8 bg-white min-h-screen font-sans">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-900">Asset Request Status</h1>
          <Link to="/residents/requestassets">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 rounded shadow">
              ← Back to Request Assets
            </button>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-4">
          {lastDeleted && (
            <button
              onClick={handleUndo}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm shadow"
            >
              Undo Delete
            </button>
          )}
          <button
            onClick={handleClearAll}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm shadow ml-auto"
          >
            Clear All User Requests
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <table className="min-w-full text-sm bg-white rounded overflow-hidden">
            <thead className="bg-green-200 text-green-900 text-xs uppercase">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Asset</th>
                <th className="px-6 py-3 text-left font-medium">Date Requested</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-left font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((item, index) => (
                <tr key={index} className="border-t hover:bg-green-50">
                  <td className="px-6 py-4">{item.asset}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Approved'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-4">
                    No asset requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default StatusAssetRequests;

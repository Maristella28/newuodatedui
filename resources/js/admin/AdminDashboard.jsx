import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Users, FileText, Clock, Home, AlertTriangle, UserCheck } from 'lucide-react';

const stats = [
  {
    label: 'Total Residents',
    value: '1,245',
    icon: <Users className="w-6 h-6 text-white" />,
    bg: 'from-lime-400 to-lime-600',
  },
  {
    label: 'Certificates Issued',
    value: '58',
    icon: <FileText className="w-6 h-6 text-white" />,
    bg: 'from-purple-400 to-purple-600',
  },
  {
    label: 'Pending Requests',
    value: '16',
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: 'from-blue-400 to-blue-600',
  },
  {
    label: 'Household Records',
    value: '12',
    icon: <Home className="w-6 h-6 text-white" />,
    bg: 'from-amber-400 to-amber-600',
  },
  {
    label: 'Blotter Reports',
    value: '8',
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    bg: 'from-rose-400 to-rose-600',
  },
  {
    label: 'Barangay Officials',
    value: '3',
    icon: <UserCheck className="w-6 h-6 text-white" />,
    bg: 'from-teal-400 to-teal-600',
  },
];

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="bg-gray-100 min-h-screen ml-64 pt-20 p-6 font-sans">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">Barangay Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 border-l-4 border-transparent hover:border-green-500"
            >
              <div className={`p-4 rounded-full bg-gradient-to-br ${stat.bg} shadow`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;

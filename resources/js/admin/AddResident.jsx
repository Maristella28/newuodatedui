import React, { useState } from 'react';

const AddResident = ({ onAdd }) => {
  const [newResident, setNewResident] = useState({
    fullname: '',
    age: '',
    civilStatus: '',
    gender: '',
    voterStatus: '',
  });

  const handleInputChange = (e) => {
    setNewResident({ ...newResident, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      newResident.fullname &&
      newResident.age &&
      newResident.civilStatus &&
      newResident.gender &&
      newResident.voterStatus
    ) {
      onAdd(newResident);
      setNewResident({
        fullname: '',
        age: '',
        civilStatus: '',
        gender: '',
        voterStatus: '',
      });
    }
  };

  return (
    <div className="mt-2 p-4 bg-gray-100 rounded border w-[600px]">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="fullname"
          value={newResident.fullname}
          onChange={handleInputChange}
          placeholder="Fullname"
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="age"
          value={newResident.age}
          onChange={handleInputChange}
          placeholder="Age"
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="civilStatus"
          value={newResident.civilStatus}
          onChange={handleInputChange}
          placeholder="Civil Status"
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="gender"
          value={newResident.gender}
          onChange={handleInputChange}
          placeholder="Gender"
          className="px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="voterStatus"
          value={newResident.voterStatus}
          onChange={handleInputChange}
          placeholder="Voter Status"
          className="px-4 py-2 border rounded"
        />
      </div>
      <div className="mt-4 text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Resident
        </button>
      </div>
    </div>
  );
};

export default AddResident;

import React, { useState } from "react";

const dummyPatients = [
  {
    id: "P001",
    name: "Ayesha Khan",
    address: "Lahore, Pakistan",
    mobileNo: "03001234567",
    guardianName: "Amir Khan",
    guardianRelationship: "Father",
    email: "ayesha@example.com",
    password: "********",
    bloodGroup: "B+",
    frequency: "2 Weeks",
    isActive: true,
    createdOn: "2025-01-10",
    updatedOn: "2025-05-25",
  },
  {
    id: "P002",
    name: "Zara Ali",
    address: "Karachi, Pakistan",
    mobileNo: "03123456789",
    guardianName: "Fatima Ali",
    guardianRelationship: "Mother",
    email: "zara@example.com",
    password: "********",
    bloodGroup: "O-",
    frequency: "4 Weeks",
    isActive: false,
    createdOn: "2025-02-15",
    updatedOn: "2025-05-20",
  },
];

const PatientList = () => {
  const [patients, setPatients] = useState(dummyPatients);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => {
    alert("Add Patient Form will open here");
    // navigation logic if using routing: navigate('/SamplePatient');
  };

  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Patient by Name"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-[#840000] text-white px-4 py-2 rounded"
        >
          <a href="/Patient" onClick={handleAddPatient}>+ Add Patient</a>
        </button>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">Patient ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Mobile No</th>
              <th className="border p-2">Guardian</th>
              <th className="border p-2">Relationship</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Password</th>
              <th className="border p-2">Blood Group</th>
              <th className="border p-2">Frequency</th>
              <th className="border p-2">Active</th>
              <th className="border p-2">Created On</th>
              <th className="border p-2">Updated On</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="text-center border-t">
                <td className="border p-2">{patient.id}</td>
                <td className="border p-2">{patient.name}</td>
                <td className="border p-2">{patient.address}</td>
                <td className="border p-2">{patient.mobileNo}</td>
                <td className="border p-2">{patient.guardianName}</td>
                <td className="border p-2">{patient.guardianRelationship}</td>
                <td className="border p-2">{patient.email}</td>
                <td className="border p-2">{patient.password}</td>
                <td className="border p-2">{patient.bloodGroup}</td>
                <td className="border p-2">{patient.frequency}</td>
                <td className="border p-2">
                  {patient.isActive ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No</span>
                  )}
                </td>
                <td className="border p-2">{patient.createdOn}</td>
                <td className="border p-2">{patient.updatedOn}</td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button
                    onClick={() => handleDelete(patient.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredPatients.length === 0 && (
              <tr>
                <td colSpan="14" className="text-center p-4 text-gray-500">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;

import React, { useState } from "react";

const dummySchedule = [
  {
    donorAssignmentId: "DA001",
    patientId: "P001",
    donorId: "D001",
    scheduleDate: "2025-06-10",
    isDonated: true,
    isWillingToDonate: true,
    remarks: "Donated successfully",
    donorType: "Primary",
    statusId: "Completed",
    createdOn: "2025-05-25",
    updatedOn: "2025-06-10",
  },
  {
    donorAssignmentId: "DA002",
    patientId: "P002",
    donorId: "D002",
    scheduleDate: "2025-06-15",
    isDonated: false,
    isWillingToDonate: false,
    remarks: "Donor unavailable",
    donorType: "Backup",
    statusId: "Pending",
    createdOn: "2025-05-27",
    updatedOn: "2025-05-28",
  },
];

const ScheduleDonorList = () => {
  const [scheduleData, setScheduleData] = useState(dummySchedule);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchedules = scheduleData.filter((s) =>
    s.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setScheduleData(scheduleData.filter((s) => s.donorAssignmentId !== id));
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col">
      <div className="flex justify-start items-center mb-4">
        <input
          type="text"
          placeholder="Search by Patient ID"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">Assignment ID</th>
              <th className="border p-2">Patient ID</th>
              <th className="border p-2">Donor ID</th>
              <th className="border p-2">Schedule Date</th>
              <th className="border p-2">Is Donated</th>
              <th className="border p-2">Willing To Donate</th>
              <th className="border p-2">Remarks</th>
              <th className="border p-2">Donor Type</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Created On</th>
              <th className="border p-2">Updated On</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.map((s) => (
              <tr key={s.donorAssignmentId} className="border-t text-center">
                <td className="border p-2">{s.donorAssignmentId}</td>
                <td className="border p-2">{s.patientId}</td>
                <td className="border p-2">{s.donorId}</td>
                <td className="border p-2">{s.scheduleDate}</td>
                <td className="border p-2">{s.isDonated ? "Yes" : "No"}</td>
                <td className="border p-2">{s.isWillingToDonate ? "Yes" : "No"}</td>
                <td className="border p-2">{s.remarks}</td>
                <td className="border p-2">{s.donorType}</td>
                <td className="border p-2">{s.statusId}</td>
                <td className="border p-2">{s.createdOn}</td>
                <td className="border p-2">{s.updatedOn}</td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button
                    onClick={() => handleDelete(s.donorAssignmentId)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredSchedules.length === 0 && (
              <tr>
                <td colSpan="12" className="text-center p-4 text-gray-500">
                  No scheduled donors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleDonorList;

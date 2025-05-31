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
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  // Filter by patientId search term
  const filteredSchedules = scheduleData.filter((s) =>
    s.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setScheduleData(scheduleData.filter((s) => s.donorAssignmentId !== id));
  };

  // Open the edit modal and load selected row data
  const handleEditClick = (schedule) => {
    setEditData({ ...schedule });
    setIsEditing(true);
  };

  // Handle input changes in modal
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    setEditData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  // Save edited data back to main scheduleData
  const handleSave = () => {
    setScheduleData((prevData) =>
      prevData.map((item) =>
        item.donorAssignmentId === editData.donorAssignmentId ? editData : item
      )
    );
    setIsEditing(false);
    setEditData(null);
  };

  // Cancel editing
  const handleCancel = () => {
    setIsEditing(false);
    setEditData(null);
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col relative">
      {/* Search */}
      <div className="flex justify-start items-center mb-4">
        <input
          type="text"
          placeholder="Search by Patient ID"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
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
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() => handleEditClick(s)}
                  >
                    Edit
                  </button>
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

      {/* Edit Modal */}
      {isEditing && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCancel}
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Edit Donor Schedule</h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Assignment ID (readonly) */}
              <div>
                <label className="block font-medium mb-1">Assignment ID</label>
                <input
                  type="text"
                  name="donorAssignmentId"
                  value={editData.donorAssignmentId}
                  readOnly
                  className="border p-2 rounded w-full bg-gray-100 cursor-not-allowed"
                />
              </div>

              {/* Patient ID */}
              <div>
                <label className="block font-medium mb-1">Patient ID</label>
                <input
                  type="text"
                  name="patientId"
                  value={editData.patientId}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Donor ID */}
              <div>
                <label className="block font-medium mb-1">Donor ID</label>
                <input
                  type="text"
                  name="donorId"
                  value={editData.donorId}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Schedule Date */}
              <div>
                <label className="block font-medium mb-1">Schedule Date</label>
                <input
                  type="date"
                  name="scheduleDate"
                  value={editData.scheduleDate}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Is Donated */}
              <div className="flex items-center space-x-2">
                <label className="font-medium">Is Donated</label>
                <input
                  type="checkbox"
                  name="isDonated"
                  checked={editData.isDonated}
                  onChange={handleInputChange}
                />
              </div>

              {/* Is Willing To Donate */}
              <div className="flex items-center space-x-2">
                <label className="font-medium">Willing To Donate</label>
                <input
                  type="checkbox"
                  name="isWillingToDonate"
                  checked={editData.isWillingToDonate}
                  onChange={handleInputChange}
                />
              </div>

              {/* Remarks */}
              <div className="col-span-2">
                <label className="block font-medium mb-1">Remarks</label>
                <textarea
                  name="remarks"
                  value={editData.remarks}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                  rows={2}
                />
              </div>

              {/* Donor Type */}
              <div>
                <label className="block font-medium mb-1">Donor Type</label>
                <select
                  name="donorType"
                  value={editData.donorType}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="Primary">Primary</option>
                  <option value="Backup">Backup</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block font-medium mb-1">Status</label>
                <select
                  name="statusId"
                  value={editData.statusId}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              {/* Created On */}
              <div>
                <label className="block font-medium mb-1">Created On</label>
                <input
                  type="date"
                  name="createdOn"
                  value={editData.createdOn}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Updated On */}
              <div>
                <label className="block font-medium mb-1">Updated On</label>
                <input
                  type="date"
                  name="updatedOn"
                  value={editData.updatedOn}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleDonorList;

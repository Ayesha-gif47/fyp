import React, { useState } from "react";

const initialStatuses = [
  { id: "S001", status: "Pending" },
  { id: "S002", status: "Approved" },
  { id: "S003", status: "Rejected" },
];

const StatusPage = () => {
  const [statuses, setStatuses] = useState(initialStatuses);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    setStatuses(statuses.filter((s) => s.id !== id));
  };

  const handleEdit = (statusObj) => {
    setEditData({ ...statusObj });
  };

const handleInputChange = (e) => {
  const { value } = e.target;
  setEditData({ ...editData, status: value });
};


  const handleSave = () => {
    setStatuses((prev) =>
      prev.map((s) => (s.id === editData.id ? editData : s))
    );
    setEditData(null);
  };

  return (
    <div className="px-6 py-24 min-h-screen w-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Status Management</h2>

      <table className="min-w-full bg-white border text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border p-2">Status ID</th>
            <th className="border p-2">Status</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((s) => (
            <tr key={s.id} className="border-t text-center">
              <td className="border p-2">{s.id}</td>
              <td className="border p-2">{s.status}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(s)}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {statuses.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">
                No statuses available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Edit Status
            </h3>

            <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  className="border p-2 rounded w-full"
                  value={editData.status}
                  onChange={handleInputChange}

                >
                  <option value="Pending">Pending</option>
                  <option value="Fulfilled">Fulfilled</option>
                  <option value="Rejected">Rejected</option>
                </select>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleSave}
                className="bg-[#840000] text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditData(null)}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusPage;

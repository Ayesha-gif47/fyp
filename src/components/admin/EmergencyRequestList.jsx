import React, { useState } from "react";

const dummyRequests = [
  {
    patientReqId: "REQ001",
    patientId: "P001",
    bloodType: "B+",
    requiredOn: "2025-06-01",
    location: "Lahore, Pakistan",
    statusId: "Pending",
    createdOn: "2025-05-25",
    updatedOn: "2025-05-26",
  },
  {
    patientReqId: "REQ002",
    patientId: "P002",
    bloodType: "O-",
    requiredOn: "2025-06-02",
    location: "Karachi, Pakistan",
    statusId: "Fulfilled",
    createdOn: "2025-05-20",
    updatedOn: "2025-05-24",
  },
];

const EmergencyRequestList = () => {
  const [requests, setRequests] = useState(dummyRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingRequest, setEditingRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredRequests = requests.filter((req) =>
    req.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setRequests(requests.filter((r) => r.patientReqId !== id));
  };

  const openEditModal = (request) => {
    setEditingRequest({ ...request });
    setShowModal(true);
  };

  const handleSave = () => {
    const updatedList = requests.map((r) =>
      r.patientReqId === editingRequest.patientReqId
        ? {
            ...editingRequest,
            updatedOn: new Date().toISOString().split("T")[0],
          }
        : r
    );
    setRequests(updatedList);
    setShowModal(false);
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Patient ID"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-[#840000] text-white px-4 py-2 rounded">
          <a href="/RequestBlood">+ Add Request</a>
        </button>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">Request ID</th>
              <th className="border p-2">Patient ID</th>
              <th className="border p-2">Blood Type</th>
              <th className="border p-2">Required On</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Created On</th>
              <th className="border p-2">Updated On</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((req) => (
              <tr key={req.patientReqId} className="border-t text-center">
                <td className="border p-2">{req.patientReqId}</td>
                <td className="border p-2">{req.patientId}</td>
                <td className="border p-2">{req.bloodType}</td>
                <td className="border p-2">{req.requiredOn}</td>
                <td className="border p-2">{req.location}</td>
                <td className="border p-2">
                  <span
                    className={`font-semibold ${
                      req.statusId === "Fulfilled"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {req.statusId}
                  </span>
                </td>
                <td className="border p-2">{req.createdOn}</td>
                <td className="border p-2">{req.updatedOn}</td>
                <td className="border p-2">
                  <button
                    onClick={() => openEditModal(req)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(req.patientReqId)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredRequests.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-500">
                  No emergency requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✨ Edit Modal */}
      {showModal && editingRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[500px] relative">
            <h2 className="text-lg font-bold mb-4">Edit Request</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Patient ID</label>
                <input
                  className="border p-2 rounded w-full"
                  value={editingRequest.patientId}
                  onChange={(e) =>
                    setEditingRequest({ ...editingRequest, patientId: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Blood Type</label>
                <input
                  className="border p-2 rounded w-full"
                  value={editingRequest.bloodType}
                  onChange={(e) =>
                    setEditingRequest({ ...editingRequest, bloodType: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Required On</label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={editingRequest.requiredOn}
                  onChange={(e) =>
                    setEditingRequest({ ...editingRequest, requiredOn: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  className="border p-2 rounded w-full"
                  value={editingRequest.location}
                  onChange={(e) =>
                    setEditingRequest({ ...editingRequest, location: e.target.value })
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">Status</label>
                <select
                  className="border p-2 rounded w-full"
                  value={editingRequest.statusId}
                  onChange={(e) =>
                    setEditingRequest({ ...editingRequest, statusId: e.target.value })
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Fulfilled">Fulfilled</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
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

export default EmergencyRequestList;

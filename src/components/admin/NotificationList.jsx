import React, { useState } from "react";

const dummyNotifications = [
  {
    notificationId: "N001",
    donorId: "D001",
    patientId: "P001",
    messageType: "Reminder",
    message: "Your donation is scheduled for 10 June.",
    isEmailSent: true,
    sentOn: "2025-05-20",
  },
  {
    notificationId: "N002",
    donorId: "D002",
    patientId: "P002",
    messageType: "Alert",
    message: "Urgent blood required for patient P002.",
    isEmailSent: false,
    sentOn: "2025-05-21",
  },
];

const NotificationList = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [searchTerm, setSearchTerm] = useState("");
  const [editData, setEditData] = useState(null);

  const filteredNotifications = notifications.filter((n) =>
    `${n.donorId} ${n.patientId}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setNotifications(notifications.filter((n) => n.notificationId !== id));
  };

  const handleEdit = (notification) => {
    setEditData({ ...notification });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData({
      ...editData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.notificationId === editData.notificationId ? editData : n
      )
    );
    setEditData(null);
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col bg-gray-50">
      <div className="flex justify-start items-center mb-4">
        <input
          type="text"
          placeholder="Search by Donor or Patient ID"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">Notification ID</th>
              <th className="border p-2">Donor ID</th>
              <th className="border p-2">Patient ID</th>
              <th className="border p-2">Message Type</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Email Sent</th>
              <th className="border p-2">Sent On</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotifications.map((n) => (
              <tr key={n.notificationId} className="border-t text-center">
                <td className="border p-2">{n.notificationId}</td>
                <td className="border p-2">{n.donorId}</td>
                <td className="border p-2">{n.patientId}</td>
                <td className="border p-2">{n.messageType}</td>
                <td className="border p-2">{n.message}</td>
                <td className="border p-2">{n.isEmailSent ? "Yes" : "No"}</td>
                <td className="border p-2">{n.sentOn}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(n)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(n.notificationId)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredNotifications.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-500">
                  No notifications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Edit Notification
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Donor ID</label>
                <input
                  type="text"
                  name="donorId"
                  value={editData.donorId}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Patient ID</label>
                <input
                  type="text"
                  name="patientId"
                  value={editData.patientId}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message Type
                </label>
                <input
                  type="text"
                  name="messageType"
                  value={editData.messageType}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Sent On</label>
                <input
                  type="date"
                  name="sentOn"
                  value={editData.sentOn}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={editData.message}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  rows={2}
                />
              </div>

              <div className="flex items-center col-span-2">
                <input
                  type="checkbox"
                  name="isEmailSent"
                  checked={editData.isEmailSent}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm">Email Sent</span>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleSave}
                className="bg-[#840000] text-white px-4 py-2 rounded"
              >
                Save Change
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

export default NotificationList;

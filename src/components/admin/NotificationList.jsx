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

  const filteredNotifications = notifications.filter((n) =>
    `${n.donorId} ${n.patientId}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setNotifications(notifications.filter((n) => n.notificationId !== id));
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col">
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
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
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
    </div>
  );
};

export default NotificationList;

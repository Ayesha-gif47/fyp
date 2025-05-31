import React, { useState } from "react";

const dummyDonors = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Raza",
    bloodGroup: "B+",
    dob: "1995-04-10",
    phone: "03121234567",
    email: "ali@example.com",
    password: "123456",
    age: 29,
    gender: "Male",
    country: "Pakistan",
    state: "Punjab",
    city: "Lahore",
    lastDonation: "2024-12-01",
    nextDonation: "2025-01-01",
    availability: "Available",
    backup: true,
    blocked: false,
    remarks: "Healthy",
    createdOn: "2024-06-01",
    updatedOn: "2025-05-01"
  },
];

const DonorList = () => {
  const [donors, setDonors] = useState(dummyDonors);
  const [searchTerm, setSearchTerm] = useState("");
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [editedDonor, setEditedDonor] = useState({});

  const filteredDonors = donors.filter((donor) =>
    `${donor.firstName} ${donor.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (donor) => {
    setEditedDonor({ ...donor });
    setEditPopupVisible(true);
  };

  const handleSaveClick = () => {
    setDonors(donors.map((d) => (d.id === editedDonor.id ? { ...editedDonor } : d)));
    setEditPopupVisible(false);
    setEditedDonor({});
  };

  const handleDelete = (id) => {
    setDonors(donors.filter((d) => d.id !== id));
  };

  const handleInputChange = (e, field) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setEditedDonor({ ...editedDonor, [field]: value });
  };

  return (
    <div className="px-6 py-20 h-screen w-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Donor by Name"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-[#840000] text-white px-4 py-2 rounded">
          <a href="/SampleDonor">+ Add Donor</a>
        </button>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border text-sm">
          <thead>
            <tr className="bg-gray-100 text-left font-semibold">
              <th className="border p-2">Name</th>
              <th className="border p-2">Blood Group</th>
              <th className="border p-2">DOB</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Password</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Country</th>
              <th className="border p-2">State</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Last Donation</th>
              <th className="border p-2">Next Donation</th>
              <th className="border p-2">Availability</th>
              <th className="border p-2">Backup</th>
              <th className="border p-2">Blocked</th>
              <th className="border p-2">Remarks</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor) => (
              <tr key={donor.id}>
                <td className="border p-2">{donor.firstName} {donor.lastName}</td>
                <td className="border p-2">{donor.bloodGroup}</td>
                <td className="border p-2">{donor.dob}</td>
                <td className="border p-2">{donor.phone}</td>
                <td className="border p-2">{donor.email}</td>
                <td className="border p-2">{donor.password}</td>
                <td className="border p-2">{donor.age}</td>
                <td className="border p-2">{donor.gender}</td>
                <td className="border p-2">{donor.country}</td>
                <td className="border p-2">{donor.state}</td>
                <td className="border p-2">{donor.city}</td>
                <td className="border p-2">{donor.lastDonation}</td>
                <td className="border p-2">{donor.nextDonation}</td>
                <td className="border p-2">{donor.availability}</td>
                <td className="border p-2">{donor.backup ? "Yes" : "No"}</td>
                <td className="border p-2">{donor.blocked ? "Yes" : "No"}</td>
                <td className="border p-2">{donor.remarks}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditClick(donor)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(donor.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Popup */}
      {editPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[700px] max-h-[90vh] overflow-y-auto shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Donor</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "firstName", "lastName", "bloodGroup", "dob", "phone", "email", "password", "age",
                "gender", "country", "state", "city", "lastDonation", "nextDonation", "availability", "remarks"
              ].map((field) => (
                <input
                  key={field}
                  type={field === "dob" || field.includes("Donation") ? "date" : "text"}
                  value={editedDonor[field] || ""}
                  onChange={(e) => handleInputChange(e, field)}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="border p-2 rounded"
                />
              ))}
              <label className="col-span-2">
                <input
                  type="checkbox"
                  checked={editedDonor.backup}
                  onChange={(e) => handleInputChange(e, "backup")}
                  className="mr-2"
                />
                Backup
              </label>
              <label className="col-span-2">
                <input
                  type="checkbox"
                  checked={editedDonor.blocked}
                  onChange={(e) => handleInputChange(e, "blocked")}
                  className="mr-2"
                />
                Blocked
              </label>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleSaveClick}
                className="bg-[#840000] text-white px-4 py-2 rounded"
              >
                Save Change
              </button>
              <button
                onClick={() => setEditPopupVisible(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
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

export default DonorList;

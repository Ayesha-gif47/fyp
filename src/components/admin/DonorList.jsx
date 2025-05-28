import React, { useState } from "react";
import SampleDonor from "../donor/SampleDonor";

const dummyDonors = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Raza",
    bloodGroup: "B+",
    dob: "1995-04-10",
    phone: "03121234567",
    email: "ali@example.com",
    password: "********",
    age: 29,
    gender: "Male",
    country: "Pakistan",
    state: "Punjab",
    city: "Lahore",
    lastDonation: "2024-12-01",
    nextDonation: "2025-01-01",
    availability: "Available",
    backup: false,
    blocked: false,
    remarks: "Healthy",
    createdOn: "2024-06-01",
    updatedOn: "2025-05-01"
  },
];

const DonorList = () => {
  const [donors, setDonors] = useState(dummyDonors);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDonors = donors.filter((donor) =>
    `${donor.firstName} ${donor.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleAddDonor = () => {
    // show form logic (modal or new page)
    alert("Add Donor Form will open here");
    <SampleDonor/>
  };

  const handleDelete = (id) => {
    setDonors(donors.filter((d) => d.id !== id));
  };

  return (
    <div className="px-6 py-24 h-screen w-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Donor by Name"
          className="border p-2 rounded w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleAddDonor}
          className="bg-[#840000] text-white px-4 py-2 rounded "
        >
          <a href="/SampleDonor">+ Add Donor</a>
        </button>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold">
              <th className="border p-2">Name</th>
              <th className="border p-2">Blood Group</th>
              <th className="border p-2">DOB</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Last Donation</th>
              <th className="border p-2">Next Donation</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Backup</th>
              <th className="border p-2">Blocked</th>
              <th className="border p-2">Remarks</th>
              <th className="border p-2">Created</th>
              <th className="border p-2">Updated</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor) => (
              <tr key={donor.id} className="text-sm border-t">
                <td className="border p-2">{donor.firstName} {donor.lastName}</td>
                <td className="border p-2">{donor.bloodGroup}</td>
                <td className="border p-2">{donor.dob}</td>
                <td className="border p-2">{donor.phone}</td>
                <td className="border p-2">{donor.email}</td>
                <td className="border p-2">{donor.age}</td>
                <td className="border p-2">{donor.gender}</td>
                <td className="border p-2">{donor.city}</td>
                <td className="border p-2">{donor.lastDonation}</td>
                <td className="border p-2">{donor.nextDonation}</td>
                <td className="border p-2">{donor.availability}</td>
                <td className="border p-2">{donor.backup ? "Yes" : "No"}</td>
                <td className="border p-2">{donor.blocked ? "Yes" : "No"}</td>
                <td className="border p-2">{donor.remarks}</td>
                <td className="border p-2">{donor.createdOn}</td>
                <td className="border p-2">{donor.updatedOn}</td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button
                    onClick={() => handleDelete(donor.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredDonors.length === 0 && (
              <tr>
                <td colSpan="17" className="text-center p-4 text-gray-500">
                  No donors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorList;

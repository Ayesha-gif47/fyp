import React from "react";
import img from "../../images/cv.jpg"

const AdminProfile = () => {
  const adminData = {
    name: "Admin",
    email: "admin@gmail.com",
    role: "Admin",
    status: "Active",
    profileImg: img, // apni image ka link yahan laga lo
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-pink-100 to-white px-4 h-screen w-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <div className="flex flex-col items-center mb-6">
          <img
            src={adminData.profileImg}
            alt="Admin Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700 text-sm px-4">
          <div className="font-semibold">Name</div>
          <div>{adminData.name}</div>

          <div className="font-semibold">Email</div>
          <div>{adminData.email}</div>

          <div className="font-semibold">Role</div>
          <div>{adminData.role}</div>

          <div className="font-semibold">Account Status</div>
          <div>{adminData.status}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

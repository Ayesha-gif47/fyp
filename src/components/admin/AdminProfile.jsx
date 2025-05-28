const AdminProfile = () => {
  const admin = {
    name: "Areeba Fatima",
    email: "admin@example.com",
    role: "Admin",
    status: "Active"
  };

  return (
    <div className="flex flex-col justify-center items-center bg-red-200 h-screen w-screen">
      <h2 className="mt-3 text-3xl font-semibold text-gray-800">{admin.name}</h2>

      <div className="mt-2 text-lg text-gray-600 text-center">
        <p>{admin.email}</p>
        <p className="capitalize">{admin.role}</p>
        <p>
          <span className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full 
            ${admin.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {admin.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminProfile;

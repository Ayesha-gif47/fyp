import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // Dummy data — yahan API se data fetch karna hoga
  const [counts, setCounts] = useState({
    donors: 0,
    patients: 0,
    emergencyRequests: 0,
    scheduleDonors: 0,
    notifications: 0
  });

  useEffect(() => {
    // Example: Replace this with actual API call
    // fetch('/api/admin-dashboard-counts')
    //   .then(res => res.json())
    //   .then(data => setCounts(data));

    // Dummy example data for now
    const demoCounts = {
      donors: 23,
      patients: 12,
      emergencyRequests: 10,
      scheduleDonors: 16,
      notifications: 20
    };
    setCounts(demoCounts);
  }, []);

  const cardClass = "bg-white shadow-md rounded-xl p-5 flex flex-col justify-center items-center border-4 border-red-700 hover:shadow-lg transition";
  const cardTitle = "text-lg font-semibold mb-2 text-center";
  const cardNumber = "text-3xl font-bold text-red-700";
  const cardBtn = "mt-4 text-sm text-red-600 hover:underline";

  return (
    <div className="px-6 py-24 bg-gradient-to-b from-red-200 to-white min-h-screen w-full h-full">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={cardClass}>
          <div className={cardTitle}>Total Donors</div>
          <div className={cardNumber}>{counts.donors}</div>
          <button className={cardBtn}>Full Detail →</button>
        </div>

        <div className={cardClass}>
          <div className={cardTitle}>Total Patients</div>
          <div className={cardNumber}>{counts.patients}</div>
          <button className={cardBtn}>Full Detail →</button>
        </div>

        <div className={cardClass}>
          <div className={cardTitle}>Emergency Request</div>
          <div className={cardNumber}>{counts.emergencyRequests}</div>
          <button className={cardBtn}>Full Detail →</button>
        </div>

        <div className={cardClass}>
          <div className={cardTitle}>Schedule Donors</div>
          <div className={cardNumber}>{counts.scheduleDonors}</div>
          <button className={cardBtn}>Full Detail →</button>
        </div>

        <div className={cardClass}>
          <div className={cardTitle}>Notifications</div>
          <div className={cardNumber}>{counts.notifications}</div>
          <button className={cardBtn}>Full Detail →</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React from "react";
import {
  LayoutDashboard,
  Users,
  HeartPulse,
  AlertTriangle,
  CalendarClock,
  Bell,
  CheckCircle,
  User,
  KeyRound,
  LogOut,
} from "lucide-react";

const AdminSidebar = ({ setCurrentView }) => {
  return (
    <div>
      <div className="w-64 bg-white text-black h-screen p-6 space-y-6 mt-[4.5rem]">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <LayoutDashboard size={20} /> Dashboard
        </button>

        <button
          onClick={() => setCurrentView("donorlist")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <Users size={20} /> Donor List
        </button>

        <button
          onClick={() => setCurrentView("patientlist")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <HeartPulse size={20} /> Patient List
        </button>

        <button
          onClick={() => setCurrentView("emergencyrequest")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <AlertTriangle size={20} /> Emergency Request
        </button>

        <button
          onClick={() => setCurrentView("scheduledonor")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <CalendarClock size={20} /> Schedule Donor
        </button>

        <button
          onClick={() => setCurrentView("notifications")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <Bell size={20} /> Notifications
        </button>

        <button
          onClick={() => setCurrentView("StatusPage")}
          className="flex items-center gap-2 hover:text-[#840000]"
        >
          <CheckCircle size={20} /> Status
        </button>

        <div className="mt-4 font-semibold">Account</div>

        <button
          className="flex items-center gap-2 hover:text-[#840000]"
          onClick={() => setCurrentView("profile")}
        >
          <User size={20} /> Profile
        </button>

        <button 
          className="flex items-center gap-2 hover:text-[#840000]"
          onClick={() => setCurrentView("changePassword")}
        >
            <KeyRound size={20} /> Change Password
        </button>

        <button className="flex items-center gap-2 hover:text-[#840000]">
          <a href="/" className="flex gap-2">
            <LogOut size={20} /> Logout
          </a>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

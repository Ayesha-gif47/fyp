import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Hero from './components/common/Hero';
import Footer from './components/common/Footer';
import AboutUs from './components/pages/AboutUs';
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';
import RequestBlood from './components/patient/RequestBlood';
import DonorDash from './components/donor/DonorDash';
import SlideBar from './components/common/SlideBar';
import UpdateProfile from './components/donor/UpdateProfile';
import Donor from './components/donor/Donor';
import Patient from './components/patient/Patient';
import PatientDash from './components/patient/PatientDash';
import FAQs from './components/common/FAQs';
import Gallery from './components/common/Gallery';
import SampleDonor from './components/donor/SampleDonor';
import DonationDetail from './components/donor/DonationDetail';
import Thalassemia from "./components/patient/Thalassemia";
import AdminDashboard from './components/admin/AdminDashboard';
import AdminSidebar from './components/admin/AdminSidebar'; 
import AdminProfile from './components/admin/AdminProfile';
import DonorList from './components/admin/DonorList';
import PatientList from './components/admin/PatientList';
import EmergencyRequestList from './components/admin/EmergencyRequestList';
import ScheduleDonorList from './components/admin/ScheduleDonorList';
import NotificationList from './components/admin/NotificationList';
import StatusPage from './components/admin/StatusPage';
import ChangePasswordPage from './components/admin/ChangePasswordPage';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSlidebar, setShowSlidebar] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userType, setUserType] = useState(null);  // 'donor' or 'patient'


  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleSlidebar = () => setShowSlidebar(!showSlidebar);

 const handleLoginSuccess = (type) => {
  setIsLoggedIn(true);
  setUserType(type); // 'admin', 'donor', or 'patient'
  setShowLoginModal(false);
  setShowSidebar(true);
  setShowSlidebar(true);
  setCurrentView("dashboard");

 if (type === "admin") {
  navigate("/AdminDashboard");
} else if (type === "donor") {
  navigate("/DonorDash"); // or use donor layout too
} else {
  navigate("/PatientDash");
}
};
  

  const handleRealLogout = () => {
    setIsLoggedIn(false);
    setShowSidebar(false);
    setCurrentView("dashboard");
    navigate("/"); 
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        toggleSidebar={toggleSidebar}
        toggleSlidebar={toggleSlidebar}
      />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/RequestBlood' element={<RequestBlood />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Donor' element={<Donor />} />
        <Route path='/Patient' element={<Patient />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/SampleDonor" element={<SampleDonor/>}/>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path='/DonationDetail' element={<DonationDetail/>}/>
        <Route path="/Thalassemia" element={<Thalassemia/>}/>
        {/* <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="/DonorList" element={<DonorList />} /> */}
      </Routes>

      <div className="flex flex-1">
  {showSidebar && (
    userType === "admin" ? (
      <AdminSidebar setCurrentView={setCurrentView} />
    ) : (
      <SlideBar setCurrentView={setCurrentView} />
    )
  )}
  <div className="flex justify-center items-center h-full w-full">
    {currentView === "dashboard" && isLoggedIn && (
      userType === "admin" ? <AdminDashboard /> :
      userType === "donor" ? <DonorDash /> :
        <PatientDash />
    )}
    {currentView === "update" && <UpdateProfile userType={userType} />}
    {currentView === "donorlist" && <DonorList  userType={userType}/>}
    {currentView === "profile" && <AdminProfile  userType={userType}/>}
    {currentView === "patientlist" && <PatientList  userType={userType}/>}
    {currentView === "emergencyrequest" && <EmergencyRequestList  userType={userType}/>}
    {currentView === "scheduledonor" && <ScheduleDonorList  userType={userType}/>}
    {currentView === "notifications" && <NotificationList  userType={userType}/>}
    {currentView === "StatusPage" && <StatusPage userType={userType} />}
    {currentView === "changePassword" && <ChangePasswordPage userType={userType}/>}
    </div>
</div>

      {showLoginModal && (
        <Login onLoginSuccess={handleLoginSuccess} onClose={() => setShowLoginModal(false)} />
      )}

      <Footer />
    </>
  );
}

export default App;

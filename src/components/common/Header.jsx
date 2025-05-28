import React,{useState} from 'react';
import Logo from '../../images/Logo.png'
import { Menu } from 'lucide-react';
import Donor from "../donor/Donor"
import Patient from "../patient/Patient"

const Header = ({ isLoggedIn, toggleSidebar}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false)

  const handleSelect = (option) => {
    console.log("Selected:", option);
    if(option == "donor"){
      <Donor/>
    }
    else{
      <Patient/>
    }
    // Redirect or handle logic based on selection
    // Example: navigate(`/register/${option}`);
    setIsOpen(false);
  };
  return (
    <div>
      <header className="text-black body-font h-[70px] bg-white fixed top-0 w-full z-10 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          {isLoggedIn && (
            <button onClick={toggleSidebar} className="hover:text-pink-200">
              <Menu />
            </button>
          )}
          {/* Logo */}
        <img src={Logo} alt="Logo" className="w-20 h-20 text-white p-2 rounded-full" />
          {/* Hamburger Menu for Mobile */}
          <div className="block md:hidden">
            <button
              id="menu-button"
              className="text-black focus:outline-none"
              onClick={() =>
                document.getElementById("mobile-menu").classList.toggle("hidden")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            id="desktop-menu"
            className="hidden md:flex flex-wrap items-center text-xl cursor-pointer space-x-4"
          >
            <a href="/" className="hover:text-gray-900">
              Home
            </a>
            <a href="/AboutUs" className="hover:text-gray-900">
              About
            </a>
                <a href="/Gallery" className="hover:text-gray-900">
                  Gallery
                </a>
                <a href="/DonationDetail" className="hover:text-gray-900">
                  Donation Details
                </a>
                <a href="/FAQs" className="hover:text-gray-900">
                  FAQs
                </a>
          </nav>
            {/* Buttons */}
        {!isLoggedIn ? (
        <div className="hidden md:flex space-x-4">
          <a>
            <button onClick={() => setOpen(!Open)} className="text-red-400 bg-white border-4 border-red-400 rounded-full py-2 px-5 text-lg font-bold hover:bg-red-50 transition-all duration-300">
              Login
            </button>
          </a>
          <a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-red-400 bg-white border-4 border-red-400 rounded-full py-2 px-5 text-lg font-bold hover:bg-red-50 transition-all duration-300">
              Register Now
            </button>
          </a>
          {isOpen && (
        <div className="absolute z-10 top-14 right-3 mt-2 w-48 bg-white text-black text-lg rounded-xl shadow-lg">
          <button
            // onClick={() => handleSelect('donor')}
            className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white"
          >
            <a href='/Donor'>Donor</a>  
          </button>
          <button
            // onClick={() => handleSelect('thalassemia')}
            className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white"
          >
            <a href="/Patient">Thalassemia Patient</a>
          </button>
        </div>
      )}
      {Open && (
        <div className="absolute z-10 top-14 right-28 mt-2 w-48 bg-white text-black text-lg rounded-xl shadow-lg">
          <button
            // onClick={() => handleSelect('donor')}
            className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white"
          >
            <a href='/Login'>Donor</a>  
          </button>
          <button
            // onClick={() => handleSelect('thalassemia')}
            className="w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white"
          >
            <a href="/Login">Thalassemia Patient</a>
          </button>
        </div>
      )}
        </div>
        ) : (
          <a href="/">
          <button
          className="text-red-400 bg-white border-4 border-red-400 rounded-full py-2 px-6 text-lg font-bold hover:bg-red-50 transition-all duration-300">
          Logout</button>
          </a>
        )}
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="md:hidden flex flex-col space-y-4 bg-white shadow-lg absolute w-full top-[70px] left-0 px-4 py-4"
        >
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <a href="/AboutUs" className="hover:text-gray-900">
            About
          </a>
          <a href="/RequestBlood" className="hover:text-gray-900">
            Request for Blood
          </a>
          <a href="/Register" className="hover:text-gray-900">
            Donor
          </a>
          <a href="/FAQs" className="hover:text-gray-900">
            FAQs
          </a>
          <a href="/login">
            <button
              id="btn2"
              className="block w-full text-left py-2 px-5 text-xl border border-black rounded hover:bg-gray-100"
            >
              Login
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
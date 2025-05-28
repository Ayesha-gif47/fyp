import React,{useState} from 'react'

const DonationDetail = () => {
    const [isAvailable, setIsAvailable] = useState(true);
  return (
    <>
      <div className="min-h-screen bg-red-50 p-6 flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Donation Details</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        <p className="text-gray-700 mb-6 text-xl">
          Welcome to your Donation Dashboard. As a registered donor, you are required to donate blood every <span className="font-semibold">3 months</span>. This schedule ensures your well-being and helps us maintain a steady supply for those in urgent need. Click the <span className="font-semibold text-red-500">"Save the Life"</span> button below to view or confirm your next donation. If you are facing any health issues or personal emergencies, you can switch your availability status to indicate that you are currently unavailable for donation.
        </p>

        <div className="flex items-center justify-between mb-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition duration-300">
            Save the Life
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Available for Donation:</span>
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`px-4 py-1 rounded-full transition ${
                isAvailable ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
              }`}
            >
              {isAvailable ? 'Yes' : 'No'}
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Next donation cycle begins: <span className="font-semibold text-black">August 10, 2025</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default DonationDetail

import React from "react";
import donation from "../../images/donation.jpg"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.png"

const images = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: donation,
  },
  {
    id: 3,
    imgSrc: img3,
  },
  {
    id: 4,
    imgSrc: img2,
  },
  {
    id: 5,
    imgSrc: img4,
  },
  {
    id: 6,
    imgSrc: img1,
  },
  ];

const Gallery = () => {
  return (
    <>
    {/* <div id="gallery">
    {images.map((src, index) => {
        return(
          <div key={index} id="pics">
            <img src={src.imgSrc} alt={`gallery-${index}`} className="w-full"/>
          </div>
        )
      })}
    </div> */}
    <div className="bg-gray-400 min-h-screen flex justify-center items-center py-10 mt-10">
      <div className="bg-white rounded-xl p-6 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-4">Meet Our Heroes</h2>
        <p className="text-gray-600 mb-6">
          Thalassemia Patients and Blood Donors — Saving Lives Together
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl">
        {images.map((src, index) => {
        return(
          <div
            key={index}
            className="overflow-hidden rounded-xl group relative"
          >
            <img
              src={src.imgSrc}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover transform duration-500 group-hover:scale-110"/>
          </div>
        )})}
      </div>
      </div>
    </div>
    </>
  );
};

export default Gallery;

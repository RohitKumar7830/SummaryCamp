import React from "react";

// Importing all 15 images from local assets folder
import img1 from "../../assets/campsite1.jpg";
import img2 from "../../assets/campsite2.jpg";
import img3 from "../../assets/campsite3.jpg";
import img4 from "../../assets/campsite4.jpg";
import img5 from "../../assets/campsite5.jpg";
import img6 from "../../assets/campsite6.jpg";
import img7 from "../../assets/campsite7.jpg";
import img8 from "../../assets/campsite8.jpg";
import img9 from "../../assets/campsite9.jpg";
import img10 from "../../assets/campsite10.jpg";
import img11 from "../../assets/campsite11.jpg";
import img12 from "../../assets/campsite12.jpg";
import img13 from "../../assets/campsite13.jpg";
import img14 from "../../assets/campsite14.jpg";
import img15 from "../../assets/campsite15.jpg";

const campsiteImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15
];

const ImpactSection: React.FC = () => {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl font-bold">Explore Our Camp Site</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Experience the beauty of nature at our camp! Our scenic campsite is a perfect place for outdoor adventures, learning, and creating unforgettable memories.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {campsiteImages.map((img, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden">
            <img 
              src={img} 
              alt={`Camp Site ${index + 1}`} 
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;

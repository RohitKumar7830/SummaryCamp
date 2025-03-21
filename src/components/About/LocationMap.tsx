import React from "react";

const LocationMap: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center text-center py-16  bg-[#f9f8f6]">
      {/* Heading */}
      <h2 className="text-3xl font-bold">Camp Location</h2>
      <p className="text-gray-600 mt-4 mb-8 max-w-3xl mx-auto">
      Nestled in the heart of Connecticut, our camp offers the perfect blend of nature and adventure!
      </p>

      {/* Map Container */}
      <div className="w-full max-w-4xl h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
        <iframe
          title="DharmaAwakening Camp Location"
          className="w-full h-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.1748598211943!2d-73.10573550000001!3d42.039430599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e772dc9e9f184d%3A0xa7b161e929a873ee!2s82%20Fritz%20Rd%2C%20Colebrook%2C%20CT%2006021!5e0!3m2!1sen!2us!4v1742435154961!5m2!1sen!2us"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* View on Google Maps Button */}
      <a
        href="https://www.google.com/maps/place/82+Fritz+Rd,+Colebrook,+CT+06021"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md  hover:bg-orange-600 transition-all"
      >
        View on Google Maps
      </a>
    </section>
  );
};

export default LocationMap;

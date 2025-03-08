import React from "react";

const impactImages = [
  "https://img.freepik.com/free-photo/front-view-scouts-with-binoculars_23-2149885214.jpg?t=st=1741217543~exp=1741221143~hmac=42cb3edea244bc22746b10ad662fef45a6ca3b7aa56caffb4dc401bcf429a466&w=2000",
  "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104277.jpg?t=st=1741217727~exp=1741221327~hmac=b32962ca3835fd4c1c5ba29e0077b03f3b6b625457de667cdc772b908779b14d&w=2000",
  "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-basket_23-2148821575.jpg?t=st=1741217885~exp=1741221485~hmac=3af9e8c58c6ab66d041349b738b7888350306b358976df41ca9115d1abdfc421&w=996",
];

const ImpactSection: React.FC = () => {
  return (
    <section className="px-10 py-16 text-center">
      <h2 className="text-3xl font-bold">The Impact of Our Camp</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Our camp is more than just a fun-filled week. It's an opportunity for children to deepen their connection to their Indian heritage, build confidence, and make lifelong friends. 
        By nurturing a sense of cultural pride and identity, we hope to empower the next generation of Indian-Americans to embrace their roots and shine on the world stage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {impactImages.map((img, index) => (
          <div key={index} className="w-full bg-cover bg-center aspect-square rounded-xl" style={{ backgroundImage: `url(${img})` }}></div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;

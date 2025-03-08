import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-[90%] max-w-4xl h-80 mx-auto mt-12 mb-16 rounded-lg overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/top-view-cropped-hands-senior-cook-unrecognizable-cutting-carrot-cooking-vegetable-stew_1098-20510.jpg?t=st=1741208287~exp=1741211887~hmac=d0ded5be146190b12eb725c36308a1b990512b541ac431c04b2a3567ccad6b19&w=2000')",
        }}
      ></div>
    </div>
  );
};

export default Banner;

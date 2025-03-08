import React from "react";

const activities = [
  { title: "Yoga & Meditation", img: "https://img.freepik.com/free-photo/group-young-sporty-people-sitting-lotus-pose-closeup_1163-4127.jpg?t=st=1741216315~exp=1741219915~hmac=a3a2580e677ca064c37d617f2e4e8bbb3ba797279a770fe14a787d1a99956dc6&w=2000" },
  { title: "Team Projects", img: "https://img.freepik.com/free-photo/businessmen-hands-wooden-table-with-documents-drafts_176420-372.jpg?t=st=1741217129~exp=1741220729~hmac=6527fda01597816ad2b79fb759a0a5172eba98112f9b0c8ef3acc61cc8e71bda&w=2000" },
  { title: "Art & Crafts", img: "https://img.freepik.com/free-photo/view-decoration-with-paint_23-2148577721.jpg?t=st=1741217174~exp=1741220774~hmac=81574f8deeceaa257bd5966c02d99493efe89d11e1624de0d06c949679b4c803&w=2000" },
  { title: "Talent Shows", img: "https://img.freepik.com/free-photo/process-creating-stand-up-comedy_23-2151053475.jpg?t=st=1741217932~exp=1741221532~hmac=3075b609b3799d54efd906c120273eba225d8f9770f3a41244d2d2310ced2ff3&w=2000" },
];

const MultisensoryExperience: React.FC = () => {
  return (
    <section className="px-10 py-16 text-center bg-[#f9f8f6]">
      <h2 className="text-3xl font-bold">A Multisensory Journey Through India</h2>
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Our curriculum is a vibrant blend of ancient wisdom and modern expression. Kids will experience the magic of India through a kaleidoscope of activities.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4  mt-8">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-48 h-48 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${activity.img})` }}
            ></div>
            <p className="text-lg font-medium mt-2">{activity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultisensoryExperience;

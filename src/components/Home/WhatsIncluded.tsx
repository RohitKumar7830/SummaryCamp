import React from "react";

const activities = [
  {
    title: "Yoga & Wellness",
    description:
      "Start your day with a yoga class or meditation session. We offer classes for all levels and ages.",
    image:
     "https://img.freepik.com/free-photo/active-woman-practicing-yoga-home_23-2148756350.jpg?t=st=1741207982~exp=1741211582~hmac=6c0d5313377164eba463dc156fb3d56d2d5c5e158c35cd904298753db790c33b&w=2000"
  },
  {
    title: "Meditation/Pranayama",
    description:
      "Calm your mind and body with guided meditation and pranayama techniques. Enhance focus, reduce stress, and rejuvenate your spirit.",
    image:
    "https://img.freepik.com/free-photo/close-up-kid-meditating-mat_23-2149101612.jpg?t=st=1741207861~exp=1741211461~hmac=1bb85cf1658c09cf3fbaa20cf6b018f2e8cffde196347c3b45d23821f1e4fdd5&w=2000",
      
  },
  {
    title: "Team Projects",
    description:
      "Collaborate, innovate, and create! Engage in exciting team projects that foster leadership, creativity, and problem-solving skills.",
    image:
      "https://img.freepik.com/free-photo/businessmen-hands-wooden-table-with-documents-drafts_176420-367.jpg?t=st=1741208055~exp=1741211655~hmac=46d8333a19a37fe74fcefd37e859e77b2849041c7812e9d383daf56aa4310858&w=2000",
  },
  {
    title: "Games",
    description:
      "Stay active and energized with fun outdoor and indoor games! Develop teamwork, strategy, and sportsmanship through engaging play.",
    image:
      "https://img.freepik.com/free-photo/community-learning-bonding-outdoors-enjoying-nature-fun-generative-ai_188544-46310.jpg?t=st=1741208120~exp=1741211720~hmac=85b1d4de5fc8134df7d5532f873bb7a5c950c32c90229a627616626c52599065&w=2000",
  },
  {
    title: "Skits & Talent Shows",
    description:
      "Showcase your creativity and confidence on stage! Participate in skits, talent performances, and storytelling for a night of fun and entertainment.",
    image:
      "https://img.freepik.com/free-photo/love-education-young-student-couple-reading-together-room-decorated-with-voluminous-letters-with-illumination_613910-21260.jpg?t=st=1741208178~exp=1741211778~hmac=aa90fb0e6085cd1dd9074b8082acdc0cd5dd4a9b9c461d502e066da59fcaeab3&w=996",
  },
  {
    title: "Arts & Crafts",
    description:
      "Unleash your creativity with hands-on arts and crafts sessions. Explore painting, DIY crafts, and traditional artistic techniques.",
    image:
      "https://img.freepik.com/free-photo/pretty-girl-reading-book-front-illuminated-big-star-against-brick-wall_23-2147883018.jpg?t=st=1741208252~exp=1741211852~hmac=c0fd69eb4c48943b243e218e2b70d8d8fcd4fe3dd168d21459f6e605828a259e&w=2000",
  },
  {
    title: "Cooking ",
    description:
      "Discover the joy of cooking! Learn to prepare delicious meals and traditional dishes with expert guidance in a fun, interactive setting.",
    image:
      "https://img.freepik.com/free-photo/top-view-cropped-hands-senior-cook-unrecognizable-cutting-carrot-cooking-vegetable-stew_1098-20510.jpg?t=st=1741208287~exp=1741211887~hmac=d0ded5be146190b12eb725c36308a1b990512b541ac431c04b2a3567ccad6b19&w=2000",
  },
];

const WhatsIncluded: React.FC = () => {
  return (
    <section id="whatsIncluded" className="px-10 py-10">
      <h1 className="text-[#181411] text-4xl font-black leading-tight">
        What's Included
      </h1>
      {/* <p className="text-[#181411] text-lg font-normal leading-normal mt-2 max-w-2xl">
        The Indian Community Summer Camp offers a diverse array of activities
        for all ages. Here are just a few of the highlights.
      </p> */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${activity.image})` }}
            ></div>
            <div>
              <p className="text-[#181411] text-lg font-medium">
                {activity.title}
              </p>
              <p className="text-[#8a7560] text-sm font-normal">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsIncluded;

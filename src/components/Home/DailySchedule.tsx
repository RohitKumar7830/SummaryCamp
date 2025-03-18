import React from "react";
import { Clock, Users, BookOpen, Utensils, Paintbrush, Lightbulb, PartyPopper, Flame, Mic, BedDouble } from "lucide-react";

const schedule = [
  { icon: <Clock size={24} />, time: "6:00 AM – 7:00 AM", activity: "Wake Up / Get Ready" },
  { icon: <Users size={24} />, time: "7:00 AM – 7:45 AM", activity: "Yoga" },
  { icon: <Utensils size={24} />, time: "7:45 AM – 8:30 AM", activity: "Breakfast" },
  { icon: <BookOpen size={24} />, time: "8:30 AM – 11:00 AM", activity: "Learning" },
  { icon: <Users size={24} />, time: "11:00 AM – 12:00 PM", activity: "Reading / Group Discussion" },
  { icon: <Utensils size={24} />, time: "12:00 PM - 1:00 PM", activity: "Lunch" },
  { icon: <Paintbrush size={24} />, time: "1:00 PM – 2:00 PM", activity: "Arts & Crafts" },
  { icon: <Lightbulb size={24} />, time: "2:00 PM – 3:00 PM", activity: "Team Projects" },
  { icon: <PartyPopper size={24} />, time: "3:00 PM – 4:00 PM", activity: "Free Recreation" },
  { icon: <Utensils size={24} />, time: "4:00 PM– 4:30 PM", activity: "Snacks" },
  { icon: <Users size={24} />, time: "4:30 PM – 6:00 PM", activity: "Games" },
  { icon: <Flame size={24} />, time: "6:00 PM – 6:30 PM", activity: "Aarti / Bhajan" },
  { icon: <Lightbulb size={24} />, time: "6:30 PM – 7:00 PM", activity: "Evening Activity" },
  { icon: <Utensils size={24} />, time: "7:00 PM – 8:00 PM", activity: "Dinner" },
  { icon: <Mic size={24} />, time: "8:00 PM – 9:00 PM", activity: "Skit / Talent Show" },
  { icon: <Flame size={24} />, time: "9:00 PM – 9:45 PM", activity: "Fire Pit / Storytelling" },
  { icon: <Users size={24} />, time: "9:45 PM – 10:00 PM", activity: "Counselor Wrap Up" },
  { icon: <BedDouble size={24} />, time: "10:00 PM – 6:00 AM ", activity: "Lights Off" },
];

const FlowchartSchedule: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-[#f9f8f6]">
      <h2 className="text-4xl font-black text-[#3e2d27] leading-tight text-center mb-4">
        Day in a Camp
      </h2>
      <p className="text-lg text-[#7c6a5d] text-center mb-12">Sample Daily Routine</p>

      {/* Keep multi-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {schedule.map((item, index) => (
          <div key={index} className="flex items-center bg-white shadow-md rounded-lg px-6 py-3">
            {/* Icon on the Left */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#c8b6a6] bg-white text-[#3e2d27] shadow-md">
              {item.icon}
            </div>

            {/* Text on the Right */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-[#3e2d27]">{item.activity}</h3>
              <p className="text-sm font-medium text-[#7c6a5d]">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowchartSchedule;

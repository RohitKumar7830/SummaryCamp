import React from "react";
import { Clock, Users, BookOpen, Utensils, Paintbrush, Lightbulb, PartyPopper, Flame, Mic, BedDouble, ArrowRight } from "lucide-react";

const schedule = [
  { icon: <Clock size={24} />, time: "6:00 AM – 7:00 AM", activity: "Wake Up / Get Ready", description: "Start the day fresh and energized." },
  { icon: <Users size={24} />, time: "7:00 AM – 7:45 AM", activity: "Yoga", description: "Morning yoga for relaxation and focus." },
  { icon: <Utensils size={24} />, time: "7:45 AM – 8:30 AM", activity: "Breakfast", description: "Nutritious breakfast to fuel the day." },
  { icon: <BookOpen size={24} />, time: "8:30 AM – 11:00 AM", activity: "Learning", description: "Engaging educational activities." },
  { icon: <Users size={24} />, time: "11:00 AM – 12:00 PM", activity: "Reading / Group Discussion", description: "Interactive reading and discussions." },
  { icon: <Utensils size={24} />, time: "12:00 PM - 1:00 PM", activity: "Lunch", description: "Enjoy a healthy and balanced lunch." },
  { icon: <Paintbrush size={24} />, time: "1:00 PM – 2:00 PM", activity: "Arts & Crafts", description: "Creative activities and fun projects." },
  { icon: <Lightbulb size={24} />, time: "2:00 PM – 3:00 PM", activity: "Team Projects", description: "Collaborate and build new skills." },
  { icon: <PartyPopper size={24} />, time: "3:00 PM – 4:00 PM", activity: "Free Recreation", description: "Unwind and enjoy your free time." },
  { icon: <Utensils size={24} />, time: "4:00 PM– 4:30 PM", activity: "Snacks", description: "Re-energize with a delicious snack." },
  { icon: <Users size={24} />, time: "4:30 PM – 6:00 PM", activity: "Games", description: "Engage in fun group activities and sports." },
  { icon: <Flame size={24} />, time: "6:00 PM – 6:30 PM", activity: "Aarti / Bhajan", description: "Spiritual and peaceful devotional time." },
  { icon: <Lightbulb size={24} />, time: "6:30 PM – 7:00 PM", activity: "Evening Activity", description: "Special evening programs and fun." },
  { icon: <Utensils size={24} />, time: "7:00 PM – 8:00 PM", activity: "Dinner", description: "End the day with a fulfilling meal." },
  { icon: <Mic size={24} />, time: "8:00 PM – 9:0 PM", activity: "Skit / Talent Show", description: "Showcase your talents and creativity!" },
  { icon: <Flame size={24} />, time: "9:00 PM – 9:45 PM", activity: "Fire Pit / Storytelling", description: "Campfire stories and bonding time." },
  { icon: <Users size={24} />, time: "9:45 PM – 10:00 PM", activity: "Counselor Wrap Up", description: "Reflect and prepare for the next day." },
  { icon: <BedDouble size={24} />, time: "10:00 PM – 6:00 AM ", activity: "Lights Off", description: "Rest and recharge for another fun day!" },
];

const FlowchartSchedule: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 bg-[#f9f8f6]">
      <h2 className="text-4xl font-black text-[#3e2d27] leading-tight text-center mb-4">
        Day in a Camp
      </h2>
      <p className="text-lg text-[#7c6a5d] text-center mb-12">Sample Daily Routine</p>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {schedule.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center w-56">
            {/* Step Circle with Icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#c8b6a6] bg-white text-[#3e2d27] shadow-md">
              {item.icon}
            </div>

            {/* Connecting Arrow
            {index < schedule.length - 1 && (
              <ArrowRight size={30} className="text-[#c8b6a6] mt-4 hidden sm:block" />
            )} */}

            {/* Activity Details */}
            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold text-[#3e2d27]">{item.activity}</h3>
              <p className="text-sm text-[#7c6a5d]">{item.description}</p>
              <p className="text-sm font-medium text-[#3e2d27] mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowchartSchedule;

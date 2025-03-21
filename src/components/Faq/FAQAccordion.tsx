import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What’s the total fees for the week long camp?",
    answer:
      "$295 for the week long camp ( includes both boarding and lodging)",
  },
  {
    question: "What are the age groups and how are they divided?",
    answer:
      "We offer four age groups: 5-6, 7-9, 10-12, and 13-15. Children are placed in groups based on their age and grade level. We also have a teen leadership program for campers aged 16-18.",
  },
  { question: "Who is eligible for this Camp?", answer: "Anyone between the ages of 10 – 14 is eligible for this camp." },
  {
    question: "Who are the Counselors & Staff?",
    answer:
      "Our counselors are young men and women, mostly college students, who serve as cabin supervisors and mentors and teach activities. They will be assisted and supported by High School students.",
  },
  {
    question: "Can I bring a cell phone or electronics?",
    answer:
      "Camp is about doing things you don’t do at home. Cell phones, PSP’s, iPads, Kindles, video games, or basically anything with a video screen are not allowed. Non-video iPods are allowed but can only be used during rest hour and bedtime. Note: Camp is not responsible for valuables.",
  },
  {
    question: "Can my parents call me?",
    answer:
      "Parents may call the camp director at any time to inquire about their child but may call campers only in emergencies. Parents will be given phone numbers to call at the time of drop-off at the camp.",
  },
  {
    question: "What happens if I am sick or injured?",
    answer:
      "Staff members are First Aid / CPR certified for emergencies. We also have doctors on call for consultations.",
  },
  {
    question: "What if I have allergies?",
    answer:
      "On the Registration Form, you must clearly identify any allergies. You are also required to submit a note from the Physician stating that the camper can self-administer the medications.",
  },
  { question: "How are cabin groups selected?", answer: "Cabins are grouped by rising grade levels." },
];

interface FAQAccordionProps {
  searchQuery: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ searchQuery }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQs based on the search query (case-insensitive)
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-10 py-16 max-w-3xl mx-auto">
      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-opacity duration-300">{faq.answer}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">No matching questions found.</p>
      )}
    </section>
  );
};

export default FAQAccordion;

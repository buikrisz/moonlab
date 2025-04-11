"use client"; // Ensure this is at the top for client-side rendering

import { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import IntersectionObserver Hook

const schedule = [
  "8:00 – 9:00",
  "9:15 – 10:15",
  "10:30 – 11:30",
  "16:00 – 17:00",
  "17:15 – 18:15",
  "18:30 – 19:30",
];

const pricing = [
  { label: "Drop-in", price: "6,500 HUF" },
  { label: "5-session pass", price: "30,000 HUF" },
  { label: "10-session pass", price: "58,000 HUF" },
  { label: "Private session", price: "12,000 HUF" },
];

export default function HomePage() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: coachRef, inView: coachInView } = useInView({ triggerOnce: true });
  const { ref: scheduleRef, inView: scheduleInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <main className="flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="w-full h-[90vh] bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center text-white mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-black/50 p-6 rounded-xl text-center max-w-xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to MoonLab Pilates
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Recenter. Recharge. Reform your body and mind.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        className="py-16 px-6 max-w-4xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: aboutInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          About the Studio
        </motion.h2>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          MoonLab Pilates is a cozy, boutique studio in the heart of the city, offering small group reformer sessions in a calming and empowering environment.
        </motion.p>
      </motion.section>

      {/* Coach Intro */}
      <motion.section
        id="coach"
        ref={coachRef}
        className="py-12 px-6 bg-gray-100 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: coachInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: coachInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Meet Your Instructor
          </motion.h2>
          <div className="flex flex-col items-center">
            <motion.img
              src="/images/coach.jpg"
              alt="Coach"
              className="w-40 h-40 object-cover rounded-full mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: coachInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
            <motion.p
              className="text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: coachInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Krisztina Bui
            </motion.p>
            <motion.p
              className="text-gray-600 max-w-md mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: coachInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Certified Pilates instructor with a passion for helping clients feel strong, centered, and confident in their bodies.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Schedule and Pricing */}
      <motion.section
        id="classes"
        ref={scheduleRef}
        className="py-16 px-6 max-w-5xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: scheduleInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: scheduleInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Classes & Pricing
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <motion.h3
              className="text-xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: scheduleInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Weekly Schedule
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: scheduleInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <p>Monday–Saturday, 6 classes/day</p>
            </motion.div>
            <ul className="text-left mt-4 list-disc list-inside">
              {schedule.map((slot, index) => (
                <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: scheduleInView ? 1 : 0 }} transition={{ duration: 1 }}>
                  {slot}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3
              className="text-xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: scheduleInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Pricing
            </motion.h3>
            <ul className="text-left list-disc list-inside">
              {pricing.map((item, index) => (
                <motion.li key={index} initial={{ opacity: 0 }} animate={{ opacity: scheduleInView ? 1 : 0 }} transition={{ duration: 1 }}>
                  {item.label}: {item.price}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
          Book a Class
        </button>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        className="w-full bg-gray-100 py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: contactInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Email: hello@moonlabstudio.com
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Phone: +36 30 123 4567
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Address: Budapest, Example Street 12
          </motion.p>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="w-full bg-black text-white text-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>&copy; {new Date().getFullYear()} MoonLab Pilates. All rights reserved.</p>
      </motion.footer>
    </main>
  );
}

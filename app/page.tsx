"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import aboutImg from "./content/reformer_pilates.webp";
import styles from "../styles/pages.module.css";

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
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: coachRef, inView: coachInView } = useInView({
    triggerOnce: true,
  });
  const { ref: scheduleRef, inView: scheduleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className={styles.heroContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Moon Lab Pilates
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Studio
          </motion.p>
          <motion.a
            className={styles.heroButton}
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            href="#classes"
          >
            Órarend
          </motion.a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        className={styles.aboutSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: aboutInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.aboutContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutSectionTitle}>Reformer Pilates</h2>
            <p className={styles.aboutSectionText}>
              A Reformer Pilates egy dinamikus, géppel végzett mozgásforma,
              amely hatékonyan erősíti az izmokat, javítja a testtartást, és
              növeli a hajlékonyságot. A reformer gép ellenállása révén minden
              gyakorlat célzott és kontrollált, így ideális mind kezdőknek, mind
              haladóknak.
            </p>
            <p className={styles.aboutSectionText}>
              A Reformer edzések során a mélyizmokat aktiváljuk, különös
              tekintettel a törzs stabilizáló izmaira. Ez nemcsak az esztétikus
              testalkat kialakításában segít, hanem a mindennapi mozgásokat is
              könnyebbé és biztonságosabbá teszi.
            </p>
            <p className={styles.aboutSectionText}>
              A Moon Lab Pilates stúdióban kis létszámú csoportos órákon vehetsz
              részt, ahol a személyes figyelem garantált. Célunk, hogy
              vendégeink egyensúlyt találjanak test és lélek között, miközben
              egy nyugodt, inspiráló környezetben fejlődnek.
            </p>
          </div>
          <Image
            src={aboutImg}
            alt="Inside the Pilates studio"
            className={styles.aboutImage}
          />
        </motion.div>
      </motion.section>

      {/* Coach Intro */}
      <motion.section
        id="coach"
        ref={coachRef}
        className={styles.coachSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: coachInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.coachContent}>
          <h2 className={styles.sectionTitle}>Meet Your Instructor</h2>
          <div className={styles.coachProfile}>
            <motion.img
              src="/images/coach.jpg"
              alt="Coach"
              className={styles.coachImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: coachInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
            <motion.p
              className={styles.coachName}
              initial={{ opacity: 0 }}
              animate={{ opacity: coachInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Krisztina Bui
            </motion.p>
            <motion.p
              className={styles.sectionText}
              initial={{ opacity: 0 }}
              animate={{ opacity: coachInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Certified Pilates instructor with a passion for helping clients
              feel strong, centered, and confident in their bodies.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Schedule and Pricing */}
      <motion.section
        id="classes"
        ref={scheduleRef}
        className={styles.scheduleSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: scheduleInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.sectionTitle}>Classes & Pricing</h2>
        <div className={styles.scheduleGrid}>
          <div>
            <h3 className={styles.scheduleSubtitle}>Weekly Schedule</h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: scheduleInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Monday–Saturday, 6 classes/day
            </motion.p>
            <ul className={styles.scheduleList}>
              {schedule.map((slot, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scheduleInView ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  {slot}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.scheduleSubtitle}>Pricing</h3>
            <ul className={styles.scheduleList}>
              {pricing.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: scheduleInView ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  {item.label}: {item.price}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <button className={styles.bookButton}>Book a Class</button>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        className={styles.contactSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: contactInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Email: hello@moonlabstudio.com
          </motion.p>
          <motion.p
            className={styles.contactDetail}
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Phone: +36 30 123 4567
          </motion.p>
          <motion.p
            className={styles.contactDetail}
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
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>
          &copy; {new Date().getFullYear()} MoonLab Pilates. All rights
          reserved.
        </p>
      </motion.footer>
    </main>
  );
}

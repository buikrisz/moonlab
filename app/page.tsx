"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import aboutImg from "./content/reformer_pilates.webp";
import priceImg from "./content/price.jpg";
import styles from "../styles/pages.module.css";
import { PriceCard } from "@/components";

const prices = [
  {
    name: "Próba jegy",
    description:
      "Egyszeri belépés a Moon Lab Pilates stúdióba, amely lehetőséget ad arra, hogy kipróbáld a reformer pilatest és megismerd a stúdió hangulatát.",
    price: "4000 Ft",
    img: priceImg,
  },
  {
    name: "Alkalmi jegy",
    description:
      "Egyéni belépés azok számára, akik alkalmanként szeretnének részt venni reformer pilates órákon, anélkül hogy bérletet vásárolnának.",
    price: "6500 Ft",
    img: priceImg,
  },
  {
    name: "5 alkalmas bérlet",
    description:
      "5 alkalmas bérletünk rugalmas lehetőséget biztosít számodra, hogy rendszeresen részt vegyél reformer pilates órákon, miközben kedvezőbb áron élvezheted a stúdió szolgáltatásait.",
    price: "30000 Ft",
    img: priceImg,
  },
  {
    name: "10 alkalmas bérlet",
    description:
      "10 alkalmas bérletünk ideális választás azok számára, akik hosszabb távon szeretnék elkötelezni magukat a reformer pilates mellett, és maximálisan kihasználni a stúdió nyújtotta lehetőségeket",
    price: "55000 Ft",
    img: priceImg,
  },
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
        className={`${styles.section} ${styles.heroSection}`}
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
        className={`${styles.section} ${styles.aboutSection}`}
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
            <h2 className={styles.sectionTitle}>Reformer Pilates</h2>
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
              Krisztian Bui
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

      {/* Pricing */}
      <motion.section
        id="classes"
        ref={scheduleRef}
        className={`${styles.section} ${styles.priceSection}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: scheduleInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.priceContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: scheduleInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.sectionTitle}>Áraink</h2>
          <div className={styles.priceCards}>
            {prices.map((price) => (
              <PriceCard
                key={price.name}
                name={price.name}
                description={price.description}
                price={price.price}
                img={price.img}
              />
            ))}
          </div>
        </motion.div>
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
          &copy; {new Date().getFullYear()} Moon Lab Pilates. All rights
          reserved.
        </p>
      </motion.footer>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import aboutImg from "./assets/welcome_image.png";
import contactImg from "./assets/contact_image.png";
import { Navbar, PriceCard } from "./components";
import { FaqCard } from "./components/FaqCard";
import styles from "./styles/pages.module.css";
import { InformationCard } from "./components/InformationCard";
import { classTypes, coaches, faq, motibroLink, prices } from "./data";

const HomePage = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: aboutPilatesRef, inView: aboutPilatesInView } = useInView({
    triggerOnce: true,
  });
  const { ref: coachRef, inView: coachInView } = useInView({
    triggerOnce: true,
  });
  const { ref: classesRef, inView: classesInView } = useInView({
    triggerOnce: true,
  });
  const { ref: scheduleRef, inView: scheduleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: pricesRef, inView: pricesInView } = useInView({
    triggerOnce: true,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />

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
              href={motibroLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Órarend
            </motion.a>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="pilates"
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
                🌑 Üdvözlünk a Moon Lab Pilates világában! 🌑
              </p>
              <p className={styles.aboutSectionText}>
                Stúdiónk Rákospalota egyik központi, mégis csendes, nyugodt
                részén található – tökéletes helyszín a testi-lelki
                feltöltődéshez.
              </p>
              <p className={styles.aboutSectionText}>
                Az exkluzív környezet kialakítása mellett kiemelt figyelmet
                fordítottunk a gépeinkre is: a stúdióban a jelenleg elérhető
                egyik legmagasabb minőségű Reformer Pilates gépekkel dolgozunk.
              </p>
              <p className={styles.aboutSectionText}>
                Egyéni és kiscsoportos óráinkon tapasztalt oktatóink minden
                vendégre személyre szabott figyelmet fordítanak.
              </p>
              <p className={styles.aboutSectionText}>
                ✨ A Moon Lab Pilates a hely, ahol valóban elindulhatsz a
                testi-lelki egyensúly felé vezető úton. ✨
              </p>
            </div>
            <Image
              src={aboutImg}
              alt="Inside the Pilates studio"
              className={styles.aboutImage}
            />
          </motion.div>
        </motion.section>

        {/* About Pilates */}
        <motion.section
          id="pilates_info"
          ref={aboutPilatesRef}
          className={`${styles.section} ${styles.aboutPilatesSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutPilatesInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.aboutPilatesContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutPilatesInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.aboutPilatesParagraph}>
              <h5 className={styles.aboutPilatesQuestion}>
                Mi az a Reformer Pilates?
              </h5>
              <p className={styles.aboutPilatesAnswer}>
                A Reformer Pilates a klasszikus Pilates gyakorlatok
                továbbfejlesztett változata, amely egy speciális gépen, a
                reformer-en történik. A reformer egy mozgó kocsiból, rugókból,
                pántokból és rúdakból álló eszköz, amely változatos ellenállást
                biztosít, így az edzések még hatékonyabbak és dinamikusabbak
                lesznek.
              </p>
            </div>
            <div className={styles.aboutPilatesParagraph}>
              <h5 className={styles.aboutPilatesQuestion}>
                Miért válaszd a Reformer Pilates-t?
              </h5>
              <div className={styles.aboutPilatesAnswer}>
                <ol>
                  <li>
                    ✅ Erősítés és nyújtás egyszerre: A reformer segítségével
                    egyszerre fejlesztheted izmaid erejét és rugalmasságát.
                  </li>
                  <li>
                    ✅ Kíméletes az ízületekhez: A rugók ellenállása csökkenti
                    az ízületekre nehezedő terhelést, ezért biztonságos minden
                    korosztály és edzettségi szint számára.
                  </li>
                  <li>
                    ✅ Testtudatosság fejlesztése: Segít javítani a tartást, az
                    egyensúlyt és a mozgáskoordinációt.
                  </li>
                  <li>
                    ✅ Célzott izommunka: A gép lehetővé teszi, hogy az izmokat
                    pontosabban és mélyebben aktiváld, különösen a
                    törzsizomzatot (core).
                  </li>
                  <li>
                    ✅ Rehabilitáció és prevenció: Kiválóan alkalmas sérülések
                    utáni regenerációra, valamint a hát- és derékproblémák
                    megelőzésére.
                  </li>
                </ol>
              </div>
            </div>
            <div className={styles.aboutPilatesParagraph}>
              <h5 className={styles.aboutPilatesQuestion}>Kinek ajánlott?</h5>
              <div className={styles.aboutPilatesAnswer}>
                <ol className={styles.aboutPilatesListDisc}>
                  <li>
                    Teljesen kezdőknek, akik biztonságos, vezetett módon
                    szeretnék elkezdeni az edzést
                  </li>
                  <li>
                    Haladóknak, akik tovább szeretnék fejleszteni izomerejüket
                    és technikájukat
                  </li>
                  <li>Sportolóknak kiegészítő edzésként</li>
                  <li>
                    Ülőmunkát végzőknek, akik szeretnének javítani tartásukon
                  </li>
                  <li>
                    Várandós vagy szülés utáni kismamáknak (speciális program
                    keretében)
                  </li>
                </ol>
              </div>
            </div>
            <div className={styles.aboutPilatesParagraph}>
              <h5 className={styles.aboutPilatesQuestion}>
                Miért érdemes nálunk kipróbálni?
              </h5>
              <p className={styles.aboutPilatesAnswer}>
                Stúdiónkban prémium kategóriás Reformer gépekkel dolgozunk,
                amelyek maximális kényelmet és hatékonyságot biztosítanak.
                Tapasztalt oktatóink személyre szabott figyelmet fordítanak rád,
                hogy biztonságosan, fokozatosan fejlődhess – legyen a célod akár
                az alakformálás, a rehabilitáció, vagy egyszerűen a mozgás
                öröme.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Coach Intro */}
        <motion.section
          id="oktatok"
          ref={coachRef}
          className={`${styles.section} ${styles.coachSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: coachInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.coachContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: coachInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.sectionTitle}>Oktatóink</h2>
            <div className={styles.coachCards}>
              {coaches.map((coach) => (
                <InformationCard
                  key={coach.name}
                  name={coach.name}
                  description={coach.description}
                  img={coach.img}
                  isLongCard
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Class Types */}
        <motion.section
          id="oratipusok"
          ref={classesRef}
          className={`${styles.section} ${styles.classesSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: classesInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.classesContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: classesInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.sectionTitle}>Óratípusok</h2>
            <div className={styles.classesCards}>
              {classTypes.map((classType) => (
                <InformationCard
                  key={classType.name}
                  name={classType.name}
                  description={classType.description}
                  img={classType.img}
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Class schedules */}
        <motion.section
          id="orarend"
          ref={scheduleRef}
          className={`${styles.section} ${styles.scheduleSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: scheduleInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.scheduleContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: scheduleInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h2
              className={`${styles.sectionTitle} ${styles.scheduleSectionTitle}`}
            >
              Órarend és Foglalás
            </h2>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Bejelentkezés</h5>
              <p className={styles.scheduleInfoDescription}>
                A csoportos óráinkon való részvétel előzetes online
                bejelentkezéshez kötött. A foglalást a Motibro rendszerén
                keresztül, egy gyors regisztrációt követően tudod elvégezni.
              </p>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>
                Jegy- és bérletvásárlás
              </h5>
              <div className={styles.scheduleInfoDescription}>
                Az órára történő részvételhez vásárolhatsz jegyet vagy bérletet
                egyszerűen a Motibro fiókodban a Bérleteim menüpont alatt.
                Személyesen a stúdióban is van lehetőség fizetésre,
                bankkártyával.
              </div>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Lemondás</h5>
              <div className={styles.scheduleInfoDescription}>
                Ha mégsem tudsz részt venni az előzetesen lefoglalt órán,
                kérjük, hogy legalább 24 órával az óra kezdete előtt töröld a
                foglalásodat a Motibro rendszerében. Késői lemondás vagy meg nem
                jelenés esetén a Moon Lab Pilates Stúdió fenntartja a jogot az
                alkalom levonására, vagy bérlet hiányában az összeg későbbi
                felszámítására.
              </div>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Magánóra</h5>
              <p className={styles.scheduleInfoDescription}>
                Egyéni óra foglalásához kérjük, vedd fel velünk a kapcsolatot!
                Így személyre szabottan tudunk számodra oktatót és időpontot
                ajánlani.
              </p>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Órák menete</h5>
              <p className={styles.scheduleInfoDescription}>
                Az órák 50 percesek, az egyes órák között 10 perc szünetet
                tartunk. Kérjük, hogy az órakezdés előtt legkorábban 10 perccel
                érkezz meg. Az első alkalomra lehetőség szerint már átöltözve
                gyere, hogy az oktató elegendő időt tudjon szánni a
                bemutatkozásra és a reformer gép használatának ismertetésére.
                Kérünk, hogy hozz magaddal tapadós talpú zoknit és törölközőt.
                Az órákon való részvétel, valamint az eszközök használata saját
                felelősségre történik
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          id="arak"
          ref={pricesRef}
          className={`${styles.section} ${styles.priceSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: pricesInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.priceContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: pricesInView ? 1 : 0 }}
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
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          ref={faqRef}
          className={`${styles.section} ${styles.faqSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: faqInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.faqContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: faqInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={styles.sectionTitle}>Gyakori Kérdések</h2>
            {faq.map((item) => (
              <FaqCard
                key={item.answer}
                question={item.question}
                answer={item.answer}
                link={item.link}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="kapcsolat"
          ref={contactRef}
          className={`${styles.section} ${styles.contactSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: contactInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2
                className={`${styles.sectionTitle} ${styles.contactSectionTitle}`}
              >
                Kapcsolat
              </h2>
              <div className={styles.contactDetail}>
                {IoLocationSharp({})}
                <Link
                  href="https://www.google.com/search?q=1152+Budapest%2C+Öregfalusi+utca+18"
                  className={styles.contactDetailText}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1152 Budapest, Öregfalusi utca 18.
                </Link>
              </div>
              <div className={styles.contactDetail}>
                {MdPhoneIphone({})}
                <Link
                  href="tel:+36309014943"
                  className={styles.contactDetailText}
                >
                  +36 30 901 4943
                </Link>
              </div>
              <div className={styles.contactDetail}>
                {MdEmail({})}
                <Link
                  href="mailto:moonlabpilates@gmail.com"
                  className={styles.contactDetailText}
                >
                  moonlabpilates@gmail.com
                </Link>
              </div>
              <div className={styles.contactDetail}>
                <Link
                  href="https://www.facebook.com/profile.php?id=61575623570319"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {FaFacebook({ className: styles.contactSocialIcon })}
                </Link>
                <Link
                  href="https://www.instagram.com/moonlab_pilates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {FaInstagram({ className: styles.contactSocialIcon })}
                </Link>
              </div>
              <div className={styles.contactLinks}>
                <Link href="#" className={styles.contactLink}>
                  ÁSZF
                </Link>
                <Link href="#" className={styles.contactLink}>
                  Felelősségi nyilatkozat
                </Link>
                <Link href="/adatkezelesi" className={styles.contactLink}>
                  Adatkezelési tájékoztató
                </Link>
              </div>
            </div>
            <Image
              src={contactImg}
              alt="Inside the Pilates studio"
              className={styles.contactImage}
            />
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
            &copy; {new Date().getFullYear()} Moon Lab Pilates. Minden jog
            fenntartva.
          </p>
        </motion.footer>
      </main>
    </>
  );
};

export default HomePage;

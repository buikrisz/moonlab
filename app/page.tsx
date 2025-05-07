"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import aboutImg from "./content/reformer_pilates.webp";
import priceImg from "./content/price.jpg";
import { PriceCard } from "./components";
import { FaqCard } from "./components/FaqCard";
import { FaqCardProps, PriceCardProps } from "./types";
import styles from "./styles/pages.module.css";

const prices: PriceCardProps[] = [
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

const faq: FaqCardProps[] = [
  {
    question: "Hogyan tudok bejelentkezni egy órára?",
    answer:
      "Bejelentkezni a Motibro online foglalási rendszerén keresztül tudsz, egy gyors regisztráció után. LINK",
  },
  {
    question: "Hogyan tudok jegyet vagy bérletet vásárolni?",
    answer:
      "A Motibro fiókodban egyszerűen vásárolhatsz jegyet vagy bérletet. Személyesen is fizethetsz a stúdióban, készpénzzel vagy bankkártyával.",
  },
  {
    question: "Meddig tudom lemondani az órát, amire bejelentkeztem?",
    answer:
      "Az órát legalább 24 órával a kezdés előtt tudod lemondani a Motibro rendszerében díjmentesen. Késői - 24 órán belüli - lemondás esetén az óra díját felszámoljuk, bérletes vendégek esetén pedig levonásra kerül az alkalom. Kérjük, hogy mindenképp jelezd a lemondást, még ha későn is, így esélyt adsz a válólistán szereplő vendégeknek a részvételre.",
  },
  {
    question: "Mit hozzak magammal az órára?",
    answer:
      "Csak kényelmes, testhezálló edzőruhára van szükség, hogy az oktató jól lássa a tested tartását gyakorlás közben. Emellett javasoljuk a csúszásmentes zokni használatát a biztonság és higiénia érdekében. + törölköző / víz",
  },
  {
    question: "Mennyi ideig tart egy óra?",
    answer: "A csoportos Reformer Pilates órák 50 perc hosszúak.",
  },
  {
    question: "Teljesen kezdő vagyok, jöhetek órára?",
    answer:
      "Igen! Kezdő óráinkat úgy alakítottuk ki, hogy biztonságos és érthető legyen mindenki számára. Ha bizonytalan vagy, egyéni bevezető órát is tudsz foglalni.",
  },
  {
    question: "Milyen típusú órák vannak?",
    answer:
      "Reformer pilates (kezdő/haladó); Funkcionális Reformer; HIIT Strength; Stretching ",
  },
  {
    question: "Studiót, hogyan tudom megközelíteni?",
    answer: "???",
  },
  {
    question: "Van parkolási lehetőség?",
    answer: "Igen, a környéken ingyenes az utcai parkolás elérhető.",
  },
];

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
  const { ref: scheduleRef, inView: scheduleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
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
              🌑 Üdvözlünk a Moon Lab Pilates világában! 🌑
            </p>
            <p className={styles.aboutSectionText}>
              Stúdiónk Rákospalota egyik központi, mégis csendes, nyugodt részén
              található – tökéletes helyszín a testi-lelki feltöltődéshez.
            </p>
            <p className={styles.aboutSectionText}>
              Az exkluzív környezet kialakítása mellett kiemelt figyelmet
              fordítottunk a gépeinkre is: a stúdióban a jelenleg elérhető egyik
              legmagasabb minőségű Reformer Pilates gépekkel dolgozunk.
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
        id="aboutPilates"
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
                  ✅ Kíméletes az ízületekhez: A rugók ellenállása csökkenti az
                  ízületekre nehezedő terhelést, ezért biztonságos minden
                  korosztály és edzettségi szint számára.
                </li>
                <li>
                  ✅ Testtudatosság fejlesztése: Segít javítani a tartást, az
                  egyensúlyt és a mozgáskoordinációt.
                </li>
                <li>
                  ✅ Célzott izommunka: A gép lehetővé teszi, hogy az izmokat
                  pontosabban és mélyebben aktiváld, különösen a törzsizomzatot
                  (core).
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
                  Teljesen kezdőknek, akik biztonságos, vezetett módon szeretnék
                  elkezdeni az edzést
                </li>
                <li>
                  Haladóknak, akik tovább szeretnék fejleszteni izomerejüket és
                  technikájukat
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
              az alakformálás, a rehabilitáció, vagy egyszerűen a mozgás öröme.
            </p>
          </div>
        </motion.div>
      </motion.section>
      {/* Coach Intro */}
      <motion.section
        id="coach"
        ref={coachRef}
        className={`${styles.section} ${styles.coachSection}`}
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
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        className={`${styles.section} ${styles.contactSection}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: contactInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.contactContainer}>
          <h2
            className={`${styles.sectionTitle} ${styles.contactSectionTitle}`}
          >
            Kapcsolat
          </h2>
          <div className={styles.contactDetail}>
            <IoLocationSharp />
            <p className={styles.contactDetailText}>
              1152 Budapest, Öregfalusi utca 18.
            </p>
          </div>
          <div className={styles.contactDetail}>
            <MdPhoneIphone />
            <p className={styles.contactDetailText}>+36309014943</p>
          </div>
          <div className={styles.contactDetail}>
            <MdEmail />
            <p className={styles.contactDetailText}>moonlabpilates@gmail.com</p>
          </div>
          <div className={styles.contactDetail}>
            <FaFacebook className={styles.contactSocialIcon} />
            <FaInstagram className={styles.contactSocialIcon} />
          </div>
          <div className={styles.contactLinks}>
            <a href="#" className={styles.contactLink}>
              ÁSZF
            </a>
            <a href="#" className={styles.contactLink}>
              Felelősségi nyilatkozat
            </a>
          </div>
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
};

export default HomePage;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  HeartPulse,
  Dumbbell,
  BicepsFlexed,
  ShieldCheck,
  Scale,
  Sprout,
  Ticket,
  Tickets,
  CalendarDays,
  Clock,
  UserRound,
  Zap,
  Baby,
  Flower,
  Heart,
  XCircle,
  Star,
  RefreshCcw,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoLocationSharp } from 'react-icons/io5';
import { MdPhoneIphone, MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import aboutImg from './assets/welcome_image.jpg';
import contactImg from './assets/contact_image.png';
import { Navbar } from './components';
import { FaqCard } from './components/FaqCard';
import styles from './styles/pages/pages.module.css';
import aboutStyles from './styles/pages/about.module.css';
import coachStyles from './styles/pages/coach.module.css';
import classesStyles from './styles/pages/classes.module.css';
import scheduleStyles from './styles/pages/schedule.module.css';
import { classTypes, coaches, faq, motibroLink, prices } from './data';
import { PriceCardIcons } from './types';
import { useCallback, useState } from 'react';
import scheduleImg from './assets/main_background.png';

const HomePage = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
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
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  const [flippedCoach, setFlippedCoach] = useState<string | null>(null);

  const getPriceIcon = useCallback((icon: PriceCardIcons) => {
    switch (icon) {
      case PriceCardIcons.trial:
        return <Sprout size={28} strokeWidth={1.35} />;
      case PriceCardIcons.single:
        return <Ticket size={28} strokeWidth={1.35} />;
      case PriceCardIcons.five:
        return <Tickets size={28} strokeWidth={1.35} />;
      case PriceCardIcons.ten:
        return <CalendarDays size={28} strokeWidth={1.35} />;
      case PriceCardIcons.private:
        return <Clock size={28} strokeWidth={1.35} />;
      default:
        return <Ticket size={28} strokeWidth={1.35} />;
    }
  }, []);

  const getClassTypeIcon = useCallback((type: string) => {
    switch (type) {
      case 'all-levels':
        return <UserRound size={26} strokeWidth={1.35} />;
      case 'cardio':
        return <HeartPulse size={26} strokeWidth={1.35} />;
      case 'power':
        return <Zap size={26} strokeWidth={1.35} />;
      case 'beginner':
        return <Baby size={26} strokeWidth={1.35} />;
      case 'stretching':
        return <Flower size={26} strokeWidth={1.35} />;
      default:
        return <UserRound size={26} strokeWidth={1.35} />;
    }
  }, []);

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

        {/* About Reformer Pilates Section */}
        <motion.section
          id="pilates"
          ref={aboutRef}
          className={`${styles.section} ${aboutStyles.aboutSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={aboutStyles.aboutContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={aboutStyles.aboutContent}>
              <h2 className={styles.sectionTitle}>Reformer Pilates</h2>
              <h3 className={aboutStyles.aboutEyebrow}>Mi az a Reformer Pilates?</h3>

              <p className={aboutStyles.aboutSectionText}>
                A Reformer Pilates egy alacsony hatású, mégis rendkívül hatékony edzésmódszer, amely
                egy speciális gépen, a reformeren végzett mozgássorokkal erősíti, nyújtja és
                formálja a testet.
              </p>
              <p className={aboutStyles.aboutSectionText}>
                Segít javítani a tartást, növeli a rugalmasságot, fejleszti a testtudatot, és
                hozzájárul a mindennapi mozgásminőség javításához.
              </p>
            </div>

            <div className={aboutStyles.aboutImageWrapper}>
              <Image
                src={aboutImg}
                alt="Inside the Pilates studio"
                className={aboutStyles.aboutImage}
              />
            </div>

            <div className={aboutStyles.aboutBenefitsWrapper}>
              <div className={aboutStyles.aboutBenefits}>
                <div className={aboutStyles.aboutBenefitItem}>
                  <Dumbbell size={38} strokeWidth={1.4} />
                  <p>
                    Erősítés
                    <br />
                    és nyújtás
                  </p>
                </div>

                <div className={aboutStyles.aboutBenefitItem}>
                  <ShieldCheck size={38} strokeWidth={1.4} />
                  <p>
                    Ízületkímélő
                    <br />
                    mozgás
                  </p>
                </div>

                <div className={aboutStyles.aboutBenefitItem}>
                  <Scale size={38} strokeWidth={1.4} />
                  <p>
                    Testtudatosság
                    <br />
                    fejlesztése
                  </p>
                </div>

                <div className={aboutStyles.aboutBenefitItem}>
                  <BicepsFlexed size={38} strokeWidth={1.4} />
                  <p>
                    Célzott
                    <br />
                    izommunka
                  </p>
                </div>

                <div className={aboutStyles.aboutBenefitItem}>
                  <HeartPulse size={38} strokeWidth={1.4} />
                  <p>
                    Rehabilitáció
                    <br />
                    és prevenció
                  </p>
                </div>
              </div>
              <div className={aboutStyles.aboutNote}>
                <span>✨</span>
                <p>
                  Stúdiónkban prémium kategóriás Reformer gépekkel dolgozunk, amelyek maximális
                  kényelmet és hatékonyságot biztosítanak a tested és a céljaid számára.
                </p>
              </div>
            </div>

            <div className={aboutStyles.aboutRecommendedCard}>
              <h3 className={aboutStyles.aboutRecommendedTitle}>Kinek ajánlott?</h3>

              <ul className={aboutStyles.aboutRecommendedList}>
                <li>
                  Teljesen kezdőknek, akik biztonságos, vezetett módon szeretnék elkezdeni az edzést
                </li>
                <li>Haladóknak, akik tovább szeretnék fejleszteni izomerejüket és technikájukat</li>
                <li>Sportolóknak kiegészítő edzésként</li>
                <li>Ülőmunkát végzőknek, akik szeretnének javítani tartásukon</li>
                <li>Várandós kismamáknak speciális program keretében</li>
              </ul>

              <a className={aboutStyles.aboutRecommendedButton} href="#oratipusok">
                Tudj meg többet
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Coaches and Pricing */}
        <motion.section
          id="oktatok"
          ref={coachRef}
          className={`${styles.section} ${coachStyles.coachPriceSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: coachInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={coachStyles.coachPriceContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: coachInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={coachStyles.coachPriceIntro}>
              <p className={coachStyles.coachPriceEyebrow}>Szakértelem, amire számíthatsz</p>
              <h2 className={coachStyles.sectionTitle}>Oktatóink & Áraink</h2>

              <p className={coachStyles.coachPriceText}>
                Nálunk a mozgás több, mint edzés — tudatos figyelem, szakértelem és törődés. Ismerd
                meg oktatóinkat és válaszd ki az igényeidhez leginkább illő bérletet.
              </p>

              <div className={coachStyles.coachPriceHighlights}>
                <div className={coachStyles.coachPriceHighlight}>
                  <span>✦</span>
                  <p>Kis létszámú, személyre szabott órák</p>
                </div>

                <div className={coachStyles.coachPriceHighlight}>
                  <span>♡</span>
                  <p>Támogató közeg, pozitív energiákkal</p>
                </div>
              </div>
            </div>

            <div className={coachStyles.coachCards}>
              {coaches.map((coach) => (
                <button
                  type="button"
                  key={coach.name}
                  className={`${coachStyles.coachCard} ${
                    flippedCoach === coach.name ? coachStyles.flipped : ''
                  }`}
                  onClick={() =>
                    setFlippedCoach((currentCoach) =>
                      currentCoach === coach.name ? null : coach.name,
                    )
                  }
                  aria-label={`${coach.name} bemutatkozás megnyitása`}
                >
                  <div className={coachStyles.coachCardInner}>
                    <div className={coachStyles.coachCardFront}>
                      <Image src={coach.img} alt={coach.name} className={coachStyles.coachImage} />

                      <div className={coachStyles.coachCardContent}>
                        <h3 className={coachStyles.coachName}>{coach.name}</h3>
                        <p className={coachStyles.coachDescription}>{coach.description}</p>
                      </div>
                    </div>

                    <div className={coachStyles.coachCardBack}>
                      <h3 className={coachStyles.coachBackName}>{coach.name}</h3>

                      <p className={coachStyles.coachLongDescription}>{coach.description_long}</p>

                      <span className={coachStyles.coachFlipHint}>Vissza</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div id="arak" className={coachStyles.pricePanel}>
              <div className={coachStyles.priceHeader}>
                <h2 className={coachStyles.priceTitle}>Bérleteink</h2>
              </div>

              <div className={coachStyles.priceCards}>
                {prices.map((price) => (
                  <div className={coachStyles.priceCard} key={price.name}>
                    <div className={coachStyles.priceIcon}>{getPriceIcon(price.icon)}</div>

                    <h3 className={coachStyles.priceName}>{price.name}</h3>
                    <p className={coachStyles.priceValue}>{price.price}</p>
                    <p className={coachStyles.priceDescription}>{price.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={coachStyles.priceNote}>
              <span>✨</span>
              <p>
                Időszakos bérletkedvezményeinkről és aktuális ajánlatainkról Instagram és Facebook
                oldalainkon osztunk meg friss információkat.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Class Types */}
        <motion.section
          id="oratipusok"
          ref={classesRef}
          className={`${styles.section} ${classesStyles.classesSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: classesInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={classesStyles.classesContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: classesInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={classesStyles.classesHeader}>
              <h2 className={classesStyles.sectionTitle}>Óratípusok</h2>

              <p className={classesStyles.classesIntroText}>
                Válaszd ki a céljaidhoz és energiaszintedhez leginkább illő óratípust, és élvezd a
                tudatos mozgás minden pillanatát.
              </p>
            </div>

            <div className={classesStyles.classesCards}>
              {classTypes.map((classType) => (
                <div className={classesStyles.classTypeCard} key={classType.name}>
                  <div className={classesStyles.classTypeImageWrapper}>
                    <Image
                      src={classType.img}
                      alt={classType.name}
                      className={classesStyles.classTypeImage}
                    />
                  </div>

                  <div className={classesStyles.classTypeIcon}>
                    {getClassTypeIcon(classType.type)}
                  </div>

                  <div className={classesStyles.classTypeContent}>
                    <h3 className={classesStyles.classTypeName}>{classType.name}</h3>

                    <p className={classesStyles.classTypeDescription}>{classType.description}</p>

                    <div className={classesStyles.classTypeTags}>
                      {classType.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={classesStyles.classesNote}>
              <span>✨</span>
              <p>
                Óráink kis létszámúak, hogy mindenki megkapja a figyelmet és a támogatást, amire
                szüksége van.
              </p>
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
            className={scheduleStyles.scheduleContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: scheduleInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={scheduleStyles.scheduleTop}>
              <div className={scheduleStyles.scheduleIntro}>
                <h2
                  className={`${scheduleStyles.sectionTitle} ${scheduleStyles.scheduleSectionTitle}`}
                >
                  Órarend és Foglalás
                </h2>

                <h3 className={scheduleStyles.scheduleSubtitle}>
                  Találd meg a tökéletes időpontot!
                </h3>

                <p className={scheduleStyles.scheduleIntroText}>
                  Egyszerű foglalás, rugalmas lehetőségek és átlátható tudnivalók — minden, amire
                  szükséged van az élménydús edzésekhez.
                </p>

                <div className={scheduleStyles.scheduleHighlights}>
                  <div className={scheduleStyles.scheduleHighlightItem}>
                    <CalendarDays size={36} strokeWidth={1.35} />
                    <p>Egyszerű foglalás</p>
                  </div>

                  <div className={scheduleStyles.scheduleHighlightItem}>
                    <Clock size={36} strokeWidth={1.35} />
                    <p>Rugalmas lehetőségek</p>
                  </div>

                  <div className={scheduleStyles.scheduleHighlightItem}>
                    <Heart size={36} strokeWidth={1.35} />
                    <p>Rólad szól</p>
                  </div>
                </div>
              </div>

              <div className={scheduleStyles.scheduleImageWrapper}>
                <Image
                  src={scheduleImg}
                  alt="Moon Lab Pilates studio"
                  className={scheduleStyles.scheduleImage}
                />
              </div>
            </div>

            <div className={scheduleStyles.scheduleCards}>
              <div className={scheduleStyles.scheduleCard}>
                <div className={scheduleStyles.scheduleCardIcon}>
                  <UserRound size={28} strokeWidth={1.35} />
                </div>

                <p className={scheduleStyles.scheduleCardNumber}>01.</p>
                <h3 className={scheduleStyles.scheduleCardTitle}>Bejelentkezés</h3>
                <p className={scheduleStyles.scheduleCardText}>
                  A csoportos óráinkon való részvétel előzetes online bejelentkezéshez kötött. A
                  foglalást a Motibro rendszerén keresztül, egy gyors regisztrációt követően tudod
                  elvégezni.
                </p>
              </div>

              <div className={scheduleStyles.scheduleCard}>
                <div className={scheduleStyles.scheduleCardIcon}>
                  <Ticket size={28} strokeWidth={1.35} />
                </div>

                <p className={scheduleStyles.scheduleCardNumber}>02.</p>
                <h3 className={scheduleStyles.scheduleCardTitle}>Jegy- és bérletvásárlás</h3>
                <p className={scheduleStyles.scheduleCardText}>
                  Az órára történő részvételhez vásárolhatsz jegyet vagy bérletet egyszerűen a
                  Motibro fiókodban a Bérleteim menüpont alatt. Személyesen a stúdióban is van
                  lehetőség fizetésre, bankkártyával.
                </p>
              </div>

              <div className={scheduleStyles.scheduleCard}>
                <div className={scheduleStyles.scheduleCardIcon}>
                  <XCircle size={28} strokeWidth={1.35} />
                </div>

                <p className={scheduleStyles.scheduleCardNumber}>03.</p>
                <h3 className={scheduleStyles.scheduleCardTitle}>Lemondás</h3>
                <p className={scheduleStyles.scheduleCardText}>
                  Ha mégsem tudsz részt venni az előzetesen lefoglalt órán, kérjük, hogy legalább 24
                  órával az óra kezdete előtt töröld a foglalásodat a Motibro rendszerében. Késői
                  lemondás vagy meg nem jelenés esetén az alkalom levonásra kerülhet.
                </p>
              </div>

              <div className={scheduleStyles.scheduleCard}>
                <div className={scheduleStyles.scheduleCardIcon}>
                  <Star size={28} strokeWidth={1.35} />
                </div>

                <p className={scheduleStyles.scheduleCardNumber}>04.</p>
                <h3 className={scheduleStyles.scheduleCardTitle}>Magánóra</h3>
                <p className={scheduleStyles.scheduleCardText}>
                  Egyéni óra foglalásához kérjük, vedd fel velünk a kapcsolatot! Így személyre
                  szabottan tudunk számodra oktatót és időpontot ajánlani.
                </p>
              </div>

              <div className={scheduleStyles.scheduleCard}>
                <div className={scheduleStyles.scheduleCardIcon}>
                  <RefreshCcw size={28} strokeWidth={1.35} />
                </div>

                <p className={scheduleStyles.scheduleCardNumber}>05.</p>
                <h3 className={scheduleStyles.scheduleCardTitle}>Órák menete</h3>
                <p className={scheduleStyles.scheduleCardText}>
                  Az órák 50 percesek, az egyes órák között 10 perc szünetet tartunk. Kérjük, hogy
                  az órakezdés előtt legkorábban 10 perccel érkezz meg. Az első alkalomra lehetőség
                  szerint már átöltözve gyere, és hozz magaddal tapadós talpú zoknit és törölközőt.
                </p>
              </div>
            </div>

            <div className={scheduleStyles.scheduleNote}>
              <span>✨</span>

              <p>
                Foglalj helyet kedvenc órádra pár kattintással, és élvezd a tudatos mozgás élményét!
              </p>

              <a
                className={scheduleStyles.scheduleButton}
                href={motibroLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Megnyitom az órarendet
              </a>

              <small>A Motibro felületén keresztül</small>
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
              <h2 className={`${styles.sectionTitle} ${styles.contactSectionTitle}`}>Kapcsolat</h2>
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
                <Link href="tel:+36309014943" className={styles.contactDetailText}>
                  +36 30 901 4943
                </Link>
              </div>
              <div className={styles.contactDetail}>
                {MdEmail({})}
                <Link href="mailto:moonlabpilates@gmail.com" className={styles.contactDetailText}>
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
          <p>&copy; {new Date().getFullYear()} Moon Lab Pilates. Minden jog fenntartva.</p>
        </motion.footer>
      </main>
    </>
  );
};

export default HomePage;

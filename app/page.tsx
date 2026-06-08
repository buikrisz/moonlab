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
import styles from './styles/pages.module.css';
import { classTypes, coaches, faq, motibroLink, prices } from './data';
import { PriceCardIcons } from './types';
import { useCallback, useState } from 'react';

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
              <h3 className={styles.aboutEyebrow}>Mi az a Reformer Pilates?</h3>

              <p className={styles.aboutSectionText}>
                A Reformer Pilates egy alacsony hatású, mégis rendkívül hatékony edzésmódszer, amely
                egy speciális gépen, a reformeren végzett mozgássorokkal erősíti, nyújtja és
                formálja a testet.
              </p>
              <p className={styles.aboutSectionText}>
                Segít javítani a tartást, növeli a rugalmasságot, fejleszti a testtudatot, és
                hozzájárul a mindennapi mozgásminőség javításához.
              </p>
            </div>

            <div className={styles.aboutImageWrapper}>
              <Image src={aboutImg} alt="Inside the Pilates studio" className={styles.aboutImage} />
            </div>

            <div className={styles.aboutBenefitsWrapper}>
              <div className={styles.aboutBenefits}>
                <div className={styles.aboutBenefitItem}>
                  <Dumbbell size={38} strokeWidth={1.4} />
                  <p>
                    Erősítés
                    <br />
                    és nyújtás
                  </p>
                </div>

                <div className={styles.aboutBenefitItem}>
                  <ShieldCheck size={38} strokeWidth={1.4} />
                  <p>
                    Ízületkímélő
                    <br />
                    mozgás
                  </p>
                </div>

                <div className={styles.aboutBenefitItem}>
                  <Scale size={38} strokeWidth={1.4} />
                  <p>
                    Testtudatosság
                    <br />
                    fejlesztése
                  </p>
                </div>

                <div className={styles.aboutBenefitItem}>
                  <BicepsFlexed size={38} strokeWidth={1.4} />
                  <p>
                    Célzott
                    <br />
                    izommunka
                  </p>
                </div>

                <div className={styles.aboutBenefitItem}>
                  <HeartPulse size={38} strokeWidth={1.4} />
                  <p>
                    Rehabilitáció
                    <br />
                    és prevenció
                  </p>
                </div>
              </div>
              <div className={styles.aboutNote}>
                <span>✨</span>
                <p>
                  Stúdiónkban prémium kategóriás Reformer gépekkel dolgozunk, amelyek maximális
                  kényelmet és hatékonyságot biztosítanak a tested és a céljaid számára.
                </p>
              </div>
            </div>

            <div className={styles.aboutRecommendedCard}>
              <h3 className={styles.aboutRecommendedTitle}>Kinek ajánlott?</h3>

              <ul className={styles.aboutRecommendedList}>
                <li>
                  Teljesen kezdőknek, akik biztonságos, vezetett módon szeretnék elkezdeni az edzést
                </li>
                <li>Haladóknak, akik tovább szeretnék fejleszteni izomerejüket és technikájukat</li>
                <li>Sportolóknak kiegészítő edzésként</li>
                <li>Ülőmunkát végzőknek, akik szeretnének javítani tartásukon</li>
                <li>Várandós kismamáknak speciális program keretében</li>
              </ul>

              <a className={styles.aboutRecommendedButton} href="#oratipusok">
                Tudj meg többet
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Coaches and Pricing */}
        <motion.section
          id="oktatok"
          ref={coachRef}
          className={`${styles.section} ${styles.coachPriceSection}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: coachInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.coachPriceContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: coachInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.coachPriceIntro}>
              <p className={styles.coachPriceEyebrow}>Szakértelem, amire számíthatsz</p>
              <h2 className={styles.sectionTitle}>Oktatóink & Áraink</h2>

              <p className={styles.coachPriceText}>
                Nálunk a mozgás több, mint edzés — tudatos figyelem, szakértelem és törődés. Ismerd
                meg oktatóinkat és válaszd ki az igényeidhez leginkább illő bérletet.
              </p>

              <div className={styles.coachPriceHighlights}>
                <div className={styles.coachPriceHighlight}>
                  <span>✦</span>
                  <p>Kis létszámú, személyre szabott órák</p>
                </div>

                <div className={styles.coachPriceHighlight}>
                  <span>♡</span>
                  <p>Támogató közeg, pozitív energiákkal</p>
                </div>
              </div>
            </div>

            <div className={styles.coachCards}>
              {coaches.map((coach) => (
                <button
                  type="button"
                  key={coach.name}
                  className={`${styles.coachCard} ${
                    flippedCoach === coach.name ? styles.flipped : ''
                  }`}
                  onClick={() =>
                    setFlippedCoach((currentCoach) =>
                      currentCoach === coach.name ? null : coach.name,
                    )
                  }
                  aria-label={`${coach.name} bemutatkozás megnyitása`}
                >
                  <div className={styles.coachCardInner}>
                    <div className={styles.coachCardFront}>
                      <Image src={coach.img} alt={coach.name} className={styles.coachImage} />

                      <div className={styles.coachCardContent}>
                        <h3 className={styles.coachName}>{coach.name}</h3>
                        <p className={styles.coachDescription}>{coach.description}</p>
                      </div>
                    </div>

                    <div className={styles.coachCardBack}>
                      <h3 className={styles.coachBackName}>{coach.name}</h3>

                      <p className={styles.coachLongDescription}>{coach.description_long}</p>

                      <span className={styles.coachFlipHint}>Vissza</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div id="arak" className={styles.pricePanel}>
              <div className={styles.priceHeader}>
                <h2 className={styles.priceTitle}>Bérleteink</h2>
              </div>

              <div className={styles.priceCards}>
                {prices.map((price) => (
                  <div className={styles.priceCard} key={price.name}>
                    <div className={styles.priceIcon}>{getPriceIcon(price.icon)}</div>

                    <h3 className={styles.priceName}>{price.name}</h3>
                    <p className={styles.priceValue}>{price.price}</p>
                    <p className={styles.priceDescription}>{price.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.priceNote}>
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
            <div className={styles.classesHeader}>
              <h2 className={styles.sectionTitle}>Óratípusok</h2>

              <p className={styles.classesIntroText}>
                Válaszd ki a céljaidhoz és energiaszintedhez leginkább illő óratípust, és élvezd a
                tudatos mozgás minden pillanatát.
              </p>
            </div>

            <div className={styles.classesCards}>
              {classTypes.map((classType) => (
                <div className={styles.classTypeCard} key={classType.name}>
                  <div className={styles.classTypeImageWrapper}>
                    <Image
                      src={classType.img}
                      alt={classType.name}
                      className={styles.classTypeImage}
                    />
                  </div>

                  <div className={styles.classTypeIcon}>{getClassTypeIcon(classType.type)}</div>

                  <div className={styles.classTypeContent}>
                    <h3 className={styles.classTypeName}>{classType.name}</h3>

                    <p className={styles.classTypeDescription}>{classType.description}</p>

                    <div className={styles.classTypeTags}>
                      {classType.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.classesNote}>
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
            className={styles.scheduleContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: scheduleInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={`${styles.sectionTitle} ${styles.scheduleSectionTitle}`}>
              Órarend és Foglalás
            </h2>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Bejelentkezés</h5>
              <p className={styles.scheduleInfoDescription}>
                A csoportos óráinkon való részvétel előzetes online bejelentkezéshez kötött. A
                foglalást a Motibro rendszerén keresztül, egy gyors regisztrációt követően tudod
                elvégezni.
              </p>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Jegy- és bérletvásárlás</h5>
              <div className={styles.scheduleInfoDescription}>
                Az órára történő részvételhez vásárolhatsz jegyet vagy bérletet egyszerűen a Motibro
                fiókodban a Bérleteim menüpont alatt. Személyesen a stúdióban is van lehetőség
                fizetésre, bankkártyával.
              </div>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Lemondás</h5>
              <div className={styles.scheduleInfoDescription}>
                Ha mégsem tudsz részt venni az előzetesen lefoglalt órán, kérjük, hogy legalább 24
                órával az óra kezdete előtt töröld a foglalásodat a Motibro rendszerében. Késői
                lemondás vagy meg nem jelenés esetén a Moon Lab Pilates Stúdió fenntartja a jogot az
                alkalom levonására, vagy bérlet hiányában az összeg későbbi felszámítására.
              </div>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Magánóra</h5>
              <p className={styles.scheduleInfoDescription}>
                Egyéni óra foglalásához kérjük, vedd fel velünk a kapcsolatot! Így személyre
                szabottan tudunk számodra oktatót és időpontot ajánlani.
              </p>
            </div>
            <div className={styles.scheduleParagraph}>
              <h5 className={styles.scheduleInfoTitle}>Órák menete</h5>
              <p className={styles.scheduleInfoDescription}>
                Az órák 50 percesek, az egyes órák között 10 perc szünetet tartunk. Kérjük, hogy az
                órakezdés előtt legkorábban 10 perccel érkezz meg. Az első alkalomra lehetőség
                szerint már átöltözve gyere, hogy az oktató elegendő időt tudjon szánni a
                bemutatkozásra és a reformer gép használatának ismertetésére. Kérünk, hogy hozz
                magaddal tapadós talpú zoknit és törölközőt. Az órákon való részvétel, valamint az
                eszközök használata saját felelősségre történik
              </p>
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

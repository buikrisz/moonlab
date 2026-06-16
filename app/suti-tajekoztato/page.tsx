import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CookieSettingsButton } from '../components/CookieSettingsButton';
import logo from '../assets/moon_studio_website_logo_brown.svg';
import styles from '../styles/adatkezelesi.module.css';

export const metadata: Metadata = {
  title: 'Süti tájékoztató | Moon Lab Pilates',
  description:
    'A Moon Lab Pilates süti tájékoztatója a weboldalon használt szükséges és analitikai sütikről, valamint a Google Analytics használatáról.',
  alternates: {
    canonical: '/suti-tajekoztato',
  },
};

const SutiTajekoztatoPage = () => {
  return (
    <main className={styles.main}>
      <Link className={styles.logo} href="/" aria-label="Vissza a főoldalra">
        <Image src={logo} alt="Moon Lab Pilates Logo" width={112} />
      </Link>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Moon Lab Pilates</p>
        <h1 className={styles.title}>Süti tájékoztató</h1>

        <div className={styles.titleDivider}>
          <span />
        </div>

        <p className={styles.lead}>
          Jelen tájékoztató bemutatja, hogy a Moon Lab Pilates weboldala milyen sütiket és
          böngészőben tárolt beállításokat használ, milyen célból, és hogyan módosíthatod a
          hozzájárulásodat.
        </p>

        <div className={styles.heroActions}>
          <CookieSettingsButton className={styles.cookieSettingsButton}>
            Süti beállítások módosítása
          </CookieSettingsButton>
        </div>

        <p className={styles.updated}>Hatályos: 2026. június 15-től</p>
      </section>

      <div className={styles.mainSection}>
        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>1. Mik azok a sütik?</h2>

          <p>
            A sütik kis adatfájlok, amelyeket a böngésző tárolhat a weboldal használata során.
            Segíthetnek az oldal működésében, a beállítások megjegyzésében vagy a látogatottság
            mérésében.
          </p>

          <p>
            A Moon Lab Pilates weboldala a szükséges működési beállításokon túl kizárólag akkor
            használ analitikai sütiket, ha ehhez a látogató hozzájárul.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>2. Szükséges beállítások</h2>

          <p>
            A weboldal eltárolja, hogy a látogató elfogadta vagy elutasította-e az analitikai
            sütiket. Ez azért szükséges, hogy a választást ne kelljen minden oldalmegnyitáskor újra
            megadni.
          </p>

          <div className={styles.tableLike}>
            <div>
              <strong>Név</strong>
              <p>moonlab_cookie_consent</p>
            </div>

            <div>
              <strong>Típus</strong>
              <p>Böngészőben tárolt helyi beállítás, localStorage</p>
            </div>

            <div>
              <strong>Cél</strong>
              <p>A süti hozzájárulási döntés megjegyzése.</p>
            </div>

            <div>
              <strong>Időtartam</strong>
              <p>A böngészőben marad, amíg a látogató nem törli vagy nem módosítja a beállítást.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>3. Google Analytics</h2>

          <p>
            A weboldal Google Analytics 4 szolgáltatást használhat a látogatottság és az
            oldalhasználat mérésére. Az analitika segít megérteni például, hogy hányan látogatják az
            oldalt, milyen eszközről érkeznek, és mely részek iránt érdeklődnek.
          </p>

          <p>
            A Google Analytics kizárólag akkor töltődik be, ha a látogató az analitikai sütiket
            elfogadja. Elutasítás esetén a Google Analytics script nem kerül betöltésre.
          </p>

          <div className={styles.tableLike}>
            <div>
              <strong>Szolgáltató</strong>
              <p>Google Ireland Limited / Google LLC</p>
            </div>

            <div>
              <strong>Cél</strong>
              <p>Weboldal-látogatottság és használati statisztikák mérése.</p>
            </div>

            <div>
              <strong>Jogalap</strong>
              <p>Az érintett hozzájárulása.</p>
            </div>

            <div>
              <strong>Tipikus sütik</strong>
              <p>_ga, _ga_&lt;container-id&gt;</p>
            </div>

            <div>
              <strong>Alapértelmezett időtartam</strong>
              <p>Legfeljebb 2 év, a Google Analytics beállításai szerint.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>4. Hozzájárulás módosítása</h2>

          <p>
            A hozzájárulás bármikor módosítható a weboldalon található „Süti beállítások” gombbal. A
            böngésző beállításaiban a sütik és a helyi tárhely adatai manuálisan is törölhetők.
          </p>

          <div className={styles.noticeCard}>
            <span>Fontos</span>
            <p>
              Ha elutasítod az analitikai sütiket, a weboldal továbbra is ugyanúgy használható
              marad, csak látogatottsági mérést nem végzünk a böngésződben.
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>5. Kapcsolat</h2>

          <p>
            Ha kérdésed van a sütikkel vagy adatkezeléssel kapcsolatban, az alábbi elérhetőségeken
            kereshetsz minket:
          </p>

          <p>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:moonlabpilates@gmail.com">moonlabpilates@gmail.com</a>
            <br />
            <strong>Telefon:</strong> <a href="tel:+36309014943">06 30 901 4943</a>
          </p>
        </section>

        <div className={styles.bottomNote}>
          <span>✨</span>
          <p>Az adatkezelés részletes szabályait az Adatkezelési tájékoztatóban találod.</p>
          <Link href="/adatkezelesi">Adatkezelés</Link>
        </div>
      </div>
    </main>
  );
};

export default SutiTajekoztatoPage;

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/moon_studio_website_logo_brown.svg';
import styles from '../styles/adatkezelesi.module.css';

export const metadata: Metadata = {
  title: 'Adatkezelési tájékoztató',
  description:
    'A Moon Lab Pilates adatkezelési tájékoztatója a vendégek személyes adatainak kezeléséről, foglalásról, kapcsolattartásról és kamerás megfigyelésről.',
  alternates: {
    canonical: '/adatkezelesi',
  },
};

const AdatkezelesiPage = () => {
  return (
    <main className={styles.main}>
      <Link className={styles.logo} href="/" aria-label="Vissza a főoldalra">
        <Image src={logo} alt="Moon Lab Pilates Logo" width={112} />
      </Link>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Moon Lab Pilates</p>
        <h1 className={styles.title}>Adatkezelési tájékoztató</h1>

        <div className={styles.titleDivider}>
          <span />
        </div>

        <p className={styles.lead}>
          Jelen tájékoztató bemutatja, hogy a Moon Lab Pilates Kft. milyen személyes adatokat kezel
          a stúdió működése, a foglalások, a kapcsolattartás, a számlázás és a kamerás vagyonvédelem
          során.
        </p>

        <p className={styles.updated}>Hatályos: 2025. július 26-tól</p>
      </section>

      <div className={styles.mainSection}>
        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>1. Az adatkezelő adatai</h2>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span>Név</span>
              <p>Moon Lab Pilates Korlátolt Felelősségű Társaság</p>
            </div>

            <div className={styles.infoCard}>
              <span>Székhely</span>
              <p>1048 Budapest, Külső Szilágyi út 106. 1. em. 2.</p>
            </div>

            <div className={styles.infoCard}>
              <span>Cégjegyzékszám</span>
              <p>01-09-443478</p>
            </div>

            <div className={styles.infoCard}>
              <span>Adószám</span>
              <p>32804119-1-41</p>
            </div>

            <div className={styles.infoCard}>
              <span>Képviselő</span>
              <p>Bui-Tóth Dominika</p>
            </div>

            <div className={styles.infoCard}>
              <span>Kapcsolat</span>
              <p>
                <a href="mailto:moonlabpilates@gmail.com">moonlabpilates@gmail.com</a>
                <br />
                <a href="tel:+36309014943">06 30 901 4943</a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>2. Az adatkezelés célja</h2>

          <p>
            A Moon Lab Pilates Kft. a stúdió működésével összefüggésben személyes adatokat kezel
            annak érdekében, hogy a szolgáltatásokat megfelelően biztosítani tudja, kapcsolatot
            tartson a vendégekkel, kezelje a foglalásokat, teljesítse jogszabályi kötelezettségeit,
            valamint biztosítsa a stúdió személy- és vagyonvédelmét.
          </p>

          <ul className={styles.bulletList}>
            <li>időpontfoglalások kezelése, órákon való részvétel biztosítása,</li>
            <li>vendégekkel történő kapcsolattartás,</li>
            <li>számlázási és számviteli kötelezettségek teljesítése,</li>
            <li>panaszok, kérdések és megkeresések kezelése,</li>
            <li>személy- és vagyonvédelem kamerás megfigyelés útján.</li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>3. A vendégek személyes adatainak kezelése</h2>

          <p>
            A vendégek adatai elsősorban a foglalási rendszerben kerülnek rögzítésre. A foglalási
            rendszer üzemeltetője adatfeldolgozóként jár el, vagyis az adatokat a Moon Lab Pilates
            Kft. megbízásából és annak utasításai szerint kezeli.
          </p>

          <div className={styles.tableLike}>
            <div>
              <strong>Kezelt adatok</strong>
              <p>
                név, e-mail cím, telefonszám, foglalási adatok, bérlet- és vásárlási adatok,
                számlázási adatok
              </p>
            </div>

            <div>
              <strong>Adatkezelés célja</strong>
              <p>
                foglalás kezelése, szolgáltatás nyújtása, kapcsolattartás, számlázás, jogi
                kötelezettségek teljesítése
              </p>
            </div>

            <div>
              <strong>Jogalap</strong>
              <p>
                szerződés teljesítése, jogi kötelezettség teljesítése, hozzájárulás, illetve jogos
                érdek
              </p>
            </div>

            <div>
              <strong>Megőrzési idő</strong>
              <p>
                a szolgáltatás teljesítéséhez szükséges ideig, illetve a számviteli és jogszabályi
                kötelezettségek szerinti ideig
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>4. Adatfeldolgozók</h2>

          <p>
            A Moon Lab Pilates Kft. a működése során adatfeldolgozókat vehet igénybe. Az
            adatfeldolgozók kizárólag a szolgáltatás nyújtásához szükséges mértékben, az adatkezelő
            utasításai szerint férhetnek hozzá személyes adatokhoz.
          </p>

          <ul className={styles.bulletList}>
            <li>foglalási rendszer szolgáltatója,</li>
            <li>számlázóprogram szolgáltatója,</li>
            <li>könyvelési szolgáltató,</li>
            <li>tárhely- és e-mail szolgáltató,</li>
            <li>informatikai vagy karbantartási szolgáltató, ha ez szükséges.</li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>5. Cookie-k és Google Analytics</h2>

          <p>
            A Moon Lab Pilates weboldala a látogatói élmény javítása és az oldal használatának
            megértése érdekében Google Analytics 4 szolgáltatást használhat.
          </p>

          <p>
            A Google Analytics kizárólag akkor töltődik be, ha a látogató ehhez a süti bannerben
            hozzájárul. Elutasítás esetén analitikai mérés nem történik.
          </p>

          <p>
            A sütik és analitikai beállítások részletes leírását a Süti tájékoztató tartalmazza.
          </p>

          <Link className={styles.inlineButton} href="/suti-tajekoztato">
            Süti tájékoztató megnyitása
          </Link>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>6. Kamerás megfigyelés</h2>

          <p>
            A stúdió egyes területein kamerás megfigyelés működik személy- és vagyonvédelmi célból.
            A kamerarendszer kizárólag képet rögzít, hangrögzítés nem történik.
          </p>

          <div className={styles.noticeCard}>
            <span>Fontos</span>
            <p>
              Kamera nem kerül elhelyezésre öltözőben, mosdóban vagy olyan helyiségben, ahol a
              megfigyelés az emberi méltóságot sértené.
            </p>
          </div>

          <h3 className={styles.smallTitle}>6.1. A kamerás megfigyelés célja</h3>

          <ul className={styles.bulletList}>
            <li>személyek és vagyon védelme,</li>
            <li>jogellenes cselekmények megelőzése és felderítése,</li>
            <li>jogsértések bizonyítása, például lopás vagy rongálás esetén,</li>
            <li>esetleges jogviták megalapozása vagy elhárítása.</li>
          </ul>

          <h3 className={styles.smallTitle}>6.2. A megfigyelt területek</h3>

          <ul className={styles.bulletList}>
            <li>stúdió bejárata,</li>
            <li>recepciós vagy pihenőterület,</li>
            <li>közlekedőfolyosó.</li>
          </ul>

          <h3 className={styles.smallTitle}>6.3. Jogalap</h3>

          <p>
            A kamerás adatkezelés jogalapja a Moon Lab Pilates Kft. jogos érdeke, amely a stúdió
            vagyonbiztonságának megőrzéséhez, a vendégek és munkatársak testi épségének védelméhez,
            valamint a szolgáltatás zavartalan működésének biztosításához kapcsolódik.
          </p>

          <h3 className={styles.smallTitle}>6.4. A felvételek megőrzési ideje</h3>

          <p>
            A felvételek legfeljebb 3 munkanapig kerülnek megőrzésre, kivéve, ha jogvita, rendkívüli
            esemény, hatósági megkeresés vagy más jogi eljárás indokolja a hosszabb tárolást. Ilyen
            esetben a felvétel a szükséges eljárás lezárásáig őrizhető meg.
          </p>

          <h3 className={styles.smallTitle}>6.5. Hozzáférés a felvételekhez</h3>

          <p>
            A kamerafelvételekhez kizárólag az adatkezelő, illetve az általa kijelölt, titoktartásra
            kötelezett személyek férhetnek hozzá. A hozzáférés kizárólag indokolt esetben történhet.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>7. Adatok továbbítása</h2>

          <p>
            Személyes adatok harmadik fél részére kizárólag jogszabályi kötelezettség teljesítése,
            hatósági megkeresés, az érintett hozzájárulása vagy a szolgáltatás teljesítéséhez
            szükséges adatfeldolgozói közreműködés esetén kerülhetnek továbbításra.
          </p>

          <p>
            Kamerafelvétel kizárólag indokolt esetben, például hatósági megkeresés, jogvita vagy
            rendkívüli esemény kivizsgálása esetén adható ki.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>8. Az érintettek jogai</h2>

          <p>
            Az érintettek a vonatkozó adatvédelmi jogszabályok alapján az alábbi jogokat
            gyakorolhatják:
          </p>

          <ul className={styles.bulletList}>
            <li>tájékoztatást kérhetnek az adatkezelésről,</li>
            <li>hozzáférést kérhetnek saját személyes adataikhoz,</li>
            <li>kérhetik adataik helyesbítését,</li>
            <li>kérhetik adataik törlését, ha annak jogszabályi feltételei fennállnak,</li>
            <li>kérhetik az adatkezelés korlátozását,</li>
            <li>tiltakozhatnak a jogos érdeken alapuló adatkezelés ellen,</li>
            <li>hozzájáruláson alapuló adatkezelés esetén visszavonhatják hozzájárulásukat,</li>
            <li>panaszt tehetnek a Nemzeti Adatvédelmi és Információszabadság Hatóságnál.</li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>9. Panasztételi lehetőség</h2>

          <p>
            Amennyiben az érintett úgy véli, hogy személyes adatainak kezelése jogsértő, panasszal
            fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz.
          </p>

          <div className={styles.contactCard}>
            <p>
              <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság</strong>
            </p>
            <p>
              <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
            </p>
            <p>
              <strong>Levelezési cím:</strong> 1363 Budapest, Pf. 9.
            </p>
            <p>
              <strong>Web:</strong>{' '}
              <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer">
                www.naih.hu
              </a>
            </p>
            <p>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>10. Automatizált döntéshozatal, profilalkotás</h2>

          <p>A Moon Lab Pilates Kft. nem végez automatizált döntéshozatalt vagy profilalkotást.</p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>11. Hozzáférés az adatkezelési tájékoztatóhoz</h2>

          <p>
            A tájékoztató a stúdióban elérhető, valamint a honlapon elektronikusan is megtekinthető.
            A Moon Lab Pilates Kft. fenntartja a jogot a tájékoztató módosítására, különösen
            jogszabályváltozás, új adatkezelési folyamat vagy szolgáltatás bevezetése esetén.
          </p>
        </section>

        <div className={styles.bottomNote}>
          <span>✨</span>
          <p>
            Kérdés esetén keress minket emailben vagy telefonon, és segítünk az adatkezeléssel
            kapcsolatos információkban.
          </p>
          <Link href="/#kapcsolat">Kapcsolat</Link>
        </div>
      </div>
    </main>
  );
};

export default AdatkezelesiPage;

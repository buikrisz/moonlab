import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/moon_studio_website_logo_brown.svg';
import styles from '../styles/felelossegi-nyilatkozat.module.css';

export const metadata: Metadata = {
  title: 'Felelősségvállalási nyilatkozat',
  description:
    'A Moon Lab Pilates felelősségvállalási nyilatkozata az órákon való részvétel, egészségügyi tájékoztatás és stúdióhasználat feltételeiről.',
  alternates: {
    canonical: '/felelossegi-nyilatkozat',
  },
};

const FelelossegvallalasiNyilatkozatPage = () => {
  return (
    <main className={styles.main}>
      <Link className={styles.logo} href="/" aria-label="Vissza a főoldalra">
        <Image src={logo} alt="Moon Lab Pilates Logo" width={112} />
      </Link>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Moon Lab Pilates</p>
        <h1 className={styles.title}>Felelősségvállalási nyilatkozat</h1>

        <div className={styles.titleDivider}>
          <span />
        </div>

        <p className={styles.lead}>
          A Moon Lab Pilates óráin való részvétel előtt minden vendég megismeri és elfogadja az
          alábbi nyilatkozatot. A dokumentum célja, hogy egyértelműen rögzítse a biztonságos
          részvétel, az egészségügyi tájékoztatás és a stúdióhasználat alapvető feltételeit.
        </p>

        <p className={styles.updated}>Hatályos: 2025. július 26-tól</p>
      </section>

      <div className={styles.mainSection}>
        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>1. Saját felelősségű részvétel</h2>

          <p>
            Tudomásul veszem, hogy a Moon Lab Pilates óráin saját felelősségemre veszek részt. A
            reformer gépeket, kiegészítő eszközöket és a stúdió felszereléseit rendeltetésszerűen
            használom, valamint követem az oktató utasításait.
          </p>

          <p>
            Tisztában vagyok azzal, hogy minden sporttevékenység bizonyos kockázatokkal jár, és a
            pilates gyakorlatok különös figyelmet, koncentrációt és odafigyelést igényelnek.
          </p>

          <div className={styles.noticeCard}>
            <span>Fontos</span>
            <p>
              Az órán való részvétel során köteles vagyok jelezni az oktatónak, ha fájdalmat,
              rosszullétet, bizonytalanságot vagy szokatlan kellemetlenséget tapasztalok.
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>2. Egészségügyi állapot</h2>

          <p>
            Kijelentem, hogy egészségi állapotom jelen tudomásom szerint alkalmas a pilates
            gyakorlatok végzésére.
          </p>

          <p>
            Amennyiben egészségügyi problémám van, várandós vagyok, műtéten estem át, sérülésem,
            mozgásszervi panaszom vagy bármilyen olyan állapotom van, amely az órán való részvételt
            befolyásolhatja, erről az óra megkezdése előtt tájékoztatom az oktatót.
          </p>

          <p>
            Tudomásul veszem, hogy műtét, sérülés, krónikus fájdalom, mozgásszervi panasz,
            várandósság vagy egyéb egészségügyi kérdés esetén kizárólag orvosi vagy megfelelő
            szakemberrel történő konzultációt követően veszek részt az órákon.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>3. Oktatói utasítások és házirend</h2>

          <p>
            Elfogadom a Moon Lab Pilates házirendjét, valamint az órákra, a stúdió használatára és a
            higiéniai előírásokra vonatkozó szabályokat.
          </p>

          <ul className={styles.bulletList}>
            <li>az órán az oktató instrukcióit követem,</li>
            <li>a gépeket és eszközöket kizárólag rendeltetésszerűen használom,</li>
            <li>a stúdió tisztaságára és nyugalmára figyelek,</li>
            <li>más vendégek testi épségét, nyugalmát és személyes terét tiszteletben tartom,</li>
            <li>a saját fizikai állapotomnak megfelelően végzem a gyakorlatokat.</li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>4. Felelősségvállalás</h2>

          <p>
            Tudomásul veszem, hogy a Moon Lab Pilates órái nem minősülnek egészségügyi
            szolgáltatásnak, gyógykezelésnek vagy orvosi tanácsadásnak.
          </p>

          <p>
            Felelősséget vállalok azért, hogy az egészségi állapotommal kapcsolatban pontos és
            naprakész információkat adok meg, és az órákon a saját állapotomnak megfelelően veszek
            részt.
          </p>

          <p>
            Tudomásul veszem, hogy a Moon Lab Pilates Kft. nem vállal felelősséget azokért a
            sérülésekért, egészségügyi problémákért vagy károkért, amelyek a vendég valótlan vagy
            hiányos tájékoztatásából, egészségügyi állapotának elhallgatásából, az oktatói
            utasítások figyelmen kívül hagyásából, illetve a gépek vagy eszközök nem
            rendeltetésszerű használatából erednek.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>5. Személyes adatok kezelése</h2>

          <p>
            Hozzájárulok, illetve tudomásul veszem, hogy a Moon Lab Pilates Kft. az órákra való
            regisztrációval, foglalással és részvétellel összefüggésben személyes adataimat kezeli.
          </p>

          <p>
            Kijelentem, hogy az általam megadott információk pontosak és naprakészek. Az adatkezelés
            részletes szabályait a Moon Lab Pilates Adatkezelési tájékoztatója tartalmazza.
          </p>

          <Link className={styles.inlineButton} href="/adatkezelesi">
            Adatkezelési tájékoztató megnyitása
          </Link>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>6. Kép- és videófelvételek</h2>

          <p>
            Tudomásul veszem, hogy az edzések, események vagy stúdióban zajló programok során kép-
            és videófelvétel készülhet, amely megjelenhet a Moon Lab Pilates közösségi
            médiafelületein, honlapján vagy egyéb kommunikációs anyagaiban.
          </p>

          <div className={styles.noticeCard}>
            <span>Jelzés</span>
            <p>
              Amennyiben nem járulok hozzá ahhoz, hogy rólam felismerhető felvétel készüljön vagy
              kerüljön közzétételre, ezt előzetesen jelzem az oktatónak vagy a stúdió
              munkatársainak.
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>7. Kiskorú vendégek</h2>

          <p>
            Tudomásul veszem, hogy 18 év alatti vendég esetén a részvételhez szülői vagy gondviselői
            hozzájárulás szükséges.
          </p>

          <p>
            A hozzájárulást az első órára kitöltött és aláírt nyilatkozat formájában szükséges
            magával hozni, vagy a stúdió által megjelölt módon előzetesen eljuttatni.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>8. A nyilatkozat érvényessége</h2>

          <p>
            Tudomásul veszem, hogy jelen nyilatkozat minden egyes részvételemre érvényes, amikor a
            Moon Lab Pilates óráin, eseményein vagy programjain megjelenek.
          </p>

          <p>
            Az óra foglalásával, a stúdió szolgáltatásainak igénybevételével, illetve a nyilatkozat
            aláírásával elfogadom a jelen felelősségvállalási nyilatkozatot, a Moon Lab Pilates
            Általános Szerződési Feltételeit és a házirendet.
          </p>

          <Link className={styles.inlineButton} href="/aszf">
            ÁSZF megnyitása
          </Link>
        </section>

        <div className={styles.bottomNote}>
          <span>✨</span>
          <p>
            Kérdésed van a részvétellel, egészségügyi jelzéssel vagy az első alkalommal
            kapcsolatban? Keress minket, és segítünk.
          </p>
          <Link href="/#kapcsolat">Kapcsolat</Link>
        </div>
      </div>
    </main>
  );
};

export default FelelossegvallalasiNyilatkozatPage;

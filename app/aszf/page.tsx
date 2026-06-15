import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/moon_studio_website_logo_brown.svg';
import styles from '../styles/aszf.module.css';

const AszfPage = () => {
  return (
    <main className={styles.main}>
      <Link className={styles.logo} href="/" aria-label="Vissza a főoldalra">
        <Image src={logo} alt="Moon Lab Pilates Logo" width={112} />
      </Link>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Moon Lab Pilates</p>
        <h1 className={styles.title}>Általános Szerződési Feltételek</h1>

        <div className={styles.titleDivider}>
          <span />
        </div>

        <p className={styles.lead}>
          Jelen ÁSZF a Moon Lab Pilates Kft. által nyújtott reformer pilates szolgáltatások
          igénybevételének általános feltételeit tartalmazza, ideértve a foglalás, fizetés,
          lemondás, bérlethasználat és részvétel szabályait.
        </p>

        <p className={styles.updated}>Hatályos: 2025. július 26-tól</p>
      </section>

      <div className={styles.mainSection}>
        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>1. A szolgáltató adatai</h2>

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
          <h2 className={styles.subTitle}>2. Az ÁSZF hatálya</h2>

          <p>
            Jelen Általános Szerződési Feltételek a Moon Lab Pilates Kft. által nyújtott
            szolgáltatásokra, különösen a reformer pilates órákra, magánórákra, bérletekre, alkalmi
            jegyekre, foglalásokra és a stúdióban történő részvételre vonatkoznak.
          </p>

          <p>
            A szolgáltatás igénybevételével, foglalás leadásával, bérlet vagy jegy megvásárlásával a
            vendég elfogadja jelen ÁSZF rendelkezéseit.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>3. A szolgáltatás leírása</h2>

          <p>
            A Moon Lab Pilates reformer pilates órákat, csoportos órákat, magánórákat, valamint
            ezekhez kapcsolódó kiegészítő szolgáltatásokat nyújt. Az órák célja a tudatos mozgás,
            testtartás javítása, erősítés, mobilitás fejlesztése és a vendégek testi-lelki
            feltöltődésének támogatása.
          </p>

          <ul className={styles.bulletList}>
            <li>csoportos reformer pilates órák,</li>
            <li>magánórák és egyéni foglalkozások,</li>
            <li>kezdő, haladó, kismama vagy tematikus órák,</li>
            <li>bérletek, alkalmi jegyek és próbaalkalmak.</li>
          </ul>

          <p>
            Az aktuális óratípusok, árak, időpontok és foglalási lehetőségek a honlapon, a foglalási
            rendszerben vagy a stúdió hivatalos kommunikációs felületein érhetők el.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>4. Foglalás és részvétel</h2>

          <p>
            Az órákon való részvétel előzetes foglaláshoz kötött. A vendég köteles a foglalás során
            valós adatokat megadni, és olyan órára jelentkezni, amely fizikai állapotának,
            tapasztalatának és egészségi helyzetének megfelel.
          </p>

          <div className={styles.tableLike}>
            <div>
              <strong>Foglalás</strong>
              <p>
                A foglalás a használt online foglalási rendszerben, illetve a stúdió által megjelölt
                egyéb csatornákon történhet.
              </p>
            </div>

            <div>
              <strong>Visszaigazolás</strong>
              <p>
                A foglalás akkor tekinthető érvényesnek, ha azt a foglalási rendszer vagy a stúdió
                visszaigazolta.
              </p>
            </div>

            <div>
              <strong>Érkezés</strong>
              <p>
                A vendég köteles időben érkezni. Késés esetén a stúdió jogosult megtagadni az órán
                való részvételt, ha a késés az óra menetét vagy a biztonságos részvételt zavarná.
              </p>
            </div>

            <div>
              <strong>Óralétszám</strong>
              <p>
                A csoportos órák létszáma korlátozott. A helyek a foglalások sorrendjében kerülnek
                betöltésre.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>5. Díjak, fizetés és számlázás</h2>

          <p>
            A szolgáltatások aktuális díjai a honlapon, a foglalási rendszerben vagy a stúdió
            hivatalos árlistájában találhatók. A Moon Lab Pilates Kft. fenntartja az árak
            módosításának jogát, amely a már megvásárolt és érvényes bérleteket nem érinti, kivéve,
            ha az adott bérlet vagy akció feltételei ettől eltérően rendelkeznek.
          </p>

          <ul className={styles.bulletList}>
            <li>
              fizetés történhet online, bankkártyával, átutalással vagy a stúdióban elérhető
              fizetési módokon,
            </li>
            <li>
              a bérletek és alkalmi jegyek a fizetés teljesítését követően válnak használhatóvá,
            </li>
            <li>a számlázás a hatályos jogszabályok alapján történik,</li>
            <li>
              kedvezmények, kuponok és akciók kizárólag a meghirdetett feltételek szerint
              használhatók fel.
            </li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>6. Bérletek és alkalmak felhasználása</h2>

          <p>
            A bérletek meghatározott számú alkalomra és/vagy meghatározott érvényességi időre
            szólnak. A bérletek felhasználási feltételeit az adott bérlettípushoz kapcsolódó leírás
            tartalmazza.
          </p>

          <div className={styles.noticeCard}>
            <span>Fontos</span>
            <p>
              A bérletek lejárati ideje, átruházhatósága, szüneteltetése vagy hosszabbítása mindig
              az aktuálisan meghirdetett bérletfeltételek szerint történik.
            </p>
          </div>

          <p>
            Amennyiben a vendég a bérlet érvényességi idején belül nem használja fel az alkalmakat,
            a fennmaradó alkalmak automatikusan nem hosszabbodnak meg, kivéve, ha a stúdió egyedi
            méltányossági alapon vagy előre meghirdetett szabályzat alapján ettől eltérően dönt.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>7. Lemondás, módosítás és meg nem jelenés</h2>

          <p>
            A lefoglalt órák lemondása vagy módosítása a foglalási rendszerben, illetve a stúdió
            által megjelölt csatornákon keresztül történhet. A pontos lemondási határidőt az
            aktuális foglalási szabályzat vagy a foglalási rendszer tartalmazza.
          </p>

          <ul className={styles.bulletList}>
            <li>határidőn belüli lemondás esetén az alkalom visszakerülhet a vendég bérletére,</li>
            <li>határidőn túli lemondás esetén az alkalom felhasználtnak minősülhet,</li>
            <li>meg nem jelenés esetén az alkalom levonásra kerülhet,</li>
            <li>rendkívüli esetekben a stúdió egyedi méltányosságot gyakorolhat.</li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>8. Egészségügyi állapot és felelősség</h2>

          <p>
            A vendég a szolgáltatást saját felelősségére veszi igénybe. A vendég köteles az óra
            megkezdése előtt tájékoztatni az oktatót minden olyan körülményről, sérülésről,
            betegségről, várandósságról vagy egészségügyi állapotról, amely az órán való biztonságos
            részvételt befolyásolhatja.
          </p>

          <p>
            A Moon Lab Pilates Kft. és az oktatók jogosultak megtagadni vagy korlátozni a
            részvételt, ha a vendég egészségi állapota, felkészültsége vagy magatartása alapján az
            óra biztonságos teljesítése nem biztosítható.
          </p>

          <p>
            Az órák nem minősülnek egészségügyi szolgáltatásnak, gyógykezelésnek vagy orvosi
            tanácsadásnak. Egészségügyi probléma esetén a vendég köteles orvossal vagy megfelelő
            szakemberrel konzultálni.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>9. Házirend</h2>

          <p>
            A vendég köteles a stúdió házirendjét, az oktató utasításait és a biztonságos
            használatra vonatkozó szabályokat betartani.
          </p>

          <ul className={styles.bulletList}>
            <li>a stúdió területén kulturált, másokat tiszteletben tartó magatartás elvárt,</li>
            <li>az eszközök kizárólag rendeltetésszerűen használhatók,</li>
            <li>az oktató instrukcióinak betartása kötelező,</li>
            <li>
              a vendég köteles jelezni, ha fájdalmat, rosszullétet vagy bizonytalanságot érez,
            </li>
            <li>
              a stúdió tisztaságának és nyugalmának megőrzése minden vendég közös felelőssége.
            </li>
          </ul>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>10. A szolgáltató felelőssége</h2>

          <p>
            A Moon Lab Pilates Kft. mindent megtesz annak érdekében, hogy a szolgáltatás
            biztonságos, szakszerű és megfelelő környezetben történjen. A szolgáltató nem felel
            azokért a károkért, amelyek a vendég valótlan adatszolgáltatásából, egészségügyi
            állapotának elhallgatásából, az oktatói utasítások figyelmen kívül hagyásából vagy a nem
            rendeltetésszerű eszközhasználatból erednek.
          </p>

          <p>
            A stúdió területére behozott személyes tárgyakért a vendég felel. A szolgáltató a
            vendégek értéktárgyaiért csak jogszabályban meghatározott esetekben és mértékben vállal
            felelősséget.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>11. Órarend és szolgáltatás módosítása</h2>

          <p>
            A Moon Lab Pilates Kft. fenntartja a jogot az órarend, oktatók, óratípusok, árak, akciók
            és szolgáltatási feltételek módosítására. A módosításokról a stúdió a vendégeket a
            honlapon, a foglalási rendszerben, e-mailben vagy közösségi felületein tájékoztathatja.
          </p>

          <p>
            A stúdió jogosult az órát lemondani vagy módosítani különösen betegség, technikai
            probléma, vis maior, alacsony létszám vagy más rendkívüli körülmény esetén.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>12. Panaszkezelés</h2>

          <p>
            A vendég a szolgáltatással kapcsolatos panaszát személyesen, e-mailben vagy telefonon
            jelezheti a Moon Lab Pilates Kft. felé. A stúdió törekszik arra, hogy a panaszokat
            békésen, gyorsan és együttműködő módon rendezze.
          </p>

          <div className={styles.contactCard}>
            <p>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:moonlabpilates@gmail.com">moonlabpilates@gmail.com</a>
            </p>
            <p>
              <strong>Telefon:</strong> <a href="tel:+36309014943">06 30 901 4943</a>
            </p>
          </div>

          <p>
            Amennyiben a fogyasztói jogvita közvetlenül nem rendezhető, a fogyasztó jogosult
            békéltető testülethez fordulni. A békéltető testületi eljárás célja, hogy a fogyasztó és
            a vállalkozás közötti jogvitában egyezség létrehozását kísérelje meg.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>13. Békéltető testület</h2>

          <p>
            A fogyasztó a lakóhelye vagy tartózkodási helye szerint illetékes békéltető testülethez
            fordulhat. A békéltető testületekről további információ a hivatalos békéltetési oldalon
            érhető el.
          </p>

          <div className={styles.contactCard}>
            <p>
              <strong>Békéltető testületek:</strong>{' '}
              <a href="https://bekeltetes.hu" target="_blank" rel="noopener noreferrer">
                bekeltetes.hu
              </a>
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>14. Adatkezelés</h2>

          <p>
            A szolgáltatás igénybevétele során a Moon Lab Pilates Kft. személyes adatokat kezel. Az
            adatkezelés részletes szabályait az Adatkezelési tájékoztató tartalmazza.
          </p>

          <Link className={styles.inlineButton} href="/adatkezelesi">
            Adatkezelési tájékoztató megnyitása
          </Link>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>15. Szerzői jogok</h2>

          <p>
            A honlapon, közösségi felületeken és a stúdió kommunikációs anyagaiban megjelenő
            szövegek, képek, arculati elemek, logók és egyéb tartalmak szerzői jogi védelem alatt
            állhatnak. Ezek felhasználása, másolása vagy terjesztése kizárólag a Moon Lab Pilates
            Kft. előzetes írásbeli engedélyével történhet.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>16. Az ÁSZF módosítása</h2>

          <p>
            A Moon Lab Pilates Kft. jogosult jelen ÁSZF-et egyoldalúan módosítani. A módosított ÁSZF
            a honlapon történő közzététellel válik hatályossá. A módosítás a már teljesített
            szolgáltatásokat nem érinti.
          </p>
        </section>

        <section className={styles.sectionBlock}>
          <h2 className={styles.subTitle}>17. Irányadó jog</h2>

          <p>
            Jelen ÁSZF-re a magyar jog rendelkezései irányadók. A felek elsődlegesen törekednek
            arra, hogy esetleges vitáikat békés úton, egyeztetéssel rendezzék.
          </p>
        </section>

        <div className={styles.bottomNote}>
          <span>✨</span>
          <p>
            Kérdésed van a foglalással, bérletekkel vagy részvételi feltételekkel kapcsolatban?
            Keress minket, és segítünk.
          </p>
          <Link href="/#kapcsolat">Kapcsolat</Link>
        </div>
      </div>
    </main>
  );
};

export default AszfPage;

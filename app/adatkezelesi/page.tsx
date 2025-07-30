import Image from "next/image";
import logo from "../assets/moon_studio_website_logo_brown.svg";
import styles from "../styles/adatkezelesi.module.css";
import Link from "next/link";

const AdatkezelesiPage = () => {
  return (
    <main className={styles.main}>
      <Link className={styles.logo} href="/">
        <Image src={logo} alt="Moon Lab Pilates Logo" width={100} />
      </Link>
      <div className={styles.mainSection}>
        <h1 className={styles.title}>
          Adatkezelési tájékoztató kamerás megfigyeléshez
        </h1>

        <h2 className={styles.subTitle}>1. Az adatkezelő adatai</h2>
        <ul className={styles.list}>
          <li>
            <strong>Név:</strong> Moon Lab Pilates Korlátolt Felelősségű
            Társaság
          </li>
          <li>
            <strong>Székhely:</strong> 1048, Budapest Külső Szilágyi út 106. 1.
            em 2
          </li>
          <li>
            <strong>Cégjegyzékszám:</strong> 01-09-443478
          </li>
          <li>
            <strong>Adószám:</strong> 32804119-1-41
          </li>
          <li>
            <strong>Képviselő:</strong> Bui-Tóth Dominika
          </li>
          <li>
            <strong>Kapcsolat:</strong> moonlabpilates@gmail.com, +xxx
          </li>
        </ul>

        <h2 className={styles.subTitle}>2. Az adatkezelés célja</h2>
        <p>A kamerás megfigyelés célja:</p>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>személyek és vagyon védelme,</li>
          <li>a jogellenes cselekmények megelőzése és felderítése,</li>
          <li>a jogsértések bizonyítása (pl. lopás, rongálás, stb.),</li>
          <li>
            az esetleges munkajogi vagy polgári jogi követelések megalapozása
            vagy elhárítása.
          </li>
        </ul>

        <h2 className={styles.subTitle}>3. A megfigyelt terület</h2>
        <p>
          A stúdióban egy kamera került elhelyezésre a recepción, és az alábbi
          területeket figyeli meg:
        </p>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>stúdió bejárata,</li>
          <li>recepciós/pihenőterület,</li>
          <li>közlekedőfolyosó,</li>
        </ul>

        <h2 className={styles.subTitle}>
          4. Az adatkezelés alapjául szolgáló jogszabályok
        </h2>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>
            Az információs önrendelkezési jogról szóló és az
            információszabadságról szóló 2011. évi CXII. törvény (Info tv.)
          </li>
          <li>
            Az Európai Parlament és a Tanács (EU) 2016/679 Rendelete (GDPR)
          </li>
          <li>A Polgári Törvénykönyvről szóló 2013. évi V. törvény (Ptk.)</li>
          <li>
            Az Általános Adatvédelmi Rendelet (GDPR) 6. cikk (1) bekezdés f)
            pontja – az adatkezelő jogos érdeke.
          </li>
        </ul>
        <p>
          <strong>A jogos érdek igazolása:</strong> a stúdió vagyonbiztonságának
          megőrzése, a vendégek és munkatársak testi épségének, illetve a
          szolgáltatás zavartalan működésének biztosítása.
        </p>

        <h2 className={styles.subTitle}>5. A kezelt adatok köre</h2>
        <ul className={styles.list}>
          <li>
            A kamerarendszer valós idejű képfelvételt, illetve annak rögzítését
            végzi.
          </li>
          <li>A hangrögzítés nem történik.</li>
        </ul>

        <h2 className={styles.subTitle}>6. A felvételek tárolásának ideje</h2>
        <p>
          A felvételek maximum 3 munkanapig kerülnek tárolásra, kivéve ha azok
          felhasználása egy eljárásban indokolt (pl. rendőrségi megkeresés,
          jogvita).
        </p>

        <h2 className={styles.subTitle}>7. Hozzáférés az adatokhoz</h2>
        <ul className={styles.list}>
          <li>
            A felvételekhez kizárólag az adatkezelő, illetve az általa
            megbízott, titoktartásra kötelezett személyek férhetnek hozzá.
          </li>
          <li>
            Az adatkezelő biztosítja, hogy a hozzáférés naplózott és
            ellenőrizhető legyen.
          </li>
        </ul>

        <h2 className={styles.subTitle}>8. Adatok továbbítása</h2>
        <p>
          A felvételek kizárólag hatósági megkeresés (pl. rendőrség) vagy
          jogviták esetén kerülhetnek átadásra az érintettek, illetve jogi
          képviselőik számára.
        </p>

        <h2 className={styles.subTitle}>9. Az érintettek jogai</h2>
        <p>Az érintettek az alábbi jogokat gyakorolhatják:</p>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>hozzáférés a rájuk vonatkozó felvételhez,</li>
          <li>a felvétel másolatának kérése,</li>
          <li>törlés kérése (amennyiben lehetséges jogi akadály nélkül),</li>
          <li>tiltakozás az adatkezelés ellen,</li>
        </ul>
        <p>
          Panasz benyújtása a Nemzeti Adatvédelmi és Információszabadság
          Hatósághoz (NAIH):
          <br />
          <strong>Cím: </strong>1055 Budapest, Falk Miksa utca 9-11.
          <br />
          <strong>Web: </strong>
          {
            <a
              href="https://www.naih.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.naih.hu
            </a>
          }
          <br />
          <strong>Telefonszám: </strong>+36 1 391 1400
          <br />
          <strong>E-mail: </strong>
          {<a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>}
        </p>

        <h2 className={styles.subTitle}>
          10. Automatizált döntéshozatal, profilalkotás
        </h2>
        <p>
          Az adatkezelő nem végez automatizált döntéshozatalt vagy
          profilalkotást a kamerás megfigyelés alapján.
        </p>

        <h2 className={styles.subTitle}>11. Értesítés</h2>
        <p>
          Ez a tájékoztató a Moon Lab Pilates Kft. által működtetett telephelyen
          kihelyezésre került, továbbá kérésre elektronikusan is elérhető.
        </p>
      </div>
    </main>
  );
};

export default AdatkezelesiPage;

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
        <h1 className={styles.title}>Adatkezelési tájékoztató</h1>

        <h2 className={styles.subTitle}>1. Az adatkezelő adatai</h2>
        <ul className={styles.list}>
          <li>
            <strong>Név:</strong> Moon Lab Pilates Korlátolt Felelősségű
            Társaság
          </li>
          <li>
            <strong>Székhely:</strong> 1048, Budapest Külső Szilágyi út 106. 1
            em. 2
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
            <strong>Kapcsolat:</strong> moonlabpilates@gmail.com, 06 30 901 4943
          </li>
        </ul>

        <h2 className={styles.subTitle}>2. Az adatkezelés célja</h2>
        <p>
          A Moon Lab Pilates Kft. a stúdió működésével összefüggésben kétféle
          adatkezelést végez:
        </p>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>
            Vendégek személyes adatainak kezelése a szolgáltatások
            igénybevételéhez (pl. foglalás, kapcsolattartás, számlázás)
          </li>
          <li>Kamerás megfigyelés a személy- és vagyonvédelem céljából</li>
        </ul>

        <h2 className={styles.subTitle}>
          3. A vendégek személyes adatainak kezelése
        </h2>
        <p>
          A vendégek adatai (pl. név, e-mail cím, telefonszám) a Motibro
          rendszerben kerülnek rögzítésre, amely adatfeldolgozóként jár el.
        </p>
        <p>
          Az adatkezelés célja: időpontfoglalás kezelése, kapcsolattartás,
          szolgáltatás nyújtása, jogi kötelezettségek teljesítése.
        </p>
        <p>
          Az adatkezelés jogalapja: az érintett hozzájárulása (GDPR 6. cikk (1)
          a)), szerződés teljesítése (b)), valamint jogi kötelezettség (c)).
        </p>

        <h2 className={styles.subTitle}>4. Kamerás megfigyelés</h2>
        <p>A kamerás megfigyelés célja:</p>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>személyek és vagyon védelme</li>
          <li>jogellenes cselekmények megelőzése és felderítése</li>
          <li>jogsértések bizonyítása (pl. lopás, rongálás)</li>
          <li>esetleges jogviták megalapozása vagy elhárítása</li>
        </ul>
        <p>
          <strong>A megfigyelt terület:</strong>
        </p>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>stúdió bejárata</li>
          <li>recepciós/pihenőterület</li>
          <li>közlekedőfolyosó</li>
        </ul>
        <p>
          A rendszer kizárólag képet rögzít, hangot nem. A felvételek legfeljebb
          3 munkanapig kerülnek megőrzésre, kivéve ha jogvita vagy hatósági
          eljárás indokolja a hosszabb tárolást.
        </p>
        <p>
          Hozzáférés a felvételekhez kizárólag az adatkezelő vagy az általa
          kijelölt, titoktartásra kötelezett személyek számára biztosított. A
          hozzáférés naplózott és ellenőrizhető.
        </p>

        <h3 className={styles.subTitle}>
          4.1. Az adatkezelés alapjául szolgáló jogszabályok
        </h3>
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

        <h3 className={styles.subTitle}>4.2. A kezelt adatok köre</h3>
        <ul className={styles.list}>
          <li>
            A kamerarendszer valós idejű képfelvételt, illetve annak rögzítését
            végzi.
          </li>
          <li>A hangrögzítés nem történik.</li>
        </ul>

        <h3 className={styles.subTitle}>4.3. A felvételek tárolásának ideje</h3>
        <p>
          A felvételek maximum 3 munkanapig kerülnek tárolásra, kivéve ha azok
          felhasználása egy eljárásban indokolt (pl. rendőrségi megkeresés,
          jogvita).
        </p>

        <h3 className={styles.subTitle}>4.4. Hozzáférés az adatokhoz</h3>
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

        <h2 className={styles.subTitle}>5. Adatok továbbítása</h2>
        <ul className={styles.list}>
          <li>
            Személyes adatok kizárólag jogszabály alapján vagy az érintett
            hozzájárulása esetén kerülnek továbbításra.
          </li>
          <li>
            Kamerafelvétel kizárólag hatósági megkeresés vagy jogvita esetén
            kerülhet kiadásra.
          </li>
        </ul>

        <h2 className={styles.subTitle}>6. Az érintettek jogai</h2>
        <ul className={`${styles.list} ${styles.listWithBullets}`}>
          <li>tájékoztatást az adatkezelésről</li>
          <li>hozzáférést saját adataihoz</li>
          <li>azok helyesbítését, törlését, kezelésének korlátozását</li>
          <li>tiltakozhat az adatkezelés ellen</li>
          <li>
            panaszt tehet a Nemzeti Adatvédelmi és Információszabadság
            Hatóságnál (NAIH)
          </li>
        </ul>
        <p>
          <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
          <br />
          <strong>Web:</strong>{" "}
          <a
            href="https://www.naih.hu"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.naih.hu
          </a>
          <br />
          <strong>E-mail:</strong>{" "}
          <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>
        </p>

        <h2 className={styles.subTitle}>
          7. Automatizált döntéshozatal, profilalkotás
        </h2>
        <p>
          Az adatkezelő nem végez automatizált döntéshozatalt vagy
          profilalkotást.
        </p>

        <h2 className={styles.subTitle}>
          8. Hozzáférés az adatkezelési tájékoztatóhoz
        </h2>
        <p>
          Ez a tájékoztató a stúdióban a recepción megtalálható, valamint a
          honlapon elektronikusan is elérhető.
        </p>
      </div>
    </main>
  );
};

export default AdatkezelesiPage;

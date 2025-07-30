import Image from "next/image";
import logo from "../assets/moon_studio_website_logo_brown.svg";
import styles from "../styles/biztonsagi-adatlapok.module.css";
import Link from "next/link";
import { pdfFiles } from "../data";

const BiztonsagiAdatlapokPage = () => {
  return (
    <main className={styles.main}>
      <Link className={styles.logo} href="/">
        <Image src={logo} alt="Moon Lab Pilates Logo" width={100} />
      </Link>
      <div className={styles.mainSection}>
        <h1 className={styles.title}>Biztonsági adatlapok</h1>
        <ul className={styles.list}>
          {pdfFiles.map(({ file, label }) => (
            <li key={file}>
              <a href={`/sds/${file}`} download>
                {label} PDF letöltése
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default BiztonsagiAdatlapokPage;

import Image from "next/image";
import styles from "../styles/InformationCard.module.css";
import { InformationCardProps } from "../types";

export const InformationCard = ({
  name,
  description,
  img,
  isLongCard = false,
}: InformationCardProps) => {
  return (
    <div className={styles.informationCard}>
      <Image className={styles.informationCardImage} src={img} alt={name} />
      <div className={styles.informationCardContent}>
        <h1 className={styles.informationCardName}>{name}</h1>
        <p
          className={`${styles.informationCardDescription}${isLongCard ? ` ${styles.informationCardDescriptionExpanded}` : ""}`}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
};

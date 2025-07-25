import Image from "next/image";
import styles from "../styles/InformationCard.module.css";
import { InformationCardProps } from "../types";

export const InformationCard = ({
  name,
  shortDescription,
  fullDescription,
  showFullDescription,
  img,
}: InformationCardProps) => {
  return (
    <div
      className={`${styles.informationCard}${showFullDescription ? ` ${styles.informationCardExpanded}` : ""}`}
    >
      <Image className={styles.informationCardImage} src={img} alt={name} />
      <div className={styles.informationCardContent}>
        <h1 className={styles.informationCardName}>{name}</h1>
        <p
          className={styles.informationCardDescription}
          dangerouslySetInnerHTML={{
            __html:
              showFullDescription && fullDescription != null
                ? fullDescription
                : shortDescription,
          }}
        />
      </div>
    </div>
  );
};

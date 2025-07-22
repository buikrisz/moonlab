import React from "react";
import Image from "next/image";
import styles from "../styles/CoachCard.module.css";
import { CoachCardProps } from "../types";

export const CoachCard = ({ name, description, img }: CoachCardProps) => {
  return (
    <div className={styles.coachCard}>
      <Image className={styles.coachCardImage} src={img} alt={name} />
      <div className={styles.coachCardContent}>
        <h1 className={styles.coachCardName}>{name}</h1>
        <p className={styles.coachCardDescription}>{description}</p>
      </div>
    </div>
  );
};

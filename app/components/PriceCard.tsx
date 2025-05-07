import React from "react";
import Image from "next/image";
import styles from "../styles/PriceCard.module.css";
import { PriceCardProps } from "../types";

export const PriceCard = ({
  name,
  description,
  price,
  img,
}: PriceCardProps) => {
  return (
    <div className={styles.priceCard}>
      <Image className={styles.priceCardImage} src={img} alt={name} />
      <div className={styles.priceCardContent}>
        <h1 className={styles.priceCardName}>{name}</h1>
        <p className={styles.priceCardDescription}>{description}</p>
        <h3 className={styles.priceCardPrice}>{price}</h3>
      </div>
    </div>
  );
};

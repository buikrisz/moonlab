import React from "react";
import styles from "../styles/PriceCard.module.css";
import { PriceCardProps } from "../types";

export const PriceCard = ({ name, description, price }: PriceCardProps) => {
  return (
    <div className={styles.priceCard}>
      <div className={styles.priceCardContent}>
        <h1 className={styles.priceCardName}>{name}</h1>
        <h3 className={styles.priceCardPrice}>{price}</h3>
        <p className={styles.priceCardDescription}>{description}</p>
      </div>
    </div>
  );
};

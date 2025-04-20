import { StaticImageData } from "next/image";
import React from "react";
import styles from "../styles/PriceCard.module.css";
import Image from "next/image";

type PriceCardProps = {
  name: string;
  description: string;
  price: string;
  img: StaticImageData;
};

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

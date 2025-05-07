import { StaticImageData } from "next/image";

export type PriceCardProps = {
  name: string;
  description: string;
  price: string;
  img: StaticImageData;
};

export type FaqCardProps = {
  question: string;
  answer: string;
};

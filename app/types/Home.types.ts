import { StaticImageData } from "next/image";

export type PriceCardProps = {
  name: string;
  description: string;
  price: string;
};

export type InformationCardProps = {
  name: string;
  shortDescription: string;
  img: StaticImageData;
  fullDescription?: string;
  showFullDescription?: boolean;
};

export type FaqCardProps = {
  question: string;
  answer: string;
  link?: string;
};

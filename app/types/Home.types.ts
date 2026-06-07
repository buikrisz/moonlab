import { StaticImageData } from 'next/image';

export enum PriceCardIcons {
  trial = 'trial',
  single = 'single',
  five = 'five',
  ten = 'ten',
  private = 'private',
}

export type PriceCardProps = {
  name: string;
  description: string;
  price: string;
  icon: PriceCardIcons;
};

export type InformationCardProps = {
  name: string;
  description: string;
  description_long?: string;
  img: StaticImageData;
  isLongCard?: boolean;
};

export type FaqCardProps = {
  question: string;
  answer: string;
  link?: string;
};

export type PdfLinkProps = {
  file: string;
  label: string;
};

import priceImg from "../assets/price.jpg";
import { PriceCardProps, InformationCardProps, FaqCardProps } from "../types";

export const prices: PriceCardProps[] = [
  {
    name: "Próba alkalom",
    description: "A próba jegyet csak új vendégek vehetik igénybe!",
    price: "4 000 ,-",
  },
  {
    name: "Alkalmi jegy",
    description: "Érvényesség: az adott órára",
    price: "7 000 ,-",
  },
  {
    name: "5 alkalmas bérlet",
    description: "Érvényesség: vásárlástól számított 6 hét",
    price: "32 000 ,-",
  },
  {
    name: "10 alkalmas bérlet",
    description: "Érvényesség: vásárlástól számított 12 hét",
    price: "60 000 ,-",
  },
  {
    name: "Magán óra",
    description: "Oktatóval előre egyeztetett időpontban",
    price: "15 000 ,-",
  },
];

export const coaches: InformationCardProps[] = [
  {
    name: "Kriszti",
    description:
      "A sport mindig is az életem része volt, de igazán akkor találtam rá arra, amit igazán szeretek, amikor megismerkedtem a reformer pilates edzéssel. Ez a mozgásforma nemcsak hajlékonnyá és erőssé tesz, hanem fejben is teljesen kikapcsol – igazi testi-lelki feltöltődés.",
    img: priceImg,
  },
  {
    name: "Fanni",
    description: "???",
    img: priceImg,
  },
  {
    name: "H. Niki",
    description:
      "Gyerekkorom óta a mozgás és a sport szerves része életemnek. Az irodai munka és a gerincsérv kihívásai közepette a pilates nyújtott számomra hatékony megoldást a fájdalom enyhítésére és a testtartás javítására.",
    img: priceImg,
  },
  {
    name: "Tété",
    description:
      "10 alkalmas bérletünk ideális választás azok számára, akik hosszabb távon szeretnék elkötelezni magukat a reformer pilates mellett, és maximálisan kihasználni a stúdió nyújtotta lehetőségeket",
    img: priceImg,
  },
  {
    name: "Vanessza",
    description:
      "10 alkalmas bérletünk ideális választás azok számára, akik hosszabb távon szeretnék elkötelezni magukat a reformer pilates mellett, és maximálisan kihasználni a stúdió nyújtotta lehetőségeket",
    img: priceImg,
  },
  {
    name: "Z. Niki",
    description:
      "10 alkalmas bérletünk ideális választás azok számára, akik hosszabb távon szeretnék elkötelezni magukat a reformer pilates mellett, és maximálisan kihasználni a stúdió nyújtotta lehetőségeket",
    img: priceImg,
  },
];

export const classTypes: InformationCardProps[] = [
  {
    name: "All Levels",
    description:
      "Minden szint számára ajánlott óra, ahol kezdők és haladók együtt, saját tempójukban fejlődhetnek a reformer pilates alapjaitól a haladóbb gyakorlatokig.",
    img: priceImg,
  },
  {
    name: "Cardio | Jumpboard",
    description:
      "Dinamikus, kardió jellegű óra jumpboard használatával, amely intenzíven fejleszti az állóképességet és zsírégetést, miközben kíméli az ízületeket.",
    img: priceImg,
  },
  {
    name: "Power",
    description:
      "Erőnléti reformer pilates óra, amely a teljes test izomzatát intenzíven megdolgoztatja, fókuszban a törzs, karok és lábak erősítésével.",
    img: priceImg,
  },
];

export const faq: FaqCardProps[] = [
  {
    question: "Hogyan tudok bejelentkezni egy órára?",
    answer:
      "Bejelentkezni a Motibro online foglalási rendszerén keresztül tudsz, egy gyors regisztráció után. LINK",
  },
  {
    question: "Hogyan tudok jegyet vagy bérletet vásárolni?",
    answer:
      "A Motibro fiókodban egyszerűen vásárolhatsz jegyet vagy bérletet. Személyesen is fizethetsz a stúdióban, készpénzzel vagy bankkártyával.",
  },
  {
    question: "Meddig tudom lemondani az órát, amire bejelentkeztem?",
    answer:
      "Az órát legalább 24 órával a kezdés előtt tudod lemondani a Motibro rendszerében díjmentesen. Késői - 24 órán belüli - lemondás esetén az óra díját felszámoljuk, bérletes vendégek esetén pedig levonásra kerül az alkalom. Kérjük, hogy mindenképp jelezd a lemondást, még ha későn is, így esélyt adsz a válólistán szereplő vendégeknek a részvételre.",
  },
  {
    question: "Mit hozzak magammal az órára?",
    answer:
      "Csak kényelmes, testhezálló edzőruhára van szükség, hogy az oktató jól lássa a tested tartását gyakorlás közben. Emellett javasoljuk a csúszásmentes zokni használatát a biztonság és higiénia érdekében. + törölköző / víz",
  },
  {
    question: "Mennyi ideig tart egy óra?",
    answer: "A csoportos Reformer Pilates órák 50 perc hosszúak.",
  },
  {
    question: "Teljesen kezdő vagyok, jöhetek órára?",
    answer:
      "Igen! Kezdő óráinkat úgy alakítottuk ki, hogy biztonságos és érthető legyen mindenki számára. Ha bizonytalan vagy, egyéni bevezető órát is tudsz foglalni.",
  },
  {
    question: "Milyen típusú órák vannak?",
    answer:
      "Reformer pilates (kezdő/haladó); Funkcionális Reformer; HIIT Strength; Stretching ",
  },
  {
    question: "Studiót, hogyan tudom megközelíteni?",
    answer: "???",
  },
  {
    question: "Van parkolási lehetőség?",
    answer: "Igen, a környéken ingyenes az utcai parkolás elérhető.",
  },
];

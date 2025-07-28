import allLevelsImg from "../assets/class-types/all_levels_class.png";
import cardioImg from "../assets/class-types/hiit_class.png";
import powerImg from "../assets/class-types/power_class.png";
import fanniImg from "../assets/coaches/fanni.png";
import vanesszaImg from "../assets/coaches/vanessza.png";
import teteImg from "../assets/coaches/tete.png";
import zNikiImg from "../assets/coaches/z_niki.png";
import hNikiImg from "../assets/coaches/h_niki.png";
import krisztiImg from "../assets/coaches/kriszti.png";
import { PriceCardProps, InformationCardProps, FaqCardProps } from "../types";

export const motibroLink = "https://moon-lab-pilates.motibro.com/";

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
      '" A sport mindig is az életem része volt, de igazán akkor találtam rá arra, amit nagyon szeretek, amikor megismerkedtem a reformer pilates edzéssel. Ez a mozgásforma nemcsak hajlékonnyá és erőssé tesz, hanem fejben is teljesen kikapcsol – igazi testi-lelki feltöltődés. "',
    img: krisztiImg,
  },
  {
    name: "Fanni",
    description:
      '" A sport már 6 éves korom óta meghatározó része az életemnek, ugyanis 15 éven keresztül versenyszerűen asztaliteniszeztem, és 8 évig voltam a válogatott tagja. Azóta számos sportágban kipróbáltam magam, de a pilates már az első alkalommal magával ragadott, és tudtam, hogy mélyebben szeretnék elmerülni ebben a mozgásformában. "',
    img: fanniImg,
  },
  {
    name: "H. Niki",
    description:
      '" Gyerekkorom óta a mozgás és a sport szerves része életemnek. Az irodai munka és a gerincsérv kihívásai közepette a pilates nyújtott számomra hatékony megoldást a fájdalom enyhítésére és a testtartás javítására. Ezen személyes tapasztalatok inspiráltak arra, hogy pilates oktatóként segítsek másoknak is megtapasztalni a mozgás gyógyító erejét, különös figyelmet fordítva a gerinc egészségére és a helyes testtartásra. "',
    img: hNikiImg,
  },
  {
    name: "Tété",
    description:
      '" Hatéves korom óta meghatározó része az életemnek a mozgás. Miskolcon színházi táncos szakon végeztem, majd Budapesten a Magyar Táncművészeti Egyetem moderntánc szakán diplomáztam. Hálás vagyok, hogy táncművészként több európai országban élhettem, turnézhattam, és nemzetközi művészekkel dolgozhattam együtt – ezek az élmények mélyen formálták a szemléletemet. "',
    img: teteImg,
  },
  {
    name: "Vanessza",
    description: "???",
    img: vanesszaImg,
  },
  {
    name: "Z. Niki",
    description:
      '" A sport és az egészséges életmód mindig is szerves részét képezte az életemnek, versenyszerűen teniszeztem, majd a futás és a konditermi edzés vette át a helyét. A pilatesre akkor találtam rá, amikor egy olyan mozgásformát kerestem, amely segít a munkámból adódó rengeteg gép előtt ülés mellett megőrizni a helyes tartásomat, a testem rugalmasságát és izmaim erejét. "',
    img: zNikiImg,
  },
];

export const classTypes: InformationCardProps[] = [
  {
    name: "All Levels",
    description:
      "Minden szint számára ajánlott óra, ahol kezdők és haladók együtt, saját tempójukban fejlődhetnek a reformer pilates alapjaitól a haladóbb gyakorlatokig.",
    img: allLevelsImg,
  },
  {
    name: "Cardio | Jumpboard",
    description:
      "Dinamikus, kardió jellegű óra jumpboard használatával, amely intenzíven fejleszti az állóképességet és zsírégetést, miközben kíméli az ízületeket.",
    img: cardioImg,
  },
  {
    name: "Power",
    description:
      "Erőnléti reformer pilates óra, amely a teljes test izomzatát intenzíven megdolgoztatja, fókuszban a törzs, karok és lábak erősítésével.",
    img: powerImg,
  },
];

export const faq: FaqCardProps[] = [
  {
    question: "Hogyan tudok bejelentkezni egy órára?",
    answer:
      "Bejelentkezni a Motibro online foglalási rendszerén keresztül tudsz, egy gyors regisztráció után.",
    link: motibroLink,
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

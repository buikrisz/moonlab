import allLevelsImg from '../assets/class-types/all_levels.jpg';
import powerImg from '../assets/class-types/power.jpg';
import stretchingImg from '../assets/class-types/stretching.jpg';
import prenatImg from '../assets/class-types/prenat.jpg';
import cardioImg from '../assets/class-types/cardio.jpg';
import fanniImg from '../assets/coaches/fanni.jpg';
import vaniImg from '../assets/coaches/vani.jpg';
import teteImg from '../assets/coaches/tete.jpg';
import zNikiImg from '../assets/coaches/z_niki.jpg';
import hNikiImg from '../assets/coaches/h_niki.jpg';
import mesiImg from '../assets/coaches/mesi.jpg';
import {
  PriceCardProps,
  InformationCardProps,
  FaqCardProps,
  PdfLinkProps,
  PriceCardIcons,
} from '../types';
import nutriqaImg from '../assets/nutriqa.jpeg';
import creemImg from '../assets/creem.jpg';

export const motibroLink = 'https://moon-lab-pilates.motibro.com/';
export const googleMapsLink =
  'https://www.google.com/maps/search/?api=1&query=1152%20Budapest%2C%20%C3%96regfalusi%20utca%2018';

export const prices: PriceCardProps[] = [
  {
    name: 'Próba alkalom',
    description: 'Olyan vendégeknek, akik először járnak nálunk',
    price: '4 000 ,-',
    icon: PriceCardIcons.trial,
  },
  {
    name: 'Alkalmi jegy',
    description: 'Érvényesség: az adott órára',
    price: '7 000 ,-',
    icon: PriceCardIcons.single,
  },
  {
    name: '5 alkalmas bérlet',
    description: 'Érvényesség: vásárlástól számított 6 hét',
    price: '32 000 ,-',
    icon: PriceCardIcons.five,
  },
  {
    name: '10 alkalmas bérlet',
    description: 'Érvényesség: vásárlástól számított 12 hét',
    price: '60 000 ,-',
    icon: PriceCardIcons.ten,
  },
  {
    name: 'Magán óra',
    description: 'Oktatóval előre egyeztetett időpontban',
    price: '15 000 ,-',
    icon: PriceCardIcons.private,
  },
];

export const coaches: InformationCardProps[] = [
  {
    name: 'Fanni',
    description: 'Sportolói szemlélettel a tudatos, könnyed mozgás felé',
    description_long:
      '" A sport már 6 éves korom óta meghatározó része az életemnek, ugyanis 15 éven keresztül versenyszerűen asztaliteniszeztem, és 8 évig voltam a válogatott tagja. Azóta számos sportágban kipróbáltam magam, de a pilates már az első alkalommal magával ragadott, és tudtam, hogy mélyebben szeretnék elmerülni ebben a mozgásformában. \n\n A pilates segített helyreállítani az egyoldalú sportból adódó testi aszimmetriáimat, valamint enyhítette derék- és térdproblémáimat is, amelyekkel éveken keresztül küzdöttem. Ez a mozgásforma minden izmot átmozgat, és segít tudatos kapcsolatot kialakítani a test és a lélek között. \n\n Célom, hogy óráimon keresztül átadjam a pilates jótékony hatásait, és hogy mindenki megtalálja benne azt, amit keres, legyen az erősítés, rehabilitáció, koordináció fejlesztése vagy testtartás javítása. Szeretettel várlak, hogy együtt fedezzük fel a pilates világát! "',
    img: fanniImg,
  },
  {
    name: 'H. Niki',
    description: 'Gerincfókuszú, biztonságos órák a tudatos fejlődésért',
    description_long:
      '" Gyerekkorom óta a mozgás és a sport szerves része életemnek. Az irodai munka és a gerincsérv kihívásai közepette a pilates nyújtott számomra hatékony megoldást a fájdalom enyhítésére és a testtartás javítására. \n\n Ezen személyes tapasztalatok inspiráltak arra, hogy pilates oktatóként segítsek másoknak is megtapasztalni a mozgás gyógyító erejét, különös figyelmet fordítva a gerinc egészségére és a helyes testtartásra. Hiszem, hogy a pilates nemcsak a testet, hanem a lelket is erősíti, és bármely életkorban vagy fizikai állapotban elérhető eredményeket kínál. \n\n Célom, hogy óráimon egy támogató, motiváló környezetben mindenki megtalálja a mozgás örömét és az egyensúlyát, miközben a saját határait tiszteletben tartva fejlődik. "',
    img: hNikiImg,
  },
  {
    name: 'Mesi',
    description: 'Flow, játékosság és tudatos erősödés minden órán',
    description_long:
      '" Oktatóként az a célom, hogy megmutassam: a mozgás nem kényszer, hanem lehetőség. Szeretem, ha egy óra nemcsak fizikailag formál, hanem mentálisan is feltölt – legyen benne flow, játékosság és persze izzadás is. \n\n Az óráimon megtapasztalhatod, hogy a Pilates túlmutat a nyújtáson és a légzésen: megtanít a testedre figyelni, erősebbé és tudatosabbá válni, miközben könnyedséget hoz a mindennapokba. \n\n Ha szeretnél közelebb kerülni önmagadhoz a mozgáson keresztül, várlak szeretettel az óráimon. "',
    img: mesiImg,
  },
  {
    name: 'Tété',
    description: 'Energikus, motiváló órák, ahol mindenki személyes figyelmet kap',
    description_long:
      '" Hatéves korom óta meghatározó része az életemnek a mozgás. Miskolcon színházi táncos szakon végeztem, majd Budapesten a Magyar Táncművészeti Egyetem moderntánc szakán diplomáztam. Hálás vagyok, hogy táncművészként több európai országban élhettem, turnézhattam, és nemzetközi művészekkel dolgozhattam együtt – ezek az élmények mélyen formálták a szemléletemet. \n\n A tanítás mindig is fontos szerepet töltött be az életemben – immár közel 15 éve foglalkozom gyerekekkel és felnőttekkel. Ma már nem vagyok aktív táncos, a fókuszom teljesen a tanításon és a mozgás örömének átadásán van. \n\n A mozgás iránti szenvedélyem a jóga, majd a pilates felé vezetett. Azóta is folyamatosan képzem magam – részt veszek a Michael King nemzetközi pilatesképzésein és STOTT workshopokon is. \n\n Hiszek benne, hogy a fejlődés kulcsa a folyamatos tanulás. Az óráimon nincs elvárás – csak figyelem, jelenlét, és a lehetőség, hogy mindenki a saját tempójában fejlődhessen. Célom, hogy az óráimon egy elvárásmentes, támogató térben kapcsolódhass önmagadhoz – testben és lélekben. "',
    img: teteImg,
  },
  {
    name: 'Vani',
    description: 'Lendületes, feltöltő órák a testtartás és rugalmasság támogatására',
    description_long:
      '" A mozgás mindig is meghatározó része volt az életemnek. 12 év versenyszerű tánc után régóta kerestem azt a mozgásformát, ami igazán feltölt, valamint visszahozza azt a lelkesedést, amit gyerekként a táncórákon éreztem. \n\n Az irodai munka hatásait én is jól ismerem, ezért különösen fontosnak tartom a rendszeres mozgás beépítését a mindennapokba. A tudatosan felépített mozgás fejleszti a testtartást, erősíti az izomzatot, és hatékonyan csökkenti a terhelésből adódó fájdalmakat. \n\n Az óráimon arra törekszem, hogy vendégeim testben és lélekben is feltöltődjenek, magabiztosabbá váljanak, és megérezzék azt az inspiráló erőt, amit a reformer pilates képvisel. "',
    img: vaniImg,
  },
  {
    name: 'Z. Niki',
    description: 'Precíz, erősítő órák pozitív és biztonságos környezetben',
    description_long:
      '" A sport és az egészséges életmód mindig is szerves részét képezte az életemnek, versenyszerűen teniszeztem, majd a futás és a konditermi edzés vette át a helyét. \n\n A pilatesre akkor találtam rá, amikor egy olyan mozgásformát kerestem, amely segít a munkámból adódó rengeteg gép előtt ülés mellett megőrizni a helyes tartásomat, a testem rugalmasságát és izmaim erejét, azóta pedig elválaszthatatlanok vagyunk. \n\n Óráimon a gyakorlatok pontos kivitelezése és egy biztonságos, pozitív környezet megteremtése mellett arra törekszem, hogy változatos, kihívásokkal teli edzéseket tartsak, ahol vendégként óráról órára fejlődhetsz, és maximálisan kihasználhatod a testedben rejlő potenciált. "',
    img: zNikiImg,
  },
];

export const classTypes = [
  {
    name: 'All Levels',
    type: 'all-levels',
    description:
      'Minden szint számára ajánlott óra, ahol kezdők és haladók együtt, saját tempójukban fejlődhetnek a reformer pilates alapjaitól a haladóbb gyakorlatokig.',
    tags: ['Teljes test', 'Erő', 'Kontroll'],
    img: allLevelsImg,
  },
  {
    name: 'Cardio | Jumpboard',
    type: 'cardio',
    description:
      'Dinamikus, kardió jellegű óra jumpboard használatával, amely intenzíven fejleszti az állóképességet és zsírégetést, miközben kíméli az ízületeket.',
    tags: ['Kardió', 'Állóképesség', 'Zsírégetés'],
    img: cardioImg,
  },
  {
    name: 'Power',
    type: 'power',
    description:
      'Erőnléti reformer pilates óra, amely a teljes test izomzatát intenzíven megdolgoztatja, fókuszban a törzs, karok és lábak erősítésével.',
    tags: ['Erő', 'Intenzitás', 'Teljesítmény'],
    img: powerImg,
  },
  {
    name: 'Kezdő & Kismama',
    type: 'beginner',
    description:
      'Kíméletes, biztonságos óra a helyes alapokért, a tudatos mozgásért és a testi-lelki egyensúly támogatásáért.',
    tags: ['Alapok', 'Biztonság', 'Tudatosság'],
    img: prenatImg,
  },
  {
    name: 'Stretching',
    type: 'stretching',
    description:
      'Lassú, nyújtó és feltöltő óra a test és az elme ellazításáért, valamint a rugalmasság növeléséért.',
    tags: ['Nyújtás', 'Mobilitás', 'Relaxáció'],
    img: stretchingImg,
  },
];

export const faq: FaqCardProps[] = [
  {
    question: 'Hogyan tudok bejelentkezni egy órára?',
    answer:
      'Bejelentkezni a Motibro online foglalási rendszerén keresztül tudsz, egy gyors regisztráció után.',
    link: motibroLink,
    linkLabel: 'Foglalási rendszer megnyitása',
  },
  {
    question: 'Hogyan tudok jegyet vagy bérletet vásárolni?',
    answer:
      'Jegyet vagy bérletet személyesen a stúdióban tudsz vásárolni óra kezdés előtt vagy óra után. Fizetésre készpénzzel, bankkártyával vagy OTP SZÉP kártyával van lehetőség.',
  },
  {
    question: 'Meddig tudom lemondani az órát, amire bejelentkeztem?',
    answer:
      'Az órát legfeljebb 24 órával a kezdés előttig tudod lemondani a Motibro rendszerében díjmentesen. Késői - 24 órán belüli - lemondás esetén az óra díját felszámoljuk, bérletes vendégek esetén pedig levonásra kerül az alkalom. Kérjük, hogy mindenképp jelezd a lemondást, még ha későn is, így esélyt adsz a válólistán szereplő vendégeknek a részvételre.',
  },
  {
    question: 'Mit hozzak magammal az órára?',
    answer:
      'Csak kényelmes, testhezálló edzőruhára lesz szükséged, hogy az oktató jól lássa a testtartásodat és a gyakorlatok kivitelezését. A biztonság és higiénia érdekében csúszásmentes zokni használata javasolt. Ha nincs nálad, a stúdióban 5 990 Ft-ért tudsz vásárolni. Törölközőt és vizet érdemes magaddal hoznod.',
  },
  {
    question: 'Mennyi ideig tart egy óra?',
    answer:
      'A csoportos Reformer Pilates órák 50 perc hosszúak, az órák között 10 perc szünet van, hogy a következő vendégeknek legyen ideje felkészülni. A magánórák szintént 50 perc hosszúak, de igény szerint hosszabb órákat is lehet szervezni.',
  },
  {
    question: 'Teljesen kezdő vagyok, jöhetek órára?',
    answer:
      'Igen! Kezdő & Kismama, illetve All levels óráinkat úgy alakítottuk ki, hogy biztonságos és érthető legyen mindenki számára. Ha bizonytalan vagy, egyéni bevezető órát is tudsz foglalni.',
  },
  {
    question: 'Milyen típusú órák vannak?',
    answer:
      'Többféle reformer pilates órával várunk, hogy megtaláld a számodra legmegfelelőbb gyakorlást. Az All Levels óra minden szintnek ajánlott, a Cardio | Jumpboard dinamikusabb, állóképesség-fejlesztő óra, a Power intenzívebb erősítő gyakorlás, a Kezdő & Kismama óra kíméletesebb és biztonságosabb tempójú, míg a Stretching a nyújtásra, mobilitásra és feltöltődésre fókuszál.',
  },
  {
    question: 'Studiót, hogyan tudom megközelíteni?',
    answer:
      'A stúdiót a 1152 Budapest, Öregfalusi utca 18. szám alatt találod. Tömegközlekedéssel a környéken több megálló is elérhető: a Széchenyi tér kb. 2 perc, az Epres sor kb. 4 perc, a Fő út kb. 6 perc sétára van. A környéket több buszjárat is érinti, többek között az 5-ös, 104A, 204-es, illetve az Epres sor megálló felől a 231, 231B és 950A járatok is opciók lehetnek. Indulás előtt érdemes a pontos útvonalat BudapestGO-ban ellenőrizni.',
    link: googleMapsLink,
    linkLabel: 'Útvonaltervezés a Google Maps-en',
  },
  {
    question: 'Van parkolási lehetőség?',
    answer: 'Igen, a környéken ingyenes az utcai parkolás elérhető.',
  },
  {
    question: 'Van átöltözésre/zuhanyzásra lehetőség?',
    answer:
      'Igen, a stúdióban van lehetőség átöltözésre és zuhanyzásra is, így kényelmesen tudsz készülni az óra előtt és után.',
  },
];

export const pdfFiles: PdfLinkProps[] = [
  { file: 'biostop_csotany.pdf', label: 'Biostop csótány' },
  { file: 'cif_brilliance_pink.pdf', label: 'Cif Brilliance Pink' },
  { file: 'cif_cream_pink_surolokrém.pdf', label: 'Cif Cream Pink súrolókrém' },
  {
    file: 'domestos_zero_wc_vizkooldo_gel_pink.pdf',
    label: 'Domestos Zero WC vízkőoldó gél Pink',
  },
  {
    file: 'duck_toalett_kacsa_mango-verse.pdf',
    label: 'Duck Toalett Kacsa Mango-Verse',
  },
  { file: 'fito_levelfeny.pdf', label: 'Fito Levélfény' },
  {
    file: 'frosch_levendulas_higieniai_tisztito.pdf',
    label: 'Frosch Levendulás higiéniai tisztító',
  },
  { file: 'novadest_fresh_s.pdf', label: 'Novadest Fresh S' },
  {
    file: 'protect_forte_rovarirto_porozoszer.pdf',
    label: 'Protect Forte rovarirtó porozószer',
  },
  {
    file: 'raid_max_csotany_es_hangyairto_aeroszol.pdf',
    label: 'Raid Max csótány és hangyairtó aeroszol',
  },
];

export const reviews = [
  {
    name: 'Szandi',
    source: 'Google értékelés',
    date: '2026. 05.',
    rating: 5,
    text: 'All level és power órán is már többször részt vettem, mindegyik szuper élmény volt. Az oktatók rendkívül figyelmesek, segítőkészek és minden résztvevőre odafigyelnek, így kezdőként és haladóként is jól lehet fejlődni. A tulajdonosok rendívül vendégközpontúak és bármilyen kérdés vagy probléma esetén állnak rendelkezésre. A stúdió hangulata barátságos és motiváló, ezért mindig örömmel térek vissza. Csak ajánlani tudom!',
  },
  {
    name: 'Dorka',
    source: 'Google értékelés',
    date: '2026. 05.',
    rating: 5,
    text: 'Nagyon szeretek ide járni, mindig jó a hangulat. Az oktatók felkészültek, az órák pedig mindig változatosak, amit nagyon szeretek, mert izgalmas marad.🩷 Minden korosztály elfér itt ☺️',
  },
  {
    name: 'Reni',
    source: 'Google értékelés',
    date: '2026. 05.',
    rating: 5,
    text: 'Mindenkinek ajánlom a Moonlab Pilates Stúdiót egyszerűen gyönyörű és letisztult - már nagyon hiányzott a 15.kerületbe egy ilyen színvonalú stúdió 🤩🙏🏻 Nem is beszélve arról, hogy mennyire rugalmasak és kedvesek-segítőkészek. U.i.: Fanni is megérne egy külön véleményt 🤍🤍 2 napig izomlázam volt az edzéstől, de a nevetéstől is - nagyon köszönjük az órát🥰🙏🏻',
  },
  {
    name: 'Anita',
    source: 'Google értékelés',
    date: '2026. 05.',
    rating: 5,
    text: 'Nagyon kellemes, barátságos hangulatú pilates stúdió. Az oktatók kedvesek, figyelmesek és segítőkészek, mindig odafigyelnek a helyes kivitelezésre. Jó ide járni, mert az ember nemcsak mozog, hanem feltöltődik is. Csak ajánlani tudom!',
  },
  {
    name: 'Krisztina',
    source: 'Google értékelés',
    date: '2026. 04.',
    rating: 5,
    text: 'Kellemes környezet, a legjobb pilates reformer gépekkel. Kedves, segítőkész edzők, akik figyelemmel kísérik a fejlődésedet, ennek megfelelően állítják be a nehézségi fokozatot személyre szabottan. Változatos edzések, feladatok, minden alkalommal. Az edzők körültekintően járnak el sérülés, fájdalom esetén is.',
  },
  {
    name: 'Melinda',
    source: 'Google értékelés',
    date: '2026. 04.',
    rating: 5,
    text: 'Nagyon szeretek ide járni pilatesre. A stúdió hangulata kellemes és barátságos, az oktatók pedig rendkívül figyelmesek és szakmailag felkészültek. Az órák jól felépítettek, mindig feltöltődve és jobb közérzettel távozom. Csak ajánlani tudom mindenkinek!✨💯🌜',
  },
];

export const partners = [
  {
    name: 'Nutriqafoods',
    description:
      'Prémium, organikus és vegán termékek a mindennapi vitalitáshoz: superfood italporok, fehérjék, kapszulák és gondosan összeállított egészségtámogató csomagok.',
    offer: 'Superfood italporok, vegán kapszulák, fehérjék és egészségtámogató csomagok.',
    coupon: 'MOONLAB20',
    discount: '20% kedvezmény',
    link: 'https://nutriqafoods.hu?sca_ref=11343967.zIjJjDW8CD',
    img: nutriqaImg,
  },
  {
    name: 'Crèem',
    description:
      'Természetes levendulás szépségápolási termékek a nyugalomért és a mindennapi önmagadra figyelésért.',
    offer: 'Bio levendula virágvíz, illóolaj, dezodor krém és természetes testápoló termékek.',
    coupon: 'MOONLAB20',
    discount: '20% kedvezmény',
    link: 'https://creemorganics.com/termekek/',
    img: creemImg,
  },
];

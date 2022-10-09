import { v4 as uuidv4 } from "uuid";

const categories = [
  { id: uuidv4(), name: "New" },
  {
    id: uuidv4(),
    name: "Tourer",
    keywords:
      "Royal Enfield Meteor, Royal Enfield Classic 350, Honda Highness CB 350, Bajaj Avenger, Bajaj Dominar, Mahindra Mojo 300 ABS, Yezdi Roadster",
  },
  {
    id: uuidv4(),
    name: "ADV",
    keywords:
      "Royal Enfield Himalayan, BMW G310 GS, KTM 390 ADV, Hero XPulse 200, Yezdi Adventure, KTM 250 ADV, Honda CB500X",
  },
  {
    id: uuidv4(),
    name: "Retro",
    keywords:
      "Royal Enfield Interceptor 650, Royal Enfield Classic 350, Jawa Standard, Jawa 42, Triumph Street Twin, ",
  },
  {
    id: uuidv4(),
    name: "Cruiser",
    keywords: "Royal Enfield Meteor, Bajaj Avenger",
  },
  {
    id: uuidv4(),
    name: "Bobber",
    keywords: "Jawa Perak, Triumph Bobber, Indian Bobber",
  },
  {
    id: uuidv4(),
    name: "Cafe Racer",
    keywords: "Royal Enfield GT 650, Husqvarna Vitpilen 250, Triumph Thruxton",
  },
  {
    id: uuidv4(),
    name: "Scrambler",
    keywords:
      "Royal Enfield Scram  411, Yezdi Scrambler, Honda CB350 RS, Husqvarna Svartpilen 250, Ducati Scrambler, Triumph Street Scrambler",
  },
  {
    id: uuidv4(),
    name: "Naked Street",
    keywords:
      "KTM 390 Duke, BMW G310 R, Yamaha MT 15 V2, TVS Apache RTR, Bajaj Pulsar N 160, KTM 200 Duke, Yamaha FZS FI,Honda Hornet 2.0",
  },
  {
    id: uuidv4(),
    name: "Electric",
    keywords:
      "Ultraviolette F77, Ather 450, Revolt RV400, Hero Electric NYX HX, Hero Electric Optima HX, Ola Electric S1, Okinawa Praise, Bajaj Chetak Electric, Atumobile Atum 1.0, Kabira Mobility KM 3000, TVS iQube, Ampere Reo",
  },
  {
    id: uuidv4(),
    name: "Superbike",
    keywords:
      "Kawasaki Ninja H2, Suzuki Hayabusa, BMW S 1000 RR, Ducati Panigale V4, KTM Duke 790, Kawasaki Ninja ZX-10R",
  },
  {
    id: uuidv4(),
    name: "Sports Tourer",
    keywords: "Mahindra Mojo 300 ABS, Bajaj Dominar 400, Honda CBR 250R",
  },
];

const demoChannelUrl = "/channel/UCUMmfOox0ktKS_eizQGfATQ";
const demoProfilePicture =
  "https://yt3.ggpht.com/ytc/AMLnZu_er80Z42uGr_nx_Eh5NR-nLJ0UH_DWeadFW5dw=s176-c-k-c0x00ffffff-no-rj-mo";
const demoChannelTitle = "Strell";
const demoThumbnailUrl = "https://i.ytimg.com/vi/O5YiA8-0ITo/hqdefault.jpg";
const demoVideoUrl = "/video/O5YiA8-0ITo";
const demoVideoTitle =
  "Royal Enfield Classic 350 Touring Review | Astral Ride | Is it as good as the RE Himalayan in Ladakh?";

export {
  categories,
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
};

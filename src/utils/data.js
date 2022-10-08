import { v4 as uuidv4 } from "uuid";

const categories = [
  { id: uuidv4(), name: "New" },
  {
    id: uuidv4(),
    name: "Tourer",
    keywords: "Tourer",
  },
  {
    id: uuidv4(),
    name: "ADV",
    keywords: "ADV Adventure Tourer comfort offroading",
  },
  {
    id: uuidv4(),
    name: "Retro",
    keywords: "Retro classic bike nostalgia",
  },
  { id: uuidv4(), name: "Cruiser", keywords: "Cruiser long distance onroad" },
  {
    id: uuidv4(),
    name: "Bobber",
    keywords: "Bobber Jawa Perak Triumph Indian",
  },
  { id: uuidv4(), name: "Cafe Racer", keywords: "Cafe Racer" },
  { id: uuidv4(), name: "Scrambler", keywords: "Scrambler" },
  { id: uuidv4(), name: "Naked Street", keywords: "Naked Street" },
  { id: uuidv4(), name: "Electric", keywords: "Electric" },
  { id: uuidv4(), name: "Superbike", keywords: "Superbike" },
  { id: uuidv4(), name: "Sports Tourer", keywords: "Sports Tourer" },
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

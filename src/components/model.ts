export type Country = {
  id: number;
  name: string;
  capital: string;
  region: string;
  subregion: string;
  currency: string;
  img: string;
};

export const data: Country[] = [
  {
    id: 1,
    name: "hong kong",
    capital: "central",
    region: "asia",
    subregion: "south east asia",
    currency: "hkd",
    img: "hk",
  },
  {
    id: 2,

    name: "japan",
    capital: "tokyo",
    region: "asia",
    subregion: "south east asia",
    currency: "jp",
    img: "jp",
  },
  {
    id: 3,

    name: "america",
    capital: "washington",
    region: "america",
    subregion: "north america",
    currency: "usd",
    img: "us",
  },
];

export type Mode = "light" | "dark";
export type Theme = {
  mode: Mode;
};

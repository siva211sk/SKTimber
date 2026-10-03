export type Product = {
  slug: string;
  name: string;
  specs: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "palash",
    name: "Palash Wood (Balasha)",
    specs: ["#spec1"],
  },
  {
    slug: "teakwood",
    name: "Teakh Wood",
    specs: ["#spec1"],
  },
  {
    slug: "neem",
    name: "Neem Wood",
    specs: ["#spec1"],
  },
  {
    slug: "jamun",
    name: "Jamun Wood (Neredu)",
    specs: ["#spec1"],
  },
  {
    slug: "babuca",
    name: "Babuca Wood (Thumma)",
    specs: ["#spec1"],
  },
];

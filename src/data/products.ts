export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  applications: string[];
  specifications: { label: string; value: string }[];
  confirmed: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "teakwood",
    name: "Teakwood",
    eyebrow: "The enduring classic",
    summary:
      "A naturally distinctive hardwood, valued for its warm character and versatility across building and interiors.",
    description:
      "Teakwood brings a rich, recognisable grain and a warm natural finish to projects. Talk with our team about the timber selection that suits your application and design.",
    image: "/images/timber-detail.jpg",
    imageAlt: "Close-up detail of natural timber grain and warm wood tones",
    applications: ["Doors and frames", "Windows", "Furniture", "Interior detailing"],
    specifications: [
      { label: "Wood type", value: "Hardwood" },
      { label: "Finish", value: "Natural timber; final finish as specified" },
      { label: "Selection", value: "Discuss project requirements with our team" },
    ],
    confirmed: true,
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

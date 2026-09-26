export type Package = {
  id: number;
  destination: string;
  type: string;
  duration: string;
  price: string;
  image: string;
};

export const packages: Package[] = [
  {
    id: 1,
    destination: "Goa",
    type: "Beach getaway",
    duration: "4 Days / 3 Nights",
    price: "₹14,999",
    image: "/images/goa.jpg",
  },
  {
    id: 2,
    destination: "Manali",
    type: "Mountain escape",
    duration: "5 Days / 4 Nights",
    price: "₹18,999",
    image: "/images/manali.jpg",
  },
  {
    id: 3,
    destination: "Dubai",
    type: "Luxury city experience",
    duration: "5 Days / 4 Nights",
    price: "₹39,999",
    image: "/images/dubai.jpg",
  },
  {
    id: 4,
    destination: "Bali",
    type: "Tropical adventure",
    duration: "6 Days / 5 Nights",
    price: "₹42,999",
    image: "/images/bali.jpg",
  },
  {
    id: 5,
    destination: "Kashmir",
    type: "Scenic mountain retreat",
    duration: "5 Days / 4 Nights",
    price: "₹21,999",
    image: "/images/kashmir.jpg",
  },
  {
    id: 6,
    destination: "Thailand",
    type: "Island getaway",
    duration: "6 Days / 5 Nights",
    price: "₹35,999",
    image: "/images/thailand.jpg",
  },
];
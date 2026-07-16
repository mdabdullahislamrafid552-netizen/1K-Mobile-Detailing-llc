import { assets } from './assets';

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  inclusions: string[];
  note?: string;
  image: string;
  isPopular?: boolean;
  isComplete?: boolean;
}

export const services: ServicePackage[] = [
  {
    id: "standard-detail",
    name: "Standard Detail",
    price: "$140.00",
    duration: "1 hr 30 mins",
    inclusions: [
      "Hand Wash",
      "Vacuuming",
      "Interior Surfaces Wiped",
      "1 Month Paint Protection",
      "Tire Shine",
      "Windows Cleaned"
    ],
    note: "This package does not include stain removal.",
    image: assets.standard
  },
  {
    id: "deluxe-detail",
    name: "Deluxe Detail",
    price: "$220.00",
    duration: "3 hrs",
    inclusions: [
      "Everything in Standard+",
      "Interior Deep Cleaning",
      "Carpet & Leather Conditioning",
      "Spray on Wax Protection"
    ],
    note: "While this package provides deep cleaning, it does not guarantee complete stain removal. Perfect for those who want a thorough, polished look and feel for their vehicle.",
    image: assets.deluxe
  },
  {
    id: "premium-detail",
    name: "Premium Detail",
    price: "$350.00",
    duration: "5 hrs",
    inclusions: [
      "Everything in Deluxe+",
      "Full Shampoo (Seats & Carpets)",
      "1 Year Paint Protection",
      "Headliner Refurbished",
      "Interior Steam Cleaning"
    ],
    image: assets.premium,
    isComplete: true
  },
  {
    id: "exterior-only",
    name: "Exterior Only",
    price: "$60.00",
    duration: "1 hr",
    inclusions: [
      "Hand Wash",
      "Wheel & Tire Cleaning",
      "1 Month Paint Protection",
      "Glass Cleaning",
      "Tire Shine"
    ],
    image: assets.exterior
  },
  {
    id: "interior-only",
    name: "Interior Only",
    price: "$60 Sedans / $70 Trucks & SUVs",
    duration: "1 hr",
    inclusions: [
      "Vacuum",
      "All Interior Wiped",
      "Window Cleaning"
    ],
    image: assets.deluxe // Reusing deluxe image as per instructions
  }
];

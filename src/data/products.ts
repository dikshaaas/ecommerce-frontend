import { samsungs22, samsungm13, samsungm33, samsungm53 } from "../assets/images";

export type StoreProduct = {
  id: string;
  name: string;
  detailName: string;
  image: string;
  price: string;
  oldPrice: string;
  discount: string;
  saveText: string;
  variant: string;
  rating: string;
  ratingCount: number;
  reviewCount: number;
  ratingBreakdown: [number, number, number, number, number];
  reviews: { title: string; author: string; body: string; score: string }[];
  brand: string;
  category?: string;
  inStock?: boolean;
  seller: string;
  deliveryDate: string;
  offers: string[];
  specifications: [string, string][];
  highlights: string[];
};

export const products: StoreProduct[] = [
  {
    id: "samsung-galaxy-s22-ultra",
    name: "Galaxy S22 Ultra",
    detailName: "Samsung Galaxy S22 Ultra 5G",
    image: samsungs22,
    price: "₹32,999",
    oldPrice: "₹74,999",
    discount: "56% OFF",
    saveText: "Save ₹42,000",
    variant: "Phantom Black · 128 GB · S Pen included",
    rating: "4.5",
    ratingCount: 128,
    reviewCount: 36,
    ratingBreakdown: [83, 28, 10, 4, 3],
    reviews: [
      { title: "Excellent display and camera", author: "Priya S. · 6 Oct 2026", body: "The display is bright and crisp, and photos look great even in low light. The S Pen is a useful bonus for quick notes.", score: "5 ★" },
      { title: "A great all-round phone", author: "Rohit M. · 3 Oct 2026", body: "Fast performance, a premium feel and plenty of storage for my apps and photos. The battery comfortably gets me through a normal day.", score: "4 ★" },
    ],
    brand: "Samsung",
    seller: "MegaMart Retail",
    deliveryDate: "14 Oct 2026",
    offers: ["Bank offer: 10% off on HDFC Bank Credit Cards", "Exchange offer: Up to ₹8,000 off on exchange", "No-cost EMI: Starting ₹5,500/month on select cards"],
    specifications: [["Display", "6.8” Dynamic AMOLED 2X, 120Hz"], ["Rear camera", "108 MP + 12 MP + 10 MP + 10 MP"], ["Processor", "Snapdragon 8 Gen 1"], ["Battery", "5000 mAh · 45W fast charge"], ["RAM", "12 GB LPDDR5"], ["S Pen", "Built-in · 2.8ms latency"], ["Storage", "128 GB UFS 3.1"], ["OS", "Android 12 · One UI 4.1"]],
    highlights: ["Stunning 6.8” Dynamic AMOLED 2X display with Vision Booster", "Integrated S Pen with near-zero latency for notes and creativity", "Pro-grade 108 MP camera with 100x Space Zoom", "Long-lasting 5000 mAh battery with 45W super-fast charging"],
  },
  {
    id: "samsung-galaxy-m13",
    name: "Galaxy M13 (4GB | 64GB)",
    detailName: "Samsung Galaxy M13 4G",
    image: samsungm13,
    price: "₹10,499",
    oldPrice: "₹14,999",
    discount: "30% OFF",
    saveText: "Save ₹4,500",
    variant: "Midnight Blue · 64 GB · 4 GB RAM",
    rating: "4.2",
    ratingCount: 96,
    reviewCount: 24,
    ratingBreakdown: [54, 25, 11, 4, 2],
    reviews: [
      { title: "Great battery life", author: "Anita K. · 10 Oct 2026", body: "The battery lasts all day and the display is clear. A good phone for everyday use.", score: "5 ★" },
      { title: "Good value for the price", author: "Rahul P. · 8 Oct 2026", body: "Setup was simple, performance is smooth for my usual apps, and the camera takes nice photos outdoors.", score: "4 ★" },
    ],
    brand: "Samsung",
    seller: "MegaMart Retail",
    deliveryDate: "14 Oct 2026",
    offers: ["Bank offer: 5% off on select credit cards", "Exchange offer: Up to ₹2,000 off on exchange", "No-cost EMI available on select cards"],
    specifications: [["Display", "6.6” FHD+ LCD"], ["Rear camera", "50 MP + 5 MP + 2 MP"], ["Processor", "Exynos 850"], ["Battery", "6000 mAh · 15W charging"], ["RAM", "4 GB"], ["Front camera", "8 MP"], ["Storage", "64 GB · expandable"], ["OS", "Android · One UI Core"]],
    highlights: ["Immersive 6.6-inch FHD+ display", "Long-lasting 6000 mAh battery", "50 MP triple camera system", "Expandable storage for photos and apps"],
  },
  {
    id: "samsung-galaxy-m33",
    name: "Galaxy M33 (6GB | 128GB)",
    detailName: "Samsung Galaxy M33 5G",
    image: samsungm33,
    price: "₹16,999",
    oldPrice: "₹24,999",
    discount: "32% OFF",
    saveText: "Save ₹8,000",
    variant: "Deep Ocean Blue · 128 GB · 6 GB RAM",
    rating: "4.3",
    ratingCount: 112,
    reviewCount: 31,
    ratingBreakdown: [69, 27, 10, 4, 2],
    reviews: [
      { title: "Smooth and fast", author: "Meera R. · 9 Oct 2026", body: "The screen feels smooth and apps open quickly. The battery has been reliable through a full day.", score: "5 ★" },
      { title: "Solid phone with a great screen", author: "Dev S. · 5 Oct 2026", body: "Bright display, capable cameras, and plenty of room for photos. Happy with the purchase.", score: "4 ★" },
    ],
    brand: "Samsung",
    seller: "MegaMart Retail",
    deliveryDate: "14 Oct 2026",
    offers: ["Bank offer: 10% off on HDFC Bank Credit Cards", "Exchange offer: Up to ₹3,000 off on exchange", "No-cost EMI available on select cards"],
    specifications: [["Display", "6.6” FHD+ LCD, 120Hz"], ["Rear camera", "50 MP + 5 MP + 2 MP + 2 MP"], ["Processor", "Exynos 1280 5G"], ["Battery", "6000 mAh · 25W charging"], ["RAM", "6 GB"], ["Front camera", "8 MP"], ["Storage", "128 GB · expandable"], ["OS", "Android · One UI"]],
    highlights: ["Smooth 120Hz FHD+ display", "5G ready Exynos processor", "50 MP quad camera with OIS", "6000 mAh battery for all-day use"],
  },
  {
    id: "samsung-galaxy-m53",
    name: "Galaxy M53 (6GB | 128GB)",
    detailName: "Samsung Galaxy M53 5G",
    image: samsungm53,
    price: "₹31,999",
    oldPrice: "₹40,999",
    discount: "22% OFF",
    saveText: "Save ₹9,000",
    variant: "Mystique Green · 128 GB · 6 GB RAM",
    rating: "4.4",
    ratingCount: 88,
    reviewCount: 19,
    ratingBreakdown: [58, 19, 7, 3, 1],
    reviews: [
      { title: "Impressive camera", author: "Kiran D. · 11 Oct 2026", body: "The main camera captures sharp detail and the screen looks vibrant. Performance has been dependable.", score: "5 ★" },
      { title: "A capable everyday phone", author: "Sana A. · 7 Oct 2026", body: "Good screen, responsive apps, and a battery that lasts through my workday.", score: "4 ★" },
    ],
    brand: "Samsung",
    seller: "MegaMart Retail",
    deliveryDate: "14 Oct 2026",
    offers: ["Bank offer: 10% off on HDFC Bank Credit Cards", "Exchange offer: Up to ₹5,000 off on exchange", "No-cost EMI available on select cards"],
    specifications: [["Display", "6.7” Super AMOLED+, 120Hz"], ["Rear camera", "108 MP + 8 MP + 2 MP + 2 MP"], ["Processor", "MediaTek Dimensity 900"], ["Battery", "5000 mAh · 25W charging"], ["RAM", "6 GB"], ["Front camera", "32 MP"], ["Storage", "128 GB · expandable"], ["OS", "Android · One UI"]],
    highlights: ["Vivid 120Hz Super AMOLED+ display", "High-resolution 108 MP main camera", "Fast 5G performance", "Expandable 128 GB storage"],
  },
  {
    id: "samsung-galaxy-s22-ultra",
    name: "Galaxy S22 Ultra",
    detailName: "Samsung Galaxy S22 Ultra 5G",
    image: samsungs22,
    price: "₹32,999",
    oldPrice: "₹74,999",
    discount: "56% OFF",
    saveText: "Save ₹42,000",
    variant: "Phantom Black · 128 GB · S Pen included",
    rating: "4.5",
    ratingCount: 128,
    reviewCount: 36,
    ratingBreakdown: [83, 28, 10, 4, 3],
    reviews: [
      { title: "Excellent display and camera", author: "Priya S. · 6 Oct 2026", body: "The display is bright and crisp, and photos look great even in low light. The S Pen is a useful bonus for quick notes.", score: "5 ★" },
      { title: "A great all-round phone", author: "Rohit M. · 3 Oct 2026", body: "Fast performance, a premium feel and plenty of storage for my apps and photos. The battery comfortably gets me through a normal day.", score: "4 ★" },
    ],
    brand: "Samsung",
    seller: "MegaMart Retail",
    deliveryDate: "14 Oct 2026",
    offers: ["Bank offer: 10% off on HDFC Bank Credit Cards", "Exchange offer: Up to ₹8,000 off on exchange", "No-cost EMI: Starting ₹5,500/month on select cards"],
    specifications: [["Display", "6.8” Dynamic AMOLED 2X, 120Hz"], ["Rear camera", "108 MP + 12 MP + 10 MP + 10 MP"], ["Processor", "Snapdragon 8 Gen 1"], ["Battery", "5000 mAh · 45W fast charge"], ["RAM", "12 GB LPDDR5"], ["S Pen", "Built-in · 2.8ms latency"], ["Storage", "128 GB UFS 3.1"], ["OS", "Android 12 · One UI 4.1"]],
    highlights: ["Stunning 6.8” Dynamic AMOLED 2X display with Vision Booster", "Integrated S Pen with near-zero latency for notes and creativity", "Pro-grade 108 MP camera with 100x Space Zoom", "Long-lasting 5000 mAh battery with 45W super-fast charging"],
  },
];

export function getProduct(productId?: string) {
  return products.find((product) => product.id === productId) ?? products[0];
}

const products = [
  {
    id: 1,
    name: "Laptop Pro 15",
    price: 999,
    stock: 10,
    featured: true,
    description:
      "Powerful 15-inch laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for professionals and creators.",
    image:
      "https://www.youtube.com/watch?v=T7ZqdzO4cm4",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: 699,
    stock: 10,
    featured: true,
    description:
      "Latest flagship smartphone with 120Hz display, 5G connectivity, and advanced camera system.",
    image:
      "https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg",
  },
  {
    id: 3,
    name: "Tablet Plus",
    price: 399,
    stock: 10,
    featured: true,
    description:
      "10.5-inch tablet with stunning display, great for entertainment and productivity on the go.",
    image:
      "https://www.lenovo.com/us/en/p/tablets/android-tablets/lenovo-tab-series/lenovo-tab-plus/len103l0024?srsltid=AfmBOoqHjRE-NqhTITld6utzJhXylxwNgnKa4OriVEPk2i3yq3cmCtZL",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 149,
    stock: 10,
    featured: true,
    description:
      "Premium noise-cancelling headphones with 30-hour battery life and crystal-clear sound quality.",
    image:
      "https://www.amazon.com/Bluetooth-Headphones-Cancelling-Wireless-Playtime/dp/B0C2D21HBX",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 79,
    stock: 10,
    featured: false,
    description:
      "Professional mechanical keyboard with RGB lighting and tactile switches for gaming and typing.",
    image:
      "https://www.nytimes.com/wirecutter/reviews/our-favorite-mechanical-keyboards/",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 29,
    stock: 10,
    featured: true,
    description:
      "High-precision gaming mouse with adjustable DPI and ergonomic design for competitive gaming.",
    image:
      "https://www.maxgaming.com/en/wireless-mouses/g502-x-plus-wireless-gaming-mouse-rgb-black",
  },
  {
    id: 7,
    name: "Ultra HD Monitor",
    price: 299,
    stock: 10,
    featured: false,
    description:
      "27-inch 4K monitor with HDR support and 144Hz refresh rate for immersive viewing experience.",
    image:
      "https://www.philips.co.za/c-p/276E8VJSB_73/4k-ultra-hd-lcd-monitor",
  },
  {
    id: 8,
    name: "Home Printer",
    price: 199,
    stock: 10,
    featured: false,
    description:
      "All-in-one inkjet printer with wireless connectivity and fast printing speeds up to 15 pages per minute.",
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=220&fit=crop",
  },
  {
    id: 9,
    name: "Wi-Fi Router",
    price: 89,
    stock: 10,
    featured: false,
    description:
      "Dual-band Wi-Fi 6 router with gigabit ethernet for blazing-fast internet speeds throughout your home.",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=220&fit=crop",
  },
  {
    id: 10,
    name: "Webcam HD",
    price: 49,
    stock: 10,
    featured: false,
    description:
      "1080p HD webcam with auto-focus and built-in microphone, perfect for video calls and streaming.",
    image:
      "https://images.unsplash.com/photo-1595225476933-018acacfba66?w=400&h=220&fit=crop",
  },
  {
    id: 11,
    name: "Smartwatch Series 5",
    price: 229,
    stock: 10,
    featured: false,
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and 7-day battery life.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=220&fit=crop",
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 129,
    stock: 10,
    featured: false,
    description:
      "Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery capacity.",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133814c9?w=400&h=220&fit=crop",
  },
  {
    id: 13,
    name: "Mirrorless Camera",
    price: 549,
    stock: 5,
    featured: false,
    description:
      "Professional-grade mirrorless camera with 24MP sensor and 4K video recording capabilities.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=220&fit=crop",
  },
  {
    id: 14,
    name: "Travel Backpack",
    price: 69,
    stock: 12,
    featured: false,
    description:
      "Durable 40L travel backpack with multiple compartments and USB charging port.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=220&fit=crop",
  },
  {
    id: 15,
    name: "Fast Charger",
    price: 25,
    stock: 20,
    featured: false,
    description:
      "Quick-charging adapter with 65W output and compatibility with most modern devices.",
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=220&fit=crop",
  },
  {
    id: 16,
    name: "Desk Lamp",
    price: 39,
    stock: 15,
    featured: false,
    description:
      "Adjustable LED desk lamp with touch control and 5 brightness levels for optimal workspace lighting.",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2022/04/desk-lamp-2048px-4856-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
  },
  {
    id: 17,
    name: "Office Chair",
    price: 159,
    stock: 6,
    featured: false,
    description:
      "Ergonomic office chair with lumbar support and 360-degree swivel for all-day comfort.",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=220&fit=crop",
  },
  {
    id: 18,
    name: "Gaming Glasses",
    price: 49,
    stock: 18,
    featured: false,
    description:
      "Blue light blocking gaming glasses that reduce eye strain during long screen time sessions.",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=220&fit=crop",
  },
]

export default products

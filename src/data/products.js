const products = [
  {
    id: 1,
    name: 'Laptop Pro 15',
    price: 999,
    oldPrice: 1200,
    stock: 10,
    featured: true,
    description:
      'Powerful 15-inch laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for professionals and creators.',
    image: 'https://m.media-amazon.com/images/I/71yKxEaoVqL.jpg'
  },
  {
    id: 2,
    name: 'Smartphone X',
    price: 699,
    oldPrice: 799,
    stock: 10,
    featured: true,
    description:
      'Latest flagship smartphone with 120Hz display, 5G connectivity, and advanced camera system.',
    image: 'https://m.media-amazon.com/images/I/517cbS1x8gL.jpg'
  },
  {
    id: 3,
    name: 'Tablet Plus',
    price: 399,
    oldPrice: 499,
    stock: 10,
    featured: true,
    description:
      '10.5-inch tablet with stunning display, great for entertainment and productivity on the go.',
    image:
      'https://p2-ofp.static.pub//fes/cms/2024/04/02/ktc2e0nyhy9kgheh7b6sraf3t5lg78015342.png'
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 149,
    oldPrice: 199,
    stock: 10,
    featured: true,
    description:
      'Premium noise-cancelling headphones with 30-hour battery life and crystal-clear sound quality.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbIozOj4-ZPTj0mMD3bAMCp7HlcU8jhs4MQ&s'
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 79,
    oldPrice: 99,
    stock: 10,
    featured: false,
    description:
      'Professional mechanical keyboard with RGB lighting and tactile switches for gaming and typing.',
    image:
      'https://m.media-amazon.com/images/I/61P7MvyRbUL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 6,
    name: 'Gaming Mouse',
    price: 29,
    oldPrice: 49,
    stock: 10,
    featured: true,
    description:
      'High-precision gaming mouse with adjustable DPI and ergonomic design for competitive gaming.',
    image:
      'https://www.power-x.in/cdn/shop/files/Front.jpg?v=1737709078&width=3000'
  },
  {
    id: 7,
    name: 'Ultra HD Monitor',
    price: 299,
    oldPrice: 349,
    stock: 10,
    featured: false,
    description:
      '27-inch 4K monitor with HDR support and 144Hz refresh rate for immersive viewing experience.',
    image:
      'https://sm.pcmag.com/pcmag_uk/photo/b/benq-pd322/benq-pd3225u_zz6z.jpg'
  },
  {
    id: 8,
    name: 'Home Printer',
    price: 199,
    oldPrice: 249,
    stock: 10,
    featured: false,
    description:
      'All-in-one inkjet printer with wireless connectivity and fast printing speeds up to 15 pages per minute.',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/epson-et-3950-printer-011-690e5fb0435c0.jpg'
  },
  {
    id: 9,
    name: 'Wi-Fi Router',
    price: 89,
    oldPrice: 119,
    stock: 10,
    featured: false,
    description:
      'Dual-band Wi-Fi 6 router with gigabit ethernet for blazing-fast internet speeds throughout your home.',
    image:
      'https://www.linksys.com/cdn/shop/articles/Tech_Brief_Router_white_48682d98-f68c-451f-910e-b3b15e33dec0.png?v=1763435065'
  },
  {
    id: 10,
    name: 'Webcam HD',
    price: 49,
    oldPrice: 69,
    stock: 10,
    featured: false,
    description:
      '1080p HD webcam with auto-focus and built-in microphone, perfect for video calls and streaming.',
    image:
      'https://shopstop.al/wp-content/uploads/2020/10/web-camera-full-hd-1080P-buy-online-shopstop-al.jpg'
  },
  {
    id: 11,
    name: 'Smartwatch Series 5',
    price: 229,
    oldPrice: 279,
    stock: 10,
    featured: false,
    description:
      'Feature-rich smartwatch with fitness tracking, heart rate monitoring, and 7-day battery life.',
    image:
      'https://ibuy.al/wp-content/uploads/2020/04/ore-inteligjente-apple-watch-seria-5.jpg'
  },
  {
    id: 12,
    name: 'Bluetooth Speaker',
    price: 129,
    oldPrice: 169,
    stock: 10,
    featured: false,
    description:
      'Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery capacity.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s'
  },
  {
    id: 13,
    name: 'Mirrorless Camera',
    price: 549,
    oldPrice: 649,
    stock: 5,
    featured: false,
    description:
      'Professional-grade mirrorless camera with 24MP sensor and 4K video recording capabilities.',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=220&fit=crop'
  },
  {
    id: 14,
    name: 'Travel Backpack',
    price: 69,
    oldPrice: 89,
    stock: 12,
    featured: false,
    description:
      'Durable 40L travel backpack with multiple compartments and USB charging port.',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=220&fit=crop'
  },
  {
    id: 15,
    name: 'Mechanical Keyboard',
    price: 25,
    oldPrice: 39,
    stock: 20,
    featured: false,
    description:
      'Quick-charging adapter with 65W output and compatibility with most modern devices.',
    image:
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=220&fit=crop'
  },
  {
    id: 16,
    name: 'Desk Lamp',
    price: 39,
    oldPrice: 59,
    stock: 15,
    featured: false,
    description:
      'Adjustable LED desk lamp with touch control and 5 brightness levels for optimal workspace lighting.',
    image:
      'https://cdn.thewirecutter.com/wp-content/media/2022/04/desk-lamp-2048px-4856-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp'
  },
  {
    id: 17,
    name: 'Office Chair',
    price: 159,
    oldPrice: 199,
    stock: 6,
    featured: false,
    description:
      'Ergonomic office chair with lumbar support and 360-degree swivel for all-day comfort.',
    image:
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=220&fit=crop'
  },
  {
    id: 18,
    name: 'Gaming Glasses',
    price: 49,
    oldPrice: 79,
    stock: 18,
    featured: false,
    description:
      'Blue light blocking gaming glasses that reduce eye strain during long screen time sessions.',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=220&fit=crop'
  }
]

export default products

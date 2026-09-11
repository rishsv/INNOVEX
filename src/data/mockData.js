export const INITIAL_CART = [];

export const PRODUCTS = [
  // WOMEN'S DRESSES
  {
    id: "p1",
    title: "Emerald Bias Cut Silk Slip Dress",
    subtitle: "Pure Mulberry Silk",
    category: "womens-dresses",
    fabric: "100% Pure Mulberry Silk",
    price: 28990,
    originalPrice: 34990,
    rating: 4.9,
    reviewsCount: 34,
    badge: "Best Seller",
    stockStatus: "In Stock",
    description: "Fluid cowl neckline with adjustable micro-straps and floor-length cascade cut on a true 45-degree bias.",
    colors: [
      { name: "Emerald Green", hex: "#004532" },
      { name: "Pearl White", hex: "#EDE4D8" },
      { name: "Obsidian Black", hex: "#111311" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p2",
    title: "Royal Ivory Halter Evening Gown",
    subtitle: "Structured Matte Crepe",
    category: "womens-dresses",
    fabric: "Heavy Italian Matte Crepe",
    price: 34500,
    originalPrice: 42000,
    rating: 5.0,
    reviewsCount: 19,
    badge: "Runway Edition",
    stockStatus: "Limited Edition",
    description: "Monolithic column cut evening gown featuring a high halter neckline and graceful side slit.",
    colors: [
      { name: "Ivory", hex: "#f7f5f0" },
      { name: "Midnight Black", hex: "#121413" }
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p9",
    title: "Draped Chiffon Maxi Dress",
    subtitle: "Georgette Chiffon",
    category: "womens-dresses",
    fabric: "100% Pure Georgette Chiffon",
    price: 22990,
    originalPrice: 28000,
    rating: 4.8,
    reviewsCount: 41,
    badge: "New Arrival",
    stockStatus: "In Stock",
    description: "Ethereally light chiffon maxi with asymmetric hemline and delicate hand-rolled edges.",
    colors: [
      { name: "Dusty Rose", hex: "#C48B9F" },
      { name: "Midnight Navy", hex: "#0b1b3d" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p10",
    title: "Pleated Organza Midi Dress",
    subtitle: "Silk Organza Layers",
    category: "womens-dresses",
    fabric: "Pure Silk Organza",
    price: 19490,
    originalPrice: 24000,
    rating: 4.7,
    reviewsCount: 27,
    badge: "Trending",
    stockStatus: "In Stock",
    description: "Tiered pleated organza with a cinched waist and floaty silhouette perfect for soirees.",
    colors: [
      { name: "Champagne Gold", hex: "#c8a96e" },
      { name: "Blush Pink", hex: "#f2bac9" }
    ],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // MEN'S APPAREL
  {
    id: "p3",
    title: "Bespoke Double-Breasted Wool Tuxedo",
    subtitle: "Super 150s Fine Wool",
    category: "mens-apparel",
    fabric: "100% Super 150s Fine Wool",
    price: 45990,
    originalPrice: 58000,
    rating: 4.9,
    reviewsCount: 22,
    badge: "Men's Luxury",
    stockStatus: "In Stock",
    description: "Tailored double-breasted tuxedo jacket with satin peak lapels and structured razor-sharp shoulders.",
    colors: [
      { name: "Midnight Black", hex: "#111311" },
      { name: "Royal Navy", hex: "#0b1b3d" }
    ],
    sizes: ["38R", "40R", "42R", "44R"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p4",
    title: "Classic Raw Linen Tailored Blazer",
    subtitle: "Pure Organic Linen",
    category: "mens-apparel",
    fabric: "100% Organic Linen",
    price: 24500,
    originalPrice: 29900,
    rating: 5.0,
    reviewsCount: 31,
    badge: "New Edition",
    stockStatus: "In Stock",
    description: "Sand-colored double-breasted raw linen suit jacket with handcrafted genuine horn buttons.",
    colors: [
      { name: "Beige Sand", hex: "#dbdad7" },
      { name: "Slate Olive", hex: "#3f4944" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p11",
    title: "Structured Merino Wool Overcoat",
    subtitle: "Italian Merino Wool",
    category: "mens-apparel",
    fabric: "100% Italian Merino Wool",
    price: 38990,
    originalPrice: 48000,
    rating: 4.8,
    reviewsCount: 18,
    badge: "Winter Edit",
    stockStatus: "Low Stock",
    description: "Long-line structured overcoat with notched lapels and a hidden button placket for a clean silhouette.",
    colors: [
      { name: "Charcoal Grey", hex: "#3f4944" },
      { name: "Camel Brown", hex: "#c19a6b" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p12",
    title: "Slim Fit Cotton Poplin Dress Shirt",
    subtitle: "Egyptian Cotton",
    category: "mens-apparel",
    fabric: "100% Egyptian Long-Staple Cotton",
    price: 8990,
    originalPrice: 11990,
    rating: 4.7,
    reviewsCount: 56,
    badge: "Essential",
    stockStatus: "In Stock",
    description: "Precision-cut slim-fit shirt with mother-of-pearl buttons and a subtle herringbone weave.",
    colors: [
      { name: "Crisp White", hex: "#f7f5f0" },
      { name: "Sky Blue", hex: "#5b9bd5" },
      { name: "Pale Pink", hex: "#f2bac9" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1602810316693-3667c854239a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p13",
    title: "Pleated Linen Trousers",
    subtitle: "Washed Linen",
    category: "mens-apparel",
    fabric: "100% Washed Pure Linen",
    price: 14990,
    originalPrice: 18500,
    rating: 4.6,
    reviewsCount: 43,
    badge: "Summer Edit",
    stockStatus: "In Stock",
    description: "Wide-leg pleated trousers cut from garment-washed linen for a relaxed, lived-in drape.",
    colors: [
      { name: "Ecru", hex: "#EDE4D8" },
      { name: "Olive", hex: "#6b7c61" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // ACCESSORIES
  {
    id: "p5",
    title: "Handcrafted Pointed Leather Mules",
    subtitle: "Italian Calf Leather",
    category: "accessories",
    fabric: "Hand-finished Italian Leather",
    price: 16990,
    originalPrice: 21000,
    rating: 4.8,
    reviewsCount: 16,
    badge: "Luxury Footwear",
    stockStatus: "Low Stock",
    description: "Pointed-toe leather mules in burnished bronze with modern architectural heels.",
    colors: [
      { name: "Bronze", hex: "#904d00" },
      { name: "Noir Black", hex: "#111311" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p6",
    title: "Handspun Pure Cashmere Stole",
    subtitle: "100% Cashmere",
    category: "accessories",
    fabric: "100% Pure Himalayan Cashmere",
    price: 18500,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 45,
    badge: "Essentials",
    stockStatus: "In Stock",
    description: "Ultra-soft hand-woven pure cashmere fringed shawl stole in subtle warm ivory.",
    colors: [
      { name: "Ivory White", hex: "#f7f5f0" },
      { name: "Charcoal Grey", hex: "#3f4944" }
    ],
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p14",
    title: "Embossed Leather Crossbody Bag",
    subtitle: "Full-Grain Calf Leather",
    category: "accessories",
    fabric: "Full-Grain Italian Calf Leather",
    price: 32990,
    originalPrice: 40000,
    rating: 4.9,
    reviewsCount: 28,
    badge: "New Season",
    stockStatus: "In Stock",
    description: "Structured mini crossbody with a signature embossed monogram pattern and adjustable chain strap.",
    colors: [
      { name: "Cognac", hex: "#884a0e" },
      { name: "Onyx Black", hex: "#111311" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p15",
    title: "Hand-Knotted Silk Pocket Square",
    subtitle: "Lyonnaise Silk",
    category: "accessories",
    fabric: "100% Lyonnaise Hand-Painted Silk",
    price: 4990,
    originalPrice: 6990,
    rating: 4.7,
    reviewsCount: 62,
    badge: "Gift Favourite",
    stockStatus: "In Stock",
    description: "Exquisitely hand-painted silk pocket square inspired by Indian Mughal garden motifs.",
    colors: [
      { name: "Peacock Blue", hex: "#00638e" },
      { name: "Ruby Red", hex: "#9b1111" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p16",
    title: "18K Gold-Plated Cuff Bracelet",
    subtitle: "Artisan Gold Jewellery",
    category: "accessories",
    fabric: "Brass with 18K Gold Plating",
    price: 9490,
    originalPrice: 12000,
    rating: 4.8,
    reviewsCount: 39,
    badge: "Luxury Jewels",
    stockStatus: "In Stock",
    description: "Open-ended architectural cuff with hammered texture and satin finish, handmade by Indian artisans.",
    colors: [
      { name: "Gold", hex: "#c8a96e" },
      { name: "Silver", hex: "#d0d0d0" }
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  // SALE
  {
    id: "p8",
    title: "Silk Crepe Evening Blouse",
    subtitle: "100% Silk Crepe",
    category: "sale",
    fabric: "100% Pure Silk Crepe de Chine",
    price: 14990,
    originalPrice: 29990,
    rating: 4.9,
    reviewsCount: 53,
    badge: "50% OFF",
    stockStatus: "Limited Stock",
    description: "Sculpted silk blouse with concealed pearl buttons and fluid cuffs.",
    colors: [
      { name: "Champagne", hex: "#EDE4D8" }
    ],
    sizes: ["XS", "S", "M"],
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p17",
    title: "Tailored Wool Blazer - Archive",
    subtitle: "Merino Wool Blend",
    category: "sale",
    fabric: "80% Merino Wool, 20% Cashmere",
    price: 18990,
    originalPrice: 42000,
    rating: 4.8,
    reviewsCount: 37,
    badge: "55% OFF",
    stockStatus: "Last 3 Units",
    description: "Archive season tailored blazer in a premium wool-cashmere blend — a timeless investment piece.",
    colors: [
      { name: "Slate Grey", hex: "#5a6472" },
      { name: "Midnight Navy", hex: "#0b1b3d" }
    ],
    sizes: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p18",
    title: "Linen Wide-Leg Palazzo Pants",
    subtitle: "Textured Linen",
    category: "sale",
    fabric: "100% Handloomed Khadi Linen",
    price: 7990,
    originalPrice: 16990,
    rating: 4.6,
    reviewsCount: 24,
    badge: "53% OFF",
    stockStatus: "In Stock",
    description: "Relaxed wide-leg palazzo trousers in handloomed khadi linen, perfect for warm season dressing.",
    colors: [
      { name: "Natural Ecru", hex: "#e5ddd1" },
      { name: "Terracotta", hex: "#c47c5a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f43?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const TOP_SALES = ["p1", "p3", "p5", "p14"];

export const REVIEWS = [
  {
    id: "r1",
    author: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    date: "October 14, 2025",
    title: "Incomparable silk quality & fit",
    comment: "The pure Mulberry silk drape is breathtaking. Delivered via white-glove courier to Mumbai in just 2 days!"
  },
  {
    id: "r2",
    author: "Rohan Kapoor",
    location: "New Delhi, India",
    rating: 5,
    date: "September 28, 2025",
    title: "Outstanding Tailoring",
    comment: "The double-breasted tuxedo fits perfectly. Standard-setting craftsmanship and seamless INR payment experience."
  },
  {
    id: "r3",
    author: "Ananya Krishnan",
    location: "Chennai, India",
    rating: 5,
    date: "November 2, 2025",
    title: "Exquisite cashmere stole",
    comment: "The cashmere stole is the softest thing I have ever owned. Truly worth every rupee — a family heirloom!"
  }
];

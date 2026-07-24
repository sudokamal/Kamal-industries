export type Finish = "Natural Split" | "Honed" | "Polished" | "Leather" | "Sandblasted" | "Flamed" | "Custom";
export type Category =
  | "kota-blue"
  | "kota-brown"
  | "mandana"
  | "flooring"
  | "wall-cladding"
  | "steps"
  | "garden"
  | "custom-sizes";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: Category;
  categories: Category[];
  images: string[];
  description: string;
  applications: string[];
  sizes: string[];
  thickness: string[];
  finishes: Finish[];
  inStock: boolean;
  featured: boolean;
}

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "kota-blue", label: "Kota Blue Stone" },
  { id: "kota-brown", label: "Kota Brown Stone" },
  { id: "mandana", label: "Mandana Stone" },
  { id: "flooring", label: "Flooring" },
  { id: "wall-cladding", label: "Wall Cladding" },
  { id: "steps", label: "Steps & Stairs" },
  { id: "garden", label: "Garden & Outdoor Stone" },
  { id: "custom-sizes", label: "Custom Sizes" },
];

export const PRODUCTS: Product[] = [
  {
    id: "kota-blue-flooring",
    name: "Kota Blue Stone Flooring",
    tagline: "Classic blue-grey limestone — the benchmark Indian flooring stone",
    category: "kota-blue",
    categories: ["kota-blue", "flooring"],
    images: [
      "/Kota Blue Stone.jpeg",
      "/Gallery2.jpeg",
      "/Gallery3.jpeg",
      "/Gallery21.jpeg",
      "/Gallery22.jpeg",
      "/Quality.jpeg",
    ],
    description:
      "Kota Blue Stone is the signature product of Kamal Industries. Quarried from the limestone belt of Ramganjmandi, this dense blue-grey stone is naturally slip-resistant, moisture-proof, and exceptionally durable. It requires no sealing and performs equally well indoors and outdoors. Each slab is machine-calibrated to ±1mm thickness tolerance for seamless installation.",
    applications: [
      "Interior flooring",
      "Exterior paving",
      "Commercial lobbies",
      "Residential flooring",
      "Polished interior floors",
      "Natural split paving",
      "Large installed areas",
    ],
    sizes: [
      "12×12 inches",
      "12×18 inches",
      "18×18 inches",
      "18×24 inches",
      "24×24 inches",
      "Custom cut to size",
    ],
    thickness: ["18mm", "20mm", "25mm", "30mm", "Custom"],
    finishes: ["Natural Split", "Honed", "Polished"],
    inStock: true,
    featured: true,
  },
  {
    id: "kota-blue-slabs",
    name: "Kota Blue Stone Slabs",
    tagline: "Large format Kota Blue slabs for premium architectural projects",
    category: "kota-blue",
    categories: ["kota-blue", "flooring"],
    images: [
      "/Large Format Slabs.jpeg",
      "/Gallery1.jpeg",
      "/Gallery12.jpeg",
      "/Gallery20.jpeg",
      "/cutting-machine-1.jpeg",
    ],
    description:
      "Our large-format Kota Blue Stone slabs are cut from the finest quarry blocks selected for colour uniformity and freedom from lamination. Available in jumbo formats up to 4 feet × 8 feet, these slabs are ideal for premium lobbies, feature walls, and architectural cladding applications where an uninterrupted stone surface is required.",
    applications: [
      "Large format slabs",
      "Factory slabs",
      "Warehouse slab inventory",
      "Precision cut slabs",
      "Premium architectural projects",
      "Feature wall slabs",
    ],
    sizes: [
      "2×2 feet",
      "2×3 feet",
      "2×4 feet",
      "3×3 feet",
      "3×4 feet",
      "4×4 feet",
      "Random slabs",
    ],
    thickness: ["20mm", "25mm", "30mm", "40mm", "50mm"],
    finishes: ["Natural Split", "Honed", "Polished", "Leather"],
    inStock: true,
    featured: true,
  },
  {
    id: "kota-brown-flooring",
    name: "Kota Brown Stone Flooring",
    tagline: "Warm earthy tones — the premium brown variant of Kota Stone",
    category: "kota-brown",
    categories: ["kota-brown", "flooring"],
    images: [
      "/Kota Brown Stone.jpeg",
      "/Gallery6.jpeg",
      "/Types.jpeg",
      "/Card.jpeg",
    ],
    description:
      "Kota Brown Stone carries all the structural and performance attributes of Kota Blue Stone while offering a distinctly warmer, earthy colour palette — ranging from warm beige to soft chocolate brown. It is a premium choice for architects who want the durability of Kota Stone with a softer, more organic interior aesthetic.",
    applications: [
      "Indoor villa flooring",
      "Outdoor pathways",
      "Villa exteriors",
      "Courtyard paving",
      "Garden paving",
      "Heritage restorations",
    ],
    sizes: [
      "12×12 inches",
      "12×18 inches",
      "18×18 inches",
      "18×24 inches",
      "24×24 inches",
      "Custom cut to size",
    ],
    thickness: ["18mm", "20mm", "25mm", "30mm"],
    finishes: ["Natural Split", "Honed", "Polished", "Sandblasted"],
    inStock: true,
    featured: true,
  },
  {
    id: "mandana-stone",
    name: "Mandana Red Stone",
    tagline: "The royal red stone of Rajasthan — quartzite with heritage character",
    category: "mandana",
    categories: ["mandana", "flooring"],
    images: [
      "/Mandana Red Stone.jpeg",
      "/Gallery7.jpeg",
      "/Card1.jpeg",
    ],
    description:
      "Mandana Stone is a distinctive red quartzite sourced from the Mandana region of Kota district. Prized for its deep terracotta red colour and characterful natural-split surface, it has been used in Rajasthani architecture for centuries. Kamal Industries supplies Mandana Stone in calibrated sizes for both traditional and contemporary applications.",
    applications: [
      "Heritage buildings",
      "Temple flooring",
      "Courtyard paving",
      "Outdoor landscape",
      "Traditional architecture",
      "Rustic interior flooring",
    ],
    sizes: [
      "12×12 inches",
      "12×18 inches",
      "18×18 inches",
      "Irregular shapes",
      "Custom cut",
    ],
    thickness: ["20mm", "25mm", "30mm", "35mm"],
    finishes: ["Natural Split", "Sandblasted", "Flamed"],
    inStock: true,
    featured: true,
  },
  {
    id: "large-format-slabs",
    name: "Large Format Kota Stone Slabs",
    tagline: "Jumbo slabs for hotel lobbies, commercial interiors and luxury residences",
    category: "kota-blue",
    categories: ["kota-blue", "flooring"],
    images: [
      "/Large Format Slabs.jpeg",
      "/Gallery12.jpeg",
      "/Gallery1.jpeg",
      "/Gallery11.jpeg",
    ],
    description:
      "Ultra-large format Kota Stone slabs for grand spaces. Precision calibrated with zero lamination, providing high flexural strength and seamless visual continuity for luxury hotel lobbies, commercial towers, and architectural facades.",
    applications: [
      "Hotel lobby flooring",
      "Commercial interiors",
      "Large architectural slabs",
      "Premium residential projects",
      "Large-format installations",
    ],
    sizes: ["2×4 feet", "3×4 feet", "4×4 feet", "4×8 feet jumbo"],
    thickness: ["20mm", "25mm", "30mm", "40mm"],
    finishes: ["Honed", "Polished", "Natural Split", "Leather"],
    inStock: true,
    featured: true,
  },
  {
    id: "wall-cladding",
    name: "Kota Stone Wall Cladding",
    tagline: "Split-face and sawn panels for premium exterior and interior walls",
    category: "wall-cladding",
    categories: ["wall-cladding", "kota-blue"],
    images: [
      "/Wall Cladding.jpeg",
      "/Gallery13.jpeg",
      "/Gallery22.jpeg",
    ],
    description:
      "Our Kota Stone wall cladding panels are precision-cut and surface-treated for direct installation on both interior and exterior wall surfaces. Available in split-face, sawn, and honed finishes, these panels bring the natural texture and depth of authentic Kota Stone to vertical applications — feature walls, building facades, boundary walls, and more.",
    applications: [
      "Interior feature walls",
      "Exterior wall cladding",
      "Split-face cladding",
      "Modern wall panels",
      "Stone facades",
      "Garden retaining walls",
    ],
    sizes: [
      "6×12 inches",
      "6×18 inches",
      "9×18 inches",
      "12×24 inches",
      "Ledger panels",
      "Random lengths",
    ],
    thickness: ["15mm", "20mm", "25mm", "30mm"],
    finishes: ["Natural Split", "Honed", "Leather", "Sandblasted"],
    inStock: true,
    featured: false,
  },
  {
    id: "stone-steps",
    name: "Kota Stone Steps & Stair Treads",
    tagline: "Calibrated step stone with natural slip resistance",
    category: "steps",
    categories: ["steps", "kota-blue"],
    images: [
      "/Stairs.jpeg",
      "/Gallery14.jpeg",
      "/Gallery10.jpeg",
    ],
    description:
      "Kota Stone is one of the finest natural materials for stair treads, owing to its inherent slip resistance, hardness, and ability to withstand decades of heavy foot traffic without abrasion. Our stair stone is supplied in full step sizes — riser and tread — cut to standard or custom dimensions, with a variety of edge profiles available on request.",
    applications: [
      "Indoor staircases",
      "Outdoor staircases",
      "Commercial stairs",
      "Residential stairs",
      "Stair treads & risers",
      "Garden terracing",
    ],
    sizes: [
      "4 inch × 12 inch (riser)",
      "12 inch × 36 inch (tread)",
      "12 inch × 48 inch (tread)",
      "Custom widths & lengths",
    ],
    thickness: ["30mm", "40mm", "50mm", "60mm", "Custom"],
    finishes: ["Natural Split", "Honed", "Sandblasted"],
    inStock: true,
    featured: false,
  },
  {
    id: "garden-outdoor-stone",
    name: "Garden & Outdoor Stone",
    tagline: "All-weather natural stone for pathways, driveways and garden paving",
    category: "garden",
    categories: ["garden", "flooring"],
    images: [
      "/Garden.jpeg",
      "/Gallery15.jpeg",
      "/Gallery2.jpeg",
    ],
    description:
      "Robust Kota Stone cut for outdoor landscaping, garden pathways, pool surrounds, driveways, and farm terrace paving. Extremely weather-resistant for all Indian climates, slip-resistant when wet, and virtually maintenance-free.",
    applications: [
      "Garden pathways",
      "Landscape paving",
      "Pool decks",
      "Patios & verandas",
      "Driveways & parking",
      "Outdoor seating areas",
    ],
    sizes: [
      "12×12 inches",
      "12×18 inches",
      "18×18 inches",
      "24×24 inches",
      "Custom landscape cuts",
    ],
    thickness: ["25mm", "30mm", "40mm", "50mm"],
    finishes: ["Natural Split", "Sandblasted", "Flamed"],
    inStock: true,
    featured: true,
  },
  {
    id: "custom-cut",
    name: "Custom Cut Stone",
    tagline: "Bespoke sizing for architects and project contractors",
    category: "custom-sizes",
    categories: ["custom-sizes", "kota-blue", "kota-brown"],
    images: [
      "/cutting-machine-3.jpeg",
      "/cutting-machine-1.jpeg",
      "/cutting-machine-2.jpeg",
      "/Gallery16.jpeg",
    ],
    description:
      "Kamal Industries operates precision CNC and diamond-blade cutting equipment capable of producing stone to any custom dimension provided in architectural drawings. From non-standard tile formats to bespoke countertop slabs, sill stones, rebated thresholds, and bullnosed pool copings — our custom cutting service handles every specification. Minimum order quantities apply.",
    applications: [
      "Architectural projects",
      "CNC waterjet custom cuts",
      "Window sills & thresholds",
      "Countertops & worktops",
      "Landscape features",
      "Export packing orders",
    ],
    sizes: ["Any dimension as per drawing", "Minimum 6 inches on shortest side"],
    thickness: ["15mm minimum to 150mm maximum", "As per specification"],
    finishes: ["Natural Split", "Honed", "Polished", "Leather", "Sandblasted", "Flamed", "Custom"],
    inStock: true,
    featured: false,
  },
];

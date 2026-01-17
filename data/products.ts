// data/products.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  material: 'Bamboo' | 'Sugarcane';
  description: string;
  specifications: string[];
  dimensions: string;
  packingUnit: string;
  cartonSize: string;
  wholesalePrice: number;
  retailPrice: number;
  image: string;
  features: string[];
}

export const products: Product[] = [
  // Bamboo Plates
  {
    id: 'bamboo-round-plate-7',
    name: 'Bamboo Round Plate 7"',
    category: 'plates',
    material: 'Bamboo',
    description: 'Premium quality round bamboo plate, perfect for appetizers and desserts',
    specifications: [
      '100% biodegradable',
      'Microwave safe',
      'Oil and water resistant',
      'Heat resistant up to 100°C'
    ],
    dimensions: '7 inch (18cm) diameter',
    packingUnit: '25 pcs/pack',
    cartonSize: '100 pcs/carton',
    wholesalePrice: 12.50,
    retailPrice: 18.00,
    image: '/images/products/BambooPlate.png',
    features: ['Eco-friendly', 'Sturdy', 'Natural finish']
  },
  {
    id: 'bamboo-round-plate-9',
    name: 'Bamboo Round Plate 9"',
    category: 'plates',
    material: 'Bamboo',
    description: 'Large round bamboo plate ideal for main courses and family meals',
    specifications: [
      '100% biodegradable',
      'Microwave safe',
      'Oil and water resistant',
      'Heat resistant up to 100°C'
    ],
    dimensions: '9 inch (23cm) diameter',
    packingUnit: '25 pcs/pack',
    cartonSize: '100 pcs/carton',
    wholesalePrice: 15.00,
    retailPrice: 22.00,
    image: '/images/products/BambooPlate.png',
    features: ['Eco-friendly', 'Heavy-duty', 'Premium quality']
  },
  {
    id: 'bamboo-round-plate-10',
    name: 'Bamboo Round Plate 10"',
    category: 'plates',
    material: 'Bamboo',
    description: 'Extra large round plate for generous servings and party use',
    specifications: [
      '100% biodegradable',
      'Microwave safe',
      'Oil and water resistant',
      'Heat resistant up to 100°C'
    ],
    dimensions: '10 inch (25cm) diameter',
    packingUnit: '25 pcs/pack',
    cartonSize: '100 pcs/carton',
    wholesalePrice: 17.00,
    retailPrice: 25.00,
    image: '/images/products/BambooPlate.png',
    features: ['Extra large', 'Restaurant quality', 'Durable']
  },
  {
    id: 'bamboo-square-plate-8',
    name: 'Bamboo Square Plate 8"',
    category: 'plates',
    material: 'Bamboo',
    description: 'Modern square design bamboo plate for contemporary dining',
    specifications: [
      '100% biodegradable',
      'Microwave safe',
      'Oil and water resistant',
      'Heat resistant up to 100°C'
    ],
    dimensions: '8 x 8 inch (20 x 20cm)',
    packingUnit: '25 pcs/pack',
    cartonSize: '100 pcs/carton',
    wholesalePrice: 14.00,
    retailPrice: 20.00,
    image: '/images/products/BambooPlate.png',
    features: ['Modern design', 'Stackable', 'Elegant']
  },
  {
    id: 'bamboo-square-plate-10',
    name: 'Bamboo Square Plate 10"',
    category: 'plates',
    material: 'Bamboo',
    description: 'Large square bamboo plate perfect for buffets and catering',
    specifications: [
      '100% biodegradable',
      'Microwave safe',
      'Oil and water resistant',
      'Heat resistant up to 100°C'
    ],
    dimensions: '10 x 10 inch (25 x 25cm)',
    packingUnit: '25 pcs/pack',
    cartonSize: '100 pcs/carton',
    wholesalePrice: 16.50,
    retailPrice: 24.00,
    image: '/images/products/BambooPlate.png',
    features: ['Premium size', 'Professional grade', 'Versatile']
  },

  // Sugarcane Plates
  {
    id: 'sugarcane-round-plate-7',
    name: 'Sugarcane Round Plate 7"',
    category: 'plates',
    material: 'Sugarcane',
    description: 'Eco-friendly sugarcane bagasse round plate for everyday use',
    specifications: [
      '100% compostable',
      'Microwave and freezer safe',
      'Grease and cut resistant',
      'Made from renewable resources'
    ],
    dimensions: '7 inch (18cm) diameter',
    packingUnit: '50 pcs/pack',
    cartonSize: '500 pcs/carton',
    wholesalePrice: 10.00,
    retailPrice: 15.00,
    image: '/images/products/SugarCanePlate.png',
    features: ['Affordable', 'Sustainable', 'Lightweight']
  },
  {
    id: 'sugarcane-round-plate-9',
    name: 'Sugarcane Round Plate 9"',
    category: 'plates',
    material: 'Sugarcane',
    description: 'Standard size sugarcane plate for main courses',
    specifications: [
      '100% compostable',
      'Microwave and freezer safe',
      'Grease and cut resistant',
      'Made from renewable resources'
    ],
    dimensions: '9 inch (23cm) diameter',
    packingUnit: '50 pcs/pack',
    cartonSize: '500 pcs/carton',
    wholesalePrice: 12.00,
    retailPrice: 18.00,
    image: '/images/products/SugarCanePlate.png',
    features: ['Most popular', 'Great value', 'Reliable']
  },
  {
    id: 'sugarcane-compartment-plate-10',
    name: 'Sugarcane 3-Compartment Plate 10"',
    category: 'plates',
    material: 'Sugarcane',
    description: 'Divided plate perfect for meal prep and portion control',
    specifications: [
      '3 separate compartments',
      '100% compostable',
      'Microwave safe',
      'Prevents food mixing'
    ],
    dimensions: '10 inch (25cm) diameter',
    packingUnit: '50 pcs/pack',
    cartonSize: '500 pcs/carton',
    wholesalePrice: 14.50,
    retailPrice: 21.00,
    image: '/images/products/SugarCanePlate.png',
    features: ['Divided sections', 'Meal prep friendly', 'Convenient']
  },

  // Bowls
  {
    id: 'bamboo-bowl-450ml',
    name: 'Bamboo Bowl 450ml',
    category: 'bowls',
    material: 'Bamboo',
    description: 'Natural bamboo bowl ideal for soups, salads, and cereals',
    specifications: [
      '100% biodegradable',
      'Leak-proof design',
      'Microwave safe',
      'Heat resistant'
    ],
    dimensions: '450ml capacity, 15cm diameter',
    packingUnit: '25 pcs/pack',
    cartonSize: '200 pcs/carton',
    wholesalePrice: 13.00,
    retailPrice: 19.00,
    image: '/images/products/Bowl.png',
    features: ['Deep design', 'Multi-purpose', 'Sturdy rim']
  },
  {
    id: 'sugarcane-bowl-500ml',
    name: 'Sugarcane Bowl 500ml',
    category: 'bowls',
    material: 'Sugarcane',
    description: 'Versatile sugarcane bowl for hot and cold foods',
    specifications: [
      '100% compostable',
      'Leak-proof',
      'Microwave and freezer safe',
      'Grease resistant'
    ],
    dimensions: '500ml capacity, 16cm diameter',
    packingUnit: '50 pcs/pack',
    cartonSize: '500 pcs/carton',
    wholesalePrice: 10.00,
    retailPrice: 15.00,
    image: '/images/products/Bowl.png',
    features: ['Generous size', 'Value pack', 'Versatile use']
  },
  {
    id: 'sugarcane-bowl-750ml',
    name: 'Sugarcane Bowl 750ml',
    category: 'bowls',
    material: 'Sugarcane',
    description: 'Large bowl perfect for pasta, noodles, and hearty meals',
    specifications: [
      '100% compostable',
      'Extra capacity',
      'Microwave safe',
      'Strong construction'
    ],
    dimensions: '750ml capacity, 18cm diameter',
    packingUnit: '50 pcs/pack',
    cartonSize: '400 pcs/carton',
    wholesalePrice: 11.50,
    retailPrice: 17.00,
    image: '/images/products/Bowl.png',
    features: ['Extra large', 'Deep bowl', 'Heavy meals']
  },

  // Food Containers
  {
    id: 'sugarcane-container-450ml',
    name: 'Sugarcane Food Container 450ml',
    category: 'containers',
    material: 'Sugarcane',
    description: 'Rectangular container with secure lid for takeaway meals',
    specifications: [
      '100% compostable',
      'Secure fitting lid',
      'Microwave safe',
      'Leak-resistant design'
    ],
    dimensions: '450ml, 16 x 12 x 5cm',
    packingUnit: '50 pcs/pack',
    cartonSize: '300 pcs/carton',
    wholesalePrice: 15.00,
    retailPrice: 22.00,
    image: '/images/products/Bowl.png',
    features: ['With lid', 'Stackable', 'Secure closure']
  },
  {
    id: 'sugarcane-container-750ml',
    name: 'Sugarcane Food Container 750ml',
    category: 'containers',
    material: 'Sugarcane',
    description: 'Medium size container perfect for single serving meals',
    specifications: [
      '100% compostable',
      'Hinged lid design',
      'Microwave and freezer safe',
      'Grease and leak resistant'
    ],
    dimensions: '750ml, 20 x 14 x 6cm',
    packingUnit: '50 pcs/pack',
    cartonSize: '300 pcs/carton',
    wholesalePrice: 16.00,
    retailPrice: 24.00,
    image: '/images/products/container.png',
    features: ['Popular size', 'Hinged lid', 'Restaurant quality']
  },
  {
    id: 'sugarcane-container-1000ml',
    name: 'Sugarcane Food Container 1000ml',
    category: 'containers',
    material: 'Sugarcane',
    description: 'Large capacity container for family meals and catering',
    specifications: [
      '100% compostable',
      'Extra large capacity',
      'Secure lid closure',
      'Heavy-duty construction'
    ],
    dimensions: '1000ml, 23 x 16 x 7cm',
    packingUnit: '50 pcs/pack',
    cartonSize: '200 pcs/carton',
    wholesalePrice: 18.00,
    retailPrice: 27.00,
    image: '/images/products/container.png',
    features: ['Family size', 'Extra capacity', 'Professional']
  },

  // Cups
  {
    id: 'bamboo-cup-8oz',
    name: 'Bamboo Cup 8oz',
    category: 'cups',
    material: 'Bamboo',
    description: 'Natural bamboo cup for hot and cold beverages',
    specifications: [
      '100% biodegradable',
      'Heat insulated',
      'Leak-proof',
      'No plastic coating'
    ],
    dimensions: '8oz (240ml)',
    packingUnit: '50 pcs/pack',
    cartonSize: '1000 pcs/carton',
    wholesalePrice: 9.00,
    retailPrice: 13.50,
    image: '/images/products/container.png',
    features: ['Standard size', 'Hot drinks', 'Insulated']
  },
  {
    id: 'bamboo-cup-12oz',
    name: 'Bamboo Cup 12oz',
    category: 'cups',
    material: 'Bamboo',
    description: 'Large bamboo cup perfect for coffee, tea, and smoothies',
    specifications: [
      '100% biodegradable',
      'Double wall insulation',
      'Comfortable grip',
      'Premium finish'
    ],
    dimensions: '12oz (350ml)',
    packingUnit: '50 pcs/pack',
    cartonSize: '1000 pcs/carton',
    wholesalePrice: 11.00,
    retailPrice: 16.50,
    image: '/images/products/container.png',
    features: ['Large size', 'Coffee shop quality', 'Insulated']
  },
  {
    id: 'sugarcane-cup-8oz',
    name: 'Sugarcane Cup 8oz',
    category: 'cups',
    material: 'Sugarcane',
    description: 'Eco-friendly sugarcane cup for everyday beverages',
    specifications: [
      '100% compostable',
      'Water-based coating',
      'Suitable for hot and cold',
      'Economical choice'
    ],
    dimensions: '8oz (240ml)',
    packingUnit: '50 pcs/pack',
    cartonSize: '1000 pcs/carton',
    wholesalePrice: 7.50,
    retailPrice: 11.00,
    image: '/images/products/container.png',
    features: ['Affordable', 'Multi-use', 'Value pack']
  },

  // Cutlery
  {
    id: 'bamboo-cutlery-set',
    name: 'Bamboo Cutlery Set',
    category: 'cutlery',
    material: 'Bamboo',
    description: 'Complete cutlery set with fork, knife, and spoon',
    specifications: [
      '100% biodegradable',
      'Smooth finish',
      'Splinter-free',
      'Strong and durable'
    ],
    dimensions: '16cm length',
    packingUnit: '100 sets/pack',
    cartonSize: '1000 sets/carton',
    wholesalePrice: 8.00,
    retailPrice: 12.00,
    image: '/images/products/cutlery.png',
    features: ['Complete set', 'Natural color', 'Ergonomic design']
  },
  {
    id: 'bamboo-fork',
    name: 'Bamboo Fork',
    category: 'cutlery',
    material: 'Bamboo',
    description: 'Individual bamboo fork, sturdy and eco-friendly',
    specifications: [
      '100% biodegradable',
      'Heat resistant',
      'Natural bamboo',
      'Food grade quality'
    ],
    dimensions: '16cm length',
    packingUnit: '100 pcs/pack',
    cartonSize: '3000 pcs/carton',
    wholesalePrice: 3.00,
    retailPrice: 4.50,
    image: '/images/products/cutlery.png',
    features: ['Individual piece', 'Bulk available', 'Strong tines']
  },
  {
    id: 'bamboo-knife',
    name: 'Bamboo Knife',
    category: 'cutlery',
    material: 'Bamboo',
    description: 'Bamboo knife with serrated edge for easy cutting',
    specifications: [
      '100% biodegradable',
      'Serrated edge',
      'Comfortable grip',
      'Safe to use'
    ],
    dimensions: '16cm length',
    packingUnit: '100 pcs/pack',
    cartonSize: '3000 pcs/carton',
    wholesalePrice: 3.00,
    retailPrice: 4.50,
    image: '/images/products/knife.png',
    features: ['Effective cutting', 'Comfortable handle', 'Lightweight']
  },
  {
    id: 'bamboo-spoon',
    name: 'Bamboo Spoon',
    category: 'cutlery',
    material: 'Bamboo',
    description: 'Versatile bamboo spoon for all types of foods',
    specifications: [
      '100% biodegradable',
      'Smooth bowl',
      'Comfortable handle',
      'Multi-purpose'
    ],
    dimensions: '16cm length',
    packingUnit: '100 pcs/pack',
    cartonSize: '3000 pcs/carton',
    wholesalePrice: 3.00,
    retailPrice: 4.50,
    image: '/images/products/cutlery.png',
    features: ['Perfect bowl shape', 'Versatile', 'Smooth finish']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '📦' },
  { id: 'plates', name: 'Plates', icon: '🍽️' },
  { id: 'bowls', name: 'Bowls', icon: '🥣' },
  { id: 'containers', name: 'Containers', icon: '📦' },
  { id: 'cups', name: 'Cups', icon: '☕' },
  { id: 'cutlery', name: 'Cutlery', icon: '🍴' }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductsByMaterial = (material: 'Bamboo' | 'Sugarcane'): Product[] => {
  return products.filter(product => product.material === material);
};
import { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'joe-swash',
    name: 'Joe Swash Signature Fist',
    price: 299.95,
    image: '/danny.jpg', // Temporarily using Danny's image as placeholder for better quality
    description: 'Experience the authentic power of Joe Swash with this premium replica fist. Perfect for fans who want to bring home a piece of celebrity history.',
    features: [
      '100% authentic celebrity impression',
      'Premium medical-grade silicone',
      'Life-sized proportions',
      'Certificate of authenticity included',
      'Limited edition release'
    ],
    inStock: true
  },
  {
    id: 'kerry-katona',
    name: 'Kerry Katona Power Fist',
    price: 279.95,
    image: '/kerry.jpg',
    description: 'Channel the strength of Kerry Katona with this exclusive fist replica. A must-have for collectors and enthusiasts alike.',
    features: [
      'Exact replica from original mold',
      'Hypoallergenic materials',
      'Detailed texture reproduction',
      'Signed certificate available',
      'Collectors item #0342'
    ],
    inStock: true
  },
  {
    id: 'gemma-collins',
    name: 'The GC Glamour Fist',
    price: 349.95,
    image: '/gemma.jpg',
    description: 'The one and only GC brings you this fabulous fist replica. Darling, you know you want it!',
    features: [
      'Diva-approved design',
      'Sparkle-infused finish option',
      'Extra glamorous packaging',
      'GC authenticity guarantee',
      'VIP collector series'
    ],
    inStock: true
  },
  {
    id: 'danny-dyer',
    name: 'Danny Dyer Proper Fist',
    price: 319.95,
    image: '/danny.jpg',
    description: "Get yourself a proper bit of Danny Dyer with this authentic fist replica. It's the real deal, sorted!",
    features: [
      'Proper hard construction',
      'East End authentic design',
      'Signature knuckle detail',
      'Comes with Danny quote card',
      'Limited cockney edition'
    ],
    inStock: true
  },
  {
    id: 'katie-price',
    name: 'Katie Price Glamour Model Fist',
    price: 329.95,
    image: '/katie.jpg',
    description: 'The ultimate Katie Price collectible - a stunning fist replica that captures her iconic presence.',
    features: [
      'Glamour model precision',
      'Pink special edition available',
      'Rhinestone accent options',
      'Pricey authenticity seal',
      'Jordan legacy collection'
    ],
    inStock: true
  },
  {
    id: 'rylan-clark',
    name: 'Rylan Clark Showbiz Fist',
    price: 289.95,
    image: '/rylan.jpg',
    description: 'Bring home the entertainment with Rylan\'s signature fist replica. Perfect for the ultimate fan collection!',
    features: [
      'Extra white teeth smile guarantee',
      'Entertainment-grade quality',
      'Glitter option available',
      'TV personality approved',
      'Essex excellence certified'
    ],
    inStock: true
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3)
}
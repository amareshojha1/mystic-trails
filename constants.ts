
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Smudge Incense Sticks',
    category: 'Incense',
    price: 350,
    description: '100% organic sticks handcrafted from recycled temple flowers and natural resins.',
    image: 'https://images.unsplash.com/photo-1602930282465-983f4b470007?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    tags: ['organic', 'smudge', 'temple-flowers']
  },
  {
    id: '2',
    name: 'Natural Sambrani Cups',
    category: 'Incense',
    price: 420,
    description: 'Traditional Sambrani experience using charcoal-free flower base.',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    tags: ['traditional', 'purifying']
  },
  {
    id: '3',
    name: 'Organic Loban Cones',
    category: 'Incense',
    price: 280,
    description: 'Purifying loban mixed with petal powder for a soulful ritual.',
    image: 'https://images.unsplash.com/photo-1612470030588-517865768565?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    tags: ['loban', 'ritualistic']
  },
  {
    id: '4',
    name: 'Dry Flower Candles',
    category: 'Lifestyle',
    price: 650,
    description: 'Soy wax candles infused with real dried temple flowers.',
    image: 'https://images.unsplash.com/photo-1602871734360-14979e2f9d6a?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    tags: ['decor', 'candles', 'sustainable']
  },
  {
    id: '5',
    name: 'Linen Mists',
    category: 'Lifestyle',
    price: 550,
    description: 'Fragrant mists derived from pure floral extracts and essential oils.',
    image: 'https://images.unsplash.com/photo-1611082216849-b8567f3f350e?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    tags: ['fresh', 'mist', 'floral']
  },
  {
    id: '6',
    name: 'The Festive Hamper',
    category: 'Hampers',
    price: 2000,
    description: 'A complete collection for a grand celebration. Includes all signature scents.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    tags: ['gift', 'luxury', 'festive']
  },
  {
    id: '7',
    name: 'The Premium Hamper',
    category: 'Hampers',
    price: 1400,
    description: 'A curated selection of our most-loved products for mindful gifting.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    tags: ['gift', 'curated']
  },
  {
    id: '8',
    name: 'The Celebration Hamper',
    category: 'Hampers',
    price: 1200,
    description: 'A thoughtful gesture of appreciation with essential floral products.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    tags: ['gift', 'affordable']
  }
];

export const CATEGORIES: string[] = ['All', 'Incense', 'Lifestyle', 'Hampers'];

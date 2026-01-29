
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'Incense Sticks' | 'Dhoop' | 'Essential Oils' | 'Accessories';

export interface ScentRecommendation {
  name: string;
  reason: string;
  matchingProductId: string;
}

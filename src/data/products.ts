export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  roast: string;
  origin: string;
  size: string;
  notes: string[];
  bestFor: string[];
  image: string;
  affiliateUrl: string;
  summary: string;
  verdict: string;
  score: number;
  featured?: boolean;
  status: 'active' | 'hold';
};

export const products: Product[] = [
  { id: 1, slug: 'kafe-hmong-ethiopia-lily', name: 'Ethiopia Lily Coffee', brand: 'KAFE HMONG', roast: 'Light–Medium', origin: 'Ethiopia', size: 'See seller', notes: ['Floral','Berry','Full body'], bestFor: ['Pour over','Black coffee'], image: '/products/01-ethiopia-lily.jpeg', affiliateUrl: 'https://s.shopee.co.th/1ADrWpgDk', summary:'Aromatic, fruit-led coffee for drinkers who want a lively black cup.', verdict:'The most expressive choice in this launch set for pour-over drinkers.', score:4.7, featured: true, status: 'active' },
  { id: 2, slug: 'agape-panama-light-250g', name: 'Panama Light Roast 250g', brand: 'AGAPE', roast: 'Light', origin: 'Chiang Rai, Thailand', size: '250g', notes: ['Clean','Bright','Aromatic'], bestFor: ['Pour over','Filter'], image: '/products/02-panama.jpeg', affiliateUrl: 'https://s.shopee.co.th/4qFTcWcMFu', summary:'A clean light roast aimed at clarity, aroma and easy filter brewing.', verdict:'A sensible entry point for anyone moving from medium roast to lighter coffee.', score:4.5, featured: true, status: 'active' },
  { id: 3, slug: 'agape-caramel-medium-500g', name: 'Caramel Medium Roast 500g', brand: 'AGAPE', roast: 'Medium', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Caramel','Toffee','Sweet'], bestFor: ['Americano','Drip','Daily coffee'], image: '/products/03-caramel.jpeg', affiliateUrl: 'https://s.shopee.co.th/1gIRqkzmXg', summary:'Sweet-leaning medium roast with a familiar caramel direction.', verdict:'The safest all-rounder for a household that brews coffee several ways.', score:4.6, featured: true, status: 'active' },
  { id: 4, slug: 'agape-chocolate-dark-500g', name: 'Chocolate Dark Roast 500g', brand: 'AGAPE', roast: 'Dark', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Dark chocolate','Cocoa','Bold'], bestFor: ['Espresso','Milk drinks'], image: '/products/04-chocolate.jpeg', affiliateUrl: 'https://s.shopee.co.th/8fSCBiF6xG', summary:'Deep cocoa character and enough intensity to hold up in milk.', verdict:'Choose this when chocolate flavor matters more than acidity or floral aroma.', score:4.5, featured: true, status: 'active' },
  { id: 5, slug: 'agape-espresso-blend-500g', name: 'Espresso Blend Dark Roast 500g', brand: 'AGAPE', roast: 'Dark', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Bold','Roasty','Milk-friendly'], bestFor: ['Espresso','Latte','Iced coffee'], image: '/products/05-espresso-blend.jpeg', affiliateUrl: 'https://s.shopee.co.th/4AzmpV1LB0', summary:'A straightforward dark espresso blend built for body and milk drinks.', verdict:'Best suited to home espresso, iced lattes and drinkers who prefer low brightness.', score:4.4, featured: true, status: 'active' },
  { id: 6, slug: 'agape-chocolate-dark-500g-alt', name: 'Chocolate Dark Roast 500g — Alternate Listing', brand: 'AGAPE', roast: 'Dark', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Dark chocolate','Cocoa','Bold'], bestFor: ['Espresso','Milk drinks'], image: '/products/06-chocolate-alt.jpeg', affiliateUrl: 'https://s.shopee.co.th/8fSCBwIny4', summary:'An alternate listing for AGAPE’s chocolate-forward dark roast.', verdict:'Useful as a second buying option; compare seller availability before ordering.', score:4.5, status: 'active' },
  { id: 7, slug: 'agape-japanese-rice-light-250g', name: 'Japanese Rice Light Roast 250g', brand: 'AGAPE', roast: 'Light', origin: 'Chiang Rai, Thailand', size: '250g', notes: ['Corn','Popcorn','Butter'], bestFor: ['Pour over','Filter','Experimental cups'], image: '/products/07-japanese-rice.jpeg', affiliateUrl: 'https://s.shopee.co.th/7fZf0CAuKZ', summary:'An unusual savory-sweet profile with popcorn and buttery cues.', verdict:'The adventurous pick—interesting for filter drinkers bored with standard flavor profiles.', score:4.3, featured: true, status: 'active' },
  { id: 8, slug: 'escent-doi-chang-1kg', name: 'Doi Chang Premium Arabica 1kg', brand: 'ESCENT Coffee', roast: 'Medium–Dark', origin: 'Doi Chang, Thailand', size: '1kg (500g × 2)', notes: ['Balanced','Rich','Everyday'], bestFor: ['Home espresso','Office','Daily coffee'], image: '/products/08-doi-chang.jpeg', affiliateUrl: 'https://s.shopee.co.th/8fSCCESrFA', summary:'A larger-format Thai Arabica option for frequent, dependable brewing.', verdict:'The practical volume choice for homes or offices that finish coffee quickly.', score:4.4, featured: true, status: 'active' }
];

export const activeProducts = products.filter(p => p.status === 'active');

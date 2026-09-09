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
{ id: 1, slug: 'kafe-hmong-ethiopia-lily', name: 'Ethiopia Lily Coffee', brand: 'KAFE HMONG', roast: 'Light–Medium', origin: 'Ethiopia', size: 'See seller', notes: ['Floral','Berry','Full body'], bestFor: ['Pour over','Black coffee'], image: '/products/01-ethiopia-lily.jpeg', affiliateUrl: 'https://s.shopee.co.th/1ADrWpgDk', summary:'กาแฟหอมเด่นในโทนผลไม้ เหมาะกับคนที่ชอบกาแฟดำรสสดใสมีชีวิตชีวา', verdict:'ตัวเลือกที่โดดเด่นที่สุดในชุดเปิดตัวสำหรับคนรัก Pour Over และกลิ่นรสที่ชัดเจน', score:4.7, featured: true, status: 'active' },
  { id: 2, slug: 'agape-panama-light-250g', name: 'Panama Light Roast 250g', brand: 'AGAPE', roast: 'Light', origin: 'Chiang Rai, Thailand', size: '250g', notes: ['Clean','Bright','Aromatic'], bestFor: ['Pour over','Filter'], image: '/products/02-panama.jpeg', affiliateUrl: 'https://s.shopee.co.th/4qFTcWcMFu', summary:'กาแฟคั่วอ่อนรสสะอาด เน้นความใสและกลิ่นหอม ชงแบบ Filter ได้ง่าย', verdict:'จุดเริ่มต้นที่ดีสำหรับคนที่กำลังขยับจากคั่วกลางมาลองกาแฟคั่วอ่อน', score:4.5, featured: true, status: 'active' },
  { id: 3, slug: 'agape-caramel-medium-500g', name: 'Caramel Medium Roast 500g', brand: 'AGAPE', roast: 'Medium', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Caramel','Toffee','Sweet'], bestFor: ['Americano','Drip','Daily coffee'], image: '/products/03-caramel.jpeg', affiliateUrl: 'https://s.shopee.co.th/1gIRqkzmXg', summary:'กาแฟคั่วกลางโทนหวานคาราเมล ดื่มง่ายและคุ้นเคย', verdict:'ตัวเลือกอเนกประสงค์สำหรับบ้านที่ชงกาแฟหลายรูปแบบและต้องการรสชาติที่เข้าถึงง่าย', score:4.6, featured: true, status: 'active' },
  { id: 4, slug: 'agape-chocolate-dark-500g', name: 'Chocolate Dark Roast 500g', brand: 'AGAPE', roast: 'Dark', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Dark chocolate','Cocoa','Bold'], bestFor: ['Espresso','Milk drinks'], image: '/products/04-chocolate.jpeg', affiliateUrl: 'https://s.shopee.co.th/8fSCBiF6xG', summary:'โทนโกโก้เข้มและรสหนักแน่นพอที่จะยังชัดเจนเมื่อผสมนม', verdict:'เหมาะเมื่อคุณให้ความสำคัญกับรสช็อกโกแลตมากกว่าความเปรี้ยวหรือกลิ่นดอกไม้', score:4.5, featured: true, status: 'active' },
  { id: 5, slug: 'agape-espresso-blend-500g', name: 'Espresso Blend Dark Roast 500g', brand: 'AGAPE', roast: 'Dark', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Bold','Roasty','Milk-friendly'], bestFor: ['Espresso','Latte','Iced coffee'], image: '/products/05-espresso-blend.jpeg', affiliateUrl: 'https://s.shopee.co.th/4AzmpV1LB0', summary:'Espresso Blend คั่วเข้มที่เน้นบอดี้และออกแบบมาสำหรับเมนูนม', verdict:'เหมาะกับเครื่อง Espresso ที่บ้าน Iced Latte และคนที่ไม่ชอบรสเปรี้ยวเด่น', score:4.4, featured: true, status: 'active' },
  { id: 6, slug: 'agape-chocolate-dark-500g-alt', name: 'Chocolate Dark Roast 500g — Alternate Listing', brand: 'AGAPE', roast: 'Dark', origin: 'Chiang Rai, Thailand', size: '500g', notes: ['Dark chocolate','Cocoa','Bold'], bestFor: ['Espresso','Milk drinks'], image: '/products/06-chocolate-alt.jpeg', affiliateUrl: 'https://s.shopee.co.th/8fSCBwIny4', summary:'อีกหนึ่งตัวเลือกของกาแฟ AGAPE คั่วเข้มที่โดดเด่นด้วยโทนช็อกโกแลต', verdict:'ใช้เป็นตัวเลือกสำรองในการสั่งซื้อ ควรเปรียบเทียบสต็อกและรายละเอียดจากหน้าร้านก่อนตัดสินใจ', score:4.5, status: 'active' },
  { id: 7, slug: 'agape-japanese-rice-light-250g', name: 'Japanese Rice Light Roast 250g', brand: 'AGAPE', roast: 'Light', origin: 'Chiang Rai, Thailand', size: '250g', notes: ['Corn','Popcorn','Butter'], bestFor: ['Pour over','Filter','Experimental cups'], image: '/products/07-japanese-rice.jpeg', affiliateUrl: 'https://s.shopee.co.th/7fZf0CAuKZ', summary:'รสชาติหวานเค็มที่แตกต่าง พร้อมโทน Popcorn และเนย', verdict:'ตัวเลือกสำหรับสายทดลอง เหมาะกับคนชง Filter ที่อยากออกจากโทนรสชาติแบบเดิม', score:4.3, featured: true, status: 'active' },
  { id: 8, slug: 'escent-doi-chang-1kg', name: 'Doi Chang Premium Arabica 1kg', brand: 'ESCENT Coffee', roast: 'Medium–Dark', origin: 'Doi Chang, Thailand', size: '1kg (500g × 2)', notes: ['Balanced','Rich','Everyday'], bestFor: ['Home espresso','Office','Daily coffee'], image: '/products/08-doi-chang.jpeg', affiliateUrl: 'https://s.shopee.co.th/8fSCCESrFA', summary:'เมล็ด Arabica ไทยขนาดใหญ่สำหรับคนที่ชงบ่อยและต้องการรสชาติไว้ใจได้', verdict:'ตัวเลือกคุ้มค่าสำหรับบ้านหรือสำนักงานที่ใช้เมล็ดกาแฟปริมาณมาก', score:4.4, featured: true, status: 'active' }
];

export const activeProducts = products.filter(p => p.status === 'active');

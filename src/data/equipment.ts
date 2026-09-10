export type EquipmentCategory = {
  name: string;
  description: string;
  icon: string;
};

export const equipmentStore = {
  slug: 'brewing-equipment-store',
  name: 'หน้าร้านอุปกรณ์ชงกาแฟแนะนำ',
  affiliateUrl: 'https://s.shopee.co.th/3LQjmVTcwM',
  image: '/equipment/brewing-equipment-store.webp',
  status: 'active' as const,
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    name: 'เครื่องชงกาแฟ',
    icon: '☕',
    description: 'เลือกเครื่องให้เหมาะกับพื้นที่ งบประมาณ และเมนูที่ชงเป็นประจำ',
  },
  {
    name: 'เครื่องบดเมล็ดกาแฟ',
    icon: '◉',
    description: 'หัวใจของรสชาติที่สม่ำเสมอ ตั้งแต่ Pour Over จนถึง Espresso',
  },
  {
    name: 'อุปกรณ์ดริป',
    icon: '◇',
    description: 'ดริปเปอร์ กาดริป กระดาษกรอง เครื่องชั่ง และ Server สำหรับชงที่บ้าน',
  },
  {
    name: 'อุปกรณ์เสริมบาริสต้า',
    icon: '✦',
    description: 'Tamper, Milk Pitcher, Knock Box และอุปกรณ์ดูแลเครื่องชง',
  },
];

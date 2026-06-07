export type Category =
  | '家電' | '美妝' | '服飾' | '食品' | '3C' | '家居' | '母嬰' | '運動'

export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  category: Category
  image: string
  rating: number
  reviewCount: number
  tags: string[]
}

const CATEGORIES: Category[] = ['家電', '美妝', '服飾', '食品', '3C', '家居', '母嬰', '運動']

const TEMPLATES: Record<Category, { names: string[]; tags: string[] }> = {
  家電: {
    names: [
      '智能掃地機器人', '變頻冷氣', '滾筒洗衣機', '蒸氣電熨斗', '空氣清淨機',
      '除濕機', '電暖器', '電磁爐', '微波爐', '烤箱', '電鍋', '果汁機',
      '咖啡機', '洗碗機', '冰箱', '吸塵器', '電風扇', '暖氣機',
    ],
    tags: ['家電', '生活家電', '廚房家電', '節能'],
  },
  美妝: {
    names: [
      '保濕精華液', '防曬乳', '粉底液', '眼影盤', '口紅', '睫毛膏',
      '卸妝水', '洗面乳', '面膜', '化妝水', '乳液', '精華油',
      '修容餅', '眉筆', '氣墊粉餅', '護唇膏', '身體乳', '護手霜',
    ],
    tags: ['美妝', '保養', '彩妝', '韓系'],
  },
  服飾: {
    names: [
      '棉質T恤', '牛仔褲', '運動外套', '羽絨背心', '針織毛衣',
      '格紋襯衫', '寬褲', '連身洋裝', '風衣外套', '皮革夾克',
      '休閒短褲', '瑜珈褲', '帽T', '西裝外套', '百褶裙',
    ],
    tags: ['服飾', '男裝', '女裝', '穿搭'],
  },
  食品: {
    names: [
      '有機燕麥', '黑糖珍珠', '海苔脆片', '蜂蜜檸檬飲', '堅果禮盒',
      '義大利麵', '泡麵', '餅乾禮盒', '咖啡豆', '綠茶粉',
      '藜麥', '鮭魚罐頭', '番茄醬', '橄欖油', '蜂蜜',
    ],
    tags: ['食品', '有機', '零食', '飲品'],
  },
  '3C': {
    names: [
      '無線藍牙耳機', '智慧手錶', '行動電源', '機械鍵盤', '無線滑鼠',
      '電競螢幕', '網路攝影機', 'USB集線器', '固態硬碟', '記憶體',
      '顯示卡', '主機板', '散熱風扇', '電競耳機', '遊戲手把',
    ],
    tags: ['3C', '電腦', '手機周邊', '電競'],
  },
  家居: {
    names: [
      '北歐風收納盒', '記憶枕', '乳膠床墊', '竹製砧板', '不銹鋼鍋組',
      '香氛蠟燭', '壁掛時鐘', '收納架', '植物盆栽', '窗簾',
      '地墊', '浴巾組', '衣架組', '抽屜收納盒', '馬克杯',
    ],
    tags: ['家居', '收納', '寢具', '廚房'],
  },
  母嬰: {
    names: [
      '嬰兒奶粉', '學習水杯', '安撫奶嘴', '嬰兒推車', '揹巾',
      '嬰兒床', '音樂玩具', '浴盆', '濕紙巾', '嬰兒洗髮精',
      '學步鞋', '防護角條', '嬰兒監視器', '哺乳枕', '奶瓶消毒鍋',
    ],
    tags: ['母嬰', '寶寶', '孕婦', '玩具'],
  },
  運動: {
    names: [
      '瑜珈墊', '啞鈴組', '彈力帶', '跑步機', '飛輪車',
      '拳擊沙包', '籃球', '網球拍', '游泳護目鏡', '登山背包',
      '運動水壺', '護膝', '跳繩', '健腹輪', '平衡板',
    ],
    tags: ['運動', '健身', '戶外', '瑜珈'],
  },
}

const BRANDS = ['品牌A', '品牌B', '品牌C', '品牌D', '品牌E', '名牌', '精品', '超值']
const ADJECTIVES = ['超值', '限量', '熱銷', '精選', '高效', '智能', '環保', '頂級', '輕量', '專業']

function randomInt(min: number, max: number, seed: number): number {
  const x = Math.sin(seed) * 10000
  return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min
}

function pickItem<T>(arr: T[], seed: number): T {
  return arr[randomInt(0, arr.length - 1, seed)]
}

function generateProduct(index: number): Product {
  const catIndex = index % CATEGORIES.length
  const category = CATEGORIES[catIndex]
  const tmpl = TEMPLATES[category]

  const nameIndex = randomInt(0, tmpl.names.length - 1, index * 7)
  const adjIndex = randomInt(0, ADJECTIVES.length - 1, index * 13)
  const brandIndex = randomInt(0, BRANDS.length - 1, index * 17)

  const baseName = tmpl.names[nameIndex]
  const adj = ADJECTIVES[adjIndex]
  const brand = BRANDS[brandIndex]
  const name = `${brand} ${adj}${baseName}`

  const price = randomInt(199, 9999, index * 3)
  const originalPrice = Math.round(price * (1 + randomInt(10, 40, index * 11) / 100))
  const rating = randomInt(35, 50, index * 5) / 10
  const reviewCount = randomInt(10, 3200, index * 19)

  const tagCount = randomInt(1, 3, index * 23)
  const tags: string[] = []
  for (let t = 0; t < tagCount; t++) {
    const tag = pickItem(tmpl.tags, index * 29 + t)
    if (!tags.includes(tag)) tags.push(tag)
  }

  const colorSeed = randomInt(100, 999, index * 37)
  const image = `https://placehold.co/400x400/${colorSeed}/${Math.abs(colorSeed - 500)}?text=${encodeURIComponent(baseName.slice(0, 4))}`

  return {
    id: `prod-${String(index + 1).padStart(4, '0')}`,
    name,
    price,
    originalPrice,
    category,
    image,
    rating,
    reviewCount,
    tags,
  }
}

export const products: Product[] = Array.from({ length: 600 }, (_, i) => generateProduct(i))

export function searchProducts(query: string, category?: Category): Product[] {
  const q = query.toLowerCase()
  return products.filter(p => {
    const matchQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    const matchCategory = !category || p.category === category
    return matchQuery && matchCategory
  })
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter(p => p.category === category)
}

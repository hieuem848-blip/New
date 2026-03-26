export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string; // slug
  image: string;
  badge?: string;
  isCustomizable?: boolean;
  rating: number;
  reviews: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
  price: number;
};

export const categories: Category[] = [
  { id: "all", name: "Tất cả", slug: "all", description: "Tất cả sản phẩm" },
  { id: "banh-kem", name: "Bánh kem", slug: "banh-kem", description: "Bánh kem sinh nhật, bánh kem đặc biệt" },
  { id: "banh-kem-mini", name: "Bánh kem mini", slug: "banh-kem-mini", description: "Bánh kem mini dễ thương" },
  {
    id: "topping", name: "Topping", slug: "topping", description: "Topping trái cây tươi",
  },
  { id: "do-uong", name: "Đồ uống", slug: "do-uong", description: "Đồ uống đi kèm" },
];

export const toppingSubCategories = [
  { id: "dau", name: "Dâu", emoji: "🍓" },
  { id: "kiwi", name: "Kiwi", emoji: "🥝" },
  { id: "nho", name: "Nho", emoji: "🍇" },
  { id: "xoai", name: "Xoài", emoji: "🥭" },
];

export const products: Product[] = [
  // Bánh kem
  {
    id: "p1", name: "Bánh Kem Sinh Nhật Classic",
    description: "Bánh kem bông lan mềm mịn phủ kem tươi vanilla, trang trí hoa kem tinh tế. Phù hợp cho mọi dịp sinh nhật.",
    basePrice: 320000, category: "banh-kem",
    image: "/cake1.jpg", badge: "Bán chạy", rating: 4.9, reviews: 128, isCustomizable: true,
  },
  {
    id: "p2", name: "Bánh Kem Dâu Tây Tươi",
    description: "Lớp kem tươi mềm xen kẽ với dâu tây tươi ngọt lịm. Được làm từ nguyên liệu nhập khẩu cao cấp.",
    basePrice: 380000, category: "banh-kem",
    image: "/cake2.jpg", badge: "Mới", rating: 4.8, reviews: 95, isCustomizable: true,
  },
  {
    id: "p3", name: "Bánh Kem Socola Bỉ",
    description: "Bánh kem socola đậm đà từ socola Bỉ nguyên chất, ganache mịn và lớp mousse tan chảy.",
    basePrice: 420000, category: "banh-kem",
    image: "/cake3.jpg", badge: undefined, rating: 4.7, reviews: 72, isCustomizable: true,
  },
  {
    id: "p4", name: "Bánh Kem Trà Matcha Nhật",
    description: "Hương vị trà xanh matcha Nhật thuần khiết, lớp kem nhẹ nhàng thanh mát, phủ bột matcha premium.",
    basePrice: 399000, category: "banh-kem",
    image: "/cake.jpg", badge: "Hot", rating: 4.9, reviews: 110, isCustomizable: true,
  },
  {
    id: "p5", name: "Bánh Kem Caramel Mặn",
    description: "Sự kết hợp độc đáo giữa caramel ngọt và muối biển, tạo nên hương vị phức tạp, khó quên.",
    basePrice: 360000, category: "banh-kem",
    image: "/cakebg.png", badge: undefined, rating: 4.6, reviews: 58,
  },
  {
    id: "p6", name: "Bánh Kem Red Velvet",
    description: "Bánh nhung đỏ truyền thống với lớp cream cheese frosting mịn màng, màu đỏ rực rỡ, vị chua nhẹ.",
    basePrice: 410000, category: "banh-kem",
    image: "/cake1.jpg", badge: "Yêu thích", rating: 4.8, reviews: 89,
  },

  // Bánh kem mini
  {
    id: "m1", name: "Mini Cake Dâu Tây",
    description: "Bánh kem mini ngọt ngào với dâu tây tươi, một phần vừa đủ cho 1-2 người thưởng thức.",
    basePrice: 85000, category: "banh-kem-mini",
    image: "/cake2.jpg", badge: "Cute", rating: 4.9, reviews: 203,
  },
  {
    id: "m2", name: "Mini Cake Matcha",
    description: "Bánh kem mini hương matcha tinh tế, phủ kem tươi và bột trà xanh. Bé xinh dễ thương.",
    basePrice: 90000, category: "banh-kem-mini",
    image: "/cake3.jpg", badge: undefined, rating: 4.7, reviews: 156,
  },
  {
    id: "m3", name: "Mini Cake Việt Quất",
    description: "Bánh mini với blueberry tươi từ Đà Lạt, phủ kem tươi nhẹ nhàng và topping berries đủ loại.",
    basePrice: 95000, category: "banh-kem-mini",
    image: "/cake.jpg", badge: "Mới", rating: 4.8, reviews: 78,
  },
  {
    id: "m4", name: "Mini Cake Vani Classic",
    description: "Bánh kem mini vani truyền thống, kem bơ mịn mượt, thích hợp làm quà tặng nhỏ xinh.",
    basePrice: 75000, category: "banh-kem-mini",
    image: "/cake1.jpg", badge: undefined, rating: 4.6, reviews: 134,
  },

  // Topping dâu
  {
    id: "t1", name: "Topping Dâu Tây Tươi",
    description: "Dâu tây Đà Lạt tươi ngọt, rửa sạch và cắt sẵn. Dùng để trang trí bánh hoặc ăn kèm.",
    basePrice: 35000, category: "topping",
    image: "/cake2.jpg", badge: undefined, rating: 4.8, reviews: 45,
  },
  {
    id: "t2", name: "Topping Dâu Macaron",
    description: "Macaron dâu tây mini đặt lên bánh, vị ngọt thanh hòa quyện màu sắc tươi tắn.",
    basePrice: 45000, category: "topping",
    image: "/cake3.jpg", badge: undefined, rating: 4.7, reviews: 32,
  },

  // Topping kiwi
  {
    id: "t3", name: "Topping Kiwi Tươi",
    description: "Kiwi nhập khẩu New Zealand, vị chua ngọt tự nhiên, giàu vitamin C, trang trí đẹp mắt.",
    basePrice: 40000, category: "topping",
    image: "/cake.jpg", badge: undefined, rating: 4.6, reviews: 28,
  },

  // Topping nho
  {
    id: "t4", name: "Topping Nho Mẫu Đơn",
    description: "Nho Ninh Thuận hạt mọng, không hạt, ngọt đậm đà. Tăng thêm màu sắc cho chiếc bánh.",
    basePrice: 38000, category: "topping",
    image: "/cake1.jpg", badge: undefined, rating: 4.7, reviews: 51,
  },
  {
    id: "t5", name: "Topping Nho Đỏ Úc",
    description: "Nho đỏ Úc cao cấp, hạt căng mọng, vị ngọt tự nhiên không cần đường. Sang trọng và đẹp.",
    basePrice: 55000, category: "topping",
    image: "/cake2.jpg", badge: "Premium", rating: 4.9, reviews: 37,
  },

  // Topping xoài
  {
    id: "t6", name: "Topping Xoài Cát Chu",
    description: "Xoài Cát Chu Đồng Tháp thơm ngon, thịt vàng ươm, ngọt đậm đà. Kết hợp tuyệt vời với kem.",
    basePrice: 35000, category: "topping",
    image: "/cake3.jpg", badge: "Mùa hè", rating: 4.8, reviews: 64,
  },

  // Đồ uống
  {
    id: "d1", name: "Trà Sữa Koi",
    description: "Trà sữa đài loan ngọt thơm, kết hợp hoàn hảo với các loại bánh kem của Witchy Bakery.",
    basePrice: 55000, category: "do-uong",
    image: "/cake.jpg", badge: undefined, rating: 4.7, reviews: 89,
  },
  {
    id: "d2", name: "Cà Phê Sữa Đá",
    description: "Cà phê robusta Đắk Lắk pha phin truyền thống, sữa đặc ngọt thơm, đá xay mịn.",
    basePrice: 45000, category: "do-uong",
    image: "/cake1.jpg", badge: "Best Seller", rating: 4.8, reviews: 120,
  },
  {
    id: "d3", name: "Nước Ép Dâu Tươi",
    description: "Dâu tây Đà Lạt ép tươi 100%, không đường, không phẩm màu. Thanh mát và ngọt tự nhiên.",
    basePrice: 50000, category: "do-uong",
    image: "/cake2.jpg", badge: "Healthy", rating: 4.9, reviews: 67,
  },
  {
    id: "d4", name: "Matcha Latte",
    description: "Matcha Nhật grade A pha cùng sữa tươi nguyên kem, vị đắng nhẹ hòa quyện béo ngậy.",
    basePrice: 60000, category: "do-uong",
    image: "/cake3.jpg", badge: undefined, rating: 4.8, reviews: 93,
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

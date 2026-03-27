// Chạy: node src/seed.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./libs/db.js";
import Category from "./models/Category.js";
import Product from "./models/Product.js";
import ProductImage from "./models/ProductImage.js";
import ProductVariant from "./models/ProductVariant.js";

dotenv.config();

// ─── CATEGORIES ──────────────────────────────────────────────
const categoryData = [
  { name: "Bánh kem", slug: "banh-kem", description: "Bánh kem sinh nhật, kỷ niệm đủ kích cỡ" },
  { name: "Bánh kem mini", slug: "banh-kem-mini", description: "Bánh kem mini dễ thương 1–2 người" },
  { name: "Topping", slug: "topping", description: "Topping trái cây tươi trang trí bánh" },
  { name: "Đồ uống", slug: "do-uong", description: "Đồ uống đi kèm bánh" },
];

// ─── PRODUCTS ────────────────────────────────────────────────
const productData = [
  // ── BÁNH KEM ─────────────────────────
  {
    cat: "banh-kem",
    name: "Bánh Kem Sinh Nhật Classic",
    desc: "Bánh kem vanilla truyền thống",
    price: 350000,
    custom: true,
    img: "https://images.unsplash.com/photo-1558636508-e0969431e349?w=600&q=80",
    variants: [
      ["16cm","4–6 người",350000],
      ["20cm","8–10 người",490000],
      ["24cm","12–16 người",690000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Dâu Tây Tươi",
    desc: "Dâu tây tươi cao cấp",
    price: 390000,
    custom: true,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    variants: [
      ["16cm","4–6 người",390000],
      ["20cm","8–10 người",560000],
      ["24cm","12–16 người",770000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Socola Bỉ",
    desc: "Socola Bỉ đậm đà",
    price: 430000,
    custom: true,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    variants: [
      ["16cm","4–6 người",430000],
      ["20cm","8–10 người",620000],
      ["24cm","12–16 người",820000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Matcha Nhật",
    desc: "Matcha premium",
    price: 410000,
    custom: true,
    img: "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600&q=80",
    variants: [
      ["16cm","4–6 người",410000],
      ["20cm","8–10 người",600000],
      ["24cm","12–16 người",800000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Red Velvet",
    desc: "Cream cheese",
    price: 420000,
    custom: true,
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    variants: [
      ["16cm","4–6 người",420000],
      ["20cm","8–10 người",600000],
      ["24cm","12–16 người",800000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Caramel Mặn",
    desc: "Caramel + muối biển",
    price: 370000,
    custom: false,
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&q=80",
    variants: [
      ["16cm","4–6 người",370000],
      ["20cm","8–10 người",540000],
      ["24cm","12–16 người",730000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Tiramisu",
    desc: "Phong cách Ý",
    price: 470000,
    custom: true,
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    variants: [
      ["16cm","4–6 người",470000],
      ["20cm","8–10 người",660000],
      ["24cm","12–16 người",880000],
    ],
  },
  {
    cat: "banh-kem",
    name: "Bánh Kem Chanh Leo",
    desc: "Chua ngọt thanh",
    price: 360000,
    custom: false,
    img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80",
    variants: [
      ["16cm","4–6 người",360000],
      ["20cm","8–10 người",520000],
      ["24cm","12–16 người",710000],
    ],
  },

  // ── MINI CAKE  ────────────────────────
  {
    cat: "banh-kem-mini",
    name: "Mini Cake Vanilla Hoa Hồng",
    desc: "Mini cake xinh xắn",
    price: 129000,
    custom: true,
    img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80",
    variants: [],
  },
  {
    cat: "banh-kem-mini",
    name: "Mini Cake Dâu Tây",
    desc: "Dâu tươi",
    price: 139000,
    custom: false,
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    variants: [],
  },
  {
    cat: "banh-kem-mini",
    name: "Mini Cake Socola",
    desc: "Socola đậm",
    price: 149000,
    custom: false,
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    variants: [],
  },
  {
    cat: "banh-kem-mini",
    name: "Mini Cake Matcha Đậu Đỏ",
    desc: "Matcha Nhật",
    price: 155000,
    custom: true,
    img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
    variants: [],
  },
  {
    cat: "banh-kem-mini",
    name: "Mini Cake Set 6 Hộp",
    desc: "Set mix",
    price: 520000,
    custom: false,
    img: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&q=80",
    variants: [],
  },

  // ── TOPPING ─────────────────────────
  {
    cat: "topping",
    name: "Dâu Tây 500g",
    desc: "Dâu tươi",
    price: 75000,
    custom: false,
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping",
    name: "Việt Quất 200g",
    desc: "Nhập khẩu",
    price: 95000,
    custom: false,
    img: "https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping",
    name: "Kiwi Vàng",
    desc: "Ngọt",
    price: 50000,
    custom: false,
    img: "https://images.unsplash.com/photo-1618897996318-5a901fa0ca71?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping",
    name: "Xoài",
    desc: "Cắt sẵn",
    price: 60000,
    custom: false,
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping",
    name: "Nho Đen",
    desc: "Không hạt",
    price: 85000,
    custom: false,
    img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping",
    name: "Set Trái Cây",
    desc: "Mix",
    price: 165000,
    custom: false,
    img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80",
    variants: [],
  },

  // ── ĐỒ UỐNG ─────────────────────────
  {
    cat: "do-uong",
    name: "Trà Sữa Matcha",
    desc: "Matcha",
    price: 59000,
    custom: false,
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong",
    name: "Cà Phê Sữa",
    desc: "Việt Nam",
    price: 39000,
    custom: false,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong",
    name: "Soda Dâu",
    desc: "Mát lạnh",
    price: 45000,
    custom: false,
    img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong",
    name: "Nước Cam",
    desc: "Tươi",
    price: 49000,
    custom: false,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong",
    name: "Chocolate Nóng",
    desc: "Cacao Bỉ",
    price: 65000,
    custom: false,
    img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=600&q=80",
    variants: [],
  },
];

// ─── SEED ────────────────────────────────────────────────────
async function seed() {
  try {
    await connectDB();
    console.log("✅ Kết nối MongoDB");

    await Category.deleteMany({});
    await Product.deleteMany({});
    await ProductImage.deleteMany({});
    await ProductVariant.deleteMany({});
    console.log("🗑️ Clear data");

    const cats = await Category.insertMany(categoryData);
    const catMap = Object.fromEntries(cats.map(c => [c.slug, c._id]));

    let p = 0, i = 0, v = 0;

    for (const item of productData) {
      const product = await Product.create({
        name: item.name,
        description: item.desc,
        basePrice: item.price,
        isCustomizable: item.custom,
        category: catMap[item.cat],
        status: "active",
      });
      p++;

      await ProductImage.create({
        product: product._id,
        imageUrl: item.img,
        isMain: true,
      });
      i++;

      if (item.variants.length > 0) {
        await ProductVariant.insertMany(
          item.variants.map(([size, serving, price]) => ({
            product: product._id,
            size,
            serving,
            price,
          }))
        );
        v += item.variants.length;
      }
    }

    console.log(`🎂 ${p} sản phẩm | 🖼️ ${i} ảnh | 📦 ${v} variants`);
    console.log("🎉 DONE!");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
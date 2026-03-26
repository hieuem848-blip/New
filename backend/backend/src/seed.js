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
  { name: "Bánh kem",      slug: "banh-kem",      description: "Bánh kem sinh nhật, kỷ niệm đủ kích cỡ" },
  { name: "Bánh kem mini", slug: "banh-kem-mini", description: "Bánh kem mini dễ thương 1–2 người" },
  { name: "Topping",       slug: "topping",        description: "Topping trái cây tươi trang trí bánh" },
  { name: "Đồ uống",       slug: "do-uong",        description: "Đồ uống đi kèm bánh" },
];

// ─── PRODUCTS ────────────────────────────────────────────────
// variants: tất cả bánh kem đều có 3 size, mini có 2 size, topping/đồ uống không có variant
const productData = [
  // ── BÁNH KEM (8 sản phẩm, mỗi cái 3 size) ──────────────
  {
    cat: "banh-kem", name: "Bánh Kem Sinh Nhật Classic",
    desc: "Bánh kem bông lan mềm mịn phủ kem tươi vanilla, trang trí hoa kem tinh tế. Phù hợp cho mọi dịp sinh nhật.",
    price: 320000, custom: true,
    img: "https://images.unsplash.com/photo-1558636508-e0969431e349?w=600&q=80",
    variants: [["16cm","4–6 người",320000],["20cm","8–10 người",480000],["24cm","12–16 người",680000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Dâu Tây Tươi",
    desc: "Lớp kem tươi mềm xen kẽ với dâu tây tươi ngọt lịm. Làm từ nguyên liệu nhập khẩu cao cấp.",
    price: 380000, custom: true,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    variants: [["16cm","4–6 người",380000],["20cm","8–10 người",550000],["24cm","12–16 người",750000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Socola Bỉ",
    desc: "Bánh kem socola đậm đà từ socola Bỉ nguyên chất, ganache mịn và lớp mousse tan chảy.",
    price: 420000, custom: true,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    variants: [["16cm","4–6 người",420000],["20cm","8–10 người",590000],["24cm","12–16 người",790000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Trà Matcha Nhật",
    desc: "Hương vị trà xanh matcha Nhật thuần khiết, lớp kem nhẹ nhàng thanh mát, phủ bột matcha premium.",
    price: 399000, custom: true,
    img: "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600&q=80",
    variants: [["16cm","4–6 người",399000],["20cm","8–10 người",569000],["24cm","12–16 người",769000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Red Velvet",
    desc: "Bánh nhung đỏ truyền thống với lớp cream cheese frosting mịn màng, màu đỏ rực rỡ, vị chua nhẹ.",
    price: 410000, custom: true,
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
    variants: [["16cm","4–6 người",410000],["20cm","8–10 người",580000],["24cm","12–16 người",780000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Caramel Mặn",
    desc: "Sự kết hợp độc đáo giữa caramel ngọt và muối biển, tạo nên hương vị phức tạp, khó quên.",
    price: 360000, custom: false,
    img: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&q=80",
    variants: [["16cm","4–6 người",360000],["20cm","8–10 người",520000],["24cm","12–16 người",710000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Tiramisu",
    desc: "Phong cách Ý cổ điển với cà phê espresso, mascarpone béo ngậy và lớp bột cacao phủ trên cùng.",
    price: 450000, custom: true,
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    variants: [["16cm","4–6 người",450000],["20cm","8–10 người",630000],["24cm","12–16 người",850000]],
  },
  {
    cat: "banh-kem", name: "Bánh Kem Chanh Leo",
    desc: "Vị chua ngọt thanh mát của chanh leo kết hợp kem tươi, thích hợp cho những ngày hè.",
    price: 350000, custom: false,
    img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80",
    variants: [["16cm","4–6 người",350000],["20cm","8–10 người",500000],["24cm","12–16 người",690000]],
  },

  // ── BÁNH KEM MINI (5 sản phẩm, 2 size) ──────────────────
  {
    cat: "banh-kem-mini", name: "Mini Cake Vanilla Hoa Hồng",
    desc: "Bánh mini xinh xắn phủ kem vanilla, trang trí hoa hồng kem bơ tinh tế. Phù hợp tặng quà cá nhân.",
    price: 89000, custom: true,
    img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80",
    variants: [["8cm","1–2 người",89000],["10cm","2–3 người",120000]],
  },
  {
    cat: "banh-kem-mini", name: "Mini Cake Dâu Tây",
    desc: "Bánh mini với dâu tây tươi nguyên quả trên lớp kem trắng tinh. Dễ thương, thơm ngon.",
    price: 95000, custom: false,
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    variants: [["8cm","1–2 người",95000],["10cm","2–3 người",129000]],
  },
  {
    cat: "banh-kem-mini", name: "Mini Cake Socola Đen",
    desc: "Bánh mini socola đậm đà, phủ ganache bóng mượt, thích hợp cho tín đồ socola.",
    price: 99000, custom: false,
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    variants: [["8cm","1–2 người",99000],["10cm","2–3 người",135000]],
  },
  {
    cat: "banh-kem-mini", name: "Mini Cake Matcha Đậu Đỏ",
    desc: "Kết hợp matcha và đậu đỏ theo phong cách Nhật Bản, thanh đạm và không quá ngọt.",
    price: 105000, custom: true,
    img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80",
    variants: [["8cm","1–2 người",105000],["10cm","2–3 người",145000]],
  },
  {
    cat: "banh-kem-mini", name: "Mini Cake Set 6 Hộp",
    desc: "Set 6 bánh mini đa hương vị: vanilla, dâu, socola, matcha, caramel, chanh leo. Lý tưởng để làm quà.",
    price: 490000, custom: false,
    img: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&q=80",
    variants: [["Set 6 hộp","6 người",490000]],
  },

  // ── TOPPING (6 sản phẩm, không có variant) ───────────────
  {
    cat: "topping", name: "Topping Dâu Tây Tươi (500g)",
    desc: "Dâu tây Đà Lạt tươi ngon, ngọt đỏ. Dùng trang trí bánh hoặc ăn kèm.",
    price: 65000, custom: false,
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping", name: "Topping Việt Quất Tươi (200g)",
    desc: "Việt quất nhập khẩu tươi, căng mọng. Giàu dinh dưỡng, hoàn hảo để trang trí bánh.",
    price: 85000, custom: false,
    img: "https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping", name: "Topping Kiwi Vàng (3 quả)",
    desc: "Kiwi vàng ngọt thanh, lát mỏng trang trí. Tạo điểm nhấn màu sắc cho bánh kem.",
    price: 45000, custom: false,
    img: "https://images.unsplash.com/photo-1618897996318-5a901fa0ca71?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping", name: "Topping Xoài Cắt Sẵn (300g)",
    desc: "Xoài cát Hòa Lộc ngọt thơm, cắt miếng sẵn. Phù hợp trang trí bánh kem tropical.",
    price: 55000, custom: false,
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping", name: "Topping Nho Đen Không Hạt (250g)",
    desc: "Nho đen không hạt nhập khẩu, căng tròn bóng mượt. Tạo vẻ sang trọng cho bánh.",
    price: 75000, custom: false,
    img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80",
    variants: [],
  },
  {
    cat: "topping", name: "Set Topping Mix Trái Cây",
    desc: "Set trái cây hỗn hợp gồm dâu, việt quất, kiwi, nho. Đủ topping cho 1 bánh 20cm.",
    price: 150000, custom: false,
    img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80",
    variants: [],
  },

  // ── ĐỒ UỐNG (5 sản phẩm, không có variant) ───────────────
  {
    cat: "do-uong", name: "Trà Sữa Matcha Trân Châu",
    desc: "Trà sữa matcha pha từ matcha ceremonial grade, kết hợp sữa tươi béo ngậy và trân châu giòn.",
    price: 55000, custom: false,
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong", name: "Cà Phê Sữa Đá Witchy",
    desc: "Cà phê Arabica đặc trưng, kết hợp sữa đặc Ông Thọ và đá viên. Đậm đà theo phong cách Việt.",
    price: 45000, custom: false,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong", name: "Soda Dâu Tươi",
    desc: "Nước soda mát lạnh pha với siro dâu tươi và dâu nguyên quả. Chua ngọt sảng khoái.",
    price: 40000, custom: false,
    img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong", name: "Nước Ép Cam Tươi",
    desc: "Cam vắt tươi 100% không đường, giàu vitamin C. Đi kèm hoàn hảo với bánh ngọt.",
    price: 50000, custom: false,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
    variants: [],
  },
  {
    cat: "do-uong", name: "Chocolate Nóng Bỉ",
    desc: "Chocolate nóng pha từ bột cacao Bỉ nguyên chất, thêm marshmallow và kem tươi phủ trên.",
    price: 60000, custom: false,
    img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=600&q=80",
    variants: [],
  },
];

// ─── SEED ────────────────────────────────────────────────────
async function seed() {
  try {
    await connectDB();
    console.log("✅ Kết nối MongoDB thành công");

    await Category.deleteMany({});
    await Product.deleteMany({});
    await ProductImage.deleteMany({});
    await ProductVariant.deleteMany({});
    console.log("🗑️  Đã xoá dữ liệu cũ");

    // Thêm categories
    const cats = await Category.insertMany(categoryData);
    const catMap = Object.fromEntries(cats.map(c => [c.slug, c._id]));
    console.log(`📁 ${cats.length} danh mục`);

    let pCount = 0, iCount = 0, vCount = 0;

    for (const p of productData) {
      const catId = catMap[p.cat];
      if (!catId) { console.warn("⚠️ Không có category:", p.cat); continue; }

      const product = await Product.create({
        name: p.name, description: p.desc,
        basePrice: p.price, isCustomizable: p.custom,
        category: catId, status: "active",
      });
      pCount++;

      // Ảnh
      await ProductImage.create({ product: product._id, imageUrl: p.img, isMain: true });
      iCount++;

      // Variants
      if (p.variants.length > 0) {
        await ProductVariant.insertMany(
          p.variants.map(([size, serving, price]) => ({ product: product._id, size, serving, price }))
        );
        vCount += p.variants.length;
      }
    }

    console.log(`🎂 ${pCount} sản phẩm | 🖼️  ${iCount} ảnh | 📦 ${vCount} variants`);
    console.log("\n🎉 Seed xong! Mở http://localhost:3000/products để xem kết quả.");
  } catch (err) {
    console.error("❌ Lỗi:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();

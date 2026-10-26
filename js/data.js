/**
 * NEXUS MAGIC STOREFRONT - MASTER DATA & CONFIG
 * Hệ thống dữ liệu sản phẩm, cấu hình cửa hàng & đánh giá
 */

const CONFIG = {
  SHOP_NAME: "Nexus X Magic",
  SHOP_TAGLINE: "Đại lý ủy quyền gia dụng Magic chính hãng tại Việt Nam",
  ADVISOR_NAME: "Nexus",
  HOTLINE: "0787712566",
  HOTLINE_DISPLAY: "0787 712 566",
  EMAIL: "hotro@nexus-magic.vn",
  ADDRESS: "Khu Công Nghệ Cao, TP. Thủ Đức, TP. Hồ Chí Minh",
  DEFAULT_PRICE_MODE: "daily", // "daily" | "camp"
  FLASH_SALE_END_HOURS: 14,    // Giờ đếm ngược flash sale
  BANK: {
    BANK_ID: "MB",
    BANK_NAME: "Ngân hàng TMCP Quân Đội (MB Bank)",
    ACCOUNT_NO: "0787712566",
    ACCOUNT_NAME: "NEXUS MAGIC VIETNAM"
  },
  COUPONS: {
    "CAMP": { type: "camp", label: "Giá Chiến Dịch Flash Sale" },
    "NEXUS10": { type: "percent", value: 10, label: "Giảm 10% đơn hàng" },
    "FREESHIP": { type: "shipping", value: 30000, label: "Miễn phí vận chuyển (30k)" },
    "MAGIC50": { type: "fixed", value: 50000, minOrder: 400000, label: "Giảm 50.000đ cho đơn từ 400k" }
  }
};

const CATEGORIES = [
  { id: "all", name: "Tất cả sản phẩm", short: "Tất cả", desc: "10 sản phẩm Magic công nghệ chính hãng", icon: "grid_view" },
  { id: "rang", name: "Chăm sóc răng miệng", short: "Răng miệng", desc: "Tăm nước áp lực cao & Bàn chải sóng âm", icon: "dentistry" },
  { id: "binh", name: "Bình giữ nhiệt Inox 316", short: "Bình giữ nhiệt", desc: "Vỏ inox 304, lòng inox 316 y tế cao cấp", icon: "water_bottle" },
  { id: "quat", name: "Quạt sạc & Làm mát", short: "Quạt sạc mini", desc: "Làm lạnh sò bán dẫn Peltier & Quạt để bàn xoay 360°", icon: "mode_fan" }
];

const INOX_DESC = "Vỏ inox 304, lòng inox 316 y tế kháng khuẩn";

const PRODUCTS = [
  {
    id: "b02pro",
    cat: "rang",
    shortName: "B‑02PRO",
    name: "Tăm nước Magic B‑02PRO",
    tagline: "Sạch tận kẽ. Gọn trong túi.",
    listPrice: 990000,
    dailyPrice: 369000,
    campPrice: 329000,
    badge: "Bán chạy nhất",
    rating: 4.9,
    reviewCount: 142,
    warranty: "12 tháng chính hãng (1 đổi 1 trong 30 ngày)",
    cardImg: "images/sq_tn1.jpg",
    images: [
      "images/sq_tn1.jpg",
      "images/tn2.jpg",
      "images/tn1.jpg",
      "images/tn3.jpg",
      "images/tn4.jpg",
      "images/tn5.jpg",
      "images/h_tn5.jpg"
    ],
    highlights: [
      "3 chế độ làm sạch: Êm dịu (Soft), Tiêu chuẩn (Normal) và Xung nhịp (Pulse) massage nướu.",
      "Áp lực nước cực mạnh 20–120 PSI, xung tần số 1.400 nhịp/phút làm sạch 99.9% mảng bám.",
      "Tặng kèm 4 đầu tăm chuyên dụng: Tiêu chuẩn, Nha chu, Chỉnh nha và Cạo lưỡi (xoay 360°).",
      "Chuẩn chống nước tuyệt đối IPX7, an toàn rửa trực tiếp dưới vòi nước hoặc dùng trong phòng tắm.",
      "Pin sạc 800mAh, thời lượng dùng bền bỉ lên đến 20 ngày mỗi lần sạc đầy.",
      "Thiết kế gấp gọn thông minh, bình chứa nước thu gọn tiện lợi mang đi làm, du lịch."
    ],
    specs: {
      "Chế độ hoạt động": "3 chế độ: Soft (Êm ái), Normal (Tiêu chuẩn), Pulse (Massage)",
      "Áp lực nước": "20 – 120 PSI, xung nhịp 1.400 lần/phút",
      "Phụ kiện kèm theo": "4 đầu tăm (tiêu chuẩn, nha chu, chỉnh nha, cạo lưỡi), cáp sạc",
      "Dung lượng pin": "800mAh (dùng đến khoảng 20 ngày)",
      "Chuẩn sạc": "Cổng sạc an toàn kèm nắp che chống nước",
      "Kháng nước": "IPX7 toàn thân",
      "Thiết kế": "Thân gấp gọn tiết kiệm diện tích",
      "Bảo hành": "12 tháng 1 đổi 1"
    }
  },
  {
    id: "b26",
    cat: "rang",
    shortName: "B‑26",
    name: "Bàn chải điện sóng âm Magic B‑26",
    tagline: "Đủ 2 phút. Đều mọi vùng răng.",
    listPrice: 990000,
    dailyPrice: 459000,
    campPrice: 419000,
    badge: "Công nghệ Sonic",
    rating: 4.8,
    reviewCount: 96,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Tím Pastel", hex: "#c9b8ec", img: "images/c_bc_tim.jpg" },
      { name: "Trắng Tinh Khôi", hex: "#f4f4f2", img: "images/c_bc_trang.jpg" },
      { name: "Xanh Mint", hex: "#a9cbea", img: "images/c_bc_xanh.jpg" }
    ],
    cardImg: "images/c_bc_xanh.jpg",
    images: [
      "images/c_bc_xanh.jpg",
      "images/c_bc_tim.jpg",
      "images/c_bc_trang.jpg",
      "images/bc_tim.jpg"
    ],
    highlights: [
      "Công nghệ rung sóng âm Sonic mạnh mẽ lên đến 40.000 lần/phút đánh bay mảng bám.",
      "5 chế độ chăm sóc chuyên sâu: Clean (Làm sạch), White (Làm trắng), Sensitive (Nhạy cảm), Gum Care (Chăm sóc nướu), Polish (Đánh bóng).",
      "Tính năng Smart Timer: Hẹn giờ khoa học 2 phút, tự ngắt nhịp 30 giây nhắc đổi góc phần tư hàm răng.",
      "Pin Lithium cao cấp cho thời gian sử dụng đến 30 ngày chỉ với một lần sạc.",
      "Chuẩn kháng nước cao cấp IPX7, trọng lượng siêu nhẹ chỉ 112g không mỏi tay.",
      "Trọn bộ tặng kèm 2 đầu bàn chải lông DuPont mềm mại ôm sát kẽ răng."
    ],
    specs: {
      "Chế độ chải": "5 chế độ (Clean, White, Sensitive, Gum Care, Polish)",
      "Tần số rung": "40.000 xung/phút",
      "Bộ hẹn giờ": "2 phút chuẩn nha khoa, nhắc chuyển vùng mỗi 30 giây",
      "Thời lượng pin": "Khoảng 30 ngày dùng liên tục",
      "Kháng nước": "IPX7 chuẩn quốc tế",
      "Trọng lượng": "112g (cực kỳ nhẹ và đầm tay)",
      "Phụ kiện": "Thân máy, 2 đầu bàn chải DuPont, cáp sạc",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "a014",
    cat: "quat",
    shortName: "A‑014",
    name: "Quạt cầm tay làm lạnh bán dẫn Magic A‑014",
    tagline: "Đóng băng tức thì trong 3–5 giây.",
    listPrice: 690000,
    dailyPrice: 409000,
    campPrice: 359000,
    badge: "Công nghệ Peltier",
    rating: 4.9,
    reviewCount: 118,
    warranty: "12 tháng chính hãng",
    cardImg: "images/sq_qc3.jpg",
    images: [
      "images/sq_qc3.jpg",
      "images/qc1.jpg",
      "images/qc2.jpg",
      "images/qc3.jpg",
      "images/qc4.jpg",
      "images/qc5.jpg",
      "images/qc6.jpg",
      "images/h_qc3.jpg"
    ],
    highlights: [
      "Trang bị phiến bán dẫn Peltier làm lạnh trực tiếp – tiếp xúc da mát buốt sau 3 đến 5 giây.",
      "5 cấp độ gió tùy chỉnh mượt mà từ 20% đến 100% công suất thổi bay oi bức mùa hè.",
      "Pin dung lượng thực 2.000mAh, hoạt động liên tục từ 1 – 8 giờ tùy chế độ gió.",
      "Cổng sạc Type-C hiện đại, sạc nhanh đầy pin tiện lợi qua củ sạc hoặc sạc dự phòng.",
      "Trọng lượng nhỏ gọn chỉ 210g, kèm dây đeo cổ tay tiện mang theo đi chơi, du lịch, dã ngoại.",
      "Vỏ nhựa ABS cao cấp chống bám vân tay và tản nhiệt tối ưu."
    ],
    specs: {
      "Công nghệ làm lạnh": "Mặt kim loại bán dẫn Peltier, hạ nhiệt sau 3–5s",
      "Dung lượng pin": "2.000mAh",
      "Thời gian sử dụng": "1 – 8 giờ tùy cấp gió và chế độ làm lạnh",
      "Cổng sạc": "USB Type-C tiện lợi (sạc đầy 3–4 giờ)",
      "Cấp độ gió": "5 mức điều chỉnh (20% – 100%)",
      "Công suất": "6W",
      "Kích thước & Trọng lượng": "9 × 20 cm, nặng 210g",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "a028",
    cat: "quat",
    shortName: "A‑028",
    name: "Quạt sạc để bàn Magic A‑028",
    tagline: "Xoay 360°. Mát êm dịu cả khi cúp điện.",
    listPrice: 790000,
    dailyPrice: 539000,
    campPrice: 499000,
    badge: "Pin khủng 3600mAh",
    rating: 4.7,
    reviewCount: 64,
    warranty: "12 tháng chính hãng",
    cardImg: "images/c_qb.jpg",
    images: [
      "images/c_qb.jpg",
      "images/qb.jpg"
    ],
    highlights: [
      "Pin sạc Lithium dung lượng lớn 3.600mAh, giữ mát cho cả phòng khi mất điện đột ngột.",
      "5 cấp độ gió tự nhiên vận hành êm ái nhờ thiết kế 7 cánh quạt khí động học.",
      "Khớp xoay linh hoạt 360° đa góc giúp điều hướng làn gió mát đến chính xác vị trí mong muốn.",
      "Chức năng hẹn giờ thông minh từ 1 đến 9 tiếng, an tâm khi ngủ không lo bị lạnh.",
      "Màn hình kỹ thuật số LED hiển thị sắc nét mức pin và chế độ gió.",
      "Công suất tiết kiệm điện 8,5W, chân đế chống trượt vững vàng trên bàn làm việc."
    ],
    specs: {
      "Dung lượng pin": "3.600mAh",
      "Số cánh quạt": "7 cánh khí động học giảm tiếng ồn",
      "Chế độ gió": "5 tốc độ gió êm ái",
      "Tính năng đặc biệt": "Xoay 360 độ, hẹn giờ tắt 1–9 tiếng, màn hình LED",
      "Công suất": "8,5W",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "mc500",
    cat: "binh",
    shortName: "MC500",
    name: "Bình giữ nhiệt Magic MC500 (500ml)",
    tagline: "Nhỏ gọn thanh lịch cho ngày dài đến trường, công sở.",
    ml: 500,
    listPrice: 690000,
    dailyPrice: 409000,
    campPrice: 359000,
    badge: "Inox 316",
    rating: 4.8,
    reviewCount: 88,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Trắng Sữa", hex: "#f1ece4", img: "images/m500_trang.jpg" },
      { name: "Vàng Bơ", hex: "#f4d54a", img: "images/m500_vang.jpg" },
      { name: "Hồng Baby", hex: "#f2a7c3", img: "images/m500_hong.jpg" }
    ],
    cardImg: "images/m500_trang.jpg",
    images: [
      "images/m500_trang.jpg",
      "images/m500_vang.jpg",
      "images/m500_hong.jpg",
      "images/m500_all.jpg"
    ],
    highlights: [
      "Dung tích chuẩn 500ml vừa vặn mọi ngăn ba lô, túi xách đi làm đi học.",
      "Cấu tạo 5 lớp cách nhiệt chân không: Vỏ inox 304 bền bỉ, ruột inox 316 y tế giữ trọn hương vị nước uống.",
      "Khả năng giữ nóng và giữ lạnh liên tục từ 8 đến 12 tiếng không đổ mồ hôi thân bình.",
      "Nắp đậy silicon chống rò rỉ tuyệt đối kèm quai xách công thái học chắc chắn.",
      "3 tông màu pastel thời thượng: Trắng sữa, Vàng bơ và Hồng baby."
    ],
    specs: {
      "Dung tích": "500ml",
      "Chất liệu": INOX_DESC,
      "Thời gian giữ nhiệt": "Giữ nóng 8–10h, giữ lạnh 12–16h",
      "Nắp bình": "Nắp vặn kín hơi có quai xách silicon",
      "Màu sắc": "Trắng, Vàng, Hồng",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "mc570",
    cat: "binh",
    shortName: "MC570",
    name: "Bình giữ nhiệt Magic MC570 (570ml)",
    tagline: "Bốn màu trẻ trung. Mức giá ưu đãi nhất dòng Inox 316.",
    ml: 570,
    listPrice: 590000,
    dailyPrice: 309000,
    campPrice: 289000,
    badge: "Giá tốt nhất",
    rating: 4.9,
    reviewCount: 165,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Hồng Phấn", hex: "#e9b3cf", img: "images/m570_hong.jpg" },
      { name: "Xám Bạc", hex: "#d9dadb", img: "images/m570_xam.jpg" },
      { name: "Nâu Cà Phê", hex: "#b9a58a", img: "images/m570_nau.jpg" },
      { name: "Vàng Nắng", hex: "#f1c232", img: "images/m570_vang.jpg" }
    ],
    cardImg: "images/m570_nau.jpg",
    images: [
      "images/m570_nau.jpg",
      "images/m570_hong.jpg",
      "images/m570_xam.jpg",
      "images/m570_vang.jpg",
      "images/m570_all.jpg"
    ],
    highlights: [
      "Dung tích 570ml cân đối nhất, vừa vặn đựng cà phê nóng/lạnh hoặc nước detox cả ngày.",
      "Ruột bình đúc nguyên khối inox 316 kháng axit, không bị thôi nhiễm kim loại kể cả khi đựng nước chua hay trà.",
      "Mức giá dễ tiếp cận nhất trong toàn bộ sưu tập bình giữ nhiệt cao cấp Magic.",
      "4 màu sắc đa dạng cá tính: Hồng phấn, Xám bạc, Nâu cà phê và Vàng nắng.",
      "Miệng bình rộng dễ dàng bỏ đá viên to và cọ rửa vệ sinh nhanh chóng."
    ],
    specs: {
      "Dung tích": "570ml",
      "Chất liệu": INOX_DESC,
      "Khả năng giữ nhiệt": "Nóng 8h / Lạnh 12h",
      "Kích thước": "Gọn nhẹ, để vừa hộc xe hơi",
      "Màu sắc": "4 màu: Hồng, Xám, Nâu, Vàng",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "mc650",
    cat: "binh",
    shortName: "MC650",
    name: "Bình giữ nhiệt Magic MC650 có ống hút (650ml)",
    tagline: "Ống hút tiện lợi & dây xách năng động khi di chuyển.",
    ml: 650,
    listPrice: 790000,
    dailyPrice: 569000,
    campPrice: 509000,
    badge: "Kèm ống hút",
    rating: 4.8,
    reviewCount: 79,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Kem Trắng", hex: "#eae5da", img: "images/m650_kem.jpg" },
      { name: "Đen Nhám", hex: "#3a3c40", img: "images/m650_den.jpg" }
    ],
    cardImg: "images/m650_kem.jpg",
    images: [
      "images/m650_kem.jpg",
      "images/m650_den.jpg",
      "images/m650_all.jpg"
    ],
    highlights: [
      "Dung tích thoải mái 650ml, thích hợp uống trà sữa, cà phê đá cả buổi.",
      "Tích hợp sẵn ống hút silicon mềm an toàn cho răng miệng, uống nhanh một tay khi lái xe hoặc làm việc.",
      "Kèm dây xách dù thể thao cá tính, tiện cầm nắm khi tập gym hoặc chạy bộ.",
      "Lòng bình inox 316 tráng gương chống bám mùi trà cà phê cực tốt.",
      "2 phiên bản màu tối giản hiện đại: Kem Trắng tao nhã và Đen Nhám phong cách."
    ],
    specs: {
      "Dung tích": "650ml",
      "Chất liệu": INOX_DESC,
      "Phụ kiện tích hợp": "Ống hút silicon cao cấp, dây quai xách thể thao",
      "Khả năng giữ nhiệt": "Nóng 10h / Lạnh 16h",
      "Màu sắc": "Kem, Đen",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "mc870",
    cat: "binh",
    shortName: "MC870",
    name: "Bình giữ nhiệt Magic MC870 nắp bật (870ml)",
    tagline: "870ml dung tích lớn. Nắp bật mở nhanh một nút bấm.",
    ml: 870,
    listPrice: 790000,
    dailyPrice: 529000,
    campPrice: 469000,
    badge: "Dung tích lớn",
    rating: 4.9,
    reviewCount: 92,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Trắng Tuyết", hex: "#e7e9ea", img: "images/m870_trang.jpg" },
      { name: "Vàng Hoàng Gia", hex: "#f1c232", img: "images/m870_vang.jpg" },
      { name: "Hồng Dâu", hex: "#e9b3cf", img: "images/m870_hong.jpg" }
    ],
    cardImg: "images/m870_trang.jpg",
    images: [
      "images/m870_trang.jpg",
      "images/m870_vang.jpg",
      "images/m870_hong.jpg",
      "images/m870_all.jpg"
    ],
    highlights: [
      "Dung tích 870ml cung cấp gần 1 lít nước, giảm thiểu số lần phải đi châm nước.",
      "Cơ chế nắp bật lò xo thông minh: Nhấn một nút mở nắp tức thì, có khóa gài chống bật nắp ngoài ý muốn.",
      "Lòng bình inox 316 y tế tráng bóng cao cấp giữ nguyên hương vị đồ uống tinh khiết.",
      "Thân bình đúc dày dặn cầm đầm tay, đế chống trượt cao su giảm chấn.",
      "3 sắc màu trẻ trung: Trắng tuyết, Vàng hoàng gia và Hồng dâu."
    ],
    specs: {
      "Dung tích": "870ml",
      "Chất liệu": INOX_DESC,
      "Cơ chế nắp": "Nắp bật một chạm kèm chốt an toàn chống rò rỉ",
      "Khả năng giữ nhiệt": "Giữ nóng 12h / Giữ lạnh 18h",
      "Màu sắc": "Trắng, Vàng, Hồng",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "mc1200",
    cat: "binh",
    shortName: "MC1200",
    name: "Bình giữ nhiệt Magic MC1200 quai cầm (1.200ml)",
    tagline: "1,2 lít cực đại cho cả ngày dài vận động.",
    ml: 1200,
    listPrice: 790000,
    dailyPrice: 559000,
    campPrice: 499000,
    badge: "Đại dung tích 1.2L",
    rating: 4.9,
    reviewCount: 104,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Hồng Fuchsia", hex: "#d9338a", img: "images/m1200_hong.jpg" },
      { name: "Trắng Sứ", hex: "#e2e0dc", img: "images/m1200_trang.jpg" },
      { name: "Xanh Cyan", hex: "#2fb8c0", img: "images/m1200_xanh.jpg" }
    ],
    cardImg: "images/m1200_xanh.jpg",
    images: [
      "images/m1200_xanh.jpg",
      "images/m1200_hong.jpg",
      "images/m1200_trang.jpg",
      "images/m1200_all.jpg"
    ],
    highlights: [
      "Dung tích ngoại cỡ 1.200ml lý tưởng cho người tập thể hình, đi phượt, làm việc văn phòng suốt 8 tiếng.",
      "Thiết kế tay cầm công thái học chắc chắn, nâng bình rót nước hoặc uống nhẹ nhàng.",
      "Kèm ống hút lớn tiện lợi và nắp đôi vừa có thể uống trực tiếp vừa dùng được ống hút.",
      "Cấu tạo hợp kim Inox 316 + Inox 304 kết hợp nhựa thực phẩm PP nguyên sinh hoàn toàn không chứa BPA.",
      "3 gam màu rực rỡ thu hút: Xanh cyan, Hồng fuchsia và Trắng sứ."
    ],
    specs: {
      "Dung tích": "1.200ml (1,2 Lít)",
      "Chất liệu": "Ruột Inox 316, Vỏ Inox 304, Nhựa PP thực phẩm không BPA",
      "Phụ kiện": "Tay cầm gắn liền chịu lực, ống hút tiện dụng",
      "Khả năng giữ nhiệt": "Nóng lên tới 14h / Lạnh lên tới 24h",
      "Màu sắc": "Hồng, Trắng, Xanh",
      "Bảo hành": "12 tháng chính hãng"
    }
  },
  {
    id: "mpi480",
    cat: "binh",
    shortName: "MPI480",
    name: "Ly giữ nhiệt cao cấp Magic MPI480 (480ml)",
    tagline: "Đẳng cấp doanh nhân. Mở nắp một tay.",
    ml: 480,
    listPrice: 790000,
    dailyPrice: 549000,
    campPrice: 489000,
    badge: "Phong cách Doanh Nhân",
    rating: 4.9,
    reviewCount: 71,
    warranty: "12 tháng chính hãng",
    colors: [
      { name: "Bạc Ánh Kim", hex: "#b9bdc2", img: "images/mpi_bac.jpg" },
      { name: "Nâu Da Cổ Điển", hex: "#b98c7a", img: "images/mpi_nau.jpg" }
    ],
    cardImg: "images/mpi_bac.jpg",
    images: [
      "images/mpi_bac.jpg",
      "images/mpi_nau.jpg",
      "images/mpi_all.jpg",
      "images/mpi_l1.jpg",
      "images/mpi_l2.jpg",
      "images/mpi_l3.jpg"
    ],
    highlights: [
      "Thiết kế dạng ly giữ nhiệt sang trọng với 2 lớp cách nhiệt chân không công nghệ cao.",
      "Thao tác mở nắp uống chỉ bằng một tay, tối ưu cho doanh nhân và tài xế khi đang lái ô tô.",
      "Lòng ly phủ Inox 316 siêu mịn chống ố vàng và lưu lại cặn cà phê sữa.",
      "Đáy ly thiết kế vừa vặn tuyệt đối với mọi khay giữ cốc xe hơi và bàn làm việc.",
      "2 màu sắc thượng lưu: Bạc Ánh Kim tinh tế và Nâu Da Cổ Điển quý phái."
    ],
    specs: {
      "Dung tích": "480ml",
      "Chất liệu": INOX_DESC,
      "Kiểu dáng": "Ly giữ nhiệt doanh nhân nắp mở một tay",
      "Khả năng giữ nhiệt": "Nóng 6–8h / Lạnh 10–12h",
      "Màu sắc": "Bạc Ánh Kim, Nâu Cổ Điển",
      "Bảo hành": "12 tháng chính hãng"
    }
  }
];

const INITIAL_REVIEWS = [
  {
    id: "rv-1",
    prodId: "b02pro",
    name: "Trần Minh Quân",
    rating: 5,
    date: "24/10/2026",
    color: "Trắng",
    title: "Tăm nước cực mạnh, sạch hơn chỉ nha khoa nhiều!",
    content: "Mình mua đợt sale của Nexus được giá 369k quá hời. Bình nước gấp lại siêu gọn, mang đi làm sau khi ăn trưa xịt cái là sạch bong kẽ răng. Áp lực nấc 2 đã đủ phê rồi, nấc 3 cực mạnh cho ai hay ăn thịt dính răng. Vote 5 sao!",
    verified: true
  },
  {
    id: "rv-2",
    prodId: "b02pro",
    name: "Lê Hoàng Yến",
    rating: 5,
    date: "20/10/2026",
    color: "Trắng",
    title: "Chính hãng Magic, đóng gói rất cẩn thận",
    content: "Nexus giao hàng trong 24h ở HCM. Đóng hộp nguyên seal của Magic có tem bảo hành. Đầy đủ 4 đầu tăm. Nước bắn không bị rỉ ra thân máy, pin dùng 2 tuần nay chưa phải sạc lại.",
    verified: true
  },
  {
    id: "rv-3",
    prodId: "b26",
    name: "Nguyễn Hải Đăng",
    rating: 5,
    date: "18/10/2026",
    color: "Tím Pastel",
    title: "Màu tím rất đẹp, rung êm không ê răng",
    content: "Bàn chải cầm nhẹ tay mà rung 40.000 nhịp cảm giác răng sạch bóng kin kít. Thích nhất là tính năng dừng 30s nhắc đổi bên, sáng nào cũng đúng 2 phút là xong.",
    verified: true
  },
  {
    id: "rv-4",
    prodId: "a014",
    name: "Võ Thúy Kiều",
    rating: 5,
    date: "22/10/2026",
    color: "Trắng",
    title: "Cái tấm lạnh áp vào trán hoặc cổ siêu phê",
    content: "Đúng như quảng cáo, bật chế độ lạnh tầm 4 giây là cái miếng nhôm nó lạnh như cục đá. Đi nắng ngoài đường ghé vào quán áp vào cổ hạ nhiệt cực nhanh. Pin nấc gió vừa xài được cả buổi sáng.",
    verified: true
  },
  {
    id: "rv-5",
    prodId: "mc1200",
    name: "Đặng Tiến Dũng",
    rating: 5,
    date: "21/10/2026",
    color: "Xanh Cyan",
    title: "Bình 1.2 lít to vật vã, giữ đá hơn 20 tiếng",
    content: "Mình mang đi tập gym và đi làm cả ngày. Bỏ đá từ sáng hôm qua đến sáng hôm sau đá vẫn còn nguyên tảng. Lòng inox 316 tráng bóng uống nước không có mùi kim loại hôi như mấy bình chợ. Rất đáng đồng tiền bát gạo!",
    verified: true
  },
  {
    id: "rv-6",
    prodId: "mc570",
    name: "Phạm Thảo Vy",
    rating: 5,
    date: "15/10/2026",
    color: "Hồng Phấn",
    title: "Màu hồng xinh xỉu, giá quá rẻ cho bình inox 316",
    content: "Hơn 300k mà được bình inox 316 y tế Magic chuẩn chỉnh. Vỏ sơn nhám mờ sang chảnh, cầm êm không bám vân tay. Đã giới thiệu cho đồng nghiệp cùng phòng mua thêm 3 cái nữa.",
    verified: true
  }
];

const FAQS = [
  {
    q: "Sản phẩm tại Nexus có đúng chính hãng Magic không?",
    a: "Dạ Nexus là đại lý phân phối chính thức được ủy quyền của Magic tại thị trường Việt Nam. 100% sản phẩm đều có đầy đủ hóa đơn, tem chống hàng giả, số serial chính hãng và chính sách bảo hành điện tử 12 tháng từ nhà sản xuất."
  },
  {
    q: "Chính sách bảo hành và đổi trả tại Nexus như thế nào?",
    a: "Nexus áp dụng chính sách 1 ĐỔI 1 TRONG 30 NGÀY ĐẦU TIÊN nếu phát sinh bất kỳ lỗi nào từ nhà sản xuất. Sản phẩm được bảo hành phần cứng và động cơ trong 12 tháng. Khách hàng chỉ cần đọc số điện thoại đặt hàng, không cần giữ lại phiếu giấy rườm rà."
  },
  {
    q: "Phí vận chuyển và thời gian giao hàng mất bao lâu?",
    a: "Đơn hàng từ 500.000đ được Miễn Phí Vận Chuyển toàn quốc. Các đơn dưới 500k áp dụng đồng giá ship 25.000đ – 30.000đ. Thời gian giao hàng: Nội thành HCM & Hà Nội nhận trong 24h; các tỉnh thành khác từ 2 – 3 ngày làm việc."
  },
  {
    q: "Lòng bình giữ nhiệt Inox 316 có ưu điểm gì vượt trội so với Inox 304 thông thường?",
    a: "Inox 316 là thép không gỉ chuẩn y tế, được bổ sung nguyên tố Molypden (Mo) giúp tăng cường khả năng chống ăn mòn và kháng axit vượt bậc so với Inox 304. Do đó, bạn hoàn toàn có thể dùng bình Magic Inox 316 để đựng cà phê, nước cam, trà detox hay đồ uống có gas mà không lo bị thôi nhiễm kim loại độc hại."
  },
  {
    q: "Phương thức thanh toán nào được hỗ trợ?",
    a: "Bạn có thể chọn nhận hàng - kiểm tra hàng rồi mới thanh toán tiền mặt (COD), hoặc chuyển khoản ngân hàng qua mã VietQR tự động. Khi chọn VietQR, hệ thống sẽ tự sinh mã QR chứa đúng số tiền và mã đơn để bạn quét thanh toán trong 3 giây."
  }
];

// ==========================================
// HỆ THỐNG PHÂN QUYỀN & TÀI KHOẢN (RBAC)
// ==========================================
const ROLES = {
  super_admin: {
    id: "super_admin",
    name: "Super Admin",
    badge: "Toàn quyền",
    desc: "Chủ cửa hàng, giám đốc kỹ thuật & tài chính",
    icon: "shield_person",
    color: "#e5252a",
    bg: "rgba(229, 37, 42, 0.1)"
  },
  telesale: {
    id: "telesale",
    name: "Telesale & Bán Hàng",
    badge: "Xác nhận COD",
    desc: "Gọi khách, xác nhận đơn & áp mã ưu đãi",
    icon: "support_agent",
    color: "#2563eb",
    bg: "rgba(37, 99, 235, 0.1)"
  },
  warehouse: {
    id: "warehouse",
    name: "Kho & Vận Đơn",
    badge: "Tracking ĐVVC",
    desc: "Đóng gói, in vận đơn GHN / Viettel Post",
    icon: "pallet",
    color: "#d97706",
    bg: "rgba(217, 119, 6, 0.1)"
  },
  support: {
    id: "support",
    name: "CSKH & Bảo Hành",
    badge: "1 Đổi 1 / AI Hub",
    desc: "Duyệt reviews, kích hoạt bảo hành, Trợ lý Nexus",
    icon: "build_circle",
    color: "#059669",
    bg: "rgba(5, 150, 105, 0.1)"
  },
  customer: {
    id: "customer",
    name: "Khách Hàng Thành Viên",
    badge: "Nexus ID",
    desc: "Khách hàng mua sắm tích điểm",
    icon: "person",
    color: "#6b7280",
    bg: "rgba(107, 114, 128, 0.1)"
  }
};

const PERMISSION_MATRIX = [
  {
    category: "Doanh Thu & Tài Chính",
    task: "Xem báo cáo KPI, doanh số và lợi nhuận",
    super_admin: "allow",
    telesale: "deny",
    warehouse: "deny",
    support: "deny"
  },
  {
    category: "Doanh Thu & Tài Chính",
    task: "Thay đổi chế độ giá bán (Flash Sale Camp / Daily)",
    super_admin: "allow",
    telesale: "deny",
    warehouse: "deny",
    support: "deny"
  },
  {
    category: "Vận Hành Đơn Hàng",
    task: "Gọi điện xác nhận đơn & chuyển trạng thái 'Đã xác nhận'",
    super_admin: "allow",
    telesale: "allow",
    warehouse: "view",
    support: "view"
  },
  {
    category: "Vận Hành Đơn Hàng",
    task: "Đóng gói hàng, xuất kho & in mã vận đơn ĐVVC",
    super_admin: "allow",
    telesale: "deny",
    warehouse: "allow",
    support: "deny"
  },
  {
    category: "Chăm Sóc Khách Hàng",
    task: "Kiểm duyệt & công khai đánh giá sản phẩm",
    super_admin: "allow",
    telesale: "view",
    warehouse: "deny",
    support: "allow"
  },
  {
    category: "Chăm Sóc Khách Hàng",
    task: "Tiếp nhận đổi trả 30 ngày & bảo hành 12 tháng",
    super_admin: "allow",
    telesale: "view",
    warehouse: "deny",
    support: "allow"
  },
  {
    category: "Bảo Mật & Phân Quyền",
    task: "Tạo nhân sự mới, gán vai trò & phân quyền RBAC",
    super_admin: "allow",
    telesale: "deny",
    warehouse: "deny",
    support: "deny"
  },
  {
    category: "Bảo Mật & Phân Quyền",
    task: "Điều phối & cấu hình kịch bản trợ lý AI Nexus",
    super_admin: "allow",
    telesale: "deny",
    warehouse: "deny",
    support: "allow"
  }
];

const INITIAL_USERS = [];


/* ====== CÀI ĐẶT CỬA HÀNG – sửa tại đây ====== */
const CONFIG = {
  SHOP: "Nexus",
  ADVISOR: "F5Nexus",        // Tên trợ lý tư vấn AI trên trang
  HOTLINE: "0787712566",   // Số hotline của cửa hàng
  PRICE_MODE: "daily",     // "daily" = giá bán hằng ngày, "camp" = giá chiến dịch
  COUPONS: {               // Mã khuyến mãi khách nhập ở giỏ hàng
    CAMP: { type: "camp", label: "giá Camp" }
  }
};
/* ============================================= */

const IMG = {
  "tn1": "images/tn1.jpg",
  "tn2": "images/tn2.jpg",
  "tn3": "images/tn3.jpg",
  "tn4": "images/tn4.jpg",
  "tn5": "images/tn5.jpg",
  "bc_tim": "images/bc_tim.jpg",
  "qb": "images/qb.jpg",
  "qc1": "images/qc1.jpg",
  "qc2": "images/qc2.jpg",
  "qc3": "images/qc3.jpg",
  "qc4": "images/qc4.jpg",
  "qc5": "images/qc5.jpg",
  "qc6": "images/qc6.jpg",
  "m500_all": "images/m500_all.jpg",
  "m500_trang": "images/m500_trang.jpg",
  "m500_vang": "images/m500_vang.jpg",
  "m500_hong": "images/m500_hong.jpg",
  "m570_all": "images/m570_all.jpg",
  "m570_hong": "images/m570_hong.jpg",
  "m570_xam": "images/m570_xam.jpg",
  "m570_nau": "images/m570_nau.jpg",
  "m570_vang": "images/m570_vang.jpg",
  "m650_all": "images/m650_all.jpg",
  "m650_kem": "images/m650_kem.jpg",
  "m650_den": "images/m650_den.jpg",
  "m870_all": "images/m870_all.jpg",
  "m870_trang": "images/m870_trang.jpg",
  "m870_vang": "images/m870_vang.jpg",
  "m870_hong": "images/m870_hong.jpg",
  "m1200_all": "images/m1200_all.jpg",
  "m1200_hong": "images/m1200_hong.jpg",
  "m1200_trang": "images/m1200_trang.jpg",
  "m1200_xanh": "images/m1200_xanh.jpg",
  "mpi_all": "images/mpi_all.jpg",
  "mpi_bac": "images/mpi_bac.jpg",
  "mpi_nau": "images/mpi_nau.jpg",
  "mpi_l1": "images/mpi_l1.jpg",
  "mpi_l2": "images/mpi_l2.jpg",
  "mpi_l3": "images/mpi_l3.jpg",
  "h_tn5": "images/h_tn5.jpg",
  "h_qc3": "images/h_qc3.jpg",
  "sq_tn1": "images/sq_tn1.jpg",
  "sq_qc3": "images/sq_qc3.jpg",
  "c_bc_tim": "images/c_bc_tim.jpg",
  "c_bc_trang": "images/c_bc_trang.jpg",
  "c_bc_xanh": "images/c_bc_xanh.jpg",
  "c_qb": "images/c_qb.jpg"
};
const LOGO = "images/nexus-logo.png";

const ICON = {
  heart:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 20.3s-7.6-4.6-9.4-9.3C1.3 7.7 3.4 4.4 7 4.4c2.1 0 3.6 1.2 5 3 1.4-1.8 2.9-3 5-3 3.6 0 5.7 3.3 4.4 6.6-1.8 4.7-9.4 9.3-9.4 9.3z" stroke-linejoin="round"/></svg>',
  chevL:'<svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2 2 8l6 6"/></svg>',
  chevR:'<svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 2 6 6-6 6"/></svg>',
  chat:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5h16v10.5H9.5L5 20v-4H4z"/><path d="M8 9.5h8M8 12.5h5" stroke-linecap="round"/></svg>',
  shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m8.8 12 2.2 2.2 4.4-4.4" stroke-linecap="round"/></svg>',
  help:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.6" stroke-linecap="round"/><circle cx="12" cy="16.9" r=".9" fill="currentColor" stroke="none"/></svg>',
  cash:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6.5 9.5v5M17.5 9.5v5" stroke-linecap="round"/></svg>',
  compare:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v16M17 4v16M3.5 8.5 7 5l3.5 3.5M13.5 15.5 17 19l3.5-3.5"/></svg>',
  box:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/></svg>',
  user:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.2 4.2-6.3 8-6.3s7 2.1 8 6.3" stroke-linecap="round"/></svg>',
  chart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 20h16M7 16v-5M12 16V6M17 16v-8"/></svg>',
  out:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 16l4-4-4-4M14 12H4"/></svg>',
  in:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M4 12h10M10 8l4 4-4 4"/></svg>',
  arrow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  search:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5.5 5.5" stroke-linecap="round"/></svg>',
  searchBig:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5.5 5.5" stroke-linecap="round"/></svg>',
  checkBig:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17.5 19.5 7"/></svg>',
  phone:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M6.6 3.5h2.7l1.4 4.1-2 1.4a12 12 0 0 0 6.3 6.3l1.4-2 4.1 1.4v2.7a2 2 0 0 1-2.2 2A16.7 16.7 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"/></svg>',
  send:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/></svg>',
  stop:'<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><rect x="1" y="1" width="10" height="10" rx="2" fill="currentColor"/></svg>',
  star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.85 6.08 6.65.72-4.96 4.5 1.42 6.56L12 17.1l-5.96 3.36 1.42-6.56-4.96-4.5 6.65-.72z"/></svg>'
};

const CATS = [
  { id:"all",  name:"Tất cả sản phẩm",      short:"Tất cả",         img:"m570_all",  token:"cua-hang" },
  { id:"rang", name:"Chăm sóc răng miệng",  short:"Răng miệng",     img:"c_bc_xanh", token:"rang-mieng" },
  { id:"binh", name:"Bình giữ nhiệt",        short:"Bình giữ nhiệt", img:"m1200_xanh", token:"binh-giu-nhiet" },
  { id:"quat", name:"Quạt sạc mini",         short:"Quạt sạc",       img:"c_qb",      token:"quat" }
];

const INOX = "Vỏ inox 304, lòng inox 316";
const P = [
  { id:"b02pro", cat:"rang", short:"B‑02PRO", name:"Tăm nước Magic B‑02PRO", tag:"Sạch tận kẽ. Gọn trong túi.",
    list:990000, daily:369000, camp:329000, badge:"Nổi bật", warranty:true, card:"sq_tn1",
    imgs:["sq_tn1","tn2","tn1","tn3","tn4","tn5"],
    hl:["3 chế độ làm sạch: êm dịu, tiêu chuẩn và xung nhịp massage nướu.","Áp lực nước 20–120 PSI, xung 1.400 nhịp mỗi phút.","4 đầu tăm chuyên dụng, đầu xoay 360° tới từng vùng.","Chống nước IPX7, rửa trực tiếp dưới vòi nước.","Pin 800mAh, dùng đến khoảng 20 ngày mỗi lần sạc.","Thân gấp gọn, dễ mang theo khi đi xa."],
    spec:{ chedo:"3 chế độ: êm dịu (Soft), tiêu chuẩn (Normal), xung nhịp (Pulse)", noibat:"Áp lực nước 20–120 PSI; xung 1.400 nhịp/phút; đầu xoay 360°", phukien:"4 đầu tăm: tiêu chuẩn, nha chu, chỉnh nha, cạo lưỡi", pin:"800mAh", sudung:"Đến khoảng 20 ngày mỗi lần sạc", sac:"Cổng micro USB", chongnuoc:"IPX7", thietke:"Gấp gọn", baohanh:"12 tháng" } },
  { id:"b26", cat:"rang", short:"B‑26", name:"Bàn chải điện Magic B‑26", tag:"Đủ 2 phút. Đều mọi vùng.",
    list:990000, daily:459000, camp:419000, warranty:true,
    colors:[{n:"Tím",c:"#c9b8ec",img:"c_bc_tim"},{n:"Trắng",c:"#f4f4f2",img:"c_bc_trang"},{n:"Xanh",c:"#a9cbea",img:"c_bc_xanh"}],
    imgs:["c_bc_tim","c_bc_trang","c_bc_xanh","bc_tim"],
    hl:["5 chế độ chải: làm sạch, làm trắng, răng nhạy cảm, chăm sóc nướu, đánh bóng.","Rung 40.000 lần mỗi phút.","Hẹn giờ 2 phút, nhắc chuyển vùng sau mỗi 30 giây.","Pin dùng khoảng 30 ngày mỗi lần sạc.","Chống nước IPX7, nặng 112g.","Kèm 2 đầu bàn chải."],
    spec:{ chedo:"5 chế độ: làm sạch, làm trắng, nhạy cảm, chăm sóc nướu, đánh bóng", noibat:"Rung 40.000 lần/phút; hẹn giờ 2 phút; nhắc đổi vùng mỗi 30 giây", sudung:"Khoảng 30 ngày mỗi lần sạc", chongnuoc:"IPX7", kichthuoc:"112g", phukien:"2 đầu bàn chải", baohanh:"12 tháng" } },
  { id:"a028", cat:"quat", short:"A‑028", name:"Quạt sạc để bàn Magic A‑028", tag:"Xoay 360°. Mát cả khi mất điện.",
    list:790000, daily:539000, camp:499000, card:"c_qb", imgs:["c_qb","qb"],
    hl:["Pin 3.600mAh, vẫn dùng được khi mất điện.","5 chế độ gió với 7 cánh quạt.","Xoay 360° để đổi hướng gió.","Hẹn giờ tắt từ 1 đến 9 tiếng.","Màn hình LED dễ điều chỉnh.","Công suất 8,5W, gọn cho bàn học và bàn làm việc."],
    spec:{ pin:"3.600mAh", chedo:"5 chế độ gió", congsuat:"8,5W", noibat:"Xoay 360°; hẹn giờ 1–9 giờ; màn hình LED; 7 cánh quạt" } },
  { id:"a014", cat:"quat", short:"A‑014", name:"Quạt cầm tay làm lạnh Magic A‑014", tag:"Mát lạnh trong 3–5 giây.",
    list:690000, daily:409000, camp:359000, warranty:true, card:"sq_qc3",
    imgs:["sq_qc3","qc1","qc2","qc3","qc4","qc5","qc6"],
    hl:["Mặt kim loại làm lạnh Peltier, mát sau khoảng 3–5 giây.","5 cấp gió, từ 20% đến 100% tốc độ.","Pin 2.000mAh, dùng 1–8 giờ tùy cấp gió.","Sạc USB Type‑C, đầy pin trong 3–4 giờ.","Nhỏ gọn, nặng 210g, có dây đeo.","Vỏ nhựa ABS nhẹ, chống bám bẩn."],
    spec:{ pin:"2.000mAh", sudung:"1–8 giờ tùy cấp gió", sac:"USB Type‑C, sạc đầy 3–4 giờ", chedo:"5 cấp gió (20%–100%)", congsuat:"6W", noibat:"Làm lạnh Peltier, mát sau 3–5 giây", chatlieu:"Vỏ nhựa ABS", kichthuoc:"9 × 20 cm, 210g", baohanh:"12 tháng" } },
  { id:"mc500", cat:"binh", short:"MC500", name:"Bình giữ nhiệt Magic MC500", tag:"Nhỏ gọn cho mỗi ngày đi học, đi làm.", ml:500,
    list:690000, daily:409000, camp:359000,
    colors:[{n:"Trắng",c:"#f1ece4",img:"m500_trang"},{n:"Vàng",c:"#f4d54a",img:"m500_vang"},{n:"Hồng",c:"#f2a7c3",img:"m500_hong"}],
    imgs:["m500_trang","m500_vang","m500_hong","m500_all"],
    hl:["Dung tích 500ml, vừa túi xách và balô.","Vỏ inox 304, lòng bình inox 316.","Nắp có quai xách tiện cầm.","3 màu: trắng, vàng, hồng."],
    spec:{ dungtich:"500ml", chatlieu:INOX, noibat:"Nắp có quai xách" } },
  { id:"mc570", cat:"binh", short:"MC570", name:"Bình giữ nhiệt Magic MC570", tag:"Bốn màu. Giá dễ chịu nhất.", ml:570,
    list:590000, daily:309000, camp:289000, badge:"Giá tốt nhất",
    colors:[{n:"Hồng",c:"#e9b3cf",img:"m570_hong"},{n:"Xám",c:"#d9dadb",img:"m570_xam"},{n:"Nâu",c:"#b9a58a",img:"m570_nau"},{n:"Vàng",c:"#f1c232",img:"m570_vang"}],
    imgs:["m570_hong","m570_xam","m570_nau","m570_vang","m570_all"],
    hl:["Dung tích 570ml, phù hợp đi học, đi làm.","Vỏ inox 304, lòng bình inox 316.","4 màu: hồng, xám, nâu, vàng.","Mức giá thấp nhất trong các mẫu bình Magic."],
    spec:{ dungtich:"570ml", chatlieu:INOX } },
  { id:"mc650", cat:"binh", short:"MC650", name:"Bình giữ nhiệt Magic MC650", tag:"Có ống hút và dây xách.", ml:650,
    list:790000, daily:569000, camp:509000,
    colors:[{n:"Kem",c:"#eae5da",img:"m650_kem"},{n:"Đen",c:"#3a3c40",img:"m650_den"}],
    imgs:["m650_kem","m650_den","m650_all"],
    hl:["Dung tích 650ml.","Có ống hút, uống tiện khi đang di chuyển.","Kèm dây xách.","Vỏ inox 304, lòng bình inox 316.","2 màu: kem, đen."],
    spec:{ dungtich:"650ml", chatlieu:INOX, phukien:"Ống hút, dây xách" } },
  { id:"mc870", cat:"binh", short:"MC870", name:"Bình giữ nhiệt Magic MC870", tag:"870ml. Ít phải châm nước.", ml:870,
    list:790000, daily:529000, camp:469000,
    colors:[{n:"Trắng",c:"#e7e9ea",img:"m870_trang"},{n:"Vàng",c:"#f1c232",img:"m870_vang"},{n:"Hồng",c:"#e9b3cf",img:"m870_hong"}],
    imgs:["m870_trang","m870_vang","m870_hong","m870_all"],
    hl:["Dung tích 870ml, ít phải châm nước.","Nắp bật mở nhanh.","Vỏ inox 304, lòng bình inox 316.","3 màu: trắng, vàng, hồng."],
    spec:{ dungtich:"870ml", chatlieu:INOX, noibat:"Nắp bật" } },
  { id:"mc1200", cat:"binh", short:"MC1200", name:"Bình giữ nhiệt Magic MC1200", tag:"1,2 lít cho một ngày dài.", ml:1200,
    list:790000, daily:559000, camp:499000,
    colors:[{n:"Hồng",c:"#d9338a",img:"m1200_hong"},{n:"Trắng",c:"#e2e0dc",img:"m1200_trang"},{n:"Xanh",c:"#2fb8c0",img:"m1200_xanh"}],
    imgs:["m1200_hong","m1200_trang","m1200_xanh","m1200_all"],
    hl:["Dung tích lớn 1.200ml cho cả ngày.","Có tay cầm và ống hút.","Inox 304, inox 316 và nhựa PP.","3 màu: hồng, trắng, xanh."],
    spec:{ dungtich:"1.200ml", chatlieu:"Inox 304, inox 316, nhựa PP", phukien:"Tay cầm, ống hút" } },
  { id:"mpi480", cat:"binh", short:"MPI480", name:"Ly giữ nhiệt Magic MPI480", tag:"Hai lớp chân không. Mở nắp một tay.", ml:480,
    list:790000, daily:549000, camp:489000,
    colors:[{n:"Bạc",c:"#b9bdc2",img:"mpi_bac"},{n:"Nâu",c:"#b98c7a",img:"mpi_nau"}],
    imgs:["mpi_bac","mpi_nau","mpi_all","mpi_l1","mpi_l2","mpi_l3"],
    hl:["Dung tích 480ml.","2 lớp chân không giữ nóng, giữ lạnh, không đọng nước bên ngoài.","Nắp bật mở bằng một thao tác, đóng chắc, chống tràn.","Inox 304, nhựa PP và silicon.","2 màu: bạc, nâu."],
    spec:{ dungtich:"480ml", chatlieu:"Inox 304, nhựa PP, silicon", noibat:"2 lớp chân không; nắp bật một thao tác, chống tràn" } }
];

const SPEC_ROWS = [
  ["nhom","Nhóm sản phẩm"],["dungtich","Dung tích"],["chatlieu","Chất liệu"],["chedo","Chế độ"],
  ["noibat","Tính năng nổi bật"],["phukien","Phụ kiện đi kèm"],["pin","Pin"],["sudung","Thời gian sử dụng"],
  ["sac","Sạc"],["congsuat","Công suất"],["chongnuoc","Chống nước"],["thietke","Thiết kế"],
  ["kichthuoc","Kích thước, trọng lượng"],["mau","Màu sắc"],["baohanh","Bảo hành"]
];
const STATUS = { pending:"Chờ xác nhận", confirmed:"Đã xác nhận", shipping:"Đang giao", done:"Hoàn thành", canceled:"Đã hủy" };
const RATE_TXT = { 5:"Tuyệt vời", 4:"Hài lòng", 3:"Bình thường", 2:"Chưa hài lòng", 1:"Rất tệ" };
const PHONE_RE = /^(\+?84|0)\d{9,10}$/;

/* ---------- Tiện ích ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const vnd = n => Math.round(+n || 0).toLocaleString("vi-VN") + "đ";
const norm = s => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase();
const byId = Object.fromEntries(P.map(p => [p.id, p]));
const catOf = id => CATS.find(c => c.id === id) || CATS[0];
const price = p => CONFIG.PRICE_MODE === "camp" ? p.camp : p.daily;
const pctOff = p => Math.round((1 - price(p) / p.list) * 100);
const fmt1 = n => (+n || 0).toLocaleString("vi-VN", { minimumFractionDigits:1, maximumFractionDigits:1 });
const fmtDate = iso => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleDateString("vi-VN", { day:"2-digit", month:"2-digit", year:"numeric" }); };
const isPhoto = k => /^(tn|sq_|h_|qc|mpi_l)/.test(k);
const mainImg = p => p.card || (p.colors ? p.colors[0].img : p.imgs[0]);
const reduceMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

function wellImg(k, alt = "", cls = "") {
  return `<span class="well ${cls}"><img src="${IMG[k] || ""}" alt="${esc(alt)}" class="${isPhoto(k) ? "photo" : ""}" loading="lazy" decoding="async"></span>`;
}
function swatches(p) {
  if (!p.colors) return "";
  return `<div class="swatches" role="img" aria-label="${p.colors.length} màu: ${esc(p.colors.map(c => c.n).join(", "))}">${p.colors.map(c => `<span class="sw" style="--c:${c.c}" title="${esc(c.n)}"></span>`).join("")}</div>`;
}
function starsHTML(avg, cls = "") {
  return `<span class="stars ${cls}" style="--p:${Math.max(0, Math.min(100, (avg / 5) * 100))}%" role="img" aria-label="${fmt1(avg)} trên 5 sao"></span>`;
}
function saveBtn(id, cls) {
  const on = Saves.has(id);
  return `<button class="${cls}" type="button" data-save="${id}" aria-pressed="${on}" aria-label="${on ? "Bỏ lưu" : "Lưu"} ${esc(byId[id].name)}">${ICON.heart}</button>`;
}
const fmtPhone = s => String(s || "").replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3");
const telA = (cls = "") => `<a class="${cls}" href="tel:${esc(CONFIG.HOTLINE)}">${fmtPhone(CONFIG.HOTLINE)}</a>`;
function fld(id, label, type = "text", ac = "", val = "", extra = "") {
  return `<div class="fld"><input id="${id}" name="${id}" type="${type}" ${ac ? `autocomplete="${ac}"` : ""} placeholder=" " value="${esc(val)}" ${extra}><label for="${id}">${label}</label></div>`;
}
function fldPass(id, label, ac) {
  return `<div class="fld has-eye"><input id="${id}" name="${id}" type="password" autocomplete="${ac}" placeholder=" "><label for="${id}">${label}</label><button class="eye" type="button" data-act="eye" data-for="${id}">Hiện</button></div>`;
}
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("on");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2600);
}
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch (e) {
    const ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand("copy"); } catch (_) {}
    ta.remove(); return ok;
  }
}

/* ---------- Lưu trữ trên trình duyệt ---------- */
const mkStore = area => ({
  get(k, d) { try { const v = window[area].getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { window[area].setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { window[area].removeItem(k); } catch (e) {} }
});
const LS = mkStore("localStorage"), SS = mkStore("sessionStorage");
function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, "0"); }
function randHex(n = 8) {
  try { const a = new Uint8Array(n); crypto.getRandomValues(a); return Array.from(a, x => x.toString(16).padStart(2, "0")).join(""); }
  catch (e) { return (Math.random().toString(16).slice(2) + Date.now().toString(16)).slice(0, n * 2); }
}
async function pwHash(salt, pw) {
  try {
    if (window.crypto && crypto.subtle) {
      const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(salt + ":" + pw));
      return Array.from(new Uint8Array(b), x => x.toString(16).padStart(2, "0")).join("");
    }
  } catch (e) {}
  return "f:" + fnv(salt + ":" + pw) + fnv(pw + ":" + salt);
}

/* ---------- Tài khoản ---------- */
const Auth = {
  all() { return LS.get("dbc2_accounts", {}); },
  saveAll(a) { LS.set("dbc2_accounts", a); },
  email() { return LS.get("dbc2_session", null) || SS.get("dbc2_session", null); },
  me() { const e = this.email(); return e ? (this.all()[e] || null) : null; },
  key() { const m = this.me(); return m ? fnv(m.email) : "guest"; },
  async register({ name, email, phone, pass }) {
    const all = this.all(); const e = email.trim().toLowerCase();
    if (all[e]) throw new Error("Email này đã có tài khoản. Hãy đăng nhập.");
    const salt = randHex(8);
    all[e] = { name: name.trim(), email: e, phone: phone || "", addr: "", salt, hash: await pwHash(salt, pass), created: new Date().toISOString() };
    this.saveAll(all); this.start(e, true);
  },
  async login(email, pass, remember) {
    const e = email.trim().toLowerCase(); const a = this.all()[e];
    if (!a || a.hash !== await pwHash(a.salt, pass)) throw new Error("Email hoặc mật khẩu không đúng.");
    this.start(e, remember);
  },
  start(e, remember) { LS.del("dbc2_session"); SS.del("dbc2_session"); (remember ? LS : SS).set("dbc2_session", e); mergeGuest(); },
  logout() { LS.del("dbc2_session"); SS.del("dbc2_session"); },
  update(patch) { const all = this.all(); const e = this.email(); if (!all[e]) return; Object.assign(all[e], patch); this.saveAll(all); },
  async changePass(oldp, newp) {
    const m = this.me(); if (!m) return;
    if (m.hash !== await pwHash(m.salt, oldp)) throw new Error("Mật khẩu hiện tại không đúng.");
    const salt = randHex(8); this.update({ salt, hash: await pwHash(salt, newp) });
  }
};

const Saves = {
  key() { return "dbc2_saves_" + Auth.key(); },
  list() { return LS.get(this.key(), []).filter(id => byId[id]); },
  has(id) { return this.list().includes(id); },
  toggle(id) { const l = this.list(); const i = l.indexOf(id); if (i >= 0) l.splice(i, 1); else l.unshift(id); LS.set(this.key(), l); return i < 0; }
};
const Orders = {
  key() { return "dbc2_orders_" + Auth.key(); },
  list() { return LS.get(this.key(), []); },
  add(o) { const l = this.list(); l.unshift(o); LS.set(this.key(), l.slice(0, 100)); },
  hasBought(pid) { return this.list().some(o => o.status !== "canceled" && (o.items || []).some(i => i.id === pid)); }
};
function mergeGuest() {
  const k = "dbc2_saves_" + Auth.key(); if (k === "dbc2_saves_guest") return;
  const g = LS.get("dbc2_saves_guest", []); if (!g.length) return;
  LS.set(k, [...new Set([...LS.get(k, []), ...g])]); LS.del("dbc2_saves_guest");
}

/* ---------- Giỏ hàng ---------- */
let cart = LS.get("dbc2_cart", []).filter(l => l && byId[l.id] && l.qty > 0);
let coupon = LS.get("dbc2_coupon", "");
if (!CONFIG.COUPONS[coupon]) coupon = "";
function saveCart() { LS.set("dbc2_cart", cart); updateBadge(); }
function cartCount() { return cart.reduce((a, l) => a + l.qty, 0); }
function lineImgKey(l) {
  const p = byId[l.id];
  if (l.color && p.colors) { const c = p.colors.find(c => c.n === l.color); if (c) return c.img; }
  return mainImg(p);
}
function cartAdd(id, color, qty) {
  const l = cart.find(x => x.id === id && (x.color || "") === (color || ""));
  if (l) l.qty = Math.min(20, l.qty + qty); else cart.push({ id, color: color || "", qty: Math.min(20, qty) });
  saveCart();
}
function totals() {
  let sub = 0, list = 0, disc = 0; const cp = CONFIG.COUPONS[coupon];
  cart.forEach(l => {
    const p = byId[l.id]; sub += price(p) * l.qty; list += p.list * l.qty;
    if (cp && cp.type === "camp") disc += Math.max(0, price(p) - p.camp) * l.qty;
    if (cp && cp.type === "percent") disc += Math.round(price(p) * l.qty * (cp.value || 0) / 100);
  });
  return { sub, list, disc, total: sub - disc, save: list - (sub - disc) };
}
function orderText(o) {
  const lines = (o.items || []).map((l, i) => `${i + 1}. ${l.name}${l.color ? " – màu " + l.color : ""} x${l.qty} = ${vnd(l.price * l.qty)}`);
  return [
    `ĐƠN HÀNG ${CONFIG.SHOP.toUpperCase()} #${o.code}`, ...lines,
    o.disc ? `Giảm giá (${o.coupon}): −${vnd(o.disc)}` : "",
    `Tổng cộng: ${vnd(o.total)} (chưa gồm phí vận chuyển)`,
    `Người nhận: ${o.name}`, `SĐT: ${o.phone}`, `Địa chỉ: ${o.addr}`, `Thanh toán: ${o.pay}`,
    o.note ? `Ghi chú: ${o.note}` : ""
  ].filter(Boolean).join("\n");
}

/* ---------- Dữ liệu dùng chung (khi trình xem hỗ trợ) ---------- */
const PF = { db: null, user: null, uid: null, canWrite: null, owner: false };
let sharedReviews = [];
let adminOrders = [];
const canShare = () => !!(PF.db && PF.uid && PF.canWrite !== false);
const _queues = {};
function serial(key, fn) { const run = (_queues[key] || Promise.resolve()).then(fn, fn); _queues[key] = run.catch(() => {}); return run; }
async function sharedMutate(col, mutate, uid) {
  uid = uid || PF.uid; if (!PF.db || !uid) return false;
  const ref = PF.db.doc(col + "/" + uid);
  try {
    await serial(ref.path, async () => {
      const snap = await ref.get();
      const body = JSON.parse(JSON.stringify(snap.exists ? (snap.data() || {}) : {}));
      mutate(body);
      body.updatedAt = new Date().toISOString();
      await ref.set(body);
    });
    return true;
  } catch (e) {
    if (e && e.code === "invalid_argument" && uid === PF.uid) PF.canWrite = false;
    console.warn("Không ghi được dữ liệu chung", e);
    return false;
  }
}
function cleanReview(r) {
  if (!r || typeof r !== "object" || !byId[r.pid]) return null;
  const rating = Math.round(+r.rating || 0); if (rating < 1 || rating > 5) return null;
  const s = (v, n) => String(v ?? "").slice(0, n);
  return { id: s(r.id, 20), pid: r.pid, acct: s(r.acct, 16), name: s(r.name, 40) || "Khách hàng", rating, title: s(r.title, 80), text: s(r.text, 1000), color: s(r.color, 20), at: s(r.at, 40), edited: s(r.edited, 40), verified: !!r.verified };
}
function cleanOrder(o, uid) {
  if (!o || typeof o !== "object") return null;
  const s = (v, n) => String(v ?? "").slice(0, n);
  return { code: s(o.code, 12), at: s(o.at, 40), name: s(o.name, 80), phone: s(o.phone, 20), addr: s(o.addr, 300), pay: s(o.pay, 60), note: s(o.note, 300), coupon: s(o.coupon, 20),
    items: Array.isArray(o.items) ? o.items.slice(0, 30).map(i => ({ id: s(i.id, 20), name: s(i.name, 80), color: s(i.color, 20), qty: Math.max(0, Math.min(99, +i.qty || 0)), price: +i.price || 0 })) : [],
    total: +o.total || 0, disc: +o.disc || 0, status: STATUS[o.status] ? o.status : "pending", uid };
}
async function initPlatform() {
  try {
    if (!window.claude || typeof window.claude.use !== "function") return;
    const [db, user] = await Promise.all([claude.use("db"), claude.use("user")]);
    if (!db) return;
    PF.db = db; PF.user = user;
    if (user) {
      try { PF.uid = await user.id(); } catch (e) {}
      try { PF.owner = !!(await user.isOwner()); } catch (e) {}
      try { PF.canWrite = await user.can("data.write"); } catch (e) { PF.canWrite = null; }
    }
    db.collection("reviews").onSnapshot(snap => {
      const arr = [];
      snap.docs.forEach(d => { const items = ((d.data() || {}).items) || {}; Object.values(items).forEach(r => { const c = cleanReview(r); if (c) arr.push({ ...c, uid: d.id }); }); });
      sharedReviews = arr; onReviewsChanged();
    }, () => {});
    if (PF.owner) {
      $("#footAdmin").hidden = false;
      db.collection("orders").onSnapshot(snap => {
        const arr = [];
        snap.docs.forEach(d => (((d.data() || {}).list) || []).forEach(o => { const c = cleanOrder(o, d.id); if (c) arr.push(c); }));
        arr.sort((a, b) => String(b.at).localeCompare(String(a.at)));
        adminOrders = arr; if (S.view === "admin") R.admin();
      }, () => {});
    }
    onReviewsChanged();
    if (S.view === "admin") R.admin();
  } catch (e) { console.warn(e); }
}

/* ---------- Đánh giá ---------- */
const Reviews = {
  local() { return LS.get("dbc2_reviews", []).map(cleanReview).filter(Boolean); },
  saveLocal(l) { LS.set("dbc2_reviews", l); },
  all() {
    const keys = new Set(sharedReviews.map(r => r.pid + "__" + r.acct + "__" + r.uid));
    const mineShared = new Set(sharedReviews.filter(r => r.uid === PF.uid).map(r => r.pid + "__" + r.acct));
    const loc = this.local().filter(r => !mineShared.has(r.pid + "__" + r.acct)).map(r => ({ ...r, local: true }));
    return [...sharedReviews, ...loc];
  },
  for(pid) { return this.all().filter(r => r.pid === pid); },
  isMine(r) { const k = Auth.key(); return k !== "guest" && r.acct === k && (r.local || (PF.uid && r.uid === PF.uid)); },
  mine(pid) { return this.for(pid).find(r => this.isMine(r)) || null; },
  stats(pid) {
    const l = this.for(pid); const dist = [0, 0, 0, 0, 0, 0]; let s = 0;
    l.forEach(r => { dist[r.rating]++; s += r.rating; });
    return { n: l.length, avg: l.length ? s / l.length : 0, dist };
  }
};
async function saveReview(input) {
  const acct = Auth.key(); const prev = Reviews.mine(input.pid); const now = new Date().toISOString();
  const rec = { id: prev ? prev.id : randHex(6), pid: input.pid, acct, name: input.name, rating: input.rating, title: input.title, text: input.text, color: input.color,
    at: prev ? prev.at : now, edited: prev ? now : "", verified: Orders.hasBought(input.pid) };
  const dropLocal = () => Reviews.saveLocal(LS.get("dbc2_reviews", []).filter(x => !(x.pid === input.pid && x.acct === acct)));
  if (canShare()) {
    const ok = await sharedMutate("reviews", body => { body.items = body.items || {}; body.items[input.pid + "__" + acct] = rec; });
    if (ok) { dropLocal(); return "shared"; }
  }
  dropLocal(); const l = LS.get("dbc2_reviews", []); l.push(rec); Reviews.saveLocal(l);
  return "local";
}
async function deleteReview(pid, acct, uid, local) {
  if (local) { Reviews.saveLocal(LS.get("dbc2_reviews", []).filter(x => !(x.pid === pid && x.acct === acct))); return true; }
  return sharedMutate("reviews", body => { if (body.items) delete body.items[pid + "__" + acct]; }, uid);
}
function shareNote() {
  return canShare() ? "Đánh giá được hiển thị cho mọi người xem trang." : "Đánh giá của bạn được lưu trên thiết bị này.";
}
function onReviewsChanged() {
  if (S.view === "product" && $("#pvRv")) { renderRv(); renderRate(); }
  else if (S.view === "store" && $("#stGrid")) renderStoreGrid();
  else if (S.view === "account" && S.acctTab === "reviews" && $("#acctPanel")) renderAcctPanel();
  else if (S.view === "admin") R.admin();
}

/* ---------- Thanh điều hướng, flyout ---------- */
const FLYBTN = { searchFly: "#searchBtn", bagFly: "#bagBtn", menuFly: "#menuBtn" };
let openFlyId = null;
function updateBadge() {
  const n = cartCount(); const b = $("#bagCount");
  b.hidden = !n; b.textContent = n > 99 ? "99+" : n;
  $("#bagBtn").setAttribute("aria-label", n ? `Giỏ hàng, ${n} sản phẩm` : "Giỏ hàng và tài khoản");
}
function openFly(id, added) {
  closeFly();
  if (id === "bagFly") renderBagFly(added);
  if (id === "searchFly") renderSearchFly();
  if (id === "menuFly") renderMenuFly();
  $("#" + id).hidden = false; $("#veil").hidden = false; openFlyId = id;
  $(FLYBTN[id]).setAttribute("aria-expanded", "true");
  if (id === "searchFly") setTimeout(() => $("#sInput") && $("#sInput").focus(), 30);
}
function closeFly() {
  Object.keys(FLYBTN).forEach(i => { $("#" + i).hidden = true; $(FLYBTN[i]).setAttribute("aria-expanded", "false"); });
  $("#veil").hidden = true; openFlyId = null;
}
function toggleFly(id) { if (openFlyId === id) closeFly(); else openFly(id); }
function renderBagFly(added) {
  const me = Auth.me(); const t = totals(); const items = cart.slice(-3).reverse();
  $("#bagFly").innerHTML = `<div class="fly-in">
    <h2 class="fly-title">${added ? "Đã thêm vào giỏ hàng." : cart.length ? "Giỏ hàng" : "Giỏ hàng của bạn đang trống."}</h2>
    ${cart.length ? `<div class="fly-items">${items.map(l => { const p = byId[l.id]; return `<div class="fly-item">${wellImg(lineImgKey(l), "")}<div><b>${esc(p.name)}</b><span>${l.color ? "Màu " + esc(l.color) + ", " : ""}số lượng ${l.qty}, ${vnd(price(p) * l.qty)}</span></div></div>`; }).join("")}
      ${cart.length > 3 ? `<p class="muted" style="font-size:12px;margin:0">và ${cart.length - 3} sản phẩm khác</p>` : ""}</div>
      <div class="row"><a class="pill" href="#gio-hang" data-go="bag">Xem giỏ hàng</a><a class="pill outline" href="#thanh-toan" data-go="checkout">Thanh toán ${vnd(t.total)}</a></div>`
    : me ? `<p class="muted" style="margin:0">Xem các sản phẩm bạn đã lưu trong mục Đã lưu.</p>`
         : `<p class="muted" style="margin:0"><button class="linkbtn" type="button" data-act="login">Đăng nhập</button> để xem các sản phẩm bạn đã lưu.</p>`}
    <h3 class="fly-sub">Hồ sơ của tôi${me ? ": " + esc(me.name) : ""}</h3>
    <ul class="fly-links">
      <li><a href="#tai-khoan" data-go="account" data-arg="orders">${ICON.box}Đơn hàng</a></li>
      <li><a href="#tai-khoan" data-go="account" data-arg="saves">${ICON.heart}Đã lưu</a></li>
      <li><a href="#tai-khoan" data-go="account" data-arg="profile">${ICON.user}Tài khoản</a></li>
      ${PF.owner ? `<li><a href="#quan-ly" data-go="admin">${ICON.chart}Quản lý cửa hàng</a></li>` : ""}
      <li>${me ? `<button type="button" data-act="logout">${ICON.out}Đăng xuất</button>` : `<button type="button" data-act="login">${ICON.in}Đăng nhập</button>`}</li>
    </ul></div>`;
}
function renderSearchFly() {
  $("#searchFly").innerHTML = `<div class="fly-in"><form class="sbox" id="sForm" role="search">${ICON.searchBig}<label class="sr" for="sInput">Tìm kiếm sản phẩm</label><input id="sInput" type="search" placeholder="Tìm kiếm sản phẩm" autocomplete="off" enterkeyhint="search"></form>
    <h3 class="fly-sub" id="sHead">Liên kết nhanh</h3><ul class="fly-links" id="sRes"></ul></div>`;
  renderSearchRes("");
  $("#sInput").addEventListener("input", e => renderSearchRes(e.target.value));
}
function searchList(q) {
  const n = norm(q.trim()); if (!n) return P.slice();
  return P.filter(p => norm([p.name, p.tag, p.id, catOf(p.cat).name, (p.colors || []).map(c => c.n).join(" "), p.spec.dungtich || ""].join(" ")).includes(n));
}
function renderSearchRes(q) {
  const res = $("#sRes"); if (!res) return;
  if (!q.trim()) {
    $("#sHead").textContent = "Liên kết nhanh";
    const links = [["Tăm nước B‑02PRO", "product", "b02pro"], ["Bình giữ nhiệt", "store", "", "binh"], ["Quạt sạc mini", "store", "", "quat"], ["So sánh sản phẩm", "compare", ""], ["Đơn hàng của tôi", "account", "orders"]];
    res.innerHTML = links.map(([l, v, a, c]) => `<li><a href="#" data-go="${v}"${a ? ` data-arg="${a}"` : ""}${c ? ` data-cat="${c}"` : ""}>${ICON.arrow}${l}</a></li>`).join("");
    return;
  }
  const list = searchList(q).slice(0, 6);
  $("#sHead").textContent = list.length ? "Sản phẩm" : "Không tìm thấy sản phẩm phù hợp";
  res.innerHTML = list.length
    ? list.map(p => `<li><a href="#${p.id}" data-go="product" data-arg="${p.id}">${wellImg(mainImg(p), "", "sres-img")}<span>${esc(p.name)}<br><span class="muted" style="font-weight:400;font-size:12px">${vnd(price(p))}</span></span></a></li>`).join("")
    : `<li class="muted" style="font-size:14px">Thử từ khóa khác, ví dụ “bình”, “quạt” hoặc “tăm nước”.</li>`;
}
function renderMenuFly() {
  const me = Auth.me();
  const links = [["Cửa hàng", "store", "all"], ["Răng miệng", "store", "rang"], ["Bình giữ nhiệt", "store", "binh"], ["Quạt sạc", "store", "quat"], ["So sánh", "compare"], ["Hỗ trợ", "support"]];
  $("#menuFly").innerHTML = `<div class="fly-in"><ul class="fly-links big">${links.map(([l, v, c]) => `<li><a href="#" data-go="${v}"${c ? ` data-cat="${c}"` : ""}>${l}</a></li>`).join("")}</ul>
    <h3 class="fly-sub">Tài khoản${me ? ": " + esc(me.name) : ""}</h3>
    <ul class="fly-links"><li><a href="#" data-go="account" data-arg="orders">${ICON.box}Đơn hàng</a></li><li><a href="#" data-go="account" data-arg="saves">${ICON.heart}Đã lưu</a></li>
    ${PF.owner ? `<li><a href="#" data-go="admin">${ICON.chart}Quản lý cửa hàng</a></li>` : ""}
    <li>${me ? `<button type="button" data-act="logout">${ICON.out}Đăng xuất</button>` : `<button type="button" data-act="login">${ICON.in}Đăng nhập</button>`}</li></ul></div>`;
}

/* ---------- Điều hướng giữa các trang ---------- */
const S = {
  view: "home", arg: null,
  store: { cat: "all", q: "", sort: "featured" },
  pv: { id: null, img: 0, color: null, qty: 1, rf: 0, rsort: "new" },
  cmp: ["mc570", "mc870", "mc1200"],
  acctTab: "orders", authMode: "login", lastOrder: null, myStatus: {}, statusFetched: false
};
const TITLES = { home: "Nexus – Gia dụng Magic chính hãng", store: "Cửa hàng – Nexus", compare: "So sánh – Nexus", bag: "Giỏ hàng – Nexus", checkout: "Thanh toán – Nexus", done: "Đặt hàng thành công – Nexus", account: "Tài khoản – Nexus", support: "Hỗ trợ – Nexus", admin: "Quản lý cửa hàng – Nexus" };
const R = {};
function go(view, arg, opt = {}) {
  closeFly();
  if (view === "product" && !byId[arg]) view = "store";
  if (view === "checkout" && !cart.length) view = "bag";
  if (view === "done" && !S.lastOrder) view = "home";
  S.view = view; S.arg = arg;
  $$("main [data-view]").forEach(s => { s.hidden = s.dataset.view !== view; });
  if (R[view]) R[view](arg);
  document.title = view === "product" ? byId[arg].name + " – Nexus" : (TITLES[view] || TITLES.home);
  $$(".gnav-links a").forEach(a => {
    const cur = a.dataset.go === view && (view !== "store" || a.dataset.cat === S.store.cat);
    if (cur) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  if (!opt.keep) window.scrollTo(0, 0);
}
function rerender() { go(S.view, S.arg, { keep: true }); }
function routeFromHash() {
  const t = decodeURIComponent((location.hash || "").slice(1));
  const m = { "cua-hang": ["store", "all"], "rang-mieng": ["store", "rang"], "binh-giu-nhiet": ["store", "binh"], "quat": ["store", "quat"], "so-sanh": ["compare"], "gio-hang": ["bag"], "thanh-toan": ["checkout"], "tai-khoan": ["account"], "ho-tro": ["support"], "quan-ly": ["admin"] };
  if (byId[t]) return go("product", t, { keep: true });
  const r = m[t];
  if (!r) return go("home", null, { keep: true });
  if (r[0] === "store") S.store.cat = r[1];
  go(r[0], null, { keep: true });
}

/* ---------- Trang chủ ---------- */
function tile({ id, title, sub, media }) {
  return `<div class="tile"><h3>${title}</h3><p>${sub}</p>
    <div class="ctas"><a class="pill sm" href="#${id}" data-go="product" data-arg="${id}">Tìm hiểu thêm</a><button class="pill sm outline" type="button" data-buy="${id}">Mua</button></div>
    <div class="media">${media}</div></div>`;
}
R.home = () => {
  const el = $('[data-view="home"]'); if (el.dataset.ready) return; el.dataset.ready = "1";
  const b02 = byId.b02pro, a014 = byId.a014;
  const bottles = P.filter(p => p.ml).sort((a, b) => a.ml - b.ml);
  const why = [
    [ICON.chat, `Tư vấn với trợ lý ${CONFIG.ADVISOR}`, "Hỏi trợ lý AI ngay trên trang để chọn đúng sản phẩm cho nhu cầu của bạn."],
    [ICON.cash, "Thanh toán khi nhận hàng", "Nexus gọi xác nhận trước khi giao. Trả tiền mặt khi nhận, hoặc chuyển khoản."],
    [ICON.shield, "Bảo hành 12 tháng", "Áp dụng cho tăm nước B‑02PRO, bàn chải điện B‑26 và quạt cầm tay A‑014."],
    [ICON.phone, `Hotline ${fmtPhone(CONFIG.HOTLINE)}`, "Gọi để gặp nhân viên Nexus khi cần hỗ trợ đơn hàng, bảo hành hay đổi trả."]
  ];
  el.innerHTML = `
  <div class="hero hero-a">
    <h2 class="fade-up">Tăm nước B‑02PRO</h2>
    <p class="sub fade-up d2">Sạch tận kẽ. Gọn trong túi.</p>
    <p class="price-note fade-up d2">${vnd(price(b02))}, thấp hơn ${pctOff(b02)}% so với giá niêm yết.</p>
    <div class="ctas fade-up d3"><a class="pill" href="#b02pro" data-go="product" data-arg="b02pro">Tìm hiểu thêm</a><button class="pill outline" type="button" data-buy="b02pro">Mua</button></div>
    <div class="media"><img src="${IMG.h_tn5}" alt="Đầu phun tăm nước Magic B‑02PRO giữa những bong bóng nước"></div>
  </div>
  <div class="hero hero-b on-dark">
    <h2>Quạt cầm tay A‑014</h2>
    <p class="sub">Mát lạnh trong 3–5 giây.</p>
    <p class="price-note">Làm lạnh Peltier, 5 cấp gió, pin 2.000mAh. ${vnd(price(a014))}.</p>
    <div class="ctas"><a class="pill" href="#a014" data-go="product" data-arg="a014">Tìm hiểu thêm</a><button class="pill outline" type="button" data-buy="a014">Mua</button></div>
    <div class="media"><img src="${IMG.h_qc3}" alt="Quạt Magic A‑014 màu tím đặt trên bàn gỗ" loading="lazy"></div>
  </div>
  <div class="tiles">
    ${tile({ id: "b26", title: "Bàn chải điện B‑26", sub: "Đủ 2 phút. Đều mọi vùng.", media: `<div class="trio">${["c_bc_tim", "c_bc_trang", "c_bc_xanh"].map(k => `<img src="${IMG[k]}" alt="" loading="lazy">`).join("")}</div>` })}
    ${tile({ id: "a028", title: "Quạt để bàn A‑028", sub: "Xoay 360°. Mát cả khi mất điện.", media: `<img src="${IMG.c_qb}" alt="Quạt để bàn Magic A‑028" style="height:300px;width:auto" loading="lazy">` })}
    ${tile({ id: "mc1200", title: "Bình MC1200", sub: "1,2 lít cho một ngày dài.", media: `<div class="trio" style="--ov:-110px">${["m1200_hong", "m1200_xanh", "m1200_trang"].map(k => `<img src="${IMG[k]}" alt="" loading="lazy">`).join("")}</div>` })}
    ${tile({ id: "mpi480", title: "Ly giữ nhiệt MPI480", sub: "Hai lớp chân không. Mở nắp một tay.", media: `<div class="trio" style="--ov:-120px">${["mpi_bac", "mpi_nau"].map(k => `<img src="${IMG[k]}" alt="" loading="lazy">`).join("")}</div>` })}
  </div>
  <section class="section">
    <div class="wrap wide">
      <h2 class="section-h">Chọn bình phù hợp với bạn.</h2>
      <p class="section-p">Sáu mẫu bình và ly giữ nhiệt Magic, từ 480ml gọn trong túi xách đến 1,2 lít cho cả ngày.</p>
      <div class="pick">${bottles.map(p => { const h = Math.round(150 + 100 * (p.ml / 1200)); return `<div class="pick-col">
        <div class="well"><img src="${IMG[p.colors[0].img]}" alt="${esc(p.name)}" style="height:${h}px;width:auto" loading="lazy"></div>
        ${swatches(p)}
        <h3>${p.short}</h3><p class="from">${vnd(price(p))}</p>
        <button class="pill sm" type="button" data-buy="${p.id}">Mua</button>
        <a class="more" href="#${p.id}" data-go="product" data-arg="${p.id}" style="font-size:14px;margin-top:12px">Tìm hiểu thêm</a>
        <hr><div class="big">${p.ml.toLocaleString("vi-VN")}ml</div><div class="cap">Dung tích</div>
        <p class="spec">${esc(p.spec.chatlieu)}</p>${p.spec.phukien ? `<p class="spec">${esc(p.spec.phukien)}</p>` : p.spec.noibat ? `<p class="spec">${esc(p.spec.noibat)}</p>` : ""}
      </div>`; }).join("")}</div>
      <p style="text-align:center;margin:22px 0 0"><a class="more" href="#so-sanh" data-go="compare" data-arg="binh">So sánh các mẫu bình</a></p>
    </div>
  </section>
  <section class="section band2" style="margin-top:72px;padding-bottom:96px">
    <div class="wrap">
      <p class="statement">Magic có hơn 15 năm phát triển tại Việt Nam, <b>có mặt tại hơn 1.000 trung tâm điện máy</b>, 200 siêu thị và trung tâm thương mại, <b>phục vụ hơn 220.000 khách hàng mỗi năm.</b></p>
      <h2 class="section-h" style="margin-top:96px">Mua tại Nexus.</h2>
      <p class="section-p">Đặt hàng đơn giản, được tư vấn tận tình.</p>
      <div class="why">${why.map(([i, h, t]) => `<div class="why-card">${i}<h3>${h}</h3><p>${t}</p></div>`).join("")}</div>
    </div>
  </section>`;
};

/* ---------- Cửa hàng ---------- */
function cardHTML(p) {
  const st = Reviews.stats(p.id);
  return `<article class="pcard">
    <a class="pcard-link" href="#${p.id}" data-go="product" data-arg="${p.id}">
      <p class="eyebrow">${p.badge ? esc(p.badge) : ""}</p>
      <h3>${esc(p.name)}</h3><p class="tag">${esc(p.tag)}</p>
      ${wellImg(mainImg(p), p.name)}
    </a>
    ${p.colors ? swatches(p) : `<div class="swatches" style="height:12px" aria-hidden="true"></div>`}
    <div class="rate">${st.n ? `${starsHTML(st.avg)}<span>${fmt1(st.avg)} (${st.n})</span>` : "Chưa có đánh giá"}</div>
    <div class="pcard-foot"><div class="price"><b>${vnd(price(p))}</b><s>${vnd(p.list)}</s></div>
      <button class="pill sm" type="button" data-buy="${p.id}" aria-label="Mua ${esc(p.name)}">Mua</button></div>
    ${saveBtn(p.id, "iconbtn savebtn")}
  </article>`;
}
const SORTS = [["featured", "Nổi bật"], ["price-asc", "Giá thấp đến cao"], ["price-desc", "Giá cao đến thấp"], ["rating", "Đánh giá cao nhất"], ["discount", "Giảm nhiều nhất"]];
R.store = () => {
  const el = $('[data-view="store"]');
  el.innerHTML = `<div class="wrap wide">
    <div class="st-head"><h1>Cửa hàng. <span>Cách dễ nhất để mua sản phẩm Magic bạn thích.</span></h1>
      <div class="st-help"><p>Cần tư vấn chọn sản phẩm?</p><button class="linkbtn more" type="button" data-act="chat">Hỏi trợ lý ${CONFIG.ADVISOR}</button></div></div>
    <div class="st-cats" role="group" aria-label="Danh mục">${CATS.map(c => `<button class="st-cat" type="button" data-act="cat" data-cat="${c.id}" aria-pressed="${S.store.cat === c.id}">${c.id === "all" ? `<span class="well catmix">${["c_bc_xanh", "m570_hong", "c_qb"].map(k => `<img src="${IMG[k]}" alt="">`).join("")}</span>` : wellImg(c.img, "")}<span class="lbl">${c.short}</span></button>`).join("")}</div>
    <div class="st-tools"><h2 class="st-h2" id="stH2"></h2>
      <div class="st-filter">
        <label class="field-s">${ICON.search}<span class="sr">Lọc theo tên</span><input id="stQ" type="search" placeholder="Lọc theo tên" value="${esc(S.store.q)}"></label>
        <label class="field-s"><span class="sr">Sắp xếp</span><select id="stSort">${SORTS.map(([v, l]) => `<option value="${v}"${S.store.sort === v ? " selected" : ""}>${l}</option>`).join("")}</select></label>
      </div></div>
    <div class="pgrid" id="stGrid"></div></div>`;
  renderStoreGrid();
  $("#stQ").addEventListener("input", e => { S.store.q = e.target.value; renderStoreGrid(); });
  $("#stSort").addEventListener("change", e => { S.store.sort = e.target.value; renderStoreGrid(); });
};
function renderStoreGrid() {
  let list = searchList(S.store.q).filter(p => S.store.cat === "all" || p.cat === S.store.cat);
  const st = Object.fromEntries(list.map(p => [p.id, Reviews.stats(p.id)]));
  const sorters = {
    featured: () => 0,
    "price-asc": (a, b) => price(a) - price(b),
    "price-desc": (a, b) => price(b) - price(a),
    rating: (a, b) => (st[b.id].avg - st[a.id].avg) || (st[b.id].n - st[a.id].n),
    discount: (a, b) => pctOff(b) - pctOff(a)
  };
  list = list.slice().sort(sorters[S.store.sort] || sorters.featured);
  $("#stH2").innerHTML = `${esc(catOf(S.store.cat).name)}. <span>${list.length} sản phẩm</span>`;
  $("#stGrid").innerHTML = list.length ? list.map(cardHTML).join("")
    : `<div class="empty-state" style="grid-column:1/-1"><h3>Không có sản phẩm khớp với “${esc(S.store.q)}”.</h3><p>Thử từ khóa ngắn hơn, hoặc xem tất cả sản phẩm.</p><button class="pill" type="button" data-act="clearfilter">Xem tất cả sản phẩm</button></div>`;
}

/* ---------- Trang sản phẩm ---------- */
function specVal(p, k) {
  if (k === "nhom") return catOf(p.cat).name;
  if (k === "mau") return p.colors ? p.colors.map(c => c.n).join(", ") : "";
  if (k === "gia") return vnd(price(p));
  if (k === "niemyet") return vnd(p.list);
  return p.spec[k] || "";
}
function related(p) {
  const same = P.filter(x => x.cat === p.cat && x.id !== p.id);
  const other = P.filter(x => x.cat !== p.cat);
  return [...same, ...other].slice(0, 4);
}
R.product = id => {
  const p = byId[id];
  if (S.pv.id !== id) S.pv = { id, img: 0, color: p.colors ? p.colors[0].n : null, qty: 1, rf: 0, rsort: "new" };
  const cat = catOf(p.cat);
  const el = $('[data-view="product"]');
  el.innerHTML = `
  <div class="lnav"><div class="lnav-in"><span class="lnav-title">${esc(p.short)}</span>
    <div class="lnav-r"><span class="lp">${vnd(price(p))}</span><a href="#reviews" data-act="toreviews">Đánh giá</a><button class="pill sm" type="button" data-act="add">Mua</button></div></div></div>
  <div class="wrap">
    <nav class="crumbs" aria-label="Đường dẫn"><a href="#cua-hang" data-go="store" data-cat="all">Cửa hàng</a> › <a href="#${cat.token}" data-go="store" data-cat="${cat.id}">${esc(cat.name)}</a> › <span>${esc(p.short)}</span></nav>
    <div class="pv-grid"><div class="pv-gal" id="pvGal"></div><div class="pv-buy" id="pvBuy"></div></div>
  </div>
  <section class="band2" style="padding:72px 0 56px"><div class="wrap">
    <h2 class="sec-h">Điểm nổi bật.</h2>
    <div class="hl-row">${p.hl.map(h => `<div class="hl-card"><p>${esc(h)}</p></div>`).join("")}</div>
  </div></section>
  <section style="padding:72px 0 0"><div class="wrap">
    <h2 class="sec-h">Thông số kỹ thuật.</h2>
    <dl class="specs">${SPEC_ROWS.map(([k, l]) => [l, specVal(p, k)]).filter(r => r[1]).map(([l, v]) => `<div class="spec-row"><dt>${l}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
  </div></section>
  <section id="reviews" style="padding:84px 0 0"><div class="wrap"><h2 class="sec-h">Đánh giá của khách hàng.</h2><div id="pvRv"></div></div></section>
  <section style="padding:84px 0 0"><div class="wrap wide"><h2 class="sec-h" style="text-align:center">Có thể bạn cũng thích.</h2><div class="pgrid">${related(p).map(cardHTML).join("")}</div></div></section>`;
  renderGal(); renderBuy(); renderRv();
};
function renderGal() {
  const p = byId[S.pv.id]; const imgs = p.imgs; const i = Math.min(S.pv.img, imgs.length - 1);
  $("#pvGal").innerHTML = `<div class="pv-main">${wellImg(imgs[i], `${p.name}, ảnh ${i + 1} trên ${imgs.length}`)}
    ${imgs.length > 1 ? `<button class="gal-nav prev" type="button" data-act="gprev" aria-label="Ảnh trước">${ICON.chevL}</button><button class="gal-nav next" type="button" data-act="gnext" aria-label="Ảnh tiếp theo">${ICON.chevR}</button>` : ""}</div>
    ${imgs.length > 1 ? `<div class="pv-thumbs">${imgs.map((k, j) => `<button class="thumb" type="button" data-act="gthumb" data-i="${j}" aria-label="Xem ảnh ${j + 1}" aria-current="${j === i}">${wellImg(k, "")}</button>`).join("")}</div>` : ""}`;
}
function renderRate() {
  const host = $("#pvRate"); if (!host) return;
  const st = Reviews.stats(S.pv.id);
  host.innerHTML = st.n ? `${starsHTML(st.avg)}<a href="#reviews" data-act="toreviews">${fmt1(st.avg)} trên 5, ${st.n} đánh giá</a>`
    : `<a href="#reviews" data-act="toreviews">Chưa có đánh giá. Viết đánh giá đầu tiên</a>`;
}
function renderBuy() {
  const p = byId[S.pv.id]; const saved = Saves.has(p.id);
  $("#pvBuy").innerHTML = `
    <p class="eyebrow">${p.badge ? esc(p.badge) : ""}</p>
    <h1>Mua ${esc(p.name)}</h1>
    <div class="pv-rate" id="pvRate"></div>
    <div class="pv-price">${vnd(price(p))}<s>${vnd(p.list)}</s></div>
    <p class="pv-save">Tiết kiệm ${vnd(p.list - price(p))} (${pctOff(p)}%) so với giá niêm yết.</p>
    ${p.colors ? `<div class="pv-sec"><h2>Màu sắc. <span>Chọn màu bạn thích.</span></h2>
      <div class="colors" role="group" aria-label="Màu sắc">${p.colors.map(c => `<button class="cswatch" type="button" style="--c:${c.c}" data-act="color" data-c="${esc(c.n)}" aria-pressed="${c.n === S.pv.color}" aria-label="Màu ${esc(c.n)}" title="${esc(c.n)}"></button>`).join("")}</div>
      <p class="cname">Màu ${esc(S.pv.color)}</p></div>` : ""}
    <div class="pv-sec"><h2>Số lượng.</h2><div class="stepper"><button type="button" data-act="qminus" aria-label="Giảm số lượng">−</button><output id="pvQty" aria-live="polite">${S.pv.qty}</output><button type="button" data-act="qplus" aria-label="Tăng số lượng">+</button></div></div>
    <div class="pv-actions"><button class="pill lg block" type="button" data-act="add">Thêm vào giỏ hàng</button><button class="pill lg block outline" type="button" data-act="buynow">Mua ngay</button></div>
    <div class="pv-save-row"><button class="savebtn" type="button" data-save="${p.id}" aria-pressed="${saved}">${ICON.heart}<span>${saved ? "Đã lưu" : "Lưu sản phẩm"}</span></button></div>
    <ul class="pv-info">
      <li>${ICON.phone}<div><b>Gọi xác nhận trước khi giao</b>Nexus gọi điện xác nhận đơn và báo phí giao hàng.</div></li>
      ${p.warranty ? `<li>${ICON.shield}<div><b>Bảo hành 12 tháng</b>Gọi ${telA()} khi bạn cần hỗ trợ bảo hành.</div></li>` : ""}
      <li>${ICON.chat}<div><b>Cần tư vấn?</b><button class="linkbtn" type="button" data-act="chat" data-q="Tư vấn giúp mình về ${esc(p.name)}">Hỏi trợ lý ${CONFIG.ADVISOR}</button> hoặc gọi ${telA()}.</div></li>
    </ul>`;
  renderRate();
}
function reviewHTML(r, withProduct) {
  const mine = Reviews.isMine(r); const canDel = mine || (PF.owner && !r.local);
  return `<article class="review">
    ${withProduct ? `<p class="muted" style="margin:0 0 6px;font-size:14px"><a href="#${r.pid}" data-go="product" data-arg="${r.pid}">${esc(byId[r.pid].name)}</a></p>` : ""}
    ${starsHTML(r.rating)}
    <h3 style="font-size:17px;margin:10px 0 4px">${r.title ? esc(r.title) : RATE_TXT[r.rating]}</h3>
    <p>${esc(r.text)}</p>
    <div class="rv-meta"><span>${esc(r.name)}</span><span>${fmtDate(r.at)}${r.edited ? " (đã sửa)" : ""}</span>${r.color ? `<span>Màu ${esc(r.color)}</span>` : ""}${r.verified ? `<span class="badge-ok">Đã mua tại Nexus</span>` : ""}${r.local ? `<span class="badge-local">Chỉ hiển thị trên thiết bị này</span>` : ""}</div>
    ${mine || canDel ? `<div class="rv-acts">${mine && !withProduct ? `<button class="linkbtn" type="button" data-act="write">Sửa</button>` : ""}${canDel ? `<button class="linkbtn" type="button" data-act="rvdel" data-pid="${r.pid}" data-acct="${esc(r.acct)}" data-uid="${esc(r.uid || "")}" data-local="${r.local ? "1" : ""}">Xóa</button>` : ""}</div>` : ""}
  </article>`;
}
function renderRv() {
  const p = byId[S.pv.id]; const st = Reviews.stats(p.id); const mine = Reviews.mine(p.id);
  let list = Reviews.for(p.id); if (S.pv.rf) list = list.filter(r => r.rating === S.pv.rf);
  const by = { new: (a, b) => String(b.at).localeCompare(String(a.at)), high: (a, b) => b.rating - a.rating || String(b.at).localeCompare(String(a.at)), low: (a, b) => a.rating - b.rating || String(b.at).localeCompare(String(a.at)) };
  list.sort(by[S.pv.rsort] || by.new);
  $("#pvRv").innerHTML = `
    <div class="rv-top">
      <div><div class="rv-avg">${st.n ? fmt1(st.avg) : "–"}</div>${starsHTML(st.avg, "lg")}<p class="rv-count">${st.n ? st.n + " đánh giá" : "Chưa có đánh giá"}</p></div>
      <div class="rv-dist">${[5, 4, 3, 2, 1].map(s => `<button class="rv-bar" type="button" data-act="rf" data-s="${s}" aria-pressed="${S.pv.rf === s}" aria-label="Lọc đánh giá ${s} sao, có ${st.dist[s]}"><span>${s} sao</span><span class="track"><i style="width:${st.n ? (st.dist[s] / st.n) * 100 : 0}%"></i></span><span>${st.dist[s]}</span></button>`).join("")}</div>
      <div class="rv-cta"><p>${mine ? "Bạn đã đánh giá sản phẩm này." : "Bạn đã dùng sản phẩm này?"}</p><button class="pill" type="button" data-act="write">${mine ? "Sửa đánh giá" : "Viết đánh giá"}</button><p class="note">${shareNote()}</p></div>
    </div>
    <div class="rv-tools">
      <div class="chips"><span class="muted" style="font-size:14px">${list.length} đánh giá${S.pv.rf ? " " + S.pv.rf + " sao" : ""}</span>${S.pv.rf ? `<button class="chip" type="button" data-act="rf" data-s="${S.pv.rf}">Bỏ lọc</button>` : ""}</div>
      <label class="field-s"><span class="sr">Sắp xếp đánh giá</span><select id="rvSort"><option value="new">Mới nhất</option><option value="high">Điểm cao nhất</option><option value="low">Điểm thấp nhất</option></select></label>
    </div>
    <div class="rv-list">${list.length ? list.map(r => reviewHTML(r)).join("")
      : `<div class="empty-state"><h3>${S.pv.rf ? `Chưa có đánh giá ${S.pv.rf} sao.` : "Chưa có đánh giá nào."}</h3><p>${S.pv.rf ? "Bỏ lọc để xem tất cả đánh giá." : "Hãy là người đầu tiên chia sẻ trải nghiệm về sản phẩm này."}</p></div>`}</div>`;
  const sel = $("#rvSort"); sel.value = S.pv.rsort; sel.onchange = e => { S.pv.rsort = e.target.value; renderRv(); };
}

/* ---------- Hộp thoại đánh giá ---------- */
function openReview(pid) {
  pid = pid || S.pv.id; const p = byId[pid];
  if (!Auth.me()) { openAuth("login", "Đăng nhập để viết đánh giá.", () => openReview(pid)); return; }
  const mine = Reviews.mine(pid); const me = Auth.me();
  $("#rvForm").dataset.pid = pid;
  $("#rvH").textContent = mine ? "Sửa đánh giá" : "Viết đánh giá";
  $("#rvProd").textContent = p.name;
  $("#rvStars").innerHTML = `<legend>Bạn chấm sản phẩm mấy sao?</legend><div class="rate-in">${[5, 4, 3, 2, 1].map(v => `<input type="radio" name="rvRating" id="rvS${v}" value="${v}"${mine && mine.rating === v ? " checked" : ""}><label for="rvS${v}" title="${v} sao">${ICON.star}<span class="sr">${v} sao</span></label>`).join("")}</div>`;
  $("#rvRateTxt").textContent = mine ? RATE_TXT[mine.rating] : "";
  $("#rvTitle").value = mine ? mine.title : "";
  $("#rvText").value = mine ? mine.text : "";
  $("#rvColorF").hidden = !p.colors;
  $("#rvColor").innerHTML = `<option value="">Không chọn</option>` + (p.colors || []).map(c => `<option${mine && mine.color === c.n ? " selected" : ""}>${esc(c.n)}</option>`).join("");
  $("#rvName").value = mine ? mine.name : me.name;
  $("#rvErr").textContent = ""; $$("#rvForm .bad").forEach(x => x.classList.remove("bad"));
  $("#rvNote").textContent = shareNote();
  $("#rvSubmit").disabled = false;
  $("#rvDlg").showModal();
}
async function handleReview() {
  const f = $("#rvForm"); const pid = f.dataset.pid; const err = $("#rvErr");
  const rating = +(($('input[name="rvRating"]:checked') || {}).value || 0);
  const text = $("#rvText").value.trim(), name = $("#rvName").value.trim();
  $$("#rvForm .bad").forEach(x => x.classList.remove("bad"));
  if (!rating) { err.textContent = "Chọn số sao cho sản phẩm."; $("#rvS5").focus(); return; }
  if (text.length < 10) { err.textContent = "Viết ít nhất 10 ký tự để người khác hiểu trải nghiệm của bạn."; $("#rvText").closest(".fld").classList.add("bad"); $("#rvText").focus(); return; }
  if (!name) { err.textContent = "Nhập tên hiển thị."; $("#rvName").closest(".fld").classList.add("bad"); $("#rvName").focus(); return; }
  err.textContent = ""; $("#rvSubmit").disabled = true;
  const where = await saveReview({ pid, rating, title: $("#rvTitle").value.trim(), text, name, color: $("#rvColor").value });
  $("#rvDlg").close();
  toast(where === "shared" ? "Đã đăng đánh giá. Cảm ơn bạn!" : "Đã lưu đánh giá trên thiết bị này. Cảm ơn bạn!");
  onReviewsChanged();
}

/* ---------- Trợ lý tư vấn AI (F5Nexus) ---------- */
const Chat = { turns: [], busy: false, ctl: null, fn: undefined, off: "", ready: null, isOpen: false };
const HIDE_CODES = ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"];
const isNarrow = () => window.matchMedia && matchMedia("(max-width:560px)").matches;

function initChatAI() {
  if (!window.claude || typeof window.claude.use !== "function") { Chat.fn = null; return; }
  Chat.ready = window.claude.use("sample")
    .then(f => { Chat.fn = typeof f === "function" ? f : null; if (!Chat.fn && Chat.isOpen) renderChat(); return Chat.fn; })
    .catch(() => { Chat.fn = null; return null; });
}

function chatRules() {
  const H = fmtPhone(CONFIG.HOTLINE);
  const viewName = { home: "Trang chủ", store: "Cửa hàng", compare: "So sánh sản phẩm", bag: "Giỏ hàng", checkout: "Thanh toán", done: "Đặt hàng thành công", account: "Tài khoản", support: "Hỗ trợ", admin: "Quản lý" };
  const catalog = P.map(p => {
    const specs = SPEC_ROWS.filter(([k]) => k !== "nhom").map(([k, l]) => [l, specVal(p, k)]).filter(r => r[1]).map(([l, v]) => `${l}: ${v}`).join("; ");
    return `[[${p.id}]] ${p.name} | Nhóm: ${catOf(p.cat).name} | Giá bán: ${vnd(price(p))} (giá niêm yết ${vnd(p.list)}) | ${p.colors ? "Màu: " + p.colors.map(c => c.n).join(", ") : "Một phiên bản màu"} | Nổi bật: ${p.hl.join(" ")} | Thông số: ${specs}`;
  }).join("\n");
  const ctx = [S.view === "product" && byId[S.pv.id] ? `Khách đang xem trang sản phẩm: ${byId[S.pv.id].name} [[${S.pv.id}]].` : `Khách đang ở trang: ${viewName[S.view] || "Trang chủ"}.`];
  ctx.push(cart.length ? `Giỏ hàng của khách: ${cart.map(l => `${byId[l.id].name}${l.color ? " (màu " + l.color + ")" : ""} x${l.qty}`).join(", ")}.` : "Giỏ hàng của khách đang trống.");
  return `Bạn là ${CONFIG.ADVISOR}, trợ lý tư vấn bán hàng bằng AI của cửa hàng Nexus, đại lý sản phẩm gia dụng Magic tại Việt Nam. Bạn đang trò chuyện với khách ngay trên website của Nexus. Lời chào đã hiển thị sẵn cho khách, nên đừng chào lại; đi thẳng vào câu trả lời.

CÁCH TRẢ LỜI
- Trả lời bằng tiếng Việt, xưng "mình", gọi khách là "bạn". Thân thiện, ngắn gọn, thường 2 đến 5 câu. Không dùng tiêu đề hay bảng; nếu cần liệt kê thì mỗi ý một dòng bắt đầu bằng "- ".
- Chỉ dùng thông tin trong danh mục và chính sách bên dưới. Không bịa thông số, giá, khuyến mãi, mã giảm giá, thời gian giữ nhiệt hay chính sách. Thiếu thông tin thì nói thật và mời khách gọi hotline ${H}.
- Khi gợi ý một sản phẩm, ghi mã của nó ngay sau tên, ví dụ: Bình giữ nhiệt Magic MC870 [[mc870]]. Website sẽ hiện thẻ sản phẩm để khách bấm xem hoặc mua. Gợi ý tối đa 3 sản phẩm mỗi lần.
- Nếu chưa rõ nhu cầu, hỏi lại một câu ngắn (dùng ở đâu, mang theo hay để bàn, ngân sách bao nhiêu).
- Không nói sản phẩm chữa hay ngăn ngừa bệnh. Với vấn đề răng miệng hoặc sức khỏe, khuyên khách hỏi nha sĩ hoặc bác sĩ.
- Bạn không thể tự đặt hàng, xem đơn, đổi trả hay xử lý thanh toán. Cách mua: chọn màu, bấm "Thêm vào giỏ hàng", rồi "Thanh toán" và điền thông tin nhận hàng; Nexus sẽ gọi điện xác nhận đơn và báo phí giao hàng. Với đơn đã đặt, bảo hành, đổi trả hay khiếu nại, mời khách gọi ${H}.
- Nếu khách hỏi điều không liên quan đến mua sắm tại Nexus, trả lời thật ngắn rồi lịch sự đưa câu chuyện về sản phẩm.
- Bạn là trợ lý AI, không phải nhân viên. Nói rõ điều này nếu khách hỏi.

CHÍNH SÁCH CỬA HÀNG
- Giá trong danh mục là giá bán hiện tại tại Nexus, đã giảm so với giá niêm yết.
- Phí vận chuyển: Nexus báo khi gọi xác nhận đơn, tùy địa chỉ nhận hàng.
- Thanh toán: tiền mặt khi nhận hàng (COD) hoặc chuyển khoản; Nexus gửi thông tin chuyển khoản khi xác nhận đơn.
- Bảo hành 12 tháng: tăm nước B‑02PRO, bàn chải điện B‑26, quạt cầm tay A‑014. Sản phẩm khác: mời khách gọi hotline để biết chính sách.
- Không cần tài khoản để mua hàng. Tài khoản giúp lưu địa chỉ, xem lại đơn, lưu sản phẩm và viết đánh giá.
- Hotline Nexus: ${H}.

DANH MỤC SẢN PHẨM (mã sản phẩm nằm trong ngoặc vuông kép)
${catalog}

TÌNH TRẠNG HIỆN TẠI
${ctx.join("\n")}

Cuộc trò chuyện với khách bắt đầu từ tin nhắn tiếp theo.`;
}

function aiRender(text) {
  const ids = [];
  let t = String(text || "").replace(/\[\[\s*([a-z0-9_-]+)\s*\]\]/gi, (m, id) => { id = id.toLowerCase(); if (byId[id] && !ids.includes(id)) ids.push(id); return ""; });
  t = t.replace(/\[\[[^\]]*$/, "").replace(/[ \t]+([.,;:!?)])/g, "$1").replace(/\(\s*\)/g, "").replace(/^#+\s*/gm, "").trim();
  const html = esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/^\s*[-•*]\s+/gm, "• ");
  return { html, ids: ids.slice(0, 3) };
}
function chatCard(id) {
  const p = byId[id];
  return `<div class="chat-card">${wellImg(mainImg(p), "")}<div><b>${esc(p.name)}</b><span>${vnd(price(p))}</span></div>
    <div class="cc-act"><button class="pill sm ghost" type="button" data-act="chatview" data-id="${id}">Xem</button><button class="pill sm" type="button" data-act="chatbuy" data-id="${id}">Mua</button></div></div>`;
}
function unavailableText() {
  const H = fmtPhone(CONFIG.HOTLINE);
  return Chat.off === "not_granted"
    ? `Trợ lý AI cần bạn cho phép mới trả lời được trên trang này. Bạn có thể gọi ${H} để được nhân viên Nexus tư vấn trực tiếp.`
    : `Trợ lý AI chưa dùng được trên trình duyệt này. Bạn gọi ${H} để được nhân viên Nexus tư vấn trực tiếp nhé.`;
}
function bubbleHTML(t, i) {
  if (t.role === "user") return `<div class="msg me"><div class="bub">${esc(t.content)}</div></div>`;
  if (t.fallback) return `<div class="msg ai"><div class="bub">${esc(unavailableText())}</div><a class="pill sm outline" style="margin-top:8px;align-self:flex-start" href="tel:${esc(CONFIG.HOTLINE)}">Gọi ${fmtPhone(CONFIG.HOTLINE)}</a></div>`;
  if (t.pending) return `<div class="msg ai"><div class="bub typing" role="status" aria-label="Trợ lý đang trả lời"><i></i><i></i><i></i></div></div>`;
  const r = aiRender(t.content);
  return `<div class="msg ai">${r.html ? `<div class="bub">${r.html}</div>` : ""}${r.ids.length ? `<div class="chat-cards">${r.ids.map(chatCard).join("")}</div>` : ""}${t.note ? `<p class="msg-note">${esc(t.note)}</p>` : ""}${t.error ? `<p class="msg-err">${esc(t.error)}${t.retry ? ` <button class="linkbtn" type="button" data-act="chatretry" data-i="${i}">Thử lại</button>` : ""}</p>` : ""}</div>`;
}
function chatSuggestions() {
  const s = [];
  if (S.view === "product" && byId[S.pv.id]) s.push(`Tư vấn giúp mình về ${byId[S.pv.id].name}`);
  s.push("Nên chọn bình giữ nhiệt nào?", "Tăm nước B‑02PRO dùng thế nào?", "Quạt A‑014 và A‑028 khác gì nhau?", "Phí ship và cách thanh toán?");
  return s.slice(0, 4);
}
function renderChat() {
  const body = $("#chatBody"); if (!body) return;
  const off = Chat.fn === null && !Chat.turns.length;
  body.innerHTML = `<div class="msg ai"><div class="bub">${off ? esc(unavailableText())
      : `Xin chào! Mình là ${esc(CONFIG.ADVISOR)}, trợ lý tư vấn AI của Nexus. Bạn đang tìm sản phẩm cho nhu cầu nào? Mình giúp bạn chọn bình giữ nhiệt, tăm nước, bàn chải điện hay quạt sạc.`}</div>
      ${off ? `<a class="pill sm outline" style="margin-top:8px;align-self:flex-start" href="tel:${esc(CONFIG.HOTLINE)}">Gọi ${fmtPhone(CONFIG.HOTLINE)}</a>` : ""}</div>
    ${!Chat.turns.length && !off ? `<div class="chips-chat">${chatSuggestions().map(q => `<button class="qchip" type="button" data-act="chatq" data-q="${esc(q)}">${esc(q)}</button>`).join("")}</div>` : ""}
    ${Chat.turns.map(bubbleHTML).join("")}`;
  body.scrollTop = body.scrollHeight;
  updateChatInput();
}
function updateLastBubble() {
  const body = $("#chatBody"); if (!body) return;
  const nearBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 80;
  const msgs = body.querySelectorAll(".msg"); const last = msgs[msgs.length - 1];
  const i = Chat.turns.length - 1;
  if (last) last.outerHTML = bubbleHTML(Chat.turns[i], i);
  if (nearBottom) body.scrollTop = body.scrollHeight;
}
function updateChatInput() {
  const send = $("#chatSend"), input = $("#chatInput"); if (!send) return;
  const off = Chat.fn === null;
  input.disabled = off; input.placeholder = off ? "Trợ lý AI chưa sẵn sàng" : "Hỏi về sản phẩm, giá, cách dùng…";
  send.innerHTML = Chat.busy ? ICON.stop : ICON.send;
  send.setAttribute("aria-label", Chat.busy ? "Dừng trả lời" : "Gửi");
  send.disabled = off;
}
function openChat(prefill) {
  closeFly(); Chat.isOpen = true;
  $("#chat").hidden = false; $("#chatFab").hidden = true;
  renderChat();
  const i = $("#chatInput");
  if (prefill) { i.value = prefill; }
  if (!isNarrow()) setTimeout(() => i.focus(), 40);
}
function closeChat() {
  Chat.isOpen = false; $("#chat").hidden = true; $("#chatFab").hidden = false; $("#chatFab").focus();
}
function growInput() { const i = $("#chatInput"); i.style.height = "auto"; i.style.height = Math.min(120, i.scrollHeight) + "px"; }

async function chatSend(q) {
  q = String(q || "").trim(); if (!q || Chat.busy) return;
  if (Chat.fn === undefined && Chat.ready) await Chat.ready;
  Chat.turns.push({ role: "user", content: q.slice(0, 600) });
  const bubble = { role: "assistant", content: "", pending: true };
  Chat.turns.push(bubble); renderChat();
  if (!Chat.fn) { bubble.pending = false; bubble.fallback = true; renderChat(); return; }
  const history = Chat.turns.filter(t => t !== bubble && !t.fallback && !t.error && t.content).slice(-16);
  while (history.length && history[0].role !== "user") history.shift();
  Chat.busy = true; Chat.ctl = new AbortController(); updateChatInput();
  try {
    const res = await Chat.fn([{ role: "user", content: chatRules() }, ...history], {
      modelTier: "quick", cache: false, signal: Chat.ctl.signal,
      onText: ({ text }) => { const first = bubble.pending; bubble.content = text; bubble.pending = false; if (first) renderChat(); else updateLastBubble(); }
    });
    bubble.content = res.text; bubble.pending = false;
    if (res.truncated) bubble.note = "Câu trả lời bị cắt ngắn. Bạn hỏi ngắn hơn để mình trả lời đủ nhé.";
  } catch (e) {
    const code = (e && e.code) || "upstream_error"; bubble.pending = false;
    if (code === "cancelled") { bubble.content = e.text || ""; bubble.note = "Đã dừng trả lời."; }
    else if (HIDE_CODES.includes(code)) { Chat.fn = null; Chat.off = code; bubble.fallback = true; bubble.content = ""; }
    else if (code === "rate_limited") { bubble.content = e.text || ""; bubble.error = `Trợ lý đang bận. Bạn thử lại sau ít phút, hoặc gọi ${fmtPhone(CONFIG.HOTLINE)}.`; }
    else if (code === "refused") { bubble.content = ""; bubble.error = "Mình chưa trả lời được câu này. Bạn hỏi cách khác về sản phẩm nhé."; }
    else if (code === "session_expired") { bubble.content = e.text || ""; bubble.error = "Phiên đăng nhập Claude đã hết hạn. Bạn đăng nhập lại để tiếp tục trò chuyện."; }
    else if (code === "empty_completion") { bubble.error = "Mình chưa có câu trả lời. Bạn hỏi lại ngắn gọn hơn nhé."; }
    else if (code === "prompt_too_large") { Chat.turns = Chat.turns.slice(-2); bubble.error = "Cuộc trò chuyện đã dài. Mình đã rút gọn, bạn hỏi lại nhé."; }
    else { bubble.content = e.text || ""; bubble.error = "Kết nối bị gián đoạn."; bubble.retry = q; }
  }
  Chat.busy = false; Chat.ctl = null; renderChat();
}

/* ---------- So sánh ---------- */
R.compare = arg => {
  if (arg === "binh") S.cmp = ["mc570", "mc870", "mc1200"];
  else if (arg === "rang") S.cmp = ["b02pro", "b26"];
  else if (arg === "quat") S.cmp = ["a028", "a014"];
  renderCompare();
};
function renderCompare() {
  const el = $('[data-view="compare"]'); const sel = S.cmp.map(id => byId[id]).filter(Boolean); const n = sel.length;
  const rows = [["gia", "Giá bán"], ["niemyet", "Giá niêm yết"], ...SPEC_ROWS].filter(([k]) => sel.some(p => specVal(p, k)));
  el.innerHTML = `<div class="wrap wide cmp">
    <h1>So sánh sản phẩm.</h1>
    <p class="muted" style="margin:0 0 18px">Chọn sản phẩm ở mỗi cột để xem khác biệt về dung tích, pin, tính năng và giá.</p>
    <div class="chips" style="margin:0 0 30px"><button class="chip" type="button" data-act="cmpset" data-set="binh">Bình giữ nhiệt</button><button class="chip" type="button" data-act="cmpset" data-set="rang">Răng miệng</button><button class="chip" type="button" data-act="cmpset" data-set="quat">Quạt sạc</button>${n < 3 ? `<button class="chip" type="button" data-act="cmpadd">Thêm cột so sánh</button>` : ""}</div>
    <div class="cmp-scroll" style="--n:${n}">
      <div class="cmp-cols">${sel.map((p, i) => `<div class="cmp-col">
        <label class="field-s"><span class="sr">Sản phẩm cột ${i + 1}</span><select data-cmp="${i}">${P.map(o => `<option value="${o.id}"${o.id === p.id ? " selected" : ""}>${esc(o.name)}</option>`).join("")}</select></label>
        ${wellImg(mainImg(p), p.name)}${swatches(p)}
        <h3>${esc(p.short)}</h3><p class="muted" style="margin:0 0 14px">${esc(p.tag)}</p>
        <div class="row" style="justify-content:center"><button class="pill sm" type="button" data-buy="${p.id}">Mua</button><a class="more" style="font-size:14px" href="#${p.id}" data-go="product" data-arg="${p.id}">Tìm hiểu thêm</a></div>
        ${n > 2 ? `<p style="margin:12px 0 0"><button class="linkbtn" style="font-size:12px" type="button" data-act="cmprm" data-i="${i}">Bỏ cột này</button></p>` : ""}
      </div>`).join("")}</div>
      ${rows.map(([k, l]) => `<div class="cmp-row"><div class="cmp-label">${l}</div><div class="cmp-vals">${sel.map(p => `<div>${esc(specVal(p, k) || "—")}</div>`).join("")}</div></div>`).join("")}
    </div></div>`;
  $$("[data-cmp]", el).forEach(s => s.addEventListener("change", e => { S.cmp[+e.target.dataset.cmp] = e.target.value; renderCompare(); }));
}

/* ---------- Giỏ hàng ---------- */
R.bag = () => {
  const el = $('[data-view="bag"]'); const t = totals(); const me = Auth.me();
  if (!cart.length) {
    el.innerHTML = `<div class="wrap narrow bagv"><div class="bag-top" style="border:0"><h1>Giỏ hàng của bạn đang trống.</h1>
      <p>${me ? "Xem lại các sản phẩm bạn đã lưu, hoặc tiếp tục mua sắm." : "Đăng nhập để xem các sản phẩm bạn đã lưu, hoặc tiếp tục mua sắm."}</p>
      <div class="row" style="justify-content:center"><a class="pill" href="#cua-hang" data-go="store" data-cat="all">Tiếp tục mua sắm</a>${me ? `<a class="pill outline" href="#tai-khoan" data-go="account" data-arg="saves">Sản phẩm đã lưu</a>` : `<button class="pill outline" type="button" data-act="login">Đăng nhập</button>`}</div></div></div>`;
    return;
  }
  const cp = CONFIG.COUPONS[coupon];
  el.innerHTML = `<div class="wrap narrow bagv">
    <div class="bag-top"><h1>Tổng giá trị giỏ hàng của bạn là ${vnd(t.total)}.</h1><p>Nexus báo phí vận chuyển khi gọi xác nhận đơn hàng.</p><a class="pill lg" href="#thanh-toan" data-go="checkout">Thanh toán</a></div>
    ${cart.map((l, i) => { const p = byId[l.id]; return `<div class="bline">${wellImg(lineImgKey(l), p.name)}
      <div><h3><a href="#${p.id}" data-go="product" data-arg="${p.id}" style="color:inherit">${esc(p.name)}</a></h3><p class="meta">${l.color ? "Màu " + esc(l.color) + "<br>" : ""}Đơn giá ${vnd(price(p))}</p></div>
      <div class="right"><label><span class="sr">Số lượng ${esc(p.name)}</span><select class="qsel" data-act="qty" data-i="${i}">${Array.from({ length: 20 }, (_, k) => `<option${k + 1 === l.qty ? " selected" : ""}>${k + 1}</option>`).join("")}</select></label>
      <div class="lt">${vnd(price(p) * l.qty)}</div><button class="linkbtn" type="button" data-act="rm" data-i="${i}">Xóa</button></div></div>`; }).join("")}
    <div class="bsum">
      ${cp ? `<div class="srow sm" style="color:var(--ink)"><span>Đã áp dụng mã <b>${esc(coupon)}</b> (${esc(cp.label)})</span><button class="linkbtn" type="button" data-act="uncoupon">Gỡ mã</button></div>`
           : `<form class="coupon" id="couponForm" novalidate><div class="fld"><input id="cpIn" placeholder=" " autocomplete="off" autocapitalize="characters"><label for="cpIn">Mã khuyến mãi</label></div><button class="pill ghost" type="submit">Áp dụng</button></form><p class="err" id="cpErr" role="alert"></p>`}
      <div class="srow"><span>Tạm tính</span><span>${vnd(t.sub)}</span></div>
      ${t.disc ? `<div class="srow"><span>Giảm giá</span><span class="disc">−${vnd(t.disc)}</span></div>` : ""}
      <div class="srow sm"><span>Vận chuyển</span><span>Báo khi xác nhận</span></div>
      <div class="srow total"><span>Tổng cộng</span><span>${vnd(t.total)}</span></div>
      <div class="srow sm"><span>Bạn tiết kiệm ${vnd(t.save)} so với giá niêm yết.</span></div>
      <a class="pill lg block" href="#thanh-toan" data-go="checkout" style="margin-top:18px">Thanh toán</a>
    </div></div>`;
};

/* ---------- Thanh toán ---------- */
R.checkout = () => {
  const el = $('[data-view="checkout"]'); const me = Auth.me(); const t = totals();
  el.innerHTML = `<div class="wrap wide co"><h1>Thanh toán.</h1>
    ${me ? `<p class="muted" style="margin:0">Đặt hàng với tài khoản ${esc(me.email)}.</p>` : `<div class="co-login"><span>Đã có tài khoản? Đăng nhập để điền nhanh thông tin và xem lại đơn hàng sau này.</span><button class="pill sm outline" type="button" data-act="login">Đăng nhập</button></div>`}
    <div class="co-grid">
      <form id="coForm" novalidate>
        <h2>Bạn muốn nhận hàng ở đâu?</h2>
        ${fld("coName", "Họ và tên người nhận", "text", "name", me ? me.name : "")}
        ${fld("coPhone", "Số điện thoại", "tel", "tel", me ? me.phone : "", 'inputmode="tel"')}
        <div class="fld"><textarea id="coAddr" placeholder=" " autocomplete="street-address" style="min-height:90px">${esc(me ? me.addr : "")}</textarea><label for="coAddr">Địa chỉ: số nhà, đường, phường/xã, tỉnh/thành</label></div>
        ${me ? `<label class="check"><input type="checkbox" id="coSave" checked> Lưu số điện thoại và địa chỉ vào tài khoản</label>` : ""}
        <h2>Bạn muốn thanh toán thế nào?</h2>
        <div class="rcards" role="radiogroup" aria-label="Phương thức thanh toán">
          <label class="rcard"><input type="radio" name="pay" value="Thanh toán khi nhận hàng (COD)" checked><div><b>Thanh toán khi nhận hàng</b><span>Trả tiền mặt cho người giao hàng.</span></div></label>
          <label class="rcard"><input type="radio" name="pay" value="Chuyển khoản"><div><b>Chuyển khoản</b><span>Nexus gửi thông tin chuyển khoản khi gọi xác nhận đơn.</span></div></label>
        </div>
        <h2>Ghi chú cho người bán</h2>
        ${fld("coNote", "Ghi chú (không bắt buộc)", "text", "off")}
        <p class="err" id="coErr" role="alert"></p>
        <button class="pill lg block" type="submit">Đặt hàng</button>
        <p class="note">Sau khi đặt, Nexus gọi điện xác nhận đơn và báo phí vận chuyển.</p>
      </form>
      <aside class="co-sum" aria-label="Tóm tắt đơn hàng"><h3>Đơn hàng của bạn</h3>
        ${cart.map(l => { const p = byId[l.id]; return `<div class="mini">${wellImg(lineImgKey(l), "")}<div>${esc(p.name)}<br><span class="muted">${l.color ? "Màu " + esc(l.color) + ", " : ""}số lượng ${l.qty}</span></div><b>${vnd(price(p) * l.qty)}</b></div>`; }).join("")}
        <div class="srow sm"><span>Tạm tính</span><span>${vnd(t.sub)}</span></div>
        ${t.disc ? `<div class="srow sm"><span>Giảm giá (${esc(coupon)})</span><span class="disc">−${vnd(t.disc)}</span></div>` : ""}
        <div class="srow sm"><span>Vận chuyển</span><span>Báo khi xác nhận</span></div>
        <div class="srow total"><span>Tổng cộng</span><span>${vnd(t.total)}</span></div>
        <p style="margin:14px 0 0"><a class="more" href="#gio-hang" data-go="bag" style="font-size:14px">Sửa giỏ hàng</a></p>
      </aside>
    </div></div>`;
};
async function placeOrder() {
  const f = $("#coForm"); const err = $("#coErr"); const val = id => $("#" + id).value.trim();
  $$(".fld.bad", f).forEach(x => x.classList.remove("bad")); err.textContent = "";
  const bad = (id, msg) => { err.textContent = msg; const i = $("#" + id); i.closest(".fld").classList.add("bad"); i.focus(); };
  const name = val("coName"), phone = val("coPhone").replace(/[\s.\-]/g, ""), addr = val("coAddr");
  if (!name) return bad("coName", "Nhập họ và tên người nhận.");
  if (!PHONE_RE.test(phone)) return bad("coPhone", "Số điện thoại chưa đúng. Nhập 10 số, ví dụ 0901234567.");
  if (addr.length < 8) return bad("coAddr", "Nhập địa chỉ đầy đủ: số nhà, đường, phường/xã, tỉnh/thành.");
  const t = totals(); const now = new Date();
  const o = { code: now.getTime().toString(36).toUpperCase().slice(-6), at: now.toISOString(), acct: Auth.key(), name, phone, addr,
    pay: f.querySelector("[name=pay]:checked").value, note: val("coNote"), coupon: t.disc ? coupon : "",
    items: cart.map(l => ({ id: l.id, name: byId[l.id].name, color: l.color || "", qty: l.qty, price: price(byId[l.id]) })),
    sub: t.sub, disc: t.disc, total: t.total, status: "pending" };
  if (Auth.me() && $("#coSave") && $("#coSave").checked) Auth.update({ phone, addr });
  const btn = f.querySelector("[type=submit]"); btn.disabled = true; btn.textContent = "Đang đặt hàng…";
  o.shared = canShare() ? await sharedMutate("orders", body => { body.list = [...(Array.isArray(body.list) ? body.list : []), o].slice(-50); }) : false;
  Orders.add(o); S.lastOrder = o;
  cart = []; coupon = ""; LS.set("dbc2_coupon", ""); saveCart();
  go("done");
}
R.done = () => {
  const o = S.lastOrder; const el = $('[data-view="done"]');
  el.innerHTML = `<div class="wrap narrow done">
    <div class="done-check">${ICON.checkBig}</div>
    <h1>Cảm ơn bạn. Đơn hàng #${esc(o.code)} đã được tạo.</h1>
    <p class="muted">Tổng cộng ${vnd(o.total)}, chưa gồm phí vận chuyển.</p>
    <ol class="steps">
      ${o.shared ? `<li><div><b>Nexus đã nhận đơn của bạn.</b><br><span class="muted">Đơn hàng được gửi thẳng tới cửa hàng.</span></div></li>`
        : `<li><div><b>Gửi đơn cho Nexus.</b><br><span class="muted">Nhắn tin hoặc gọi ${fmtPhone(CONFIG.HOTLINE)} để Nexus nhận đơn của bạn.</span></div></li>`}
      <li><div><b>Nexus gọi xác nhận.</b><br><span class="muted">Nhân viên gọi số ${esc(o.phone)} để xác nhận đơn và báo phí vận chuyển.</span></div></li>
      <li><div><b>Nhận hàng.</b><br><span class="muted">${esc(o.pay)}.</span></div></li>
    </ol>
    ${o.shared ? `<p class="note">Cần đổi thông tin đơn? Gọi ${telA()}.</p>` : `<label class="sr" for="oText">Nội dung đơn hàng</label>
    <textarea class="otext" id="oText" readonly>${esc(orderText(o))}</textarea>
    <div class="row" style="justify-content:center;margin-top:16px">
      <a class="pill" href="sms:${esc(CONFIG.HOTLINE)}?&amp;body=${encodeURIComponent(orderText(o))}">Gửi đơn qua tin nhắn</a>
      <a class="pill outline" href="tel:${esc(CONFIG.HOTLINE)}">Gọi ${fmtPhone(CONFIG.HOTLINE)}</a>
      <button class="pill ghost" type="button" data-act="copy" data-src="oText">Sao chép đơn</button>
    </div>
    <p class="note">Trên máy tính, bạn sao chép đơn rồi nhắn cho số ${fmtPhone(CONFIG.HOTLINE)}.</p>`}
    <div class="row" style="justify-content:center;gap:28px;margin-top:34px"><a class="more" href="#tai-khoan" data-go="account" data-arg="orders">Xem đơn hàng của tôi</a><a class="more" href="#cua-hang" data-go="store" data-cat="all">Tiếp tục mua sắm</a></div>
  </div>`;
};

/* ---------- Đăng nhập, tài khoản ---------- */
let authAfter = null;
function authFormHTML(mode, pfx, reason) {
  const reg = mode === "register";
  return `<form class="auth-form" data-mode="${mode}" data-pfx="${pfx}" novalidate>
    <p class="auth-logo"><img src="${LOGO}" alt="" width="132" height="36"></p>
    <h2>${reg ? "Tạo tài khoản Nexus" : "Đăng nhập vào Nexus"}</h2>
    <p class="lead">${esc(reason || (reg ? "Một tài khoản để xem lại đơn hàng, lưu sản phẩm và viết đánh giá." : "Xem lại đơn hàng, sản phẩm đã lưu và viết đánh giá."))}</p>
    ${reg ? fld(pfx + "Name", "Họ và tên", "text", "name") : ""}
    ${fld(pfx + "Email", "Email", "email", "email")}
    ${reg ? fld(pfx + "Phone", "Số điện thoại (không bắt buộc)", "tel", "tel", "", 'inputmode="tel"') : ""}
    ${fldPass(pfx + "Pass", reg ? "Mật khẩu, ít nhất 6 ký tự" : "Mật khẩu", reg ? "new-password" : "current-password")}
    ${reg ? "" : `<label class="check"><input type="checkbox" name="remember" checked> Ghi nhớ đăng nhập</label>`}
    <p class="err" role="alert"></p>
    <button class="pill lg block" type="submit">${reg ? "Tạo tài khoản" : "Đăng nhập"}</button>
    <p class="auth-switch">${reg ? `Đã có tài khoản? <button class="linkbtn" type="button" data-act="authmode" data-mode="login">Đăng nhập</button>` : `Chưa có tài khoản? <button class="linkbtn" type="button" data-act="authmode" data-mode="register">Tạo tài khoản</button>`}</p>
    <p class="note" style="text-align:center">Tài khoản được lưu trên trình duyệt của thiết bị này.</p>
  </form>`;
}
function openAuth(mode = "login", reason = "", after = null) {
  closeFly(); authAfter = after;
  $("#authHost").innerHTML = authFormHTML(mode, "d", reason);
  $("#authDlg").showModal();
  setTimeout(() => { const i = $("#authHost input"); if (i) i.focus(); }, 40);
}
async function handleAuth(f) {
  const pfx = f.dataset.pfx, mode = f.dataset.mode, err = f.querySelector(".err");
  const get = id => { const i = f.querySelector("#" + pfx + id); return i ? i.value.trim() : ""; };
  const fail = (id, msg) => { err.textContent = msg; const i = f.querySelector("#" + pfx + id); if (i) { i.closest(".fld").classList.add("bad"); i.focus(); } };
  $$(".fld.bad", f).forEach(x => x.classList.remove("bad")); err.textContent = "";
  const email = get("Email"), pass = f.querySelector("#" + pfx + "Pass").value;
  const btn = f.querySelector("[type=submit]");
  if (mode === "register" && !get("Name")) return fail("Name", "Nhập họ và tên.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail("Email", "Nhập email hợp lệ, ví dụ ten@gmail.com.");
  btn.disabled = true;
  try {
    if (mode === "register") {
      const phone = get("Phone").replace(/[\s.\-]/g, "");
      if (phone && !PHONE_RE.test(phone)) { btn.disabled = false; return fail("Phone", "Số điện thoại chưa đúng, ví dụ 0901234567."); }
      if (pass.length < 6) { btn.disabled = false; return fail("Pass", "Mật khẩu cần ít nhất 6 ký tự."); }
      await Auth.register({ name: get("Name"), email, phone, pass });
      toast(`Đã tạo tài khoản. Chào mừng ${Auth.me().name}!`);
    } else {
      if (!pass) { btn.disabled = false; return fail("Pass", "Nhập mật khẩu."); }
      await Auth.login(email, pass, f.querySelector("[name=remember]").checked);
      toast(`Xin chào, ${Auth.me().name}.`);
    }
  } catch (x) { btn.disabled = false; return fail(mode === "register" ? "Email" : "Pass", x.message); }
  if ($("#authDlg").open) $("#authDlg").close();
  S.statusFetched = false; rerender();
  const cb = authAfter; authAfter = null; if (cb) cb();
}
R.account = tab => {
  const el = $('[data-view="account"]'); const me = Auth.me();
  if (tab) S.acctTab = tab;
  if (!me) { el.innerHTML = `<div class="auth-page">${authFormHTML(S.authMode, "p", "")}</div>`; return; }
  S.statusFetched = false;
  const tabs = [["orders", "Đơn hàng"], ["saves", "Đã lưu"], ["reviews", "Đánh giá của tôi"], ["profile", "Thông tin tài khoản"]];
  el.innerHTML = `<div class="wrap acct"><h1>Xin chào, ${esc(me.name)}.</h1><p class="muted" style="margin:0">${esc(me.email)}</p>
    <div class="tabs" role="tablist" aria-label="Tài khoản">${tabs.map(([k, l]) => `<button class="tab" role="tab" type="button" data-act="tab" data-tab="${k}" aria-selected="${S.acctTab === k}">${l}</button>`).join("")}</div>
    <div id="acctPanel" role="tabpanel"></div>
    <p style="margin-top:44px"><button class="linkbtn" type="button" data-act="logout">Đăng xuất</button></p></div>`;
  renderAcctPanel();
};
function itemImg(i) { const p = byId[i.id]; if (!p) return "m570_all"; if (i.color && p.colors) { const c = p.colors.find(c => c.n === i.color); if (c) return c.img; } return mainImg(p); }
function fetchMyStatuses() {
  if (S.statusFetched || !PF.db || !PF.uid) return; S.statusFetched = true;
  PF.db.doc("orders/" + PF.uid).get().then(s => {
    if (!s.exists) return; const map = {};
    (((s.data() || {}).list) || []).forEach(o => { if (o && o.code && STATUS[o.status]) map[o.code] = o.status; });
    S.myStatus = map; if (S.view === "account" && S.acctTab === "orders") renderAcctPanel();
  }).catch(() => {});
}
function renderAcctPanel() {
  const host = $("#acctPanel"); if (!host) return; const me = Auth.me(); const k = S.acctTab;
  if (k === "orders") {
    fetchMyStatuses();
    const list = Orders.list();
    host.innerHTML = list.length ? list.map(o => { const st = S.myStatus[o.code] || o.status || "pending"; return `<div class="ocard">
      <div class="ocard-h"><div><h3>Đơn hàng #${esc(o.code)}</h3><p class="muted" style="margin:2px 0 0;font-size:14px">Đặt ngày ${fmtDate(o.at)}, ${o.items.reduce((a, i) => a + i.qty, 0)} sản phẩm</p></div><span class="status ${st}">${STATUS[st]}</span></div>
      <div class="othumbs">${o.items.map(i => wellImg(itemImg(i), i.name)).join("")}</div>
      <div class="srow sm"><span>${esc(o.pay)}</span><span>Tổng cộng <b style="color:var(--ink)">${vnd(o.total)}</b></span></div>
      <div class="row" style="margin-top:12px"><button class="pill sm outline" type="button" data-act="reorder" data-code="${esc(o.code)}">Mua lại</button><button class="pill sm ghost" type="button" data-act="copyorder" data-code="${esc(o.code)}">Sao chép đơn</button></div></div>`; }).join("")
      + `<p class="note">Trạng thái đơn được Nexus cập nhật sau khi gọi xác nhận.</p>`
      : `<div class="empty-state"><h3>Bạn chưa có đơn hàng nào.</h3><p>Đơn bạn đặt khi đăng nhập sẽ hiện ở đây.</p><a class="pill" href="#cua-hang" data-go="store" data-cat="all">Bắt đầu mua sắm</a></div>`;
  } else if (k === "saves") {
    const l = Saves.list();
    host.innerHTML = l.length ? `<div class="pgrid">${l.map(id => cardHTML(byId[id])).join("")}</div>`
      : `<div class="empty-state"><h3>Bạn chưa lưu sản phẩm nào.</h3><p>Bấm biểu tượng trái tim trên sản phẩm để lưu lại xem sau.</p><a class="pill" href="#cua-hang" data-go="store" data-cat="all">Xem sản phẩm</a></div>`;
  } else if (k === "reviews") {
    const l = Reviews.all().filter(r => Reviews.isMine(r)).sort((a, b) => String(b.at).localeCompare(String(a.at)));
    host.innerHTML = l.length ? `<div class="rv-list">${l.map(r => reviewHTML(r, true)).join("")}</div>`
      : `<div class="empty-state"><h3>Bạn chưa viết đánh giá nào.</h3><p>Mở trang sản phẩm bạn đã dùng và bấm “Viết đánh giá”.</p></div>`;
  } else {
    host.innerHTML = `<div class="grid2">
      <form id="profForm" novalidate><h2 class="st-h2" style="font-size:24px;margin:0 0 16px">Thông tin giao hàng</h2>
        ${fld("pfName", "Họ và tên", "text", "name", me.name)}
        ${fld("pfEmail", "Email", "email", "email", me.email, "readonly")}
        ${fld("pfPhone", "Số điện thoại", "tel", "tel", me.phone || "", 'inputmode="tel"')}
        <div class="fld"><textarea id="pfAddr" placeholder=" " autocomplete="street-address" style="min-height:90px">${esc(me.addr || "")}</textarea><label for="pfAddr">Địa chỉ nhận hàng mặc định</label></div>
        <p class="err" id="pfErr" role="alert"></p><button class="pill" type="submit">Lưu thông tin</button></form>
      <form id="pwForm" novalidate><h2 class="st-h2" style="font-size:24px;margin:0 0 16px">Đổi mật khẩu</h2>
        ${fldPass("pwOld", "Mật khẩu hiện tại", "current-password")}
        ${fldPass("pwNew", "Mật khẩu mới, ít nhất 6 ký tự", "new-password")}
        <p class="err" id="pwErr" role="alert"></p><button class="pill" type="submit">Đổi mật khẩu</button></form>
    </div>`;
  }
}

/* ---------- Hỗ trợ ---------- */
const FAQ = [
  ["Làm sao để đặt hàng trên Nexus?", `Chọn sản phẩm và màu sắc, bấm “Thêm vào giỏ hàng”, rồi bấm “Thanh toán” và điền thông tin nhận hàng. Sau khi đặt, Nexus gọi điện xác nhận đơn. Nếu trang báo cần gửi đơn, bạn nhắn tin hoặc gọi ${fmtPhone(CONFIG.HOTLINE)}.`],
  ["Tôi có cần tài khoản để mua hàng không?", "Không bắt buộc. Bạn có thể đặt hàng mà không cần đăng nhập. Tài khoản giúp điền nhanh địa chỉ, xem lại đơn hàng, lưu sản phẩm và viết đánh giá."],
  ["Phí vận chuyển là bao nhiêu?", "Nexus báo phí vận chuyển khi gọi xác nhận đơn, tùy theo địa chỉ nhận hàng của bạn."],
  ["Tôi có thể thanh toán bằng cách nào?", `Thanh toán tiền mặt khi nhận hàng (COD) hoặc chuyển khoản. Nếu chọn chuyển khoản, Nexus gửi thông tin tài khoản khi gọi xác nhận đơn.`],
  ["Sản phẩm nào được bảo hành 12 tháng?", `Tăm nước B‑02PRO, bàn chải điện B‑26 và quạt cầm tay A‑014 được bảo hành 12 tháng. Với các sản phẩm khác, hãy gọi ${fmtPhone(CONFIG.HOTLINE)} để biết chính sách cụ thể.`],
  [`Trợ lý ${CONFIG.ADVISOR} là ai?`, `${CONFIG.ADVISOR} là trợ lý tư vấn AI của Nexus, trả lời câu hỏi về sản phẩm, giá và cách đặt hàng ngay trên trang. Trợ lý có thể nhầm lẫn, nên với đơn hàng, bảo hành hay đổi trả, hãy gọi ${fmtPhone(CONFIG.HOTLINE)} để gặp nhân viên.`],
  ["Tăm nước B‑02PRO dùng được bao lâu sau mỗi lần sạc?", "Pin 800mAh dùng đến khoảng 20 ngày, sạc qua cổng micro USB. Thời gian thực tế tùy chế độ và tần suất sử dụng."],
  ["Nên dùng đầu tăm nào?", "Đầu tiêu chuẩn để vệ sinh hằng ngày, đầu nha chu cho vùng viền nướu, đầu chỉnh nha cho răng niềng và răng sứ, đầu cạo dài để làm sạch lưỡi. Người mới dùng nên bắt đầu với chế độ êm dịu để quen dần với áp lực nước."],
  ["Bàn chải điện B‑26 có những chế độ nào?", "5 chế độ: làm sạch, làm trắng, răng nhạy cảm, chăm sóc nướu và đánh bóng. Máy tự hẹn giờ 2 phút và nhắc chuyển vùng sau mỗi 30 giây."],
  ["Nên chọn bình giữ nhiệt dung tích nào?", "Ly MPI480, bình MC500 và MC570 gọn cho túi xách khi đi học, đi làm. MC650 và MC870 hợp với cả buổi làm việc. MC1200 dành cho ngày dài hoặc khi tập luyện. Trang So sánh giúp bạn đối chiếu chi tiết."],
  ["Quạt cầm tay A‑014 khác quạt mini thông thường thế nào?", "A‑014 có mặt kim loại làm lạnh Peltier, mát sau khoảng 3–5 giây. Quạt có 5 cấp gió, pin 2.000mAh dùng 1–8 giờ tùy cấp gió và sạc qua USB Type‑C."],
  ["Tài khoản và đánh giá của tôi được lưu ở đâu?", "Tài khoản được lưu trên trình duyệt của thiết bị bạn đang dùng. Đánh giá được hiển thị cho mọi người khi trang hỗ trợ lưu chung; nếu không, đánh giá chỉ lưu trên thiết bị của bạn và có ghi chú ngay bên dưới."]
];
R.support = () => {
  const el = $('[data-view="support"]');
  el.innerHTML = `<div class="wrap sup"><h1>Hỗ trợ Nexus.</h1><p class="muted" style="font-size:21px;margin:0">Giải đáp nhanh về đặt hàng, thanh toán, bảo hành và cách dùng sản phẩm.</p>
    <div class="sup-cards">
      <button class="sup-card" type="button" data-act="faq" data-i="0">${ICON.box}<b>Cách đặt hàng</b></button>
      <a class="sup-card" href="#tai-khoan" data-go="account" data-arg="orders">${ICON.user}<b>Đơn hàng của tôi</b></a>
      <button class="sup-card" type="button" data-act="chat">${ICON.chat}<b>Hỏi trợ lý ${CONFIG.ADVISOR}</b></button>
      <a class="sup-card" href="tel:${esc(CONFIG.HOTLINE)}">${ICON.phone}<b>Gọi ${fmtPhone(CONFIG.HOTLINE)}</b></a>
    </div>
    <h2 class="sec-h" style="font-size:32px">Câu hỏi thường gặp.</h2>
    <div class="faq">${FAQ.map(([q, a], i) => `<details id="faq${i}"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></div>`;
};

/* ---------- Quản lý (chủ cửa hàng) ---------- */
R.admin = () => {
  const el = $('[data-view="admin"]');
  if (!PF.owner) { el.innerHTML = `<div class="wrap narrow admin"><h1>Quản lý cửa hàng.</h1><p class="muted">Chỉ chủ cửa hàng xem được trang này.</p></div>`; return; }
  const os = adminOrders; const active = os.filter(o => o.status !== "canceled");
  const revenue = active.reduce((a, o) => a + o.total, 0); const pending = os.filter(o => o.status === "pending").length;
  const revs = sharedReviews.slice().sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, 20);
  el.innerHTML = `<div class="wrap wide admin"><h1>Quản lý cửa hàng.</h1><p class="muted" style="margin:0">Đơn hàng và đánh giá được lưu chung trên trang. Chỉ bạn thấy mục này.</p>
    <div class="kpis"><div class="kpi"><b>${os.length}</b><span>Đơn hàng</span></div><div class="kpi"><b>${pending}</b><span>Chờ xác nhận</span></div><div class="kpi"><b>${vnd(revenue)}</b><span>Doanh thu tạm tính</span></div><div class="kpi"><b>${sharedReviews.length}</b><span>Đánh giá</span></div></div>
    <h2 class="st-h2" style="margin:0 0 12px">Đơn hàng</h2>
    ${os.length ? `<div class="tscroll"><table class="atable"><thead><tr><th>Mã đơn</th><th>Ngày</th><th>Khách hàng</th><th>Sản phẩm</th><th>Tổng</th><th>Trạng thái</th></tr></thead><tbody>
      ${os.map(o => `<tr><td><b>#${esc(o.code)}</b></td><td>${fmtDate(o.at)}</td><td>${esc(o.name)}<br><span class="muted">${esc(o.phone)}</span><br><span class="muted">${esc(o.addr)}</span>${o.note ? `<br><span class="muted">Ghi chú: ${esc(o.note)}</span>` : ""}</td>
        <td>${o.items.map(i => esc(i.name) + (i.color ? " (" + esc(i.color) + ")" : "") + " ×" + i.qty).join("<br>")}</td><td>${vnd(o.total)}<br><span class="muted">${esc(o.pay)}</span></td>
        <td><label><span class="sr">Trạng thái đơn ${esc(o.code)}</span><select class="qsel" data-act="ostatus" data-uid="${esc(o.uid)}" data-code="${esc(o.code)}">${Object.entries(STATUS).map(([k, v]) => `<option value="${k}"${k === o.status ? " selected" : ""}>${v}</option>`).join("")}</select></label></td></tr>`).join("")}
      </tbody></table></div>` : `<div class="empty-state"><h3>Chưa có đơn hàng nào.</h3><p>Đơn khách đặt khi đang đăng nhập claude.ai sẽ hiện ở đây.</p></div>`}
    <h2 class="st-h2" style="margin:44px 0 6px">Đánh giá mới nhất</h2>
    ${revs.length ? `<div class="rv-list">${revs.map(r => reviewHTML(r, true)).join("")}</div>` : `<div class="empty-state"><h3>Chưa có đánh giá nào.</h3></div>`}
  </div>`;
};

/* ---------- Sự kiện ---------- */
function quickBuy(id) {
  const p = byId[id];
  if (p.colors) { go("product", id); return; }
  cartAdd(id, "", 1); openFly("bagFly", true);
}
function toggleSave(id) {
  const on = Saves.toggle(id);
  $$(`[data-save="${id}"]`).forEach(b => { b.setAttribute("aria-pressed", on); const s = b.querySelector("span"); if (s) s.textContent = on ? "Đã lưu" : "Lưu sản phẩm"; if (!s) b.setAttribute("aria-label", `${on ? "Bỏ lưu" : "Lưu"} ${byId[id].name}`); });
  toast(on ? `Đã lưu ${byId[id].name}.` : `Đã bỏ lưu ${byId[id].name}.`);
  if (S.view === "account" && S.acctTab === "saves") renderAcctPanel();
}
function addFromPV(buyNow) {
  const p = byId[S.pv.id]; cartAdd(p.id, S.pv.color, S.pv.qty);
  if (buyNow) go("checkout"); else openFly("bagFly", true);
}


document.addEventListener("click", async e => {
  const t = e.target;
  if (t.tagName === "DIALOG") { t.close(); return; }
  const dlg = t.closest("dialog");
  if (dlg && t.closest("[data-close]")) { dlg.close(); return; }
  const g = t.closest("[data-go]");
  if (g) { e.preventDefault(); if (g.dataset.cat) S.store.cat = g.dataset.cat; if (dlg) dlg.close(); go(g.dataset.go, g.dataset.arg); return; }
  const b = t.closest("[data-buy]"); if (b) { quickBuy(b.dataset.buy); return; }
  const sv = t.closest("[data-save]"); if (sv) { e.preventDefault(); toggleSave(sv.dataset.save); return; }
  const a = t.closest("[data-act]"); if (!a) return;
  const act = a.dataset.act;
  if (act === "chat") { e.preventDefault(); openChat(a.dataset.q || ""); return; }
  if (act === "chatclose") { closeChat(); return; }
  if (act === "chatq") { chatSend(a.dataset.q); return; }
  if (act === "chatview" || act === "chatbuy") { if (isNarrow()) closeChat(); if (act === "chatview") go("product", a.dataset.id); else quickBuy(a.dataset.id); return; }
  if (act === "chatretry") { const i = +a.dataset.i; const tt = Chat.turns[i]; if (!tt || !tt.retry) return; const q = tt.retry; Chat.turns.splice(i - 1, 2); chatSend(q); return; }
  if (act === "login") { openAuth("login"); return; }
  if (act === "logout") { Auth.logout(); closeFly(); toast("Bạn đã đăng xuất."); S.myStatus = {}; rerender(); return; }
  if (act === "authmode") {
    const f = a.closest(".auth-form");
    if (f.dataset.pfx === "d") $("#authHost").innerHTML = authFormHTML(a.dataset.mode, "d", "");
    else { S.authMode = a.dataset.mode; R.account(); }
    const i = (f.dataset.pfx === "d" ? $("#authHost") : $('[data-view="account"]')).querySelector("input"); if (i) i.focus();
    return;
  }
  if (act === "eye") { const i = $("#" + a.dataset.for); const show = i.type === "password"; i.type = show ? "text" : "password"; a.textContent = show ? "Ẩn" : "Hiện"; return; }
  if (act === "cat") { S.store.cat = a.dataset.cat; go("store", null, { keep: true }); return; }
  if (act === "clearfilter") { S.store.q = ""; S.store.cat = "all"; R.store(); return; }
  if (act === "gprev" || act === "gnext") { const n = byId[S.pv.id].imgs.length; S.pv.img = (S.pv.img + (act === "gnext" ? 1 : n - 1)) % n; renderGal(); return; }
  if (act === "gthumb") { S.pv.img = +a.dataset.i; renderGal(); return; }
  if (act === "color") {
    const p = byId[S.pv.id]; S.pv.color = a.dataset.c; const c = p.colors.find(c => c.n === S.pv.color); const i = p.imgs.indexOf(c.img);
    if (i >= 0) S.pv.img = i;
    renderGal(); $$("#pvBuy .cswatch").forEach(x => x.setAttribute("aria-pressed", x.dataset.c === S.pv.color)); $("#pvBuy .cname").textContent = "Màu " + S.pv.color; return;
  }
  if (act === "qminus" || act === "qplus") { S.pv.qty = Math.max(1, Math.min(20, S.pv.qty + (act === "qplus" ? 1 : -1))); $("#pvQty").textContent = S.pv.qty; return; }
  if (act === "add") { addFromPV(false); return; }
  if (act === "buynow") { addFromPV(true); return; }
  if (act === "toreviews") { e.preventDefault(); const r = $("#reviews"); if (r) r.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth" }); return; }
  if (act === "write") { openReview(); return; }
  if (act === "rf") { const s = +a.dataset.s; S.pv.rf = S.pv.rf === s ? 0 : s; renderRv(); return; }
  if (act === "rvdel") {
    if (a.dataset.armed !== "1") { a.dataset.armed = "1"; a.textContent = "Bấm lần nữa để xóa"; setTimeout(() => { if (a.isConnected) { a.dataset.armed = ""; a.textContent = "Xóa"; } }, 3500); return; }
    a.disabled = true;
    const ok = await deleteReview(a.dataset.pid, a.dataset.acct, a.dataset.uid, a.dataset.local === "1");
    toast(ok ? "Đã xóa đánh giá." : "Chưa xóa được đánh giá. Thử lại sau."); onReviewsChanged(); return;
  }
  if (act === "rm") { cart.splice(+a.dataset.i, 1); saveCart(); R.bag(); return; }
  if (act === "uncoupon") { coupon = ""; LS.set("dbc2_coupon", ""); R.bag(); return; }
  if (act === "tab") { S.acctTab = a.dataset.tab; $$(".tab").forEach(x => x.setAttribute("aria-selected", x === a)); renderAcctPanel(); return; }
  if (act === "reorder") {
    const o = Orders.list().find(x => x.code === a.dataset.code); if (!o) return;
    o.items.forEach(i => { if (byId[i.id]) cartAdd(i.id, i.color, i.qty); }); toast("Đã thêm lại các sản phẩm vào giỏ hàng."); go("bag"); return;
  }
  if (act === "copyorder") { const o = Orders.list().find(x => x.code === a.dataset.code); if (o) toast(await copyText(orderText(o)) ? "Đã sao chép đơn hàng." : "Không sao chép được, hãy thử lại."); return; }
  if (act === "copy") { const src = $("#" + a.dataset.src); const ok = await copyText(src.value); if (!ok) { src.focus(); src.select(); } toast(ok ? "Đã sao chép đơn hàng." : "Bôi đen nội dung rồi sao chép thủ công."); return; }
  if (act === "faq") { const d = $("#faq" + a.dataset.i); if (d) { d.open = true; d.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "center" }); } return; }
  if (act === "cmpset") { R.compare(a.dataset.set); return; }
  if (act === "cmpadd") { const next = P.find(p => !S.cmp.includes(p.id)); if (next) S.cmp.push(next.id); renderCompare(); return; }
  if (act === "cmprm") { S.cmp.splice(+a.dataset.i, 1); renderCompare(); return; }
});

document.addEventListener("change", async e => {
  const t = e.target;
  if (t.matches('[data-act="qty"]')) { cart[+t.dataset.i].qty = +t.value; saveCart(); R.bag(); return; }
  if (t.matches('input[name="rvRating"]')) { $("#rvRateTxt").textContent = RATE_TXT[t.value] || ""; return; }
  if (t.matches('[data-act="ostatus"]')) {
    const { uid, code } = t.dataset; const st = t.value; t.disabled = true;
    const ok = await sharedMutate("orders", body => { (body.list || []).forEach(o => { if (o && o.code === code) o.status = st; }); }, uid);
    t.disabled = false; toast(ok ? `Đơn #${code}: ${STATUS[st]}.` : "Chưa cập nhật được trạng thái. Thử lại sau.");
  }
});
document.addEventListener("input", e => { const f = e.target.closest(".fld"); if (f) f.classList.remove("bad"); });
document.addEventListener("submit", async e => {
  const f = e.target; e.preventDefault();
  if (f.matches(".auth-form")) return handleAuth(f);
  if (f.id === "rvForm") return handleReview();
  if (f.id === "coForm") return placeOrder();
  if (f.id === "chatForm") { if (Chat.busy) { if (Chat.ctl) Chat.ctl.abort(); return; } const i = $("#chatInput"); const q = i.value; i.value = ""; growInput(); chatSend(q); return; }
  if (f.id === "sForm") { const q = $("#sInput").value.trim(); S.store.q = q; S.store.cat = "all"; go("store"); return; }
  if (f.id === "couponForm") {
    const code = $("#cpIn").value.trim().toUpperCase(); const cp = CONFIG.COUPONS[code];
    if (!code) { $("#cpErr").textContent = "Nhập mã khuyến mãi."; return; }
    if (!cp) { $("#cpErr").textContent = "Mã khuyến mãi không hợp lệ hoặc đã hết hạn."; $("#cpIn").closest(".fld").classList.add("bad"); return; }
    coupon = code; LS.set("dbc2_coupon", code); R.bag();
    toast(totals().disc ? `Đã áp dụng mã ${code}.` : `Mã ${code} đã được áp dụng sẵn trong giá.`); return;
  }
  if (f.id === "profForm") {
    const name = $("#pfName").value.trim(), phone = $("#pfPhone").value.replace(/[\s.\-]/g, ""), addr = $("#pfAddr").value.trim();
    if (!name) { $("#pfErr").textContent = "Nhập họ và tên."; return; }
    if (phone && !PHONE_RE.test(phone)) { $("#pfErr").textContent = "Số điện thoại chưa đúng, ví dụ 0901234567."; return; }
    Auth.update({ name, phone, addr }); $("#pfErr").textContent = ""; toast("Đã lưu thông tin tài khoản.");
    $(".acct h1").textContent = `Xin chào, ${name}.`; return;
  }
  if (f.id === "pwForm") {
    const o = $("#pwOld").value, n = $("#pwNew").value;
    if (n.length < 6) { $("#pwErr").textContent = "Mật khẩu mới cần ít nhất 6 ký tự."; return; }
    try { await Auth.changePass(o, n); $("#pwErr").textContent = ""; f.reset(); toast("Đã đổi mật khẩu."); }
    catch (x) { $("#pwErr").textContent = x.message; }
  }
});
$("#searchBtn").addEventListener("click", () => toggleFly("searchFly"));
$("#bagBtn").addEventListener("click", () => toggleFly("bagFly"));
$("#menuBtn").addEventListener("click", () => toggleFly("menuFly"));
$("#veil").addEventListener("click", closeFly);
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (openFlyId) { const b = $(FLYBTN[openFlyId]); closeFly(); b.focus(); return; }
  if (Chat.isOpen && !document.querySelector("dialog[open]")) closeChat();
});
$("#chatInput").addEventListener("input", growInput);
$("#chatInput").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); $("#chatForm").requestSubmit(); } });

/* ---------- Khởi động ---------- */
(function init() {
  $("#chatFabText").textContent = "Tư vấn với " + CONFIG.ADVISOR;
  $("#chatFab").setAttribute("aria-label", "Tư vấn với trợ lý " + CONFIG.ADVISOR);
  $("#chatTitle").textContent = CONFIG.ADVISOR;
  $("#chatFoot").innerHTML = `Trợ lý AI có thể nhầm lẫn. Cần gặp nhân viên, gọi ${telA()}.`;
  $$('.gfoot [data-act="chat"]').forEach(x => { x.textContent = "Hỏi trợ lý " + CONFIG.ADVISOR; });
  if (CONFIG.HOTLINE) $("#footHotline").innerHTML = `Hotline: ${telA()}`;
  initChatAI();
  updateBadge();
  routeFromHash();
  window.addEventListener("hashchange", routeFromHash);
  initPlatform();
})();

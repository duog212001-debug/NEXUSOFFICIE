# Tài Liệu Kỹ Thuật & Hướng Dẫn Build Lại Dự Án Nexus (Magic Storefront)

Tài liệu chi tiết phục vụ việc tái xây dựng, nâng cấp kiến trúc và triển khai dự án website thương mại điện tử **Nexus** (Đại lý sản phẩm gia dụng Magic chính hãng).

---

## 1. Hướng Dẫn Build Lại Dự Án (Rebuild Guide)

### 1.1 Mục Tiêu & Phương Án Tái Thiết Kế (Re-platforming)
Hiện tại source code nguyên bản là một Single-File SPA (HTML + Vanilla JS + CSS thuần nhúng chung) với state lưu qua `localStorage` và tích hợp Claude Platform SDK. 

Để đưa lên chuẩn production hiện đại, khả năng mở rộng (scalability), SEO và trải nghiệm mượt mà, ta chuẩn hóa theo 2 phương án:

* **Phương án A (Khuyến nghị - Production Fullstack):** **Next.js (App Router) + TypeScript + Tailwind CSS / Shadcn UI + Supabase / PostgreSQL**.
* **Phương án B (Tối giản / Lightweight):** **Vite + React (hoặc Vue 3) + Tailwind CSS + Firebase/Supabase**.

---

### 1.2 Cấu Trúc Thư Mục Chuẩn Hóa (Next.js App Router)

```text
nexus-store/
├── public/
│   ├── images/
│   │   ├── products/          # Ảnh sản phẩm Magic (B02PRO, A014, MC1200,...)
│   │   ├── hero/              # Ảnh banner, hero section
│   │   └── logo-nexus.png     # Logo thương hiệu Nexus
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (shop)/
│   │   │   ├── layout.tsx     # Global Header (GNav) + Footer + Floating Chat FAB
│   │   │   ├── page.tsx       # Trang chủ (Hero, Bento Tiles, Pick Bottles, Social Proof)
│   │   │   ├── store/
│   │   │   │   └── page.tsx   # Danh mục & bộ lọc sản phẩm (Răng miệng, Bình, Quạt)
│   │   │   ├── product/[id]/
│   │   │   │   └── page.tsx   # Chi tiết sản phẩm, Gallery, Color Picker, Reviews
│   │   │   ├── compare/
│   │   │   │   └── page.tsx   # Bảng so sánh đa sản phẩm (Matrix specs)
│   │   │   ├── bag/
│   │   │   │   └── page.tsx   # Giỏ hàng, mã giảm giá (Camp/Coupon)
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx   # Đặt hàng (COD / Chuyển khoản), thông tin người nhận
│   │   │   ├── done/
│   │   │   │   └── page.tsx   # Xác nhận đơn hàng, copy đơn, gửi SMS hotline
│   │   │   ├── account/
│   │   │   │   └── page.tsx   # Quản lý đơn, sản phẩm đã lưu, profile
│   │   │   ├── support/
│   │   │   │   └── page.tsx   # FAQ accordion, liên hệ hotline, tư vấn
│   │   │   └── admin/
│   │   │       └── page.tsx   # Dashboard quản trị đơn hàng & duyệt đánh giá
│   │   └── api/
│   │       ├── chat/route.ts       # Endpoint tích hợp AI Advisor (Claude / OpenAI SDK)
│   │       ├── orders/route.ts     # CRUD đơn hàng, webhook thông báo
│   │       └── reviews/route.ts    # Đánh giá & phân loại đánh giá
│   ├── components/
│   │   ├── layout/
│   │   │   ├── GNav.tsx            # Sticky Header + Flyout bag/search/menu
│   │   │   ├── Footer.tsx
│   │   │   └── SearchFlyout.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ColorPicker.tsx
│   │   │   ├── GalleryViewer.tsx
│   │   │   └── SpecTable.tsx
│   │   ├── reviews/
│   │   │   ├── ReviewList.tsx
│   │   │   ├── RatingBreakdown.tsx
│   │   │   └── ReviewDialog.tsx
│   │   └── chat/
│   │       ├── ChatFab.tsx         # Floating button trợ lý F5Nexus
│   │       └── ChatBoxModal.tsx    # Giao diện streaming chat AI
│   ├── lib/
│   │   ├── config.ts               # Hotline, Shop Name, Coupon settings
│   │   ├── constants/products.ts   # Catalog sản phẩm gốc (Magic official data)
│   │   └── utils.ts                # Định dạng tiền VNĐ, ngày tháng, hash
│   ├── hooks/
│   │   ├── useCart.ts              # Zustand store quản lý giỏ hàng
│   │   ├── useSaves.ts             # Quản lý wishlist
│   │   └── useChatAI.ts            # Quản lý streaming response & state AI
│   └── types/
│       └── index.ts                # Type definitions cho Product, Order, Review, User
├── .env.example
├── package.json
└── tailwind.config.ts
```

---

### 1.3 Quy Trình Triển Khai Từng Bước (Step-by-Step Build)

#### Bước 1: Khởi tạo dự án & Cài đặt Thư viện cốt lõi
```bash
npx create-next-app@latest nexus-store --typescript --tailwind --eslint --app --src-dir
cd nexus-store
npm install lucide-react clsx tailwind-merge zustand @tanstack/react-query
npm install @ai-sdk/react ai @anthropic-ai/sdk
```

#### Bước 2: Thiết lập Token Hệ Thống Màu & Typography
Cấu hình bảng màu chuẩn phong cách Apple Glassmorphism trong `tailwind.config.ts`:
* `--bg`: `#ffffff`, `--bg2`: `#f5f5f7`, `--ink`: `#1d1d1f`
* `--blue`: `#0071e3`, `--blue-h`: `#0077ed`, `--orange`: `#b64400`
* Hiệu ứng mờ đục: `backdrop-blur-md`, `saturate-180`.

#### Bước 3: Di chuyển Dữ liệu Danh mục Sản phẩm (`products.ts`)
Đưa toàn bộ 10 sản phẩm chủ lực từ file gốc vào schema:
* `b02pro` (Tăm nước Magic B-02PRO - 369.000đ)
* `b26` (Bàn chải điện Magic B-26 - 459.000đ)
* `a028` (Quạt để bàn A-028 - 539.000đ)
* `a014` (Quạt làm lạnh Peltier A-014 - 409.000đ)
* Dòng bình giữ nhiệt inox 316: `mc500`, `mc570`, `mc650`, `mc870`, `mc1200`, `mpi480`.

#### Bước 4: Xây dựng Core State Management với Zustand
* **`cartStore`**: Lưu trữ `{ id, color, qty }`, tự động sync với `localStorage`, tính toán tổng giá trị `totals()` (tạm tính, giảm giá, số tiền tiết kiệm so với giá niêm yết).
* **`wishlistStore`**: Danh sách sản phẩm quan tâm (toggle save).
* **`authStore`**: Quản lý phiên khách hàng và thông tin nhận hàng mặc định.

#### Bước 5: Tích hợp Trợ Lý AI F5Nexus
* Tạo route handler `/api/chat` nhận ngữ cảnh: Danh mục sản phẩm (Specs, Giá bán), Giỏ hàng hiện tại, Trang khách đang xem.
* Trả về Streamed Text kèm trích xuất metadata sản phẩm `[[id]]` để frontend tự động gắn `ChatCard` (nút Xem / Mua ngay tương tác).

---

## 2. Kiến Trúc Tổng Thể & Tech Stack (Architecture & Tech Stack)

### 2.1 Sơ Đồ Kiến Trúc Hệ Thống (System Architecture)

```
[ Khách hàng (Desktop / Mobile) ]
                │
                ▼
   [ Next.js CDN Edge / Vercel ]
   ├── Static Pages (SSG/ISR): Home, Chi tiết SP, Bảng so sánh
   └── Client Components: Giỏ hàng, Chat F5Nexus, Bộ lọc cửa hàng
                │
                ├────────────────────────┬────────────────────────┐
                ▼                        ▼                        ▼
     [ API Route: /api/chat ]   [ Supabase / DB ]       [ SMS / Hotline Webhook ]
                │                        │                        │
       (System Prompt + RAG)    (Orders, Users, Reviews)   (Thông báo xác nhận đơn)
                ▼                        │
    [ Anthropic Claude API ]             ▼
   (Tư vấn, gợi ý mã SP)        [ Admin Dashboard ]
```

### 2.2 Bảng Chi Tiết Tech Stack

| Thành Phần | Công Nghệ / Thư Viện | Lý Do Lựa Chọn |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 14+ (App Router)** | Render SSR/SSG tối ưu SEO cho sản phẩm, tốc độ tải dưới 1s, routing linh hoạt. |
| **Ngôn Ngữ** | **TypeScript** | Định kiểu chặt chẽ cho model sản phẩm, thuộc tính cấu hình (dung tích, pin, màu sắc), an toàn code. |
| **Styling & UI** | **Tailwind CSS + Lucide Icons** | Tái tạo chuẩn giao diện SF-Pro tinh tế của Apple, Dark Mode mượt mà, responsive chuẩn đa thiết bị. |
| **Quản Lý Trạng Thái** | **Zustand (Persist Middleware)** | Siêu nhẹ (<2KB), dễ bảo trì giỏ hàng (Cart), Wishlist và thông tin User offline. |
| **Cơ Sở Dữ Liệu (Backend)** | **Supabase (PostgreSQL)** | Quản lý bảng Orders, Customer, Reviews phân tán; Realtime snapshot cập nhật trạng thái đơn. |
| **Trí Tuệ Nhân Tạo (AI Advisor)**| **Anthropic Claude API (Sonnet / Haiku)** | Hỗ trợ tư vấn chuyên sâu ngữ cảnh bán hàng, gợi ý link sản phẩm chính xác, streaming phản hồi tự nhiên. |
| **Triển Khai (Hosting)** | **Vercel / Cloudflare** | Tối ưu hóa phân phối ảnh WebP/AVIF và hạ tầng serverless không cần quản trị server. |

---

## 3. Luồng Người Dùng (User Flows)

### 3.1 Luồng Khám Phá & So Sánh Sản Phẩm (Discovery & Evaluation Flow)
1. **Tiếp cận:** Khách truy cập vào Trang chủ → Xem Hero Banner (Tăm nước B-02PRO / Quạt làm lạnh Peltier A-014).
2. **Duyệt Danh Mục:**
   * Chọn nhanh theo nhu cầu: *Chăm sóc răng miệng*, *Bình giữ nhiệt*, hoặc *Quạt sạc mini*.
   * Lọc và sắp xếp theo: Giá tăng/giảm, Đánh giá cao nhất, Mức giảm giá nhiều nhất.
3. **So Sánh Chuyên Sâu (Compare View):**
   * Khách thêm 2 - 3 sản phẩm vào ma trận so sánh (ví dụ: Bình MC570 vs MC870 vs MC1200).
   * Đối chiếu thông số thực tế: Dung tích, loại Inox (304 vs 316), thời lượng pin, phụ kiện kèm theo.

---

### 3.2 Luồng Mua Hàng & Thanh Toán Nhanh (Purchase & Checkout Flow)
```
[Chi Tiết Sản Phẩm] ── Chọn Màu / Số Lượng ──> [Thêm vào Giỏ / Mua Ngay]
                                                         │
                                                         ▼
[Kiểm Tra Giỏ Hàng] <── Áp mã ưu đãi "CAMP" / Xem tiết kiệm
         │
         ▼
[Trang Thanh Toán (Checkout)]
   ├── Nhập Họ tên, Số điện thoại (Format chuẩn 10 số VN)
   ├── Nhập Địa chỉ nhận hàng chi tiết
   └── Chọn Phương thức: COD (Tiền mặt khi nhận) hoặc Chuyển khoản
         │
         ▼
[Hoàn Tất Đặt Hàng] ──> Tạo Mã Đơn Hàng (VD: #7KZ1A)
         │
         ├── Option 1: Tự động lưu và đồng bộ lên hệ thống
         ├── Option 2: Nút bấm gửi SMS nội dung đơn hàng đến Hotline
         └── Option 3: Sao chép nhanh văn bản đơn hàng gửi Zalo
```

---

### 3.3 Luồng Trợ Lý Ảo F5Nexus Hỗ Trợ Mua Sắm (AI Advisory Flow)
1. **Kích hoạt:** Khách bấm biểu tượng chat nổi `Tư vấn với F5Nexus` ở góc phải màn hình.
2. **Gợi ý nhanh (Quick Chips):** Các câu hỏi sẵn có: *"Nên chọn bình giữ nhiệt nào?"*, *"Tăm nước B-02PRO dùng thế nào?"*, *"Phí ship và cách thanh toán?"*.
3. **Phân tích ngữ cảnh:**
   * AI nhận biết trang khách đang đứng và sản phẩm trong giỏ.
   * AI trả lời ngắn gọn (2-5 câu), không bịa thông số, chỉ dẫn khách chính xác.
4. **Hiển thị thẻ tương tác (Interactive Chat Cards):**
   * Nếu gợi ý model cụ thể, tin nhắn tự render thẻ sản phẩm gồm ảnh, giá và 2 nút: **[Xem]** (chuyển trang chi tiết) và **[Mua]** (thêm ngay vào giỏ).

---

### 3.4 Luồng Quản Trị Đơn Hàng & Đánh Giá (Admin & Post-Purchase Flow)
1. **Khách hàng:** Sau khi nhận hàng có thể đăng nhập để đánh giá từ 1 - 5 sao kèm hình ảnh/màu sắc đã chọn.
2. **Chủ cửa hàng (Admin):**
   * Đăng nhập tài khoản Owner để truy cập trang `/admin`.
   * Xem KPI: Tổng đơn, đơn chờ xác nhận, doanh thu tạm tính, số lượng đánh giá.
   * Thay đổi trạng thái đơn hàng (`Chờ xác nhận` → `Đã xác nhận` → `Đang giao` → `Hoàn thành` / `Đã hủy`). Trạng thái tự động cập nhật đến trang tài khoản của khách.

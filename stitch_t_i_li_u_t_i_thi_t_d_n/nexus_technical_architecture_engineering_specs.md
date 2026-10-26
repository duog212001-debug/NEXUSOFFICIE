# Tài Liệu Kỹ Thuật Nâng Cao & Thiết Kế Kiến Trúc Hệ Thống Nexus Storefront

Tài liệu đặc tả chi tiết kiến trúc kỹ thuật dành cho đội ngũ kỹ sư phát triển, tích hợp và bảo trì nền tảng thương mại điện tử **Nexus** (Storefront chính hãng Magic).

---

## 1. Luồng Trạng Thái Công Việc (Task Lifecycle & Order State Machine)

Hệ thống quản lý vòng đời đơn hàng, tác vụ thanh toán, đánh giá sản phẩm và phiên hỗ trợ của Trợ lý AI F5Nexus được định nghĩa bằng mô hình máy trạng thái hữu hạn (Deterministic Finite State Machine - FSM).

### 1.1 Sơ đồ Trạng Thái Vòng Đời Đơn Hàng (Order Lifecycle State Machine)

```
       [ Khách Tạo Đơn (Cart / Checkout) ]
                        │
                        ▼
               ┌─────────────────┐
               │     PENDING     │ <── Khởi tạo thành công (Chờ xác nhận)
               └────────┬────────┘
                        │
           ┌────────────┴────────────┐
           ▼                         ▼
   ┌───────────────┐         ┌───────────────┐
   │   CONFIRMED   │         │   CANCELED    │ <── Khách hủy / Không liên lạc được
   └───────┬───────┘         └───────────────┘
           │
           ▼
   ┌───────────────┐
   │   SHIPPING    │ <── Đã bàn giao ĐVVC (GHTK / ViettelPost)
   └───────┬───────┘
           │
     ┌─────┴──────────────┐
     ▼                    ▼
┌───────────────┐  ┌───────────────┐
│     DONE      │  │    REFUND     │ <── Đổi trả / Hoàn tiền trong 30 ngày
└───────┬───────┘  └───────────────┘
        │
        ▼
┌───────────────┐
│   REVIEWED    │ <── Khách đánh giá sản phẩm (Verified Purchase)
└───────────────┘
```

### 1.2 Bảng Chuyển Trạng Thái (Transition Matrix & Business Rules)

| Trạng Thái Ban Đầu | Hành Động Kích Hoạt (Event) | Trạng Thái Đích | Vai Trò Thực Hiện | Quy Tắc Nghiệp Vụ (Guards & Side Effects) |
| :--- | :--- | :--- | :--- | :--- |
| *(None)* | `SUBMIT_ORDER` | `PENDING` | Khách hàng / Guest | Kiểm tra số điện thoại (10 chữ số VN), địa chỉ hợp lệ; lưu giỏ hàng vào DB; bắn webhook thông báo cho telesale. |
| `PENDING` | `CONFIRM_CALL` | `CONFIRMED` | Telesale / Quản trị viên | Nhân viên gọi điện xác nhận đúng tên, địa chỉ, báo phí ship; nếu thanh toán chuyển khoản thì gửi cú pháp SMS/Zalo. |
| `PENDING` | `CANCEL_ORDER` | `CANCELED` | Khách hàng / Telesale | Khách đổi ý hoặc không liên lạc được sau 3 lần gọi; giải phóng lượng hàng giữ chỗ. |
| `CONFIRMED`| `DISPATCH_PARCEL` | `SHIPPING` | Kho vận / Quản trị viên | Đóng gói đơn hàng, gắn mã Tracking ĐVVC; kích hoạt SMS thông báo mã vận đơn cho khách. |
| `SHIPPING` | `DELIVERY_SUCCESS` | `DONE` | ĐVVC Webhook / Admin | Khách nhận hàng và thanh toán COD thành công; kích hoạt quyền viết đánh giá kèm badge "Đã mua tại Nexus". |
| `SHIPPING` | `DELIVERY_FAILED` | `REFUND` / `CANCELED`| ĐVVC Webhook / Admin | Giao không thành công sau 3 lần phát; hoàn hàng về kho. |
| `DONE` | `REQUEST_RETURN` | `REFUND` | Khách hàng + CSKH | Khách khiếu nại lỗi nhà sản xuất trong vòng 30 ngày; kích hoạt quy trình 1 đổi 1. |
| `DONE` | `SUBMIT_REVIEW` | `REVIEWED` | Khách hàng | Khách gửi đánh giá 1-5 sao; hệ thống kiểm tra `hasBought(pid)` để gán nhãn Verified Buyer. |

---

## 2. Kiến Trúc Thư Mục Dự Án React (React Modular Architecture)

Cấu trúc dự án được thiết kế theo mô hình **Feature-Driven & Component-Driven Architecture**, áp dụng tiêu chuẩn Clean Architecture giúp mã nguồn dễ mở rộng, kiểm thử (Unit test) và tái sử dụng component tối đa.

```text
nexus-storefront-react/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml                # Pipeline kiểm tra lint, test và auto deploy Vercel
├── public/
│   ├── assets/
│   │   ├── branding/
│   │   │   ├── logo-nexus.svg       # Biểu tượng vector Nexus đỏ chính hãng
│   │   │   └── favicon.ico
│   │   ├── products/                # Ảnh sản phẩm tối ưu WebP/AVIF
│   │   │   ├── b02pro/
│   │   │   ├── b26/
│   │   │   ├── a014/
│   │   │   └── mc-series/
├── src/
│   ├── app/                         # Định tuyến ứng dụng (Next.js 14+ App Router)
│   │   ├── layout.tsx               # Root Layout: ThemeProvider, QueryClientProvider, GNav, Floating Chat
│   │   ├── page.tsx                 # Trang chủ: Bento Showcase, Hero Banner, Social Proof
│   │   ├── store/
│   │   │   ├── page.tsx             # Trang danh mục & lưới sản phẩm kết hợp bộ lọc
│   │   │   └── [category]/page.tsx  # Danh mục động: rang-mieng, binh-giu-nhiet, quat-mini
│   │   ├── product/
│   │   │   └── [id]/page.tsx        # Trang chi tiết sản phẩm (PDP), Gallery, Color Swatch, Reviews
│   │   ├── compare/page.tsx         # Bảng so sánh ma trận thông số kỹ thuật (Matrix Specs)
│   │   ├── cart/page.tsx            # Giỏ hàng & coupon voucher
│   │   ├── checkout/page.tsx        # Đặt hàng nhanh COD / Chuyển khoản
│   │   ├── order-success/page.tsx   # Xác nhận đơn hàng, gửi tin nhắn SMS hotline
│   │   ├── account/
│   │   │   ├── page.tsx             # Quản lý đơn cá nhân, wishlist đã lưu, thông tin nhận hàng
│   │   │   └── layout.tsx           # Layout tab navigation cho hồ sơ khách hàng
│   │   ├── support/page.tsx         # Trung tâm trợ giúp, FAQ tương tác & liên hệ bảo hành
│   │   ├── admin/
│   │   │   └── page.tsx             # Dashboard quản lý đơn hàng & duyệt đánh giá dành cho Store Owner
│   │   └── api/
│   │       ├── ai/chat/route.ts     # Serverless Edge Handler: Streaming hội thoại F5Nexus AI
│   │       ├── orders/route.ts      # REST/CRUD xử lý tạo và cập nhật trạng thái đơn
│   │       └── reviews/route.ts     # API đăng tải và đồng bộ đánh giá khách hàng
│   │
│   ├── components/                  # Thư viện UI Components phân tầng
│   │   ├── common/                  # Các UI primitives nguyên tử (Atom UI)
│   │   │   ├── Button.tsx           # Hỗ trợ variant: pill, outline, ghost, glowing
│   │   │   ├── Input.tsx            # Floating label input field chuẩn Apple
│   │   │   ├── Modal.tsx            # Dialog truy cập bàn phím (A11y ARIA compliant)
│   │   │   ├── Toast.tsx            # Thông báo trạng thái tương tác
│   │   │   └── StarRating.tsx       # Hiển thị số sao vector chính xác theo tỷ lệ %
│   │   ├── layout/                  # Khung bố cục hệ thống
│   │   │   ├── GNav.tsx             # Floating Glassmorphism Navbar (Sticky)
│   │   │   ├── Footer.tsx           # Chân trang chính sách bảo hành & chứng nhận đại lý
│   │   │   ├── SearchFlyout.tsx     # Tìm kiếm trực tiếp với Instant Typeahead
│   │   │   └── CartFlyout.tsx       # Giỏ hàng popover xem nhanh
│   │   ├── product/                 # Nhóm component nghiệp vụ sản phẩm
│   │   │   ├── ProductCard.tsx      # Thẻ sản phẩm chuẩn Bento, nút Lưu & Mua nhanh
│   │   │   ├── ColorPicker.tsx      # Chọn mã màu tương tác tự đổi ảnh đại diện
│   │   │   ├── GalleryViewer.tsx    # Trình xem ảnh đa góc nhìn, zoom chi tiết
│   │   │   └── SpecTable.tsx        # Bảng hiển thị thông số Inox 316, Pin, Công suất
│   │   ├── reviews/                 # Hệ thống đánh giá
│   │   │   ├── ReviewList.tsx
│   │   │   ├── RatingBreakdown.tsx  # Biểu đồ thanh tỷ lệ phân bổ sao (5-star distribution)
│   │   │   └── ReviewFormDialog.tsx
│   │   └── ai-advisor/              # Trợ lý ảo mua sắm F5Nexus
│   │       ├── ChatFab.tsx          # Nút bấm nổi kích hoạt trợ lý AI
│   │       ├── ChatModal.tsx        # Cửa sổ streaming text
│   │       └── InteractiveProductCard.tsx # Thẻ sản phẩm nhúng trực tiếp trong tin nhắn chat
│   │
│   ├── hooks/                       # Custom React Hooks
│   │   ├── useCart.ts               # Hook truy xuất và điều khiển Zustand Store giỏ hàng
│   │   ├── useWishlist.ts           # Quản lý danh sách sản phẩm yêu thích offline/online
│   │   ├── useAIChat.ts             # Quản lý luồng SSE (Server-Sent Events) chat streaming
│   │   └── useDebounce.ts           # Trì hoãn thao tác gõ ô tìm kiếm
│   │
│   ├── store/                       # State Management (Zustand + Persist Middleware)
│   │   ├── cartStore.ts             # Quản lý items, vouchers, totals tính toán
│   │   ├── authStore.ts             # Phiên làm việc tài khoản, bảo mật hash mật khẩu
│   │   └── filterStore.ts           # Bộ lọc danh mục, mức giá, sắp xếp
│   │
│   ├── services/                    # Tầng giao tiếp mạng & API Clients
│   │   ├── api.client.ts            # Cấu hình Fetch/Axios instance với interceptor
│   │   ├── orderService.ts          # Gọi API đặt hàng, tra cứu mã đơn
│   │   └── reviewService.ts         # Gửi và xóa đánh giá
│   │
│   ├── types/                       # Khai báo TypeScript Interfaces & Types tập trung
│   │   ├── product.types.ts
│   │   ├── order.types.ts
│   │   ├── review.types.ts
│   │   └── user.types.ts
│   │
│   ├── lib/                         # Hàm tiện ích & Cấu hình hằng số
│   │   ├── constants/
│   │   │   ├── products.data.ts     # Dữ liệu 10 sản phẩm Magic chính hãng chuẩn hóa
│   │   │   └── config.ts            # Hotline, tên shop, chính sách giao hàng
│   │   ├── formatters.ts            # vnd(), formatDate(), formatPhoneNumber()
│   │   └── validators.ts            # Regex kiểm tra số điện thoại, email
│   │
│   └── styles/
│       └── globals.css              # Tailwind directives, biến token màu Glassmorphism
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. Thiết Kế Mô Hình Dữ Liệu (Entity-Relationship & TypeScript Definitions)

### 3.1 Sơ Đồ Thực Thể Quan Hệ (Entity-Relationship Diagram - ERD)

```
┌─────────────────────────┐             ┌─────────────────────────┐
│          USER           │             │         PRODUCT         │
├─────────────────────────┤             ├─────────────────────────┤
│ id (PK: UUID)           │             │ id (PK: string, e.g b02)│
│ name: string            │             │ name: string            │
│ email: string (Unique)  │             │ short_name: string      │
│ phone: string           │             │ category_id (FK): string│
│ address: string         │             │ list_price: number      │
│ password_hash: string   │             │ daily_price: number     │
│ created_at: timestamp   │             │ camp_price: number      │
└────────────┬────────────┘             │ is_warranty: boolean    │
             │                          │ specs: JSONB            │
             │ 1                        └────────────┬────────────┘
             │                                       │ 1
             │ 0..*                                  │
┌────────────▼────────────┐                          │
│          ORDER          │                          │
├─────────────────────────┤                          │
│ code (PK: string #7KZ1) │                          │
│ user_id (FK): UUID (opt)│                          │
│ customer_name: string   │                          │
│ phone: string           │                          │
│ shipping_address: string│                          │
│ payment_method: ENUM    │                          │
│ coupon_code: string     │                          │
│ subtotal: number        │                          │
│ discount: number        │                          │
│ total_amount: number    │                          │
│ status: ENUM            │                          │
│ created_at: timestamp   │                          │
└────────────┬────────────┘                          │
             │ 1                                     │
             │                                       │
             │ 1..*                                  │ 0..*
┌────────────▼────────────┐             ┌────────────▼────────────┐
│       ORDER_ITEM        │             │         REVIEW          │
├─────────────────────────┤             ├─────────────────────────┤
│ id (PK: UUID)           │             │ id (PK: UUID)           │
│ order_code (FK): string │             │ product_id (FK): string ├─────┐
│ product_id (FK): string ├────────────►│ user_id (FK): UUID      │     │
│ variant_color: string   │             │ author_name: string     │     │
│ quantity: number        │             │ rating (1..5): integer  │     │
│ unit_price: number      │             │ title: string           │     │
└─────────────────────────┘             │ content: text           │     │
                                        │ variant_color: string   │     │
                                        │ is_verified: boolean    │     │
                                        │ created_at: timestamp   │     │
                                        └─────────────────────────┘     │
                                                     ▲                  │
                                                     └──────────────────┘
```

### 3.2 Định Nghĩa Kiểu Dữ Liệu TypeScript (TypeScript Interfaces)

```typescript
// ==========================================
// 1. Phân Loại & Danh Mục
// ==========================================
export type ProductCategory = 'rang' | 'binh' | 'quat';

export interface CategoryInfo {
  id: ProductCategory | 'all';
  name: string;
  shortTitle: string;
  slug: string;
  heroImageKey: string;
}

// ==========================================
// 2. Sản Phẩm & Biến Thể
// ==========================================
export interface ProductColorVariant {
  name: string;      // Tên màu (e.g. "Tím", "Bạc", "Inox")
  hexCode: string;   // Mã màu hiển thị Swatch (e.g. "#c9b8ec")
  imageKey: string;  // Khóa liên kết ảnh tương ứng màu
}

export interface ProductTechnicalSpecs {
  nhom?: string;
  dungtich?: string;     // e.g. "570ml", "1.200ml"
  chatlieu?: string;     // e.g. "Vỏ inox 304, lòng inox 316"
  chedo?: string;        // e.g. "3 chế độ làm sạch"
  noibat?: string;       // e.g. "Làm lạnh Peltier, tản nhiệt 3-5 giây"
  phukien?: string;      // e.g. "4 đầu tăm, dây sạc Type-C"
  pin?: string;          // e.g. "800mAh", "3.600mAh"
  sudung?: string;       // e.g. "Khoảng 30 ngày mỗi lần sạc"
  sac?: string;          // e.g. "USB Type-C"
  congsuat?: string;     // e.g. "6W", "8.5W"
  chongnuoc?: string;    // e.g. "IPX7"
  baohanh?: string;      // e.g. "12 tháng chính hãng"
}

export interface ProductEntity {
  id: string;            // e.g. "b02pro", "a014", "mc1200"
  category: ProductCategory;
  shortName: string;     // e.g. "B-02PRO"
  fullName: string;      // e.g. "Tăm nước Magic B-02PRO"
  tagline: string;       // e.g. "Sạch tận kẽ. Gọn trong túi."
  listPrice: number;     // Giá niêm yết (VND)
  dailyPrice: number;    // Giá bán ưu đãi hằng ngày tại Nexus
  campaignPrice: number; // Giá flash sale / camp
  badgeText?: string;    // "Nổi bật", "Giá tốt nhất", "Bán chạy"
  hasWarranty: boolean;  // Bảo hành 12 tháng
  colors?: ProductColorVariant[];
  imageKeys: string[];   // Bộ sưu tập ảnh gallery
  highlights: string[];  // Danh sách các gạch đầu dòng tính năng
  specs: ProductTechnicalSpecs;
}

// ==========================================
// 3. Giỏ Hàng & Đơn Hàng (Cart & Orders)
// ==========================================
export type PaymentMethod = 'COD' | 'BANK_TRANSFER';

export type OrderStatus = 
  | 'pending'    // Chờ xác nhận
  | 'confirmed'  // Đã gọi điện xác nhận
  | 'shipping'   // Đang vận chuyển
  | 'done'       // Giao thành công
  | 'canceled';  // Đã hủy

export interface CartItem {
  productId: string;
  colorName?: string;
  quantity: number;
}

export interface OrderItemEntity {
  id: string;
  productId: string;
  productName: string;
  variantColor?: string;
  quantity: number;
  unitPrice: number;
}

export interface OrderEntity {
  code: string;                 // Mã đơn hàng định dạng #7KZ1A
  userId?: string;              // UUID khách hàng nếu đã đăng nhập
  customerName: string;
  phoneNumber: string;          // Format chuẩn 10 số di động VN
  shippingAddress: string;      // Địa chỉ giao hàng chi tiết
  paymentMethod: PaymentMethod;
  notes?: string;               // Ghi chú của khách
  couponCode?: string;          // Mã ưu đãi áp dụng (nếu có)
  items: OrderItemEntity[];
  subtotalAmount: number;
  discountAmount: number;
  finalTotalAmount: number;
  status: OrderStatus;
  createdAt: string;            // ISO Date string
  updatedAt?: string;
}

// ==========================================
// 4. Đánh Giá Khách Hàng (Reviews)
// ==========================================
export interface ReviewEntity {
  id: string;
  productId: string;
  userKey: string;              // Định danh người dùng hoặc thiết bị
  authorName: string;           // Tên khách hiển thị
  rating: 1 | 2 | 3 | 4 | 5;    // Thang điểm đánh giá 1 đến 5 sao
  title?: string;
  content: string;              // Tối thiểu 10 ký tự
  variantColor?: string;        // Màu sắc người dùng đã mua
  isVerifiedPurchase: boolean;  // Đánh dấu khách đã mua sản phẩm này tại Nexus
  createdAt: string;
  editedAt?: string;
}

// ==========================================
// 5. Trợ Lý Tư Vấn AI (F5Nexus Session)
// ==========================================
export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestedProductIds?: string[]; // Trích xuất các mã sản phẩm [[id]]
  isStreaming?: boolean;
  timestamp: number;
}
```

---

## 4. Kiến Trúc Tổng Thể & Tech Stack (System Architecture & Tech Stack)

### 4.1 Sơ Đồ Phân Tầng Kiến Trúc Toàn Diện (Full-System Architecture)

```
┌────────────────────────────────────────────────────────────────────────┐
│                      CLIENT PRESENTATION LAYER                         │
│  • Next.js App Router (React 18 / 19) + TypeScript                     │
│  • Tailwind CSS + Apple Glassmorphism Design System (Blur 20px)        │
│  • Lucide Icons + Responsive Bento Grid System                         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        EDGE / API GATEWAY LAYER                        │
│  • Vercel Edge Network / Cloudflare Workers                            │
│  • Next.js Route Handlers:                                             │
│    ├── /api/ai/chat  ──> SSE Streaming Proxy tới Claude/OpenAI API     │
│    ├── /api/orders   ──> Xác thực đơn hàng, Rate-limiting, SMS Webhook │
│    └── /api/reviews  ──> Kiểm duyệt và tổng hợp điểm trung bình sao    │
└───────────────┬───────────────────┬───────────────────┬────────────────┘
                │                   │                   │
                ▼                   ▼                   ▼
┌───────────────────────┐ ┌───────────────────┐ ┌────────────────────────┐
│   DATABASE & STORAGE  │ │    AI ENGINE      │ │   NOTIFICATIONS & SMS  │
│ • Supabase PostgreSQL │ │ • Anthropic Claude│ │ • Twilio / Zalo ZNS /  │
│   (Row-Level Security)│ │   3.5 Sonnet      │ │   SpeedSMS Gateway     │
│ • Tables: Products,   │ │ • RAG Context:    │ │ • Thông báo đơn hàng   │
│   Orders, Reviews     │ │   Product Specs & │ │   đến Hotline 24/7     │
│ • Supabase Storage:   │ │   Cart Snapshot   │ │   (0787 712 566)       │
│   Tối ưu hóa ảnh WebP │ └───────────────────┘ └────────────────────────┘
└───────────────────────┘
```

### 4.2 Chi Tiết Các Lớp Trong Hệ Thống (Architectural Layers Breakdown)

1. **Client & Presentation Layer (Trải nghiệm Người Dùng Tối Thượng):**
   * **Triết lý Thiết kế:** Phong cách Apple Precision Living kết hợp màu đỏ nhận diện Nexus (`#e5252a`). Sử dụng hiệu ứng nền mờ kính `backdrop-blur-xl`, bảng điều khiển Bento bố trí linh hoạt cho mọi màn hình (Responsive từ Mobile 390px đến Desktop 4K).
   * **State Management Cực Nhẹ:** Ứng dụng `Zustand` với module hóa độc lập. Dữ liệu giỏ hàng, sản phẩm đã lưu (Wishlist) và phiên đăng nhập được lưu trữ đồng thời ở LocalStorage/SessionStorage, đảm bảo khách hàng offline vẫn có thể thao tác mượt mà không mất dữ liệu.

2. **API & Edge Routing Layer (Xử Lý Biên Không Độ Trễ):**
   * Tận dụng Next.js Edge Runtime để phân phối trang tĩnh (Static Site Generation - SSG) và cập nhật dữ liệu tự động theo chu kỳ (Incremental Static Regeneration - ISR) cho các trang sản phẩm, đảm bảo điểm Google Lighthouse SEO đạt tối đa và First Contentful Paint < 0.8 giây.
   * Route Handler `/api/ai/chat` sử dụng cơ chế Server-Sent Events (SSE) để truyền luồng text phản hồi trực tiếp từ AI tới client theo thời gian thực (Zero latency streaming).

3. **Database & Realtime Persistence Layer:**
   * Sử dụng Supabase PostgreSQL với các chính sách bảo mật cấp dòng (Row-Level Security - RLS).
   * Khóa ngoại và ràng buộc toàn vẹn giữa bảng `orders` và `order_items` đảm bảo tính nhất quán của dữ liệu doanh thu và thống kê kho.

4. **Trợ Lý Thông Minh F5Nexus (AI Shopping Advisor):**
   * Được thiết kế theo cơ chế RAG (Retrieval-Augmented Generation) mini: tự động nhúng toàn bộ thông số kỹ thuật chuẩn của 10 dòng sản phẩm Magic và trạng thái giỏ hàng hiện tại vào System Prompt.
   * Hỗ trợ tự động nhận diện nhu cầu và trả về metadata thẻ sản phẩm `[[product_id]]` để giao diện tự động render nút "Xem chi tiết" và "Mua nhanh" ngay trong khung chat.

---

*Tài liệu kỹ thuật được chuẩn hóa và lưu trữ đồng bộ trong dự án Nexus Precision Living.*

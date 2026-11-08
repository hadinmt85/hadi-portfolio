# هادی نعمتی — سایت شخصی / رزومه

سایت شخصی دوزبانه (فارسی/انگلیسی) با Next.js، TypeScript و Tailwind CSS.

## ویژگی‌ها

- طراحی مدرن با رنگ‌بندی سبز/فیروزه‌ای و انیمیشن‌های نرم
- حالت روشن و تیره با تشخیص خودکار تنظیم سیستم و ذخیرهٔ انتخاب کاربر
- دوزبانه با پشتیبانی کامل RTL/LTR و تغییر فونت خودکار
- بخش‌های هدر/درباره من، مهارت‌ها، نمونه‌کارها و تماس
- کاملاً واکنش‌گرا (موبایل، تبلت، دسکتاپ)
- احترام به `prefers-reduced-motion` برای دسترس‌پذیری
- بدون بک‌اند؛ فرم تماس پیام را در برنامهٔ ایمیل باز می‌کند

## اجرا

```bash
npm install
npm run dev      # حالت توسعه
npm run build    # بیلد پروداکشن
npm start        # اجرای بیلد
```

سایت روی [http://localhost:3000](http://localhost:3000) بالا می‌آید.

## ساختار

```
src/
├── app/            # layout، صفحهٔ اصلی و استایل‌های سراسری
├── components/     # بخش‌های سایت (هدر، هیرو، مهارت‌ها، پروژه‌ها، تماس)
└── content/site.ts # تمام متن‌ها و داده‌های دوزبانه
```

## سفارشی‌سازی

- **متن‌ها و پروژه‌ها:** `src/content/site.ts`
- **رنگ‌ها و فونت‌ها:** `src/app/globals.css` و `src/app/layout.tsx`
- **رزومه:** فایل `public/resume.pdf` را جایگزین کنید
- **اطلاعات تماس و شبکه‌های اجتماعی:** در `src/content/site.ts` (متغیرهای `EMAIL`، `PHONE` و `socials`)

## استقرار

ساده‌ترین راه [Vercel](https://vercel.com/new) است: ریپازیتوری را وصل کنید و Deploy بزنید.

### فرم تماس

فرم به `POST /api/contact` می‌رود. برای فعال‌شدن ارسال، یکی از این دو را در Environment Variables پروژه تنظیم کنید:

| روش | متغیرها |
|---|---|
| تلگرام | `TELEGRAM_BOT_TOKEN` و `TELEGRAM_CHAT_ID` |
| ایمیل (Resend) | `RESEND_API_KEY` و اختیاری `CONTACT_TO_EMAIL` و `CONTACT_FROM_EMAIL` |

اگر هیچ‌کدام تنظیم نشده باشد، فرم پیام را ارسال نمی‌کند و به‌جای `mailto:` (که روی سیستم‌های بدون کلاینت ایمیل کار نمی‌کند) گزینهٔ کپی ایمیل و ارسال از Gmail را نشان می‌دهد.

### رزومه

صفحهٔ `/resume` نسخهٔ چاپی دارد (`Ctrl+P` → Save as PDF). فایل `public/resume.pdf` با همان صفحه تولید می‌شود:

```bash
npm run build && npm start
msedge --headless=new --no-pdf-header-footer --print-to-pdf=public/resume.pdf --virtual-time-budget=12000 http://localhost:3000/resume
```

### دموی پروژه‌ها

نسخهٔ استاتیک پروژه‌های نمونه در `public/demos/` قرار دارد و از مسیرهای `/demos/store/` و `/demos/license/` سرو می‌شود.

import type { Lang } from "./site";

export type CaseStudySection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type CaseStudyCopy = {
  role: string;
  timeline: string;
  summary: string;
  sections: CaseStudySection[];
};

export const caseStudies: Record<Lang, Record<string, CaseStudyCopy>> = {
  fa: {
    kafeyar: {
      role: "طراحی رابط و توسعهٔ فرانت‌اند",
      timeline: "آبان ۱۴۰۵ — ۱ هفته",
      summary:
        "منوی آنلاین کافه با ۳۳ آیتم: مشتری دسته‌بندی را انتخاب می‌کند، آیتم را به سبد اضافه می‌کند و سفارش حضوری یا بیرون‌بر ثبت می‌شود. کل رابط فارسی و راست‌به‌چپ است و با Tailwind ساخته شده.",
      sections: [
        {
          title: "مسئله",
          body: "منوی کاغذی کافه سریع کهنه می‌شود و به‌روزرسانی قیمت‌ها سخت است؛ از طرف دیگر بیشتر منوهای آنلاین قالب‌های آماده با عکس‌های استوک‌اند و شخصیت کافه را از بین می‌برند. هدف این بود که منویی ساخته شود که هم سفارش بگیرد و هم شبیه خود کافه باشد.",
        },
        {
          title: "رویکرد",
          body: "به‌جای کارت و عکس، همه‌چیز از بالا و مثل نگاه به میز کافه کشیده شد: فنجان، لیوان یخ‌دار، بشقابک شیرینی و حلقه‌های ردّ فنجان. انتخاب فنجان با CSS خالص پیاده شد تا state جدیدی به منطق اضافه نشود؛ سبد خرید در localStorage می‌ماند و فاکتور با ۹٪ مالیات و شمارهٔ پیگیری از API ثبت سفارش برمی‌گردد.",
          bullets: [
            "تصویرسازی SVG برای هر ۳۳ آیتم، بدون عکس استوک",
            "انتخاب فنجان با radio و :has، بدون افزودن state به کامپوننت",
            "سبد ماندگار با localStorage و شمارندهٔ تعداد در هدر",
            "اعتبارسنجی نام، موبایل و شمارهٔ میز در کلاینت و سرور",
            "سه فونت: Aref Ruqaa برای تیتر، وزیرمتن برای متن و نسخ برای قیمت",
            "همهٔ فاصله‌ها با logical properties تا RTL درست کار کند",
          ],
        },
        {
          title: "چالش‌ها",
          body: "بزرگ‌ترین چالش کنتراست بود: مسی روشن روی کرم فقط ۳٫۳:۱ می‌داد و از حد AA پایین‌تر بود، بنابراین متن‌های کوچک و دکمه‌های توپر به مسی تیره‌تر تغییر کردند. چالش دوم ذخیرهٔ سفارش روی Vercel بود؛ فایل‌سیستم سرورلس فقط‌خواندنی است، پس دمو پیام خطای شفاف نشان می‌دهد و ذخیره‌سازی واقعی به دیتابیس یا ربات تلگرام موکول شده است.",
        },
        {
          title: "نتیجه",
          body: "خروجی، منویی است که روی موبایل و دسکتاپ یکدست است، در Lighthouse هر سه بخش دسترس‌پذیری، بهترین‌روش‌ها و سئو نمرهٔ ۱۰۰ می‌گیرد و با ویرایش یک فایل داده برای هر کافه‌ای قابل استفاده است.",
        },
      ],
    },
    "hadi-store": {
      role: "طراحی و توسعهٔ فول‌استک",
      timeline: "آبان ۱۴۰۵ — پروژهٔ شخصی",
      summary:
        "فروشگاه اینترنتی کالای دیجیتال با Next.js و PostgreSQL؛ از احراز هویت و سبد خرید تا علاقه‌مندی‌ها، تسویه و پیگیری سفارش، همراه با پنل مدیریت.",
      sections: [
        {
          title: "مسئله",
          body: "بیشتر نمونه‌فروشگاه‌ها فقط چند صفحهٔ ثابت دارند و جریان واقعی خرید را پوشش نمی‌دهند. می‌خواستم فروشگاهی بسازم که کاربر در آن ثبت‌نام کند، وارد شود، خریدش را نهایی کند و بعد سفارشش را پیگیری کند؛ و مدیر هم بدون واسطه سفارش‌ها و محصولات را مدیریت کند.",
        },
        {
          title: "رویکرد",
          body: "کل پروژه یک اپلیکیشن Next.js با App Router است؛ صفحات سنگین سمت سرور رندر می‌شوند و فقط بخش‌های تعاملی کامپوننت کلاینت هستند.",
          bullets: [
            "ثبت‌نام و ورود با هش رمز به روش scrypt و نشست‌های امن ذخیره‌شده در پایگاه داده",
            "سبد خرید مهمان که بعد از ورود، به‌صورت خودکار به حساب کاربر منتقل می‌شود",
            "علاقه‌مندی‌ها با قلب روی کارت محصول و بخش اختصاصی در حساب کاربری",
            "تسویهٔ سفارش، صدور کد پیگیری و صفحهٔ وضعیت سفارش",
            "پنل مدیریت برای مشاهدهٔ آمار، تغییر وضعیت سفارش‌ها و افزودن محصول",
            "رابط راست‌به‌چپ واکنش‌گرا با تمرکز بر تایپوگرافی فارسی و دسترس‌پذیری",
          ],
        },
        {
          title: "چالش‌ها",
          body: "سخت‌ترین بخش، هماهنگ نگه‌داشتن سبد خرید هنگام گذر از حالت مهمان به کاربر واردشده بود؛ باید مطمئن می‌شدم کالایی که مهمان انتخاب کرده از دست نمی‌رود و در عین حال مسیرهای حساس مثل تسویه و پنل مدیریت بدون ورود باز نمی‌شوند.",
        },
        {
          title: "نتیجه",
          body: "یک فروشگاه کامل و آنلاین که تمام مسیر خرید — از دیدن محصول تا پیگیری سفارش — را پوشش می‌دهد و روی Vercel با پایگاه دادهٔ Neon اجرا می‌شود. کد کامل روی گیت‌هاب در دسترس است.",
        },
      ],
    },
    "product-store": {
      role: "توسعه‌دهندهٔ فرانت‌اند",
      timeline: "۱۴۰۵ — پروژهٔ شخصی",
      summary:
        "فروشگاه اینترنتی واکنش‌گرا با Next.js و TypeScript که محصولات را از یک API واقعی می‌گیرد و جریان کامل خرید را بدون بک‌اند اختصاصی شبیه‌سازی می‌کند.",
      sections: [
        {
          title: "مسئله",
          body: "می‌خواستم یک جریان خرید واقعی را از صفر تمرین کنم: از دیدن محصولات و فیلتر دسته‌بندی تا صفحهٔ جزئیات، سبد خرید و ورود کاربر. هدف این بود که همهٔ حالت‌های یک اپ واقعی — لودینگ، خطا، خالی‌بودن سبد — را در عمل پیاده کنم، نه فقط ظاهر.",
        },
        {
          title: "رویکرد",
          body: "ساختار پروژه بر پایهٔ App Router است و بخش‌های تعاملی به‌صورت کامپوننت کلاینت جدا شده‌اند تا بقیهٔ صفحه سبک بماند.",
          bullets: [
            "دریافت محصولات از REST API و مدیریت حالت‌های لودینگ، خطا و دادهٔ خالی",
            "فیلتر دسته‌بندی و مودال جزئیات محصول با بستن از طریق کیبورد",
            "اسکلتون لودینگ به‌جای پرشِ صفحه هنگام دریافت داده",
            "مدیریت توکن ورود در مرورگر و محافظت از مسیرهای نیازمند حساب",
            "طراحی واکنش‌گرا با Tailwind و رعایت سلسله‌مراتب بصری",
          ],
        },
        {
          title: "چالش‌ها",
          body: "سخت‌ترین بخش، هماهنگ نگه‌داشتن وضعیت سبد خرید با پاسخ‌های API بود؛ به‌خصوص وقتی درخواست شکست می‌خورد. برای هر عمل، حالت «در حال ارسال» و پیام خطای قابل‌فهم اضافه کردم تا کاربر هیچ‌وقت در بلاتکلیفی نماند.",
        },
        {
          title: "نتیجه",
          body: "یک نمونهٔ کامل و قابل دمو از الگوهای رایج فرانت‌اند: مصرف API، مدیریت وضعیت، فرم و دسترس‌پذیری. کد کامل روی گیت‌هاب در دسترس است.",
        },
      ],
    },
    "license-market": {
      role: "توسعه‌دهندهٔ فرانت‌اند",
      timeline: "۱۴۰۵ — پروژهٔ شخصی",
      summary:
        "صفحهٔ فرود فروش لایسنس و خدمات نرم‌افزاری با بخش‌های متنوع، کاروسل و فرم ورود؛ ساخته‌شده با Next.js و کامپوننت‌های shadcn/ui.",
      sections: [
        {
          title: "مسئله",
          body: "یک لندینگ بازاریابی باید در چند ثانیه اعتماد بسازد و کاربر را به خرید یا ثبت‌نام برساند. چالش این بود که بخش‌های زیادی — هیرو، پیشنهادها، دسته‌بندی محصولات، وبلاگ و فرم — بدون شلوغی و با ظاهری یکدست کنار هم بنشینند.",
        },
        {
          title: "رویکرد",
          body: "به‌جای ساختن همه‌چیز از صفر، از کامپوننت‌های آمادهٔ shadcn/ui استفاده کردم تا روی چیدمان و تجربهٔ کاربری تمرکز کنم.",
          bullets: [
            "بخش‌بندی صفحه به کامپوننت‌های کوچک و قابل استفادهٔ مجدد",
            "کاروسل خودکار با Embla برای نمایش پیشنهادها",
            "ریتم بصری یکسان در فاصله‌ها، تایپوگرافی و دکمه‌ها",
            "ریسپانسیو از موبایل تا دسکتاپ",
          ],
        },
        {
          title: "چالش‌ها",
          body: "بزرگ‌ترین ریسک این نوع پروژه‌ها، ناهماهنگی بصری بین بخش‌هایی است که در زمان‌های مختلف ساخته می‌شوند. با تعریف توکن‌های رنگ و فاصله و بازبینی نهایی کل صفحه، یکدستی را حفظ کردم.",
        },
        {
          title: "نتیجه",
          body: "یک لندینگ سبک و سریع با بخش‌های مستقل که هر کدام را می‌توان بدون دست‌زدن به بقیه تغییر داد.",
        },
      ],
    },
    portfolio: {
      role: "طراحی و توسعه",
      timeline: "۱۴۰۵ — همین سایت",
      summary:
        "سایت شخصی دوزبانهٔ فارسی/انگلیسی با پشتیبانی کامل RTL، حالت روشن و تیره، انیمیشن‌های سبک و بدون هیچ بک‌اند.",
      sections: [
        {
          title: "مسئله",
          body: "یک رزومهٔ ثابت PDF نمی‌توانست نمونه‌کارها، جزئیات فنی و راه‌های تماس را کنار هم نشان بدهد. می‌خواستم سایتی داشته باشم که هم برای کارفرمای ایرانی و هم برای مخاطب انگلیسی‌زبان درست کار کند و روی اینترنت ضعیف هم سریع باز شود.",
        },
        {
          title: "رویکرد",
          body: "همهٔ متن‌ها در یک فایل محتوا متمرکز شده‌اند و رابط کاربری فقط آن‌ها را نمایش می‌دهد.",
          bullets: [
            "دوزبانه با تغییر کامل جهت صفحه (RTL/LTR) و فونت مناسب هر زبان",
            "حالت روشن و تیره بر پایهٔ تنظیم سیستم و انتخاب کاربر",
            "انیمیشن ورود با CSS خالص، بدون وابستگی به جاوااسکریپت",
            "تصاویر پروژه‌ها با next/image و اسکرول داخلی برای اسکرین‌شات‌های بلند",
            "متادیتای SEO، sitemap و robots",
          ],
        },
        {
          title: "چالش‌ها",
          body: "بزرگ‌ترین درس این پروژه، عملکرد روی اینترنت ضعیف بود: انیمیشن‌های وابسته به جاوااسکریپت باعث می‌شدند صفحه تا زمان hydrate شدن خالی به‌نظر برسد. آن‌ها را با نسخهٔ CSS-only جایگزین کردم تا محتوا از همان ابتدا دیده شود.",
        },
        {
          title: "نتیجه",
          body: "سایتی سبک، دوزبانه و بدون بک‌اند که با یک push روی گیت‌هاب به‌صورت خودکار منتشر می‌شود.",
        },
      ],
    },
  },
  en: {
    kafeyar: {
      role: "UI design & front-end development",
      timeline: "Nov 2026 — 1 week",
      summary:
        "An online cafe menu with 33 items: pick a category, add to cart and place a dine-in or takeaway order. The whole interface is Persian and RTL-first, built with Tailwind.",
      sections: [
        {
          title: "Problem",
          body: "Paper menus go stale fast and updating prices is painful, while most online menus are generic templates with stock photos that erase the cafe's character. The goal was a menu that both takes orders and still feels like the place.",
        },
        {
          title: "Approach",
          body: "Instead of cards and photos, everything is drawn from above, like looking down at a cafe table: cups, iced glasses, pastry plates and the rings a cup leaves behind. Cup selection is pure CSS so no extra state was added to the logic; the cart lives in localStorage and the bill comes back from the order API with 9% tax and a tracking code.",
          bullets: [
            "SVG illustration for all 33 items instead of stock photography",
            "Cup selection with radio inputs and :has, no extra component state",
            "Persistent cart in localStorage with a header counter",
            "Name, phone and table validation on both client and server",
            "Three typefaces: Aref Ruqaa for headings, Vazirmatn for body, Naskh for prices",
            "Logical spacing properties so RTL behaves correctly",
          ],
        },
        {
          title: "Challenges",
          body: "Contrast was the main one: light copper on cream only reached 3.3:1 and failed AA, so small text and filled buttons moved to a deeper copper. The second was order storage on Vercel — the serverless filesystem is read-only, so the demo shows a clear error message and real persistence is left to a database or a Telegram bot.",
        },
        {
          title: "Result",
          body: "A consistent menu on mobile and desktop that scores 100 in all three Lighthouse categories (accessibility, best practices, SEO) and can be reused for any cafe by editing a single data file.",
        },
      ],
    },
    "hadi-store": {
      role: "Full-stack design & development",
      timeline: "Nov 2026 — Personal project",
      summary:
        "A digital-gadget online store built with Next.js and PostgreSQL: authentication, cart, wishlist, checkout and order tracking, plus an admin panel.",
      sections: [
        {
          title: "The problem",
          body: "Most storefront demos stop at a few static pages and skip the real purchase flow. I wanted a store where a customer can register, sign in, complete a purchase and then track the order — and where an admin can manage orders and products directly.",
        },
        {
          title: "The approach",
          body: "The whole product is a single Next.js app using the App Router: data-heavy pages render on the server, and only the interactive pieces are client components.",
          bullets: [
            "Registration and sign-in with scrypt password hashing and database-backed sessions",
            "A guest cart that is carried over to the account automatically after login",
            "Wishlist with a heart on every product card and a dedicated account section",
            "Checkout, order codes and a status page for tracking",
            "An admin panel for stats, order status updates and adding products",
            "A responsive RTL-first interface focused on Persian typography and accessibility",
          ],
        },
        {
          title: "Challenges",
          body: "The hard part was keeping the cart intact while a guest becomes a signed-in user: the item chosen before login must not be lost, while sensitive routes such as checkout and the admin panel stay protected at the same time.",
        },
        {
          title: "Result",
          body: "A complete, live store covering the whole journey from browsing to order tracking, running on Vercel with a Neon Postgres database. The full code is on GitHub.",
        },
      ],
    },
    "product-store": {
      role: "Front-end developer",
      timeline: "2026 — Personal project",
      summary:
        "A responsive online store built with Next.js and TypeScript that consumes a real REST API and simulates a complete shopping flow without a custom back end.",
      sections: [
        {
          title: "The problem",
          body: "I wanted to practise a real shopping flow end to end: browsing products, filtering by category, opening product details, managing a cart and signing in. The goal was to handle the states a real app actually has — loading, errors and empty states — not just the happy path.",
        },
        {
          title: "The approach",
          body: "The project uses the App Router, with interactive pieces isolated as client components so the rest of the page stays light.",
          bullets: [
            "Fetching products from a REST API with loading, error and empty states",
            "Category filtering and a product detail modal that closes from the keyboard",
            "Loading skeletons instead of layout jumps while data arrives",
            "Storing the auth token in the browser and guarding signed-in routes",
            "Responsive layout with Tailwind and a clear visual hierarchy",
          ],
        },
        {
          title: "Challenges",
          body: "Keeping the cart state in sync with API responses was the hard part, especially when a request failed. Every action gets a pending state and a readable error message so the user is never left guessing.",
        },
        {
          title: "Result",
          body: "A complete, demo-ready example of everyday front-end patterns: API consumption, state management, forms and accessibility. The full code is on GitHub.",
        },
      ],
    },
    "license-market": {
      role: "Front-end developer",
      timeline: "2026 — Personal project",
      summary:
        "A landing page for a software licence marketplace, with hero, offers, product categories, blog and a sign-in form, built with Next.js and shadcn/ui.",
      sections: [
        {
          title: "The problem",
          body: "A marketing landing page has a few seconds to earn trust and move the visitor to a purchase or sign-up. The challenge was fitting many sections — hero, offers, categories, blog and a form — together without feeling cluttered.",
        },
        {
          title: "The approach",
          body: "Instead of building every control from scratch, I used shadcn/ui components so I could focus on layout and user experience.",
          bullets: [
            "Splitting the page into small, reusable section components",
            "An autoplaying Embla carousel for the offers",
            "A consistent rhythm for spacing, typography and buttons",
            "Responsive from mobile through desktop",
          ],
        },
        {
          title: "Challenges",
          body: "The main risk in this kind of page is visual drift between sections built at different times. Colour and spacing tokens plus a final pass over the whole page kept everything consistent.",
        },
        {
          title: "Result",
          body: "A fast, lightweight landing page whose sections can each be changed independently.",
        },
      ],
    },
    portfolio: {
      role: "Design and development",
      timeline: "2026 — This site",
      summary:
        "A bilingual Persian/English personal site with full RTL support, light and dark themes, lightweight animations and no back end.",
      sections: [
        {
          title: "The problem",
          body: "A static PDF résumé could not show projects, technical details and contact options side by side. I wanted a site that works for Iranian and English-speaking visitors alike, and still opens quickly on a slow connection.",
        },
        {
          title: "The approach",
          body: "All copy lives in a single content module and the UI simply renders it.",
          bullets: [
            "Bilingual with a full direction switch (RTL/LTR) and the right font per language",
            "Light and dark themes based on system preference and user choice",
            "Entrance animations in pure CSS with no JavaScript dependency",
            "Project screenshots through next/image with an inner scroll area for tall shots",
            "SEO metadata, sitemap and robots",
          ],
        },
        {
          title: "Challenges",
          body: "The biggest lesson was performance on weak connections: JavaScript-driven reveal animations left the page looking empty until hydration finished. I replaced them with a CSS-only version so content is visible immediately.",
        },
        {
          title: "Result",
          body: "A fast, bilingual, back-end-free site that redeploys automatically on every push to GitHub.",
        },
      ],
    },
  },
};

export function getCaseStudy(lang: Lang, slug: string): CaseStudyCopy | undefined {
  return caseStudies[lang][slug];
}

export const caseStudyLabels: Record<
  Lang,
  { back: string; demo: string; code: string; stack: string; ctaTitle: string; ctaBody: string; ctaButton: string }
> = {
  fa: {
    back: "همهٔ پروژه‌ها",
    demo: "مشاهدهٔ دمو",
    code: "کد روی گیت‌هاب",
    stack: "پشتهٔ فنی",
    ctaTitle: "بیا با هم کار کنیم",
    ctaBody: "اگر این پروژه برایت جالب بود یا پروژهٔ مشابهی داری، برایم پیام بده.",
    ctaButton: "تماس با من",
  },
  en: {
    back: "All projects",
    demo: "View live demo",
    code: "Code on GitHub",
    stack: "Tech stack",
    ctaTitle: "Let's work together",
    ctaBody: "If this project caught your eye or you have something similar in mind, get in touch.",
    ctaButton: "Contact me",
  },
};

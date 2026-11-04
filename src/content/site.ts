export type Lang = "fa" | "en";

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; caption: string; skills: Skill[] };
export type Highlight = { title: string; desc: string };
export type Stat = { value: string; label: string };
export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  href: string;
  gradient: string;
  accent: string;
};
export type Social = { label: string; href: string; icon: "github" | "telegram" | "mail" };
export type NavItem = { id: string; label: string };

export type SiteContent = {
  nav: NavItem[];
  languages: { fa: string; en: string; switchLabel: string };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    role: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    resume: string;
    location: string;
    card: { status: string; stackLabel: string; focusLabel: string; focus: string };
    marquee: string[];
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    highlights: Highlight[];
    stats: Stat[];
    currently: { label: string; text: string };
  };
  skills: {
    kicker: string;
    title: string;
    desc: string;
    groups: SkillGroup[];
    note: string;
  };
  projects: {
    kicker: string;
    title: string;
    desc: string;
    linkLabel: string;
    allLabel: string;
    items: Project[];
  };
  contact: {
    kicker: string;
    title: string;
    desc: string;
    email: string;
    location: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
      success: string;
    };
    socials: Social[];
  };
  footer: {
    tagline: string;
    rights: string;
    top: string;
  };
};

const EMAIL = "namatihadi7@gmail.com";

export const siteLinks = {
  github: "https://github.com/hadinmt85",
  githubHandle: "@hadinmt85",
  telegram: "https://t.me/hadinmt85",
  email: EMAIL,
};

const github: Social = { label: "GitHub", href: siteLinks.github, icon: "github" };
const telegram: Social = { label: "Telegram", href: siteLinks.telegram, icon: "telegram" };
const mail: Social = { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" };

export const site: Record<Lang, SiteContent> = {
  fa: {
    nav: [
      { id: "about", label: "درباره من" },
      { id: "skills", label: "مهارت‌ها" },
      { id: "projects", label: "نمونه‌کارها" },
      { id: "contact", label: "تماس" },
    ],
    languages: { fa: "فارسی", en: "English", switchLabel: "تغییر زبان" },
    hero: {
      badge: "آمادهٔ همکاری پروژه‌ای",
      greeting: "سلام، من",
      name: "هادی نعمتی",
      role: "توسعه‌دهندهٔ فرانت‌اند",
      lead: "رابط‌های کاربری سریع، در دسترس و زیبا می‌سازم. تمرکزم روی React و Next.js است و به جزئیات تایپوگرافی، انیمیشن‌های نرم و کد تمیز وسواس دارم.",
      primaryCta: "دیدن نمونه‌کارها",
      secondaryCta: "تماس با من",
      resume: "دانلود رزومه",
      location: "اردبیل، ایران",
      card: {
        status: "آمادهٔ پروژهٔ جدید",
        stackLabel: "پشتهٔ کاری",
        focusLabel: "تمرکز",
        focus: "performance & a11y",
      },
      marquee: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Playwright", "Figma"],
    },
    about: {
      kicker: "دربارهٔ من",
      title: "طراحی و کدی که کنار هم کار می‌کنند",
      paragraphs: [
        "بیش از پنج سال است که در تیم‌های محصول و استودیوهای طراحی کار می‌کنم؛ از پیاده‌سازی رابط‌های پیچیده تا ساختن دیزاین‌سیستم و بهینه‌سازی سرعت. باور دارم رابط خوب یعنی کاربر بدون فکر کردن به مسیرش برسد.",
        "کار با تیم‌های طراحی و بک‌اند را دوست دارم، در بازبینی کد سخت‌گیرم و همیشه یک قدم برای بهترکردن دسترس‌پذیری و عملکرد برمی‌دارم.",
      ],
      highlights: [
        { title: "کد تمیز و قابل نگهداری", desc: "ساختار ماژولار، تست‌پذیر و مستند." },
        { title: "عملکرد و سرعت", desc: "بهینه‌سازی Core Web Vitals و بارگذاری تدریجی." },
        { title: "همکاری شفاف", desc: "گزارش منظم، بازخورد سریع و تحویل به‌موقع." },
      ],
      stats: [
        { value: "۵+", label: "سال تجربه" },
        { value: "۴۰+", label: "پروژهٔ تحویل‌شده" },
        { value: "۲۰+", label: "مشتری راضی" },
        { value: "۹۸٪", label: "رضایت کارفرما" },
      ],
      currently: { label: "این روزها", text: "در حال عمیق‌تر شدن در Server Components و دسترس‌پذیری." },
    },
    skills: {
      kicker: "مهارت‌ها",
      title: "ابزارهایی که هر روز با آن‌ها کار می‌کنم",
      desc: "ترکیبی از مهندسی فرانت‌اند، استایل‌دهی و ابزارهای تیمی.",
      groups: [
        {
          title: "فرانت‌اند",
          caption: "هستهٔ کار من",
          skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 92 },
            { name: "TypeScript", level: 88 },
            { name: "JavaScript (ES2023)", level: 94 },
          ],
        },
        {
          title: "استایل و تجربهٔ کاربری",
          caption: "جزئیاتِ دیده‌شدن",
          skills: [
            { name: "Tailwind CSS", level: 94 },
            { name: "CSS / SCSS", level: 90 },
            { name: "Motion & Animation", level: 85 },
            { name: "Figma", level: 80 },
          ],
        },
        {
          title: "ابزارها و اکوسیستم",
          caption: "از لوکال تا پروداکشن",
          skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "Node.js", level: 78 },
            { name: "Testing (Vitest / Playwright)", level: 75 },
            { name: "Vercel & CI", level: 85 },
          ],
        },
      ],
      note: "همیشه در حال یادگیری؛ این روزها مشغول عمیق‌تر شدن در Server Components و دسترس‌پذیری هستم.",
    },
    projects: {
      kicker: "نمونه‌کارها",
      title: "چند کار که به آن‌ها افتخار می‌کنم",
      desc: "انتخابی از پروژه‌هایی که در آن‌ها از ایده تا انتشار همراه تیم بوده‌ام.",
      linkLabel: "مشاهدهٔ پروژه",
      allLabel: "بقیهٔ پروژه‌ها در گیت‌هاب",
      items: [
        {
          title: "داشبورد فروش آریا",
          blurb: "داشبورد تحلیلی با نمودارهای زنده، فیلتر پیشرفته و خروجی اکسل.",
          tags: ["React", "TypeScript", "Recharts"],
          year: "۱۴۰۴",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #04211c 0%, #0f766e 55%, #0891b2 100%)",
          accent: "#a7f3d0",
        },
        {
          title: "فروشگاه نبات",
          blurb: "فروشگاه آنلاین با سبد خرید، پرداخت امن و پنل مدیریت سفارش‌ها.",
          tags: ["Next.js", "Stripe", "Tailwind"],
          year: "۱۴۰۳",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #041f1c 0%, #115e59 50%, #15803d 100%)",
          accent: "#bbf7d0",
        },
        {
          title: "تسک‌فلو",
          blurb: "اپ مدیریت وظیفهٔ تیمی با درگ‌اند‌دراپ، حالت آفلاین و همگام‌سازی زنده.",
          tags: ["React", "Zustand", "PWA"],
          year: "۱۴۰۳",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #04211f 0%, #0e7490 55%, #4d7c0f 100%)",
          accent: "#d9f99d",
        },
        {
          title: "وب‌سایت هلدینگ مانا",
          blurb: "سایت شرکتی دوزبانه با سرعت بالا، ساختار سئو‌محور و مدیریت محتوا.",
          tags: ["Next.js", "i18n", "SEO"],
          year: "۱۴۰۲",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #0a1220 0%, #134e4a 55%, #0f766e 100%)",
          accent: "#a7f3d0",
        },
      ],
    },
    contact: {
      kicker: "تماس",
      title: "بیایید چیزی بسازیم",
      desc: "برای همکاری، مشاوره یا حتی یک گفت‌وگوی کوتاه دربارهٔ فرانت‌اند پیام بده. معمولاً کمتر از یک روز کاری پاسخ می‌دهم.",
      email: EMAIL,
      location: "اردبیل، ایران",
      form: {
        name: "نام",
        namePlaceholder: "نام و نام خانوادگی",
        email: "ایمیل",
        emailPlaceholder: "you@example.com",
        message: "پیام",
        messagePlaceholder: "دربارهٔ پروژه‌ات بنویس…",
        submit: "ارسال پیام",
        note: "این فرم پیام را در برنامهٔ ایمیل شما باز می‌کند.",
        success: "برنامهٔ ایمیل باز شد. اگر باز نشد، مستقیم به من ایمیل بزن.",
      },
      socials: [github, telegram, mail],
    },
    footer: {
      tagline: "ساخته‌شده با Next.js، Tailwind و مقدار زیادی قهوه.",
      rights: "همهٔ حقوق محفوظ است.",
      top: "بازگشت به بالا",
    },
  },

  en: {
    nav: [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Work" },
      { id: "contact", label: "Contact" },
    ],
    languages: { fa: "فارسی", en: "English", switchLabel: "Switch language" },
    hero: {
      badge: "Open for freelance work",
      greeting: "Hi, I'm",
      name: "Hadi Nemati",
      role: "Front-end Developer",
      lead: "I build interfaces that are fast, accessible and genuinely nice to use. My daily tools are React and Next.js, and I care a lot about typography, smooth motion and clean code.",
      primaryCta: "View my work",
      secondaryCta: "Get in touch",
      resume: "Download CV",
      location: "Ardabil, Iran",
      card: {
        status: "Available for new projects",
        stackLabel: "Stack",
        focusLabel: "Focus",
        focus: "performance & a11y",
      },
      marquee: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Playwright", "Figma"],
    },
    about: {
      kicker: "About me",
      title: "Design and code that work as one",
      paragraphs: [
        "For the past five-plus years I've worked with product teams and design studios, from shipping complex interfaces to building design systems and chasing performance budgets. I believe a good interface lets people reach their goal without thinking about the path.",
        "I love working closely with designers and back-end engineers, I'm picky in code review, and I always try to leave accessibility and performance a little better than I found them.",
      ],
      highlights: [
        { title: "Clean, maintainable code", desc: "Modular structure, typed and documented." },
        { title: "Performance first", desc: "Core Web Vitals, lazy loading, smart budgets." },
        { title: "Transparent teamwork", desc: "Regular updates, fast feedback, on-time delivery." },
      ],
      stats: [
        { value: "5+", label: "Years of experience" },
        { value: "40+", label: "Projects delivered" },
        { value: "20+", label: "Happy clients" },
        { value: "98%", label: "Client satisfaction" },
      ],
      currently: { label: "Currently", text: "Going deeper into Server Components and accessibility." },
    },
    skills: {
      kicker: "Skills",
      title: "Tools I work with every day",
      desc: "A mix of front-end engineering, styling craft and team workflows.",
      groups: [
        {
          title: "Front-end",
          caption: "The core of my work",
          skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 92 },
            { name: "TypeScript", level: 88 },
            { name: "JavaScript (ES2023)", level: 94 },
          ],
        },
        {
          title: "Styling & UX",
          caption: "Details you can feel",
          skills: [
            { name: "Tailwind CSS", level: 94 },
            { name: "CSS / SCSS", level: 90 },
            { name: "Motion & Animation", level: 85 },
            { name: "Figma", level: 80 },
          ],
        },
        {
          title: "Tooling & ecosystem",
          caption: "From localhost to production",
          skills: [
            { name: "Git & GitHub", level: 90 },
            { name: "Node.js", level: 78 },
            { name: "Testing (Vitest / Playwright)", level: 75 },
            { name: "Vercel & CI", level: 85 },
          ],
        },
      ],
      note: "Always learning — right now I'm going deeper into Server Components and accessibility.",
    },
    projects: {
      kicker: "Selected work",
      title: "A few things I'm proud of",
      desc: "A selection of projects where I've been part of the journey from idea to launch.",
      linkLabel: "View project",
      allLabel: "More projects on GitHub",
      items: [
        {
          title: "Aria Sales Dashboard",
          blurb: "Analytics dashboard with live charts, advanced filtering and CSV export.",
          tags: ["React", "TypeScript", "Recharts"],
          year: "2025",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #04211c 0%, #0f766e 55%, #0891b2 100%)",
          accent: "#a7f3d0",
        },
        {
          title: "Nabat Storefront",
          blurb: "Online shop with cart, secure checkout and an order management panel.",
          tags: ["Next.js", "Stripe", "Tailwind"],
          year: "2024",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #041f1c 0%, #115e59 50%, #15803d 100%)",
          accent: "#bbf7d0",
        },
        {
          title: "TaskFlow",
          blurb: "Team task app with drag & drop, offline mode and live sync.",
          tags: ["React", "Zustand", "PWA"],
          year: "2024",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #04211f 0%, #0e7490 55%, #4d7c0f 100%)",
          accent: "#d9f99d",
        },
        {
          title: "Mana Holding Website",
          blurb: "Bilingual corporate site with great speed, SEO structure and a CMS.",
          tags: ["Next.js", "i18n", "SEO"],
          year: "2023",
          href: siteLinks.github,
          gradient: "linear-gradient(135deg, #0a1220 0%, #134e4a 55%, #0f766e 100%)",
          accent: "#a7f3d0",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something",
      desc: "Drop me a line about a project, a collaboration, or just to talk front-end. I usually reply within one business day.",
      email: EMAIL,
      location: "Ardabil, Iran",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project…",
        submit: "Send message",
        note: "This form opens the message in your email app.",
        success: "Your email app should be open. If not, mail me directly.",
      },
      socials: [github, telegram, mail],
    },
    footer: {
      tagline: "Built with Next.js, Tailwind and a lot of coffee.",
      rights: "All rights reserved.",
      top: "Back to top",
    },
  },
};

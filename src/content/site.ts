export type Lang = "fa" | "en";

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; caption: string; skills: Skill[] };
export type Highlight = { title: string; desc: string };
export type Stat = { value: string; label: string };
export type ProjectImage = { src: string; width: number; height: number };
export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  period: string;
  href: string;
  demo?: string;
  image: ProjectImage;
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
  education: {
    kicker: string;
    title: string;
    desc: string;
    degree: string;
    university: string;
    location: string;
    period: string;
    status: string;
    coursesLabel: string;
    courses: string;
    skillsLabel: string;
    languagesLabel: string;
    languages: string;
    resumeCta: string;
    projectsLabel: string;
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
    caseLabel: string;
    demoLabel: string;
    items: Project[];
  };
  contact: {
    kicker: string;
    title: string;
    desc: string;
    email: string;
    phone: string;
    showPhone: string;
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
      sending: string;
      error: string;
      fallback: string;
      copyEmail: string;
      copied: string;
      gmail: string;
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
const PHONE = "0992 343 5142";

const PROJECT_IMAGES = {
  store: { src: "/store.webp", width: 1200, height: 1602 },
  lisens: { src: "/lisens.webp", width: 1200, height: 5643 },
  portfolio: { src: "/portfolio.webp", width: 1200, height: 3248 },
} satisfies Record<string, ProjectImage>;

export const siteLinks = {
  github: "https://github.com/hadinmt85",
  githubHandle: "@hadinmt85",
  telegram: "https://t.me/hadinmt85",
  email: EMAIL,
};

const github: Social = { label: "GitHub", href: siteLinks.github, icon: "github" };
const telegram: Social = { label: "Telegram", href: siteLinks.telegram, icon: "telegram" };
const mail: Social = {
  label: "Email",
  href: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`,
  icon: "mail",
};

export const site: Record<Lang, SiteContent> = {
  fa: {
    nav: [
      { id: "about", label: "درباره من" },
      { id: "journey", label: "تحصیلات" },
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
        "بیش از سه سال است که روی فرانت‌اند تمرکز کرده‌ام؛ از پروژه‌های شخصی و تمرین‌های عملی تا ساخت رابط‌های کامل با React و Next.js. باور دارم رابط خوب یعنی کاربر بدون فکر کردن به مسیرش برسد.",
        "از کار تیمی با طراح‌ها و بک‌اند لذت می‌برم، در بازبینی کد سخت‌گیرم و همیشه یک قدم برای بهترکردن دسترس‌پذیری و عملکرد برمی‌دارم.",
      ],
      highlights: [
        { title: "کد تمیز و قابل نگهداری", desc: "ساختار ماژولار، تست‌پذیر و مستند." },
        { title: "عملکرد و سرعت", desc: "بهینه‌سازی Core Web Vitals و بارگذاری تدریجی." },
        { title: "همکاری شفاف", desc: "گزارش منظم، بازخورد سریع و تحویل به‌موقع." },
      ],
      stats: [
        { value: "۳+", label: "سال تجربه" },
        { value: "۳", label: "پروژهٔ متن‌باز" },
        { value: "۱۲", label: "تکنولوژی" },
        { value: "۱۰۰٪", label: "تمرکز روی فرانت‌اند" },
      ],
      currently: { label: "این روزها", text: "در حال عمیق‌تر شدن در Server Components و دسترس‌پذیری." },
    },
    education: {
      kicker: "مسیر حرفه‌ای",
      title: "تحصیلات و تجربه",
      desc: "دانشجوی مهندسی کامپیوتر با تمرکز روی فرانت‌اند؛ یادگیری از طریق پروژه‌های واقعی و انتشار کد روی گیت‌هاب.",
      degree: "کارشناسی مهندسی کامپیوتر",
      university: "دانشگاه آزاد",
      location: "اردبیل، ایران",
      period: "۱۴۰۳ — اکنون",
      status: "در حال تحصیل · آمادهٔ کارآموزی و پروژهٔ جونیور",
      coursesLabel: "دروس و تمرکز",
      courses: "ساختمان داده، برنامه‌نویسی وب، پایگاه داده، مهندسی نرم‌افزار، شبکه",
      skillsLabel: "مهارت‌ها",
      languagesLabel: "زبان",
      languages: "فارسی (زبان مادری) · انگلیسی (متوسط، در حال تقویت)",
      resumeCta: "دانلود رزومه",
      projectsLabel: "پروژه‌های منتخب",
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
      title: "پروژه‌هایی که خودم ساخته‌ام",
      desc: "پروژه‌های متن‌باز من؛ کد همه‌شان روی گیت‌هاب در دسترس است.",
      linkLabel: "مشاهده در گیت‌هاب",
      allLabel: "همهٔ پروژه‌ها در گیت‌هاب",
      caseLabel: "مطالعهٔ بیشتر",
      demoLabel: "دمو",
      items: [
        {
          title: "فروشگاه محصولات",
          blurb: "فروشگاه واکنش‌گرا با Next.js که محصولات را از Fake Store API می‌گیرد؛ فیلتر دسته‌بندی، مودال جزئیات، اسکلتون لودینگ و صفحه‌های سبد خرید و ورود.",
          tags: ["Next.js", "TypeScript", "Tailwind", "REST API"],
          year: "۱۴۰۵",
          period: "مهر ۱۴۰۵",
          href: "https://github.com/hadinmt85/API-product-store",
          image: PROJECT_IMAGES.store,
          slug: "product-store",
          demo: "/demos/store",
          gradient: "linear-gradient(135deg, #04211c 0%, #0f766e 55%, #0891b2 100%)",
          accent: "#a7f3d0",
        },
        {
          title: "لندینگ لایسنس‌مارکت",
          blurb: "صفحهٔ فرود فروش لایسنس و خدمات نرم‌افزاری با بخش‌های هیرو، پیشنهادها، دسته‌بندی محصولات، وبلاگ و فرم ورود؛ ساخته‌شده با shadcn/ui.",
          tags: ["Next.js", "TypeScript", "shadcn/ui", "Embla"],
          year: "۱۴۰۵",
          period: "شهریور ۱۴۰۵",
          href: "https://github.com/hadinmt85/license-market",
          image: PROJECT_IMAGES.lisens,
          slug: "license-market",
          demo: "/demos/license",
          gradient: "linear-gradient(135deg, #041f1c 0%, #115e59 50%, #15803d 100%)",
          accent: "#bbf7d0",
        },
        {
          title: "همین سایت شخصی",
          blurb: "سایت دوزبانهٔ فارسی/انگلیسی با پشتیبانی کامل RTL، انیمیشن‌های اسکرول، طراحی واکنش‌گرا و بدون وابستگی به بک‌اند.",
          tags: ["Next.js", "TypeScript", "Tailwind", "i18n"],
          year: "۱۴۰۵",
          period: "آبان ۱۴۰۵",
          href: "https://github.com/hadinmt85/hadi-portfolio",
          image: PROJECT_IMAGES.portfolio,
          slug: "portfolio",
          gradient: "linear-gradient(135deg, #04211f 0%, #0e7490 55%, #4d7c0f 100%)",
          accent: "#d9f99d",
        },
      ],
    },
    contact: {
      kicker: "تماس",
      title: "بیایید چیزی بسازیم",
      desc: "برای همکاری، مشاوره یا حتی یک گفت‌وگوی کوتاه دربارهٔ فرانت‌اند پیام بده. معمولاً کمتر از یک روز کاری پاسخ می‌دهم.",
      email: EMAIL,
      phone: PHONE,
      showPhone: "نمایش شماره",
      location: "اردبیل، ایران",
      form: {
        name: "نام",
        namePlaceholder: "نام و نام خانوادگی",
        email: "ایمیل",
        emailPlaceholder: "you@example.com",
        message: "پیام",
        messagePlaceholder: "دربارهٔ پروژه‌ات بنویس…",
        submit: "ارسال پیام",
        note: "پیام مستقیم برای من ارسال می‌شود.",
        success: "پیامت رسید. ممنون! معمولاً کمتر از یک روز کاری جواب می‌دهم.",
        sending: "در حال ارسال…",
        error: "ارسال نشد. لطفاً دوباره تلاش کن یا از راه‌های زیر پیام بده.",
        fallback: "فعلاً ارسال خودکار فعال نیست؛ ایمیل را کپی کن یا از Gmail بفرست.",
        copyEmail: "کپی ایمیل",
        copied: "کپی شد",
        gmail: "ارسال از Gmail",
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
      { id: "journey", label: "Education" },
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
        "For the past three years I've focused on front-end development, from personal projects and hands-on practice to building complete interfaces with React and Next.js. I believe a good interface lets people reach their goal without thinking about the path.",
        "I enjoy working closely with designers and back-end engineers, I'm picky in code review, and I always try to leave accessibility and performance a little better than I found them.",
      ],
      highlights: [
        { title: "Clean, maintainable code", desc: "Modular structure, typed and documented." },
        { title: "Performance first", desc: "Core Web Vitals, lazy loading, smart budgets." },
        { title: "Transparent teamwork", desc: "Regular updates, fast feedback, on-time delivery." },
      ],
      stats: [
        { value: "3+", label: "Years of experience" },
        { value: "3", label: "Open-source projects" },
        { value: "12", label: "Technologies" },
        { value: "100%", label: "Front-end focus" },
      ],
      currently: { label: "Currently", text: "Going deeper into Server Components and accessibility." },
    },
    education: {
      kicker: "Journey",
      title: "Education & experience",
      desc: "Computer engineering student focused on front-end, learning through real projects and open code on GitHub.",
      degree: "B.Sc. Computer Engineering",
      university: "Islamic Azad University",
      location: "Ardabil, Iran",
      period: "2024 — Present",
      status: "Currently studying · open to internships and junior roles",
      coursesLabel: "Coursework",
      courses: "Data structures, web programming, databases, software engineering, networks",
      skillsLabel: "Skills",
      languagesLabel: "Languages",
      languages: "Persian (native) · English (intermediate, improving)",
      resumeCta: "Download resume",
      projectsLabel: "Selected projects",
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
      title: "Projects I've built myself",
      desc: "My open-source projects — all the code is available on GitHub.",
      linkLabel: "View on GitHub",
      allLabel: "All projects on GitHub",
      caseLabel: "Read case study",
      demoLabel: "Demo",
      items: [
        {
          title: "Product Store",
          blurb: "A responsive storefront built with Next.js that pulls products from the Fake Store API, with category filters, a detail modal, loading skeletons, cart and sign-in pages.",
          tags: ["Next.js", "TypeScript", "Tailwind", "REST API"],
          year: "2026",
          period: "Oct 2026",
          href: "https://github.com/hadinmt85/API-product-store",
          image: PROJECT_IMAGES.store,
          slug: "product-store",
          demo: "/demos/store",
          gradient: "linear-gradient(135deg, #04211c 0%, #0f766e 55%, #0891b2 100%)",
          accent: "#a7f3d0",
        },
        {
          title: "License Market Landing",
          blurb: "A landing page for a software license and services marketplace: hero, offers, product categories, blog and a sign-in form, built with shadcn/ui.",
          tags: ["Next.js", "TypeScript", "shadcn/ui", "Embla"],
          year: "2026",
          period: "Sep 2026",
          href: "https://github.com/hadinmt85/license-market",
          image: PROJECT_IMAGES.lisens,
          slug: "license-market",
          demo: "/demos/license",
          gradient: "linear-gradient(135deg, #041f1c 0%, #115e59 50%, #15803d 100%)",
          accent: "#bbf7d0",
        },
        {
          title: "This Portfolio",
          blurb: "A bilingual FA/EN personal site with full RTL support, scroll animations, a responsive layout and no back end.",
          tags: ["Next.js", "TypeScript", "Tailwind", "i18n"],
          year: "2026",
          period: "Nov 2026",
          href: "https://github.com/hadinmt85/hadi-portfolio",
          image: PROJECT_IMAGES.portfolio,
          slug: "portfolio",
          gradient: "linear-gradient(135deg, #04211f 0%, #0e7490 55%, #4d7c0f 100%)",
          accent: "#d9f99d",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something",
      desc: "Drop me a line about a project, a collaboration, or just to talk front-end. I usually reply within one business day.",
      email: EMAIL,
      phone: PHONE,
      showPhone: "Show number",
      location: "Ardabil, Iran",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project…",
        submit: "Send message",
        note: "Your message goes straight to me.",
        success: "Got it — thanks! I usually reply within one business day.",
        sending: "Sending…",
        error: "Could not send. Please try again or use one of the options below.",
        fallback: "Automatic sending is not enabled yet. Copy the address or send it from Gmail.",
        copyEmail: "Copy email",
        copied: "Copied",
        gmail: "Send via Gmail",
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

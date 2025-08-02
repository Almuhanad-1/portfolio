import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Almuhanad Alnihmy",
  initials: "AA",
  url: "https://almuhanad.vercel.app/",
  location: "Istanbul, Turkiye",
  locationLink: "https://www.google.com/maps/place/istanbul",
  description: "Software Engineer | Full-Stack Web Developer",
  summary:
    "With a love for creating dynamic and engaging applications, I bring over 3 years of experience as a full-stack web developer focused on crafting seamless Web2 experiences and expanding into Web3. In recent projects, I've also built applications integrated with AI — leveraging tools like OpenAI and Gemini to power intelligent features such as smart assistants, content generation, and automated workflows. I'm always on the lookout for new tools, best practices, and the latest tech to enhance my work and build future-ready solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    // Programming Languages
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Python",
    "Solidity",

    // Frontend
    "HTML",
    "CSS",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Angular",
    "React Native",
    "Svelte",
    "SvelteKit",

    // Backend
    "Express.js",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Supabase",

    // Web3
    "Ethers.js",
    "Hardhat",
    "RainbowKit",
    "Wagmi",
    "Web3.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "almuhanad.alnihmy@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Almuhanad-1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/almuhanad-alnihmy",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Skyline Holdings",
      href: "",
      badges: [],
      location: "Turkey",
      title: "Frontend Web Developer",
      logoUrl: "/skylineholding.webp",
      start: "Jan 2024",
      end: "Mar 2025",
      description: `
      <ul>
        <li>Engineered and launched 13+ web applications from scratch, including B2B dashboards, e-commerce platforms, real-estate portals, tourism booking systems, and high-converting landing pages.</li>
        <li>Engineered scalable frontend architectures using React, Next.js, Tailwind CSS, TypeScript, and Shadcn UI.</li>
        <li>Implemented major features including authentication flows, complex form systems, analytics dashboards, payment gateways, and SEO-optimized pages.</li>
        <li>Integrated RESTful APIs and collaborated with backend teams, reducing integration time by 30% and ensuring 95%+ API success rate.</li>
        <li>Improved average page load speed by 40% and achieved 90+ Lighthouse performance scores across all major applications.</li>
        <li>Contributed to system analysis and technical design discussions, shaping project planning and architecture decisions.</li>
        <li>Translated detailed Figma designs into pixel-perfect, production-ready user interfaces.</li>
      </ul>
      `,
    },
    {
      company: "STYLE Protocol",
      badges: [],
      href: "",
      location: "Switzerland . Remote",
      title: "Full Stack Web3 Developer",
      logoUrl: "/style.png",
      start: "Feb 2024",
      end: "May 2024",
      description: `
      <ul>
        <li>Created a customized ERC-20 token with built-in distribution logic upon deployment.</li>
        <li>Edited and adapted a vesting-tokens dapp to seamlessly operate on a new chain.</li>
        <li>Deployed an airdropper smart contract to streamline token distribution.</li>
        <li>Collaborated with a cross-functional team across development, business, and blockchain domains.</li>
        <li>Generated detailed documentation for ERC-20 token, vesting tokens dapp, and airdropper contract.</li>
      </ul>
      `,
    },
    {
      company: "CPP Tokens",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: "/cpp.jpeg",
      start: "Aug 2023",
      end: "Jan 2024",
      description: `
      <ul>
        <li>Built a secure web store with Binance and PayPal integrations.</li>
        <li>Created a full e-commerce platform using Next.js and Firebase.</li>
        <li>Developed a Telegram bot for real-time job listing updates.</li>
        <li>Revamped a SaaS app with SvelteKit and Supabase, increasing system performance by 25% and cutting database response times by 40%.</li>
        <li>Created a Chrome extension to turn any phone number on a webpage into a WhatsApp link.</li>
        <li>Integrated modular web components to enhance scalability and maintainability.</li>
      </ul>`,
    },
    {
      company: "Youthink Academy",
      href: "https://www.youthink.la",
      badges: [],
      location: "Turkey",
      title: "Teaching Assistant & Full Stack Developer",
      logoUrl: "/youthink.jpeg",
      start: "Jul 2022",
      end: "Feb 2023",
      description: `
      <ul>
        <li>Mentored and supported over 60 students in building websites and applications.</li>
        <li>Provided technical guidance through code reviews, live coding sessions, and lectures on new topics.</li>
        <li>Conducted one-on-one meetings to provide personalized assistance to students needing extra help.</li>
        <li>Coached students on delivering effective team presentations and collaborating efficiently on group projects.</li>
        <li>Adapted daily tasks to support changing student goals and enhance program outcomes.</li>
      </ul>`,
    },
  ],
  education: [
    {
      school: "Kütahya University",
      href: "#",
      degree: "Bachelor's Degree of Software Engineering",
      logoUrl: "/dpu.png",
      start: "2023",
      end: "-",
    },
    {
      school: "Youthink Academy",
      href: "#",
      degree: "Full-stack Web Development Bootcamp",
      logoUrl: "/youthink.jpeg",
      start: "Feb 2022",
      end: "Jun 2022",
    },
    {
      school: "Taiz University",
      href: "#",
      degree: "Bachelor's Degree of Software Engineering",
      logoUrl: "/taiz.png",
      start: "2019",
      end: "-",
    },
  ],
  projects: [
    {
      title: "Skyline Travel",
      href: "https://skylinetraveltr.com",
      active: true,
      description:
        "A tourism platform for booking tours, apartments, and cars. It also provides a blog for travel tips and news.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next-auth",
        "next-intl",
      ],
      links: [
        {
          type: "Website",
          href: "https://skylinetraveltr.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/skylinetravel.webp",
    },
    {
      title: "Skyline Travel Dashboard",
      active: true,
      description:
        "Admin dashboard (with permission-based access) to manage skyline travel platform, bookings, payments, users, partners..etc",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next-auth",
        "next-intl",
      ],
      links: [],
      image: "/skylinetravel-dashboard.webp",
    },
    {
      title: "Skyline Education",
      active: true,
      description:
        "A platform offering university admissions services in Turkey, including information on private and government universities, majors, and scholarships.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "next-intl",
      ],
      links: [
        {
          type: "Website",
          href: "https://skylineistedu.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/skyline-education.webp",
    },
    {
      title: "Skyline Mimarlik",
      active: true,
      description:
        "A platform for showcasing skyline's architectural projects and services.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "next-intl",
        "framer-motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://skyline-mimarlik.vercel.app/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/skyline-mimarlik.webp",
    },
    {
      title: "Ravnaq Store",
      active: true,
      description:
        "Ravnaq Store is a luxury home decor brand that offers a wide range of products including tea sets, decorative products, and serving stands.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://ravnaq.vercel.app/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ravnaq.webp",
    },
    {
      title: "Skyline Real Estate",
      active: true,
      description:
        "A real estate platform for buying, and renting apartments, villas, and lands.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "next-intl",
      ],
      image: "/skyline-realestate.webp",
      links: [
        {
          type: "Website",
          href: "https://skylineholding.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Tvman Store",
      href: "https://www.tvmanstore.com/",
      active: true,
      description:
        "An e-commerce platform for selling TVs, accessories, and other related products.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://www.tvmanstore.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tvmanstore.webp",
    },
    {
      title: "Leadlinker",
      active: true,
      description:
        "Boost sales with personalized links for WhatsApp, calls, and custom URLs. Sell without a website and track link visits with detailed stats.",
      technologies: [
        "SvelteKit",
        "TailwindCSS",
        "Supabase",
        "Auth.js",
        "PayPal",
        "Binance",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.leadlinker.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/leadlinker.webp",
    },
  ],
} as const;

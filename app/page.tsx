"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  GitBranch,
  Globe,
  Layers3,
  MoonStar,
  Sparkles,
  SunMedium,
} from "lucide-react";
import {
  SiBootstrap,
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiRadixui,
  SiReact,
  SiFramer,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaEnvelope, FaGithub, FaJava, FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
type Language = "pt" | "en";
type SkillIcon = React.ComponentType<{
  size?: number | string;
  className?: string;
  "aria-hidden"?: boolean;
  style?: React.CSSProperties;
}>;

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  accent: string;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
};

type SkillGroup = {
  title: string;
  items: { name: string; icon: SkillIcon }[];
};

const preferenceChangeEvent = "portfolio-preference-change";

function subscribeToPreferences(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(preferenceChangeEvent, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(preferenceChangeEvent, onChange);
  };
}

function getThemeSnapshot(): Theme {
  return window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
}

function getLanguageSnapshot(): Language {
  return window.localStorage.getItem("portfolio-language") === "en" ? "en" : "pt";
}

function setPreference(key: "portfolio-theme" | "portfolio-language", value: Theme | Language) {
  window.localStorage.setItem(key, value);
  window.dispatchEvent(new Event(preferenceChangeEvent));
}

const skillIconColors: Record<string, string> = {
  HTML: "#e34f26",
  CSS: "#1572b6",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  React: "#61dafb",
  "Next.js": "var(--text)",
  "Nuxt.js": "#00dc82",
  Tailwind: "#06b6d4",
  "Tailwind CSS": "#06b6d4",
  "Shadcn UI": "var(--text)",
  "Radix UI": "#161618",
  "Framer Motion": "#0055ff",
  Bootstrap: "#7952b3",
  PHP: "#777bb4",
  Laravel: "#ff2d20",
  Java: "#f89820",
  "Spring Boot": "#6db33f",
  MySQL: "#4479a1",
  PostgreSQL: "#4169e1",
  Git: "#f05032",
  GitHub: "var(--text)",
  "GitHub Actions": "#2088ff",
  Docker: "#2496ed",
  Postman: "#ff6c37",
  MongoDB: "#47a248",
  "Node.js": "#5fa04e",
  JWT: "#d63aff",
};

const technologyIcons: Record<string, SkillIcon> = {
  React: SiReact,
  CSS: SiCss,
  "Next.js": SiNextdotjs,
  "Nuxt.js": SiNuxt,
  Laravel: SiLaravel,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  PostgreSQL: SiPostgresql,
  PHP: SiPhp,
  MySQL: SiMysql,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  JWT: SiJsonwebtokens,
  JavaScript: SiJavascript,
  MongoDB: SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Shadcn UI": SiShadcnui,
  "Radix UI": SiRadixui,
  "Framer Motion": SiFramer,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Postman: SiPostman,
};

const navItems: Record<Language, string[]> = {
  pt: ["Início", "Projetos", "Sobre", "Contato"],
  en: ["Home", "Projects", "About", "Contact"],
};

const projects: Record<Language, Project[]> = {
  pt: [
    {
      number: "01",
      title: "FlowCRM",
      description: "CRM SaaS para pequenas empresas com gestão de clientes, contatos e métricas de vendas.",
      stack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"],
      accent: "from-cyan-500/30 via-sky-400/5 to-transparent",
      featured: true,
      githubUrl: "https://github.com/Pedr0-Henrique/FlowCRM",
    },
    {
      number: "02",
      title: "help-desk",
      description: "Plataforma de suporte técnico com tickets, histórico de atividades e perfil de usuários.",
      stack: ["React", "TypeScript", "CSS", "Spring Boot", "PostgreSQL", "Docker"],
      accent: "from-violet-500/30 via-fuchsia-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/help-desk",
    },
    {
      number: "03",
      title: "barber_shop",
      description: "Sistema completo para gestão de barbearia com agendamento, clientes e serviços.",
      stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
      accent: "from-emerald-500/30 via-teal-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/barber_shop",
    },
    {
      number: "04",
      title: "AcademicHub",
      description: "Plataforma de gestão acadêmica com administração de alunos, cursos e matrículas.",
      stack: ["TypeScript", "React", "Laravel", "MySQL", "Docker"],
      accent: "from-amber-500/30 via-orange-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/AcademicHub",
    },
    {
      number: "05",
      title: "Finance-Manager",
      description: "Aplicação web para controle financeiro pessoal com organização de receitas e despesas.",
      stack: ["PHP", "MySQL", "React"],
      accent: "from-rose-500/30 via-pink-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/Finance-Manager",
    },
    {
      number: "06",
      title: "cooknary",
      description: "Plataforma voltada para criação e avaliação de receitas gastronômicas.",
      stack: ["Java", "Spring Boot", "MySQL", "Postman", "Nuxt.js"],
      accent: "from-orange-500/30 via-yellow-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/cooknary",
    },
    {
      number: "07",
      title: "FitFlow-Hub",
      description: "Plataforma moderna e responsiva para academias e fitness, desenvolvida para oferecer uma experiência de usuário excepcional.",
      stack: ["React", "TypeScript", "Shadcn UI", "Radix UI", "Framer Motion", "Tailwind CSS"],
      accent: "from-lime-500/30 via-emerald-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/FitFlow-Hub",
      demoUrl: "https://ironforge-academia.netlify.app/",
    },
    {
      number: "08",
      title: "GOAT",
      description: "Site premium construído com React e Tailwind CSS para exibir os maiores jogadores da história da NBA, inspirado no design do Shadcn UI.",
      stack: ["JavaScript", "React", "Tailwind CSS", "Shadcn UI"],
      accent: "from-yellow-500/30 via-amber-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/GOAT",
      demoUrl: "https://landingbasquete.netlify.app/",
    },
  ],
  en: [
    {
      number: "01",
      title: "FlowCRM",
      description: "CRM SaaS for small businesses to manage clients, contacts, and sales metrics.",
      stack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"],
      accent: "from-cyan-500/30 via-sky-400/5 to-transparent",
      featured: true,
      githubUrl: "https://github.com/Pedr0-Henrique/FlowCRM",
    },
    {
      number: "02",
      title: "help-desk",
      description: "Technical support platform with ticketing, activity history, and user profiles.",
      stack: ["React", "TypeScript", "CSS", "Spring Boot", "PostgreSQL", "Docker"],
      accent: "from-violet-500/30 via-fuchsia-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/help-desk",
    },
    {
      number: "03",
      title: "barber_shop",
      description: "Complete barbershop management system for appointments, customers, and services.",
      stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
      accent: "from-emerald-500/30 via-teal-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/barber_shop",
    },
    {
      number: "04",
      title: "AcademicHub",
      description: "Academic management platform for students, courses, and enrollment administration.",
      stack: ["TypeScript", "React", "Laravel", "MySQL", "Docker"],
      accent: "from-amber-500/30 via-orange-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/AcademicHub",
    },
    {
      number: "05",
      title: "Finance-Manager",
      description: "Web application for managing personal finances and organizing income and expenses.",
      stack: ["PHP", "MySQL", "React"],
      accent: "from-rose-500/30 via-pink-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/Finance-Manager",
    },
    {
      number: "06",
      title: "cooknary",
      description: "Platform focused on culinary recipe creation, curation, and evaluation.",
      stack: ["Java", "Spring Boot", "MySQL", "Postman", "Nuxt.js"],
      accent: "from-orange-500/30 via-yellow-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/cooknary",
    },
    {
      number: "07",
      title: "FitFlow-Hub",
      description: "A modern, responsive platform for gyms and fitness, designed to deliver an exceptional user experience.",
      stack: ["React", "TypeScript", "Shadcn UI", "Radix UI", "Framer Motion", "Tailwind CSS"],
      accent: "from-lime-500/30 via-emerald-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/FitFlow-Hub",
      demoUrl: "https://ironforge-academia.netlify.app/",
    },
    {
      number: "08",
      title: "GOAT",
      description: "A premium React and Tailwind CSS site showcasing the greatest players in NBA history, inspired by Shadcn UI design.",
      stack: ["JavaScript", "React", "Tailwind CSS", "Shadcn UI"],
      accent: "from-yellow-500/30 via-amber-400/5 to-transparent",
      githubUrl: "https://github.com/Pedr0-Henrique/GOAT",
      demoUrl: "https://landingbasquete.netlify.app/",
    },
  ],
};

const skillGroups: Record<Language, SkillGroup[]> = {
  pt: [
    { title: "Frontend", items: [{ name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: SiCss }, { name: "JavaScript", icon: SiJavascript }, { name: "TypeScript", icon: SiTypescript }, { name: "React", icon: SiReact }, { name: "Next.js", icon: SiNextdotjs }, { name: "Tailwind", icon: SiTailwindcss }, { name: "Bootstrap", icon: SiBootstrap }] },
    { title: "Backend", items: [{ name: "PHP", icon: SiPhp }, { name: "Laravel", icon: SiLaravel }, { name: "Java", icon: FaJava }, { name: "Spring Boot", icon: SiSpringboot }] },
    { title: "Banco", items: [{ name: "MySQL", icon: SiMysql }, { name: "PostgreSQL", icon: SiPostgresql }] },
    { title: "Ferramentas", items: [{ name: "Git", icon: SiGit }, { name: "GitHub", icon: SiGithub }, { name: "Docker", icon: SiDocker }, { name: "Postman", icon: SiPostman }] },
    { title: "Conceitos", items: [{ name: "OOP", icon: Braces }, { name: "MVC", icon: Layers3 }, { name: "Clean Code", icon: Sparkles }, { name: "REST API", icon: Globe }, { name: "Version Control", icon: GitBranch }] },
  ],
  en: [
    { title: "Frontend", items: [{ name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: SiCss }, { name: "JavaScript", icon: SiJavascript }, { name: "TypeScript", icon: SiTypescript }, { name: "React", icon: SiReact }, { name: "Next.js", icon: SiNextdotjs }, { name: "Tailwind", icon: SiTailwindcss }, { name: "Bootstrap", icon: SiBootstrap }] },
    { title: "Backend", items: [{ name: "PHP", icon: SiPhp }, { name: "Laravel", icon: SiLaravel }, { name: "Java", icon: FaJava }, { name: "Spring Boot", icon: SiSpringboot }] },
    { title: "Database", items: [{ name: "MySQL", icon: SiMysql }, { name: "PostgreSQL", icon: SiPostgresql }] },
    { title: "Tools", items: [{ name: "Git", icon: SiGit }, { name: "GitHub", icon: SiGithub }, { name: "Docker", icon: SiDocker }, { name: "Postman", icon: SiPostman }] },
    { title: "Concepts", items: [{ name: "OOP", icon: Braces }, { name: "MVC", icon: Layers3 }, { name: "Clean Code", icon: Sparkles }, { name: "REST API", icon: Globe }, { name: "Version Control", icon: GitBranch }] },
  ],
};

const experience: Record<Language, { role: string; company: string; description: string; points: string[] }[]> = {
  pt: [
    {
      role: "ESTAGIÁRIO EM DESIGN GRÁFICO",
      company: "Universe Camiseteria",
      description:
        "Criação de identidades visuais, materiais promocionais, estampas e conceitos visuais que influenciaram diretamente meu olhar para interfaces e experiência de usuário.",
      points: [
        "Identidade visual e design",
        "Materiais promocionais e artes para moda",
        "Desenvolvimento de conceitos e storytelling visual",
      ],
    },
  ],
  en: [
    {
      role: "DESIGN GRAPHIC INTERN",
      company: "Universe Camiseteria",
      description:
        "Creation of visual identities, promotional materials, print pieces, and brand concepts that shaped my thinking around interfaces and user experience.",
      points: [
        "Visual identity and design",
        "Promotional materials and fashion art",
        "Concept development and visual storytelling",
      ],
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const theme = useSyncExternalStore(subscribeToPreferences, getThemeSnapshot, (): Theme => "dark");
  const language = useSyncExternalStore(subscribeToPreferences, getLanguageSnapshot, (): Language => "pt");

  const activeNavItems = navItems[language];
  const activeProjects = projects[language];
  const activeSkills = skillGroups[language];
  const activeExperience = experience[language];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setPreference("portfolio-theme", theme === "dark" ? "light" : "dark");

  const titleText = language === "pt"
    ? {
        intro: "OLÁ, EU SOU PEDRO HENRIQUE",
        role: "DESENVOLVEDOR FULL STACK",
        sub: "CONSTRUINDO APLICAÇÕES WEB MODERNAS.",
       
        selected: "TRABALHOS SELECIONADOS",
        about: "SOBRE MIM",
        projects: language === "pt" ? "Projetos" : "Projects",
        skills: language === "pt" ? "Habilidades" : "Skills",
        contact: language === "pt" ? "Contato" : "Contact",
        viewProject: language === "pt" ? "Ver projeto" : "View Project",
      }
    : {
        intro: "HI, I'M PEDRO HENRIQUE",
        role: "FULL STACK DEVELOPER",
        sub: "BUILDING MODERN WEB APPLICATIONS.",
        location: "BRASÍLIA, BR — 2026",
        selected: "SELECTED WORK",
        about: "ABOUT ME",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        viewProject: "View Project",
      };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="mx-auto max-w-[1600px] px-4 pb-12 pt-5 sm:px-6 xl:px-8">
        <header className="hero-shell overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg-2)] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <nav className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#top" aria-label="Pedro Henrique, início" className="font-black tracking-[-0.12em] text-[var(--text)]">
              PH<span className="text-[var(--blue)]">.</span>
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] p-1 md:flex">
              {activeNavItems.map((item, index) => {
                const href = index === 0 ? "#top" : `#${navItems.en[index].toLowerCase()}`;
                const isActive = index === 0;

                return (
                  <a
                    key={item}
                    href={href}
                    className={
                      isActive
                        ? "rounded-full bg-[var(--muted-strong)] px-5 py-2 text-sm font-medium text-[var(--text)] transition-colors"
                        : "rounded-full px-5 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                    }
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] p-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                <button
                  type="button"
                  onClick={() => setPreference("portfolio-language", "pt")}
                  className={`rounded-full px-2 py-1 transition-colors ${language === "pt" ? "bg-[var(--muted-strong)] text-[var(--text)]" : "text-[var(--muted)]"}`}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => setPreference("portfolio-language", "en")}
                  className={`rounded-full px-2 py-1 transition-colors ${language === "en" ? "bg-[var(--muted-strong)] text-[var(--text)]" : "text-[var(--muted)]"}`}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition-transform duration-200 hover:scale-105"
              >
                {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
              </button>
            </div>
          </nav>

          <div id="top" className="relative grid gap-8 px-4 pb-8 pt-6 sm:px-6 lg:grid-cols-1 lg:px-8 lg:pb-10 lg:pt-8">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="relative z-10"
            >
              <motion.p
                variants={fadeUp}
                className="max-w-[34rem] text-[0.95rem] font-medium uppercase tracking-[0.18em] text-[var(--muted)] md:text-[1.05rem]"
              >
                {titleText.intro}
                <span className="mt-2 block text-[var(--text)]">
                  {titleText.role}
                </span>
                <span className="mt-2 block">{titleText.sub}</span>
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-8 text-[clamp(4.5rem,10vw,14rem)] font-black leading-[0.78] tracking-[-0.09em] text-[var(--text)]"
              >
                <span className="block leading-[0.74] tracking-[-0.04em]">FULL</span>
                <span className="block leading-[0.74] tracking-[-0.04em]">STACK</span>
                <span className="flex items-center gap-3 leading-[0.74] tracking-[-0.10em] text-[var(--text)]">
                  DEV<span className="inline-flex text-[var(--blue)]">⚡</span>LOPER
                </span>
              </motion.h1>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-[var(--muted)] md:text-[0.78rem]">
                {["React", "Next.js", "Laravel", "Java", "Spring Boot", "PostgreSQL"].map((item) => {
                  const Icon = technologyIcons[item];

                  return (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2">
                      <Icon aria-hidden={true} size={15} style={{ color: skillIconColors[item] ?? "var(--blue)" }} />
                      {item}
                    </span>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] px-4 py-5 sm:px-6 lg:px-8">
            <div className="text-[0.74rem] font-medium uppercase tracking-[0.3em] text-[var(--muted)] sm:text-[0.82rem]">
              {titleText.location}
            </div>
            <a
              href="#projects"
              aria-label="Scroll to projects"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition-transform duration-200 hover:scale-105"
            >
              <ArrowDownRight size={20} />
            </a>
          </div>
        </header>

        <main className="space-y-8 pt-8">
          <section id="projects" className="section-panel p-5 sm:p-7 lg:p-8">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                  {language === "pt" ? "Trabalhos selecionados" : "Selected work"}
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[var(--text)] md:text-5xl">
                  {language === "pt" ? "Projetos" : "Projects"}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                {language === "pt"
                  ? "Uma seleção de projetos que construí para resolver problemas reais com foco em qualidade, velocidade e usabilidade."
                  : "A selection of projects I’ve built to solve real problems with a focus on quality, speed, and usability."}
              </p>
            </div>

            <div className="space-y-6">
              <motion.article
                whileHover={{ y: -6 }}
                className="project-feature overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--panel)]"
              >
                <div className="grid gap-6 p-4 md:grid-cols-[1.2fr_0.8fr] md:p-6">
                  <div className="rounded-[24px] border border-[var(--border)] bg-gradient-to-br from-[rgba(56,189,248,0.15)] via-[var(--panel)] to-[rgba(255,255,255,0.02)] p-4 md:p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                        {language === "pt" ? "Projeto em destaque" : "Featured project"}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text)]">
                        <Sparkles size={12} className="text-[var(--blue)]" />
                        {activeProjects[0].title}
                      </span>
                    </div>

                    <div className="mb-5 grid grid-cols-3 gap-3 md:grid-cols-4">
                      {["Clientes", "Contatos", "Pipeline", "Dashboard"].map((label) => (
                        <div key={label} className="rounded-2xl border border-[var(--border)] bg-[#0f1115] p-3">
                          <div className="mb-3 h-8 rounded-lg bg-[var(--blue-soft)]" />
                          <div className="h-2 rounded-full bg-white/10" />
                          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-[var(--border)] bg-[#0d1117] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                          {language === "pt" ? "Resumo do faturamento" : "Revenue overview"}
                        </span>
                        <span className="text-[0.7rem] text-[var(--blue)]">+24.8%</span>
                      </div>
                      <div className="flex h-28 items-end gap-2">
                        {[35, 52, 48, 66, 82, 92, 76].map((value, index) => (
                          <div
                            key={value + index}
                            className="w-full rounded-t-xl bg-gradient-to-t from-[var(--blue)] to-[#9fe8ff]"
                            style={{ height: `${value}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-5 rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5">
                    <div>
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
                        {activeProjects[0].number} — {activeProjects[0].title}
                      </p>
                      <h3 className="mt-4 text-3xl font-black tracking-[-0.06em] text-[var(--text)]">
                        {activeProjects[0].title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {activeProjects[0].description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[0.64rem] uppercase tracking-[0.12em] text-[var(--muted)]">
                      {activeProjects[0].stack.map((item) => {
                        const Icon = technologyIcons[item] ?? Braces;

                        return (
                          <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-2.5 py-1.5">
                            <Icon aria-hidden={true} size={13} style={{ color: skillIconColors[item] ?? "var(--blue)" }} />
                            {item}
                          </span>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href={activeProjects[0].githubUrl ?? "https://github.com"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text)]">
                        GitHub <FaGithub aria-hidden="true" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-5 lg:grid-cols-2">
                {activeProjects.slice(1).map((project) => (
                  <motion.article
                    key={project.title}
                    whileHover={{ y: -6 }}
                    className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--panel)] p-4 md:p-5"
                  >
                    <div className={`mb-4 rounded-[20px] border border-[var(--border)] bg-gradient-to-br ${project.accent} p-4`}>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted)]">{project.number}</span>
                        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">{project.title}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div key={`${project.title}-${index}`} className="rounded-xl border border-[var(--border)] bg-[#0f1115] p-2">
                            <div className="h-10 rounded-lg bg-white/10" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black tracking-[-0.05em] text-[var(--text)]">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                      </div>
                    </div>

                    <div className="mb-5 flex flex-wrap gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                      {project.stack.map((item) => {
                        const Icon = technologyIcons[item] ?? Braces;

                        return (
                          <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-2.5 py-1.5">
                            <Icon aria-hidden={true} size={13} style={{ color: skillIconColors[item] ?? "var(--blue)" }} />
                            {item}
                          </span>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={project.demoUrl ?? "#contact"}
                        target={project.demoUrl ? "_blank" : undefined}
                        rel={project.demoUrl ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)]"
                      >
                        {project.demoUrl
                          ? language === "pt" ? "Ver demo" : "Live demo"
                          : titleText.viewProject}{" "}
                        <ArrowUpRight size={14} />
                      </a>
                      <a href={project.githubUrl ?? "https://github.com"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)]">
                        GitHub <FaGithub aria-hidden="true" size={14} />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="section-panel p-5 sm:p-7 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                  {language === "pt" ? "Sobre mim" : "About me"}
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[var(--text)] md:text-5xl">
                  {language === "pt" ? "Construindo produtos com pensamento e qualidade." : "Building thoughtful products with modern tools."}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                  {language === "pt"
                    ? "Sou Pedro Henrique, desenvolvedor Full Stack focado em aplicações web modernas, interfaces eficientes e APIs bem estruturadas. Gosto de transformar ideias complexas em experiências digitais confiáveis, com código limpo e sustentável."
                    : "I’m Pedro Henrique, a Full Stack Developer focused on building modern web applications, efficient interfaces, and well-structured APIs. I enjoy turning complex product ideas into reliable digital experiences with clean, maintainable code."}
                </p>
              </div>

              <div className="rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {language === "pt" ? "Formação" : "Education"}
                </p>
                <div className="mt-5 space-y-4">
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.04em] text-[var(--text)]">
                      {language === "pt" ? "Análise e Desenvolvimento de Sistemas" : "Systems Analysis and Development"}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">Faculdade Senac DF</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">2023 — 2025</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {language === "pt" ? "Vantagem de UX" : "UX advantage"}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {language === "pt"
                      ? "Minha experiência anterior em design gráfico influencia diretamente a forma como penso interfaces, hierarquia e qualidade da interação."
                      : "My previous experience in graphic design directly influences the way I think about interfaces, hierarchy, and interaction quality."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section-panel p-5 sm:p-7 lg:p-8">
            <div className="mb-8">
              <p className="text-[0.74rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                {language === "pt" ? "Stack técnica" : "Tech stack"}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[var(--text)] md:text-5xl">
                {language === "pt" ? "Habilidades" : "Skills"}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {activeSkills.map((group) => (
                <div key={group.title} className="rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--muted)]">{group.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <span key={item.name} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1.5 text-[0.7rem] font-medium text-[var(--text)]">
                          <Icon
                            aria-hidden={true}
                            size={15}
                            className="shrink-0"
                            style={{ color: skillIconColors[item.name] ?? "var(--blue)" }}
                          />
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="section-panel p-5 sm:p-7 lg:p-8">
            <div className="mb-8">
              <p className="text-[0.74rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                {language === "pt" ? "Experiência" : "Experience"}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[var(--text)] md:text-5xl">
                {language === "pt" ? "Design e desenvolvimento juntos." : "Design and development, together."}
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-[var(--border)]" />
              {activeExperience.map((item) => (
                <div key={item.role} className="relative pl-12">
                  <div className="absolute left-0 top-2 h-8 w-8 rounded-full border border-[var(--border)] bg-[var(--blue)]/20" />
                  <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card)] p-5">
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--muted)]">{item.role}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[var(--text)]">{item.company}</h3>
                    <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.description}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--muted)]">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section-panel p-5 sm:p-7 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                  {language === "pt" ? "Contato" : "Contact"}
                </p>
                <h2 className="mt-3 text-3xl font-black leading-[0.9] tracking-[-0.07em] text-[var(--text)] md:text-6xl">
                  {language === "pt" ? "Vamos criar algo juntos." : "Let’s build something together."}
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <a href="mailto:pedroh@example.com" className="contact-link">
                  <FaEnvelope aria-hidden="true" size={16} />
                  <span>pedro2002h@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/pedro-henrique-6a22b1324/?isSelfProfile=true" target="_blank" rel="noreferrer" className="contact-link">
                  <FaLinkedinIn aria-hidden="true" size={16} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Pedr0-Henrique" target="_blank" rel="noreferrer" className="contact-link">
                  <FaGithub aria-hidden="true" size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] px-2 pb-2 pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-medium text-[var(--text)]">Pedro Henrique</p>
            <p className="mt-1">{language === "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer"}</p>
          </div>

        

          <div className="flex items-center gap-5">
            <a href="https://github.com/Pedr0-Henrique" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
              <FaGithub aria-hidden="true" size={15} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/pedro-henrique-6a22b1324/?isSelfProfile=true" target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
              <FaLinkedinIn aria-hidden="true" size={15} />
              LinkedIn
            </a>
            <a href="mailto:pedro2002h@gmail.com" className="hover:text-[var(--text)]">
              <FaEnvelope aria-hidden="true" size={15} />
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

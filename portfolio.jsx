import { useState, useEffect, useRef } from "react";

const portfolioData = {
  name: "Sreenisha M",
  title: "Frontend Developer",
  tagline: "Building clean, responsive web experiences with React & TypeScript",
  email: "nishamanogaran28@gmail.com",
  phone: "+91 8925412373",
  github: "https://github.com/nisha28-it",
  linkedin: "https://linkedin.com/in/sree-nisha-m-037b57376",
  about: `Hi! I'm Sreenisha, a 2nd year Information Technology student at K.S.R. College of Engineering, Namakkal, with a CGPA of 8.11. I'm passionate about building clean, responsive, and user-friendly web applications. I enjoy turning ideas into real products — from full-stack hostel management systems to charity subscription platforms. I'm currently seeking internship and entry-level opportunities where I can grow as a frontend developer and contribute meaningfully to a team.`,
  skills: {
    Frontend: ["HTML", "CSS", "React", "TypeScript", "Tailwind CSS"],
    Backend: ["Spring Boot", "REST APIs", "Next.js"],
    Databases: ["MySQL", "MongoDB", "Supabase"],
    Languages: ["JavaScript", "Java", "Python", "C"],
    Tools: ["Git", "GitHub", "Vercel", "Power BI", "Tableau", "Excel"],
  },
  projects: [
    {
      name: "Smart Hostel Management System",
      description:
        "Full-stack web app with role-based dashboards for admin, staff, and students. Features QR-based attendance with GPS verification, complaint management, and a food voting system.",
      tech: ["Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/nisha28-it/Hostel-Management-System",
      live: "",
    },
    {
      name: "Golf Charity Subscription Platform",
      description:
        "Full-stack platform with user authentication, monthly/yearly subscription plans, Stripe payment integration, prize draw engine, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
      github: "https://github.com/nisha28-it/golf-charity-platform",
      live: "",
    },
    {
      name: "Finance Dashboard",
      description:
        "Interactive financial dashboard built with React, featuring real-time data visualization, expense tracking, and clean responsive UI.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/nisha28-it",
      live: "",
    },
    {
      name: "Escape Room Hub",
      description:
        "JavaScript-based interactive escape room web experience with puzzle logic, timer mechanics, and immersive UI design.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/nisha28-it",
      live: "",
    },
  ],
  internships: [
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      duration: "May – Jun 2026",
      type: "Virtual",
    },
    {
      role: "Web Development Intern",
      company: "CodSoft",
      duration: "May – Jun 2026",
      type: "Virtual",
    },
    {
      role: "Data Analytics Intern",
      company: "Infronex IT Products and Services",
      duration: "Jan – Dec 2025",
      type: "On-site",
    },
  ],
  certifications: [
    "Data Structures and Algorithms — NPTEL Swayam",
    "Learnathon 2025 — Industry-standard Training Program",
    "QA: Become a Game Tester 2026 — Udemy",
  ],
  achievements: [
    "Presented projects at technical symposiums at Hindustan College and Karpagam College",
    "Volunteered with Rotary Club — community outreach, event coordination, and social awareness",
  ],
};

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      NAV_LINKS.forEach((link) => {
        const el = sectionRefs.current[link];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActive(link);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={styles.root}>
      <style>{css}</style>

      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <span style={styles.navLogo}>S<span style={styles.accent}>.</span></span>
        <div style={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                ...styles.navBtn,
                ...(active === l ? styles.navBtnActive : {}),
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map((l) => (
            <button key={l} style={styles.mobileMenuBtn} onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.heroContent} className="fade-in">
          <div style={styles.heroTag}>👋 Available for Internships</div>
          <h1 style={styles.heroName}>{portfolioData.name}</h1>
          <h2 style={styles.heroTitle}>{portfolioData.title}</h2>
          <p style={styles.heroTagline}>{portfolioData.tagline}</p>
          <div style={styles.heroActions}>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" style={styles.btnPrimary}>
              GitHub →
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" style={styles.btnOutline}>
              LinkedIn
            </a>
            <button onClick={() => scrollTo("Contact")} style={styles.btnGhost}>
              Contact Me
            </button>
          </div>
          <div style={styles.statsRow}>
            {[["8.11", "CGPA"], ["4+", "Projects"], ["3+", "Internships"], ["5+", "Technologies"]].map(([val, label]) => (
              <div key={label} style={styles.statBox}>
                <span style={styles.statVal}>{val}</span>
                <span style={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.scrollHint}>↓ scroll</div>
      </section>

      {/* ABOUT */}
      <section ref={(el) => (sectionRefs.current["About"] = el)} style={styles.section}>
        <SectionTitle title="About Me" />
        <div style={styles.aboutGrid}>
          <div style={styles.aboutAvatar}>
            <div style={styles.avatarPlaceholder}>SM</div>
            <div style={styles.avatarCaption}>[ Add your photo here ]</div>
          </div>
          <div style={styles.aboutText}>
            <p style={styles.aboutPara}>{portfolioData.about}</p>
            <div style={styles.infoGrid}>
              {[
                ["🎓", "College", "K.S.R. College of Engineering"],
                ["📚", "Degree", "BE – Information Technology"],
                ["📍", "Location", "Namakkal, Tamil Nadu"],
                ["📧", "Email", portfolioData.email],
              ].map(([icon, label, val]) => (
                <div key={label} style={styles.infoItem}>
                  <span style={styles.infoIcon}>{icon}</span>
                  <div>
                    <div style={styles.infoLabel}>{label}</div>
                    <div style={styles.infoVal}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section ref={(el) => (sectionRefs.current["Skills"] = el)} style={{ ...styles.section, ...styles.sectionAlt }}>
        <SectionTitle title="Skills" />
        <div style={styles.skillsGrid}>
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category} style={styles.skillCard}>
              <h3 style={styles.skillCategory}>{category}</h3>
              <div style={styles.skillTags}>
                {items.map((s) => (
                  <span key={s} style={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={(el) => (sectionRefs.current["Projects"] = el)} style={styles.section}>
        <SectionTitle title="Projects" />
        <div style={styles.projectsGrid}>
          {portfolioData.projects.map((p) => (
            <div key={p.name} style={styles.projectCard} className="project-card">
              <div style={styles.projectHeader}>
                <span style={styles.projectIcon}>⚡</span>
                <h3 style={styles.projectName}>{p.name}</h3>
              </div>
              <p style={styles.projectDesc}>{p.description}</p>
              <div style={styles.projectTech}>
                {p.tech.map((t) => (
                  <span key={t} style={styles.techTag}>{t}</span>
                ))}
              </div>
              <div style={styles.projectLinks}>
                <a href={p.github} target="_blank" rel="noreferrer" style={styles.projLink}>GitHub ↗</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={{ ...styles.projLink, ...styles.projLinkLive }}>Live ↗</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section ref={(el) => (sectionRefs.current["Experience"] = el)} style={{ ...styles.section, ...styles.sectionAlt }}>
        <SectionTitle title="Experience" />
        <div style={styles.expGrid}>
          <div>
            <h3 style={styles.expGroupTitle}>Internships</h3>
            {portfolioData.internships.map((i) => (
              <div key={i.company + i.role} style={styles.expCard}>
                <div style={styles.expDot} />
                <div>
                  <div style={styles.expRole}>{i.role}</div>
                  <div style={styles.expCompany}>{i.company}</div>
                  <div style={styles.expMeta}>{i.duration} · {i.type}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 style={styles.expGroupTitle}>Certifications</h3>
            {portfolioData.certifications.map((c) => (
              <div key={c} style={styles.certCard}>
                <span style={styles.certIcon}>🏅</span>
                <span style={styles.certText}>{c}</span>
              </div>
            ))}
            <h3 style={{ ...styles.expGroupTitle, marginTop: 32 }}>Achievements</h3>
            {portfolioData.achievements.map((a) => (
              <div key={a} style={styles.certCard}>
                <span style={styles.certIcon}>🏆</span>
                <span style={styles.certText}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={(el) => (sectionRefs.current["Contact"] = el)} style={styles.section}>
        <SectionTitle title="Contact" />
        <div style={styles.contactBox}>
          <p style={styles.contactIntro}>I'm open to internships and entry-level frontend roles. Feel free to reach out!</p>
          <div style={styles.contactLinks}>
            <a href={`mailto:${portfolioData.email}`} style={styles.contactLink}>
              <span style={styles.contactIcon}>📧</span>
              <span>{portfolioData.email}</span>
            </a>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" style={styles.contactLink}>
              <span style={styles.contactIcon}>🐙</span>
              <span>github.com/nisha28-it</span>
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" style={styles.contactLink}>
              <span style={styles.contactIcon}>💼</span>
              <span>linkedin.com/in/sree-nisha-m-037b57376</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span>© 2026 Sreenisha M · Built with React</span>
      </footer>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div style={styles.sectionTitleWrap}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionLine} />
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const C = {
  bg: "#0a0a0f",
  bgAlt: "#0f0f1a",
  card: "#13131f",
  border: "#1e1e2e",
  accent: "#6ee7b7",
  accent2: "#818cf8",
  text: "#e2e8f0",
  muted: "#64748b",
  white: "#ffffff",
};

const styles = {
  root: { background: C.bg, color: C.text, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", overflowX: "hidden" },
  accent: { color: C.accent },

  // NAV
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", transition: "all 0.3s" },
  navScrolled: { background: "rgba(10,10,15,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}`, padding: "14px 40px" },
  navLogo: { fontSize: 28, fontWeight: 800, color: C.white, fontFamily: "'Playfair Display', serif", letterSpacing: -1 },
  navLinks: { display: "flex", gap: 8 },
  navBtn: { background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: 14, fontWeight: 500, padding: "8px 16px", borderRadius: 8, transition: "all 0.2s", fontFamily: "inherit" },
  navBtnActive: { color: C.accent, background: "rgba(110,231,183,0.08)" },
  hamburger: { display: "none", background: "none", border: "none", color: C.white, fontSize: 22, cursor: "pointer" },
  mobileMenu: { position: "fixed", top: 64, left: 0, right: 0, background: C.bgAlt, zIndex: 99, display: "flex", flexDirection: "column", padding: 16, borderBottom: `1px solid ${C.border}` },
  mobileMenuBtn: { background: "none", border: "none", color: C.text, fontSize: 16, padding: "12px 20px", textAlign: "left", cursor: "pointer", fontFamily: "inherit" },

  // HERO
  hero: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "120px 40px 80px", textAlign: "center" },
  heroBg: { position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(110,231,183,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(129,140,248,0.06) 0%, transparent 70%)", pointerEvents: "none" },
  heroContent: { position: "relative", maxWidth: 700 },
  heroTag: { display: "inline-block", background: "rgba(110,231,183,0.1)", border: `1px solid rgba(110,231,183,0.3)`, color: C.accent, borderRadius: 100, padding: "6px 16px", fontSize: 13, fontWeight: 500, marginBottom: 24 },
  heroName: { fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: C.white, margin: "0 0 8px", letterSpacing: -2, lineHeight: 1.05 },
  heroTitle: { fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 400, color: C.accent2, margin: "0 0 16px", letterSpacing: 2, textTransform: "uppercase", fontFamily: "inherit" },
  heroTagline: { fontSize: 17, color: C.muted, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7 },
  heroActions: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 },
  btnPrimary: { background: C.accent, color: "#0a0a0f", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", transition: "all 0.2s", fontFamily: "inherit" },
  btnOutline: { border: `1px solid ${C.accent2}`, color: C.accent2, padding: "12px 28px", borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: "none", transition: "all 0.2s", background: "transparent" },
  btnGhost: { border: `1px solid ${C.border}`, color: C.muted, padding: "12px 28px", borderRadius: 10, fontWeight: 500, fontSize: 15, background: "transparent", cursor: "pointer", fontFamily: "inherit" },
  statsRow: { display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" },
  statBox: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  statVal: { fontSize: 28, fontWeight: 800, color: C.white, fontFamily: "'Playfair Display', serif" },
  statLabel: { fontSize: 12, color: C.muted, textTransform: "uppercase", letterSpacing: 1 },
  scrollHint: { position: "absolute", bottom: 32, color: C.muted, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", animation: "bounce 2s infinite" },

  // SECTIONS
  section: { maxWidth: 1100, margin: "0 auto", padding: "80px 40px" },
  sectionAlt: { background: "transparent" },
  sectionTitleWrap: { marginBottom: 48 },
  sectionTitle: { fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: C.white, margin: "0 0 12px", letterSpacing: -1 },
  sectionLine: { width: 48, height: 3, background: `linear-gradient(90deg, ${C.accent}, ${C.accent2})`, borderRadius: 2 },

  // ABOUT
  aboutGrid: { display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, alignItems: "start" },
  aboutAvatar: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10 },
  avatarPlaceholder: { width: 180, height: 180, borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 800, color: "#0a0a0f", fontFamily: "'Playfair Display', serif", border: `3px solid ${C.border}` },
  avatarCaption: { fontSize: 11, color: C.muted, fontStyle: "italic", textAlign: "center" },
  aboutText: {},
  aboutPara: { fontSize: 16, lineHeight: 1.8, color: C.muted, marginBottom: 32 },
  infoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  infoItem: { display: "flex", gap: 12, alignItems: "flex-start" },
  infoIcon: { fontSize: 20, marginTop: 2 },
  infoLabel: { fontSize: 11, color: C.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 },
  infoVal: { fontSize: 14, color: C.text, fontWeight: 500 },

  // SKILLS
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 },
  skillCard: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 },
  skillCategory: { fontSize: 13, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14, margin: "0 0 14px" },
  skillTags: { display: "flex", flexWrap: "wrap", gap: 8 },
  skillTag: { background: "rgba(110,231,183,0.06)", border: `1px solid rgba(110,231,183,0.15)`, color: C.text, borderRadius: 6, padding: "5px 12px", fontSize: 13, fontWeight: 500 },

  // PROJECTS
  projectsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 },
  projectCard: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 14, transition: "all 0.3s", cursor: "default" },
  projectHeader: { display: "flex", alignItems: "flex-start", gap: 12 },
  projectIcon: { fontSize: 22, marginTop: 2 },
  projectName: { fontSize: 17, fontWeight: 700, color: C.white, margin: 0, lineHeight: 1.3 },
  projectDesc: { fontSize: 14, color: C.muted, lineHeight: 1.7, margin: 0, flex: 1 },
  projectTech: { display: "flex", flexWrap: "wrap", gap: 6 },
  techTag: { background: "rgba(129,140,248,0.08)", border: `1px solid rgba(129,140,248,0.2)`, color: C.accent2, borderRadius: 4, padding: "3px 10px", fontSize: 12, fontWeight: 500 },
  projectLinks: { display: "flex", gap: 12, marginTop: 4 },
  projLink: { color: C.accent, fontSize: 13, fontWeight: 600, textDecoration: "none" },
  projLinkLive: { color: C.accent2 },

  // EXPERIENCE
  expGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 },
  expGroupTitle: { fontSize: 16, fontWeight: 700, color: C.white, marginBottom: 20, textTransform: "uppercase", letterSpacing: 1.5, borderBottom: `1px solid ${C.border}`, paddingBottom: 10 },
  expCard: { display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 },
  expDot: { width: 10, height: 10, borderRadius: "50%", background: C.accent, flexShrink: 0, marginTop: 6 },
  expRole: { fontSize: 15, fontWeight: 700, color: C.white },
  expCompany: { fontSize: 14, color: C.accent2, fontWeight: 500 },
  expMeta: { fontSize: 12, color: C.muted, marginTop: 2 },
  certCard: { display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14, background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 16px" },
  certIcon: { fontSize: 18, flexShrink: 0 },
  certText: { fontSize: 13, color: C.muted, lineHeight: 1.5 },

  // CONTACT
  contactBox: { maxWidth: 600, margin: "0 auto", textAlign: "center" },
  contactIntro: { fontSize: 17, color: C.muted, lineHeight: 1.7, marginBottom: 36 },
  contactLinks: { display: "flex", flexDirection: "column", gap: 16 },
  contactLink: { display: "flex", alignItems: "center", gap: 14, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "16px 24px", textDecoration: "none", color: C.text, fontSize: 15, transition: "all 0.2s" },
  contactIcon: { fontSize: 22, flexShrink: 0 },

  // FOOTER
  footer: { textAlign: "center", padding: "32px 20px", color: C.muted, fontSize: 13, borderTop: `1px solid ${C.border}` },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #0a0a0f; }

  .fade-in { animation: fadeInUp 0.8s ease both; }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  .project-card:hover {
    border-color: rgba(110,231,183,0.3) !important;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  a:hover { opacity: 0.8; }

  @media (max-width: 768px) {
    nav { padding: 16px 20px !important; }
    .nav-links { display: none; }
    button[style*="hamburger"] { display: block !important; }
  }
`;

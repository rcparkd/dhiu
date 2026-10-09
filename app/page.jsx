"use client";

import { useState } from "react";
import {
  Menu, X, ArrowRight, BookOpen, GraduationCap, LibraryBig, FileText,
  Images, MapPin, Search, ChevronRight, Landmark, Globe2, Users, Microscope,
  CalendarDays, ExternalLink, Mail, Phone, Facebook, Youtube, Instagram
} from "lucide-react";

const navItems = [
  ["Home", "#home"], ["About", "#about"], ["Academics", "#institutions"],
  ["Admissions", "#admissions"], ["Research", "#research"], ["Students", "#students"], ["Contact", "#contact"]
];

const quickLinks = [
  { icon: LibraryBig, label: "Online Library", href: "https://dhiu.in/" },
  { icon: FileText, label: "Research Publications", href: "#research" },
  { icon: Images, label: "Gallery", href: "#students" },
  { icon: Globe2, label: "Locate Us", href: "#contact" },
  { icon: GraduationCap, label: "Academic Portal", href: "https://dhiu.in/" },
  { icon: BookOpen, label: "Downloads", href: "https://dhiu.in/" },
];

const news = [
  { day: "19", month: "JUL", title: "Darul Huda Islamic University Partners with IIUM for 7th International Conference on Islamic Jurisprudence", date: "19 July 2026" },
  { day: "11", month: "JUN", title: "Sidna’26: Inseed Roots School — A Colorful Admission Festival", date: "11 June 2026" },
  { day: "07", month: "JUN", title: "The influence of Mamburam on the nation's history should be studied", date: "7 June 2026" },
];

const institutions = [
  { no: "01", name: "Darul Huda Secondary Institution", location: "Chemmad, Malappuram", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80", description: "A foundation of integrated learning, character formation and academic curiosity." },
  { no: "02", name: "Darul Huda Degree Institution", location: "Chemmad, Kerala", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80", description: "Bringing traditional Islamic scholarship into conversation with contemporary disciplines." },
  { no: "03", name: "National Institute for Islamic & Contemporary Studies", location: "Chemmad, Malappuram", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80", description: "A space for advanced learning, research and engagement with today's world." },
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Darul Huda Islamic University home">
      <div className="brand-mark">DHIU</div>
      <div>
        <div className="brand-name">Darul Huda</div>
        <div className="brand-sub">ISLAMIC UNIVERSITY</div>
      </div>
    </a>
  );
}

function SectionHeading({ kicker, title, text, action }) {
  return (
    <div className="section-heading heading-row">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action && <a className="text-link" href={action.href}>{action.label} <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }} /></a>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const announcements = [
    "DARUL HUDA ADMISSION TEST 2026 — Result Published",
    "DTSE June 2026 Marks Published",
    "Explore programmes, academic resources and campus life at Darul Huda"
  ];

  return (
    <main>
      <div className="topline">
        <div className="container topline-inner">
          <div>Hidaya Nagar, Chemmad, Kerala, India <span style={{ opacity: .5, margin: "0 9px" }}>|</span> <a href="mailto:info@dhiu.in">info@dhiu.in</a></div>
          <div className="utility-links"><a href="#contact">Contact</a><a href="#admissions">Admissions</a><a href="#contact">Donate</a><a href="https://dhiu.in/">EN</a></div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className="nav" aria-label="Main navigation">
            {navItems.map(([label, href], i) => <a key={label} className={i === 0 ? "active" : ""} href={href}>{label}</a>)}
          </nav>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow">Ta’leem · Tarbiyah · Da’wa</div>
            <h1>Tradition that guides.<br /><em>Knowledge that transforms.</em></h1>
            <p>Welcome to Darul Huda Islamic University — nurturing scholarship rooted in Islamic tradition, alive to contemporary thought, and committed to serving humanity.</p>
            <div className="actions">
              <a className="btn btn-gold" href="#about">Discover Darul Huda <ArrowRight size={15} /></a>
              <a className="btn btn-outline" href="#admissions">Explore Admissions <ChevronRight size={15} /></a>
            </div>
            <div className="hero-dots" aria-label="Hero slide indicator"><span /><span /><span /></div>
          </div>
        </div>
      </section>

      <section className="announcement" aria-label="Announcements">
        <div className="container announcement-inner">
          <span className="announcement-label">ANNOUNCEMENT</span>
          <div className="announcement-text"><strong>Latest update</strong>{announcements[announcementIndex]}</div>
          <button className="announcement-link" onClick={() => setAnnouncementIndex((announcementIndex + 1) % announcements.length)} aria-label="Next announcement">Next <ArrowRight size={13} style={{ display: "inline", verticalAlign: "middle" }} /></button>
        </div>
      </section>

      <section className="quick-links">
        <div className="container quick-grid">
          {quickLinks.map(({ icon: Icon, label, href }) => <a className="quick-card" href={href} key={label}><Icon size={23} strokeWidth={1.5} /><span>{label}</span></a>)}
        </div>
      </section>

      <section className="section section-soft" id="news">
        <div className="container">
          <SectionHeading kicker="What's happening" title="News & Events" text="The latest stories, milestones and conversations from across the Darul Huda community." action={{ href: "https://dhiu.in/", label: "View all news" }} />
          <div className="news-layout">
            <article className="feature-news">
              <div className="news-photo" role="img" aria-label="University students at an academic gathering" />
              <div className="news-body">
                <div className="date-tag">International collaboration · 19 July 2026</div>
                <h3>Darul Huda partners with IIUM for international conference on Islamic jurisprudence</h3>
                <p>Bringing scholars together to engage contemporary questions in Islamic jurisprudence through dialogue, research and shared learning.</p>
                <a className="text-link" href="https://dhiu.in/">Read the story <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }} /></a>
              </div>
            </article>
            <div className="news-list">
              {news.map((item) => <article className="news-item" key={item.title}>
                <div className="news-date"><strong>{item.day}</strong><span>{item.month}</span></div>
                <div><h4>{item.title}</h4><p><CalendarDays size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />{item.date}</p></div>
              </article>)}
              <a className="text-link" href="https://dhiu.in/" style={{ marginTop: 18 }}>More news & events <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-visual" role="img" aria-label="University campus building">
            <div className="about-badge"><strong>1986</strong><span>Our journey began</span></div>
          </div>
          <div className="about-copy">
            <div className="kicker">Welcome to Darul Huda</div>
            <h2 style={{ font: "500 clamp(32px, 3.5vw, 45px)/1.15 Georgia,serif", color: "var(--green-dark)", margin: "13px 0 18px" }}>A living tradition.<br />A future of possibility.</h2>
            <p>Founded in 1986 at Chemmad, Kerala, Darul Huda began with a vision to nurture a generation of Muslim scholars equipped to engage the modern world while remaining deeply grounded in Islamic learning.</p>
            <p>Our educational philosophy brings together the unity of knowledge, intellectual openness, spiritual formation and service to society.</p>
            <div className="pillars">
              <div className="pillar"><strong>Ta’leem</strong><span>Learning & scholarship</span></div>
              <div className="pillar"><strong>Tarbiyah</strong><span>Character & growth</span></div>
              <div className="pillar"><strong>Da’wa</strong><span>Service & outreach</span></div>
            </div>
            <a className="btn btn-gold" href="#mission">Our mission & vision <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>4</strong><span>Campuses</span></div>
          <div className="stat"><strong>30</strong><span>Colleges</span></div>
          <div className="stat"><strong>3,000+</strong><span>Alumni</span></div>
          <div className="stat"><strong>10,000+</strong><span>Students</span></div>
        </div>
      </section>

      <section className="section section-soft" id="institutions">
        <div className="container">
          <SectionHeading kicker="A community of learning" title="Our Institutions" text="A connected network of institutions bringing integrated education to learners across communities." action={{ href: "https://dhiu.in/", label: "Explore institutions" }} />
          <div className="cards">
            {institutions.map((item) => <article className="institution" key={item.no}>
              <div className="institution-img" style={{ backgroundImage: `url("${item.image}")` }} />
              <div className="institution-content"><span className="number">INSTITUTION {item.no}</span><h3>{item.name}</h3><p><MapPin size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />{item.location}</p><p>{item.description}</p><a href="https://dhiu.in/">Discover more <ArrowRight size={13} /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section" id="mission">
        <div className="container">
          <SectionHeading kicker="Purpose & direction" title="Our Mission & Vision" text="Education that prepares scholars to serve with knowledge, integrity and a sense of responsibility." />
          <div className="cards">
            <article className="institution"><div className="institution-content" style={{ padding: 30 }}><Landmark size={28} color="#0b6748" /><h3>Our Mission</h3><p>To develop an Islamic educational framework that prepares religious scholars who acquire, practise and propagate Islam, and who are ready to meet the responsibilities they hold towards God, themselves, society and the world around them.</p></div></article>
            <article className="institution"><div className="institution-content" style={{ padding: 30 }}><Globe2 size={28} color="#0b6748" /><h3>Our Vision</h3><p>To be a centre of excellence in Islamic education, renewing the intellectual contribution and scholarly spirit of Muslim civilisation in a changing world shaped by modern knowledge.</p></div></article>
            <article className="institution"><div className="institution-content" style={{ padding: 30 }}><Microscope size={28} color="#0b6748" /><h3>Our Philosophy</h3><p>Inspired by Islam's principles of the unity and hierarchy of knowledge, our educational philosophy places learning in the service of faith, thoughtful inquiry and human flourishing.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="students">
        <div className="container">
          <SectionHeading kicker="Beyond the classroom" title="Life at Darul Huda" text="A community of learners from different regions and languages, growing together through study, culture, spirituality and service." action={{ href: "https://dhiu.in/students.html", label: "Student life" }} />
          <div className="cards">
            <article className="institution"><div className="institution-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80')" }} /><div className="institution-content"><h3>Learning together</h3><p>Debates, talks, discussions and collaborative research create space for intellectual curiosity and shared growth.</p></div></article>
            <article className="institution"><div className="institution-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80')" }} /><div className="institution-content"><h3>Student activities</h3><p>Arts, leadership and student initiatives help learners explore their interests and develop confidence.</p></div></article>
            <article className="institution"><div className="institution-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80')" }} /><div className="institution-content"><h3>Character & service</h3><p>Daily practice, mutual support and community engagement connect learning with lived values.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section" id="research">
        <div className="container vc-section">
          <div className="vc-photo" role="img" aria-label="Academic leader portrait placeholder" />
          <div className="vc-copy">
            <div className="quote-mark">“</div>
            <blockquote>We seek to connect the richness of our scholarly tradition with the questions and possibilities of the modern age.</blockquote>
            <strong>Prof. Dr. Bahauddeen Muhammed Nadwi</strong>
            <small>Vice Chancellor, Darul Huda Islamic University</small>
            <a className="text-link" href="https://dhiu.in/" style={{ display: "inline-block", marginTop: 22 }}>Read the Vice Chancellor's message <ArrowRight size={14} style={{ display: "inline", verticalAlign: "middle" }} /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="admissions">
        <div className="container callout">
          <div><div className="kicker" style={{ color: "#e5c17c" }}>Your journey starts here</div><h2>Be part of the Darul Huda story.</h2><p>Explore learning pathways across our institutions, discover your interests and take the next step in your educational journey.</p></div>
          <a className="btn btn-gold" href="https://dhiu.in/">Admissions & programmes <ArrowRight size={15} /></a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-about"><Brand /><p>Darul Huda Islamic University brings Islamic scholarship and contemporary learning into a shared educational vision, rooted in Ta’leem, Tarbiyah and Da’wa.</p><div style={{ display: "flex", gap: 15, marginTop: 20 }}><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={17} /></a><a href="https://www.youtube.com/" aria-label="YouTube"><Youtube size={17} /></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></a></div></div>
          <div className="footer-col"><h4>Explore</h4><a href="#about">About DHIU</a><a href="#institutions">Our institutions</a><a href="#research">Research & publications</a><a href="#students">Campus life</a><a href="#news">News & events</a></div>
          <div className="footer-col"><h4>Useful links</h4><a href="https://dhiu.in/">Academic portal</a><a href="https://dhiu.in/">Students portal</a><a href="https://dhiu.in/">Online certificate portal</a><a href="https://dhiu.in/">OPAC / Library</a><a href="https://dhiu.in/">Downloads</a></div>
          <div className="footer-col"><h4>Contact us</h4><p><MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 7 }} />Hidaya Nagar, Chemmad,<br />Tirurangadi PO, Malappuram Dist,<br />Kerala, India — 676306</p><p><Phone size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 7 }} />0494-2463155</p><p><Mail size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 7 }} />info@dhiu.in</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Darul Huda Islamic University. Website recreation for educational/demo purposes.</span><span>Ta’leem · Tarbiyah · Da’wa</span></div>
      </footer>
    </main>
  );
}

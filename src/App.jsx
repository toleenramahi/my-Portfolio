import React, {
  useEffect,
  useRef,
  useState
} from "react";
import { Github, Mail, MapPin, GraduationCap, Award, ArrowUpRight, Menu, X } from "lucide-react";

const projects = [
  {
    title: "MINDRO",
    year: "2026 — Present",
    tag: "ML Research",
    stack: ["PyTorch", "HuggingFace", "PEFT / LoRA", "Latent Diffusion", "Reinforcement Learning"],
    desc: "An RL-driven architecture that builds individualized digital brain twins for PTSD patients. Full solution spans data ingestion, LSDT modeling, an RL training loop, and a clinical output layer.",
    featured: true,
  },
  {
    title: "House Price Prediction Model",
    year: "2025",
    tag: "Machine Learning",
    stack: ["Python", "Pandas", "Scikit-learn"],
    desc: "Predicts house prices from structured housing data, covering the full pipeline: cleaning the data and handling missing values, engineering features from raw attributes, and training a regression model — then evaluating performance against a held-out test set to judge how well it generalizes.",
    featured: true,
    visual: "regression",
  },
  {
    title: "Data Mining: Rules, Classification & Clustering",
    year: "Academic Project",
    tag: "Data Mining",
    stack: ["Python", "Pandas", "Scikit-learn", "Mlxtend"],
    desc: "A three-part study applying core data mining techniques across three datasets: Apriori-based market basket analysis on the Groceries dataset, Decision Tree and Naive Bayes classifiers predicting Titanic survival, and K-Means clustering on the Penguins dataset — comparing performance across all three approaches.",
    detail: "With Abdallah El-Hakawati · Supervised by Bashar Al-Shoha",
    featured: true,
    visual: "techniques",
  },
  {
    title: "Adult Census Income Analysis",
    year: "2025",
    tag: "Data Analysis",
    stack: ["R", "Data Visualization"],
    desc: "Explored census income data to surface patterns across demographic and work-related features.",
  },
  {
    title: "Automated Job Application Processing",
    year: "2025",
    tag: "Automation",
    stack: ["n8n"],
    desc: "A workflow that automates job-application handling end to end, cutting down repetitive manual steps.",
  },
  {
    title: "Task Management App",
    year: "2024",
    tag: "Mobile",
    stack: ["Flutter"],
    desc: "A mobile app for organizing tasks and tracking productivity, built with a focus on clean everyday use.",
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "R", "SQL"] },
  { label: "ML / AI", items: ["Machine Learning", "AI Fundamentals", "Data Analysis", "Data Visualization"] },
  { label: "Development", items: ["React", "Flask", "Flutter", "n8n Automation"] },
];

const certificates = [
  { name: "Computer Vision Workshop", org: "Qafza Tech" },
  { name: "Machine Learning Workshop", org: "Qafza Tech" },
  { name: "Machine Learning Engineer", org: "DataCamp" },
  { name: "Azure AI Fundamentals", org: "Microsoft" },
];

function RoyalDivider({ className = "" }) {
  return (
    <div className={`pf-royal-divider ${className}`}>
      <span className="pf-royal-diamond" />
    </div>
  );
}

const regressionDots = [
  [15, 82], [38, 74], [55, 80], [72, 62], [92, 68],
  [110, 52], [130, 58], [150, 42], [170, 47], [188, 32],
  [208, 37], [226, 22], [246, 28], [265, 15], [282, 20],
];

function RegressionVisual() {
  return (
    <svg className="pf-regression-svg" viewBox="0 0 300 95" preserveAspectRatio="none">
      <line x1="0" y1="90" x2="300" y2="90" className="pf-reg-axis" />
      <path
        d="M8,88 C 80,80 120,55 300,10"
        className="pf-reg-line"
        fill="none"
      />
      {regressionDots.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3.4"
          className="pf-reg-dot"
          style={{ animationDelay: `${0.5 + i * 0.05}s` }}
        />
      ))}
    </svg>
  );
}
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("pf-show");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="pf-reveal"
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((mouseY - centerY) / centerY) * -7;
    const rotateY = ((mouseX - centerX) / centerX) * 7;

    card.style.setProperty("--card-x", `${mouseX}px`);
    card.style.setProperty("--card-y", `${mouseY}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <div
      ref={cardRef}
      className={`pf-tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pf-card-spotlight" aria-hidden="true" />
      <div className="pf-card-content">
        {children}
      </div>
    </div>
  );
}
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const handlePointerMove = (event) => {
      const rect = root.getBoundingClientRect();

      root.style.setProperty(
        "--mouse-x",
        `${event.clientX - rect.left}px`
      );

      root.style.setProperty(
        "--mouse-y",
        `${event.clientY - rect.top}px`
      );
    };

    const updateScrollProgress = () => {
      const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        pageHeight > 0
          ? (window.scrollY / pageHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    root.addEventListener("pointermove", handlePointerMove);

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      { passive: true }
    );

    updateScrollProgress();

    return () => {
      root.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );
    };
  }, []);
 const mouseRef = useRef(null);

useEffect(() => {
  const move = (e) => {
    if (mouseRef.current) {
      mouseRef.current.style.left = `${e.clientX}px`;
      mouseRef.current.style.top = `${e.clientY}px`;
    }
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);
}, []);

  const nav = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "background", label: "Background" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<div className="pf-root" ref={rootRef}>
  <div
    className="pf-scroll-progress"
    style={{
      width: `${scrollProgress}%`,
    }}
    aria-hidden="true"
  />

  <div className="pf-aurora" aria-hidden="true">
    <span className="pf-aurora-one" />
    <span className="pf-aurora-two" />
    <span className="pf-aurora-three" />
  </div>

  <div
    className="pf-global-spotlight"
    aria-hidden="true"
  />
<div className="pf-aurora"></div>

<div
  className="pf-mouse"
  ref={mouseRef}
></div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-root {
        background:
radial-gradient(circle at top left,#143d73 0%,transparent 40%),
radial-gradient(circle at bottom right,#c9a22722 0%,transparent 35%),
#ffffff;

position:relative;
overflow:hidden;
          --bg: #FFFFFF;
          --surface: #F6F8FC;
          --surface-hover: #EEF1FA;
          --line: #DEE4F0;
          --text: #0B2545;
          --muted: #5C6B85;
          --accent: #C9A227;
          --accent-soft: #E4C563;
          --signal: #0B2545;
          --navy-deep: #081B33;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        .pf-root * { box-sizing: border-box; }
        .pf-display { font-family: 'Fraunces', serif; }
        .pf-mono { font-family: 'JetBrains Mono', monospace; }

        .pf-root ::selection { background: var(--accent); color: #FFFFFF; }

        .pf-royal-divider {
          position: relative;
          height: 2px;
          width: 100%;
          max-width: 280px;
          overflow: visible;
          background: linear-gradient(90deg, transparent, var(--navy-deep) 15%, var(--accent) 50%, var(--navy-deep) 85%, transparent);
        }
        .pf-royal-divider::after {
          content: '';
          position: absolute; top: -6px; left: -20%; width: 35%; height: 14px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent);
          filter: blur(2px);
          animation: sweep 3.2s ease-in-out infinite;
        }
        @keyframes sweep {
          0% { left: -25%; }
          60% { left: 110%; }
          100% { left: 110%; }
        }
        .pf-royal-diamond {
          position: absolute; top: 50%; left: 50%;
          width: 8px; height: 8px;
          background: var(--accent);
          transform: translate(-50%, -50%) rotate(45deg);
          box-shadow: 0 0 10px rgba(201, 162, 39, 0.55);
        }
          /* ===========================
SCROLL REVEAL
=========================== */

.pf-reveal{

opacity:0;

transform:
translateY(80px)
scale(.96);

transition:

opacity .8s cubic-bezier(.16,1,.3,1),

transform .8s cubic-bezier(.16,1,.3,1);

will-change:
opacity,
transform;

}

.pf-show{

opacity:1;

transform:

translateY(0)

scale(1);

}
        @media (prefers-reduced-motion: reduce) {
          .pf-royal-divider::after { animation: none; opacity: 0; }
        }

        .pf-nav {
          position: sticky; top: 0; z-index: 40;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .pf-navlink {
          color: var(--muted);
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          transition: color 0.2s ease;
          background: none; border: none; cursor: pointer;
        }
        .pf-navlink:hover { color: var(--text); }

        .pf-hero { position: relative; padding-top: 5rem; padding-bottom: 4rem; }
        .pf-hero-inner { position: relative; z-index: 1; }

        .pf-fade-in {
          opacity: 0;
          animation: fade-up 0.7s ease-out forwards;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-fade-in { animation: none; opacity: 1; }
        }

        .pf-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          color: var(--signal);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .pf-eyebrow::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--signal);
          box-shadow: 0 0 8px var(--signal);
        }

        .pf-name {
          font-size: clamp(2.75rem, 8vw, 5.5rem);
          line-height: 0.98;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .pf-tagline { color: var(--muted); font-size: 1.05rem; max-width: 42ch; }

        .pf-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.7rem 1.3rem;
          border-radius: 3px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--line);
        }
        .pf-btn-primary {
          background: var(--accent);
          color: #17130a;
          border-color: var(--accent);
        }
        .pf-btn-primary:hover { background: var(--accent-soft); border-color: var(--accent-soft); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(201, 162, 39, 0.3); }
        .pf-btn-ghost { color: var(--text); }
        .pf-btn-ghost:hover { border-color: var(--signal); color: var(--signal); transform: translateY(-2px); }
        .pf-btn:active { transform: translateY(0); }

        .pf-section { padding: 4.5rem 0; border-top: 1px solid var(--line); }
        .pf-label {
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .pf-h2 {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 500;
          margin-top: 0.5rem;
        }

        .pf-chip {
          display: inline-block;
          padding: 0.35rem 0.8rem;
          border: 1px solid var(--line);
          border-radius: 999px;
          font-size: 0.8rem;
          color: var(--text);
          background: var(--surface);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .pf-chip:hover { border-color: var(--accent); background: var(--surface-hover); transform: translateY(-1px); }

        .pf-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 1.75rem;
          transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .pf-card:hover {
          border-color: var(--signal);
          background: var(--surface-hover);
          box-shadow: 0 10px 28px rgba(11, 37, 69, 0.14);
        }
        .pf-card:active { filter: brightness(0.98); }
        .pf-card.featured {
          position: relative;
          border-color: transparent;
          background: linear-gradient(var(--surface), var(--surface)) padding-box,
                      conic-gradient(from var(--shimmer-angle, 0deg), var(--accent), var(--line) 25%, var(--accent) 50%, var(--line) 75%, var(--accent)) border-box;
          border: 1.5px solid transparent;
          animation: shimmer-rotate 6s linear infinite;
        }
        @property --shimmer-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes shimmer-rotate {
          from { --shimmer-angle: 0deg; }
          to { --shimmer-angle: 360deg; }
        }
        .pf-featured-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--navy-deep);
          background: linear-gradient(100deg, var(--accent-soft), var(--accent));
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-card.featured { animation: none; }
        }

        .pf-technique-bars { display: flex; flex-direction: column; gap: 0.65rem; }
        .pf-technique-row { display: flex; align-items: center; gap: 0.9rem; }
        .pf-technique-label {
          width: 130px; flex-shrink: 0;
          font-size: 0.7rem; color: var(--muted);
        }
        .pf-technique-track {
          flex: 1; height: 6px; border-radius: 999px;
          background: rgba(11, 37, 69, 0.08);
          overflow: hidden;
        }
        .pf-technique-fill {
          height: 100%; width: 0%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--navy-deep), var(--accent));
          animation: fill-bar 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fill-bar {
          from { width: 0%; }
          to { width: var(--target-w); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-technique-fill { animation: none; width: var(--target-w); }
        }

        .pf-regression-svg { width: 100%; height: 95px; overflow: visible; }
        .pf-reg-axis { stroke: var(--line); stroke-width: 1; }
        .pf-reg-line {
          stroke: var(--accent);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 340;
          stroke-dashoffset: 340;
          animation: draw-reg-line 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
        }
        .pf-reg-dot {
          fill: var(--navy-deep);
          stroke: var(--bg);
          stroke-width: 1.5;
          opacity: 0;
          transform-origin: center;
          transform-box: fill-box;
          animation: dot-pop 0.5s ease forwards;
        }
        @keyframes draw-reg-line {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dot-pop {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-reg-line { animation: none; stroke-dashoffset: 0; }
          .pf-reg-dot { animation: none; opacity: 1; transform: scale(1); }
        }

        .pf-stack-tag {
          font-size: 0.72rem;
          color: var(--navy-deep);
          border: 1px solid rgba(11, 37, 69, 0.18);
          background: rgba(11, 37, 69, 0.04);
          border-radius: 3px;
          padding: 0.15rem 0.5rem;
        }

        .pf-tag-pill {
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .pf-footer-line { border-top: 1px solid var(--line); }

        .pf-link-icon {
          color: var(--muted);
          transition: color 0.2s ease;
        }
        .pf-link-icon:hover { color: var(--signal); }
        /* Aurora */

.pf-aurora{
position:fixed;
inset:-30%;
pointer-events:none;
z-index:0;
filter:blur(90px);
opacity:.55;
animation:auroraMove 20s linear infinite;
}

.pf-aurora::before,
.pf-aurora::after{
content:"";
position:absolute;
width:500px;
height:500px;
border-radius:50%;
}

.pf-aurora::before{
background:#0b254455;
top:5%;
left:15%;
}

.pf-aurora::after{
background:#c9a22755;
right:10%;
bottom:5%;
}

@keyframes auroraMove{

0%{
transform:translate(0,0) rotate(0deg);
}

50%{
transform:translate(100px,-50px) rotate(180deg);
}

100%{
transform:translate(0,0) rotate(360deg);
}

}


/* Mouse Glow */

.pf-mouse{
position:fixed;
width:320px;
height:320px;
border-radius:50%;
pointer-events:none;
background:radial-gradient(circle,
rgba(201,162,39,.22),
transparent 70%);
filter:blur(35px);
transform:translate(-50%,-50%);
z-index:0;
transition:left .08s linear,
top .08s linear;
}
.pf-whatsapp-btn {
  background: #25d366;
  color: #ffffff;
  border-color: #25d366;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.22);
}

.pf-whatsapp-btn:hover {
  background: #1ebe5d;
  border-color: #1ebe5d;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
}
  .pf-linkedin-btn {
  background: #0a66c2;
  color: white;
  border-color: #0a66c2;
}

.pf-linkedin-btn:hover {
  background: #004182;
  border-color: #004182;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(10, 102, 194, 0.35);
}
  /* ================================
   PREMIUM ANIMATED BACKGROUND
================================ */

.pf-root {
  isolation: isolate;
}

.pf-root > nav,
.pf-root > header,
.pf-root > section,
.pf-root > footer {
  position: relative;
  z-index: 3;
}

/* Scroll progress line */

.pf-scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 4px;
  width: 0;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    var(--navy-deep),
    var(--accent),
    var(--accent-soft)
  );
  box-shadow:
    0 0 12px rgba(201, 162, 39, 0.75),
    0 0 24px rgba(201, 162, 39, 0.4);
  transition: width 0.08s linear;
}

/* Global mouse spotlight */

.pf-global-spotlight {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  pointer-events: none;

  transform: translate(
    calc(var(--mouse-x, 50vw) - 50%),
    calc(var(--mouse-y, 50vh) - 50%)
  );

  background: radial-gradient(
    circle,
    rgba(201, 162, 39, 0.16) 0%,
    rgba(11, 37, 69, 0.09) 32%,
    transparent 70%
  );

  filter: blur(10px);
  mix-blend-mode: multiply;
  transition: transform 0.08s linear;
}

/* Aurora container */

.pf-aurora {
  position: fixed;
  z-index: 0;
  inset: -20%;
  overflow: hidden;
  pointer-events: none;
  filter: blur(95px);
  opacity: 0.28;
}

/* Aurora blobs */

.pf-aurora span {
  position: absolute;
  display: block;
  border-radius: 45% 55% 65% 35% / 45% 35% 65% 55%;
  will-change: transform, border-radius;
}

.pf-aurora-one {
  width: 650px;
  height: 650px;
  top: -10%;
  left: -5%;

  background: radial-gradient(
    circle,
    rgba(11, 37, 69, 0.4),
    rgba(11, 37, 69, 0)
  );

  animation:
    pf-aurora-one-move 17s ease-in-out infinite alternate,
    pf-blob-morph 9s ease-in-out infinite alternate;
}

.pf-aurora-two {
  width: 620px;
  height: 620px;
  top: 12%;
  right: -8%;

  background: radial-gradient(
    circle,
    rgba(201, 162, 39, 0.34),
    rgba(201, 162, 39, 0)
  );

  animation:
    pf-aurora-two-move 21s ease-in-out infinite alternate,
    pf-blob-morph 11s ease-in-out infinite alternate-reverse;
}

.pf-aurora-three {
  width: 560px;
  height: 560px;
  bottom: -15%;
  left: 30%;

  background: radial-gradient(
    circle,
    rgba(78, 120, 175, 0.3),
    rgba(78, 120, 175, 0)
  );

  animation:
    pf-aurora-three-move 19s ease-in-out infinite alternate,
    pf-blob-morph 13s ease-in-out infinite alternate;
}

/* Aurora movements */

@keyframes pf-aurora-one-move {
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg)
      scale(1);
  }

  50% {
    transform:
      translate3d(170px, 110px, 0)
      rotate(80deg)
      scale(1.12);
  }

  100% {
    transform:
      translate3d(70px, 240px, 0)
      rotate(160deg)
      scale(0.92);
  }
}

@keyframes pf-aurora-two-move {
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg)
      scale(1);
  }

  50% {
    transform:
      translate3d(-160px, 130px, 0)
      rotate(-90deg)
      scale(0.9);
  }

  100% {
    transform:
      translate3d(-80px, 280px, 0)
      rotate(-170deg)
      scale(1.15);
  }
}

@keyframes pf-aurora-three-move {
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg)
      scale(1);
  }

  50% {
    transform:
      translate3d(-150px, -160px, 0)
      rotate(100deg)
      scale(1.18);
  }

  100% {
    transform:
      translate3d(200px, -90px, 0)
      rotate(210deg)
      scale(0.9);
  }
}

@keyframes pf-blob-morph {
  0% {
    border-radius:
      45% 55% 65% 35% /
      45% 35% 65% 55%;
  }

  50% {
    border-radius:
      65% 35% 40% 60% /
      35% 60% 40% 65%;
  }

  100% {
    border-radius:
      35% 65% 55% 45% /
      60% 40% 55% 45%;
  }
}

/* Glass effect on navbar */

.pf-nav {
  background: rgba(255, 255, 255, 0.67);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
}

/* Make sections slightly transparent */

.pf-section {
  background: rgba(255, 255, 255, 0.25);
}

/* Accessibility */

@media (prefers-reduced-motion: reduce) {
  .pf-aurora span {
    animation: none;
  }

  .pf-global-spotlight {
    display: none;
  }

  .pf-scroll-progress {
    transition: none;
  }
}
  /* ================================
   PREMIUM 3D PROJECT CARDS
================================ */

.pf-tilt-card {
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --card-x: 50%;
  --card-y: 50%;

  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;

  transform:
    perspective(1100px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y))
    translateY(0);

  transition:
    transform 0.18s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  will-change: transform;
}

.pf-tilt-card:hover {
  transform:
    perspective(1100px)
    rotateX(var(--rotate-x))
    rotateY(var(--rotate-y))
    translateY(-8px);

  box-shadow:
    0 28px 60px rgba(11, 37, 69, 0.2),
    0 8px 20px rgba(201, 162, 39, 0.14);
}

/* Moving light inside the card */

.pf-card-spotlight {
  position: absolute;
  z-index: 0;
  inset: 0;
  opacity: 0;
  pointer-events: none;

  background: radial-gradient(
  circle,
  rgba(201, 162, 39, 0.08) 0%,
  rgba(11, 37, 69, 0.035) 32%,
  transparent 70%
);

  transition: opacity 0.25s ease;
}

.pf-tilt-card:hover .pf-card-spotlight {
  opacity: 1;
}

/* Keep card information above spotlight */

.pf-card-content {
  position: relative;
  z-index: 2;
  transform: translateZ(35px);
}

/* Animated reflection passing over the card */

.pf-tilt-card::after {
  content: "";
  position: absolute;
  z-index: 1;

  top: -130%;
  left: -55%;

  width: 42%;
  height: 330%;

  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );

  transform: rotate(24deg);
  transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.pf-tilt-card:hover::after {
  left: 130%;
}

/* Raise some card elements in 3D */

.pf-tilt-card h3,
.pf-tilt-card .pf-featured-badge {
  transform: translateZ(45px);
}

.pf-tilt-card .pf-stack-tag {
  transform: translateZ(24px);
}

/* Stronger featured glow */

.pf-tilt-card.featured:hover {
  box-shadow:
    0 32px 75px rgba(11, 37, 69, 0.2),
    0 0 35px rgba(201, 162, 39, 0.23);
}

/* Mobile */

@media (max-width: 768px) {
  .pf-tilt-card,
  .pf-tilt-card:hover {
    transform: none;
  }

  .pf-card-spotlight,
  .pf-tilt-card::after {
    display: none;
  }

  .pf-card-content {
    transform: none;
  }
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .pf-tilt-card,
  .pf-tilt-card:hover {
    transform: none;
    transition: none;
  }

  .pf-card-spotlight,
  .pf-tilt-card::after {
    display: none;
  }

  .pf-card-content {
    transform: none;
  }
}
  .pf-root {
  background: #ffffff;
}

.pf-root > nav,
.pf-root > header,
.pf-root > section,
.pf-root > footer {
  position: relative;
  z-index: 3;
}

.pf-root h1,
.pf-root h2,
.pf-root h3,
.pf-root p,
.pf-root span,
.pf-root a,
.pf-root button {
  position: relative;
  z-index: 4;
}

.pf-section {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.pf-card {
  background: rgba(246, 248, 252, 0.92);
}

.pf-card:hover {
  background: rgba(238, 241, 250, 0.96);
}
      `}</style>

      {/* NAV */}
      <nav className="pf-nav">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="pf-mono text-sm" style={{ color: "var(--text)" }}>TAR</span>
          <div className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button key={n.id} className="pf-navlink" onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
          <button className="md:hidden pf-link-icon" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
            {nav.map((n) => (
              <button key={n.id} className="pf-navlink text-left" onClick={() => scrollTo(n.id)}>
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <Reveal>
      <header className="pf-hero">
        <div className="max-w-5xl mx-auto px-6 pf-hero-inner">
          <div className="pf-eyebrow pf-fade-in" style={{ animationDelay: "0s" }}>Signal → Model → Insight</div>
          <h1 className="pf-name pf-display mt-4 pf-fade-in" style={{ animationDelay: "0.1s" }}>Toleen<br />Al-Ramahi</h1>
          <RoyalDivider className="pf-fade-in mt-6" />
          <p className="pf-tagline mt-6 pf-fade-in" style={{ animationDelay: "0.25s" }}>
            Data Science &amp; AI student building machine learning systems, automations,
            and applications — currently designing an RL-driven digital brain twin for PTSD care.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 pf-fade-in" style={{ animationDelay: "0.35s" }}>
            <button className="pf-btn pf-btn-primary" onClick={() => scrollTo("projects")}>
              View Projects <ArrowUpRight size={15} />
            </button>
            <button className="pf-btn pf-btn-ghost" onClick={() => scrollTo("contact")}>
              Get in Touch
            </button>
          </div>
          <div className="flex items-center gap-2 mt-8 pf-mono pf-fade-in" style={{ color: "var(--muted)", fontSize: "0.8rem", animationDelay: "0.45s" }}>
            <MapPin size={14} /> Amman, Jordan
          </div>
        </div>
      </header>
</Reveal>

      {/* ABOUT */}
      <Reveal delay={0.1}>
      <section id="about" className="pf-section">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <div className="pf-label">About</div>
            <h2 className="pf-h2 pf-display">What I work on</h2>
          </div>
          <div>
            <p style={{ color: "var(--muted)", lineHeight: 1.75 }}>
              I'm an Applied Science Private University student pursuing a degree in Data Science
              and Artificial Intelligence, expected to graduate in 2027. I care about turning messy,
              real data into systems that hold up — from reinforcement-learning architectures to
              small automations that quietly save people time. Along the way I've picked up React
              and Flask to make sure the models I build can actually reach a screen.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Critical Thinking", "Fast Learning", "Leadership", "Teamwork"].map((s) => (
                <span key={s} className="pf-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-14">
          <div className="grid sm:grid-cols-3 gap-8">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <div className="pf-mono pf-tag-pill mb-3">{g.label}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="pf-chip">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</Reveal>
      {/* PROJECTS */}
      <Reveal delay={0.2}>
      <section id="projects" className="pf-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="pf-label">Projects</div>
          <h2 className="pf-h2 pf-display">Selected work</h2>

          <div className="grid gap-5 mt-10">
            {projects.map((p) => (
              <TiltCard

  key={p.title}

  className={`pf-card ${p.featured ? "featured" : ""}`}

>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="pf-display" style={{ fontSize: "1.3rem", fontWeight: 600 }}>{p.title}</h3>
                      <span className="pf-mono pf-tag-pill">{p.tag}</span>
                    </div>
                    <div className="pf-mono mt-1" style={{ color: "var(--muted)", fontSize: "0.78rem" }}>{p.year}</div>
                    {p.detail && (
                      <div className="mt-1" style={{ color: "var(--muted)", fontSize: "0.78rem", fontStyle: "italic" }}>{p.detail}</div>
                    )}
                  </div>
                  {p.featured && <span className="pf-featured-badge">Featured</span>}
                </div>
                <p className="mt-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>{p.desc}</p>

                {p.visual === "techniques" && (
                  <div className="pf-technique-bars mt-5">
                    {[
                      { label: "Association Rules", w: "78%" },
                      { label: "Classification", w: "92%" },
                      { label: "Clustering", w: "65%" },
                    ].map((t, i) => (
                      <div key={t.label} className="pf-technique-row">
                        <span className="pf-mono pf-technique-label">{t.label}</span>
                        <div className="pf-technique-track">
                          <div
                            className="pf-technique-fill"
                            style={{ "--target-w": t.w, animationDelay: `${i * 0.25}s` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {p.visual === "regression" && (
                  <div className="mt-5">
                    <RegressionVisual />
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.stack.map((s) => (
                    <span key={s} className="pf-stack-tag pf-mono">{s}</span>
                  ))}
                </div>
              </TiltCard> 

            ))}
          </div>
        </div>
      </section>
</Reveal>

      {/* BACKGROUND: education + certificates */}
      <Reveal delay={0.3}>
      <section id="background" className="pf-section">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="pf-label">Education</div>
            <h2 className="pf-h2 pf-display" style={{ fontSize: "1.6rem" }}>Applied Science Private University</h2>
            <div className="flex items-start gap-3 mt-5">
              <GraduationCap size={18} style={{ color: "var(--signal)", marginTop: "2px", flexShrink: 0 }} />
              <div>
               <div style={{ color: "var(--text)" }}>B.Sc. Data Science &amp; Artificial Intelligence</div>
<div className="pf-mono mt-1" style={{ color: "var(--muted)", fontSize: "0.8rem" }}>2023 — 2027 (Expected) · Amman, Jordan</div>
<div className="pf-mono mt-1" style={{ color: "var(--accent)", fontSize: "0.8rem" }}>GPA: Excellent</div>
              </div>
            </div>
          </div>

          <div>
            <div className="pf-label">Certificates</div>
            <h2 className="pf-h2 pf-display" style={{ fontSize: "1.6rem" }}>Learning, formalized</h2>
            <div className="flex flex-col gap-4 mt-5">
              {certificates.map((c) => (
                <div key={c.name} className="flex items-start gap-3">
                  <Award size={16} style={{ color: "var(--accent)", marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "var(--text)", fontSize: "0.95rem" }}>{c.name}</div>
                    <div className="pf-mono" style={{ color: "var(--muted)", fontSize: "0.78rem" }}>{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
</Reveal>
      {/* CONTACT */}
      <Reveal delay={0.4}>
      <section id="contact" className="pf-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="pf-label">Contact</div>
          <h2 className="pf-h2 pf-display">Let's talk</h2>
          <p className="mt-4" style={{ color: "var(--muted)", maxWidth: "42ch" }}>
            Open to internships, research collaborations, and interesting problems in ML and data.
          </p>
        <div className="flex flex-wrap gap-4 mt-8">
  <a
    href="mailto:toleenalramahii04@gmail.com"
    className="pf-btn pf-btn-primary"
  >
    <Mail size={15} />
    Email Me
  </a>

  <a
    href="https://github.com/toleenramahi"
    target="_blank"
    rel="noopener noreferrer"
    className="pf-btn pf-btn-ghost"
  >
    <Github size={15} />
    GitHub
  </a>
  <a
  href="https://www.linkedin.com/in/USERNAME/"
  target="_blank"
  rel="noopener noreferrer"
  className="pf-btn pf-linkedin-btn"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.04c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.84-2.71 3.72V22H9V8z"/>
  </svg>

  LinkedIn
</a>

  <a
    href="https://wa.me/962792695151"
    target="_blank"
    rel="noopener noreferrer"
    className="pf-btn pf-whatsapp-btn"
  >
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.93 9.93 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.18 8.18 0 1 1 12.04 20.18Zm4.49-6.12c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.16.24-.63.8-.77.96-.14.17-.28.19-.53.07-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>

    WhatsApp
  </a>
</div>
        </div>
      </section>
</Reveal>

      <footer className="pf-footer-line">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-2 pf-mono" style={{ color: "var(--muted)", fontSize: "0.78rem" }}>
          <span>© 2026 Toleen Al-Ramahi</span>
          <span>Arabic (Native) · English (Proficient)</span>
        </div>
      </footer>
    </div>
    
  );

}

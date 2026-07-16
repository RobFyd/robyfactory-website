"use client";

/* eslint-disable @next/next/no-img-element */

import { FormEvent, useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/robyfactory-website" : "";

const services = [
  {
    number: "01",
    title: "Custom 3D printing",
    text: "From one-off replacement parts to display pieces, printed to your brief with the right material and finish.",
    tags: ["PLA", "PETG", "TPU", "Nylon / CF"],
  },
  {
    number: "02",
    title: "Prototypes & small batches",
    text: "Test an idea, refine the fit and move into repeatable low-volume production without expensive tooling.",
    tags: ["Fast iteration", "Functional parts", "Short runs"],
  },
  {
    number: "03",
    title: "Product-ready finishing",
    text: "Colour planning, multi-colour printing and practical finishing options for parts that need to look as good as they work.",
    tags: ["Multi-colour", "Silk PLA", "Assembly"],
  },
];

const projects = [
  {
    title: "Celestial Dragon Lamp",
    category: "Product design · Multi-part print",
    image: `${basePath}/products/celestial-dragon-lamp.png`,
    accent: "violet",
  },
  {
    title: "Dragon Headphone Stand",
    category: "Decor · Functional print",
    image: `${basePath}/products/dragon-headphone-stand.png`,
    accent: "lime",
  },
  {
    title: "Poly Skull Stand",
    category: "Desk accessory · FDM print",
    image: `${basePath}/products/poly-skull-headphone-stand.png`,
    accent: "silver",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RobyFactory home">
          {/* <span className="brand-mark" aria-hidden="true">
            R
          </span> */}
          <span>ROBYFACTORY</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#cad" onClick={closeMenu}>CAD design</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get a quote <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-copy">
          <p className="eyebrow"><span /> 3D printing studio · Worcester, UK</p>
          <h1>
            From an idea to a part <em>you can hold.</em>
          </h1>
          <p className="hero-lead">
            Custom 3D printing and CAD design for makers, homes and small
            businesses — from the first sketch to the final layer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start a project <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="#work">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="hero-points" aria-label="Key benefits">
            <li><span>✓</span> Clear, upfront quotes</li>
            <li><span>✓</span> One-offs & small batches</li>
            <li><span>✓</span> UK-wide delivery</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Featured Celestial Dragon Lamp">
          <div className="visual-index">RF / 001</div>
          <img src={`${basePath}/products/celestial-dragon-lamp.png`} alt="3D printed Celestial Dragon Lamp glowing in a dark studio" />
          <div className="visual-caption">
            <div>
              <small>Featured print</small>
              <strong>Celestial Dragon Lamp</strong>
            </div>
            <span className="material-chip">PLA SILK</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>

        <div className="scroll-hint"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> What we make</p>
            <h2>Practical parts.<br /><em>Bold ideas.</em></h2>
          </div>
          <p>
            A flexible, personal service for projects that are too specific for
            off-the-shelf — and too good to stay as a sketch.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tags">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading section-heading-light">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2>Made layer<br /><em>by layer.</em></h2>
          </div>
          <p>
            A small selection of functional, decorative and custom pieces —
            designed to stand out and printed to last.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="project-overlay" />
              <div className="project-number">0{index + 1}</div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <p className="work-note">
          Have something different in mind? <a href="#contact">Show us the idea <span>↗</span></a>
        </p>
      </section>

      <section className="cad-section" id="cad">
        <div className="cad-visual" aria-label="CAD modelling illustration">
          <div className="blueprint-grid" />
          <div className="model-ring ring-a" />
          <div className="model-ring ring-b" />
          <div className="model-core">
            <span>CAD</span>
            <small>3D MODEL</small>
          </div>
          <div className="measure measure-top">Ø 150.00</div>
          <div className="measure measure-side">R 32.50</div>
          <div className="axis axis-x">X</div>
          <div className="axis axis-y">Y</div>
          <div className="axis axis-z">Z</div>
        </div>

        <div className="cad-copy">
          <p className="eyebrow eyebrow-dark"><span /> CAD & reverse engineering</p>
          <h2>Need the model<br /><em>before the print?</em></h2>
          <p>
            We can turn a sketch, measurement or physical part into a clean,
            printable 3D model — with practical design choices built in from the start.
          </p>
          <ol className="process-list">
            <li><span>01</span><div><strong>Share the idea</strong><small>Photos, dimensions, a sketch or the original part.</small></div></li>
            <li><span>02</span><div><strong>Review the model</strong><small>We refine fit, function and printability together.</small></div></li>
            <li><span>03</span><div><strong>Print & deliver</strong><small>A tested part, ready to use — or your final CAD file.</small></div></li>
          </ol>
          <a className="text-link" href="#contact">Discuss a CAD project <span>↗</span></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow"><span /> Let&apos;s make it real</p>
          <h2>Tell us what<br /><em>you&apos;re building.</em></h2>
          <p>
            Send the rough idea, files or dimensions. We&apos;ll come back with the
            right material, an honest timescale and a clear quote.
          </p>
          <div className="contact-meta">
            <div><small>Based in</small><strong>Worcester, UK</strong></div>
            <div><small>Delivery</small><strong>Across the UK</strong></div>
            <div><small>Typical reply</small><strong>Within 1 business day</strong></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              <span>Your name</span>
              <input type="text" name="name" placeholder="e.g. Alex Smith" required />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" name="email" placeholder="alex@example.com" required />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>What do you need?</span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>3D printing</option>
                <option>CAD design</option>
                <option>Reverse engineering</option>
                <option>Small-batch production</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              <span>Ideal timeframe</span>
              <select name="timeframe" defaultValue="flexible">
                <option value="flexible">I&apos;m flexible</option>
                <option>1–2 weeks</option>
                <option>2–4 weeks</option>
                <option>As soon as possible</option>
              </select>
            </label>
          </div>
          <label>
            <span>Project details</span>
            <textarea name="details" rows={5} placeholder="Tell us what the part should do, approximate size, quantity and any material or colour preferences…" required />
          </label>
          <div className="form-bottom">
            <p>Demo form — ready to connect to your inbox.</p>
            <button className="button button-primary" type="submit">
              Send enquiry <span aria-hidden="true">↗</span>
            </button>
          </div>
          {sent && (
            <div className="form-success" role="status">
              <span>✓</span> Thanks — the form works. Connect an inbox before publishing to receive real enquiries.
            </div>
          )}
        </form>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">R</span><span>ROBYFACTORY</span>
        </a>
        <p>Custom 3D printing & CAD design · Worcester, UK</p>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RobyFactory</span>
          <span>Built layer by layer.</span>
        </div>
      </footer>
    </main>
  );
}

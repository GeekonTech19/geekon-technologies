import { useState } from "react";

const services = [
{
number: "01",
title: "Web & App Development",
text: "Modern websites and web applications built around your business, audience and goals.",
},
{
number: "02",
title: "Software Solutions",
text: "Practical software products designed to solve real problems and grow with your organisation.",
},
{
number: "03",
title: "AI & Automation",
text: "Useful AI-powered solutions and workflows that help businesses work smarter and move faster.",
},
{
number: "04",
title: "Digital Media",
text: "Creative digital experiences, graphics and media solutions that help brands communicate better.",
},
];

const products = [
{
title: "Recovery+",
tag: "Geekon Digital Product",
text: "A recovery accountability and wellbeing platform designed to help people track daily progress, goals, habits and achievements.",
href: "#portfolio",
},
{
title: "Your Idea",
tag: "Geekon Product Lab",
text: "Have an idea for a digital product? We can help turn the concept into something useful, practical and ready for real users.",
href: "#contact",
},
];

function App() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

return ( <div className="site"> <header className="navbar"> <a
       className="brand"
       href="#home"
       onClick={closeMenu}
       aria-label="Geekon Technologies home"
     > <img src="/got-logo.png" alt="Geekon Technologies logo" />

      <span>
        <strong>GEEKON</strong>
        <small>TECHNOLOGIES</small>
      </span>
    </a>

    <button
      className="menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
    >
      <span />
      <span />
      <span />
    </button>

    <nav className={menuOpen ? "nav-links open" : "nav-links"}>
      <a href="#home" onClick={closeMenu}>
        Home
      </a>
      <a href="#about" onClick={closeMenu}>
        About
      </a>
      <a href="#services" onClick={closeMenu}>
        Services
      </a>
      <a href="#products" onClick={closeMenu}>
        Products
      </a>
      <a href="#portfolio" onClick={closeMenu}>
        Portfolio
      </a>
      <a className="nav-cta" href="#contact" onClick={closeMenu}>
        Start a Project
      </a>
    </nav>
  </header>

  <main>
    {/* HERO */}
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Technology • Creativity • Impact
          </div>

          <h1>
            We turn ideas into{" "}
            <em>digital solutions.</em>
          </h1>

          <p className="hero-text">
            Geekon Technologies builds websites, software, AI solutions
            and digital products that help businesses and people move
            forward.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Start a Project <span>↗</span>
            </a>

            <a className="button secondary" href="#portfolio">
              Explore Our Work
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <strong>Web</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Solutions</span>
            </div>

            <div>
              <strong>Digital</strong>
              <span>Products</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="visual-card main-card">
            <div className="card-top">
              <span>GEEKON / DIGITAL LAB</span>
              <span>● ONLINE</span>
            </div>

            <div className="code-lines">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="visual-bottom">
              <span>IDEA</span>
              <b>→</b>
              <span>BUILD</span>
              <b>→</b>
              <span>IMPACT</span>
            </div>
          </div>

          <div className="floating-card">
            <span className="floating-icon">✦</span>

            <div>
              <strong>Built with purpose</strong>
              <small>Technology that solves problems.</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="intro section" id="about">
      <div className="section-label">01 — WHO WE ARE</div>

      <div className="intro-content">
        <h2>
          Technology should <span>make things better.</span>
        </h2>

        <div>
          <p>
            Geekon Technologies is a Nigerian technology company focused
            on creating useful, modern and accessible digital solutions.
          </p>

          <p>
            We combine technology, design and creative thinking to help
            businesses, organisations and individuals move from ideas to
            working solutions.
          </p>

          <a className="text-link" href="#contact">
            Work with Geekon <span>→</span>
          </a>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="services section" id="services">
      <div className="section-heading">
        <div>
          <div className="section-label">02 — WHAT WE DO</div>

          <h2>
            What we <span>build.</span>
          </h2>
        </div>

        <p>
          From a first idea to a live digital product, we combine
          technology and creativity to build solutions with purpose.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <div className="service-arrow">↗</div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>

    {/* PRODUCTS */}
    <section className="products section" id="products">
      <div className="section-label">03 — OUR PRODUCTS</div>

      <div className="products-heading">
        <h2>
          We don't just build for clients.{" "}
          <span>We build ideas.</span>
        </h2>

        <p>
          Geekon also develops digital products that address real-world
          needs and explore new ways technology can create impact.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <article
            className={
              index === 0 ? "product-card featured" : "product-card"
            }
            key={product.title}
          >
            <div className="product-number">0{index + 1}</div>

            <div>
              <span className="product-tag">{product.tag}</span>

              <h3>{product.title}</h3>

              <p>{product.text}</p>

              <a href={product.href} className="text-link">
                {index === 0 ? "Explore Recovery+" : "Start a project"}{" "}
                <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* PORTFOLIO */}
    <section className="portfolio section" id="portfolio">
      <div className="section-heading">
        <div>
          <div className="section-label">04 — SELECTED WORK</div>

          <h2>
            Built with <span>purpose.</span>
          </h2>
        </div>

        <p>
          Every project starts with a problem worth solving and ends with
          an experience people can actually use.
        </p>
      </div>

      <div className="portfolio-grid">
        <article className="portfolio-card recovery">
          <div className="portfolio-top">
            <span>GEEKON PRODUCT / 01</span>
            <span>RECOVERY+</span>
          </div>

          <div className="portfolio-content">
            <div className="portfolio-badge">FLAGSHIP PRODUCT</div>

            <h3>Recovery+</h3>

            <p>
              A digital recovery accountability platform featuring daily
              check-ins, goals, progress tracking, achievements and
              community.
            </p>

            <a
              href="https://recovery-plus-frontend.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="pill-link"
            >
              Visit Recovery+ ↗
            </a>
          </div>
        </article>

        <article className="portfolio-card concept">
          <div className="portfolio-top">
            <span>YOUR PROJECT</span>
            <span>GEEKON</span>
          </div>

          <div className="portfolio-content">
            <div className="portfolio-badge">LET'S BUILD</div>

            <h3>Your project could be next.</h3>

            <p>
              Have a business challenge, website idea or digital product
              in mind? Let's explore it together and find the right path
              forward.
            </p>

            <a href="#contact" className="pill-link">
              Start a conversation ↗
            </a>
          </div>
        </article>
      </div>
    </section>

    {/* CONTACT */}
    <section className="contact section" id="contact">
      <div className="contact-inner">
        <div className="section-label">05 — LET'S BUILD</div>

        <h2>
          Have an idea?
          <br />
          <span>Let's make it real.</span>
        </h2>

        <p>
          Tell us what you're building. We'll start with the problem, the
          goal and the best path forward.
        </p>

        <div className="contact-actions">
          <a
            className="button primary"
            href="mailto:hello@geekontechnologies.com"
          >
            Email Geekon ↗
          </a>

          <a
            className="button outline-light"
            href="https://wa.me/2348136695064"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Geekon ↗
          </a>
        </div>

        <div className="contact-details">
          <span>+234 813 669 5064</span>
          <span>hello@geekontechnologies.com</span>
        </div>
      </div>
    </section>
  </main>

  {/* FOOTER */}
  <footer className="footer">
    <div className="footer-brand">
      <img src="/got-logo.png" alt="Geekon Technologies" />

      <div>
        <strong>GEEKON TECHNOLOGIES</strong>
        <span>Technology • Creativity • Impact</span>
      </div>
    </div>

    <div className="footer-links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
    </div>

    <p>
      © {new Date().getFullYear()} Geekon Technologies. All rights
      reserved.
    </p>
  </footer>
</div>

);
}

export default App;

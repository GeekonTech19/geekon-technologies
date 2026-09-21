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

  return (
    <div className="site">
      {/* NAVIGATION */}
      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Geekon Technologies home"
        >
          <img
            src="/got-logo.png"
            alt="Geekon Technologies logo"
          />

          <span>
            <strong>GEEKON</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Primary navigation"
        >
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

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Start a Project
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span />
                Technology • Creativity • Impact
              </div>

              <h1 id="hero-title">
                We turn ideas into{" "}
                <em>digital solutions.</em>
              </h1>

              <p className="hero-text">
                Geekon Technologies is a Nigerian technology company
                building modern websites, web applications, software,
                AI solutions and digital products that help businesses
                and people move forward.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#contact">
                  Start a Project <span>↗</span>
                </a>

                <a className="button secondary" href="#portfolio">
                  Explore Our Work
                </a>
              </div>

              <div className="hero-proof" aria-label="Geekon Technologies capabilities">
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

            <div
              className="hero-visual"
              aria-label="Geekon Technologies digital product development"
            >
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
        <section
          className="intro section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-label">01 — WHO WE ARE</div>

          <div className="intro-content">
            <h2 id="about-title">
              Technology should <span>make things better.</span>
            </h2>

            <div>
              <p>
                Geekon Technologies is a Nigerian technology company
                focused on creating useful, modern and accessible
                digital solutions for businesses, organisations and
                individuals.
              </p>

              <p>
                We combine software development, web technology,
                artificial intelligence, design and creative thinking
                to help turn ideas into working digital solutions.
              </p>

              <a className="text-link" href="#contact">
                Work with Geekon <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="services section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <div>
              <div className="section-label">02 — WHAT WE DO</div>

              <h2 id="services-title">
                Digital solutions we <span>build.</span>
              </h2>
            </div>

            <p>
              From a first idea to a live digital product, we combine
              technology and creativity to build practical solutions
              with purpose.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >
                <span className="service-number">
                  {service.number}
                </span>

                <div
                  className="service-arrow"
                  aria-hidden="true"
                >
                  ↗
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          className="products section"
          id="products"
          aria-labelledby="products-title"
        >
          <div className="section-label">03 — OUR PRODUCTS</div>

          <div className="products-heading">
            <h2 id="products-title">
              We don't just build for clients.{" "}
              <span>We build ideas.</span>
            </h2>

            <p>
              Geekon also develops digital products that address
              real-world needs and explore new ways technology can
              create meaningful impact.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article
                className={
                  index === 0
                    ? "product-card featured"
                    : "product-card"
                }
                key={product.title}
              >
                <div className="product-number">
                  0{index + 1}
                </div>

                <div>
                  <span className="product-tag">
                    {product.tag}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.text}</p>

                  <a
                    href={product.href}
                    className="text-link"
                    aria-label={
                      index === 0
                        ? "Explore Recovery Plus"
                        : "Start a project with Geekon Technologies"
                    }
                  >
                    {index === 0
                      ? "Explore Recovery+"
                      : "Start a project"}{" "}
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          className="portfolio section"
          id="portfolio"
          aria-labelledby="portfolio-title"
        >
          <div className="section-heading">
            <div>
              <div className="section-label">
                04 — SELECTED WORK
              </div>

              <h2 id="portfolio-title">
                Built with <span>purpose.</span>
              </h2>
            </div>

            <p>
              Every project starts with a problem worth solving and
              ends with an experience people can actually use.
            </p>
          </div>

          <div className="portfolio-grid">
            <article className="portfolio-card recovery">
              <div className="portfolio-top">
                <span>GEEKON PRODUCT / 01</span>
                <span>RECOVERY+</span>
              </div>

              <div className="portfolio-content">
                <div className="portfolio-badge">
                  FLAGSHIP PRODUCT
                </div>

                <h3>Recovery+</h3>

                <p>
                  Recovery+ is a digital recovery accountability and
                  wellbeing platform featuring daily check-ins,
                  goals, progress tracking, achievements and
                  community features.
                </p>

                <a
                  href="https://recovery-plus-frontend.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="pill-link"
                  aria-label="Visit the Recovery Plus application"
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
                <div className="portfolio-badge">
                  LET'S BUILD
                </div>

                <h3>Your project could be next.</h3>

                <p>
                  Have a business challenge, website idea or digital
                  product in mind? Let's explore it together and find
                  the right path forward.
                </p>

                <a
                  href="#contact"
                  className="pill-link"
                  aria-label="Start a conversation with Geekon Technologies"
                >
                  Start a conversation ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="contact section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-inner">
            <div className="section-label">
              05 — LET'S BUILD
            </div>

            <h2 id="contact-title">
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>

            <p>
              Tell Geekon Technologies what you're building. We'll
              start with the problem, the goal and the best path
              forward.
            </p>

            <div className="contact-actions">
              <a
                className="button primary"
                href="mailto:hello@geekontechnologies.com"
                aria-label="Email Geekon Technologies"
              >
                Email Geekon ↗
              </a>

              <a
                className="button outline-light"
                href="https://wa.me/2348136695064"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Geekon Technologies on WhatsApp"
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
          <img
            src="/got-logo.png"
            alt="Geekon Technologies logo"
          />

          <div>
            <strong>GEEKON TECHNOLOGIES</strong>
            <span>Technology • Creativity • Impact</span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <p>
          © {new Date().getFullYear()} Geekon Technologies. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
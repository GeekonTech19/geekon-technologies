import { useState } from "react";

const facebookUrl = "https://web.facebook.com/GeekonTechnologies";
const instagramUrl = "https://www.instagram.com/geekon.technologies";
const whatsappUrl = "https://wa.me/2348136695064";
const recoveryUrl = "https://recovery-plus-frontend.onrender.com";

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3ZM12.1 21.5c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.6 9.6 0 0 1-1.5-5.2c0-5.3 4.3-9.6 9.6-9.6 2.6 0 5 1 6.8 2.8a9.5 9.5 0 0 1 2.8 6.8c0 5.3-4.3 9.7-9.6 9.7Zm5.3-7.2c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.4-3.9-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Web & App Development",
    description:
      "Modern, responsive websites and web applications designed around real business needs.",
  },
  {
    number: "02",
    title: "Software Solutions",
    description:
      "Practical digital systems that help businesses streamline operations and work smarter.",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Intelligent tools and automation that reduce repetitive work and unlock new possibilities.",
  },
  {
    number: "04",
    title: "Digital Media",
    description:
      "Creative digital experiences, graphics and technology-driven media solutions.",
  },
];

const products = [
  {
    title: "Recovery+",
    description:
      "A digital recovery accountability and companionship platform helping people build healthier routines and track progress.",
    tag: "Digital Product",
    link: recoveryUrl,
  },
  {
    title: "Your Idea",
    description:
      "Have an idea for a digital product? Geekon Technologies can help transform the concept into something real.",
    tag: "Your Idea",
    link: "#contact",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-container">
          <a
            href="#home"
            className="brand"
            aria-label="Geekon Technologies home"
            onClick={closeMenu}
          >
            <img
              src="/got-logo.png"
              alt="Geekon Technologies logo"
              className="brand-logo"
            />
            <span className="brand-name">
              Geekon<span>Technologies</span>
            </span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`site-nav ${menuOpen ? "open" : ""}`}
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
              href="#contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              Start a Project
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">Technology • Creativity • Innovation</p>

              <h1 id="hero-title">
                We turn ideas into
                <span> digital solutions.</span>
              </h1>

              <p className="hero-description">
                Geekon Technologies is a Nigerian technology company building
                modern websites, web applications, software, AI solutions and
                digital products.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Start a Project
                  <ArrowIcon />
                </a>

                <a href="#services" className="button button-secondary">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">
                <span className="trust-line" />
                <span>Built in Nigeria. Designed for the future.</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-card hero-card-main">
                <div className="hero-card-top">
                  <span className="status-dot" />
                  <span>Digital Solutions</span>
                </div>

                <div className="hero-code">
                  <span className="code-line long" />
                  <span className="code-line medium" />
                  <span className="code-line short" />
                  <span className="code-line long" />
                  <span className="code-line medium" />
                </div>

                <div className="hero-card-footer">
                  <span>IDEA</span>
                  <ArrowIcon />
                  <span>PRODUCT</span>
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <strong>01</strong>
                <span>Innovation</span>
              </div>

              <div className="floating-card floating-card-two">
                <strong>+</strong>
                <span>Technology</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="container two-column">
            <div>
              <p className="section-label">01 / About Geekon</p>
              <h2 id="about-title">
                Technology should
                <span> make things better.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Geekon Technologies is focused on creating practical digital
                solutions that solve real problems. From websites and software
                systems to AI-powered tools and digital products, we combine
                technology with creativity to build useful experiences.
              </p>

              <p>
                We work with businesses, organizations and individuals who want
                to turn ideas into reliable digital products.
              </p>

              <a href="#contact" className="text-link">
                Let's build something useful
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section services-section"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">02 / What We Do</p>
                <h2 id="services-title">
                  Digital solutions
                  <span> we build.</span>
                </h2>
              </div>

              <p>
                From your first idea to a working digital product, we help
                bring technology and creativity together.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href="#contact"
                    className="card-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Discuss this service
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="section products-section"
          aria-labelledby="products-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">03 / Our Products</p>
                <h2 id="products-title">
                  We don't just build for clients.
                  <span> We build ideas.</span>
                </h2>
              </div>

              <p>
                Geekon Technologies also develops its own digital products,
                exploring ideas that can create meaningful impact.
              </p>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <div className="product-card-top">
                    <span className="product-tag">{product.tag}</span>

                    {product.title === "Recovery+" && (
                      <span className="product-status">LIVE</span>
                    )}
                  </div>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  {product.title === "Recovery+" ? (
                    <a
                      href={product.link}
                      className="button button-small"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Recovery+
                      <ExternalLinkIcon />
                    </a>
                  ) : (
                    <a href={product.link} className="button button-small">
                      Start with an idea
                      <ArrowIcon />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="section portfolio-section"
          aria-labelledby="portfolio-title"
        >
          <div className="container">
            <div className="portfolio-header">
              <div>
                <p className="section-label">04 / Portfolio</p>
                <h2 id="portfolio-title">
                  Built with purpose.
                  <span> Built to grow.</span>
                </h2>
              </div>

              <p>
                A selection of digital work and products created by Geekon
                Technologies.
              </p>
            </div>

            <article className="portfolio-feature">
              <div className="portfolio-number">01</div>

              <div className="portfolio-content">
                <p className="portfolio-category">Digital Product</p>

                <h3>Recovery+</h3>

                <p>
                  Recovery+ is a digital recovery accountability and
                  companionship platform designed to help users track daily
                  progress, build positive routines and stay accountable.
                </p>

                <a
                  href={recoveryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View live product
                  <ExternalLinkIcon />
                </a>
              </div>

              <div className="portfolio-visual" aria-hidden="true">
                <div className="portfolio-screen">
                  <div className="screen-header">
                    <span>Recovery+</span>
                    <span className="screen-dot" />
                  </div>

                  <div className="screen-body">
                    <span className="screen-line wide" />
                    <span className="screen-line medium" />

                    <div className="screen-stats">
                      <div>
                        <strong>07</strong>
                        <span>Streak</span>
                      </div>

                      <div>
                        <strong>86%</strong>
                        <span>Score</span>
                      </div>
                    </div>

                    <span className="screen-line wide" />
                    <span className="screen-line short" />
                  </div>
                </div>
              </div>
            </article>

            <div className="portfolio-next">
              <span>02</span>
              <p>Your project could be next.</p>
              <a href="#contact" className="text-link">
                Start a conversation
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div>
              <p className="section-label">05 / Let's Work Together</p>

              <h2 id="contact-title">
                Have an idea?
                <span> Let's build it.</span>
              </h2>

              <p className="contact-description">
                Tell us what you're thinking about. Whether you need a
                website, application, software solution, AI tool or digital
                product, we'd love to hear about it.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:hello@geekontechnologies.com"
                className="contact-method"
              >
                <span>Email</span>
                <strong>hello@geekontechnologies.com</strong>
                <ArrowIcon />
              </a>

              <a
                href={whatsappUrl}
                className="contact-method"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp</span>
                <strong>+234 813 669 5064</strong>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a
              href="#home"
              className="brand footer-brand-link"
              aria-label="Geekon Technologies home"
            >
              <img
                src="/got-logo.png"
                alt="Geekon Technologies logo"
                className="brand-logo"
              />

              <span className="brand-name">
                Geekon<span>Technologies</span>
              </span>
            </a>

            <p>
              Technology, creativity and innovation — building digital
              solutions that make things better.
            </p>

            <div className="social-links" aria-label="Geekon Technologies social media">
              <a
                href={facebookUrl}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Geekon Technologies on Facebook"
                title="Facebook"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>

              <a
                href={instagramUrl}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Geekon Technologies on Instagram"
                title="Instagram"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#portfolio">Portfolio</a>
            </div>

            <div>
              <h3>Connect</h3>
              <a href="#contact">Start a Project</a>

              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} Geekon Technologies. All rights
            reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top
            <ArrowIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
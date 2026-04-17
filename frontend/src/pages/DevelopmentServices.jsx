import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import developmentHeroImage from "../assets/images/Development.jfif";
import websiteDevelopmentImage from "../assets/images/Website Development.jfif";
import applicationDevelopmentImage from "../assets/images/Application Development.jfif";
import customSoftwareImage from "../assets/images/Custom Software Development.jfif";
import fullStackImage from "../assets/images/full_stack_dev.jfif";

const developmentTracks = [
  {
    title: "Website Development",
    badge: "Web Presence",
    image: websiteDevelopmentImage,
    imageAlt: "Website development visual",
    summary:
      "We design and build modern websites that feel fast, look sharp, and support your brand across every screen size.",
    whatItIs:
      "A website built around brand clarity, responsive layout, and a clear user journey that helps visitors take action.",
    howItWorks:
      "We map the structure, design the interface, build the pages, and refine performance so the site is ready for launch.",
    bestFor: ["Brand sites", "Landing pages", "Corporate websites"],
  },
  {
    title: "Application Development",
    badge: "App Experience",
    image: applicationDevelopmentImage,
    imageAlt: "Application development visual",
    summary:
      "We create application experiences for teams that need workflows, dashboards, portals, or task-focused digital tools.",
    whatItIs:
      "A product-style application that helps users complete work faster through guided screens, actions, and data views.",
    howItWorks:
      "We define user flows, build the interface, connect the logic, and test the experience across the core use cases.",
    bestFor: ["Dashboards", "Internal tools", "Customer portals"],
  },
  {
    title: "Custom Software Development",
    badge: "Tailored Build",
    image: customSoftwareImage,
    imageAlt: "Custom software development visual",
    summary:
      "We build software that fits your process instead of forcing your team into generic off-the-shelf systems.",
    whatItIs:
      "A bespoke software solution shaped around your internal workflows, reporting needs, and operational priorities.",
    howItWorks:
      "We translate your process into features, build the modules, wire the data flow, and iterate until it fits your use case.",
    bestFor: ["Process automation", "Business systems", "Operational tools"],
  },
  {
    title: "Full Stack Development",
    badge: "Stack Delivery",
    image: fullStackImage,
    imageAlt: "Full stack development visual",
    summary:
      "We handle the full stack so interface, backend logic, and data flow stay aligned from the start of the build.",
    whatItIs:
      "A complete delivery approach that keeps design, code, APIs, and data structures moving together as one system.",
    howItWorks:
      "We plan the stack, build the UI, implement the application logic, and support deployment-ready delivery.",
    bestFor: ["MVPs", "SaaS products", "Integrated systems"],
  },
];

const developmentHighlights = [
  "Responsive UI",
  "Product Thinking",
  "Workflow Logic",
  "Deployment Ready",
];

function DevelopmentServices() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const cardsReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero development-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="development-hero__grid">
            <div className="development-hero__content">
              <p className="eyebrow">Development Services</p>
              <h1>Build software that feels modern, practical, and ready to grow.</h1>
              <p className="lead">
                {companyInfo.shortName} designs and delivers web products, app experiences, and custom software for
                teams that want reliable digital systems instead of generic templates.
              </p>
              <div className="careers-hero__actions">
                <Link to="/contact" className="btn">
                  Contact Us
                </Link>
                <Link to="/services" className="btn btn--secondary">
                  Explore Services
                </Link>
              </div>
              <div className="career-hero__chips development-hero__chips">
                {developmentHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <aside className="glass-panel development-hero__panel">
              <div className="development-hero__visual">
                <img src={developmentHeroImage} alt="Development services overview" loading="lazy" />
                <span className="development-hero__visual-badge">Custom Delivery</span>
              </div>
              <div className="development-hero__panel-copy">
                <p className="eyebrow">How we build</p>
                <h2>Clean interfaces, strong logic, and a delivery flow that stays easy to support.</h2>
                <div className="development-hero__stats">
                  <div>
                    <strong>Plan</strong>
                    <span>Define the product shape and the delivery roadmap before coding starts.</span>
                  </div>
                  <div>
                    <strong>Build</strong>
                    <span>Ship the interface, logic, and structure as one coordinated system.</span>
                  </div>
                  <div>
                    <strong>Scale</strong>
                    <span>Keep the product maintainable so it can grow with the business.</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        ref={cardsReveal.ref}
        className={`section development-tracks-section reveal-section ${cardsReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Service Tracks</p>
              <h2>Four focused delivery tracks, each with its own visual and explanation.</h2>
            </div>
            <p>
              We removed the extra API and database cards so this page stays sharp, simple, and easier to scan.
            </p>
          </div>

          <div className="development-tracks-grid">
            {developmentTracks.map((track, index) => (
              <article
                key={track.title}
                className={`glass-panel development-track-card ${
                  index % 2 === 1 ? "development-track-card--reverse" : ""
                }`}
              >
                <div className="development-track-card__visual">
                  <img src={track.image} alt={track.imageAlt} loading="lazy" />
                  <span className="development-track-card__badge">{track.badge}</span>
                </div>

                <div className="development-track-card__content">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{track.title}</h3>
                  <p className="development-track-card__summary">{track.summary}</p>

                  <div className="development-track-card__blocks">
                    <div className="development-track-card__block">
                      <strong>What it is</strong>
                      <p>{track.whatItIs}</p>
                    </div>
                    <div className="development-track-card__block">
                      <strong>How it works</strong>
                      <p>{track.howItWorks}</p>
                    </div>
                  </div>

                  <div className="development-track-card__tags">
                    {track.bestFor.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaReveal.ref}
        className={`section section--accent reveal-section ${ctaReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container text-center">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Build With Us</p>
            <h2>Need a software team that can turn ideas into working products?</h2>
            <p>Let's map your workflow, pick the right stack, and move toward a clean production-ready build.</p>
            <Link to="/contact" className="btn btn--large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DevelopmentServices;

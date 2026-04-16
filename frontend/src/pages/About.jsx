import { Link } from "react-router-dom";
import { aboutPoints, companyInfo, processSteps } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import cabinImage from "../assets/images/cabin.JPG";
import teamImage from "../assets/images/all_member.JPG";
import storyImage from "../assets/images/office2.JPG";
import madhuriImage from "../assets/images/madhuri_mam.JPG";
import dheerajImage from "../assets/images/dheeraj_sir1.JPG";

const teamNotes = [
  "Office-first execution with collaborative planning",
  "Team-based review for data, product, and delivery work",
  "A growth mindset for AI, software, and business systems",
];

const leaders = [
  {
    name: "Madhuri Shrivastava",
    title: "Director & Co-Founder",
    image: madhuriImage,
    imageAlt: "Madhuri Shrivastava, Director and Co-Founder of Dhritii.ai",
    focus: "Strategy, growth direction, and company leadership",
    highlights: ["Strategy", "Growth"],
  },
  {
    name: "Dheeraj Saxena",
    title: "Founder & MD",
    image: dheerajImage,
    imageAlt: "Dheeraj Saxena, Founder and Managing Director of Dhritii.ai",
    focus: "Vision, execution, and business operations",
    highlights: ["Vision", "Operations"],
  },
];

function About() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const storyReveal = useRevealOnScroll();
  const valuesReveal = useRevealOnScroll();
  const cultureReveal = useRevealOnScroll();
  const processReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <p className="eyebrow">About Us</p>
              <h1>Building AI-ready data systems and software products for real teams.</h1>
              <p className="lead">
                Dhritii.ai Pvt. Ltd. creates practical solutions across AI data, SaaS products, and enterprise
                software delivery.
              </p>

              <div className="careers-hero__actions">
                <Link to="/contact" className="btn">
                  Contact Us
                </Link>
                <Link to="/services" className="btn btn--secondary">
                  View Services
                </Link>
              </div>

              <div className="career-hero__chips">
                <span>AI Data</span>
                <span>Product Engineering</span>
                <span>Cloud Ops</span>
                <span>Business Systems</span>
              </div>
            </div>

            <div className="glass-panel about-hero-card">
              <div className="about-media-card">
                <img src={cabinImage} alt="Dhritii.ai cabin workspace" loading="lazy" />
              
              </div>
              <div className="about-hero-card__content">
                <p className="eyebrow">What we do</p>
                <h2>We turn raw inputs into usable business outcomes.</h2>
                <p>
                  From data annotation to platform delivery, our work is focused on creating results that support
                  modern teams and scalable operations.
                </p>
                <div className="about-hero-card__stats">
                  <div>
                    <strong>AI Data</strong>
                    <span>Labeling, classification, and quality support</span>
                  </div>
                  <div>
                    <strong>Products</strong>
                    <span>CRM, HRMS, and internal software systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={storyReveal.ref}
        className={`section about-story-section reveal-section ${storyReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container split-section split-section--story">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>Built to support AI, data, and business delivery in one place.</h2>
            <p>
              Dhritii.ai Pvt. Ltd. was shaped around a simple idea: teams need practical systems, not just
              technology buzzwords. Our work combines AI data operations, software development, and business
              workflows into solutions that can actually be used.
            </p>
            <p>
              We focus on data annotation, AI development, SaaS-based products, and cloud-ready digital systems.
              The goal is to help organizations move from raw inputs to outputs that support decisions, operations,
              and scale.
            </p>
            <div className="stack-list stack-list--compact">
              {aboutPoints.map((point) => (
                <div key={point} className="feature-row">
                  <span className="feature-row__dot" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel about-story-card">
            <div className="about-media-card about-media-card--tall">
              <img src={storyImage} alt="Dhritii.ai workspace and team story image" loading="lazy" />
              <div className="about-media-card__badge">Team / Workspace</div>
            </div>
            <div className="about-story-card__content">
              <p className="eyebrow">Our Approach</p>
              <h2>We keep the process clear, practical, and accountable.</h2>
              <p className="about-story-card__lead">
                Our team focuses on work that is easy to review, easy to trust, and easy to use in day-to-day
                operations.
              </p>
              <div className="about-story-card__metrics">
                <div>
                  <strong>Clarity</strong>
                  <span>Defined scope, clean execution, and transparent communication</span>
                </div>
                <div>
                  <strong>Quality</strong>
                  <span>Structured reviews and careful attention to detail</span>
                </div>
                <div>
                  <strong>Usability</strong>
                  <span>Outputs built for practical use across teams and workflows</span>
                </div>
              </div>
              <div className="stack-list stack-list--compact">
                <div className="feature-row">
                  <span className="feature-row__dot" />
                  <p>Build with clarity</p>
                </div>
                <div className="feature-row">
                  <span className="feature-row__dot" />
                  <p>Review with quality</p>
                </div>
                <div className="feature-row">
                  <span className="feature-row__dot" />
                  <p>Deliver for real use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={valuesReveal.ref}
        className={`section reveal-section ${valuesReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2>The people guiding Dhritii.ai</h2>
            </div>
            <p>Two leaders, two strengths, one clear direction for the company.</p>
          </div>

          <div className="cards-grid about-leadership-grid">
            {leaders.map((leader) => (
              <article key={leader.name} className="glass-panel about-leadership-card">
                <div className="about-leadership-card__topline">
                  <span className="about-leadership-card__index">{leader.title === "Director & Co-Founder" ? "01" : "02"}</span>
                  <span className="about-leadership-card__badge">{leader.title}</span>
                </div>
                <div className="about-leadership-card__photo">
                  <img src={leader.image} alt={leader.imageAlt} loading="lazy" />
                </div>
                <div className="about-leadership-card__content">
                  <h3>{leader.name}</h3>
                  <p>{leader.focus}</p>
                  <div className="about-leadership-card__chips">
                    {leader.highlights.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={valuesReveal.ref}
        className={`section about-values-section reveal-section ${valuesReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Mission, Vision, Values</p>
              <h2>How we think and how we work</h2>
            </div>
            <p>The principles behind our delivery model: clarity first, quality always, and outcomes that teams can use.</p>
          </div>

          <div className="cards-grid about-values-grid">
            <article className="info-card about-values-card about-values-card--mission">
              <div className="about-values-card__topline">
                <span className="about-values-card__index">01</span>
                <span className="info-card__badge">Mission</span>
              </div>
              <h3>Turn complexity into usable systems.</h3>
              <p className="about-values-card__summary">
                We build AI and software delivery systems that are practical, measurable, and aligned with real
                business needs.
              </p>
              <div className="about-values-card__panel">
                <strong>What it looks like</strong>
                <p>Clear requirements, faster handoffs, cleaner outputs, and solutions that can be adopted without friction.</p>
              </div>
              <div className="about-values-card__chips">
                <span>Practical delivery</span>
                <span>Real use</span>
              </div>
            </article>
            <article className="info-card about-values-card about-values-card--vision">
              <div className="about-values-card__topline">
                <span className="about-values-card__index">02</span>
                <span className="info-card__badge">Vision</span>
              </div>
              <h3>Become the team clients trust for execution.</h3>
              <p className="about-values-card__summary">
                Our vision is to help organizations move from scattered workflows to connected digital operations
                that can grow with them.
              </p>
              <div className="about-values-card__panel">
                <strong>What it means</strong>
                <p>Scalable processes, dependable delivery, and a partnership style that supports long-term growth.</p>
              </div>
              <div className="about-values-card__chips">
                <span>Scale</span>
                <span>Trust</span>
              </div>
            </article>
            <article className="info-card about-values-card about-values-card--values">
              <div className="about-values-card__topline">
                <span className="about-values-card__index">03</span>
                <span className="info-card__badge">Values</span>
              </div>
              <h3>Move fast, keep quality intact.</h3>
              <p className="about-values-card__summary">
                Ownership, responsiveness, and learning guide how we collaborate and ship.
              </p>
              <div className="about-values-card__panel">
                <strong>What guides us</strong>
                <p>Fast communication, careful reviews, and work that stays genuinely useful.</p>
              </div>
              <div className="about-values-card__chips">
                <span>Ownership</span>
                <span>Quality</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={cultureReveal.ref}
        className={`section section--accent reveal-section ${cultureReveal.isVisible ? "is-visible" : ""}`}
      >
          <div className="container split-section split-section--story">
          <div className="glass-panel about-culture-card">
            <div className="about-media-card about-media-card--tall">
              <img src={teamImage} alt="Dhritii.ai team photo" loading="lazy" />
              <div className="about-media-card__badge">Team / Culture</div>
            </div>
            <div className="about-culture-card__content">
              <p className="eyebrow">How we work together</p>
              <div className="stack-list stack-list--compact">
                <div className="feature-row">
                  <span className="feature-row__dot" />
                  <p>Plan before we build</p>
                </div>
                <div className="feature-row">
                  <span className="feature-row__dot" />
                  <p>Check quality at each step</p>
                </div>
                <div className="feature-row">
                  <span className="feature-row__dot" />
                  <p>Ship work that can be used</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-culture-text">
            <p className="eyebrow">Team & Culture</p>
            <h2>A workplace built around ownership and collaboration.</h2>
            <p className="lead">
              Dhritii.ai works best when teams move with clarity, share context early, and keep quality visible at
              every step.
            </p>
            <div className="stack-list stack-list--compact">
              {teamNotes.map((note) => (
                <div key={note} className="feature-row">
                  <span className="feature-row__dot" />
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={processReveal.ref}
        className={`section about-process-section section--accent reveal-section ${processReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How We Work</p>
              <h2>Execution built around clarity, pace, and real-world use.</h2>
            </div>
            <p>
              We keep delivery practical so the final output works for data teams, business teams, and production
              workflows without extra noise.
            </p>
          </div>
          <div className="timeline-grid about-process-grid">
            {processSteps.map((step, index) => (
              <article key={step} className="timeline-card timeline-card--elevated about-process-card">
                <div className="about-process-card__top">
                  <span className="about-process-card__step">0{index + 1}</span>
                  <span className="about-process-card__label">Step {index + 1}</span>
                </div>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

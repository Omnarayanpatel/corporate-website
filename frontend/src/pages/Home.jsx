import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import ProductSection from "../sections/ProductSection";
import { aboutPoints, companyInfo, stats } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import officeImage from "../assets/images/office.JPG";

const processCards = [
  {
    icon: "AI",
    title: "Analyze",
    tags: ["AI/ML", "Data review"],
    step: "Understand the AI/ML problem, data challenge, or software need in practical terms.",
  },
  {
    icon: "BU",
    title: "Build",
    tags: ["Fast delivery", "Automation"],
    step: "Design a fast, scalable solution flow across data, product, automation, or cloud layers.",
  },
  {
    icon: "DP",
    title: "Deliver",
    tags: ["Production ready", "Scale"],
    step: "Build, validate, and optimize the final system for reliable delivery and long-term business use.",
  },
];

function Home() {
  const trustReveal = useRevealOnScroll();
  const storyReveal = useRevealOnScroll();
  const processReveal = useRevealOnScroll();

  return (
    <main>
      <Hero />

      <section
        ref={trustReveal.ref}
        className={`section trust-strip-section reveal-section ${trustReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="trust-strip">
            <div>
              <p className="eyebrow">Built For Modern Teams</p>
              <h2>AI data operations, software delivery, and business systems in one execution layer.</h2>
            </div>
            <div className="trust-strip__stats">
              {stats.map((item) => (
                <div key={item.label} className="trust-metric">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProductSection />

      <section
        ref={storyReveal.ref}
        className={`section home-story-section reveal-section ${storyReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container split-section split-section--story">
          <div>
            <p className="eyebrow">Why Dhritii.ai</p>
            <h2>From raw data to intelligent business value.</h2>
            <p className="lead">{companyInfo.description}</p>
            <div className="stack-list">
              {aboutPoints.map((point) => (
                <div key={point} className="feature-row">
                  <span className="feature-row__dot" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="story-panel glass-panel story-panel--visual">
            <div className="story-panel__image">
              <img src={officeImage} alt="Dhritii.ai office workspace" loading="lazy" />
              <div className="story-panel__badge">Our workspace</div>
            </div>
            <div className="story-panel__copy">
              <p className="eyebrow">Delivery Model</p>
              <h2>Structured execution that moves from challenge to usable output.</h2>
              <p className="story-panel__lead">
                We keep work practical, collaborative, and ready for real teams to use.
              </p>
              <div className="story-flow">
                <div className="story-flow__item">
                  <span>01</span>
                  <div>
                    <strong>Discover</strong>
                    <p>We map business pain points, data needs, and product opportunities with clarity.</p>
                  </div>
                </div>
                <div className="story-flow__item">
                  <span>02</span>
                  <div>
                    <strong>Design</strong>
                    <p>We shape practical workflows across annotation, SaaS, cloud, and automation layers.</p>
                  </div>
                </div>
                <div className="story-flow__item">
                  <span>03</span>
                  <div>
                    <strong>Deploy</strong>
                    <p>We build solutions meant for real teams, real usage, and long-term scale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={processReveal.ref}
        className={`section section--accent reveal-section ${processReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our Process</p>
              <h2>AI/ML-first execution for fast, scalable outcomes.</h2>
            </div>
            <p>
              Every delivery track is designed to move fast, stay useful in production, and give you a practical result.
            </p>
          </div>
          <div className="timeline-grid timeline-grid--elevated timeline-grid--process">
            {processCards.map((item, index) => (
              <article key={item.title} className="timeline-card timeline-card--elevated timeline-card--process">
                <div className="timeline-card--process__top">
                  <span className="timeline-card--process__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="timeline-card--process__step">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.step}</p>
                <div className="timeline-card--process__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

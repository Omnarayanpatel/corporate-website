import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import ProductSection from "../sections/ProductSection";
import { aboutPoints, companyInfo, processSteps, stats } from "../data/companyData";

function Home() {
  return (
    <main>
      <Hero />

      <section className="section trust-strip-section">
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

      <section className="section home-story-section">
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

          <div className="story-panel glass-panel">
            <p className="eyebrow">Delivery Model</p>
            <h2>Structured execution that moves from challenge to usable output.</h2>
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
      </section>

      <section className="section section--accent">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our Process</p>
              <h2>Structured execution for scalable outcomes.</h2>
            </div>
            <p>
              Every delivery track is designed to stay useful in production, not just look good in a demo.
            </p>
          </div>
          <div className="timeline-grid timeline-grid--elevated">
            {processSteps.map((step, index) => (
              <article key={step} className="timeline-card timeline-card--elevated">
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

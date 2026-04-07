import { aboutPoints, companyInfo, processSteps } from "../data/companyData";

function About() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>{companyInfo.name}</h1>
          <p className="lead">{companyInfo.description}</p>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container split-section split-section--story">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2>Building scalable data systems and intelligent software products.</h2>
            <p>
              Dhritii.ai Pvt. Ltd. is a next-generation AI and technology company focused on building scalable data solutions and intelligent software products.
            </p>
            <p>
              We specialize in data annotation, AI development, and SaaS-based platforms such as CRM and HRMS systems. Our mission is to transform raw data into meaningful insights that power modern AI systems and business decisions.
            </p>
            <p>
              With a strong focus on innovation, quality, and scalability, Dhritii.ai helps organizations accelerate their digital transformation journey.
            </p>
          </div>

          <div className="about-visual-card">
            <div className="about-visual-card__media">
              <div className="about-visual-card__grid" />
              <div className="about-visual-card__orb about-visual-card__orb--one" />
              <div className="about-visual-card__orb about-visual-card__orb--two" />
              <div className="about-visual-card__chip">Team / Workspace Image</div>
              <div className="about-visual-card__frame">
                <div className="about-visual-card__line about-visual-card__line--strong" />
                <div className="about-visual-card__line" />
                <div className="about-visual-card__stats">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
            <div className="about-visual-card__content">
              <p className="eyebrow">Core Focus</p>
              <div className="stack-list stack-list--compact">
                {aboutPoints.map((point) => (
                  <div key={point} className="feature-row">
                    <span className="feature-row__dot" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How We Work</p>
              <h2>Execution built around clarity, scale, and real-world use.</h2>
            </div>
            <p>
              We keep delivery practical so the final output works for data teams, business teams, and production workflows.
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

export default About;

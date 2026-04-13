import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function BusinessCloudServices() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const contentReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section 
        ref={heroReveal.ref} 
        className={`page-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <p className="eyebrow">Business & Cloud Services</p>
          <h1>Scalable Business Solutions in the Cloud</h1>
          <p className="lead">
            Optimize your operations with cloud-based solutions and business automation. 
            {companyInfo.shortName} provides SaaS platforms and cloud infrastructure to drive efficiency and growth.
          </p>
        </div>
      </section>

      <section 
        ref={contentReveal.ref} 
        className={`section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <h2>Our Business & Cloud Services</h2>
            <p>Comprehensive solutions for modern business operations and digital transformation.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <h3>SaaS Solutions</h3>
              <p>Ready-to-use software applications delivered over the internet for various business needs.</p>
            </article>
            <article className="info-card">
              <h3>Cloud Services</h3>
              <p>Migration, management, and optimization of cloud infrastructure on major platforms.</p>
            </article>
            <article className="info-card">
              <h3>Automation Solutions</h3>
              <p>Streamline workflows with intelligent automation tools and RPA implementations.</p>
            </article>
            <article className="info-card">
              <h3>Security Management</h3>
              <p>Implement robust security measures to protect your data and applications in the cloud.</p>
            </article>
            <article className="info-card">
              <h3>Business Intelligence</h3>
              <p>Transform data into actionable insights with advanced analytics and reporting tools.</p>
            </article>
          </div>
        </div>
      </section>

      <section 
        ref={ctaReveal.ref} 
        className={`section section--accent reveal-section ${ctaReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container text-center">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Scale Up</p>
            <h2>Ready to move your business to the cloud?</h2>
            <p>Discover how our cloud solutions can accelerate your digital transformation.</p>
            <Link to="/contact" className="btn btn--large">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BusinessCloudServices;
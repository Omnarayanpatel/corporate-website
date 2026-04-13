import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function MarketingServices() {
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
          <p className="eyebrow">Marketing Services</p>
          <h1>Performance-Driven Digital Marketing</h1>
          <p className="lead">
            Grow your business with data-driven marketing strategies. 
            {companyInfo.shortName} offers comprehensive digital marketing services to increase visibility and drive results.
          </p>
        </div>
      </section>

      <section 
        ref={contentReveal.ref} 
        className={`section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <h2>Our Marketing Services</h2>
            <p>Strategic marketing solutions designed to maximize ROI and business growth.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <h3>Digital Marketing</h3>
              <p>Comprehensive online marketing campaigns across multiple channels and platforms.</p>
            </article>
            <article className="info-card">
              <h3>Performance Marketing</h3>
              <p>Results-oriented marketing focused on measurable outcomes and ROI optimization.</p>
            </article>
            <article className="info-card">
              <h3>SEO & SEM</h3>
              <p>Improve search engine rankings and visibility with organic and paid search strategies.</p>
            </article>
            <article className="info-card">
              <h3>Social Media Marketing</h3>
              <p>Build brand awareness and engagement across social media platforms.</p>
            </article>
            <article className="info-card">
              <h3>Content Marketing</h3>
              <p>Create valuable content that attracts, engages, and converts your target audience.</p>
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
            <p className="eyebrow">Grow Your Business</p>
            <h2>Ready to boost your marketing efforts?</h2>
            <p>Let's create a customized marketing strategy that drives real results.</p>
            <Link to="/contact" className="btn btn--large">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MarketingServices;
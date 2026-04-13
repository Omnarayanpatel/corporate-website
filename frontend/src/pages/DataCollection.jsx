import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function DataCollection() {
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
          <p className="eyebrow">Data Collection Services</p>
          <h1>Comprehensive Data Collection Solutions</h1>
          <p className="lead">
            Gather high-quality, diverse datasets essential for training robust AI models. 
            {companyInfo.shortName} specializes in ethical and efficient data collection across various domains.
          </p>
        </div>
      </section>

      <section 
        ref={contentReveal.ref} 
        className={`section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <h2>Our Data Collection Services</h2>
            <p>Customized data collection strategies to meet your specific needs.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <h3>Image Data Collection</h3>
              <p>Curate diverse image datasets from various sources for computer vision applications.</p>
            </article>
            <article className="info-card">
              <h3>Text Data Collection</h3>
              <p>Gather textual data including articles, reviews, and user-generated content.</p>
            </article>
            <article className="info-card">
              <h3>Audio Data Collection</h3>
              <p>Collect audio samples for speech recognition and natural language processing.</p>
            </article>
            <article className="info-card">
              <h3>Video Data Collection</h3>
              <p>Acquire video content for analysis and machine learning model training.</p>
            </article>
            <article className="info-card">
              <h3>Survey and Feedback Collection</h3>
              <p>Design and conduct surveys to gather structured data and user insights.</p>
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
            <p className="eyebrow">Start Collecting</p>
            <h2>Need data for your next project?</h2>
            <p>Let's discuss your data collection requirements and create a tailored solution.</p>
            <Link to="/contact" className="btn btn--large">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DataCollection;
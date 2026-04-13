import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function AIServices() {
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
          <p className="eyebrow">AI & ML Services</p>
          <h1>Advanced AI and Machine Learning Solutions</h1>
          <p className="lead">
            Harness the power of AI and ML to transform your data into actionable insights. 
            {companyInfo.shortName} provides comprehensive AI services including data annotation, model training, and deployment.
          </p>
        </div>
      </section>

      <section 
        ref={contentReveal.ref} 
        className={`section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <h2>Our AI & ML Offerings</h2>
            <p>End-to-end AI solutions tailored to your business needs.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <h3>Data Annotation</h3>
              <p>High-quality labeling of images, text, audio, and video data for training AI models.</p>
            </article>
            <article className="info-card">
              <h3>Medical Data Annotation</h3>
              <p>Specialized annotation services for healthcare and medical imaging data.</p>
            </article>
            <article className="info-card">
              <h3>Data Classification</h3>
              <p>Organize and categorize your data for better analysis and model performance.</p>
            </article>
            <article className="info-card">
              <h3>AI Model Support</h3>
              <p>Training, fine-tuning, and optimization of machine learning models.</p>
            </article>
            <article className="info-card">
              <h3>Transcription Services</h3>
              <p>Convert audio and video content into accurate text transcripts.</p>
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
            <p className="eyebrow">Get Started</p>
            <h2>Ready to leverage AI for your business?</h2>
            <p>Contact us to discuss your AI project requirements.</p>
            <Link to="/contact" className="btn btn--large">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AIServices;
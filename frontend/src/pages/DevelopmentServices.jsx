import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function DevelopmentServices() {
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
          <p className="eyebrow">Development Services</p>
          <h1>Custom Software Development Solutions</h1>
          <p className="lead">
            Build scalable, robust applications tailored to your business needs. 
            {companyInfo.shortName} offers full-stack development services for web, mobile, and enterprise applications.
          </p>
        </div>
      </section>

      <section 
        ref={contentReveal.ref} 
        className={`section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <h2>Our Development Services</h2>
            <p>From concept to deployment, we handle every aspect of software development.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <h3>Website Development</h3>
              <p>Create responsive, modern websites with the latest technologies and best practices.</p>
            </article>
            <article className="info-card">
              <h3>Application Development</h3>
              <p>Develop custom web and mobile applications for various platforms and devices.</p>
            </article>
            <article className="info-card">
              <h3>Custom Software Development</h3>
              <p>Build bespoke software solutions aligned with your unique business workflows.</p>
            </article>
            <article className="info-card">
              <h3>API Development</h3>
              <p>Design and implement RESTful APIs for seamless integration and data exchange.</p>
            </article>
            <article className="info-card">
              <h3>Database Design</h3>
              <p>Architect efficient databases to store and manage your application data.</p>
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
            <p className="eyebrow">Build With Us</p>
            <h2>Ready to bring your idea to life?</h2>
            <p>Let's collaborate on your next software development project.</p>
            <Link to="/contact" className="btn btn--large">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DevelopmentServices;
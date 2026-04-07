import { Link } from "react-router-dom";
import logo from "../assets/images/Futuristic eco-tech logo design.png";
import { companyInfo, highlights } from "../data/companyData";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <p className="eyebrow">Smart Innovation Partner</p>
          <h1>{companyInfo.name}</h1>
          <p className="lead">{companyInfo.tagline}</p>
          <p className="hero-copy">
            We deliver AI development, data services, SaaS products, digital platforms,
            and enterprise-ready technology support for modern businesses.
          </p>

          <div className="hero-actions">
            <Link className="btn" to="/services">
              Explore Services
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              Contact Us
            </Link>
          </div>

          <div className="hero-highlights">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual hero-visual--enhanced">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="hero-orb hero-orb--three" />
          <div className="hero-grid-lines" />
          <div className="hero-rings hero-rings--one" />
          <div className="hero-rings hero-rings--two" />
          <div className="hero-scan-line" />
          <img alt={companyInfo.name} src={logo} />
        </div>
      </div>
    </section>
  );
}

export default Hero;

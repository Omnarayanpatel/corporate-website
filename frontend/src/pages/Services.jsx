import { Link } from "react-router-dom";
import { companyInfo, services, serviceList } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import aiMLImage from "../assets/images/ai&ml_service.jfif";
import dataCollectionImage from "../assets/images/Data_Collection_Services.jfif";
import developmentImage from "../assets/images/Development_Services.jfif";
import cloudServicesImage from "../assets/images/Cloud_Services.jfif";
import marketingImage from "../assets/images/marketing.jfif";

function Services() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const contentReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  const getServiceIcon = (title) => {
    const icons = {
      "Data Annotation (Image, Text, Audio, Video)": "🖼️",
      "Medical Data Annotation": "🏥",
      "Data Classification": "📊",
      "AI Model Support": "🤖",
      "Transcription Services": "🎙️",
      "Image Data Collection": "📷",
      "Text Data Collection": "📝",
      "Audio Data Collection": "🔊",
      "Video Data Collection": "🎥",
      "Survey & Feedback Collection": "📋",
      "Website Development": "🌐",
      "Application Development": "📱",
      "Custom Software Development": "⚙️",
      "SaaS Solutions": "☁️",
      "Cloud Services": "🖥️",
      "Automation Solutions": "🔄",
      "Security Management": "🔒",
      "Digital Marketing": "📈",
      "Performance Marketing": "🎯"
    };
    return icons[title] || "✨";
  };

  const getServiceImage = (categoryTitle) => {
    const images = {
      "AI & ML Services": aiMLImage,
      "Data Collection Services": dataCollectionImage,
      "Development Services": developmentImage,
      "Business & Cloud Services": cloudServicesImage,
      "Marketing Services": marketingImage
    };
    return images[categoryTitle];
  };

  return (
    <main className="page-shell">
      <section 
        ref={heroReveal.ref} 
        className={`page-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>AI, data, software, cloud, and growth services in one ecosystem.</h1>
          <p className="lead">
            From annotation and AI model support to cloud systems, SaaS products, and performance marketing, 
            {companyInfo.shortName} delivers a practical technology stack for modern businesses.
          </p>
        </div>
      </section>

      <section 
        ref={contentReveal.ref} 
        className={`section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Service Categories</p>
            <h2>Summary of our core service areas</h2>
            <p>Quickly review each service category with a summary of what it covers and the key offerings inside.</p>
          </div>
          <div className="cards-grid service-groups-grid">
            {services.map((group) => {
              const serviceImage = getServiceImage(group.title);
              return (
                <article key={group.title} className="info-card service-summary-card">
                  {serviceImage && (
                    <div className="service-card-image">
                      <img 
                        src={serviceImage} 
                        alt={`${group.title} illustration`}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="service-group-card__header">
                    <span className="info-card__badge">{group.title}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="service-group-list">
                    {group.items.map((item) => (
                      <span key={item} className="service-tag">{item}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="service-card-link">Enquire Now →</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--visual-showcase">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Service Showcase</p>
            <h2>Our expertise in action</h2>
            <p>Explore some of our key service areas through visual examples</p>
          </div>
          <div className="visual-showcase-grid">
            <div className="showcase-item">
              <img src={aiMLImage} alt="AI & ML Services" loading="lazy" />
              <div className="showcase-overlay">
                <h4>AI & ML Services</h4>
                <p>End-to-end ML solutions and AI deployment</p>
              </div>
            </div>
            <div className="showcase-item">
              <img src={dataCollectionImage} alt="Data Collection Services" loading="lazy" />
              <div className="showcase-overlay">
                <h4>Data Collection</h4>
                <p>High-quality diverse datasets</p>
              </div>
            </div>
            <div className="showcase-item">
              <img src={developmentImage} alt="Development Services" loading="lazy" />
              <div className="showcase-overlay">
                <h4>Development</h4>
                <p>Custom software solutions</p>
              </div>
            </div>
            <div className="showcase-item">
              <img src={cloudServicesImage} alt="Cloud Services" loading="lazy" />
              <div className="showcase-overlay">
                <h4>Cloud Services</h4>
                <p>Scalable infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--summary">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">All Services</p>
            <h2>All service offerings at a glance</h2>
            <p>Below is a compact overview of every service we provide, grouped by category for fast scanning.</p>
          </div>
          <div className="service-summary-list">
            {serviceList.map((item) => (
              <div 
                key={`${item.category}-${item.title}`} 
                className="service-summary-item"
                data-category={item.category}
              >
                <div className="service-summary-item__icon">
                  {getServiceIcon(item.title)}
                </div>
                <div className="service-summary-item__content">
                  <span className="service-summary-title">{item.title}</span>
                  <span className="service-summary-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={ctaReveal.ref} 
        className={`section section--accent reveal-section ${ctaReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container text-center">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Collaborate With Us</p>
            <h2>Ready to scale your AI or Software operations?</h2>
            <p>Our team is ready to help you with custom workflows and production-ready solutions.</p>
            <Link to="/contact" className="btn btn--large">Get a Free Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;

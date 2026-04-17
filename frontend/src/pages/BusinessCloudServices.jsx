import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import cloudHeroImage from "../assets/images/Scalable Business Solutions in the Cloud.jfif";
import saasImage from "../assets/images/SaaS Solutions.jfif";
import cloudServicesImage from "../assets/images/Cloud Services.jfif";
import automationImage from "../assets/images/Automation Solutions.jfif";
import securityImage from "../assets/images/Security Management.jfif";
import businessIntelligenceImage from "../assets/images/Business Intelligence.jfif";

const cloudTracks = [
  {
    title: "SaaS Solutions",
    badge: "Product Layer",
    image: saasImage,
    imageAlt: "SaaS solution visual",
    summary:
      "We design SaaS products that centralize operations, reduce manual steps, and give teams a clearer digital workspace.",
    whatItIs:
      "A software platform delivered over the internet that helps users manage tasks, records, and workflows from one place.",
    howItWorks:
      "We map the user journey, build the product screens, connect the logic, and shape the system so it is easy to support.",
    bestFor: ["CRM", "HRMS", "Internal tools"],
  },
  {
    title: "Cloud Services",
    badge: "Infrastructure",
    image: cloudServicesImage,
    imageAlt: "Cloud services visual",
    summary:
      "We help teams organize cloud environments so apps, data, and services stay scalable, accessible, and easier to manage.",
    whatItIs:
      "Infrastructure planning and support for systems that need reliable hosting, deployment, and flexible growth.",
    howItWorks:
      "We assess the setup, organize environments, support deployment, and tune the stack for stability and performance.",
    bestFor: ["Hosting", "Deployment", "Scalable systems"],
  },
  {
    title: "Automation Solutions",
    badge: "Process Flow",
    image: automationImage,
    imageAlt: "Automation solutions visual",
    summary:
      "We replace repetitive steps with smart workflow automation so teams can move faster and reduce manual overhead.",
    whatItIs:
      "A structured automation layer that connects repeated business actions into cleaner, rule-based processes.",
    howItWorks:
      "We identify the manual steps, define the triggers, automate the flow, and test the results with real users.",
    bestFor: ["Approvals", "Follow-ups", "Task routing"],
  },
  {
    title: "Security Management",
    badge: "Protection",
    image: securityImage,
    imageAlt: "Security management visual",
    summary:
      "We help organizations keep cloud and software systems more controlled through practical security alignment and access discipline.",
    whatItIs:
      "The practices used to protect applications, users, and data while keeping the system reliable and manageable.",
    howItWorks:
      "We review roles, align access controls, tighten risky points, and support a safer operational baseline.",
    bestFor: ["Access control", "User protection", "System safety"],
  },
  {
    title: "Business Intelligence",
    badge: "Insights",
    image: businessIntelligenceImage,
    imageAlt: "Business intelligence visual",
    summary:
      "We shape dashboards and reporting views that turn raw business activity into clear information for decision-makers.",
    whatItIs:
      "A reporting and analytics layer that helps teams understand what is happening across the business.",
    howItWorks:
      "We collect the relevant data, structure the reporting view, and present insights in a way teams can act on.",
    bestFor: ["Dashboards", "KPIs", "Reporting"],
  },
];

const cloudHighlights = ["SaaS Platforms", "Scalable Hosting", "Workflow Automation", "Secure Delivery"];

function BusinessCloudServices() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const cardsReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero business-cloud-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="business-cloud-hero__grid">
            <div className="business-cloud-hero__content">
              <p className="eyebrow">Business & Cloud Services</p>
              <h1>Build connected business systems that can scale without feeling heavy.</h1>
              <p className="lead">
                {companyInfo.shortName} helps teams deliver SaaS products, cloud workflows, automation, security
                discipline, and reporting layers that are easier to run day to day.
              </p>
              <div className="careers-hero__actions">
                <Link to="/contact" className="btn">
                  Contact Us
                </Link>
                <Link to="/services" className="btn btn--secondary">
                  Explore Services
                </Link>
              </div>
              <div className="career-hero__chips business-cloud-hero__chips">
                {cloudHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <aside className="glass-panel business-cloud-hero__panel">
              <div className="business-cloud-hero__visual">
                <img src={cloudHeroImage} alt="Business and cloud services overview" loading="lazy" />
                <span className="business-cloud-hero__visual-badge">Cloud Ready</span>
              </div>
              <div className="business-cloud-hero__panel-copy">
                <p className="eyebrow">Why it matters</p>
                <h2>Cloud systems work best when product, automation, and visibility move together.</h2>
                <div className="business-cloud-hero__stats">
                  <div>
                    <strong>Product</strong>
                    <span>SaaS systems that make business tasks easier to manage.</span>
                  </div>
                  <div>
                    <strong>Operations</strong>
                    <span>Automation and workflows that reduce repetitive work.</span>
                  </div>
                  <div>
                    <strong>Insight</strong>
                    <span>Reporting and controls that help teams make faster decisions.</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        ref={cardsReveal.ref}
        className={`section business-cloud-section reveal-section ${cardsReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Service Tracks</p>
              <h2>Five business and cloud tracks with clear visuals and practical explanations.</h2>
            </div>
            <p>
              Each card shows what the service is, how it works, and where it fits into a real business environment.
            </p>
          </div>

          <div className="business-cloud-grid">
            {cloudTracks.map((track, index) => (
              <article
                key={track.title}
                className={`glass-panel business-cloud-card ${
                  index % 2 === 1 ? "business-cloud-card--reverse" : ""
                }`}
              >
                <div className="business-cloud-card__visual">
                  <img src={track.image} alt={track.imageAlt} loading="lazy" />
                  <span className="business-cloud-card__badge">{track.badge}</span>
                </div>

                <div className="business-cloud-card__content">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{track.title}</h3>
                  <p className="business-cloud-card__summary">{track.summary}</p>

                  <div className="business-cloud-card__blocks">
                    <div className="business-cloud-card__block">
                      <strong>What it is</strong>
                      <p>{track.whatItIs}</p>
                    </div>
                    <div className="business-cloud-card__block">
                      <strong>How it works</strong>
                      <p>{track.howItWorks}</p>
                    </div>
                  </div>

                  <div className="business-cloud-card__tags">
                    {track.bestFor.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
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
            <p className="eyebrow">Scale Smarter</p>
            <h2>Need a business system that feels lighter to run?</h2>
            <p>Let's shape the cloud, SaaS, and automation layers around how your team actually works.</p>
            <Link to="/contact" className="btn btn--large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BusinessCloudServices;

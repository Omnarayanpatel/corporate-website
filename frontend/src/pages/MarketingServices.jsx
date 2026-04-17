import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import marketingHeroImage from "../assets/images/Marketing1.jfif";
import digitalMarketingImage from "../assets/images/Digital Marketing.jfif";
import performanceMarketingImage from "../assets/images/Performance Marketing.jfif";
import seoMarketingImage from "../assets/images/SEO & SEM.jfif";
import socialMarketingImage from "../assets/images/Social Media Marketing.jfif";
import contentMarketingImage from "../assets/images/Content Marketing.jfif";

const marketingTracks = [
  {
    title: "Digital Marketing",
    badge: "Campaign Layer",
    image: digitalMarketingImage,
    imageAlt: "Digital marketing visual",
    summary:
      "We build digital campaigns that keep your brand visible across the channels where people actually pay attention.",
    whatItIs:
      "A coordinated marketing system for reach, awareness, and customer acquisition across digital touchpoints.",
    howItWorks:
      "We shape the message, map the channels, launch the campaign, and refine the creative based on response data.",
    bestFor: ["Awareness", "Multi-channel campaigns", "Lead generation"],
  },
  {
    title: "Performance Marketing",
    badge: "ROI Focus",
    image: performanceMarketingImage,
    imageAlt: "Performance marketing visual",
    summary:
      "We optimize campaigns around measurable outcomes so spend, clicks, and conversions stay tied to business goals.",
    whatItIs:
      "A results-driven approach that uses paid channels and analytics to chase tracked outcomes rather than vanity metrics.",
    howItWorks:
      "We define the target, test creative and audience combinations, monitor results, and scale what performs best.",
    bestFor: ["Paid campaigns", "Conversion tracking", "ROI optimisation"],
  },
  {
    title: "SEO & SEM",
    badge: "Search Visibility",
    image: seoMarketingImage,
    imageAlt: "SEO and SEM visual",
    summary:
      "We improve discoverability through search strategies that help your brand show up when your audience is already looking.",
    whatItIs:
      "Search engine optimization and search ads that improve how people find your business organically and through paid search.",
    howItWorks:
      "We research search terms, structure landing pages, refine content, and manage paid search visibility with intent in mind.",
    bestFor: ["Organic ranking", "Search ads", "High-intent traffic"],
  },
  {
    title: "Social Media Marketing",
    badge: "Brand Presence",
    image: socialMarketingImage,
    imageAlt: "Social media marketing visual",
    summary:
      "We shape social content and platform-specific messaging that feels native, engaging, and brand-consistent.",
    whatItIs:
      "A social-first communication layer that helps brands stay present, recognizable, and relevant across platforms.",
    howItWorks:
      "We define the voice, plan the content, publish consistently, and watch how the audience responds over time.",
    bestFor: ["Brand building", "Community engagement", "Social campaigns"],
  },
  {
    title: "Content Marketing",
    badge: "Story Layer",
    image: contentMarketingImage,
    imageAlt: "Content marketing visual",
    summary:
      "We create content that educates, builds trust, and supports the customer journey from discovery to decision.",
    whatItIs:
      "A structured content strategy built around useful information, brand storytelling, and audience trust.",
    howItWorks:
      "We identify topics, craft content formats, publish with purpose, and reuse the best ideas across channels.",
    bestFor: ["Thought leadership", "Educational content", "Inbound growth"],
  },
];

const marketingHighlights = [
  "Brand Reach",
  "Measured Growth",
  "Search Presence",
  "Content Strategy",
];

function MarketingServices() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const cardsReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero marketing-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="marketing-hero__grid">
            <div className="marketing-hero__content">
              <p className="eyebrow">Marketing Services</p>
              <h1>Build a brand that feels visible, credible, and worth remembering.</h1>
              <p className="lead">
                {companyInfo.shortName} creates marketing systems that mix strategy, content, search, and performance
                so your growth feels more intentional and less random.
              </p>
              <div className="careers-hero__actions">
                <Link to="/contact" className="btn">
                  Contact Us
                </Link>
                <Link to="/services" className="btn btn--secondary">
                  Explore Services
                </Link>
              </div>
              <div className="career-hero__chips marketing-hero__chips">
                {marketingHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <aside className="glass-panel marketing-hero__panel">
              <div className="marketing-hero__visual">
                <img src={marketingHeroImage} alt="Marketing strategy overview" loading="lazy" />
                <span className="marketing-hero__visual-badge">Brand Growth</span>
              </div>
              <div className="marketing-hero__panel-copy">
                <p className="eyebrow">Why it works</p>
                <h2>Good marketing feels consistent before it feels loud.</h2>
                <div className="marketing-hero__stats">
                  <div>
                    <strong>Clarity</strong>
                    <span>A message people can understand quickly.</span>
                  </div>
                  <div>
                    <strong>Reach</strong>
                    <span>The right channels to get the message in front of the right audience.</span>
                  </div>
                  <div>
                    <strong>Response</strong>
                    <span>Campaigns tuned to engagement, leads, and measurable action.</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        ref={cardsReveal.ref}
        className={`section marketing-tracks-section reveal-section ${cardsReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Service Tracks</p>
              <h2>Five marketing tracks shaped like a brand system, not a generic checklist.</h2>
            </div>
            <p>
              Each track explains the role it plays in the brand journey and shows a visual so the page feels more
              authentic and less templated.
            </p>
          </div>

          <div className="marketing-tracks-grid">
            {marketingTracks.map((track, index) => (
              <article
                key={track.title}
                className={`glass-panel marketing-track-card ${
                  index % 2 === 1 ? "marketing-track-card--reverse" : ""
                }`}
              >
                <div className="marketing-track-card__visual">
                  <img src={track.image} alt={track.imageAlt} loading="lazy" />
                  <span className="marketing-track-card__badge">{track.badge}</span>
                </div>

                <div className="marketing-track-card__content">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{track.title}</h3>
                  <p className="marketing-track-card__summary">{track.summary}</p>

                  <div className="marketing-track-card__blocks">
                    <div className="marketing-track-card__block">
                      <strong>What it is</strong>
                      <p>{track.whatItIs}</p>
                    </div>
                    <div className="marketing-track-card__block">
                      <strong>How it works</strong>
                      <p>{track.howItWorks}</p>
                    </div>
                  </div>

                  <div className="marketing-track-card__tags">
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
            <p className="eyebrow">Grow Your Brand</p>
            <h2>Need marketing that looks and feels more intentional?</h2>
            <p>Let's shape a strategy that fits your brand voice, your audience, and your growth goals.</p>
            <Link to="/contact" className="btn btn--large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MarketingServices;

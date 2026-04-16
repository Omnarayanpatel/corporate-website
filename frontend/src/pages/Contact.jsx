import { companyInfo } from "../data/companyData";

function Contact() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Let's build something intelligent together.</h1>
          <p className="lead">
            Reach out for AI-powered data services, SaaS platforms, business automation, or custom software collaboration.
          </p>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-layout contact-layout--unique">
          <div className="contact-column contact-column--visual">
            <div className="glass-panel contact-map-card">
              <div className="contact-map-card__header">
                <p className="eyebrow">Visit our office</p>
                <h2>{companyInfo.shortName}</h2>
                <p className="contact-map-card__address">{companyInfo.address}</p>
              </div>

              <div className="contact-map-card__body">
                <div className="contact-map-info">
                  <ul className="office-highlights office-highlights--compact">
                    <li><span>🏢</span> Collaborative AI and SaaS workspace</li>
                    <li><span>🛣️</span> Easy access from Ayodhya Bypass Road</li>
                    <li><span>⚡</span> On-site team for data, cloud and automation work</li>
                  </ul>

                  <a
                    className="map-cta-button"
                    href="https://maps.google.com?q=3rd+Floor+Elegant+Business+Square+Bhanpur+Ayodhya+Bypass+Road+Bhopal+Madhya+Pradesh+462037"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel contact-map-preview-card">
              <div className="contact-map-preview">
                <div className="contact-map-frame">
                  <iframe
                    title="Dhritii.ai Office Location"
                    src="https://maps.google.com/maps?q=3rd+Floor+Elegant+Business+Square+Bhanpur+Ayodhya+Bypass+Road+Bhopal+Madhya+Pradesh+462037&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="contact-visual-card__chip">Office Location</div>
                </div>
              </div>
              <p className="contact-visual-card__caption">
                A live map preview of our Bhopal office. Tap the button to open directions in Google Maps.
              </p>
            </div>

            <div className="glass-panel contact-mini-card contact-mini-card--focus">
              <span className="mini-chip">Fast response</span>
              <h3>Personalized support for every project</h3>
              <p>
                Our team reviews every inquiry and recommends the fastest path to launch, from data services to AI integration.
              </p>
              <div className="mini-card-grid">
                <div>
                  <strong>24h</strong>
                  <span>Reply time</span>
                </div>
                <div>
                  <strong>4x</strong>
                  <span>Faster onboarding</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-column contact-column--details">
            <div className="glass-panel contact-info-card contact-info-card--featured">
              <p className="eyebrow">Direct Contact</p>
              <h2>Talk to our specialists</h2>

              <div className="contact-details-grid">
                <div className="contact-detail-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <strong>Email Support</strong>
                    <p>{companyInfo.email}</p>
                    <small>Response within 24 hours</small>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <strong>Phone Support</strong>
                    <small>Mon-Sat, 10AM-7PM IST</small>
                  </div>
                </div>
              </div>

              <div className="contact-cta-row contact-cta-row--wide">
                <a href={`mailto:${companyInfo.email}`} className="contact-cta-link">
                  Email Us
                </a>
                <a href={`tel:${companyInfo.phone}`} className="contact-cta-link contact-cta-link--secondary">
                  Call Now
                </a>
              </div>

              <div className="contact-expertise-section">
                <h3>Core services</h3>
                <div className="service-highlights service-highlights--compact">
                  <span className="service-highlight">🤖 AI Automation</span>
                  <span className="service-highlight">📊 Data Pipeline</span>
                  <span className="service-highlight">☁️ Cloud Ops</span>
                  <span className="service-highlight">📱 SaaS Dev</span>
                </div>
              </div>
            </div>

            <div className="glass-panel contact-form-card">
              <p className="eyebrow">Send a message</p>
              <h2>Start your project conversation</h2>
              <p className="contact-intro">
                Tell us a bit about your need and we’ll respond within one business day.
              </p>

              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="contact-name">
                  <span>Name</span>
                  <input id="contact-name" type="text" name="name" placeholder="Your name" required />
                </label>
                <label htmlFor="contact-email">
                  <span>Email</span>
                  <input id="contact-email" type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label htmlFor="contact-phone">
                  <span>Phone</span>
                  <input id="contact-phone" type="tel" name="phone" placeholder="+91 755 455 7709" />
                </label>
                <label htmlFor="contact-message">
                  <span>Project details</span>
                  <textarea id="contact-message" name="message" placeholder="Describe your idea or challenge" required />
                </label>
                <button type="submit" className="contact-form-submit">
                  Send Inquiry
                </button>
              </form>

              <div className="contact-promise">
                <div className="promise-item">
                  <span className="promise-icon">🔒</span>
                  <span>Data privacy assured</span>
                </div>
                <div className="promise-item">
                  <span className="promise-icon">⚡</span>
                  <span>Fast response guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

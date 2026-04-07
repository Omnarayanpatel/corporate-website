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
        <div className="container contact-layout contact-layout--rich">
          <div className="contact-visual-card">
            <div className="contact-visual-card__media">
              <div className="contact-visual-card__grid" />
              <div className="contact-visual-card__chip">Office / Map Image</div>
              <div className="contact-visual-card__pin" />
              <div className="contact-visual-card__route" />
            </div>
            <div className="contact-visual-card__details glass-panel">
              <p className="eyebrow">Office Address</p>
              <h2>{companyInfo.shortName}</h2>
              <p>{companyInfo.address}</p>
            </div>
          </div>

          <div className="contact-side-stack">
            <div className="glass-panel contact-info-card">
              <p className="eyebrow">Direct Contact</p>
              <h2>Speak with our team</h2>
              <p>Email: {companyInfo.email}</p>
              <p>Phone: {companyInfo.phone}</p>
              <p>
                We support annotation, AI, SaaS, enterprise software, cloud, and digital growth requirements.
              </p>
            </div>

            <div className="contact-form-card">
              <p className="eyebrow">Inquiry Form</p>
              <h2>Future-ready contact form block</h2>
              <div className="contact-form-placeholder">
                <div className="contact-form-placeholder__field" />
                <div className="contact-form-placeholder__field" />
                <div className="contact-form-placeholder__field contact-form-placeholder__field--wide" />
                <div className="contact-form-placeholder__button">Send Inquiry</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;

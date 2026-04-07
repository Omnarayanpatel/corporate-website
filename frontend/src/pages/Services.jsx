import { companyInfo, services } from "../data/companyData";

function Services() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>AI, data, software, cloud, and growth services in one ecosystem.</h1>
          <p className="lead">
            From annotation and AI model support to cloud systems, SaaS products, and performance marketing, {companyInfo.shortName} delivers a practical technology stack for modern businesses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cards-grid service-groups-grid">
          {services.map((group) => (
            <article key={group.title} className="info-card service-group-card">
              <span className="info-card__badge">{group.title}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="service-group-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;

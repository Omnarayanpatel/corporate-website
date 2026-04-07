import { careerPoints } from "../data/companyData";

function Careers() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Careers</p>
          <h1>Join a team building AI and digital products.</h1>
          <p className="lead">
            We are shaping products and services across AI, automation, software, and
            digital transformation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {careerPoints.map((point, index) => (
              <article key={point} className="info-card">
                <span className="info-card__badge">Role Track 0{index + 1}</span>
                <h3>Grow With Us</h3>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Careers;

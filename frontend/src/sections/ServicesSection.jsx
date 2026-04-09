import Card from "../components/common/Card";
import { featuredServices } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function ServicesSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section ref={ref} className={`section section--services-preview reveal-section ${isVisible ? "is-visible" : ""}`}>
      <div className="container">
        <p className="eyebrow">Services</p>
        <div className="section-heading">
          <div>
            <h2>Annotation, software, cloud, automation, and growth support under one brand.</h2>
          </div>
          <p>
            Dhritii.ai combines AI data work, product development, business systems,
            and performance services into one practical execution layer.
          </p>
        </div>

        <div className="cards-grid">
          {featuredServices.map((service) => (
            <Card
              key={service.title}
              badge={service.badge}
              title={service.title}
              description={service.description}
              mediaLabel={service.mediaLabel}
              mediaTone={service.tone}
              mediaImage={service.mediaImage}
              mediaAlt={service.mediaAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

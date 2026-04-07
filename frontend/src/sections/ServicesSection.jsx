import Card from "../components/common/Card";
import { serviceList } from "../data/companyData";

const serviceMedia = [
  { label: "Vision Data", tone: "blue" },
  { label: "Medical AI", tone: "green" },
  { label: "Cloud Stack", tone: "cyan" },
  { label: "App Build", tone: "blue" },
  { label: "Automation", tone: "green" },
  { label: "Growth Ops", tone: "cyan" },
];

function ServicesSection() {
  return (
    <section className="section section--services-preview">
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
          {serviceList.slice(0, 6).map((service, index) => (
            <Card
              key={service.title}
              badge={service.category}
              title={service.title}
              description={service.description}
              mediaLabel={serviceMedia[index]?.label}
              mediaTone={serviceMedia[index]?.tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

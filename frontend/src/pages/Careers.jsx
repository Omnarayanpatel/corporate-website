import { useState } from "react";
import { companyInfo, careerPoints } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import careersHeroImage from "../assets/images/career.jfif";
import whyWeStandOutImage from "../assets/images/Why_We_Stand_Out.jfif";
import frontendDeveloperImage from "../assets/images/Frontend_Developer.jfif";
import softwareDeveloperImage from "../assets/images/Software_Developer.jfif";
import fullStackDeveloperImage from "../assets/images/full_stack_dev.jfif";
import seniorSoftwareDeveloperImage from "../assets/images/Senior_Software_Developer.jfif";
import backendDeveloperImage from "../assets/images/Backend_Developer.jfif";
import aiDataImage from "../assets/images/ai_data.jfif";
import digitalMarketingImage from "../assets/images/Digital_Marketing_Ex.jfif";
import businessDevelopmentInternImage from "../assets/images/Business_Development_Intern.jfif";
import benefitRocketImage from "../assets/images/benefit_rocket.svg";
import benefitTargetImage from "../assets/images/benefit_target.svg";
import benefitShieldImage from "../assets/images/benefit_shield.svg";

const openRoles = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Build polished, responsive interfaces for AI and SaaS products.",
    skills: ["React", "UI polish", "API integration"],
  },
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Work on product features, internal tools, and customer-facing software experiences.",
    skills: ["JavaScript", "Problem solving", "Product delivery"],
  },
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Handle both frontend and backend work across modern web applications and SaaS products.",
    skills: ["React", "Node.js", "APIs"],
  },
  {
    title: "Senior Software Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Lead technical implementation, guide architecture decisions, and support team execution.",
    skills: ["System design", "Mentoring", "Architecture"],
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Create reliable APIs and application logic for production workflows.",
    skills: ["Node.js", "Databases", "System design"],
  },
  {
    title: "AI / Data Associate",
    type: "Project-based",
    location: "Onsite",
    description: "Support annotation, data quality, and model-ready dataset workflows.",
    skills: ["Data labeling", "QA", "Attention to detail"],
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Hybrid",
    description: "Run campaigns and growth experiments for product and service visibility.",
    skills: ["Performance marketing", "Content", "Lead gen"],
  },
  {
    title: "Business Development Intern",
    type: "Internship",
    location: "Onsite / Hybrid",
    description: "Assist with outreach, lead tracking, and client communication.",
    skills: ["Communication", "CRM", "Sales support"],
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    description: "Share your profile, role preference, and the work you want to do.",
  },
  {
    step: "02",
    title: "Screening",
    description: "We review your background, strengths, and fit for the opportunity.",
  },
  {
    step: "03",
    title: "Conversation",
    description: "Meet the team, discuss expectations, and align on the next steps.",
  },
];

const benefitHighlights = ["AI Projects", "SaaS Products", "Client Delivery", "Growth Culture"];

const careerBenefits = [
  {
    image: benefitRocketImage,
    imageAlt: "Rocket icon for Ship Real Products",
    tag: "Track 01",
    title: "Ship Real Products",
    metric: "Hands-on projects",
    description: careerPoints[0],
    featured: true,
  },
  {
    image: benefitTargetImage,
    imageAlt: "Target icon for Accelerate Your Growth",
    tag: "Track 02",
    title: "Accelerate Your Growth",
    metric: "Fast learning curve",
    description: careerPoints[1],
  },
  {
    image: benefitShieldImage,
    imageAlt: "Shield icon for Take Full Ownership",
    tag: "Track 03",
    title: "Take Full Ownership",
    metric: "High responsibility",
    description: careerPoints[2],
  },
];

const roleImages = {
  "Frontend Developer": frontendDeveloperImage,
  "Software Developer": softwareDeveloperImage,
  "Full Stack Developer": fullStackDeveloperImage,
  "Senior Software Developer": seniorSoftwareDeveloperImage,
  "Backend Developer": backendDeveloperImage,
  "AI / Data Associate": aiDataImage,
  "Digital Marketing Executive": digitalMarketingImage,
  "Business Development Intern": businessDevelopmentInternImage,
};

function Careers() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const benefitsReveal = useRevealOnScroll();
  const rolesReveal = useRevealOnScroll();
  const processReveal = useRevealOnScroll();
  const formReveal = useRevealOnScroll();
  const [selectedRole, setSelectedRole] = useState(openRoles[0].title);

  const selectedRoleDetails = openRoles.find((role) => role.title === selectedRole) || openRoles[0];
  const selectedRoleImage = roleImages[selectedRole] || careersHeroImage;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero careers-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="careers-hero__grid">
            <div className="careers-hero__content">
              <p className="eyebrow">Careers</p>
              <h1>Build AI, SaaS, and automation products with a fast-moving team.</h1>
              <p className="lead">
                We are shaping practical technology products and service experiences across AI, software,
                cloud, and digital growth.
              </p>

              <div className="careers-hero__actions">
                <a href="#apply" className="btn">
                  Apply Now
                </a>
                <a href="#roles" className="btn btn--secondary">
                  Explore Roles
                </a>
              </div>

              <div className="career-hero__chips">
                <span>AI & ML</span>
                <span>SaaS Products</span>
                <span>Onsite / Hybrid</span>
                <span>Learning Culture</span>
              </div>
            </div>

            <div className="glass-panel careers-hero__panel">
              <div className="careers-hero__image">
                <img src={careersHeroImage} alt="Career opportunity visual for Dhritii.ai" loading="lazy" />
                <div className="careers-hero__image-badge">Join Our Team</div>
              </div>
              <div className="careers-hero__panel-copy">
                <p className="eyebrow">Why join Dhritii.ai</p>
                <h2>Work on real products that ship.</h2>
                <div className="careers-hero__metrics">
                  <div>
                    <strong>AI + SaaS</strong>
                    <span>Work across product and service lines</span>
                  </div>
                  <div>
                    <strong>Ownership</strong>
                    <span>Take responsibility for visible outcomes</span>
                  </div>
                  <div>
                    <strong>Growth</strong>
                    <span>Learn by doing with supportive teammates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={benefitsReveal.ref}
        className={`section careers-benefits-section reveal-section ${benefitsReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="careers-benefits__header">
            <div className="section-heading careers-benefits__heading">
              <div>
                <p className="eyebrow">Why We Stand Out</p>
                <h2>What your career journey can look like here</h2>
              </div>
              <p>
                A practical environment where you get exposure to product thinking, client work, and execution.
              </p>
            </div>

            <aside className="careers-benefits__visual glass-panel">
              <div className="careers-benefits__visual-image">
                <img src={whyWeStandOutImage} alt="Why We Stand Out visual for Dhritii.ai" loading="lazy" />
              </div>
              <div className="careers-benefits__visual-copy">
                <span className="careers-benefits__visual-badge">Brand Culture</span>
                <h3>Build, learn, ship, repeat.</h3>
                <p>Join a team where AI, SaaS, and software delivery move together.</p>
              </div>
            </aside>
          </div>

          <div className="careers-benefits__strip" aria-label="Career highlights">
            {benefitHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="careers-benefits-grid">
            {careerBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`info-card careers-benefit-card ${benefit.featured ? "careers-benefit-card--featured" : ""}`}
              >
                <div className="careers-benefit-card__top">
                  <span className="careers-benefit-card__icon">
                    <img src={benefit.image} alt={benefit.imageAlt} loading="lazy" />
                  </span>
                  <span className="info-card__badge">{benefit.tag}</span>
                </div>
                <h3>{benefit.title}</h3>
                <p className="careers-benefit-card__metric">{benefit.metric}</p>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="roles"
        ref={rolesReveal.ref}
        className={`section careers-roles-section reveal-section ${rolesReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Open Roles</p>
              <h2>Pick the track that matches your strengths</h2>
            </div>
            <p>
              We are open to talented people who can contribute to products, services, and growth.
            </p>
          </div>

          <div className="careers-roles-layout">
            <div className="careers-role-list">
              {openRoles.map((role) => (
                <button
                  key={role.title}
                  type="button"
                  className={`careers-role-card ${selectedRole === role.title ? "is-active" : ""}`}
                  onClick={() => setSelectedRole(role.title)}
                >
                  <div className="careers-role-card__top">
                    <strong>{role.title}</strong>
                    <span>{role.type}</span>
                  </div>
                  <p>{role.description}</p>
                  <div className="careers-role-card__meta">
                    <span>{role.location}</span>
                  </div>
                  <div className="careers-role-card__skills">
                    {role.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <aside className="glass-panel careers-role-preview">
              <p className="eyebrow">Selected Role</p>
              <div className="careers-role-preview__image">
                <img src={selectedRoleImage} alt={`${selectedRoleDetails.title} visual`} loading="lazy" />
              </div>
              <h3>{selectedRoleDetails.title}</h3>
              <p className="careers-role-preview__type">{selectedRoleDetails.type}</p>
              <p>{selectedRoleDetails.description}</p>
              <div className="careers-role-preview__stack">
                <span>{selectedRoleDetails.location}</span>
                {selectedRoleDetails.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <p className="careers-role-preview__note">
                Not seeing the exact role? Send your profile and we will consider the best fit.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section
        ref={processReveal.ref}
        className={`section reveal-section ${processReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Hiring Process</p>
              <h2>Simple and respectful from first click to conversation</h2>
            </div>
            <p>Clear steps keep things fast for candidates and our team.</p>
          </div>
          <div className="careers-process-grid">
            {hiringSteps.map((item) => (
              <article key={item.step} className="glass-panel careers-process-card">
                <span className="careers-process-card__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="apply"
        ref={formReveal.ref}
        className={`section section--accent careers-apply-section reveal-section ${formReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="careers-apply-layout">
            <div className="careers-apply-copy">
              <p className="eyebrow">Apply Now</p>
              <h2>Introduce yourself and tell us where you want to grow.</h2>
              <p>
                Share your profile, preferred role, and the kind of projects you want to work on.
                We will review it and get back to you.
              </p>

              <div className="careers-apply-highlights">
                <div>
                  <strong>Email</strong>
                  <span>{companyInfo.email}</span>
                </div>
                <div>
                  <strong>Phone</strong>
                  <span>{companyInfo.phone}</span>
                </div>
                <div>
                  <strong>Location</strong>
                  <span>Bhopal, Madhya Pradesh</span>
                </div>
              </div>
            </div>

            <div className="glass-panel careers-apply-card">
              <form className="careers-apply-form" onSubmit={handleSubmit}>
                <label>
                  <span>Full Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="tel" name="phone" placeholder="+91 98765 43210" />
                </label>
                <label>
                  <span>Role</span>
                  <select name="role" value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)}>
                    {openRoles.map((role) => (
                      <option key={role.title} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Portfolio / LinkedIn</span>
                  <input type="url" name="profileLink" placeholder="https://..." />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="Tell us about your background, strengths, and preferred work style"
                    required
                  />
                </label>

                <button type="submit" className="btn btn--large careers-apply-submit">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;

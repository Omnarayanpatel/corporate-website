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
    overview: "Create clean, fast, and accessible UI experiences for customer-facing products.",
    responsibilities: [
      "Build reusable React components",
      "Work closely with design and backend teams",
      "Improve UI responsiveness and polish",
    ],
    idealIf: ["UI detail", "React", "Component thinking"],
    experience: "1 to 3 years",
    skills: ["React", "UI polish", "API integration"],
  },
  {
    title: "Software Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Work on product features, internal tools, and customer-facing software experiences.",
    overview: "Build practical software features that support day-to-day product delivery.",
    responsibilities: [
      "Develop product features and internal tools",
      "Debug issues and improve stability",
      "Collaborate with cross-functional teams",
    ],
    idealIf: ["Problem solving", "Product delivery", "Adaptability"],
    experience: "1 to 3 years",
    skills: ["JavaScript", "Problem solving", "Product delivery"],
  },
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Handle both frontend and backend work across modern web applications and SaaS products.",
    overview: "Own complete features across the stack, from interface to API and data flow.",
    responsibilities: [
      "Build frontend and backend feature logic",
      "Connect APIs and data services",
      "Ship end-to-end product improvements",
    ],
    idealIf: ["React + Node", "APIs", "Full ownership"],
    experience: "2 to 4 years",
    skills: ["React", "Node.js", "APIs"],
  },
  {
    title: "Senior Software Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Lead technical implementation, guide architecture decisions, and support team execution.",
    overview: "Lead delivery, guide architecture, and help the team make practical technical choices.",
    responsibilities: [
      "Make architecture and implementation decisions",
      "Review code and mentor teammates",
      "Drive delivery quality and consistency",
    ],
    idealIf: ["System design", "Mentoring", "Leadership"],
    experience: "4+ years",
    skills: ["System design", "Mentoring", "Architecture"],
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Bhopal / Hybrid",
    description: "Create reliable APIs and application logic for production workflows.",
    overview: "Build the service layer that powers product workflows and internal systems.",
    responsibilities: [
      "Develop secure and scalable APIs",
      "Work with databases and business logic",
      "Improve application performance and reliability",
    ],
    idealIf: ["Node.js", "Databases", "API design"],
    experience: "1 to 4 years",
    skills: ["Node.js", "Databases", "System design"],
  },
  {
    title: "AI / Data Associate",
    type: "Project-based",
    location: "Onsite",
    description: "Support annotation, data quality, and model-ready dataset workflows.",
    overview: "Help prepare and verify data so AI models can learn from accurate inputs.",
    responsibilities: [
      "Annotate and review datasets",
      "Check quality and consistency",
      "Support model-ready data preparation",
    ],
    idealIf: ["Attention to detail", "QA mindset", "Data work"],
    experience: "Freshers welcome",
    skills: ["Data labeling", "QA", "Attention to detail"],
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Hybrid",
    description: "Run campaigns and growth experiments for product and service visibility.",
    overview: "Help the brand grow through campaigns, content, and performance marketing.",
    responsibilities: [
      "Plan and manage digital campaigns",
      "Support content and lead generation",
      "Track performance and improve outcomes",
    ],
    idealIf: ["Performance marketing", "Content", "Lead generation"],
    experience: "1 to 3 years",
    skills: ["Performance marketing", "Content", "Lead gen"],
  },
  {
    title: "Business Development Intern",
    type: "Internship",
    location: "Onsite / Hybrid",
    description: "Assist with outreach, lead tracking, and client communication.",
    overview: "Support outreach and client communication while learning sales and business workflows.",
    responsibilities: [
      "Assist in outreach and follow-ups",
      "Track leads and client interactions",
      "Support business development coordination",
    ],
    idealIf: ["Communication", "CRM", "Learning mindset"],
    experience: "Students / freshers",
    skills: ["Communication", "CRM", "Sales support"],
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    description: "Share your profile, role preference, and the work you want to do.",
    meta: "5 min",
    tags: ["Resume", "Role choice", "Contact"],
  },
  {
    step: "02",
    title: "Screening",
    description: "We review your background, strengths, and fit for the opportunity.",
    meta: "1-2 days",
    tags: ["Profile review", "Shortlist", "Skill fit"],
  },
  {
    step: "03",
    title: "Conversation",
    description: "Meet the team, discuss expectations, and align on the next steps.",
    meta: "30-45 min",
    tags: ["Interview", "Team chat", "Next steps"],
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
  const [customRoleName, setCustomRoleName] = useState("");
  const [resumeFileName, setResumeFileName] = useState("No file selected");

  const selectedRoleDetails =
    selectedRole === "Other"
      ? {
          title: customRoleName.trim() || "Other Role",
          type: "Custom",
          location: "Flexible",
          description: "Tell us which role you are looking for and we will review the fit.",
          overview: "Use this option when your preferred role is not listed above.",
          responsibilities: [
            "Share the exact role title",
            "Mention the kind of work you want to do",
            "Add any must-have skills or tools",
          ],
          idealIf: ["Clear role intent", "Relevant skills", "Good fit for custom hiring"],
          experience: "Custom",
          skills: [customRoleName.trim() || "Other"],
        }
      : openRoles.find((role) => role.title === selectedRole) || openRoles[0];
  const selectedRoleImage = roleImages[selectedRole] || careersHeroImage;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];
    setResumeFileName(file ? file.name : "No file selected");
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    if (event.target.value !== "Other") {
      setCustomRoleName("");
    }
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
              <p className="careers-role-preview__overview">{selectedRoleDetails.overview}</p>
              <div className="careers-role-preview__meta-grid">
                <div>
                  <span>Experience</span>
                  <strong>{selectedRoleDetails.experience}</strong>
                </div>
                <div>
                  <span>Work Mode</span>
                  <strong>{selectedRoleDetails.location}</strong>
                </div>
              </div>
              <div className="careers-role-preview__section">
                <p className="careers-role-preview__section-title">What you will do</p>
                <ul className="careers-role-preview__list">
                  {selectedRoleDetails.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="careers-role-preview__section">
                <p className="careers-role-preview__section-title">Good fit if you have</p>
                <div className="careers-role-preview__stack">
                  {selectedRoleDetails.idealIf.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
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
          <div className="section-heading careers-process-heading">
            <div>
              <p className="eyebrow">Hiring Process</p>
              <h2>Simple, clear, and respectful from first click to conversation</h2>
            </div>
            <div className="careers-process-heading__note">
              <p>Clear steps keep things fast for candidates and our team.</p>
              <span>We keep the process practical and easy to follow.</span>
            </div>
          </div>
          <div className="careers-process-grid">
            {hiringSteps.map((item) => (
              <article key={item.step} className="glass-panel careers-process-card">
                <div className="careers-process-card__top">
                  <span className="careers-process-card__step">{item.step}</span>
                  <span className="careers-process-card__meta">{item.meta}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="careers-process-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="careers-process-footer">
            <p>Need a faster response? Mention your preferred role clearly in the form and we will prioritize it.</p>
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
                  <select name="role" value={selectedRole} onChange={handleRoleChange}>
                    {openRoles.map((role) => (
                      <option key={role.title} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </label>
                {selectedRole === "Other" && (
                  <label>
                    <span>Other Role</span>
                    <input
                      type="text"
                      name="otherRole"
                      placeholder="Enter the role you're looking for"
                      value={customRoleName}
                      onChange={(event) => setCustomRoleName(event.target.value)}
                    />
                  </label>
                )}
                <label>
                  <span>Portfolio / LinkedIn</span>
                  <input type="url" name="profileLink" placeholder="https://..." />
                </label>
                <label>
                  <span>Resume Upload</span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                  />
                  <small className="careers-apply-form__helper">
                    Upload your resume in PDF, DOC, or DOCX format.
                  </small>
                  <span className="careers-apply-form__file-name">{resumeFileName}</span>
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

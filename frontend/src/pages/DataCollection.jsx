import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import dataCollectionHeroImage from "../assets/images/data_coll.jfif";
import imageCollectionImage from "../assets/images/Image Data Collection.jfif";
import textCollectionImage from "../assets/images/Text Data Collection.jfif";
import audioCollectionImage from "../assets/images/Audio Data Collection.jfif";
import videoCollectionImage from "../assets/images/Video Data Collection.jfif";
import surveyCollectionImage from "../assets/images/Survey & Feedback Collection.jfif";

const collectionServices = [
  {
    title: "Image Data Collection",
    badge: "Visual Data",
    image: imageCollectionImage,
    imageAlt: "Image data collection workflow",
    summary:
      "We gather image datasets that support computer vision, object detection, segmentation, and quality-focused AI training.",
    whatItIs:
      "Source, organize, and curate image samples that represent the real world your model needs to understand.",
    howItWorks:
      "We define the target scene, collect diverse examples, clean duplicates, review quality, and package the output in a training-ready format.",
    useWhen: ["Object detection", "Scene understanding", "Training datasets"],
  },
  {
    title: "Text Data Collection",
    badge: "Language Data",
    image: textCollectionImage,
    imageAlt: "Text data collection workflow",
    summary:
      "We collect text from forms, documents, reviews, chats, and web sources to support NLP, LLM, and search systems.",
    whatItIs:
      "A structured way to capture text samples that help your model learn tone, intent, entities, and context.",
    howItWorks:
      "We define the sources, extract and clean the text, remove noise, and prepare it for annotation or direct training use.",
    useWhen: ["LLM training", "Intent detection", "Search understanding"],
  },
  {
    title: "Audio Data Collection",
    badge: "Speech Data",
    image: audioCollectionImage,
    imageAlt: "Audio data collection workflow",
    summary:
      "We collect voice samples, call recordings, and speech snippets for transcription, speech recognition, and voice AI.",
    whatItIs:
      "Audio capture that reflects real speakers, accents, environments, and use cases for speech systems.",
    howItWorks:
      "We plan sampling rules, capture clean audio, check quality, and align files for transcription or speech-model training.",
    useWhen: ["Voice assistants", "ASR", "Call analytics"],
  },
  {
    title: "Video Data Collection",
    badge: "Motion Data",
    image: videoCollectionImage,
    imageAlt: "Video data collection workflow",
    summary:
      "We capture video datasets for motion analysis, action detection, surveillance, autonomous systems, and research.",
    whatItIs:
      "Frame-based video content that can be analyzed by models for movement, object tracking, and sequence learning.",
    howItWorks:
      "We select scenarios, collect usable clips, verify frame quality, and prepare the data for analysis or annotation.",
    useWhen: ["Action detection", "Tracking", "Sequence training"],
  },
  {
    title: "Survey & Feedback Collection",
    badge: "Human Insight",
    image: surveyCollectionImage,
    imageAlt: "Survey and feedback collection workflow",
    summary:
      "We structure surveys, interviews, and feedback capture so you can turn human insight into useful product data.",
    whatItIs:
      "A practical way to collect opinions, ratings, and structured responses from users, teams, or target groups.",
    howItWorks:
      "We define the question flow, collect responses, clean the dataset, and organize it for analytics or research.",
    useWhen: ["Customer insight", "Research studies", "Feedback loops"],
  },
];

const heroHighlights = [
  "Source Planning",
  "Quality Review",
  "Ethical Capture",
  "Training Ready",
];

function DataCollection() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const contentReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero data-collection-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="data-collection-hero__grid">
            <div className="data-collection-hero__content">
              <p className="eyebrow">Data Collection Services</p>
              <h1>Gather training-ready data for AI, product, and research workflows.</h1>
              <p className="lead">
                {companyInfo.shortName} helps teams collect and organize high-quality datasets across image, text,
                audio, video, and feedback-driven use cases.
              </p>
              <div className="careers-hero__actions">
                <Link to="/contact" className="btn">
                  Contact Us
                </Link>
                <Link to="/services" className="btn btn--secondary">
                  Explore Services
                </Link>
              </div>
              <div className="career-hero__chips">
                {heroHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <aside className="glass-panel data-collection-hero__panel">
              <div className="data-collection-hero__visual">
                <img src={dataCollectionHeroImage} alt="Data collection overview visual" loading="lazy" />
                <span className="data-collection-hero__visual-badge">Data Collection</span>
              </div>
              <p className="eyebrow">Why it matters</p>
              <h2>Better source data means better model outcomes.</h2>
              <div className="data-collection-hero__stats">
                <div>
                  <strong>Diversity</strong>
                  <span>Real-world samples across conditions, languages, and formats</span>
                </div>
                <div>
                  <strong>Quality</strong>
                  <span>Cleaning, review, and selection before delivery</span>
                </div>
                <div>
                  <strong>Scale</strong>
                  <span>Data collection workflows designed for growing needs</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        ref={contentReveal.ref}
        className={`section data-collection-section reveal-section ${contentReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Service Tracks</p>
              <h2>Five collection tracks, each with its own workflow and visual.</h2>
            </div>
            <p>
              Each service explains what we collect, how it is gathered, and why it is useful for AI or business
              systems.
            </p>
          </div>

          <div className="data-collection-stack">
            {collectionServices.map((service, index) => (
              <article
                key={service.title}
                className={`glass-panel data-collection-card ${
                  index % 2 === 1 ? "data-collection-card--reverse" : ""
                }`}
              >
                <div className="data-collection-card__visual">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                  <span className="data-collection-card__badge">{service.badge}</span>
                </div>

                <div className="data-collection-card__content">
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{service.title}</h3>
                  <p className="data-collection-card__summary">{service.summary}</p>

                  <div className="data-collection-card__blocks">
                    <div className="data-collection-card__block">
                      <strong>What it is</strong>
                      <p>{service.whatItIs}</p>
                    </div>
                    <div className="data-collection-card__block">
                      <strong>How it works</strong>
                      <p>{service.howItWorks}</p>
                    </div>
                  </div>

                  <div className="data-collection-card__tags">
                    {service.useWhen.map((tag) => (
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
            <p className="eyebrow">Start Collecting</p>
            <h2>Need a dataset built for your next AI project?</h2>
            <p>
              Let's talk about source types, quality requirements, and the exact collection workflow your team needs.
            </p>
            <Link to="/contact" className="btn btn--large">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DataCollection;

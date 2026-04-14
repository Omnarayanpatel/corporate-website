import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import aiHeroImage from "../assets/images/ai_tool.jfif";
import imageAnnotationCompaniesImage from "../assets/images/image-annotation-companies.webp";
import aiAnnotationImage from "../assets/images/ai_annotation.jpg";
import textAnnoImage from "../assets/images/text_anno.jpg";
import audioAnnoImage from "../assets/images/audio_anno.jfif";
import videoAnnoImage from "../assets/images/video_anno_img.jfif";
import medicalAnnotationImage from "../assets/images/medical-data-annotation.webp";
import classificationImage from "../assets/images/data_class.jfif";
import modelSupportImage from "../assets/images/ai_model.jfif";
import transcriptionImage from "../assets/images/Transcription.jfif";

const annotationWorkflow = [
  {
    step: "01",
    title: "Understand the task",
    description: "We define the label set, edge cases, accuracy rules, and the final output format before work begins.",
  },
  {
    step: "02",
    title: "Annotate the data",
    description: "Our team labels images, text, audio, or video with clear instructions and consistent QA checkpoints.",
  },
  {
    step: "03",
    title: "Review and refine",
    description: "We validate the output, fix edge cases, and prepare a clean dataset for model training or testing.",
  },
];

const annotationTypes = [
  {
    title: "Image Annotation",
    description: "Bounding boxes, polygons, keypoints, and segmentation for computer vision training.",
    detail:
      "Use this when your AI needs to detect objects, read scenes, identify defects, or understand medical scans.",
    image: imageAnnotationCompaniesImage,
  },
  {
    title: "Text Annotation",
    description: "Entity tagging, sentiment labels, intent detection, and text categorization workflows.",
    detail:
      "Use this for chatbots, LLM training, moderation systems, search understanding, and document intelligence.",
    image: textAnnoImage,
  },
  {
    title: "Audio Annotation",
    description: "Speech transcription, speaker labeling, and audio event tagging for voice AI systems.",
    detail:
      "Use this for call-center analytics, speech-to-text, voice assistants, and sound classification.",
    image: audioAnnoImage,
  },
  {
    title: "Video Annotation",
    description: "Frame-level tagging for tracking, action detection, and sequence-based model training.",
    detail:
      "Use this for surveillance, sports analytics, autonomous systems, and any task that needs motion understanding.",
    image: videoAnnoImage,
  },
];

const aiServiceDetails = [
  {
    id: "data-annotation",
    badge: "Foundation Service",
    title: "Data Annotation",
    intro:
      "Data annotation is the process of labeling raw data so AI models can learn from it correctly. It is the foundation for computer vision, NLP, speech AI, and multimodal systems.",
    whatItIs:
      "We mark up raw images, documents, audio clips, or videos with structured labels that machines can read and learn from.",
    howItWorks:
      "We define the annotation rules, label the dataset, run QA reviews, and return a clean export that is ready for model training.",
    whyItMatters:
      "Better labels create better models. Clean annotation improves accuracy, consistency, and long-term model performance.",
    image: aiAnnotationImage,
    alt: "AI annotation workflow for AI training",
    chips: ["Bounding boxes", "Text labels", "Transcription", "Frame tracking"],
  },
  {
    id: "medical-data-annotation",
    badge: "Specialized Service",
    title: "Medical Data Annotation",
    intro:
      "Healthcare data needs careful handling, precise labeling, and a strong review process. We support structured annotation for medical and research datasets.",
    whatItIs:
      "Medical annotation helps make scans, reports, and clinical inputs machine-readable for research, triage support, and AI-assisted analysis.",
    howItWorks:
      "We work with a defined label guide, domain-specific QA, and careful review of edge cases so the dataset stays consistent and reliable.",
    whyItMatters:
      "Medical models depend on accuracy. Clean annotation reduces noise and helps teams move from raw clinical data to usable training sets.",
    image: medicalAnnotationImage,
    alt: "Medical data annotation workflow",
    chips: ["CT scans", "MRI", "X-ray", "Clinical notes"],
  },
  {
    id: "data-classification",
    badge: "Data Organization",
    title: "Data Classification",
    intro:
      "Data classification groups information into meaningful categories so teams can find, protect, and use data more effectively.",
    whatItIs:
      "We organize data by type, sensitivity, priority, use case, or business rule so your systems stay structured and easy to manage.",
    howItWorks:
      "We define the classification logic, label the records, validate the rules, and create a usable structure for downstream workflows.",
    whyItMatters:
      "Classification improves search, access control, compliance, and overall data quality across AI and business systems.",
    image: classificationImage,
    alt: "Data classification workflow",
    chips: ["Sensitive data", "Business rules", "Access control", "Dataset grouping"],
  },
  {
    id: "ai-model-support",
    badge: "Model Ops Support",
    title: "AI Model Support",
    intro:
      "AI model support covers the practical work needed to train, fine-tune, evaluate, and improve machine learning models.",
    whatItIs:
      "We help teams prepare datasets, check model outputs, analyze errors, and refine training assets for better performance.",
    howItWorks:
      "We support model training cycles with data review, feedback loops, evaluation support, and iteration on weak spots in the dataset.",
    whyItMatters:
      "Strong model support helps teams move faster, reduce rework, and improve the quality of production outputs.",
    image: modelSupportImage,
    alt: "AI model support workflow",
    chips: ["Training support", "Fine-tuning", "Evaluation", "Error analysis"],
  },
  {
    id: "transcription-services",
    badge: "Speech Workflow",
    title: "Transcription Services",
    intro:
      "Transcription converts spoken content from audio or video into text, making it easier to search, review, analyze, and archive.",
    whatItIs:
      "We convert conversations, interviews, meetings, calls, and recordings into accurate written transcripts.",
    howItWorks:
      "We transcribe the source file, clean up the text, align timestamps when needed, and deliver a readable output for your workflow.",
    whyItMatters:
      "Transcripts make spoken data searchable and can also support training for speech AI, customer analytics, and content workflows.",
    image: transcriptionImage,
    alt: "Transcription service workflow",
    chips: ["Audio files", "Video files", "Timestamps", "Speaker labels"],
  },
];

const heroProofPoints = [
  {
    title: "Consistency",
    text: "Structured annotation rules and quality checks.",
  },
  {
    title: "Scale",
    text: "Support for growing datasets across formats.",
  },
  {
    title: "Accuracy",
    text: "Reliable outputs for training and evaluation.",
  },
];

const heroDeliverables = [
  "Cleanly labeled datasets",
  "QA-reviewed annotation output",
  "Format-specific guidance",
  "Training-ready exports",
];

function AIServices() {
  const heroReveal = useRevealOnScroll({ threshold: 0.12 });
  const deepDiveReveal = useRevealOnScroll();
  const workflowReveal = useRevealOnScroll();
  const typesReveal = useRevealOnScroll();
  const servicesReveal = useRevealOnScroll();
  const ctaReveal = useRevealOnScroll();

  return (
    <main className="page-shell">
      <section
        ref={heroReveal.ref}
        className={`page-hero reveal-section ${heroReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="careers-hero__grid services-detail-hero">
            <div className="careers-hero__content">
              <p className="eyebrow">AI & ML Services</p>
              <h1>Data Annotation, Classification, AI Model, and Transcription</h1>
              <p className="lead">
                We build practical AI foundations with clean labels, structured data, and support for the full
                lifecycle of model-ready content. {companyInfo.shortName} can work with images, text, audio, and video.
              </p>

              <div className="careers-hero__actions">
                <Link to="/contact" className="btn">
                  Talk to Us
                </Link>
                <a href="#data-annotation" className="btn btn--secondary">
                  Start with Data Annotation
                </a>
              </div>

              <div className="career-hero__chips">
                <span>Image</span>
                <span>Text</span>
                <span>Audio</span>
                <span>Video</span>
              </div>
            </div>

            <div className="glass-panel ai-services-hero__panel">
              <div className="careers-hero__image">
                <img src={aiHeroImage} alt="AI tool service visual" loading="lazy" />
                <div className="careers-hero__image-badge">AI Ready Data</div>
              </div>
              <div className="ai-services-hero__copy">
                <div className="ai-services-hero__header">
                  <p className="eyebrow">Why it matters</p>
                  <h2>Better labels create better models.</h2>
                </div>
                <div className="ai-services-hero__proof-grid">
                  {heroProofPoints.map((item) => (
                    <div key={item.title} className="ai-services-hero__proof">
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="ai-services-hero__deliverables">
                  <p className="ai-services-hero__deliverables-title">What you get</p>
                  <div className="ai-services-hero__deliverables-list">
                    {heroDeliverables.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="data-annotation"
        ref={deepDiveReveal.ref}
        className={`section reveal-section ${deepDiveReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Data Annotation</p>
              <h2>What data annotation means, in simple terms</h2>
            </div>
            <p>
              Data annotation is the process of turning raw data into labeled data that AI models can understand.
              That can include images, text, audio, and video depending on your project.
            </p>
          </div>

          <div className="ai-deep-dive-grid">
            <article className="info-card ai-deep-dive-card ai-deep-dive-card--highlight">
              <div className="service-card-image">
                <img src={aiAnnotationImage} alt="Data annotation example" loading="lazy" />
              </div>
              <span className="info-card__badge">Core Service</span>
              <h3>How annotation helps AI learn</h3>
              <p>
                We prepare datasets for computer vision, NLP, speech AI, and multimodal systems by applying clear
                labels and repeatable QA rules.
              </p>
              <div className="ai-deep-dive-card__columns">
                <div>
                  <h4>What it is</h4>
                  <p>
                    Labeling raw files so models can detect patterns, understand context, and generate better
                    predictions.
                  </p>
                </div>
                <div>
                  <h4>How it works</h4>
                  <p>
                    Define the rules, annotate the dataset, review edge cases, and export a clean dataset for model
                    training.
                  </p>
                </div>
              </div>
              <div className="service-group-list">
                <span className="service-tag">Bounding boxes</span>
                <span className="service-tag">Entity tagging</span>
                <span className="service-tag">Transcription</span>
                <span className="service-tag">Frame labels</span>
              </div>
            </article>

            <article className="info-card ai-deep-dive-card">
              <div className="service-card-image">
                <img src={medicalAnnotationImage} alt="Medical annotation example" loading="lazy" />
              </div>
              <span className="info-card__badge">Specialized</span>
              <h3>Medical data annotation</h3>
              <p>
                Healthcare datasets need extra care. We work with medical images and clinical data using structured
                rules that help support research and model development.
              </p>
              <div className="ai-deep-dive-card__note">
                <strong>Examples:</strong> CT scans, MRI, X-ray, and clinical documentation workflows.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={workflowReveal.ref}
        className={`section reveal-section ${workflowReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Workflow</p>
              <h2>Our annotation workflow</h2>
            </div>
            <p>Simple, repeatable steps keep the output consistent and ready for training.</p>
          </div>

          <div className="careers-process-grid ai-workflow-grid">
            {annotationWorkflow.map((item) => (
              <article key={item.step} className="glass-panel careers-process-card">
                <div className="careers-process-card__top">
                  <span className="careers-process-card__step">{item.step}</span>
                  <span className="careers-process-card__meta">Stage</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={typesReveal.ref}
        className={`section reveal-section ${typesReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Annotation Types</p>
              <h2>One service, multiple data formats</h2>
            </div>
            <p>
              We can support each type separately, and later turn any one of them into its own dedicated service page
              with examples, media, and process notes.
            </p>
          </div>

          <div className="ai-types-grid">
            {annotationTypes.map((item) => (
              <article key={item.title} className="info-card ai-type-card">
                <div className="service-card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="ai-type-card__detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={servicesReveal.ref}
        className={`section reveal-section ${servicesReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AI Service Details</p>
              <h2>Breaking down each service one by one</h2>
            </div>
            <p>Each offering below has its own purpose, workflow, and typical output.</p>
          </div>

          <div className="ai-service-detail-list">
            {aiServiceDetails.map((service, index) => {
              const reverse = index % 2 === 1;

              return (
                <article
                  key={service.id}
                  className={`glass-panel ai-service-detail ${reverse ? "ai-service-detail--reverse" : ""}`}
                >
                  <div className="ai-service-detail__visual">
                    <img src={service.image} alt={service.alt} loading="lazy" />
                    <div className="ai-service-detail__visual-badge">{service.badge}</div>
                  </div>

                  <div className="ai-service-detail__content">
                    <p className="eyebrow">{service.badge}</p>
                    <h3>{service.title}</h3>
                    <p className="ai-service-detail__intro">{service.intro}</p>

                    <div className="ai-service-detail__blocks">
                      <div className="ai-service-detail__block">
                        <h4>What it is</h4>
                        <p>{service.whatItIs}</p>
                      </div>
                      <div className="ai-service-detail__block">
                        <h4>How it works</h4>
                        <p>{service.howItWorks}</p>
                      </div>
                    </div>

                    <div className="ai-service-detail__note">
                      <strong>Why it matters:</strong>
                      <span>{service.whyItMatters}</span>
                    </div>

                    <div className="ai-service-detail__chips">
                      {service.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={ctaReveal.ref}
        className={`section section--accent reveal-section ${ctaReveal.isVisible ? "is-visible" : ""}`}
      >
        <div className="container text-center">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Next Step</p>
            <h2>Want us to break down another service next?</h2>
            <p>
              We can continue one-by-one with more detail, examples, and media. If you want, we can make the next
              page about Medical Data Annotation or Data Classification first.
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

export default AIServices;

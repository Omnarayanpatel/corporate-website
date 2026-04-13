import dataAnnotationImage from "../assets/images/image_annotation.jfif";
import dataClassificationImage from "../assets/images/Data_Classification.jfif";
import dataCollectionImage from "../assets/images/data_collection.jfif";
import aiModelSupportImage from "../assets/images/ai_model_support.jfif";
import transcriptionServicesImage from "../assets/images/Transcription_Services.jfif";
import medicalAnnotationImage from "../assets/images/Medical-Image-Annotation-Tools-main.webp";
import selloraCrmImage from "../assets/images/sellora_crm_dashboard.jpeg";
import hrmsImage from "../assets/images/hrms.jfif";
import dhritiiAnnotationImage from "../assets/images/dhritii_annotation.png";

export const companyInfo = {
  name: "Dhritii.ai ",
  shortName: "Dhritii.ai",
  tagline: "Driving the Next Era of Smart Innovation",
  description:
    "Dhritii.ai Pvt. Ltd. is an AI-powered data platform and SaaS company delivering intelligent solutions for data annotation, business automation, and enterprise management.",
  address:
    "3rd Floor, Elegant Business Square, Bhanpur, Ayodhya Bypass Road, Bhopal, Madhya Pradesh - 462037",
  email: "info@dhritii.ai",
  phone: "0755-4557709",
};

export const highlights = [
  "AI-ready data operations",
  "SaaS and enterprise workflow systems",
  "Annotation, automation, and development",
  "Built for modern digital transformation",
];

export const stats = [
  { value: "AI", label: "Data and intelligence driven delivery" },
  { value: "SaaS", label: "Scalable business software mindset" },
  { value: "CRM + HRMS", label: "Enterprise management product direction" },
  { value: "Cloud", label: "Deployment-ready digital systems" },
];

export const services = [
  {
    title: "AI & ML Services",
    items: [
      "Data Annotation (Image, Text, Audio, Video)",
      "Medical Data Annotation",
      "Data Classification",
      "AI Model Support",
      "Transcription Services",
    ],
    description:
      "End-to-end AI and machine learning solutions including data labeling, model training, fine-tuning, and production deployment to accelerate your AI initiatives.",
  },
  {
    title: "Data Collection Services",
    items: [
      "Image Data Collection",
      "Text Data Collection",
      "Audio Data Collection",
      "Video Data Collection",
      "Survey & Feedback Collection",
    ],
    description:
      "Comprehensive data gathering services to build high-quality, diverse datasets for training robust AI models and machine learning systems.",
  },
  {
    title: "Development Services",
    items: [
      "Website Development",
      "Application Development",
      "Custom Software Development",
    ],
    description: "Modern digital products and custom-built systems aligned to business workflows and growth goals.",
  },
  {
    title: "Business & Cloud Services",
    items: [
      "SaaS Solutions",
      "Cloud Services",
      "Automation Solutions",
      "Security Management",
    ],
    description: "Technology infrastructure and automation support for companies moving toward scalable operations.",
  },
  {
    title: "Marketing Services",
    items: [
      "Digital Marketing",
      "Performance Marketing",
    ],
    description: "Growth-focused digital marketing support designed to improve visibility, leads, and measurable outcomes.",
  },
];

export const serviceList = services.flatMap((group) =>
  group.items.map((item) => ({ title: item, category: group.title, description: group.description }))
);

export const featuredServices = [
  {
    mediaLabel: "Vision Data",
    tone: "blue",
    badge: "AI & Data Services",
    title: "Data Annotation (Image, Text, Audio, Video)",
    description:
      "Data annotation is the process of labeling, tagging, or transcribing raw data, including images, text, audio, and video, to train Artificial Intelligence (AI) and machine learning models to recognize patterns, understand context, and make accurate predictions.",
    mediaImage: dataAnnotationImage,
    mediaAlt: "Data annotation example",
  },
  {
    mediaLabel: "Medical AI",
    tone: "green",
    badge: "AI & Data Services",
    title: "Medical Data Annotation",
    description:
      "Medical data annotation is the crucial process of labeling healthcare data, such as CT scans, MRIs, X-rays, and clinical notes, to make it machine-readable for training AI and ML models.",
    mediaImage: medicalAnnotationImage,
    mediaAlt: "Medical image annotation example",
  },
  {
    mediaLabel: "Cloud Stack",
    tone: "cyan",
    badge: "Business & Cloud Services",
    title: "Data Collection",
    description:
      "Data collection is the systematic process of gathering, measuring, and analyzing accurate information from various sources to research, solve problems, or make data-driven decisions.",
    mediaImage: dataCollectionImage,
    mediaAlt: "Data collection example",
  },
  {
    mediaLabel: "App Build",
    tone: "blue",
    badge: "Development Services",
    title: "Data Classification",
    description:
      "Data classification is the process of organizing data into categories based on its sensitivity, value, and regulatory compliance requirements",
    mediaImage: dataClassificationImage,
    mediaAlt: "Data classification example",
  },
  {
    mediaLabel: "Automation",
    tone: "green",
    badge: "AI & Data Services",
    title: "AI Model Support",
    description:
      "AI model support encompasses the infrastructure, tools, and platforms enabling the development, deployment, and utilization of machine learning models.",
    mediaImage: aiModelSupportImage,
    mediaAlt: "AI model support example",
  },
  {
    mediaLabel: "Growth Ops",
    tone: "cyan",
    badge: "AI & Data Services",
    title: "Transcription Services",
    description:
      "Transcription services convert audio or video recordings into written text, commonly used for meetings, legal, medical, or research purposes. ",
    mediaImage: transcriptionServicesImage,
    mediaAlt: "Transcription services example",
  },
];

export const products = [
  {
    title: "Dhritii.ai Annotation Software",
    status: "Live Product",
    description:
      "A focused data annotation platform built to support structured labeling workflows and scalable AI dataset preparation.",
    overview:
      "A product built for annotation teams that need consistency, speed, and quality control across large data sets.",
    features: [
      "Image and text labeling workflows",
      "Review-friendly annotation pipeline",
      "Dataset organization and export support",
    ],
    useCases: ["AI training data prep", "Internal labeling operations", "Quality-reviewed dataset delivery"],
    outcome: "Helps teams prepare structured data faster with fewer manual errors.",
    previewImage: dhritiiAnnotationImage,
    previewAlt: "Dhritii.ai annotation software dashboard",
  },
  {
    title: "Sellora CRM",
    status: "Live Product",
    description:
      "A CRM platform for lead management, customer engagement, business tracking, and centralized workflow visibility.",
    overview:
      "A CRM experience designed to help teams track leads, follow up faster, and keep customer activity organized.",
    features: [
      "Lead and customer pipeline tracking",
      "Centralized activity and follow-up view",
      "Reporting for sales and operations",
    ],
    useCases: ["Sales tracking", "Customer follow-up", "Internal pipeline visibility"],
    outcome: "Gives teams a cleaner view of customer relationships and sales progress.",
    previewImage: selloraCrmImage,
    previewAlt: "Sellora CRM dashboard screenshot",
  },
  {
    title: "HRMS",
    status: "Coming Soon",
    description:
      "An HRMS system designed to streamline employee operations, records, attendance workflows, and internal management.",
    overview:
      "An HR operations platform focused on attendance, employee records, and day-to-day workforce administration.",
    features: [
      "Employee profile and record management",
      "Attendance and workflow tracking",
      "Internal HR process automation",
    ],
    useCases: ["Employee management", "Attendance workflows", "HR process coordination"],
    outcome: "Will streamline internal HR tasks into one organized system.",
    previewImage: hrmsImage,
    previewAlt: "HRMS dashboard preview",
  },
];

export const aboutPoints = [
  "Dhritii.ai Pvt. Ltd. is a next-generation AI and technology company focused on building scalable data solutions and intelligent software products.",
  "We specialize in data annotation, AI development, and SaaS-based platforms such as CRM and HRMS systems.",
  "Our mission is to transform raw data into meaningful insights that power modern AI systems and business decisions.",
  "With a strong focus on innovation, quality, and scalability, Dhritii.ai helps organizations accelerate their digital transformation journey.",
];

export const processSteps = [
  "Understand the AI&ML problem, data challenge, or software need in practical terms.",
  "Design a fast, scalable solution flow across data, product, automation, or cloud layers.",
  "Build, validate, and optimize the final system for reliable delivery and long-term business use.",
];

export const careerPoints = [
  "Work on AI, SaaS, annotation, automation, and enterprise product workflows.",
  "Collaborate in a team that values innovation, quality, and execution speed.",
  "Grow with a company building modern data and software systems from the ground up.",
];

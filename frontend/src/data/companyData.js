export const companyInfo = {
  name: "Dhritii.ai Pvt. Ltd.",
  shortName: "Dhritii.ai",
  tagline: "AI-powered data platforms, SaaS systems, and intelligent business solutions.",
  description:
    "Dhritii.ai Pvt. Ltd. is an AI-powered data platform and SaaS company delivering intelligent solutions for data annotation, business automation, and enterprise management.",
  address:
    "3rd Floor, Elegant Business Square, Bhanpur, Ayodhya Bypass Road, Bhopal, Madhya Pradesh - 462037",
  email: "info@dhritii.ai",
  phone: "0755 494 0937",
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
    title: "AI & Data Services",
    items: [
      "Data Annotation (Image, Text, Audio, Video)",
      "Medical Data Annotation",
      "Data Collection",
      "Data Classification",
      "AI Model Support",
      "Transcription Services",
    ],
    description: "High-quality data operations that help AI teams build reliable and scalable models.",
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

export const products = [
  {
    title: "Dhritii.ai Annotation Software",
    status: "Live Product",
    description:
      "A focused data annotation platform built to support structured labeling workflows and scalable AI dataset preparation.",
  },
  {
    title: "Sellora CRM",
    status: "Live Product",
    description:
      "A CRM platform for lead management, customer engagement, business tracking, and centralized workflow visibility.",
  },
  {
    title: "HRMS",
    status: "Coming Soon",
    description:
      "An HRMS system designed to streamline employee operations, records, attendance workflows, and internal management.",
  },
];

export const aboutPoints = [
  "Dhritii.ai Pvt. Ltd. is a next-generation AI and technology company focused on building scalable data solutions and intelligent software products.",
  "We specialize in data annotation, AI development, and SaaS-based platforms such as CRM and HRMS systems.",
  "Our mission is to transform raw data into meaningful insights that power modern AI systems and business decisions.",
  "With a strong focus on innovation, quality, and scalability, Dhritii.ai helps organizations accelerate their digital transformation journey.",
];

export const processSteps = [
  "Understand the business problem, data challenge, or software need in practical terms.",
  "Design a scalable solution flow across data, product, automation, or cloud layers.",
  "Build, validate, and optimize the final system for long-term business use.",
];

export const careerPoints = [
  "Work on AI, SaaS, annotation, automation, and enterprise product workflows.",
  "Collaborate in a team that values innovation, quality, and execution speed.",
  "Grow with a company building modern data and software systems from the ground up.",
];

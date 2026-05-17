import type { FaqItem, LegalSection, NavLink, PricingPlan } from "../types/site"

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
]

export const pricingPlans: PricingPlan[] = [
  {
    name: "BASE",
    price: "$1,500",
    cadence: "/month",
    features: [
      "15 Twitter posts",
      "1 thread",
      "Monthly content themes",
      "2 revision rounds",
    ],
    buttonLabel: "Get started",
  },
  {
    name: "PREMIUM",
    price: "$3,000",
    cadence: "/month",
    features: [
      "20 Twitter posts",
      "2 threads",
      "6 LinkedIn posts (repurposed)",
      "2 revision rounds",
      "Scheduling after approval (Twitter only optional)",
    ],
    buttonLabel: "Get started",
    emphasized: true,
  },
]

export const faqs: FaqItem[] = [
  {
    question: "Why wouldn’t I just hire a full-time writer?",
    answer:
      "A full-time writer can cost over $100,000 plus overhead. This gives you a focused monthly system without long-term hiring commitments.",
  },
  {
    question: "How do I request content?",
    answer:
      "You fill the onboarding form once, and I handle everything from there. Each month is delivered in a structured batch.",
  },
  {
    question: "How do revisions work?",
    answer:
      "You get up to 2 revision rounds per monthly delivery. Revisions are included to ensure the content aligns with your voice. Feedback should be shared within 48-72 hours after delivery. Additional revisions outside scope may be charged or moved to the next cycle. ",
  },
  {
    question: "What platforms do you write for?",
    answer: "Twitter and LinkedIn depending on your plan.",
  },
  {
    question: "How fast do I receive content?",
    answer:
      "All monthly content is delivered within 5 business days after onboarding.",
  },
  {
    question: "Do I need to provide ideas?",
    answer:
      "No. I create monthly content themes based on your goals, voice, and audience.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "No refunds due to the custom nature of the work. Time and slots are reserved once payment is made.",
  },
  {
    question: "Can I pause or stop anytime?",
    answer:
      "Service is active only within the paid monthly cycle. You can choose not to renew after each cycle.",
  },
]

export const termsSections: LegalSection[] = [
  {
    title: "Agreement",
    paragraphs: [
      "By engaging Founders Pen, the client agrees to these terms and conditions including all service, payment, and delivery terms outlined in this document.",
      "Failure to comply may result in suspension or termination of services without obligation for refund of completed or ongoing work.",
    ],
  },
  {
    title: "Services",
    paragraphs: [
      "Founders Pen provides monthly ghostwriting services for Twitter and LinkedIn based on the selected plan.",
      "All services are custom created for each client and delivered digitally.",
    ],
  },
  {
    title: "Payment Terms",
    paragraphs: [
      "All payments are made monthly upfront.",
      "Accepted payments: USDT / USDC.",
      "Each subscription covers a 30 day service cycle starting from the date payment is received.",
      "Work begins only after payment confirmation.",
    ],
  },
  {
    title: "Delivery Timeline",
    paragraphs: [
      "All monthly content is delivered within 5 business days after onboarding unless otherwise communicated.",
      "Delays caused by incomplete information or late responses from the client are not the responsibility of Founders Pen.",
    ],
  },
  {
    title: "Revisions",
    paragraphs: [
      "Each monthly cycle includes up to 2 revision rounds.",
      "Revisions are meant to refine clarity, tone, and alignment, not to completely change the original direction of the content.",
      "Additional revisions outside scope may be charged or moved to the next cycle.",
    ],
  },
  {
    title: "Ownership of Content",
    paragraphs: [
      "Upon full payment, all final content delivered becomes the client's property.",
      "Founders Pen retains the right to use general frameworks, strategies, and non client specific systems for future work.",
    ],
  },
  {
    title: "Confidentiality",
    paragraphs: [
      "All client information, brand details, and content are strictly confidential.",
      "Founders Pen will not disclose, publish, or share any client work unless given written permission.",
    ],
  },
  {
    title: "Client Responsibility",
    paragraphs: [
      "Clients are responsible for providing accurate onboarding information, brand direction, and timely feedback.",
      "Failure to provide necessary inputs may affect delivery timelines or content quality.",
    ],
  },
  {
    title: "Refund Policy",
    paragraphs: [
      "Due to the custom nature of the service, all payments are non refundable once work has commenced.",
      "Refunds are not guaranteed and are reviewed at our sole discretion.",
    ],
  },
  {
    title: "Service Limitations",
    paragraphs: [
      "This service does not include engagement such as replies, DMs, or community management.",
      "Paid advertising or distribution.",
      "Growth or marketing services outside content creation.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "Clients may choose not to renew after each monthly cycle.",
      "No long term commitment is required unless otherwise agreed in writing.",
    ],
  },
]

export const privacySections: LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "Founders Pen respects your privacy and is committed to protecting any personal information you share when using our website or services.",
      "This policy explains what we collect, how we use it, and your rights.",
      "By using this website, you agree to this policy.",
    ],
  },
  {
    title: "Information Collected",
    paragraphs: [
      "Name.",
      "Email address.",
      "Payment details processed securely by third party providers.",
      "Information you provide in forms or onboarding questionnaires.",
      "Basic website usage data such as pages visited.",
    ],
  },
  {
    title: "Use of Information",
    paragraphs: [
      "Deliver your ghostwriting services.",
      "Communicate with you about your project.",
      "Process payments.",
      "Improve services.",
      "Handle support or revisions.",
    ],
  },
  {
    title: "Payments",
    paragraphs: [
      "All payments are handled through secure third party payment processors.",
      "We do not store full payment details on our servers.",
    ],
  },
  {
    title: "Data Sharing",
    paragraphs: [
      "We only share your information when necessary, such as payment processors, tools used to deliver your service, or legal requirements if needed.",
      "We never share your work publicly without permission.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We keep your information only as long as needed to deliver your service, maintain records for business purposes, and meet legal obligations.",
      "You can request deletion of your data after service completion.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We take reasonable steps to protect your data.",
      "However, no online system is 100% secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Request access to your data.",
      "Request correction of your data.",
      "Request deletion of your data after service.",
      "Contact us and we will handle it.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "We may use cookies to improve your browsing experience and understand site usage.",
      "You can disable cookies in your browser settings.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time. Updates will always be posted on this page.",
    ],
  },
]

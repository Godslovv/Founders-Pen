export type NavLink = {
  label: string
  href: string
}

export type PricingPlan = {
  name: string
  price: string
  cadence: string
  features: string[]
  buttonLabel: string
  emphasized?: boolean
}

export type FaqItem = {
  question: string
  answer: string
}

export type LegalSection = {
  title: string
  paragraphs: string[]
}

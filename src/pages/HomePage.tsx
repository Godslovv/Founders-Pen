import PageLayout from "../layouts/PageLayout"
import About from "../sections/About"
import Cta from "../sections/Cta"
import Faqs from "../sections/Faqs"
import Hero from "../sections/Hero"
import PaymentTerms from "../sections/PaymentTerms"
import Pricing from "../sections/Pricing"
import Team from "../sections/Team"
import Testimonials from "../sections/Testimonials"

const HomePage = () => {
  return (
    <PageLayout variant="dark">
      <Hero />
      <main className="bg-white">
        <About />
        <Team />
        <Testimonials />
        <Pricing />
        <PaymentTerms />
        <Faqs />
        <Cta />
      </main>
    </PageLayout>
  )
}

export default HomePage

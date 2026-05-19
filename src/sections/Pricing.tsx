import SectionHeading from "../components/SectionHeading"
import PricingCard from "../components/PricingCard"
import { pricingPlans } from "../constants/content"

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <SectionHeading title="Pricing" />
        <div className="grid justify-items-center gap-10 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="text-md italic text-center text-muted-foreground text-slate-500">
          Note: Engagement (replies, DMs, Community Management) is not included
        </p>
      </div>
    </section>
  )
}

export default Pricing

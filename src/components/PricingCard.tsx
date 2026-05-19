import type { PricingPlan } from "../types/site"
import Button from "./Button"

type PricingCardProps = {
  plan: PricingPlan
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <article
      className={`flex h-full flex-col lg:w-2/3 w-full items-center gap-6 rounded-t-[32px] rounded-b-[19px] bg-gradient-to-b from-[#1b264d] via-[#0b1020] to-[#0a0f1c] px-8 py-12 text-center text-white shadow-[0_30px_70px_rgba(12,18,38,0.35)]
      }`}
    >
      <div className="flex items-center justify-center">
        <span className="rounded-2xl bg-black/70 px-10 py-2 text-lg text-white shadow-[0_0_16px_rgba(80,120,255,0.55),0_0_36px_rgba(80,120,255,0.34),0_0_72px_rgba(80,120,255,0.22)]">
          {plan.name}
        </span>
      </div>
      <div>
        <p className="text-3xl font-semibold text-white sm:text-4xl">
          {plan.price}
          <span className="text-sm font-normal text-white/70">{plan.cadence}</span>
        </p>
      </div>
      <ul className="space-y-2 text-base text-white/80">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center justify-center gap-2">
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button variant="light" href="https://tally.so/r/68rbvA">{plan.buttonLabel}</Button>
      </div>
    </article>
  )
}

export default PricingCard

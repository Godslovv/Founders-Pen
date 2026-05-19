import SectionHeading from "../components/SectionHeading"

const PaymentTerms = () => {
  const nextStep = "→";
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading title="Payment Terms" align="center" />
        <ul className="mt-6 space-y-3 text-lg text-slate-600">
          <li>Monthly upfront (USDT/USDC accepted).</li>
          <li>Each subscription runs for 30 days from payment date.</li>
          <li><p className="font-extrabold inline">Example</p>: Pay Jan 3 {nextStep} renews Feb 3.</li>
          <li>Work begins after payment is received.</li>
        </ul>
      </div>
    </section>
  )
}

export default PaymentTerms

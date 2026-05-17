import SectionHeading from "../components/SectionHeading"
import FaqItem from "../components/FaqItem"
import { faqs } from "../constants/content"

const Faqs = () => {
  return (
    <section id="faqs" className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6">
        <SectionHeading title="FAQs" />
        <div className="space-y-2">
          {faqs.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs

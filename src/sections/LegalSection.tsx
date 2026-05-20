import type { LegalSection as LegalSectionType } from "../types/site"

type LegalSectionProps = {
  section: LegalSectionType
}

const LegalSection = ({ section }: LegalSectionProps) => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#070c23]">{section.title}</h2>
      <div className="mt-3 space-y-3 text-sm text-[#070c23]">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default LegalSection

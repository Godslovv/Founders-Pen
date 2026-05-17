import LegalHeader from "./LegalHeader"
import LegalSection from "./LegalSection"
import type { LegalSection as LegalSectionType } from "../types/site"

type LegalPageContentProps = {
  title: string
  intro?: string
  sections: LegalSectionType[]
  contactLine: string
}

const LegalPageContent = ({ title, intro, sections, contactLine }: LegalPageContentProps) => {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <LegalHeader title={title} />
        {intro ? <p className="text-sm text-slate-600">{intro}</p> : null}
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <LegalSection key={section.title} section={section} />
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-600">{contactLine}</p>
      </div>
    </main>
  )
}

export default LegalPageContent

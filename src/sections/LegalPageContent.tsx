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
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <LegalHeader title={title} />
        {intro ? <p className="text-sm text-[#070c23]">{intro}</p> : null}
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <LegalSection key={section.title} section={section} />
          ))}
        </div>
        <p className="mt-10 text-sm text-[#070c23]">{contactLine} <a href="mailto:founderspenhq@gmail.com" className="text-blue-500 hover:underline">founderspenhq@gmail.com</a></p>
      </div>
    </main>
  )
}

export default LegalPageContent

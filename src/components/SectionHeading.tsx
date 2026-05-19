import type { ReactNode } from "react"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: "left" | "center"
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left"

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl font-semibold text-[#11162b] sm:text-5xl mb-2">{title}</h2>
      {subtitle ? <p className="max-w-full text-xl text-slate-600">{subtitle}</p> : null}
    </div>
  )
}

export default SectionHeading

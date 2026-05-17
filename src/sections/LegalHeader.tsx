const LegalHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-8">
      <h1 className="text-5xl font-semibold text-[#0c1226]">{title}</h1>
      <p className="mt-5 text-sm text-slate-600">Last updated: May 9, 2026</p>
    </div>
  )
}

export default LegalHeader

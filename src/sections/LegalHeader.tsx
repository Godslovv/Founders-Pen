const LegalHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-8">
      <h1 className="text-6xl font-bold text-[#0c1226] mb-8" style={{ wordSpacing: "0.3em" }}>{title}</h1>
      <p className="mt-5 text-md text-slate-600">Last updated: May 9, 2026</p>
    </div>
  )
}

export default LegalHeader

const LegalHeader = ({ title }: { title: string }) => {
  return (
    <div className="mb-8">
      <h1 className="text-6xl font-bold text-[#070c23] mb-8" style={{ wordSpacing: "0.3em" }}>{title}</h1>
      <p className="mt-5 text-md text-[#070c23]">Last updated: May 9, 2026</p>
    </div>
  )
}

export default LegalHeader

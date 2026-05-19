import type { FaqItem as FaqItemType } from "../types/site"

type FaqItemProps = {
  item: FaqItemType
}

const FaqItem = ({ item }: FaqItemProps) => {
  return (
    <details className="group border-b border-[#0c1226]/15 py-4">
      <summary className="font-display flex cursor-pointer items-center justify-between text-lg font-semibold text-[#0c1226]">
        {item.question}
        <span className="text-2xl text-slate-400 transition group-open:rotate-180">^</span>
      </summary>
      <p className="mt-3 text-xl text-slate-600">{item.answer}</p>
    </details>
  )
}

export default FaqItem

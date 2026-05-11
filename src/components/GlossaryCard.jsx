export default function GlossaryCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-slate-950">{item.term}</h3>
          <p className="hanja mt-1 text-lg text-amber-700">{item.hanja}</p>
        </div>
      </div>
      <p className="mt-4 leading-8 text-slate-700">{item.definition}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

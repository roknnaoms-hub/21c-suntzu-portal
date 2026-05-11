export default function ApplicationCard({ item }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
      <p className="mt-2 font-semibold text-amber-700">{item.subtitle}</p>
      <p className="mt-4 leading-8 text-slate-700">{item.summary}</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {item.sections.map((section) => (
          <div key={section} className="rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-700">
            {section}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.linkedConcepts.map((concept) => (
          <span key={concept} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
            {concept}
          </span>
        ))}
      </div>
    </article>
  );
}

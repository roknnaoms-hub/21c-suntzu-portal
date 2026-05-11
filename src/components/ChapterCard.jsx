import { Link } from "react-router-dom";

export default function ChapterCard({ chapter }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-sm font-semibold text-amber-700">
        제{chapter.number}편 · <span className="hanja">{chapter.titleHanja}</span>
      </div>
      <h3 className="mt-2 text-2xl font-black text-slate-950">{chapter.titleKo}</h3>
      <p className="mt-2 text-base font-semibold text-slate-700">{chapter.subtitle}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{chapter.corePrinciple}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {chapter.keywords.map((keyword) => (
          <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {keyword}
          </span>
        ))}
      </div>
      <Link to={`/chapters/${chapter.id}`} className="mt-5 inline-flex font-bold text-amber-700 hover:text-amber-900">
        자세히 보기 →
      </Link>
    </article>
  );
}

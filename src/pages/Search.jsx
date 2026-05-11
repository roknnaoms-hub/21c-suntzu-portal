import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import SearchBox from "../components/SearchBox.jsx";
import { searchPortal } from "../utils/search";
import { typeLabel } from "../utils/format";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchPortal(query), [query]);

  return (
    <div>
      <SectionTitle
        eyebrow="Search"
        title="통합 검색"
        description="편명, 원문, 독음, 해석, 교훈, 개념어, 현대 적용 영역을 통합 검색합니다."
      />
      <SearchBox value={query} onChange={setQuery} placeholder="예: 지피지기, 묘산, 리더십, AI, 허실" />
      <div className="mt-8 space-y-4">
        {query && results.length === 0 && <p className="rounded-2xl bg-white p-6 text-slate-600">검색 결과가 없습니다.</p>}
        {results.map((item) => (
          <article key={`${item.type}-${item.id ?? item.term}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">{typeLabel(item.type)}</div>
            <h3 className="mt-2 text-xl font-black">{item.title ?? item.titleKo ?? item.term}</h3>
            <p className="mt-3 line-clamp-3 leading-7 text-slate-700">
              {item.corePrinciple ?? item.lesson ?? item.summary ?? item.definition}
            </p>
            {item.type === "chapter" && <Link to={`/chapters/${item.id}`} className="mt-4 inline-flex font-bold text-amber-700">자세히 보기 →</Link>}
          </article>
        ))}
      </div>
    </div>
  );
}

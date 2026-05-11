export default function PhraseCard({ phrase }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-bold text-amber-700">{phrase.chapterTitle} · {phrase.theme}</div>
      <section className="mt-5">
        <h4 className="font-bold text-slate-950">① 원문</h4>
        <p className="hanja mt-2 text-xl leading-9 text-slate-900">{phrase.original}</p>
      </section>
      <section className="mt-5">
        <h4 className="font-bold text-slate-950">② 한글 독음</h4>
        <p className="mt-2 leading-7 text-slate-700">{phrase.reading}</p>
      </section>
      <section className="mt-5">
        <h4 className="font-bold text-slate-950">③ 해석</h4>
        <p className="mt-2 leading-8 text-slate-700">{phrase.translation}</p>
      </section>
      <section className="mt-5 rounded-2xl bg-amber-50 p-4">
        <h4 className="font-bold text-amber-900">④ 교훈</h4>
        <p className="mt-2 leading-8 text-amber-950">{phrase.lesson}</p>
      </section>
    </article>
  );
}

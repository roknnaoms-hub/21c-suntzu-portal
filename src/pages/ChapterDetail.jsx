import { Link, useParams } from "react-router-dom";
import { chapters } from "../data/chapters";

export default function ChapterDetail() {
  const { chapterId } = useParams();
  const chapter = chapters.find((item) => item.id === chapterId);

  if (!chapter) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-black">편을 찾을 수 없습니다.</h1>
        <Link to="/chapters" className="mt-4 inline-flex text-amber-700">13편 목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <Link to="/chapters" className="text-sm font-bold text-amber-700">← 13편 목록</Link>
      <div className="mt-6 text-sm font-bold text-amber-700">제{chapter.number}편 · <span className="hanja">{chapter.titleHanja}</span></div>
      <h1 className="mt-2 text-4xl font-black text-slate-950">{chapter.titleKo}</h1>
      <p className="mt-3 text-xl font-semibold text-slate-700">{chapter.subtitle}</p>
      <p className="mt-6 rounded-2xl bg-slate-50 p-5 leading-8 text-slate-700">{chapter.corePrinciple}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-black">실천 질문</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {chapter.practiceQuestions.map((question) => (
            <li key={question} className="rounded-2xl bg-amber-50 p-4 font-semibold leading-7 text-amber-950">{question}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-black">① 원문</h3>
          <p className="hanja mt-3 text-2xl leading-10">{chapter.original}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-black">② 한글 독음</h3>
          <p className="mt-3 leading-8 text-slate-700">{chapter.reading}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <h3 className="font-black">③ 해석</h3>
          <p className="mt-3 leading-8 text-slate-700">{chapter.translation}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-black text-amber-950">④ 교훈</h3>
          <p className="mt-3 leading-8 text-amber-950">{chapter.lesson}</p>
        </div>
      </section>
    </article>
  );
}

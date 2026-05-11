import { Link } from "react-router-dom";
import { BookOpen, Compass, ShieldCheck } from "lucide-react";
import { bookInfo } from "../data/bookInfo";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
      <div className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-amber-400/40 px-4 py-2 text-sm font-semibold text-amber-200">
            전략 · 통찰 · 판단 · 실행
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            {bookInfo.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
            {bookInfo.subtitle}. 손자병법을 삶, 조직, 경영, 인공지능, ISO 경영시스템, 국가안보의 판단 언어로 다시 읽습니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-amber-500 px-6 py-3 font-bold text-slate-950 hover:bg-amber-400">
              도서 소개 보기
            </Link>
            <Link to="/chapters" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">
              13편 읽기
            </Link>
            <Link to="/applications" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10">
              현대 적용 프레임
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            [BookOpen, "먼저 살피라", "중대한 결정은 감정이 아니라 기준과 계산에서 출발한다."],
            [ShieldCheck, "온전하게 보전하라", "승리 이후에도 사람·자원·신뢰·미래 가능성을 남겨야 한다."],
            [Compass, "형세를 만들어라", "힘의 크기보다 힘이 작동하는 조건을 설계해야 한다."]
          ].map(([Icon, title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Icon className="h-6 w-6 text-amber-300" />
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

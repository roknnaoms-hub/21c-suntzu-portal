import SectionTitle from "../components/SectionTitle.jsx";
import { bookInfo } from "../data/bookInfo";

export default function About() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="About the Book"
        title="도서 소개"
        description="고전 전략과 현대 의사결정, 인공지능, ISO 경영시스템, 국가안보를 연결하는 실천적 손자병법 해설서입니다."
      />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-slate-950 via-slate-800 to-amber-800 p-8 text-white shadow-inner">
            <div className="hanja text-lg text-amber-200">孫子兵法</div>
            <h2 className="mt-8 text-4xl font-black leading-tight">21세기 현대인을 위한<br />손자병법</h2>
            <p className="mt-8 text-lg text-amber-100">{bookInfo.subtitle}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm prose-korean">
          <h3 className="text-2xl font-black">{bookInfo.title}</h3>
          <p className="mt-4">{bookInfo.description}</p>
          <p>
            이 웹포털은 도서 전체 원고를 공개하는 저장소가 아니라, 출판 홍보와 학습 진입을 위한 샘플형 지식포털입니다. 손자병법 13편의 핵심 원리, 대표 구문, 현대 적용 프레임, 핵심 개념어를 구조적으로 제공합니다.
          </p>
          <h4 className="mt-8 text-xl font-black">저자</h4>
          <p>
            {bookInfo.author} · {bookInfo.organization}. 해군 작전현장의 판단과 리더십 경험, 인공지능·빅데이터·국방 R&D·ISO 국제표준 관점을 바탕으로 손자병법의 현대적 의미를 연구하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

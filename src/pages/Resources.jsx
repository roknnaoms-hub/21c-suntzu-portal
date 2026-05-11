import SectionTitle from "../components/SectionTitle.jsx";
import { resources } from "../data/resources";

export default function Resources() {
  return (
    <div>
      <SectionTitle
        eyebrow="Resources"
        title="자료실"
        description="표지 이미지, 샘플 PDF, 카드뉴스, 강의자료 등을 연결할 수 있는 영역입니다. 전체 출판 원고는 공개 저장소에 업로드하지 않는 것을 권장합니다."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {resources.map((resource) => (
          <article key={resource.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold text-amber-700">{resource.type}</div>
            <h3 className="mt-2 text-2xl font-black">{resource.title}</h3>
            <p className="mt-3 leading-8 text-slate-700">{resource.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

import SectionTitle from "../components/SectionTitle.jsx";
import { bookInfo } from "../data/bookInfo";

export default function Contact() {
  return (
    <div>
      <SectionTitle
        eyebrow="Contact"
        title="문의"
        description="출판, 강의, 웹포털 확장, RAG 챗봇 구축 문의를 위한 안내 영역입니다."
      />
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-black">{bookInfo.organization}</h3>
        <p className="mt-4 leading-8 text-slate-700">
          본 페이지는 정적 웹포털 MVP입니다. 실제 배포 시에는 이메일, 연구원 홈페이지, GitHub 저장소 링크를 추가하십시오.
        </p>
      </div>
    </div>
  );
}

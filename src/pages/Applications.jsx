import SectionTitle from "../components/SectionTitle.jsx";
import ApplicationCard from "../components/ApplicationCard.jsx";
import { applications } from "../data/applications";

export default function Applications() {
  return (
    <div>
      <SectionTitle
        eyebrow="Application Framework"
        title="21세기 현대 적용 프레임"
        description="손자병법을 개인의 삶, 조직 리더십, 경영전략, 인공지능, ISO 경영시스템, 국가안보로 확장합니다."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {applications.map((item) => (
          <ApplicationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

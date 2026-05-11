import Hero from "../components/Hero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ChapterCard from "../components/ChapterCard.jsx";
import ApplicationCard from "../components/ApplicationCard.jsx";
import { chapters } from "../data/chapters";
import { applications } from "../data/applications";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <section>
        <SectionTitle
          eyebrow="Sunzi 13 Chapters"
          title="손자병법 13편 핵심 해설"
          description="각 편의 핵심 원리와 현대적 부제를 카드형으로 탐색합니다."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chapters.slice(0, 6).map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>
      <section>
        <SectionTitle
          eyebrow="Modern Application"
          title="21세기 현대 적용 프레임"
          description="개인의 삶, 리더십, 경영전략, 인공지능, ISO, 국가안보 관점으로 손자병법을 적용합니다."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {applications.slice(0, 2).map((item) => (
            <ApplicationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

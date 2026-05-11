import SectionTitle from "../components/SectionTitle.jsx";
import ChapterCard from "../components/ChapterCard.jsx";
import { chapters } from "../data/chapters";

export default function Chapters() {
  return (
    <div>
      <SectionTitle
        eyebrow="13 Chapters"
        title="손자병법 13편"
        description="각 편의 핵심 원리, 키워드, 실천 질문을 중심으로 손자병법을 현대적으로 탐색합니다."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}

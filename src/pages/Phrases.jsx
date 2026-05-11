import SectionTitle from "../components/SectionTitle.jsx";
import PhraseCard from "../components/PhraseCard.jsx";
import { phrases } from "../data/phrases";

export default function Phrases() {
  return (
    <div>
      <SectionTitle
        eyebrow="Original · Reading · Meaning · Lesson"
        title="구문별 해설"
        description="대표 구문을 원문, 한글 독음, 자연스러운 해석, 현대적 교훈의 네 단계로 제공합니다."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {phrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
      </div>
    </div>
  );
}

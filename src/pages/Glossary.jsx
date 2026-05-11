import SectionTitle from "../components/SectionTitle.jsx";
import GlossaryCard from "../components/GlossaryCard.jsx";
import { glossary } from "../data/glossary";

export default function Glossary() {
  return (
    <div>
      <SectionTitle
        eyebrow="Glossary"
        title="핵심 개념어"
        description="손자병법을 현대 전략 언어로 읽기 위한 핵심 개념어 사전입니다."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {glossary.map((item) => (
          <GlossaryCard key={item.term} item={item} />
        ))}
      </div>
    </div>
  );
}

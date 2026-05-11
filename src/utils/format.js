export function typeLabel(type) {
  const labels = {
    chapter: "편별 해설",
    phrase: "구문 해설",
    application: "현대 적용",
    glossary: "개념어"
  };
  return labels[type] ?? type;
}

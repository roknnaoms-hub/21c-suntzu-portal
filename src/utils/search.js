import Fuse from "fuse.js";
import { chapters } from "../data/chapters";
import { phrases } from "../data/phrases";
import { applications } from "../data/applications";
import { glossary } from "../data/glossary";

export const searchData = [
  ...chapters.map((item) => ({ type: "chapter", title: item.titleKo, ...item })),
  ...phrases.map((item) => ({ type: "phrase", title: item.theme, ...item })),
  ...applications.map((item) => ({ type: "application", ...item })),
  ...glossary.map((item) => ({ type: "glossary", title: item.term, ...item }))
];

export const fuse = new Fuse(searchData, {
  includeScore: true,
  threshold: 0.35,
  keys: [
    "title", "titleKo", "titleHanja", "subtitle", "keywords", "corePrinciple",
    "original", "reading", "translation", "lesson", "sections", "summary",
    "term", "hanja", "definition", "tags", "applicationTags"
  ]
});

export function searchPortal(query) {
  if (!query?.trim()) return [];
  return fuse.search(query.trim()).map((result) => result.item);
}

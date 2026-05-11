import { Search } from "lucide-react";

export default function SearchBox({ value, onChange, placeholder = "검색어를 입력하세요" }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <Search className="h-5 w-5 text-slate-400" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
      />
    </label>
  );
}

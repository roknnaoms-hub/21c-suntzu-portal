import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react";

const navItems = [
  ["/about", "도서 소개"],
  ["/chapters", "13편"],
  ["/phrases", "구문 해설"],
  ["/applications", "현대 적용"],
  ["/glossary", "개념어"],
  ["/resources", "자료실"]
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group">
          <div className="text-sm font-semibold text-amber-700">孫子兵法</div>
          <div className="text-base font-black tracking-tight text-slate-950 group-hover:text-amber-700">
            21세기 손자병법
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/search"
          className="inline-flex items-center gap-2 rounded-full bg-amber-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-amber-800"
        >
          <Search className="h-4 w-4" />
          검색
        </Link>
      </div>
    </header>
  );
}

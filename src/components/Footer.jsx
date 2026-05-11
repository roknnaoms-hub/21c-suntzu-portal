import { bookInfo } from "../data/bookInfo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="font-bold text-slate-900">{bookInfo.title}</div>
        <p className="mt-2 max-w-3xl leading-7">{bookInfo.copyright}</p>
        <p className="mt-4">© {new Date().getFullYear()} {bookInfo.author}. All rights reserved.</p>
      </div>
    </footer>
  );
}

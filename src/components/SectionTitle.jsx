export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      {eyebrow && <div className="text-sm font-bold uppercase tracking-widest text-amber-700">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{description}</p>}
    </div>
  );
}

const stats = [
  { value: '4+', label: 'Years of Practice' },
  { value: '7',  label: 'Tools Mastered' },
  { value: '4',  label: 'Design Categories' },
  { value: '∞',  label: 'Creative Ideas' },
];

export default function StatsBar() {
  return (
    <section className="border-y border-white/[0.07] bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group py-10 bg-[#0a0a0a]">
            <p className="font-display text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-brand transition-colors duration-400">
              {stat.value}
            </p>
            <p className="text-[10px] tracking-[0.4em] text-white/25 uppercase mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

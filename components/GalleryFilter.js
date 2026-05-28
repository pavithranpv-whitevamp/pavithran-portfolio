'use client';

export default function GalleryFilter({ categories, active, onChange }) {
  return (
    <div className="mb-11 md:mb-13">
      <p className="text-[9px] tracking-[0.5em] text-white/35 uppercase mb-5.5">
        Filter by category
      </p>

      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(cat)}
              className={`
                relative text-[10px] sm:text-[11px] tracking-[0.22em] uppercase px-4 sm:px-5 py-2.5
                border overflow-hidden
                motion-safe:transition-all motion-safe:duration-280 motion-safe:ease-out
                ${isActive
                  ? 'bg-brand/11 border-brand text-white shadow-[0_0_22px_rgba(233,69,96,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]'
                  : 'bg-transparent border-white/[0.12] text-white/50 hover:border-white/28 hover:text-white/85 active:scale-[0.97]'
                }
              `}
            >
              {isActive && (
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(233,69,96,0.1), transparent 60%)' }}
                />
              )}
              <span className="relative z-10">{cat}</span>
              {isActive && (
                <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-brand/85" />
              )}
            </button>
          );
        })}
      </div>

      {/* Progress line — shows how far through the category list */}
      <div className="mt-8 w-full h-px bg-white/[0.08] relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand/75 to-transparent motion-safe:transition-[width] motion-safe:duration-520 motion-safe:ease-out"
          style={{
            width: `${Math.max(8, (Math.max(0, categories.indexOf(active)) / Math.max(1, categories.length - 1)) * 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Admin() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-xs tracking-[0.4em] text-brand uppercase mb-4">Restricted</p>
        <h1 className="font-display text-6xl md:text-8xl tracking-widest text-white">ADMIN</h1>
        <p className="text-muted mt-4">Portfolio content is managed in Sanity Studio.</p>
        <Link
          href="/studio"
          className="mt-8 inline-flex border border-white/15 px-6 py-3 text-xs tracking-[0.25em] uppercase text-white/70 hover:border-brand hover:text-white transition-colors"
        >
          Open Studio
        </Link>
      </div>
    </main>
  );
}

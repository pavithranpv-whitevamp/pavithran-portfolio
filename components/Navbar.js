'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ─────────────────────────── */}
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.2em] text-white hover:text-brand transition-colors duration-200"
        >
          PAVITHRAN<span className="text-brand">.</span>
        </Link>

        {/* ── Desktop Links ─────────────────── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 relative group ${
                  pathname === link.href ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-brand transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Hire Me CTA (desktop) ──────────── */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase border border-brand text-brand px-5 py-2 hover:bg-brand hover:text-white transition-all duration-200"
        >
          Hire Me
        </Link>

        {/* ── Mobile Toggle ─────────────────── */}
        <button
          className="md:hidden text-white hover:text-brand transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ───────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.25em] uppercase transition-colors ${
                pathname === link.href ? 'text-brand' : 'text-muted hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-[0.15em] uppercase border border-brand text-brand px-5 py-2 text-center hover:bg-brand hover:text-white transition-all duration-200 mt-2"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

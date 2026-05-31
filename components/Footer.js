import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ig_whitevamp/',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pavithran-e-wv9465445/',
    icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@pvkcreationz',
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 mt-20">

      {/* ── Top section ──────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand column */}
        <div>
          <p className="font-display text-3xl tracking-[0.2em] text-white mb-3">
            PAVITHRAN<span className="text-brand">.</span>
          </p>
          <p className="text-muted text-sm leading-relaxed mb-5">
            Crafting visuals that move, connect, and inspire.
          </p>
          <div className="flex items-center gap-2 text-muted text-xs">
            <MapPin size={13} className="text-brand flex-shrink-0" />
            <span>Tirupur, Tamil Nadu</span>
          </div>
          <div className="flex items-center gap-2 text-muted text-xs mt-2">
            <Mail size={13} className="text-brand flex-shrink-0" />
            <a
              href="mailto:Pavithranwv@gmail.com"
              className="hover:text-white transition-colors"
            >
              Pavithranwv@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-white hover:pl-1 transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social column */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-5">Follow</p>
          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-white group transition-colors"
              >
                <s.icon size={16} className="group-hover:text-brand transition-colors" />
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────── */}
      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Pavithran E. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Graphic Designer & Motion Graphics Video Editor
          </p>
        </div>
      </div>

    </footer>
  );
}

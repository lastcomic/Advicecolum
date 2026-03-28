"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-cream border-b-4 border-gold">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-heading font-bold tracking-wide text-cream">
            OLD AGE UNIVERSITY
          </span>
          <span className="text-xs text-gold tracking-widest uppercase">
            Developing Minds for the Back Nine
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <Link href="/" className="text-cream/80 hover:text-gold transition-colors">Home</Link>
          <Link href="/packet" className="text-cream/80 hover:text-gold transition-colors">The Packet</Link>
          <Link href="/advisor" className="text-cream/80 hover:text-gold transition-colors">Course Advisor</Link>
          <Link href="/advice" className="text-cream/80 hover:text-gold transition-colors">The Second Opinion</Link>
          <Link href="/about" className="text-cream/80 hover:text-gold transition-colors">About</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-navy-dark px-6 pb-4 flex flex-col gap-3 text-sm uppercase tracking-wider">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-gold">Home</Link>
          <Link href="/packet" onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-gold">The Packet</Link>
          <Link href="/advisor" onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-gold">Course Advisor</Link>
          <Link href="/advice" onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-gold">The Second Opinion</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-gold">About</Link>
        </nav>
      )}
    </header>
  );
}

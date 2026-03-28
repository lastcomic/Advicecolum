import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70 border-t-4 border-gold">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg text-cream mb-2">OLD AGE UNIVERSITY</h3>
            <p className="text-sm text-gold">Developing Minds for the Back Nine</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cream mb-3">Pages</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <Link href="/packet" className="hover:text-gold transition-colors">The Packet</Link>
              <Link href="/advisor" className="hover:text-gold transition-colors">Course Advisor</Link>
              <Link href="/advice" className="hover:text-gold transition-colors">The Second Opinion</Link>
              <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cream mb-3">Connect</h4>
            <p className="text-sm">oldageuniversity.com</p>
            <p className="text-sm">@oldageuniversity</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-cream/10 text-center text-xs">
          &copy; {new Date().getFullYear()} Old Age University. All rights reserved. No refunds on wisdom.
        </div>
      </div>
    </footer>
  );
}

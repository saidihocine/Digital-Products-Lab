import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        aria-label="التنقل الرئيسي"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-ink"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Leaf className="h-4 w-4" aria-hidden="true" />
          </span>
          مساحة ورق
        </Link>
        <a
          href="/#products"
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          تصفّح القوالب <span aria-hidden="true">←</span>
        </a>
      </nav>
    </header>
  );
}

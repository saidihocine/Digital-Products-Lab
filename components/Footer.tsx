import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="font-medium text-ink">
          مساحة ورق
        </Link>
        <p>قوالب ورقية بسيطة لتخطيط أهدأ ويوم أوضح.</p>
        <a
          href="#top"
          className="w-fit underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          العودة إلى الأعلى
        </a>
      </div>
    </footer>
  );
}

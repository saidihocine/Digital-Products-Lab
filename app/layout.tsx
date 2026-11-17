import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'مساحة ورق | أدوات تخطيط وكتابة بسيطة',
  description:
    'قوالب ورقية هادئة لتخطيط أسبوعك، تدوين أفكارك، ومتابعة عاداتك اليومية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

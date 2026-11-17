import { getProductBySlug } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      dir="rtl"
      className="mx-auto max-w-4xl px-6 py-16 bg-[#F8F7F4] min-h-screen"
    >
      <Link href="/" className="text-sm text-[#575650] hover:underline">
        ← العودة للرئيسية
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-[#1C1C1A]">
        {product.title}
      </h1>
      <p className="mt-2 text-[#575650]">{product.subtitle}</p>
      <img
        src={product.image}
        alt={product.imageAlt}
        className="mt-8 w-full rounded-xl border border-[#E5E2D9]"
      />
      <p className="mt-6 leading-relaxed text-[#575650]">
        {product.fullDescription}
      </p>
      <div className="mt-10">
        <span className="inline-block rounded-lg bg-[#1C1C1A] px-6 py-3 text-white">
          تحميل PDF (قريبًا)
        </span>
      </div>
    </main>
  );
}
